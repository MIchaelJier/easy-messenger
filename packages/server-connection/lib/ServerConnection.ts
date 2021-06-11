/* eslint-disable @typescript-eslint/ban-types */
import { Connection, types } from '@easy-messenger/base-connection'
const { MC_EVENTS } = types

enum CONNECTION_STEPS {
  CONNECTION = 'waiting for connection.',
  IFRAME_LOADING = 'waiting for iframe to load.',
  INITIATION_FROM_CLIENT = 'waiting for initiation from client.',
}

export class ServerConnection extends Connection {
  private channel!: MessageChannel
  protected connectionStep: CONNECTION_STEPS = CONNECTION_STEPS.CONNECTION

  constructor(protected frame: HTMLIFrameElement, options: any = {}) {
    super(options)
    if (this.options.onload) {
      this.setupLoadInit()
    }
    if (this.options.clientInitiates) {
      this.setupClientInit()
    }
    this.setConnectionTimeout()
    this.on(MC_EVENTS.DISCONNECTED, () => this.close())
  }

  private clientInitiation(e: MessageEvent) {
    if (e.data === this.id) {
      this.connectionStep = CONNECTION_STEPS.CONNECTION
      this.setConnectionTimeout()
      this.options.window.removeEventListener(
        'message',
        this.messageListener,
        false
      )
      if (this.options.debug) {
        console.log('Server: Client triggered initiation')
      }
      this.init()
    }
  }

  private setupLoadInit() {
    this.connectionStep = CONNECTION_STEPS.IFRAME_LOADING
    this.frame.addEventListener('load', () => {
      this.connectionStep = this.options.clientInitiates
        ? CONNECTION_STEPS.INITIATION_FROM_CLIENT
        : CONNECTION_STEPS.CONNECTION
      this.setConnectionTimeout()
      this.init()
    })
  }

  private setupClientInit() {
    this.connectionStep = CONNECTION_STEPS.INITIATION_FROM_CLIENT
    this.id = this.uuidv4()
    const url = new URL(this.frame.src)
    url.searchParams.set('mc-name', this.id)
    this.frame.src = url.toString()
    this.messageListener = (e: MessageEvent) => this.clientInitiation(e)
    this.options.window.addEventListener('message', this.messageListener)
  }

  /**
   * Used to trigger the initiation of a connection manually. To be used if the onload, and clientInitiates options are disabled.
   */
  public init(): boolean | void {
    if (!this.frame.contentWindow || !this.frame.src || this.connected) {
      return false
    }
    this.setupChannel()
    this.initPortEvents()
    this.listenForHandshake()
    this.sendPortToClient(this.frame.contentWindow)
  }

  private sendPortToClient(client: Window) {
    client.postMessage(
      null,
      this.options.targetOrigin ? this.options.targetOrigin : '*',
      [this.channel.port2]
    )
  }

  private listenForHandshake() {
    this.on(
      MC_EVENTS.HANDSHAKE,
      (payload: any, resolve: (payload: any) => {}) => {
        resolve(payload)
        this.finishInit()
      }
    )
  }

  private setupChannel() {
    this.channel = new MessageChannel()
    this.port = this.channel.port1
  }
}
