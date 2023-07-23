import { Box, styled, SxProps } from '@mui/material';
import { FC } from 'react';

interface WrapperProps {
  size?: string | number;
}

interface Props {
  src?: string;
  size?: string | number;
  name?: string;
  sx?: SxProps;
}

const AvatarWrapper = styled(Box)<WrapperProps>(({ size }) => ({
  width: size,
  height: size,
  objectFit: 'cover',
  overflow: 'hidden',
  borderRadius: size,
  '& img': {
    height: 'auto',
    maxWidth: '100',
  },
}));

export const CircularRpmAvatar: FC<Props> = ({
  src,
  size = '64px',
  name,
  sx,
}) => {
  if (!src) {
    return null;
  }

  return (
    <AvatarWrapper sx={sx} size={size}>
      <img
        style={{ maxHeight: '100%', objectFit: 'cover' }}
        src={src}
        alt={name ? `Avatar of ${name}` : `Character avatar`}
      />
    </AvatarWrapper>
  );
};
