import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SearchIcon } from '@Icons';
import TextInput, { TextInputI } from '../../Input/TextInput/TextInput';

interface SearchTextInputI extends TextInputI {
  searchVariant?: 'OnBoarding' | 'rectangular';
}

const WrapperBox = styled(Box)({
  display: 'inline-block',
});

const SearchInputBox = styled(TextInput)(({ theme }) => ({
  '.MuiInputBase-root': {
    borderRadius: '20px',
    background: theme.palette.secondary.light,
    width: '326px',
    height: '32px',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(3.5, 7.2),
    '&:before, &:after, &:hover:not(.Mui-disabled):before': {
      border: '0',
    },
  },
  '.MuiInputBase-input': {
    fontSize: theme.spacing(7),
    lineHeight: theme.spacing(8),
    color: theme.palette.secondary.dark,
  },
}));

const OnBoardingSearch = styled(SearchInputBox)(() => ({
  '.MuiInputBase-root': {
    width: '250px',
    height: '32px',
  },
}));

const RectangularSearch = styled(TextInput)(({ theme }) => ({
  '.MuiInputBase-root': {
    borderRadius: theme.spacing(2.5),
    background: theme.palette.primary.contrastText,
    width: theme.spacing(263),
    height: theme.spacing(22.5),
    border: `1px solid ${theme.misc.borderColor}`,
    padding: theme.spacing(0, 5),
    '&:before, &:after, &:hover:not(.Mui-disabled):before': {
      border: '0',
    },
  },
}));

function SearchTextInput(props: SearchTextInputI) {
  const {
    name,
    value,
    preContent,
    placeholder,
    size,
    label,
    variant,
    className,
    onChange,
    searchVariant,
    sx,
  } = props;

  // eslint-disable-next-line no-lone-blocks
  {
    if (searchVariant === 'OnBoarding') {
      return (
        <WrapperBox>
          <OnBoardingSearch
            {...props}
            preContent={preContent || <SearchIcon />}
            placeholder={placeholder || 'Search'}
            name={name}
            label={label}
            value={value}
            size={size}
            className={className}
            variant={variant || 'filled'}
            onChange={onChange}
            autoComplete='test'
            sx={sx}
          />
        </WrapperBox>
      );
    }
    if (searchVariant === 'rectangular') {
      return (
        <WrapperBox>
          <RectangularSearch
            {...props}
            postContent={preContent || <SearchIcon />}
            placeholder={placeholder || 'Search'}
            name={name}
            label={label}
            value={value}
            size={size}
            className={className}
            variant={variant || 'filled'}
            onChange={onChange}
            autoComplete='test'
            sx={sx}
          />
        </WrapperBox>
      );
    }
    return (
      <WrapperBox>
        <SearchInputBox
          {...props}
          preContent={preContent || <Search />}
          placeholder={placeholder || 'Search'}
          name={name}
          label={label}
          value={value}
          size={size}
          className={className}
          variant={variant || 'filled'}
          onChange={onChange}
          sx={sx}
        />
      </WrapperBox>
    );
  }
}

export default SearchTextInput;
