import React, { useMemo } from 'react';
import { Box, FormHelperText, Typography } from '@mui/material';
import ReactSelect, { components, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { withAsyncPaginate, AsyncPaginate } from 'react-select-async-paginate';
import { ErrorIcon } from '@Assets/@Icons/ErrorIcon';
import { theme } from '@Utils/theme';

interface OptionType {
  id?: string;
  value?: string | number | boolean;
  label: string;
  avatar?: string;
  email?: string;
}

interface SearchableDropDownI {
  label?: string;
  options?: OptionType[];
  onChange: (e: any) => void;
  value: any;
  placeholder?: string;
  helperText?: string | null;
  error?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  defaultValue?: any;
  type?: string;
  loadOptions?: any;
  menuPortalTarget?: HTMLElement | null;
  cacheUniqs?: any;
  additional?: any;
  cacheOptions?: any;
  defaultOptions?: any;
  debounceTimeout?: any;
}

function CustomControl(props: any) {
  const {
    children,
    selectProps: { label },
  } = props;

  return (
    <components.Control {...props}>
      <Box sx={{ width: '100%', position: 'relative' }}>
        {label && (
          <Typography
            fontWeight={500}
            fontSize='12px'
            color='#222'
            sx={{ lineHeight: '18px', mb: '2px' }}
          >
            {label}
          </Typography>
        )}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingRight: '30px',
          }}
        >
          {children[0]}
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {children[1]}
        </Box>
      </Box>
    </components.Control>
  );
}

function CustomDropdownIndicator(props: any) {
  return <components.DropdownIndicator {...props} />;
}

function CustomMultiValueLabel(props: any) {
  return <components.MultiValueLabel {...props} />;
}

function CustomMultiValueRemove(props: any) {
  return <components.MultiValueRemove {...props} />;
}

export function BrokerSearchableDropDown({
  label,
  options,
  onChange,
  value,
  placeholder,
  error,
  helperText,
  isDisabled,
  isClearable,
  isSearchable = true,
  isMulti,
  defaultValue,
  type,
  loadOptions,
  menuPortalTarget,
  additional,
  cacheOptions,
  debounceTimeout,
  defaultOptions,
  cacheUniqs,
}: SearchableDropDownI) {
  const CreatableAsyncPaginate = withAsyncPaginate(CreatableSelect);
  const RenderComponent = useMemo(() => {
    if (type === 'creatable') return CreatableSelect;
    if (type === 'asyncCreatable') return CreatableAsyncPaginate;
    if (type === 'asyncPaginate') return AsyncPaginate;
    return ReactSelect;
  }, [type]);

  const customStyles: StylesConfig = {
    control: (base, state) => ({
      ...base,
      border: `1px solid ${error ? theme.palette.error.main : '#D8DEEA'}`,
      borderRadius: '12px',
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      minHeight: '64px',
      padding: '8px 14px',
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      flexWrap: 'wrap', // Allow chips to wrap
      '&:hover': {
        borderColor: state.isFocused ? theme.palette.primary.main : '#D8DEEA',
      },
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: '#3D4853',
      fontSize: '14px',
      fontWeight: 500,
      flexGrow: 1,
      minWidth: '60px',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#B0B7C3',
      fontSize: '14px',
      fontWeight: 500,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#F5F7FA',
      borderRadius: '6px',
      padding: '4px 8px',
      marginRight: '6px',
      marginBottom: '4px',
      alignItems: 'center',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#3D4853',
      fontSize: '14px',
      fontWeight: 500,
      padding: 0,
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: '#3D4853',
      ':hover': {
        backgroundColor: 'transparent',
        color: theme.palette.error.main,
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
      border: '1px solid #D8DEEA',
      borderRadius: '8px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '150px',
      overflowY: 'auto',
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#F5F7FA' : 'white',
      color: '#3D4853',
      fontSize: '14px',
      fontWeight: 500,
      ':hover': {
        backgroundColor: '#F5F7FA',
      },
    }),
  };

  const handleFormatOptionLabel = (data: any) => data.label;

  return (
    <Box width='100%'>
      <RenderComponent
        label={label}
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        isMulti={isMulti}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        loadOptions={loadOptions}
        styles={customStyles}
        menuPortalTarget={menuPortalTarget || document.body}
        cacheOptions={cacheOptions}
        defaultOptions={defaultOptions}
        debounceTimeout={debounceTimeout}
        additional={additional}
        cacheUniqs={cacheUniqs}
        formatOptionLabel={handleFormatOptionLabel}
        components={{
          Control: CustomControl,
          DropdownIndicator: CustomDropdownIndicator,
          MultiValueLabel: CustomMultiValueLabel,
          MultiValueRemove: CustomMultiValueRemove,
        }}
        theme={(selectTheme: any) => ({
          ...selectTheme,
          colors: {
            ...selectTheme.colors,
            primary: theme.text.tagColor,
            primary25: theme.palette.secondary.main,
            primary50: theme.palette.primary.light,
          },
        })}
      />

      {error && helperText && (
        <FormHelperText sx={{ display: 'flex', marginLeft: 0, mt: 1 }}>
          <ErrorIcon />
          <Typography variant='body2' sx={{ ml: 1, color: theme.palette.error.main }}>
            {helperText}
          </Typography>
        </FormHelperText>
      )}
    </Box>
  );
}
