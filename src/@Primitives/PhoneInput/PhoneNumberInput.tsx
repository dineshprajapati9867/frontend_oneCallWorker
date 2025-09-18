import React, { useState } from 'react';
import PhoneInput, { Country, Value } from 'react-phone-number-input/input';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormHelperText,
  SxProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../@Utils/theme';

export interface PhoneNumberInputI {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  helperText?: string | null;
  error?: boolean;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value?: Value) => void;
  labelsx?: SxProps;
  wrapperSx?: SxProps;
  formControlSx?: SxProps;
  countryCodeSx?: SxProps;
}

const FormControlComponent = styled(FormControl)(() => ({
  fontFamily: theme.typography.fontFamily,
  width: '100%',
}));

const InputLabelComponent = styled(InputLabel)(() => ({
  position: 'unset',
  fontSize: theme.spacing(7),
  lineHeight: theme.spacing(10),
  transform: 'none',
  marginBottom: theme.spacing(2.4),
  '&.Mui-error': {
    color: `${theme.misc.errorColor} !important`,
  },
  '&.Mui-disabled': {
    color: theme.text.light,
  },
}));

const PhoneNumberWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.misc.darkGray}`,
  '&:focus-within': {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const SelectBoxComponent = styled(Select)({
  '.MuiSelect-select': {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
  },
  fieldset: {
    border: 0,
  },
  '&:focus-visible': {
    outline: 'none',
  },
  '.MuiSelect-icon': {
    color: 'white',
  },
});

const CountryCodeText = styled('span')(() => ({
  width: 'auto',
  minWidth: theme.spacing(32),
}));
const CountryNameText = styled('span')({
  flex: 1,
});

const PhoneNumberComponent = styled(PhoneInput)({
  border: '0',
  flex: '1',
  background: 'transparent',
  fontSize: '1rem',
  letterSpacing: 'none',
  '&:focus-visible': {
    outline: 'none',
  },
});

const FormHelperTextC = styled(FormHelperText)({
  marginLeft: '0',
});

export interface CountrySelectI {
  name?: string;
  value?: string;
  labels: any;
  disabled?: boolean;
  onChange: (val: any) => void;
  countryCodeSx?: SxProps;
}
/**
 * A custom select component that displays the country code and country name.
 * @param {CountrySelectI} props - The props for the component.
 * @returns A custom select component.
 */
function CountrySelect({
  name,
  value,
  labels,
  disabled,
  onChange,
  countryCodeSx,
  ...rest
}: CountrySelectI) {
  return (
    <SelectBoxComponent
      sx={countryCodeSx}
      {...rest}
      label=''
      value={value}
      onChange={onChange}
      disabled={disabled}
      renderValue={() => {
        if (value) {
          return `+${getCountryCallingCode(value as Country)}`;
        }
        return '';
      }}
    >
      {getCountries().map((country, index) => (
        <MenuItem value={country} key={`country-code-${index + 1}`} className='code-list--item'>
          <CountryCodeText>{`+${getCountryCallingCode(country)}`}</CountryCodeText>
          <CountryNameText>{labels[country]}</CountryNameText>
        </MenuItem>
      ))}
    </SelectBoxComponent>
  );
}

function PhoneNumberInput(props: PhoneNumberInputI) {
  const {
    label,
    placeholder,
    name,
    value,
    helperText,
    onChange,
    error,
    disabled,
    className,
    required,
    labelsx,
    wrapperSx,
    formControlSx,
    countryCodeSx,
  } = props;
  const [country, setCountry] = useState<Country>('IN');

  /**
   * Handles the change of the country code.
   * @param {any} e - the event object
   * @returns None
   */
  const handleChangeCountryCode = (e: any) => setCountry(e.target.value);

  return (
    <FormControlComponent sx={formControlSx} error={error} disabled={disabled}>
      {label && (
        <InputLabelComponent htmlFor='phone-input-box' required={required} sx={labelsx}>
          {label}
        </InputLabelComponent>
      )}
      <PhoneNumberWrapper
        id='phone-input-box'
        sx={{
          borderBottom: error
            ? `2px solid ${theme.misc.errorColor} !important`
            : `1px solid ${theme.misc.darkGray}`,
          ...wrapperSx,
        }}
      >
        <CountrySelect
          countryCodeSx={countryCodeSx}
          labels={en}
          name={`country_${name}`}
          value={country}
          onChange={handleChangeCountryCode}
          disabled={disabled}
        />
        <PhoneNumberComponent
          {...props}
          className={`phone-number--input-box ${className || ''}`}
          defaultCountry={country}
          placeholder={placeholder}
          name={name}
          value={value ? value.toString() : ''}
          onChange={onChange}
          disabled={disabled}
        />
      </PhoneNumberWrapper>
      {helperText && <FormHelperTextC>{helperText}</FormHelperTextC>}
    </FormControlComponent>
  );
}
export default PhoneNumberInput;
