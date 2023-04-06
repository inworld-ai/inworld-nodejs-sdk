import { Box, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { save as saveConfiguration } from '../helpers/configuration';
import { Configuration } from '../types';

export const PlayerName = () => {
  const { getValues, register } = useFormContext<Configuration>();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      saveConfiguration({
        ...getValues(),
        player: { name: event.target.value },
      });
    },
    [getValues],
  );

  return (
    <Box sx={{ m: 2 }}>
      <TextField
        fullWidth
        id="player-name"
        size="small"
        label="Player Name"
        placeholder="Enter player name"
        InputLabelProps={{ shrink: true }}
        {...register('player.name', { required: true })}
        onChange={onChange}
      />
    </Box>
  );
};
