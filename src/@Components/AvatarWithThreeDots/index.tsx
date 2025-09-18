import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  styled,
  Popover,
  IconButton,
  Snackbar,
  SnackbarOrigin,
} from '@mui/material';
import { BlackEmailIcon, ThreeDots, CopyEmailId } from '@Icons';

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(20),
  '.avatar_container': {
    display: 'flex',
    alignItems: 'center',
    '.user_details': {
      paddingLeft: theme.spacing(7.5),
    },
  },
  '.icons_container': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.mail_icon': {
      marginRight: theme.spacing(14),
    },
  },
  '.three_dots': {
    padding: theme.spacing(4, 8),
  },
}));

const StyledPopover = styled(Popover)(({ theme }) => ({
  '.MuiPopover-paper': {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 6.5),
    cursor: 'pointer',
    '&:hover': {
      background: theme.misc.backgroundSilver,
    },
  },
}));

interface AvatarWithThreeDotsI {
  avatarImage: string;
  userName: string;
  userDesignation: string;
  email: string;
}
interface State extends SnackbarOrigin {
  openEmail: boolean;
}

/**
 * A component that displays the avatar, name, designation, email, and three dots icon.
 * @param {AvatarWithThreeDotsI} props - The props for the component.
 * @returns A component that displays the avatar, name, designation, email, and three dots icon.
 */
export function AvatarWithThreeDots({
  avatarImage,
  userName,
  userDesignation,
  email,
}: AvatarWithThreeDotsI) {
  const [openCopyEmail, setOpenCopyEmail] = React.useState<Element | null>(null);

  const [state, setState] = React.useState<State>({
    openEmail: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openEmail } = state;

  /**
   * Handles copying the email address to the clipboard.
   * @param {SnackbarOrigin} newState - The new state to set the snackbar to.
   * @returns None
   */
  const handleCopyEmail = (newState: SnackbarOrigin) => () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setOpenCopyEmail(null);
      setState({ openEmail: true, ...newState });
      setOpenCopyEmail(null);
    }
  };

  /**
   * Handles the closing of the email modal.
   * @returns None
   */
  const handleCloseEmail = () => {
    setState({ ...state, openEmail: false });
  };

  return (
    <BoxContainer>
      <Box className='avatar_container'>
        <Avatar src={avatarImage} />
        <Box className='user_details'>
          <Typography>{userName}</Typography>
          <Typography>{userDesignation}</Typography>
        </Box>
      </Box>
      <Box className='icons_container'>
        <a href={`mailto:${email}`}>
          <IconButton className='mail_icon'>
            <BlackEmailIcon />
          </IconButton>
        </a>
        <IconButton onClick={(e: any) => setOpenCopyEmail(e.currentTarget)} className='three_dots'>
          <ThreeDots />
        </IconButton>
      </Box>
      <StyledPopover
        id='copy_email_id'
        open={!!openCopyEmail}
        anchorEl={openCopyEmail}
        onClose={() => setOpenCopyEmail(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          className='menuItem'
          onClick={handleCopyEmail({
            vertical: 'bottom',
            horizontal: 'right',
          })}
        >
          <CopyEmailId />
          <Typography variant='body1' pl={2}>
            Copy Email ID
          </Typography>
        </Box>
      </StyledPopover>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openEmail}
        autoHideDuration={6000}
        onClose={handleCloseEmail}
        message='Email copied to clipboard'
        key={vertical + horizontal}
      />
    </BoxContainer>
  );
}
