import { Connection } from '@easy-messenger/base-connection';

declare enum CONNECTION_STEPS {
    CONNECTION = "waiting for connection.",
    IFRAME_LOADING = "waiting for iframe to load.",
    INITIATION_FROM_CLIENT = "waiting for initiation from client."
}
declare class ServerConnection extends Connection {
    protected frame: HTMLIFrameElement;
    private channel;
    protected connectionStep: CONNECTION_STEPS;
    constructor(frame: HTMLIFrameElement, options?: any);
    private clientInitiation;
    private setupLoadInit;
    private setupClientInit;
    init(): boolean | void;
    private sendPortToClient;
    private listenForHandshake;
    private setupChannel;
}

export { ServerConnection };
