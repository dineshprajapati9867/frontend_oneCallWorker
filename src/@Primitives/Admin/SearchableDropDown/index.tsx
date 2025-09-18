import React, { useMemo } from 'react';
import { Avatar, Box, FormHelperText, Typography } from '@mui/material';
import ReactSelect, { StylesConfig, components as customNoOptionView } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { styled } from '@mui/system';
import { withAsyncPaginate, AsyncPaginate } from 'react-select-async-paginate';
import { ErrorIcon } from '@Assets/@Icons/ErrorIcon';
import { theme } from '@Utils/theme';
import EllipsisText from 'react-ellipsis-text';

interface SearchableDropDownI {
  label?: string;
  options?: {
    id?: string;
    value?: string | number | boolean | any;
    label: string;
    avatar?: string;
    email?: string;
  }[];
  onChange: (e: any) => void;
  value: any;
  placeholder?: string;
  helperText?: string | null;
  error?: boolean;
  menuPortalTarget?: HTMLElement | null;
  isDisabled?: boolean;
  avatarLabel?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  controlShouldRenderValue?: boolean;
  hideIndicator?: boolean;
  getOptionValue?: boolean;
  getOptionLabel?: boolean;
  hideSelectedOptions?: any;
  defaultValue?: any;
  props?: any;
  type?: string;
  ref?: any;
  inputRef?: any;
  loadOptions?: any;
  cacheOptions?: any;
  defaultOptions?: any;
  debounceTimeout?: any;
  additional?: any;
  menuHeight?: string | number;
  closeMenuOnScroll?: boolean;
  menuShouldBlockScroll?: boolean;
  backspaceRemovesValue?: boolean;
  cacheUniqs?: any;
  menuPlacement?: string;
  components?: any;
  styles?: any;
  closeMenuOnSelect?: boolean;
  isValue?: boolean;
  isShowProfileIcon?: boolean;
  name?: string;
  noOptionsText?: string;

  // New props for custom multi-value display
  hideMultiValueTags?: boolean; // Hide selected items from input field
  onRemoveValue?: (removedValue: any, remainingValues: any[]) => void; // Callback for individual item removal
}

interface CustomStyleConfig extends StylesConfig {
  maxHeight: string;
}
/**
 * Takes in a string and returns the first and last letter of the string.
 * @param {string} name - the name to get the initials of.
 * @returns {string} - the initials of the name.
 */
export function stringAvatar(name = 'No Name Available') {
  if (!name) return 'NA';
  const names = name?.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export const AvatarLabel = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  '.avatar': {
    width: theme.spacing(12),
    height: theme.spacing(12),
    fontSize: theme.spacing(5),
  },
  '.textWrap': {
    marginLeft: theme.spacing(4),
    '.dropdownName': {},
  },
}));

export function SearchableDropDown({
  label,
  options,
  onChange,
  value,
  placeholder,
  error,
  helperText,
  menuPortalTarget,
  isDisabled,
  avatarLabel,
  isClearable,
  isSearchable = true,
  hideIndicator,
  isMulti,
  getOptionValue,
  getOptionLabel,
  controlShouldRenderValue,
  hideSelectedOptions,
  defaultValue,
  type,
  loadOptions,
  cacheOptions,
  defaultOptions,
  debounceTimeout,
  additional,
  menuHeight = '150px',
  closeMenuOnScroll,
  menuShouldBlockScroll,
  menuPlacement,
  backspaceRemovesValue,
  props,
  components,
  cacheUniqs,
  closeMenuOnSelect,
  isValue,
  isShowProfileIcon = true,
  name,
  noOptionsText,

  // New props
  hideMultiValueTags = false,
  onRemoveValue,
}: SearchableDropDownI) {
  /**
   * Handle removal of individual items
   */
  const handleRemoveValue = (removedValue: any) => {
    if (!isMulti || !value) return;

    const currentValues = Array.isArray(value) ? value : [value];
    const remainingValues = currentValues.filter((item: any) => item.value !== removedValue.value);

    // Update the main onChange
    onChange(remainingValues);

    // Call the remove callback if provided
    if (onRemoveValue) {
      onRemoveValue(removedValue, remainingValues);
    }
  };

  const customStyles: CustomStyleConfig = {
    maxHeight: '40px',
    menu: (base) => ({
      ...base,
      border: '1px solid',
      borderColor: theme.misc.naturalLight,
      background: 'white',
      zIndex: 9999,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (base, state) => ({
      ...base,
      border: state.isDisabled ? 'none' : undefined,
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      pointerEvents: 'auto',
      minHeight: theme.spacing(20),
      // background: theme.misc.lightAsSilver,
      background: isValue ? theme.misc.lightAsSilver : theme.palette.secondary.light,
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      borderColor: error ? theme.palette.error.main : theme.misc.naturalLight,
      opacity: state.isDisabled ? 0.6 : 1,

      '&:focus': {
        borderColor: state.isFocused ? theme.misc.focusedBorder : theme.palette.primary.main,
      },
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? theme.misc.focusedBorder : theme.palette.primary.main,
      },
      '&:disabled': {
        border: 'none',
      },
    }),
    placeholder: (base) => ({
      ...base,
      ...theme.typography.inputValue,
      color: theme.misc.inactive,
    }),
    menuList: (base) => ({
      ...base,
      ...theme.typography.inputValue,
      color: theme.palette.primary.main,
      textAlign: 'start',
      maxHeight: menuHeight,
    }),
    singleValue: (base, state) => ({
      ...base,
      ...theme.typography.inputValue,
      color: theme.palette.primary.main,
      opacity: state.isDisabled ? 0.6 : 1,
    }),
    multiValue: (base) => ({
      ...base,
      // Hide multi-value tags if hideMultiValueTags is true
      display: hideMultiValueTags ? 'none' : base.display,
    }),
    multiValueLabel: (base) => ({
      ...base,
      // Hide multi-value labels if hideMultiValueTags is true
      display: hideMultiValueTags ? 'none' : base.display,
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      // Hide multi-value remove buttons if hideMultiValueTags is true
      display: hideMultiValueTags ? 'none' : base.display,
      ...(state.isDisabled
        ? {
            visibility: 'hidden',
            width: '4px',
          }
        : {}),
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    dropdownIndicator: (base) => ({
      ...base,
      display: hideIndicator ? 'none' : undefined,
      height: theme.spacing(19),
    }),
    // Ensure placeholder is visible even when values are selected (for hideMultiValueTags)
    valueContainer: (base) => ({
      ...base,
      // If hiding multi-value tags and we have values, show placeholder
      ...(hideMultiValueTags && isMulti && value && Array.isArray(value) && value.length > 0
        ? {
            '& .react-select__placeholder': {
              display: 'block',
            },
          }
        : {}),
    }),
  };

  /**
   * Takes in data and returns the data of the label in a correct formatted version.
   * @param {any} data - the data to format
   * @returns None
   */
  const handleFormatOptionLabel = (data: any) => {
    if (avatarLabel && data) {
      return (
        <Box>
          {isShowProfileIcon ? (
            <AvatarLabel>
              {data.email && (
                <Avatar alt='Avatar' className='avatar' src={data?.avatar?.url}>
                  {stringAvatar(data.label)}
                </Avatar>
              )}

              <Box className='textWrap'>
                <Box>
                  {data?.label && (
                    <EllipsisText text={data?.label} length='40' tooltip={data?.label} />
                  )}
                </Box>
                <Box>
                  {data?.email && (
                    <EllipsisText text={data?.email} length='40' tooltip={data?.email} />
                  )}
                </Box>
              </Box>
            </AvatarLabel>
          ) : (
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box>{data?.label}</Box>
              <Typography
                sx={() => ({
                  background: theme.text.leafGreen,
                  borderRadius: theme.spacing(2),
                  textColor: theme.text.forestGreen,
                  padding: theme.spacing(1),
                })}
                variant='body1'
              >
                {data?.email}
              </Typography>
            </Box>
          )}
        </Box>
      );
    }
    return data.label;
  };

  /**
   * Creates a CreatableAsyncPaginate component that can be used to create a CreatableSelect component.
   * @param {React.ComponentType<any>} CreatableSelect - The component to wrap.
   * @returns {React.ComponentType<any>} The wrapped component.
   */
  const CreatableAsyncPaginate = withAsyncPaginate(CreatableSelect);

  /**
   * Returns the correct React Select component based on the type of select.
   * @param {string} type - the type of select to render.
   * @returns {React.Component} - the correct React Select component.
   */
  const RenderComponent = useMemo(() => {
    if (type === 'creatable') {
      return CreatableSelect;
    }
    if (type === 'asyncCreatable') {
      return CreatableAsyncPaginate;
    }
    if (type === 'asyncPaginate') {
      return AsyncPaginate;
    }
    return ReactSelect;
  }, []);

  /**
   * No view option text show
   */
  function NoOptionsMessage(oProps: any) {
    return (
      <customNoOptionView.NoOptionsMessage {...oProps}>
        <span>{noOptionsText || 'No options found'} </span>
      </customNoOptionView.NoOptionsMessage>
    );
  }

  // Custom components to handle the hideMultiValueTags functionality
  const customComponents = useMemo(() => {
    const baseComponents = components || { NoOptionsMessage };

    if (hideMultiValueTags) {
      return {
        ...baseComponents,
        MultiValue: () => null, // Hide multi-value components completely
        MultiValueContainer: () => null,
        MultiValueLabel: () => null,
        MultiValueRemove: () => null,
      };
    }

    return baseComponents;
  }, [components, hideMultiValueTags]);

  // Helper function to get display placeholder when hiding multi-value tags
  const getDisplayPlaceholder = () => {
    if (hideMultiValueTags && isMulti && value && Array.isArray(value) && value.length > 0) {
      return `${value.length} item(s) selected`;
    }
    return placeholder;
  };

  return (
    <Box width='100%'>
      {label && (
        <Typography
          variant='subtitle2'
          sx={{
            fontWeight: 400,
            padding: theme.spacing(0, 0, 2, 1),
            color: theme.misc.new,
          }}
        >
          {label}
        </Typography>
      )}
      <RenderComponent
        {...props}
        isMulti={isMulti}
        controlShouldRenderValue={hideMultiValueTags ? false : controlShouldRenderValue}
        styles={customStyles}
        placeholder={getDisplayPlaceholder()}
        options={options}
        value={value}
        onChange={onChange}
        cacheUniqs={cacheUniqs}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        components={customComponents}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        hideSelectedOptions={hideSelectedOptions}
        defaultValue={defaultValue}
        formatOptionLabel={(data: any) => handleFormatOptionLabel(data)}
        loadOptions={loadOptions}
        cacheOptions={cacheOptions}
        defaultOptions={defaultOptions}
        backspaceRemovesValue={backspaceRemovesValue}
        debounceTimeout={debounceTimeout}
        additional={additional}
        menuHeight={menuHeight}
        menuPlacement={menuPlacement}
        theme={(selectTheme: { colors: any }) => ({
          ...selectTheme,
          colors: {
            ...selectTheme.colors,
            primary: theme.text.tagColor,
            primary25: theme.palette.secondary.main,
            primary50: theme.palette.primary.light,
          },
        })}
        menuPortalTarget={menuPortalTarget || document.body}
        closeMenuOnScroll={closeMenuOnScroll}
        menuShouldBlockScroll={menuShouldBlockScroll}
        closeMenuOnSelect={closeMenuOnSelect}
        name={name}
        handleRemoveValue={handleRemoveValue}
      />
      {error && helperText ? (
        <FormHelperText
          sx={() => ({
            display: 'flex',
            marginLeft: 0,
          })}
        >
          <ErrorIcon />{' '}
          <Typography variant='body2' sx={{ marginLeft: '2.5px', color: theme.palette.error.main }}>
            {helperText}
          </Typography>
        </FormHelperText>
      ) : (
        ''
      )}
    </Box>
  );
}
