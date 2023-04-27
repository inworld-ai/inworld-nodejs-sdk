import './App.css';

import { ArrowBackRounded } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { Chat } from './app/chat/Chat';
import { Avatar } from './app/components/3dAvatar/Avatar';
import { CircularRpmAvatar } from './app/components/CircularRpmAvatar';
import { Layout } from './app/components/Layout';
import {
  ChatWrapper,
  MainWrapper,
  SimulatorHeader,
} from './app/components/Simulator';
import { ConfigView } from './app/configuration/ConfigView';
import {
  get as getConfiguration,
  save as saveConfiguration,
} from './app/helpers/configuration';
import { Player } from './app/sound/Player';
import {
  AdditionalPhonemeInfo,
  Character,
  CHAT_HISTORY_TYPE,
  CHAT_VIEW,
  ChatHistoryItem,
  Configuration,
  EmotionEvent,
  EmotionsMap,
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
  const [chatView, setChatView] = useState(CHAT_VIEW.TEXT);
  const [playerName, setPlayerName] = useState('');
  const [phonemes, setPhonemes] = useState<AdditionalPhonemeInfo[]>([]);
  const [avatar, setAvatar] = useState('');
  const [emotions, setEmotions] = useState<EmotionsMap>({});
  const [emotionEvent, setEmotionEvent] = useState<EmotionEvent>();

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
      player.addToQueue({
        audio: packet.audio,
        onPlay: (packet) => {
          setPhonemes(packet.additionalPhonemeInfo);
        },
      });
    } else if (packet?.type === 'TEXT') {
      const { character, playerName } = stateRef.current || {};

      chatItem = {
        id: packet.packetId?.utteranceId,
        type: CHAT_HISTORY_TYPE.ACTOR,
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
        source: packet.routing?.source,
        interactionId: packet.packetId?.interactionId,
      };
    } else if (packet?.emotions) {
      setEmotionEvent(packet.emotions);
      setEmotions((currentState) => ({
        ...currentState,
        [packet.packetId.interactionId]: packet.emotions,
      }));
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
    const { character, chatView, player, scene } = formMethods.getValues();

    setChatting(true);
    setChatView(chatView!);
    setPlayerName(player?.name!);

    const response = await fetch(`${config.LOAD_URL}?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        scene: scene?.name,
        player: player?.name,
        character: character?.name,
        chatView: chatView,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      return console.log(response.statusText, ': ', data.errors);
    }

    if (data.character) {
      const assets = data.character.assets;
      const rpmImageUri = assets?.rpmImageUriPortrait;
      const avatarImg = assets?.avatarImg;

      setCharacter(data.character as Character);
      setAvatar(avatarImg || rpmImageUri || '');
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
        <MainWrapper>
          <ChatWrapper>
            <Avatar
              emotionEvent={emotionEvent}
              phonemes={phonemes}
              visible={chatView === CHAT_VIEW.AVATAR}
              url={
                config.RPM_AVATAR ||
                character.assets?.rpmModelUri ||
                defaults.DEFAULT_RPM_AVATAR
              }
            />
            <SimulatorHeader>
              <Grid container>
                <Grid item sm={6}>
                  <Button
                    startIcon={<ArrowBackRounded />}
                    onClick={stopChatting}
                    variant="outlined"
                  >
                    Back to settings
                  </Button>
                </Grid>
                {chatView === CHAT_VIEW.TEXT && (
                  <Grid item sm={6}>
                    {avatar && (
                      <CircularRpmAvatar
                        src={avatar}
                        name={character.displayName}
                        size="48px"
                        sx={{ display: ['none', 'flex'] }}
                      />
                    )}
                  </Grid>
                )}
              </Grid>
            </SimulatorHeader>
            <Chat
              chatView={chatView}
              chatHistory={chatHistory}
              connection={connection!}
              emotions={emotions}
              onStopChatting={stopChatting}
              playerName={playerName}
            />
          </ChatWrapper>
        </MainWrapper>
      ) : (
        'Loading...'
      )}
    </>
  ) : (
    <ConfigView
      canStart={formMethods.formState.isValid}
      onStart={openConnection}
      onResetForm={resetForm}
    />
  );

  return (
    <FormProvider {...formMethods}>
      <Layout>{initialized ? content : ''}</Layout>
    </FormProvider>
  );
}

export default App;
