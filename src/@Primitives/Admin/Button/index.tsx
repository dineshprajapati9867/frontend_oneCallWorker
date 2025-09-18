import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonI {
  children: React.ReactNode;
  type?: 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
  sx?: any;
}

const SmallButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(4, 12.5),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.misc.new}`,
  textTransform: 'none',
  whiteSpace: 'nowrap',
}));

const MediumButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(4, 12.5),
  borderRadius: theme.spacing(2.5),
  border: `1px solid ${theme.misc.new}`,
  textTransform: 'none',
  whiteSpace: 'nowrap',
}));

const BasicButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(4, 12.5),
  width: theme.spacing(120),
  border: `1px solid ${theme.misc.new}`,
  textTransform: 'none',
  whiteSpace: 'nowrap',
}));

export function CustomButton({ children, type, startIcon, endIcon, onClick, sx }: CustomButtonI) {
  if (type === 'small') {
    return (
      <SmallButton
        variant='outlined'
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        sx={sx}
      >
        {children}
      </SmallButton>
    );
  }
  if (type === 'medium') {
    return (
      <MediumButton
        variant='outlined'
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        sx={sx}
      >
        {children}
      </MediumButton>
    );
  }
  return (
    <BasicButton
      variant='outlined'
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </BasicButton>
  );
}
