import React from 'react';
import { Box, TextField, InputLabel, styled, Typography, FormHelperText } from '@mui/material';
import { ErrorIcon } from '@Assets/@Icons/ErrorIcon';

interface CalendarInputWithDatePickerI {
  value: Date | string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string | null;
  minDate?: any;
  maxDate?: any;
  type?: string;
}

const CalendarInputLabelStyles = styled(InputLabel)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 400,
  color: theme.palette.secondary.dark,
  position: 'unset',
  transform: 'none',
  marginBottom: theme.spacing(2),
  '&.Mui-error': {
    color: `${theme.palette.secondary.dark} !important`,
  },
  '&.Mui-disabled': {
    opacity: 0.4,
  },
}));

const CalendarInput = styled(TextField)(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  '.MuiInputBase-root': {
    ...theme.typography.inputValue,
    backgroundColor: theme.misc.lightAsSilver,
    padding: 0,
    width: '100%',
    'fieldset > legend': {
      width: '0',
    },
    '.MuiInput-input': {
      ...theme.typography.inputValue,
      padding: theme.spacing(5, 4),
    },
    '.MuiOutlinedInput-input': {
      ...theme.typography.inputValue,
      padding: theme.spacing(5, 4),
      color: theme.palette.primary.main,
      '&:disabled': {
        background: theme.misc.lightAsSilver,
        cursor: 'not-allowed',
      },
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.misc.naturalLight,
    },
    '&.Mui-disabled': {
      '.MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '.MuiButtonBase-root': {
      marginRight: 0,
    },
  },
}));

export function CalendarInputWithDatePicker({
  value,
  onChange,
  label,
  disabled,
  error,
  helperText,
  minDate,
  maxDate,
  type,
}: CalendarInputWithDatePickerI) {
  return (
    <Box>
      <CalendarInputLabelStyles>{label}</CalendarInputLabelStyles>
      <CalendarInput
        value={value}
        onChange={onChange}
        id='date'
        type={type || 'date'}
        error={error}
        disabled={disabled}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: minDate,
          max: maxDate,
        }}
        onKeyDown={(e) => {
          if (['e', 'E', '+', '-', '.', '@', '$', '#', '!', '&', '^', '*', '='].includes(e.key)) {
            e.preventDefault();
          }
        }}
      />
      {error && helperText ? (
        <FormHelperText
          sx={() => ({
            display: 'flex',
            marginLeft: 0,
          })}
        >
          <ErrorIcon />{' '}
          <Typography
            variant='body2'
            sx={(theme) => ({ marginLeft: '2.5px', color: theme.palette.error.main })}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      ) : (
        ''
      )}
    </Box>
  );
}
