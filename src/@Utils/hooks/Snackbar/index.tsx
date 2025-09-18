/* eslint-disable react/jsx-no-bind */
import React, { createContext, useContext } from 'react';
import { Snackbar, Slide, SlideProps, Alert } from '@mui/material';

import { styled } from '@mui/material/styles';
import { SnackbarErrorIcon,SnackbarSuccessIcon } from '@Assets/@Icons';
import { theme } from '@Utils/theme';
type SnackBarContextActions = {
  ShowSuccessSnackBar: (text: string) => void;
  ShowApiErrorSnackBar: (err: any) => void;
  ShowErrorSnackBar: (err: any) => void;
  ShowCautionSnackBar: (text: string) => void;
  ShowApiInfoSnackBar: (err: any) => void;
  ShowInfoSnackBar: (text: string) => void;
};

const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction='down' />;
}

function SnackBarProvider({ children }: SnackBarContextProviderProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const [typeColor, setTypeColor] = React.useState<
    'info' | 'success' | 'warning' | 'error' | undefined
  >('info');

  /**
   * Shows a snackbar with the given text and color.
   * @param {string} text - the text to show in the snackbar.
   * @param {'info' | 'success' | 'warning' | 'error' | undefined} [colorType='info'] - the color of the snackbar.
   * @returns None
   */
  const showSnackBar = (
    text: string,
    colorType: 'info' | 'success' | 'warning' | 'error' | undefined,
  ) => {
    setMessage(text);
    setTypeColor(colorType);
    setOpen(true);
  };

  /**
   * Handles the closing of the modal.
   * @returns None
   */
  const handleClose = () => {
    setOpen(false);
    setTypeColor('info');
  };

  /**
   * Shows a success snackbar with the given text.
   * @param {string} text - the text to show in the snackbar.
   * @returns None
   */
  const ShowSuccessSnackBar = (text: string) => {
    showSnackBar(text, 'success');
  };
  /**
   * Shows a snackbar with the given text.
   * @param {string} text - the text to show in the snackbar.
   * @param {string} [type='info'] - the type of snackbar to show.
   * @returns None
   */
  const ShowErrorSnackBar = (text: string) => {
    showSnackBar(text, 'error');
  };
  /**
   * Shows a snackbar with the given text.
   * @param {string} text - the text to show in the snackbar.
   * @returns None
   */
  const ShowInfoSnackBar = (text: string) => {
    showSnackBar(text, 'info');
  };

  /**
   * Shows a snackbar with the given text.
   * @param {string} text - the text to show in the snackbar.
   * @returns None
   */
  const ShowCautionSnackBar = (text: string) => {
    showSnackBar(text, 'warning');
  };

  /**
   * Shows a snackbar with the given message.
   * @param {string} message - the message to show in the snackbar.
   * @returns None
   */
  const ShowApiErrorSnackBar = (err: any) => {
    if (err?.response) {
      if (err.response.status !== 502 && err.response.status !== 500) {
        ShowErrorSnackBar(err.response.data?.message);
      } else ShowErrorSnackBar('Something went wrong!');
    }
  };

  /**
   * Shows a snackbar with the given message.
   * @param {string} message - the message to show in the snackbar.
   * @returns None
   */
  const ShowApiInfoSnackBar = (err: any) => {
    if (err?.response) {
      if (err.response.status !== 502 && err.response.status !== 500) {
        ShowInfoSnackBar(err.response.data?.message);
      } else ShowInfoSnackBar('Something went wrong!');
    }
  };

  const customAletBackgroundColor = (severity?: string) => {
    if (severity === 'error') {
      return theme.misc.errorColor;
    }
    if (severity === 'success') {
      return theme.misc.success;
    }
    if (severity === 'warning') {
      return theme.palette.error.main;
    }
    if (severity === 'info') {
      return theme.misc.selectedBlue;
    }
    return '';
  };

  const CustomAlert = styled(Alert)(({ severity }) => ({
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    maxWidth: 'auto',
    backgroundColor: customAletBackgroundColor(severity),
    color: theme.palette.primary.contrastText,
    fontSize: theme.spacing(7),
    fontWeight: 600,
    letterSpacing: theme.spacing(0.2),
    '.MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText,
    },
  }));

  const customIconMapping = {
    success: <SnackbarSuccessIcon />,
    error: <SnackbarErrorIcon />,
  };

  const value = React.useMemo(
    () => ({
      ShowSuccessSnackBar,
      ShowApiErrorSnackBar,
      ShowErrorSnackBar,
      ShowCautionSnackBar,
      ShowApiInfoSnackBar,
      ShowInfoSnackBar,
    }),
    [],
  );
  return (
    <SnackBarContext.Provider value={value}>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={10000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          <CustomAlert
            onClose={handleClose}
            severity={typeColor}
            iconMapping={customIconMapping}
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'break-word' }}
          >
            {message}
          </CustomAlert>
        </Snackbar>
      )}

      {children}
    </SnackBarContext.Provider>
  );
}

const useSnackBar = (): SnackBarContextActions => {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error('useSnackBar must be used within an SnackBarProvider');
  }

  return context;
};

export { SnackBarProvider, useSnackBar };
