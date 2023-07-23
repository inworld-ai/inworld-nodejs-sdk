import { Box, TextField } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { save as saveConfiguration } from '../helpers/configuration';
import { Configuration } from '../types';

const FIELD_NAME = 'character.name';
export const RESOURCE_NAME_PATTERN = RegExp(
  `^workspaces/([a-z0-9_-]+)/characters/([a-z0-9_-]+)$`,
);

export const CharacterName = () => {
  const { getValues, formState, register, setValue } =
    useFormContext<Configuration>();

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(FIELD_NAME, event.target.value);
      saveConfiguration(getValues());
    },
    [getValues, setValue],
  );

  const errorMessage = useMemo(
    () => formState.errors?.character?.name?.message,
    [formState],
  );

  return (
    <Box sx={{ m: 2 }}>
      <TextField
        fullWidth
        id="character-name"
        size="small"
        label="Character Resource Name"
        placeholder="Enter character resource name"
        InputLabelProps={{ shrink: true }}
        {...{ error: !!errorMessage, helperText: errorMessage }}
        {...register(FIELD_NAME, {
          onChange,
          required: 'This field is required',
          pattern: {
            value: RESOURCE_NAME_PATTERN,
            message: 'Please use resource name',
          },
        })}
      />
    </Box>
  );
};
