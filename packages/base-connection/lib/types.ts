/* eslint-disable @typescript-eslint/ban-types */
export interface Promises {
  [key: string]: MPromise
}

export interface MPromise {
  resolve: Function
  reject: Function
}

export interface Emits {
  [key: string]: Function[]
}

export interface EmitMessage {
  type: MESSAGE_TYPE.EMIT
  event: string
  payload?: any
}

export interface RequestMessage {
  type: MESSAGE_TYPE.REQUEST
  id: string
  event: string
  payload?: any
}

export interface ResolveMessage {
  type: MESSAGE_TYPE.RESOLVE
  id: string
  event: string
  payload: any
}

export interface RejectMessage {
  type: MESSAGE_TYPE.REJECT
  id: string
  event: string
  payload: any
}
/**
 * Options for the connection.
 */
export interface ConnectionOptions {
  window?: Window
  timeout?: number
  connectionTimeout?: number
  debug?: boolean
  onload?: boolean
  clientInitiates?: boolean
  targetOrigin?: string
}

export interface RequestOptions {
  timeout?: number | boolean
}

export interface ConnectionSettings {
  window: Window
  timeout: number | boolean
  connectionTimeout: number | boolean
  debug: boolean
  onload: boolean
  clientInitiates: boolean
  targetOrigin: string
}

export type Message =
  | ResolveMessage
  | RejectMessage
  | EmitMessage
  | RequestMessage

declare global {
  interface Window {
    msCrypto: Crypto
  }
}

export enum MESSAGE_TYPE {
  SUBSCRIBE = 'subscribe',
  EMIT = 'emit',
  REQUEST = 'request',
  RESOLVE = 'resolve',
  REJECT = 'reject',
}

export enum MC_EVENTS {
  HANDSHAKE = 'mc-handshake',
  CONNECTED = 'mc-connected',
  DISCONNECTED = 'mc-disconnected',
  CONNECTION_TIMEOUT = 'mc-connection-timeout',
}
