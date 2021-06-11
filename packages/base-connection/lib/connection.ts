/* eslint-disable @typescript-eslint/ban-types */
import {
  Emits,
  ConnectionOptions,
  RequestOptions,
  ConnectionSettings,
  MESSAGE_TYPE,
  Message,
  Promises,
  MC_EVENTS,
} from './types'
export class Connection {
  public connected = false
  public id!: string | null
  protected port!: MessagePort
  private backlog: Array<Message> = []
  protected promises: Promises = {}
  private emitters: Emits = {}
  protected options: ConnectionSettings
  protected connectionTimeout!: number
  protected connectionStep = ''
  protected messageListener!: any
  protected readonly defaultOptions: ConnectionSettings = {
    window: window,
    connectionTimeout: 2000,
    timeout: 200,
    debug: false,
    onload: true,
    clientInitiates: false,
    targetOrigin: '*',
  }

  constructor(options: ConnectionOptions = {}) {
    this.options = { ...this.defaultOptions, ...options }
  }

  public emit(event: string, payload?: any): Connection {
    this.message({
      type: MESSAGE_TYPE.EMIT,
      event,
      payload,
    })
    return this
  }

  public on(event: string, callback: Function): Connection {
    if (this.emitters[event] && Array.isArray(this.emitters[event])) {
      this.emitters[event].push(callback)
    } else {
      this.emitters[event] = [callback]
    }
    return this
  }

  public request<T = any>(
    event: string,
    payload?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      const uuid: string = this.uuidv4()
      const timeout = this.getRequestTimeout(options.timeout)
      let ct: number
      if (timeout !== false && typeof timeout === 'number') {
        ct = window.setTimeout(() => reject('timeout'), timeout)
      }
      this.promises[uuid] = {
        resolve: (resolvedData: T) => {
          resolve(resolvedData)
          if (ct) {
            clearTimeout(ct)
          }
        },
        reject: (error: any) => {
          reject(error)
          if (ct) {
            clearTimeout(ct)
          }
        },
      }
      this.message({
        type: MESSAGE_TYPE.REQUEST,
        event: event,
        id: uuid,
        payload,
      })
    })
  }

  public close(): void {
    if (this.connected) {
      this.port.close()
      this.connected = false
    }
    if (this.messageListener) {
      this.options.window.removeEventListener(
        'message',
        this.messageListener,
        false
      )
    }
  }

  protected setConnectionTimeout(): void {
    clearTimeout(this.connectionTimeout)
    if (this.options.connectionTimeout !== false) {
      this.connectionTimeout = window.setTimeout(() => {
        if (this.messageListener) {
          this.options.window.removeEventListener(
            'message',
            this.messageListener,
            false
          )
        }
        this.handleMessage({
          type: MESSAGE_TYPE.EMIT,
          event: MC_EVENTS.CONNECTION_TIMEOUT,
          payload: {
            message: 'Connection timed out while ' + this.connectionStep,
          },
        })
      }, Number(this.options.connectionTimeout))
    }
  }

  protected uuidv4(): string {
    const crypt = window.crypto || window.msCrypto
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c: any) =>
        (
          c ^
          (crypt.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    )
  }

  protected clearConnectionTimeout(): void {
    clearTimeout(this.connectionTimeout)
  }

  protected initPortEvents(): void {
    this.port.onmessage = (message) => {
      this.handleMessage(message.data)
    }
    this.port.onmessageerror = (error) => {
      this.handleError(error)
    }
  }

  protected finishInit(): void {
    this.connected = true
    this.clearConnectionTimeout()
    if (this.options.debug) {
      console.log(
        `Finished connection on ${this.isClient() ? 'client' : 'server'}`
      )
    }
    this.emit(MC_EVENTS.CONNECTED)
    this.completeBacklog()
  }

  protected completeBacklog(): void {
    this.backlog.forEach((message: Message) => {
      this.portMessage(message)
    })
    this.backlog = []
  }

  protected handleError(error: any): void {
    if (this.options.debug) {
      console.error(error)
    }
  }

  protected handleMessage(message: Message): void {
    if (this.options.debug) {
      console.log(
        `handle by ${this.isClient() ? 'client' : 'server'} - [${
          message.type
        }: "${message.event}"] , payload: `,
        message.payload
      )
    }
    switch (message.type) {
      case MESSAGE_TYPE.EMIT:
        if (
          !this.emitters[message.event] ||
          !Array.isArray(this.emitters[message.event])
        ) {
          return
        }
        this.emitters[message.event].forEach((cb: Function) =>
          cb(message.payload)
        )
        break
      case MESSAGE_TYPE.REQUEST:
        if (
          !this.emitters[message.event] ||
          !Array.isArray(this.emitters[message.event])
        ) {
          return
        }
        this.emitters[message.event].forEach((cb: Function) =>
          cb(
            message.payload,
            (payload: any) => {
              this.message({
                id: message.id,
                type: MESSAGE_TYPE.RESOLVE,
                event: message.event,
                payload,
              })
            },
            (payload: any) => {
              this.message({
                id: message.id,
                type: MESSAGE_TYPE.REJECT,
                event: message.event,
                payload,
              })
            }
          )
        )
        break
      case MESSAGE_TYPE.RESOLVE:
        if (!this.promises[message.id]) {
          return
        }
        this.promises[message.id].resolve(message.payload)
        delete this.promises[message.id]
        break
      case MESSAGE_TYPE.REJECT:
        if (!this.promises[message.id]) {
          return
        }
        this.promises[message.id].reject(message.payload)
        delete this.promises[message.id]
        break
    }
  }

  protected getRequestTimeout(
    timeout: number | boolean | undefined
  ): number | boolean {
    if (typeof timeout === 'number' && timeout >= 0) {
      return timeout
    } else if (typeof timeout === 'number') {
      return 0
    } else if (timeout === true) {
      return this.options.timeout
    } else if (timeout === false) {
      return false
    } else {
      return this.options.timeout
    }
  }

  protected isClient(): boolean {
    return false
  }

  protected message(message: Message): void {
    let force = false
    if (
      message.event === MC_EVENTS.HANDSHAKE ||
      message.event === MC_EVENTS.CONNECTED ||
      message.event === MC_EVENTS.DISCONNECTED
    ) {
      force = true
    }
    if (!this.connected && !force) {
      this.backlog.push(message)
    } else if (this.port) {
      this.portMessage(message)
    }
  }

  private portMessage(message: Message) {
    if (this.options.debug) {
      console.log(
        `send from ${this.isClient() ? 'client' : 'server'} - [${
          message.type
        }: ${message.event}], payload: `,
        message.payload
      )
    }
    this.port.postMessage(message)
  }
}
