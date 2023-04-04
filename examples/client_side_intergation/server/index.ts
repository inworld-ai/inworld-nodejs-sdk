import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { parse } from 'url';
const { body, query, validationResult } = require('express-validator');

import {
  Character,
  InworldClient,
  InworldPacket,
  ServiceError,
  SessionToken,
  status,
} from '@inworld/nodejs-sdk';
import { createClient as createRedisClient } from 'redis';
import { RawData, WebSocketServer } from 'ws';

import {
  AUDIO_SESSION_STATE,
  Connections,
  EVENT_TYPE,
  SentState,
} from './types';

if (!process.env.INWORLD_KEY) {
  throw new Error('INWORLD_KEY env variable is required');
}

if (!process.env.INWORLD_SECRET) {
  throw new Error('INWORLD_SECRET env variable is required');
}

const DISCONNECT_TIMEOUT = 10 * 1000;

const app = express();
const server = createServer(app);
const webSocket = new WebSocketServer({ noServer: true });
const redisClient = createRedisClient();

app.use(cors());
app.use(express.json());

const connections: Connections = {};
const sent: SentState = {};

webSocket.on('connection', (ws, request) => {
  const { query } = parse(request.url!, true);
  const key = query.key?.toString();

  if (!key) throw Error('Key is not provided!');

  ws.on('error', console.error);

  ws.on('message', async (data: RawData) => {
    const saved = await redisClient.get(key);
    const { sessionId, ...settings } = (saved && JSON.parse(saved)) || {};

    const message = JSON.parse(data.toString());

    if (!connections[key]) {
      const client = new InworldClient()
        .setConfiguration({
          connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        })
        .setGenerateSessionToken(generateSessionToken(sessionId, key, settings))
        .setOnMessage((packet: InworldPacket) => {
          ws.send(JSON.stringify(packet));

          if (packet.isInteractionEnd()) {
            connections[key].close();
          }
        })
        .setOnError(handleError(key))
        .setOnDisconnect(() => {
          delete connections[key];
          delete sent[key];
        });

      if (settings.player) {
        client.setUser({ fullName: settings.player });
      }

      if (settings.scene) {
        client.setScene(settings.scene);
      }

      connections[key] = client.build();
    }

    switch (message.type) {
      case EVENT_TYPE.TEXT:
        ws.send(JSON.stringify(await connections[key].sendText(message.text)));
        break;
      case EVENT_TYPE.AUDIO:
        // Start audio session before send audio.
        // It will be called after each disconnected initiated from client or server.
        if (sent[key] === AUDIO_SESSION_STATE.ACTIVE) {
          connections[key].sendAudio(message.audio);
        } else {
          sent[key] = AUDIO_SESSION_STATE.PROCESSING;
          await connections[key].sendAudioSessionStart();
          sent[key] = AUDIO_SESSION_STATE.ACTIVE;
        }
        break;
      case EVENT_TYPE.AUDIO_SESSION_END:
        delete sent[key];
        connections[key].sendAudioSessionEnd();
        break;
    }
  });
});

app.post(
  '/load',
  body('scene').trim().isLength({ min: 1 }),
  body('player').trim().isLength({ min: 1 }),
  body('character').trim().isLength({ min: 1 }),
  query('key').trim().isLength({ min: 1 }),
  async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await redisClient.set(req.query.key?.toString()!, JSON.stringify(req.body));

    const connection = new InworldClient()
      .setApiKey({
        key: process.env.INWORLD_KEY!,
        secret: process.env.INWORLD_SECRET!,
      })
      .setScene(req.body.scene)
      .build();

    const characters = await connection.getCharacters();
    const character = characters.find(
      (c: Character) => c.getResourceName() === req.body.character,
    );

    res.end(JSON.stringify({ character }));
  },
);

server.on('upgrade', async (request, socket, head) => {
  const { pathname } = parse(request.url!);

  if (pathname === '/session') {
    webSocket.handleUpgrade(request, socket, head, (ws) => {
      webSocket.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(4000, async () => {
  await redisClient.connect();
});

function handleError(key: string) {
  return (err: ServiceError) => {
    switch (err.code) {
      case status.ABORTED:
      case status.CANCELLED:
        break;
      case status.FAILED_PRECONDITION:
        redisClient.del(key);
        break;
      default:
        console.error(`Error: ${err.message}`);
        break;
    }
  };
}

function generateSessionToken(sessionId: string, key: string, settings: any) {
  return async () => {
    const client = new InworldClient().setApiKey({
      key: process.env.INWORLD_KEY!,
      secret: process.env.INWORLD_SECRET!,
    });
    const token = await client.generateSessionToken();

    const actualToken = new SessionToken({
      expirationTime: token.getExpirationTime(),
      token: token.getToken(),
      type: token.getType(),
      sessionId: sessionId ?? token.getSessionId(),
    });

    if (!sessionId) {
      redisClient.set(
        key,
        JSON.stringify({
          sessionId: actualToken.getSessionId(),
          ...settings,
        }),
      );
    }

    return actualToken;
  };
}
