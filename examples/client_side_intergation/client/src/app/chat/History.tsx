import { Fade } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

import { dateWithMilliseconds } from '../helpers/transform';
import {
  CHAT_HISTORY_TYPE,
  ChatHistoryItem,
  HistoryItemText,
  HistoryItemTrigger,
} from '../types';
import { HistoryStyled } from './Chat.styled';
import { Typing } from './Typing';

interface HistoryProps {
  history: ChatHistoryItem[];
}

type CombinedHistoryTextItem = HistoryItemText & { groupedText: string };
type CombinedHistoryItem = CombinedHistoryTextItem | HistoryItemTrigger;

export const History = (props: HistoryProps) => {
  const { history } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [combinedChatHistory, setCombinedChatHistory] = useState<any[]>([]);
  const [isInteractionEnd, setIsInteractionEnd] = useState<boolean>(true);

  useEffect(() => {
    // scroll chat down on history change
    if (ref.current && history) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history]);

  useEffect(() => {
    let currentRecord: CombinedHistoryTextItem | undefined;
    const mergedRecords: CombinedHistoryItem[] = [];
    const hasActors = history.find(
      (record: ChatHistoryItem) => record.type === CHAT_HISTORY_TYPE.TEXT,
    );
    const withoutTriggerEvents = history.filter(
      (record: ChatHistoryItem) =>
        record.type !== CHAT_HISTORY_TYPE.TRIGGER_EVENT,
    );

    for (let i = 0; i < history.length; i++) {
      let item = history[i];
      switch (item.type) {
        case CHAT_HISTORY_TYPE.TEXT:
          currentRecord = mergedRecords.find(
            (r) =>
              r.type === CHAT_HISTORY_TYPE.TEXT &&
              item?.type === CHAT_HISTORY_TYPE.TEXT &&
              r.source.name === item?.source?.name &&
              r.interactionId === item.interactionId,
          ) as CombinedHistoryTextItem;

          if (currentRecord) {
            currentRecord.groupedText! += `${item.text}`;
          } else {
            currentRecord = {
              ...item,
              groupedText: item.text,
            };
            mergedRecords.push(currentRecord);
          }
          break;
        case CHAT_HISTORY_TYPE.TRIGGER_EVENT:
          mergedRecords.push(item);
          break;
      }
    }

    // Interaction is considered ended
    // when there is no actor action yet (chat is not started)
    // or last received message is INTERACTION_END.
    const lastInteractionId =
      withoutTriggerEvents[withoutTriggerEvents.length - 1]?.interactionId;

    const interactionEnd = withoutTriggerEvents.find(
      (event) =>
        event.interactionId === lastInteractionId &&
        event.type === CHAT_HISTORY_TYPE.INTERACTION_END,
    );

    setIsInteractionEnd(!hasActors || (!!currentRecord && !!interactionEnd));

    setCombinedChatHistory(mergedRecords);
  }, [history]);

  return (
    <HistoryStyled ref={ref}>
      {combinedChatHistory.map((item, index) => {
        let text;
        let author;
        const title =
          item?.type === CHAT_HISTORY_TYPE.TEXT ||
          item.type === CHAT_HISTORY_TYPE.TRIGGER_EVENT
            ? `${dateWithMilliseconds(item.date)} (${item.interactionId})`
            : '';

        switch (item.type) {
          case CHAT_HISTORY_TYPE.TEXT:
            text = item?.groupedText;
            author = item?.author;
            break;
          default:
            break;
        }

        return (
          <Box
            title={title}
            key={index}
            data-id={item.id}
            sx={{
              ...(author && { textAlign: 'left' }),
            }}
          >
            {author ? (
              <>
                <strong>{author}</strong>: {text}
              </>
            ) : (
              text
            )}
          </Box>
        );
      })}
      <Fade in={!isInteractionEnd} timeout={500}>
        <Box margin="0 0 5px">
          <Typing />
        </Box>
      </Fade>
    </HistoryStyled>
  );
};
