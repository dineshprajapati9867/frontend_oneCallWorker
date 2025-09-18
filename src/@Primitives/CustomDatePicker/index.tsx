import React from 'react';
import { TextFieldComponent } from '@Constants/CommonStyledComponents';
import { CalendarIcon, ErrorIcon } from '@Icons';
import {
  Box,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Typography,
  styled,
  Button,
} from '@mui/material';
import DatePicker from 'react-multi-date-picker';

interface PropsI {
  value: any;
  onChange: (date: any) => void;
  mapDays?: any;
  error?: boolean;
  helperText?: string | null;
  multiple?: boolean;
  format?: string;
  placeholder?: string;
  label?: string;
  minDate?: string | Date;
  maxDate?: string | Date;
  disabled?: boolean;
  calendarPosition?: string;
  className?: string;
  style?: any;
  portal?: boolean;
  range?: boolean;
  position?: string;
  icon?: React.ReactNode;
  handleDeleSelectDate?: () => void;
}

const DatePickerContainer = styled(Box)(({ theme }) => ({
  '.rmdp-container': {
    width: '100%',
    '.rmdp-input': {
      width: '100%',
      height: theme.spacing(20),
      borderRadius: theme.spacing(1.5),
      padding: theme.spacing(1, 4),
    },
  },
  '.rmdp-day span': {
    borderRadius: theme.spacing(1.5),
  },
  '.rmdp-day.rmdp-today span': {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.text.dark,
    border: `1px solid ${theme.text.tagColor}`,
  },
  '.rmdp-day.rmdp-selected span': {
    backgroundColor: theme.text.tagColor,
    color: theme.palette.primary.contrastText,
  },
  '.rmdp-week-day': {
    color: theme.text.tableHeader,
    textTransform: 'uppercase',
  },
  '.rmdp-day, .rmdp-week-day': {
    height: theme.spacing(19),
    width: theme.spacing(23),
  },
  '.rmdp-arrow-container': {
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.misc.bgBlue,
    },
  },
  '.rmdp-right i': {
    marginRight: theme.spacing(0),
  },
  '.rmdp-left i': {
    marginLeft: theme.spacing(0),
  },
  '.rmdp-arrow': {
    border: `solid ${theme.palette.primary.main}`,
    borderWidth: theme.spacing(0, 1, 1, 0),
    marginTop: theme.spacing(0),
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

export function CustomDatePicker({
  value,
  onChange,
  error,
  helperText,
  multiple = false,
  format = 'DD/MM/YYYY',
  placeholder = 'Please Select',
  label,
  mapDays,
  minDate,
  maxDate,
  disabled,
  calendarPosition,
  className,
  style,
  portal,
  range = false,
  icon,
  position,
  handleDeleSelectDate,
  ...props
}: PropsI) {
  return (
    <DatePickerContainer className={className}>
      {label && <InputLabelComponent>{label}</InputLabelComponent>}
      <DatePicker
        value={value}
        onChange={onChange}
        multiple={multiple}
        format={format}
        mapDays={mapDays}
        arrow={false}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        calendarPosition={calendarPosition}
        style={style}
        portal={portal}
        range={range}
        buttons
        plugins={[
          <Box key='custom-toolbar' position='bottom'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                padding: '8px 12px',
                backgroundColor: '#f4f6f8',
                width: '100%',
              }}
            >
              <Button
                onClick={() => {
                  props.datePicker?.calendar?.deselect?.();
                  handleDeleSelectDate?.();
                }}
                variant='contained'
                size='small'
              >
                {range ? 'Deselect' : ''}
              </Button>
            </Box>
          </Box>,
        ]}
        {...props}
        render={
          <TextFieldComponent
            placeholder={placeholder}
            disabled={disabled}
            fullWidth
            error={error}
            InputProps={{
              readOnly: true,
              startAdornment: icon ? (
                <InputAdornment position='start' disablePointerEvents>
                  {icon}
                </InputAdornment>
              ) : null,
              endAdornment: !icon ? (
                <InputAdornment position='end' disablePointerEvents>
                  <CalendarIcon />
                </InputAdornment>
              ) : null,
            }}
          />
        }
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
    </DatePickerContainer>
  );
}
