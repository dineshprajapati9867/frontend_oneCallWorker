import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TextField, styled, Box, Typography, FormHelperText, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ErrorIcon } from '@Icons';

interface PropsI {
  value: Date | string;
  onChange: (newValue: Dayjs | null) => void;
  error?: boolean;
  minTime?: Dayjs;
  maxTime?: Dayjs;
  labelText?: string;
  helperText?: string | null;
  width?: string;
  disabled?: boolean;
  placeholder?: string;
  minutesStep?: number;
  className?: string;
  timeSteps?: number;
}

const TimeInputContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '.MuiFormControl-root': {
    background: theme.misc.lightAsSilver,
    width: '100%',
  },
  '.label_text': {
    color: theme.palette.secondary.dark,
    fontWeight: '400',
    marginBottom: theme.spacing(2),
  },
  '.error_text': {
    position: 'absolute',
    color: theme.palette.error.main,
    display: 'flex',
    alignItems: 'center',
  },
  '.MuiInputBase-root': {
    height: '40px !important',
    cursor: 'pointer',
  },
  '.MuiInputBase-input': {
    cursor: 'pointer',
  },
  fieldset: {
    border: `none !important`,
  },
  '.calender-input-box': {
    '.MuiOutlinedInput-root': {
      '.Mui-disabled': {
        '-webkit-text-fill-color': theme.palette.text.primary,
        cursor: 'not-allowed',
        opacity: 0.7,
      },
    },
  },
  // Custom styles to hide Cancel button
  '.MuiDialogActions-root button:first-of-type': {
    display: 'none',
  },
}));

/**
 * Calendar ok button
 */
function CustomActionBar({ onAccept }: { onAccept: () => void }) {
  return (
    <Box sx={{ position: 'absolute', bottom: 2, right: 2 }}>
      <Button
        size='small'
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onAccept();
        }}
      >
        OK
      </Button>
    </Box>
  );
}

export function TimePickerInput({
  value,
  onChange,
  labelText,
  helperText,
  error = false,
  minTime,
  maxTime,
  width = '192px',
  disabled,
  minutesStep,
  placeholder = 'hh:mm (a|p)m',
  className,
  timeSteps,
}: PropsI) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLDivElement>(null);
  const openByAcceptRef = React.useRef(false);

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!disabled) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (!openByAcceptRef.current) {
      setOpen(false);
    }
    openByAcceptRef.current = false;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') {
      setOpen(true);
    }
  };

  const handleTimeChange = (newValue: Dayjs | null) => {
    onChange(newValue);
  };

  const handleAccept = () => {
    openByAcceptRef.current = true;
    setOpen(false);
  };

  return (
    <TimeInputContainer className={className} width={width}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant='subtitle2' className='label_text'>
          {labelText}
        </Typography>
        <Box
          sx={{
            border: (theme) =>
              error ? `1px solid ${theme.misc.darkRed}` : `1px solid ${theme.misc.borderColor}`,
          }}
          onClick={(e) => handleInputClick(e)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        >
          <TimePicker
            value={value ? dayjs(value) : null}
            onChange={handleTimeChange}
            minutesStep={minutesStep}
            timeSteps={typeof timeSteps === 'number' ? { minutes: timeSteps } : undefined}
            open={open}
            onClose={handleClose}
            onOpen={() => setOpen(true)}
            slotProps={{
              textField: {
                InputProps: {
                  readOnly: true,
                  placeholder,
                },
                className: 'calender-input-box',
                disabled,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  e.stopPropagation();
                  if (!disabled) {
                    setOpen(true);
                  }
                },
                sx: {
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: 'rgba(0, 0, 0, 0.87)',
                    cursor: 'not-allowed',
                  },
                },
              },
              popper: {
                placement: 'bottom-start',
                modifiers: [
                  {
                    name: 'preventOverflow',
                    enabled: true,
                    options: {
                      boundary: document.body,
                    },
                  },
                ],
              },
            }}
            slots={{
              textField: TextField,
              actionBar: () => <CustomActionBar onAccept={handleAccept} />,
            }}
            minTime={minTime}
            maxTime={maxTime}
            disabled={disabled}
            readOnly={disabled}
          />
        </Box>
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
      </LocalizationProvider>
    </TimeInputContainer>
  );
}
