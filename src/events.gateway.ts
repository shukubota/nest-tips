import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(client.client.id);

    console.log(payload);

    const response = { test: 'responsetest' };

    this.server.emit('broadcast', response);
    return 'Hello world!';
  }
}
