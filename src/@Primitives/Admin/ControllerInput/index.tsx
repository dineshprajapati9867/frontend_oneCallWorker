import { Box } from '@mui/system';
import React from 'react';
import { Controller } from 'react-hook-form';
import TextInput from '../../Input/TextInput/TextInput';

export interface ControllerInputI {
  styles?: object;
  name: string;
  control: any;
  rules?: object;
  label?: string;
  type?: string;
  placeholder?: string;
  variant: 'filled' | 'outlined' | 'standard' | undefined;
  size: 'small' | 'medium' | undefined;
}

export function ControllerInput(props: ControllerInputI) {
  const { styles, name, control, rules, label, type, placeholder, variant, size } = props;
  return (
    <Box sx={{ ...styles }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label={label}
            type={type}
            placeholder={placeholder}
            variant={variant}
            size={size}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </Box>
  );
}
