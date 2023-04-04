import { alpha, Box, styled } from '@mui/material';
import { keyframes } from '@mui/system';

export const HistoryStyled = styled(Box)(({ theme }) => ({
  width: '560px',
  height: '50vh',
  padding: theme.spacing(2),
  overflowY: 'auto',
  borderRadius: '2rem',
}));

export const RecordIcon = styled('div')(({ theme }) => {
  const pulseKeyframe = keyframes`
    0% {
      background-color: ${theme.palette.error.dark}
    }
    50% {
      background-color: ${theme.palette.error.light}
    }
    100% {
      background-color: ${theme.palette.error.dark}
    }
  `;

  return {
    display: 'flex',
    position: 'relative',

    '&:before': {
      content: '""',
      display: 'block',
      width: theme.spacing(2),
      height: theme.spacing(2),
      borderRadius: '50%',
      backgroundColor: alpha(theme.palette.error.main, 0.4),
    },

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: theme.spacing(0.5),
      left: theme.spacing(0.5),
      width: theme.spacing(),
      height: theme.spacing(),
      borderRadius: '50%',
      backgroundColor: theme.palette.error.main,
      animation: `${pulseKeyframe} 1.5s ease-in-out 0.5s infinite`,
    },
  };
});
