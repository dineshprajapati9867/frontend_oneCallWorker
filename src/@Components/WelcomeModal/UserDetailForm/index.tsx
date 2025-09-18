import React, { useRef } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import { Controller } from 'react-hook-form';
import { validationPatterns } from '@Utils';
import { SearchableDropDown } from '@Primitives/Admin/SearchableDropDown';
import TextInput from '../../../@Primitives/Input/TextInput/TextInput';

interface UserDetailFormI {
  userType?: string;
  control: any;
  styles?: {};
  designation: any;
  designationChange: any;
  isValidationRequired?: boolean;
}
const InputStyle = styled(TextInput)(({ theme }) => ({
  '.MuiInputBase-root': {
    '.MuiOutlinedInput-input': {
      color: theme.text.neutralLight,
      background: theme.misc.lightAsSilver,
    },
  },
}));

export function UserDetailForm({
  userType,
  control,
  styles,
  designation,
  designationChange,
  isValidationRequired = true,
}: UserDetailFormI) {
  const DesignationRef = useRef<HTMLElement | null>(null);

  return (
    <Box>
      <Box
        sx={(theme) => ({
          color: theme.palette.primary.main,
        })}
      >
        <Typography variant='h4'>Welcome to Wybrid!</Typography>
        {userType === 'Vendor' ? (
          <>
            <Typography variant='h6' paddingTop={2.5}>
              {`${userType} - Your email has officially been confirmed.`}
            </Typography>
            <Typography variant='body1' paddingTop={5.5}>
              Congratulations on joining Wybrid. We want you to know that we are delighted to have
              you on board. Welcome aboard!
            </Typography>
          </>
        ) : (
          <>
            <Typography variant='h6' paddingTop={2.5}>
              Your email has officially been confirmed.
            </Typography>
            <Typography variant='body1' paddingTop={5.5}>
              Congratulations on joining Wybrid. We are delighted to have you on board!
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={(theme) => ({
          color: theme.palette.secondary.dark,
          paddingTop: theme.spacing(22),
        })}
      >
        <Typography variant='h4' sx={{ color: (theme) => theme.text.label }}>
          Your Details
        </Typography>
        <Typography variant='subtitle1' paddingTop={15} sx={{ color: (theme) => theme.text.light }}>
          Please help us with below information
        </Typography>
        <Box paddingTop={15} sx={{ ...styles }}>
          <Controller
            name='name'
            control={control}
            rules={{
              required: 'Name is required',
              minLength: {
                value: 4,
                message: 'Name must have more than 3 characters',
              },
              maxLength: {
                value: 300,
                message: 'Name must have less than 300 characters',
              },
              validate: (value) => {
                if (value) {
                  if (!validationPatterns.pattern.noSpace.test(value)) {
                    return 'Space is not allowed';
                  }
                  if (!validationPatterns.pattern.name.test(value)) {
                    return 'Only alphabets are allowed';
                  }
                }
                return undefined;
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <InputStyle
                label='Your Name*'
                type='text'
                placeholder='Enter Name'
                variant='outlined'
                size='medium'
                {...field}
                error={!!error}
                helperText={error ? error.message : null}
                labelsx={{ lineHeight: '16px' }}
              />
            )}
          />
        </Box>
        {userType !== 'Vendor' ? (
          <Box paddingTop={15} sx={{ ...styles }} ref={DesignationRef}>
            <Controller
              name='designation'
              control={control}
              rules={{
                required: 'Designation is required',
              }}
              render={({ field, fieldState: { error } }) => (
                <SearchableDropDown
                  {...field}
                  avatarLabel={false}
                  placeholder='Select'
                  label='Designation*'
                  options={designation}
                  menuPortalTarget={DesignationRef.target} // UI issue create in Vendor-welcome modal
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Box>
        ) : null}

        {designationChange.label === 'Other' && (
          <Box paddingTop={15} sx={{ ...styles }}>
            <Controller
              name='other_designation'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  label='Other Designation'
                  type='text'
                  placeholder='Enter Other Designation'
                  variant='outlined'
                  size='medium'
                  {...field}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Box>
        )}
        {userType === 'Customer' && (
          <Box paddingTop={15} sx={{ ...styles }}>
            <Controller
              name='employee_id'
              control={control}
              rules={{
                pattern: {
                  value: validationPatterns.pattern.noSpace,
                  message: 'Space is not allowed',
                },
                validate: (value) => {
                  if (!validationPatterns.pattern.containsAlphaNumericOrEmptyStr.test(value)) {
                    return 'Invalid Employee ID';
                  }
                  return undefined;
                },
              }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputStyle
                  label='Employee ID'
                  type='text'
                  variant='outlined'
                  size='medium'
                  placeholder='Enter Employee ID'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  labelsx={{ lineHeight: '16px' }}
                />
              )}
            />
          </Box>
        )}
        <Box paddingTop={15} sx={{ ...styles }}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'email is required',
              pattern: {
                value: validationPatterns.pattern.email,
                message: 'Enter a valid email address',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputStyle
                label='Business Email*'
                type='email'
                variant='outlined'
                size='medium'
                placeholder='Enter E-mail'
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                labelsx={{ lineHeight: '16px' }}
                disabled
              />
            )}
          />
        </Box>
        <Box paddingTop={15} sx={{ ...styles }}>
          <Controller
            name='phone'
            control={control}
            // defaultValue={phone}
            rules={{
              ...(isValidationRequired ? { required: 'Phone number is required' } : {}),

              required: '',
              pattern: {
                value: validationPatterns.pattern.mobile,
                message: 'Enter valid phone number',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <InputStyle
                {...field}
                label={isValidationRequired ? 'Phone Number*' : 'Phone Number'}
                type='number'
                placeholder='Enter Phone No'
                variant='outlined'
                size='medium'
                error={!!error}
                helperText={error ? error.message : null}
                labelsx={{ lineHeight: '16px' }}
                onChange={(e) => {
                  if (validationPatterns.pattern.positiveInteger.test(e.target.value)) {
                    field.onChange(e);
                  }
                }}
              />
            )}
          />
        </Box>
        <Box paddingTop={15}>
          <Button variant='contained' size='medium' type='submit'>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
