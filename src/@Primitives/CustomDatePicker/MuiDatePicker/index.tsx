import { Box, FormHelperText, InputAdornment, InputLabel, Typography, styled } from '@mui/material';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarIcon, ErrorIcon } from '@Icons';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import React from 'react';
// Omit the value and onChange from DatePickerProps to avoid type conflicts
type CustomDatePickerBaseProps = Omit<DatePickerProps<Dayjs>, 'value' | 'onChange'>;

interface MuiCustomDatePickerProps extends CustomDatePickerBaseProps {
  value?: string | Dayjs | null;
  onChange?: (date: Dayjs | null) => void;
  error?: boolean;
  helperText?: string | null;
  label?: string;
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  views?: Array<'year' | 'month' | 'day'>;
  startIcon?: React.ReactNode;
}

const DatePickerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',

  '.MuiOutlinedInput-root': {
    height: theme.spacing(21),
    borderRadius: theme.spacing(1.5),
    cursor: 'pointer',

    '& input': {
      padding: theme.spacing(1, 4),
      cursor: 'pointer',
    },
  },

  '.MuiDateCalendar-root': {
    width: '100%',
  },

  '.MuiPickersDay-root': {
    borderRadius: theme.spacing(1.5),
    width: theme.spacing(23),
    height: theme.spacing(19),
  },

  '.MuiPickersDay-today': {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.text.dark,
    border: `1px solid ${theme.text.tagColor}`,
  },

  '.Mui-selected': {
    backgroundColor: `${theme.text.tagColor} !important`,
    color: `${theme.palette.primary.contrastText} !important`,
    '&:hover': {
      backgroundColor: theme.text.tagColor,
    },
  },

  '.MuiDateCalendar-weekDayLabel': {
    color: theme.text.tableHeader,
    textTransform: 'uppercase',
  },

  '.MuiPickersSlideTransition-root': {
    '.MuiIconButton-root': {
      alignItems: 'center',
      '&:hover': {
        backgroundColor: theme.misc.bgBlue,
      },
    },
    '.MuiSvgIcon-root': {
      margin: theme.spacing(0, 1),
    },
  },
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
    opacity: 0.4,
  },
}));

export function MuiCustomDatePicker({
  value,
  onChange,
  error,
  helperText,
  label,
  className,
  style,
  format = 'DD/MM/YYYY',
  minDate,
  maxDate,
  disabled,
  placeholder = 'Please Select',
  views,
  startIcon,
  ...muiProps
}: MuiCustomDatePickerProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Dayjs | null>(null);

  /**
   * Give proper date value
   */
  useEffect(() => {
    if (value) {
      const dateValue = typeof value === 'string' ? dayjs(value) : value;
      setInternalValue(dateValue.isValid() ? dateValue : null);
    } else {
      setInternalValue(null);
    }
  }, [value]);

  /**
   * Change value
   */
  const handleChange = (newValue: Dayjs | null) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleOpenCalendar = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  return (
    <DatePickerContainer className={className} style={style}>
      {label && <InputLabelComponent>{label}</InputLabelComponent>}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={internalValue}
          onChange={handleChange}
          views={views}
          format={format}
          minDate={minDate ? dayjs(minDate) : undefined}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
          disabled={disabled}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          {...muiProps}
          slotProps={{
            textField: {
              error,
              // onClick: () => setOpen(true),
              onClick: handleOpenCalendar,
              InputProps: {
                endAdornment: !startIcon && (
                  <InputAdornment position='end'>
                    <div
                      role='button'
                      tabIndex={0}
                      style={{ cursor: 'pointer' }}
                      // onClick={() => setOpen(true)}
                      onClick={handleOpenCalendar}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setOpen(true);
                        }
                      }}
                      aria-label='Open Calendar'
                    >
                      <CalendarIcon />
                    </div>
                  </InputAdornment>
                ),
                startAdornment: <InputAdornment position='start'>{startIcon}</InputAdornment>,
              },
              placeholder,
              // helperText: error ? helperText : undefined,
              fullWidth: true,
            },
          }}
        />
      </LocalizationProvider>

      {error && helperText && (
        <FormHelperText
          sx={() => ({
            display: 'flex',
            marginLeft: 0,
            alignItems: 'center',
            marginTop: 1,
          })}
        >
          <ErrorIcon />
          <Typography
            variant='body2'
            sx={(theme) => ({
              marginLeft: '2.5px',
              color: theme.palette.error.main,
            })}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      )}
    </DatePickerContainer>
  );
}
