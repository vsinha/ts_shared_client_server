import * as express from 'express';
import * as WebSocket from 'ws';
import * as http from 'http';
import * as url from 'url';
// import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';
import { GameLogic, GameRoom } from "../shared/game";

console.log("here");
console.dir(GameRoom);

const app = express();

// app.use(apiRouter());
// app.use(wsRouter());
app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const room = new GameRoom();
room.start();

wss.on('connection', (ws, req) => {

  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(config.SERVER_PORT, () => {
  console.log('Listening on %d', server.address().port);
});
