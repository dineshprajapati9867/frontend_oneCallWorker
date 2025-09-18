import React, { useMemo } from 'react';
import { Box, Grid, styled, Dialog } from '@mui/material';
import { hooks } from '@Utils';
import { useForm } from 'react-hook-form';
import welcome_image from '../../@Assets/images/welcome_image.png';
import { UserDetailForm } from './UserDetailForm';
import { WelcomeModalOptions } from '../CommonLayout';

interface WelcomeModalI {
  open: boolean;
  close: () => void;
  userType: string;
  designation: any;
  formData: any;
}

export const CustomModal = styled(Dialog)(() => ({
  '.MuiDialog-paper': {
    maxWidth: '1264px',
  },
}));

export function WelcomeModal({ open, close, userType, designation, formData }: WelcomeModalI) {
  const { handleWelcomeUserSubmit } = hooks.useUser();

  /**
   * A memoized function that returns the designation value and label for the given formData.
   * @param {WelcomeFormData} formData - The form data object.
   * @returns {string} The designation value and label.
   */
  const selectDesignation = useMemo(() => {
    if (formData?.is_other_designation) {
      return {
        value: '9',
        label: 'Other',
      };
    }
    if (formData?.designation) {
      return WelcomeModalOptions.find((option) => option.label === formData?.designation);
    }

    return '';
  }, [formData?.designation]);

  /**
   * A custom hook that returns a form control and watch object.
   * @param {object} defaultValues - the default values for the form
   * @returns {object} - the form control and watch object
   */
  const { handleSubmit, control, watch } = useForm({
    mode: 'all',
    defaultValues: useMemo(
      () => ({
        ...formData,
        designation: selectDesignation,
        other_designation: formData?.is_other_designation ? formData?.designation : '',
      }),
      [formData],
    ),
  });

  /**
   * Handles the submission of the welcome user form.
   * @param {any} data - the data from the form
   * @returns None
   */
  const onSubmit = async (data: any) => {
    delete data.token;
    delete data.thumbnail;
    delete data.refreshToken;
    handleWelcomeUserSubmit(data);
  };

  const designationChange = watch('designation');

  return (
    <CustomModal open={open} onClose={close}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          display='flex'
          sx={(theme) => ({
            // maxWidth: `${theme.spacing(632)}  !important`,
            // maxHeight: `${theme.spacing(396)} !important`,
            borderRadius: theme.spacing(5),
            border: `1px solid ${theme.palette.primary.light}`,
          })}
        >
          <Grid
            item
            md={6}
            sm={6}
            xs={6}
            xl={6}
            sx={(theme) => ({
              backgroundColor: theme.misc.backgroundBlue,
            })}
          >
            <Box paddingTop={52.5} paddingBottom={64}>
              <img width='100%' src={welcome_image} alt={welcome_image} />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sm={6}
            xl={6}
            sx={(theme) => ({
              padding: theme.spacing(27, 30, 44, 30),
              background: theme.palette.primary.contrastText,
            })}
          >
            <UserDetailForm
              userType={userType}
              control={control}
              designation={designation}
              // handleContinue={handleSubmit(onSubmit)}
              // formData={formData}
              designationChange={designationChange}
              isValidationRequired={false}
            />
          </Grid>
        </Grid>
      </form>
    </CustomModal>
  );
}
