import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/material';

export interface ButtonI {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large' | 'custom';
  onClick?: (e: any) => void;
  sx?: SxProps<Theme>;
  type?: 'button' | 'submit' | 'reset';
  form?: any;
  disabled?: boolean;
}

const SmallStyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '5px',
  padding: theme.spacing(2, 7.5),
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: theme.spacing(12),
}));
const MediumStyledButton = styled(Button)(() => ({
  borderRadius: '5px',
  padding: '14px, 25px, 14px, 25px',
  fontWeight: '400',
}));
const LargeStyledButton = styled(Button)(() => ({
  borderRadius: '8px',
  padding: '8px, 16px, 8px, 16px',
  width: '137px',
}));
const CustomStyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(2, 7.5),
  borderRadius: theme.spacing(2.5),
  textTransform: 'none',
  width: 'auto',
  minWidth: 'auto',
}));
const IconButton = styled(Button)(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(2, 7.5),
  borderRadius: theme.spacing(2.5),
  textTransform: 'none',
  width: 'auto',
  minWidth: 'auto',
}));

function BasicButton({
  children,
  variant = 'contained',
  color,
  size = 'medium',
  type,
  onClick,
  sx,
  form,
  disabled,
  ...rest
}: ButtonI) {
  if (size === 'small') {
    return (
      <SmallStyledButton
        {...rest}
        type={type}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        sx={sx}
        disabled={disabled}
      >
        {children}
      </SmallStyledButton>
    );
  }
  if (size === 'medium') {
    return (
      <MediumStyledButton
        {...rest}
        type={type}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        sx={sx}
        form={form}
        disabled={disabled}
      >
        {children}
      </MediumStyledButton>
    );
  }
  if (size === 'large') {
    return (
      <LargeStyledButton
        {...rest}
        type={type}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        sx={sx}
        disabled={disabled}
      >
        {children}
      </LargeStyledButton>
    );
  }
  if (size === 'custom') {
    return (
      <CustomStyledButton
        {...rest}
        type={type}
        variant={variant}
        sx={sx}
        color={color}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </CustomStyledButton>
    );
  }
  return (
    <IconButton
      {...rest}
      type={type}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      sx={sx}
      disabled={disabled}
    >
      {children}
    </IconButton>
  );
}
export default BasicButton;
