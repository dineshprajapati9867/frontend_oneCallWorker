import React from 'react';
import { Box, Input, InputProps, InputAdornment, styled } from '@mui/material';

export interface InputI extends InputProps {
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChange: (e: any) => void;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  width?: string | number;
  height?: string | number;
  autoFocus?: boolean;
}

const CustomInputStyled = styled(Input)(({ theme }) => ({
  ...theme.typography.inputValue,
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(2.5),
  marginRight: theme.spacing(10),
  height: '100%',
  backgroundColor: theme.misc.lightAsSilver,
  width: '100%',
  padding: theme.spacing(5, 4),
  letterSpacing: theme.spacing(0.5),
  color: theme.misc.inputPlaceholder,
  fontSize: '14px',
  lineHeight: theme.spacing(10),
  // color:theme.misc.inactive,
  '&:before, &:after, &:hover:not(.Mui-disabled):before': {
    border: '0',
  },
  '&.Mui-disabled': {
    // backgroundColor: theme.misc.naturalLight,
    opacity: 0.6,
  },
  '&.Mui-error': {
    border: `2px solid ${theme.misc.darkRed}`,
  },
  '&.Mui-focused': {
    backgroundColor: theme.palette.primary.contrastText,
    border: `1px solid ${theme.misc.focusedBorder}`,
  },
}));

export function CustomInput({
  value,
  placeholder,
  disabled,
  error,
  onChange,
  icon,
  iconPosition = 'end',
  width = 313,
  height = 40,
  autoFocus,
}: InputI) {
  if (iconPosition === 'end') {
    return (
      <Box width={width} height={height}>
        <CustomInputStyled
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          onChange={onChange}
          autoFocus={autoFocus}
          endAdornment={<InputAdornment position='end'>{icon}</InputAdornment>}
        />
      </Box>
    );
  }
  if (iconPosition === 'start') {
    return (
      <Box width={width} height={height}>
        <CustomInputStyled
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          onChange={onChange}
          endAdornment={<InputAdornment position='start'>{icon}</InputAdornment>}
        />
      </Box>
    );
  }
  return (
    <Box width={width} height={height}>
      <CustomInputStyled
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        onChange={onChange}
      />
    </Box>
  );
}
