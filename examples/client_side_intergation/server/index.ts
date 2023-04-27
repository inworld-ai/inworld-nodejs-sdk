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
  Session,
  status,
} from '@inworld/nodejs-sdk';
import { RawData, WebSocketServer } from 'ws';

import { Storage } from './storage';
import {
  AUDIO_SESSION_STATE,
  CHAT_VIEW,
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
const storage = new Storage();

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
    const {
      player,
      scene,
      chatView,
      session: savedSession,
    } = await storage.get(key);

    const message = JSON.parse(data.toString());

    if (!connections[key]) {
      const client = new InworldClient()
        .setConfiguration({
          capabilities: {
            emotions: true,
            ...(chatView === CHAT_VIEW.AVATAR && { phonemes: true }),
          },
          connection: { disconnectTimeout: DISCONNECT_TIMEOUT },
        })
        .setApiKey({
          key: process.env.INWORLD_KEY!,
          secret: process.env.INWORLD_SECRET!,
        })
        .setOnSession({
          get: () => ({
            sessionToken: savedSession?.sessionToken,
            scene: savedSession?.scene,
          }),
          set: (session: Session) =>
            storage.set(key, { player, scene, session, chatView }),
        })
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

      if (player) {
        client.setUser({ fullName: player });
      }

      if (scene) {
        client.setScene(scene);
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

    const { player, scene, chatView } = req.body;

    await storage.set(req.query.key?.toString()!, {
      player,
      scene,
      chatView,
    });

    const connection = new InworldClient()
      .setApiKey({
        key: process.env.INWORLD_KEY!,
        secret: process.env.INWORLD_SECRET!,
      })
      .setScene(scene)
      .build();

    const characters = await connection.getCharacters();
    const character = characters.find(
      (c: Character) => c.resourceName === req.body.character,
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
  await storage.connect({
    onError: (err: Error) => console.log('Redis Client Error', err),
  });
});

function handleError(key: string) {
  return (err: ServiceError) => {
    switch (err.code) {
      case status.ABORTED:
      case status.CANCELLED:
        break;
      default:
        console.error(`Error: ${err.message}`);
        storage.delete(key);
        break;
    }
  };
}
