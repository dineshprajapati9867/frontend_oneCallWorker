import { Button, SxProps } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

export interface ButtonI {
  className?: string;
  children: React.ReactNode | string | undefined;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  component?: React.ElementType;
  href?: string;
  sx?: SxProps;
  onClick?: (e: any) => void;
}

const RoundedButtonComponent = styled(Button)({
  borderRadius: '2.187rem',
  boxShadow: 'none',
  textTransform: 'unset',
  '&:focus': {
    outline: 'none',
  },
});

function RoundedButton(props: ButtonI) {
  const {
    children,
    variant,
    color,
    size,
    type,
    disabled,
    fullWidth,
    startIcon,
    endIcon,
    href,
    sx,
    onClick,
  } = props;

  return (
    <RoundedButtonComponent
      {...props}
      type={type}
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      onClick={onClick}
    >
      {children}
    </RoundedButtonComponent>
  );
}
export default RoundedButton;
