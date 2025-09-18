import { FormHelperText, styled, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export interface AddressI {
  error: any;
  onChange: () => void;
  value: string;
  minRows?: number;
  label: string;
  placeholder: string;
}

const FormHelperTextC = styled(FormHelperText)(({ theme }) => ({
  marginLeft: '0',
  color: theme.palette.error.main,
}));

const Label = styled('label')<{ error: { error?: any } }>(({ theme, error }) => ({
  display: 'block',
  fontSize: theme.spacing(8),
  lineHeight: theme.spacing(10),
  color: theme.text.label,
  marginBottom: '0.3rem',
  ...(error.error && {
    color: theme.palette.error.main,
  }),
}));

const TextArea = styled(TextareaAutosize)<{ ownerState: { error?: any } }>(
  ({ theme, ownerState }) => ({
    width: '100%',
    height: '95px',
    border: '1px solid',
    borderColor: theme.misc.inputBorderColor,
    borderRadius: '5px',
    fontSize: theme.spacing(7.5),
    lineHeight: theme.spacing(10),
    color: theme.palette.primary.dark,
    padding: theme.spacing(8, 7),
    ...(ownerState.error && {
      borderColor: theme.palette.error.main,
    }),
  }),
);

export function Address({ error, value, onChange, minRows, label, placeholder }: AddressI) {
  return (
    <>
      <Box>
        <Label error={{ error }}>{label}</Label>
      </Box>
      <TextArea
        placeholder={placeholder}
        ownerState={{ error }}
        minRows={minRows}
        value={value}
        onChange={onChange}
      />
      {error ? <FormHelperTextC>Address is required</FormHelperTextC> : ''}
    </>
  );
}
