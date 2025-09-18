import React from 'react';
import { Box, styled, Button, Typography, IconButton } from '@mui/material';
import { BasicModal, IOSSwitch, Loader } from '@Primitives';
import BreadCrumbs, { BreadCrumbsItemI } from '@Components/BreadCrumbs';
import { ChevronLeftIconBlack, CloseIcon } from '@Icons';
import { Controller, Control } from 'react-hook-form';

export const BoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  '.modal_header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(10, 12),
    borderBottom: `1px solid ${theme.misc.borderColor}`,
  },
  '.status-block': {
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  '.icon': {
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: theme.spacing(9),
    cursor: 'pointer',
    marginBottom: theme.spacing(-3.4),
  },
  '.title': {
    color: theme.text.light,
    marginRight: theme.spacing(5.5),
  },
  '.statusType': {
    marginRight: theme.spacing(17),
    marginLeft: theme.spacing(5.5),
  },
  '.modal-content': {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    paddingBottom: theme.spacing(30),
  },
  '.modal_footer': {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    padding: 2,
    paddingTop: theme.spacing(6.5),
    paddingBottom: theme.spacing(7),
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(16),
    boxShadow: 'none',
    borderTop: `1px solid ${theme.misc.borderColor}`,
    zIndex: 1,
  },
}));

interface CommonModalI {
  openModal: boolean;
  handleCloseModal: () => void;
  submitText: string | React.ReactNode;
  cancelText?: string;
  bredCrumbItems: BreadCrumbsItemI[];
  children: React.ReactNode;
  modalType: string;
  handleSubmitModal?: () => void;
  /**
   * formName: It should be same as form-id which is pass as children for this model.
   * Reason: For get the value of form-data when click the submit button of this model which is outside the form-tag.
   */
  formName?: string;
  isShowStatus?: boolean;
  onClickStatus?: () => void;
  defaultCheckedStatus?: boolean;
  isBack?: boolean;
  statusType?: string;
  headerHeight?: string | number;
  contentHeight?: string | number;
  statusVariant?: string;
  control?: Control<any> | any;
  isStatusDisabled?: boolean;
  isBtnDisabled?: boolean;
  isApiLoading?: boolean;
  additionalButtonText?: string;
  additionalButtonClick?: () => void;
  isShowLoader?: boolean;
}

/**
 * A modal that can be used for any common modal.
 * @param {CommonModalI} props - The props for the modal.
 * @returns A modal that can be used for any common modal.
 */
export function SinglePageCommonModal({
  openModal,
  handleCloseModal,
  handleSubmitModal,
  submitText,
  cancelText,
  bredCrumbItems,
  children,
  modalType,
  formName,
  isBack,
  isShowStatus,
  onClickStatus,
  defaultCheckedStatus,
  statusType,
  headerHeight,
  statusVariant,
  control,
  isStatusDisabled,
  contentHeight,
  isBtnDisabled,
  isApiLoading,
  additionalButtonText,
  additionalButtonClick,
  isShowLoader = false,
}: CommonModalI) {
  return (
    <BasicModal open={openModal} close={handleCloseModal} fullScreen>
      {isShowLoader ? (
        <Loader type='window' />
      ) : (
        <BoxContainer>
          <Box className='modal_header' height={headerHeight || 108}>
            <Box display='flex'>
              {isBack ? (
                <IconButton className='icon' onClick={handleCloseModal}>
                  <ChevronLeftIconBlack />
                </IconButton>
              ) : (
                <IconButton className='icon' onClick={handleCloseModal}>
                  <CloseIcon />
                </IconButton>
              )}
              <Box>
                <Box mb={6.5}>
                  <BreadCrumbs item={bredCrumbItems} />
                </Box>
                <Typography variant='h4'>{modalType}</Typography>
              </Box>
            </Box>
            {isShowStatus && (
              <Box className='status-block'>
                <Typography variant='subtitle2' className='title'>
                  Status:
                </Typography>
                <Controller
                  name='status'
                  control={control}
                  render={({ field }) => (
                    <IOSSwitch
                      {...field}
                      variant={statusVariant}
                      defaultChecked={defaultCheckedStatus}
                      onClick={onClickStatus}
                      disabled={isStatusDisabled}
                    />
                  )}
                />
                <Typography variant='subtitle1' className='statusType'>
                  {statusType}
                </Typography>
              </Box>
            )}
          </Box>
          <Box className='modal-content' height={contentHeight || 'calc(100vh - 183px)'}>
            {children}
          </Box>
          <Box className='modal_footer'>
            <Box>
              {submitText && (
                <Button
                  size='medium'
                  variant='contained'
                  type='submit'
                  onClick={handleSubmitModal}
                  sx={{ mr: (theme) => theme.spacing(5) }}
                  form={formName || ''}
                  disabled={isBtnDisabled || isApiLoading}
                >
                  {isApiLoading ? (
                    <Loader color='secondary' size={24} type='button' />
                  ) : (
                    `${submitText}`
                  )}
                </Button>
              )}
              {cancelText && (
                <Button size='medium' variant='outlined' onClick={handleCloseModal}>
                  {cancelText}
                </Button>
              )}
            </Box>
            {additionalButtonText && (
              <Button
                sx={{ mr: (theme) => theme.spacing(15), textTransform: 'none' }}
                variant='contained'
                color='error'
                size='medium'
                onClick={additionalButtonClick}
                disabled={isApiLoading}
              >
                {additionalButtonText}
              </Button>
            )}
          </Box>
        </BoxContainer>
      )}
    </BasicModal>
  );
}
