import React from 'react';
import { MenuItem, Select, OutlinedInput, styled, InputLabel, Box } from '@mui/material';

interface PropsI {
  options: any[];
  value: string;
  onChange: any;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  background?: string;
  // placeholder?: string;
  label?: string;
  sx?: any;
  displayEmpty?: boolean;
  classes?: any;
  selectClasses?: any;
}

function DropdownButton({
  options,
  value,
  onChange,
  width,
  height,
  background,
  borderRadius,
  sx,
  // placeholder,
  label,
  displayEmpty,
  classes,
  selectClasses,
}: PropsI) {
  const StyledSelect = styled(Select)(({ theme }) => ({
    '.MuiSelect-select': {
      width: width || theme.spacing(84.5),
      height: height || 'auto',
      background: background || '#F4F5F7',
      borderRadius: borderRadius || theme.spacing(1.5),
    },
    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
    '.MuiOutlinedInput-input': {
      padding: theme.spacing(6, 7, 7, 7),
    },
  }));

  return label ? (
    <Box className={selectClasses}>
      <InputLabel sx={{ color: '#717171', fontSize: 13, marginLeft: 7 }}>{label}</InputLabel>
      <StyledSelect
        displayEmpty={displayEmpty}
        value={value}
        sx={sx}
        classes={classes}
        onChange={onChange}
        input={<OutlinedInput />}
        inputProps={{ 'aria-label': 'Without label' }}
        // IconComponent={<ArrowDown />}
      >
        {options.map((option) => (
          <MenuItem key={option?.value || option} value={option?.value || option}>
            {option?.label || option}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  ) : (
    <StyledSelect
      displayEmpty={displayEmpty}
      value={value}
      sx={sx}
      classes={classes}
      onChange={onChange}
      input={<OutlinedInput />}
      inputProps={{ 'aria-label': 'Without label' }}
      // IconComponent={<ArrowDown />}
      MenuProps={{
        sx: {
          '.MuiPaper-root': {
            maxHeight: '30vh',
            overFlow: 'scroll',
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option?.value || option} value={option?.value || option}>
          {option?.label || option}
        </MenuItem>
      ))}
    </StyledSelect>
  );
}

export default DropdownButton;
