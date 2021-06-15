import { Connection } from '@easy-messenger/base-connection';

declare class ClientConnection extends Connection {
    protected messageListener: any;
    constructor(options?: any);
    init(): void;
    private messageHandler;
    protected listenForHandshake(): void;
    protected addBeforeUnloadEvent(): void;
    protected isClient(): boolean;
}

export { ClientConnection };
