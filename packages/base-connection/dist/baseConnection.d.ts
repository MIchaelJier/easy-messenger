interface Promises {
    [key: string]: MPromise;
}
interface MPromise {
    resolve: Function;
    reject: Function;
}
interface Emits {
    [key: string]: Function[];
}
interface EmitMessage {
    type: MESSAGE_TYPE.EMIT;
    event: string;
    payload?: any;
}
interface RequestMessage {
    type: MESSAGE_TYPE.REQUEST;
    id: string;
    event: string;
    payload?: any;
}
interface ResolveMessage {
    type: MESSAGE_TYPE.RESOLVE;
    id: string;
    event: string;
    payload: any;
}
interface RejectMessage {
    type: MESSAGE_TYPE.REJECT;
    id: string;
    event: string;
    payload: any;
}
interface ConnectionOptions {
    window?: Window;
    timeout?: number;
    connectionTimeout?: number;
    debug?: boolean;
    onload?: boolean;
    clientInitiates?: boolean;
    targetOrigin?: string;
}
interface RequestOptions {
    timeout?: number | boolean;
}
interface ConnectionSettings {
    window: Window;
    timeout: number | boolean;
    connectionTimeout: number | boolean;
    debug: boolean;
    onload: boolean;
    clientInitiates: boolean;
    targetOrigin: string;
}
declare type Message = ResolveMessage | RejectMessage | EmitMessage | RequestMessage;
declare global {
    interface Window {
        msCrypto: Crypto;
    }
}
declare enum MESSAGE_TYPE {
    SUBSCRIBE = "subscribe",
    EMIT = "emit",
    REQUEST = "request",
    RESOLVE = "resolve",
    REJECT = "reject"
}
declare enum MC_EVENTS {
    HANDSHAKE = "mc-handshake",
    CONNECTED = "mc-connected",
    DISCONNECTED = "mc-disconnected",
    CONNECTION_TIMEOUT = "mc-connection-timeout"
}

type types_Promises = Promises;
type types_MPromise = MPromise;
type types_Emits = Emits;
type types_EmitMessage = EmitMessage;
type types_RequestMessage = RequestMessage;
type types_ResolveMessage = ResolveMessage;
type types_RejectMessage = RejectMessage;
type types_ConnectionOptions = ConnectionOptions;
type types_RequestOptions = RequestOptions;
type types_ConnectionSettings = ConnectionSettings;
type types_Message = Message;
type types_MESSAGE_TYPE = MESSAGE_TYPE;
declare const types_MESSAGE_TYPE: typeof MESSAGE_TYPE;
type types_MC_EVENTS = MC_EVENTS;
declare const types_MC_EVENTS: typeof MC_EVENTS;
declare namespace types {
  export {
    types_Promises as Promises,
    types_MPromise as MPromise,
    types_Emits as Emits,
    types_EmitMessage as EmitMessage,
    types_RequestMessage as RequestMessage,
    types_ResolveMessage as ResolveMessage,
    types_RejectMessage as RejectMessage,
    types_ConnectionOptions as ConnectionOptions,
    types_RequestOptions as RequestOptions,
    types_ConnectionSettings as ConnectionSettings,
    types_Message as Message,
    types_MESSAGE_TYPE as MESSAGE_TYPE,
    types_MC_EVENTS as MC_EVENTS,
  };
}

declare class Connection {
    connected: boolean;
    id: string | null;
    protected port: MessagePort;
    private backlog;
    protected promises: Promises;
    private emitters;
    protected options: ConnectionSettings;
    protected connectionTimeout: number;
    protected connectionStep: string;
    protected messageListener: any;
    protected readonly defaultOptions: ConnectionSettings;
    constructor(options?: ConnectionOptions);
    emit(event: string, payload?: any): Connection;
    on(event: string, callback: Function): Connection;
    request<T = any>(event: string, payload?: any, options?: RequestOptions): Promise<T>;
    close(): void;
    protected setConnectionTimeout(): void;
    protected uuidv4(): string;
    protected clearConnectionTimeout(): void;
    protected initPortEvents(): void;
    protected finishInit(): void;
    protected completeBacklog(): void;
    protected handleError(error: any): void;
    protected handleMessage(message: Message): void;
    protected getRequestTimeout(timeout: number | boolean | undefined): number | boolean;
    protected isClient(): boolean;
    protected message(message: Message): void;
    private portMessage;
}

export { Connection, types };
