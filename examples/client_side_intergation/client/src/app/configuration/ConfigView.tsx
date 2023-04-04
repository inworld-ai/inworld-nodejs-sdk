import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import { CharacterName } from './CharacterName';
import { PlayerName } from './PlayerName';
import { SceneName } from './SceneName';

interface ConfigViewProps {
  onStart: () => Promise<void>;
  onResetForm: () => void;
}

export const ConfigView = (props: ConfigViewProps) => {
  return (
    <>
      <Box component="form">
        <Typography variant="h3" component="h1" sx={{ m: 1 }}>
          Chat with Inworld character
        </Typography>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CharacterName />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SceneName />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <PlayerName />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Grid
        container
        mt={1}
        spacing={2}
        alignItems="center"
        justifyContent={'flex-end'}
      >
        <Grid item>
          <Button variant="contained" onClick={props.onStart}>
            Start
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
