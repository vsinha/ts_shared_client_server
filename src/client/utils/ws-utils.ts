import { v4 as uuid } from 'uuid';

const host = "ws://localhost:3000";
const clientId = uuid();

let ws;

export interface IEvent {
  clientId: string;
  message: string;
}

export function Initialize() {
  ws = new WebSocket(host);

  ws.addEventListener('open', () => {
    ws.send('hello from client ' + clientId);
  });

  ws.addEventListener('message', (data) => {
    console.log(data);
  });
}

export function sendEvent(message: string) {
  const event: IEvent = {
    clientId,
    message,
  };

  ws.send(event);
}
