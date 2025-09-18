import React from 'react';
import { styled, Switch, SwitchProps, Theme } from '@mui/material';

interface SwitchPropsI extends SwitchProps {
  variant?: string;
}

/**
 * Renders backgroundColor for the Switch box based on conditions.
 */
const handleSwitchBackgroundColor = (theme: Theme, variant: string | undefined) => {
  if (theme.palette.mode === 'dark') {
    return theme.misc.inActiveLight;
  }
  if (variant === 'activeToggle') {
    return theme.misc.activeBlue;
  }
  if (variant === 'customer') {
    return theme.misc.misctext1;
  }
  if (variant === 'check_in') {
    return theme.misc.success;
  }
  return theme.misc.activeGreen;
};

const SwitchBox = styled(Switch)<SwitchPropsI>(({ theme, variant }) => ({
  width: 44,
  height: 24,
  padding: 0,
  margin: 1,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: handleSwitchBackgroundColor(theme, variant),
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 100,
    }),
  },
  '& .MuiTypography-root': {
    fontWeight: '600',
  },
}));

function IOSSwitch(props: SwitchPropsI) {
  const { variant, ...rest } = props;

  return (
    <SwitchBox
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      variant={variant}
      {...rest}
    />
  );
}

export default IOSSwitch;
