import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { save as saveConfiguration } from '../helpers/configuration';
import { CHAT_VIEW, Configuration } from '../types';

export const ChatView = () => {
  const { control, getValues, setValue } = useFormContext<Configuration>();

  return (
    <Box sx={{ m: 2 }}>
      {Object.values(CHAT_VIEW).map((view) => (
        <FormControl key={view}>
          <RadioGroup row defaultValue={view}>
            <FormControlLabel
              value={view}
              control={
                <Controller
                  name="chatView"
                  control={control}
                  render={({ field: { value } }) => {
                    return (
                      <Radio
                        size="small"
                        checked={(value as unknown as CHAT_VIEW) === view}
                        onChange={() => {
                          setValue('chatView', view);
                          saveConfiguration(getValues());
                        }}
                      />
                    );
                  }}
                />
              }
              label={view as unknown as string}
            />
          </RadioGroup>
        </FormControl>
      ))}
    </Box>
  );
};
