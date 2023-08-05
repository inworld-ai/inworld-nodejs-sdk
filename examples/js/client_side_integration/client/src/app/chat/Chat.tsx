import { CopyAll, Mic, Send } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { useCallback, useState } from 'react';

import {
  CHAT_HISTORY_TYPE,
  CHAT_VIEW,
  ChatHistoryItem,
  EmotionsMap,
} from '../types';
import { ActionsStyled, RecordIcon } from './Chat.styled';
import { CopyConfirmedDialog } from './CopyConfirmedDialog';
import { History } from './History';

interface ChatProps {
  chatView: CHAT_VIEW;
  chatHistory: ChatHistoryItem[];
  connection: WebSocket;
  emotions: EmotionsMap;
  onStopChatting: () => void;
  playerName: string;
}

let interval: NodeJS.Timeout;
let stream: MediaStream;
let audioCtx: AudioContext;

export function Chat(props: ChatProps) {
  const { chatHistory, connection } = props;

  const [text, setText] = useState('');
  const [copyDestination, setCopyDestination] = useState('');
  const [copyConfirmOpen, setCopyConfirmOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [],
  );

  const formatTranscript = useCallback((messages: ChatHistoryItem[]) => {
    let transcript = '';
    let characterLastSpeaking = false; // Used to combine all Character text chunks

    messages.forEach((item) => {
      switch (item.type) {
        case CHAT_HISTORY_TYPE.ACTOR:
          const isCharacter = item.source.isCharacter;

          transcript +=
            characterLastSpeaking && isCharacter
              ? item.text
              : `\n${item.author}: ${item.text}`;
          characterLastSpeaking = isCharacter;
          break;
      }
    });

    return transcript;
  }, []);

  const getTranscript = useCallback(
    (messages: ChatHistoryItem[], startId?: string, endId?: string) => {
      if (!messages.length) {
        return '';
      }

      // get full array by default
      let startIndex: number = 0;
      let endIndex: number = messages.length - 1;

      if (startId || endId) {
        // find start/end indexes of the slice if ids are specified
        messages.forEach((item, index) => {
          if (item.id === startId) {
            startIndex = index;
          }

          if (item.id === endId) {
            endIndex = index;
          }
        });
      }

      if (endIndex < startIndex) {
        const tmp = startIndex;
        startIndex = endIndex;
        endIndex = tmp;
      }

      // generate eventual transcript
      return formatTranscript(messages.slice(startIndex, endIndex + 1));
    },
    [formatTranscript],
  );

  const handleCopyClick = useCallback(async () => {
    const history = getTranscript(chatHistory);

    if (navigator.clipboard) {
      navigator.clipboard.writeText(history).then(() => {
        setCopyDestination('clipboard');
      });
    } else {
      setCopyDestination('console');
    }

    setCopyConfirmOpen(true);
  }, [getTranscript, chatHistory]);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    clearInterval(interval);
    connection.send(JSON.stringify({ type: 'audioSessionEnd' }));
  }, [connection]);

  function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const length = bytes.byteLength;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  function mergeBuffers(
    channelBuffer: Float32Array[],
    recordingLength: number,
  ) {
    const result = new Float32Array(recordingLength);
    let offset = 0;

    for (let i = 0; i < channelBuffer.length; i++) {
      result.set(channelBuffer[i], offset);
      offset += channelBuffer[i].length;
    }

    return Array.prototype.slice.call(result);
  }

  const startRecording = useCallback(async () => {
    try {
      setIsRecording(true);

      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000,
          echoCancellation: { ideal: true },
          suppressLocalAudioPlayback: { ideal: true },
        },
        video: false,
      });
      audioCtx = new AudioContext({
        sampleRate: 16000,
      });
      const source = audioCtx.createMediaStreamSource(stream);
      const scriptNode = audioCtx.createScriptProcessor(2048, 1, 1);
      let leftChannel: Float32Array[] = [];
      let recordingLength = 0;

      scriptNode.onaudioprocess = (audioProcessingEvent) => {
        const samples = audioProcessingEvent.inputBuffer.getChannelData(0);
        leftChannel.push(new Float32Array(samples));
        recordingLength += 2048;
      };

      source.connect(scriptNode);
      scriptNode.connect(audioCtx.destination);

      interval = setInterval(() => {
        const PCM16iSamples = Int16Array.from(
          mergeBuffers(leftChannel, recordingLength),
          (k) => 32767 * Math.min(1, k),
        );

        connection.send(
          JSON.stringify({
            type: 'audio',
            audio: arrayBufferToBase64(PCM16iSamples.buffer),
          }),
        );
        //clear buffer
        leftChannel = [];
        recordingLength = 0;
      }, 200);
    } catch (e) {
      console.error(e);
    }
  }, [connection]);

  const handleSend = useCallback(() => {
    if (text) {
      connection.send(JSON.stringify({ type: 'text', text }));

      setText('');
    }
  }, [connection, text]);

  const handleTextKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    },
    [handleSend],
  );

  const handleSpeakClick = useCallback(async () => {
    if (isRecording) {
      stopRecording();
      setIsRecording(false);
      return;
    }

    return startRecording();
  }, [isRecording, startRecording, stopRecording]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        position: 'relative',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <History
        history={chatHistory}
        chatView={props.chatView}
        emotions={props.emotions}
      />
      <ActionsStyled>
        <TextField
          variant="standard"
          fullWidth
          value={text}
          onChange={handleTextChange}
          onKeyPress={handleTextKeyPress}
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            borderRadius: '1rem',
            padding: '1rem',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
        <IconButton
          onClick={handleSpeakClick}
          sx={{ height: '3rem', width: '3rem', backgroundColor: '#F1F5F9' }}
        >
          {isRecording ? <RecordIcon /> : <Mic />}
        </IconButton>
        <IconButton onClick={handleCopyClick}>
          <CopyAll fontSize="small" />
        </IconButton>
      </ActionsStyled>
      <CopyConfirmedDialog
        copyConfirmOpen={copyConfirmOpen}
        copyDestination={copyDestination}
        setCopyConfirmOpen={setCopyConfirmOpen}
      />
    </Box>
  );
}
