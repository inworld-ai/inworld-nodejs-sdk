import { alpha, Grid, styled } from '@mui/material';
import { keyframes } from '@mui/system';

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }
  20% {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
  }
  28% {
    transform: scaleX(1);
    transform-origin: right;
  }
  51% {
    transform: scaleX(0);
    transform-origin: right;
  }
  58% {
    transform: scaleX(0);
    transform-origin: right;
  }
  82% {
    transform: scaleX(1);
    transform-origin: right;
  }
  83% {
    transform: scaleX(1);
    transform-origin: left;
  }
  96% {
    transform: scaleX(0);
    transform-origin: left;
  }
  100% {
    opacity: 0.3;
    transform: scaleX(0);
    transform-origin: left;
  }
`;
export const Skeleton = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.background.default, 0.6),
    animation: `${skeletonAnimation} 3s infinite ease`,
  },
  '& *': {
    zIndex: '10',
  },
}));
