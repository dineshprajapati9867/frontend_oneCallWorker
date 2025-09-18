import { Dialog, SxProps, Theme } from '@mui/material';
import React from 'react';
import { Loader } from '@Primitives/Loader';

export interface BasicModalI {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  fullScreen?: boolean;
  maxWidth?: any;
  style?: React.CSSProperties;
  sx?: SxProps<Theme> | undefined;
  isLoading?: boolean;
}

export function BasicModal({
  open,
  close,
  children,
  fullScreen,
  maxWidth,
  style,
  sx,
  isLoading,
}: BasicModalI) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        sx={sx}
        PaperProps={{
          style: { ...style },
        }}
      >
        {isLoading ? <Loader type='section' /> : <div>{children}</div>}
      </Dialog>
    </div>
  );
}
