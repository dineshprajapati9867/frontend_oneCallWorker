import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { ChevronArrowDown, ChevronArrowUp, ErrorIcon } from '@Icons';
import { hooks } from '@Utils';
import { useResize } from '@Utils/hooks';
import { ToolTip } from '@Primitives';
import { theme } from '@Utils/theme';

const DropDownContainer = styled(Box)(() => ({
  position: 'relative',
  '.dropDownLabel': {
    ...theme.typography.subtitle2,
    fontWeight: 400,
    color: theme.palette.secondary.dark,
    paddingBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
  },
  '.tool_tip_item': {
    marginLeft: theme.spacing(2),
  },
  '.dropDownText': {
    width: '100%',
    position: 'relative',
    height: theme.spacing(20),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 4),
    borderRadius: theme.spacing(1.5),
    fontSize: theme.spacing(7),
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
  },
  '.error_message': {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    top: 42,
    left: 0,
    '.error_text': {
      color: theme.palette.error.main,
      paddingLeft: theme.spacing(3),
      fontWeight: '400 !important',
    },
  },
  '.dropDownLists': {
    position: 'absolute',
    background: theme.misc.lightAsSilver,
    boxShadow: '2px',
    border: `1px solid ${theme.misc.borderColor}`,
    maxHeight: '150px',
    height: 'auto',
    overflowY: 'auto',
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
    zIndex: 10,
    '.dropDownListItem': {
      fontSize: theme.spacing(7),
      fontWeight: 400,
      lineHeight: '145%',
      padding: theme.spacing(4, 4),
      textTransform: 'capitalize',
    },
  },
}));

interface CustomDropDownI {
  options: {
    id: string;
    value: string | number;
  }[];
  customPlaceholder?: string;
  dropDownLabel?: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  error?: boolean;
  errorText?: string | null;
  disabled?: boolean;
  toolTipContent?: string;
}

/**
 * A custom dropdown component that can be used to select a value from a list of options.
 * @param {CustomDropDownI} props - The props for the component.
 * @returns A custom dropdown component that can be used to select a value from a list of options.
 */
export function CustomDropDown({
  options,
  customPlaceholder,
  dropDownLabel,
  selectedValue,
  setSelectedValue,
  error,
  errorText,
  disabled,
  toolTipContent,
}: CustomDropDownI) {
  const [isActive, setIsActive] = React.useState(false);

  const dropdownRef = React.useRef<HTMLTableElement>(
    null,
  ) as React.MutableRefObject<HTMLTableElement>;

  const { width } = useResize(dropdownRef);

  hooks.useOnClickOutside(dropdownRef, () => setIsActive(false));

  const dropdownBorder = () => {
    if (isActive && !error) {
      return `1px solid ${theme.palette.secondary.dark}`;
    }
    if (error) {
      return `1px solid ${theme.palette.error.main}`;
    }
    return `1px solid ${theme.misc.naturalLight}`;
  };

  return (
    <DropDownContainer ref={dropdownRef}>
      <Box className='dropDownLabel'>
        {dropDownLabel}{' '}
        <Box className='tool_tip_item'> {toolTipContent && <ToolTip title={toolTipContent} />}</Box>
      </Box>
      <Box
        className='dropDownText'
        sx={{
          color: selectedValue ? theme.text.neutralLight : theme.misc.inputPlaceholder,
          fontWeight: selectedValue ? 400 : 200,
          border: dropdownBorder(),
          '&:hover': {
            background: selectedValue ? '' : theme.palette.primary.light,
          },
          cursor: disabled ? 'not-allowed' : 'pointer',
          background: isActive ? theme.palette.primary.contrastText : theme.misc.lightAsSilver,
        }}
        onClick={() => !disabled && setIsActive(!isActive)}
      >
        {selectedValue || customPlaceholder || 'Choose One'}
        {!isActive ? <ChevronArrowDown /> : <ChevronArrowUp />}
        {error && errorText && (
          <Box className='error_message'>
            <ErrorIcon />
            <Typography variant='body2' className='error_text'>
              {errorText}
            </Typography>
          </Box>
        )}
      </Box>
      {isActive && (
        <Box className='dropDownLists' width={width}>
          {options.map((option) => (
            <Box
              key={option.id}
              className='dropDownListItem'
              sx={{
                background: selectedValue === option.value ? theme.text.tagColor : '',
                color:
                  selectedValue === option.value
                    ? theme.palette.primary.contrastText
                    : theme.text.neutralLight,
                '&:hover': {
                  background: selectedValue === option.value ? '' : theme.palette.primary.light,
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                if (option.value === selectedValue) {
                  setSelectedValue('');
                  setIsActive(false);
                } else {
                  setSelectedValue(option.value);
                  setIsActive(false);
                }
              }}
            >
              {option.value}
            </Box>
          ))}
        </Box>
      )}
    </DropDownContainer>
  );
}
