import './App.css';

import { useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { Chat } from './app/chat/Chat';
import { Layout } from './app/components/Layout';
import { ConfigView } from './app/configuration/ConfigView';
import {
  get as getConfiguration,
  save as saveConfiguration,
} from './app/helpers/configuration';
import { Player } from './app/sound/Player';
import {
  Character,
  CHAT_HISTORY_TYPE,
  ChatHistoryItem,
  Configuration,
} from './app/types';
import { config } from './config';
import * as defaults from './defaults';

interface CurrentContext {
  character?: Character;
  chatting: boolean;
  connection?: WebSocket;
  playerName?: string;
}

const sound = new Audio();
const player = new Player();

function App() {
  const formMethods = useForm<Configuration>();

  const [open, setOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [connection, setConnection] = useState<WebSocket>();
  const [character, setCharacter] = useState<Character>();
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [chatting, setChatting] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const stateRef = useRef<CurrentContext>();
  stateRef.current = {
    character,
    chatting,
    connection,
    playerName,
  };

  const onOpen = useCallback(() => {
    console.log('Open!');
    setOpen(true);
  }, []);

  const onDisconnect = useCallback(() => {
    console.log('Disconnect!');
    setOpen(true);
  }, []);

  const onMessage = useCallback((message: MessageEvent) => {
    const packet = JSON.parse(message.data);

    let chatItem: ChatHistoryItem | undefined = undefined;

    if (packet?.type === 'AUDIO') {
      player.addToQueue(packet.audio?.chunk);
    } else if (packet?.type === 'TEXT') {
      const { character, playerName } = stateRef.current || {};

      chatItem = {
        id: packet.packetId?.utteranceId,
        type: CHAT_HISTORY_TYPE.TEXT,
        date: new Date(packet.date!),
        source: packet.routing?.source,
        text: packet.text.text,
        interactionId: packet.packetId?.interactionId,
        isRecognizing: !packet.text.final,
        author: packet.routing!.source!.isCharacter
          ? character?.displayName
          : playerName,
      };
    } else if (packet?.control?.type === 'INTERACTION_END') {
      chatItem = {
        id: packet.packetId?.utteranceId,
        type: CHAT_HISTORY_TYPE.INTERACTION_END,
        date: new Date(packet.date!),
        interactionId: packet.packetId?.interactionId,
      };
    }

    if (chatItem) {
      setChatHistory((currentState) => {
        let newState = undefined;
        let currentHistoryIndex = currentState.findIndex((item) => {
          return item.id === chatItem?.id;
        });

        if (currentHistoryIndex >= 0 && chatItem) {
          newState = [...currentState];
          newState[currentHistoryIndex] = chatItem;
        } else {
          newState = [...currentState, chatItem!];
        }
        return newState;
      });
    }
  }, []);

  const openConnection = useCallback(async () => {
    const key = v4();
    const { character, player, scene } = formMethods.getValues();

    setChatting(true);
    setPlayerName(player?.name!);

    const response = await fetch(`${config.LOAD_URL}?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scene: scene?.name,
        player: player?.name,
        character: character?.name,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      return console.log(response.statusText, ': ', data.errors);
    }

    if (data.character) {
      setCharacter(data.character as Character);
    }

    const ws = new WebSocket(`${config.SESSION_URL}?key=${key}`);

    setConnection(ws);

    ws.addEventListener('open', onOpen);
    ws.addEventListener('message', onMessage);
    ws.addEventListener('disconnect', onDisconnect);
  }, [formMethods, onDisconnect, onMessage, onOpen]);

  const stopChatting = useCallback(async () => {
    // Disable flags
    setChatting(false);
    setOpen(false);

    // Stop audio playing
    player.stop();

    // Clear collections
    setChatHistory([]);

    // Close connection and clear connection data
    connection?.close();
    connection?.removeEventListener('open', onOpen);
    connection?.removeEventListener('message', onMessage);
    connection?.removeEventListener('disconnect', onDisconnect);

    setConnection(undefined);
    setCharacter(undefined);
  }, [connection, onDisconnect, onMessage, onOpen]);

  const resetForm = useCallback(() => {
    formMethods.reset({
      ...defaults.configuration,
    });
    saveConfiguration(formMethods.getValues());
  }, [formMethods]);

  useEffect(() => {
    const configuration = getConfiguration();

    formMethods.reset({
      ...(configuration
        ? (JSON.parse(configuration) as Configuration)
        : defaults.configuration),
    });

    setInitialized(true);
  }, [formMethods]);

  useEffect(() => {
    player.preparePlayer({ audio: sound });
  }, []);

  const content = chatting ? (
    <>
      {open && character ? (
        <Chat
          character={character}
          chatHistory={chatHistory}
          connection={connection!}
          onStopChatting={stopChatting}
        />
      ) : (
        'Loading...'
      )}
    </>
  ) : (
    <ConfigView onStart={openConnection} onResetForm={resetForm} />
  );

  return (
    <FormProvider {...formMethods}>
      <Layout>{initialized ? content : ''}</Layout>
    </FormProvider>
  );
}

export default App;
