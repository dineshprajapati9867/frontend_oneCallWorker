import React from 'react';
import { Checkbox, FormControlLabel, SxProps } from '@mui/material';

export interface CheckBoxI {
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  name?: string;
  disabled?: boolean;
  checkedIcon?: any;
  disableRipple?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  label?: string;
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  size?: 'medium' | 'small';
  checkboxProps?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
  sx?: SxProps;
}

function CheckBox(props: CheckBoxI) {
  const {
    label,
    checked,
    defaultChecked,
    id,
    name,
    disabled,
    disableRipple,
    checkedIcon,
    indeterminate,
    required,
    labelPlacement,
    color,
    size,
    checkboxProps,
    onChange,
    sx,
  } = props;

  return (
    <FormControlLabel
      {...props}
      control={
        <Checkbox
          {...checkboxProps}
          id={id || name || 'checkbox-input'}
          name={name}
          defaultChecked={defaultChecked}
          required={required}
          indeterminate={indeterminate}
          checkedIcon={checkedIcon}
          disableRipple={disableRipple}
          color={color}
          size={size}
          sx={sx}
        />
      }
      checked={checked}
      name={name}
      label={label}
      disabled={disabled}
      labelPlacement={labelPlacement}
      onChange={onChange}
      sx={sx}
    />
  );
}

export default CheckBox;
