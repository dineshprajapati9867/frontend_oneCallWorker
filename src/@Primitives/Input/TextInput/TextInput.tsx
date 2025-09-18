import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  SxProps,
  FormHelperText,
  Typography,
  Theme,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ErrorIcon } from '@Assets/@Icons/ErrorIcon';

export interface TextInputI {
  type?: string;
  size?: 'small' | 'medium';
  label?: string;
  placeholder?: string;
  name?: string;
  value?: any;
  defaultValue?: any;
  helperText?: string | null;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
  rows?: string | number;
  minRows?: string | number;
  maxRows?: string | number;
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  variant?: 'outlined' | 'standard' | 'filled' | 'labeledAdornment';
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
  preContent?: string | React.ReactNode;
  postContent?: string | React.ReactNode;
  autoComplete?: string;
  sx?: SxProps<Theme>;
  labelsx?: SxProps<Theme>;
  formControlSx?: SxProps;
  preContentSx?: SxProps;
  postContentSx?: SxProps;
  inputProps?: any;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  inputRef?: any;
  onKeyDown?: (e: any) => void;
  onPaste?: (e: any) => void;
  labelAdornment?: string | React.ReactNode;
}

const FormControlComponent = styled(FormControl)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
}));

const InputLabelComponent = styled(InputLabel)(({ theme }) => ({
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
    color: theme.palette.text.primary,
    opacity: 1,
  },
}));

const TextFieldComponent = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    ...theme.typography.inputValue,
    backgroundColor: theme.misc.lightAsSilver,
    padding: 0,
    'fieldset > legend': {
      width: '0',
    },
    '.MuiOutlinedInput-input': {
      ...theme.typography.inputValue,
      padding: theme.spacing(5, 4),
      color: theme.palette.primary.main,
      '&:disabled': {
        background: theme.misc.lightAsSilver,
        cursor: 'not-allowed',
      },
      '&.Mui-disabled': {
        color: theme.misc.lightAsSilver,
        WebkitTextFillColor: theme.palette.text.primary,
      },
    },
    '.MuiInput-input': {
      ...theme.typography.inputValue,
      padding: theme.spacing(5, 4),
    },
    '&.Mui-disabled': {
      '.MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    fieldset: {
      borderColor: theme.misc.naturalLight,
    },
    '&.labeledAdornment': {
      '&.MuiOutlinedInput-root.Mui-disabled': {
        border: `1px solid ${theme.broker.frostGray}`,
      },
      '&.MuiInputBase-root': {
        backgroundColor: 'transparent',
        borderRadius: theme.spacing(6),
        height: theme.spacing(32),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(6.5, 7),
        '& fieldset': {
          borderWidth: theme.spacing(0.5),
        },
        '& .MuiOutlinedInput-input': {
          padding: '10px 0 0 4px !important',
          paddingLeft: theme.spacing(0),
          width: '100%',
          '&:disabled': {
            background: 'transparent',
            cursor: 'not-allowed',
          },
        },
        '& .MuiInputAdornment-positionStart': {
          width: '100%',
          marginBottom: theme.spacing(2),
        },
      },
    },
  },
  '.MuiFormHelperText-root': {
    ...theme.typography.body2,
    marginLeft: '0',
    marginTop: theme.spacing(1),
    display: 'none',
  },
  '.Mui-error:after': {
    borderColor: theme.misc.darkRed,
    borderWidth: '2px',
  },
}));

const LabelAdornment = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '12px',
  color: theme.text.primary,
  width: '100%',
  marginTop: '10px',
  paddingLeft: '4px',
}));

function TextInput(props: TextInputI) {
  const {
    type,
    size,
    label,
    placeholder,
    name,
    value,
    defaultValue,
    helperText,
    error,
    variant,
    disabled,
    required,
    multiline,
    rows,
    minRows,
    maxRows,
    preContent,
    postContent,
    onChange,
    autoComplete,
    sx,
    labelsx,
    formControlSx,
    preContentSx,
    postContentSx,
    className,
    onFocus,
    onBlur,
    inputRef,
    autoFocus,
    onPaste,
    labelAdornment,
  } = props;

  /**
   * Custom onBlur handler that trims trailing spaces right before losing focus.
   * This ensures the final value never has unwanted trailing spaces in your DB.
   */
  // const handleCustomBlur = (
  //   e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const trimmedValue = e.target.value.trimEnd();

  //   if (onChange) {
  //     onChange({
  //       ...e,
  //       target: {
  //         ...e.target,
  //         value: trimmedValue,
  //       },
  //     });
  //   }

  //   if (onBlur) {
  //     onBlur(e);
  //   }
  // };

  /**
   * Controlled pasted for number type component
   */
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = e.clipboardData || window.Clipboard;
    const pastedText = clipboardData.getData('text');

    if (type === 'number') {
      e.preventDefault();
      const cleanedNumber = pastedText.replace(/\D/g, '');

      document.execCommand('insertText', false, cleanedNumber);
      const inputElement = e.currentTarget.querySelector('input') as HTMLInputElement;
      if (inputElement && onChange) {
        onChange({
          target: {
            ...inputElement,
            name,
            value: inputElement.value,
          },
        });
      }
    }

    if (onPaste) {
      onPaste(e);
    }
  };
  const isLabeledAdornmentVariant = variant === 'labeledAdornment';

  return (
    <FormControlComponent
      sx={{ width: '100%', ...formControlSx, position: 'relative' }}
      error={error}
      disabled={disabled}
      className={className}
    >
      {label && !isLabeledAdornmentVariant && (
        <InputLabelComponent
          htmlFor={`text-input-${name || 'box'}`}
          required={required}
          sx={labelsx}
        >
          {label}
        </InputLabelComponent>
      )}
      <TextFieldComponent
        {...props}
        autoComplete={autoComplete}
        sx={{
          ...sx,
          // width: isLabeledAdornmentVariant ? '399px' : undefined,
        }}
        fullWidth
        hiddenLabel
        label=''
        id={`text-input-${name || 'box'}`}
        type={type || 'text'}
        size={size || 'small'}
        // variant={
        //   isLabeledAdornmentVariant ? 'outlined' : variant || 'outlined' || 'labeledAdornment'
        // }
        variant={
          isLabeledAdornmentVariant ? 'outlined' : variant || 'outlined'
        }
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        onPaste={handlePaste}
        InputProps={{
          startAdornment: isLabeledAdornmentVariant ? (
            <InputAdornment position='start' sx={{ width: '100%' }}>
              <LabelAdornment>{labelAdornment || label}</LabelAdornment>
            </InputAdornment>
          ) : preContent ? (
            <InputAdornment position='start' sx={preContentSx}>
              {preContent}
            </InputAdornment>
          ) : null,
          endAdornment: postContent ? (
            <InputAdornment position='end' sx={postContentSx}>
              {postContent}
            </InputAdornment>
          ) : null,
          classes: {
            root: isLabeledAdornmentVariant ? 'labeledAdornment' : '',
          },
        }}
        inputRef={inputRef}
      />

      {error && helperText ? (
        <FormHelperText
          sx={() => ({
            display: 'flex',
            marginLeft: 0,
            position: 'absolute',
            top: isLabeledAdornmentVariant ? 64 : 61,
          })}
        >
          <ErrorIcon />{' '}
          <Typography
            variant='body2'
            component='span'
            sx={(theme) => ({
              marginLeft: theme.spacing(1.25),
              color: theme.palette.error.main,
            })}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      ) : null}
    </FormControlComponent>
  );
}

export default TextInput;
