import * as React from 'react';
import { TextField, InputLabel, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { ChevronArrowDown } from '@Icons';

export interface AutocompleteI {
  variant: 'outlined' | 'standard' | 'filled' | undefined;
  size?: 'small' | 'medium';
  placeholder?: string;
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  labelClassName?: string;
  onChange?: (e: any) => void;
  autoCompleteList: { name: string }[];
  sx?: any;
  defaultValue?: any;
}

const TextFieldComponent = styled(TextField)(({ theme }) => ({
  ...theme.typography.body1,
  width: theme.spacing(226.5),
  '&.text-input-box': {
    color: theme.palette.primary.main,
    '.MuiInputBase-root': {
      fontSize: '0.95rem',
      background: theme.palette.secondary.light,
      padding: theme.spacing(5, 4),
      border: `1px solid ${theme.misc.borderColor} !important`,
      borderRadius: theme.spacing(1.5),
    },
    '.MuiFormHelperText-root': {
      marginLeft: '0',
    },
  },
}));
const InputLabelComponent = styled(InputLabel)(({ theme }) => ({
  '&.text-input-label': {
    ...theme.typography.subtitle2,
    color: theme.palette.secondary.dark,
    transform: 'none',
    marginBottom: theme.spacing(2),
    fontWeight: '600',
  },
  '&.disabled-label': {
    color: theme.text.light,
  },
}));

function AutocompleteInput(props: AutocompleteI) {
  const {
    placeholder,
    size,
    variant,
    label,
    name,
    value,
    required,
    disabled,
    labelClassName,
    onChange,
    autoCompleteList,
    sx,
    defaultValue,
  } = props;
  return (
    <Box>
      <InputLabelComponent
        htmlFor={`text-input-${name || 'box'}`}
        required={required}
        className={`text-input-label ${disabled ? 'disabled-label' : ''} ${labelClassName || ''}`}
      >
        {label}
      </InputLabelComponent>
      <Autocomplete
        freeSolo
        id='autocomplete'
        disableClearable
        options={autoCompleteList.map((option) => option.name)}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        popupIcon={<ChevronArrowDown />}
        renderInput={(params) => (
          <TextFieldComponent
            className='text-input-box'
            {...params}
            variant={variant}
            color='secondary'
            placeholder={placeholder}
            size={size}
            hiddenLabel
            label=''
            sx={sx}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Box>
  );
}

export default AutocompleteInput;
