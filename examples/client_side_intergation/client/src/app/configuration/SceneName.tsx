import { Box, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { save as saveConfiguration } from '../helpers/configuration';
import { Configuration } from '../types';

export const SceneName = () => {
  const { getValues, register } = useFormContext<Configuration>();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      saveConfiguration({
        ...getValues(),
        scene: { name: event.target.value },
      });
    },
    [getValues],
  );

  return (
    <Box sx={{ m: 2 }}>
      <TextField
        fullWidth
        id="scene-name"
        size="small"
        label="Scene Name"
        placeholder="Enter scene name"
        InputLabelProps={{ shrink: true }}
        {...register('scene.name', { required: true })}
        onChange={onChange}
      />
    </Box>
  );
};
