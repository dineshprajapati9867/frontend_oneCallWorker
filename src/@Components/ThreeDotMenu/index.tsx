import { Box, Popover, Typography, styled } from '@mui/material';
import { SyntheticEvent } from 'react';

interface PropsI {
  open: boolean;
  onClose: (event: React.SyntheticEvent) => void;
  anchorEl?: HTMLElement | null;
  id?: string;
  menuItem: {
    name: string;
    icon?: React.ReactNode | string;
    onClickFunction: (e?: SyntheticEvent) => void;
    isView?: boolean;
    color?: string;
  }[];
  anchorOrigin: {
    horizontal: 'center' | 'left' | 'right' | number;
    vertical: 'bottom' | 'center' | 'top' | number;
  };
}

const StyledPopover = styled(Popover)(({ theme }) => ({
  '.MuiPaper-root': {
    boxShadow: '0px 3px 5px rgba(9, 30, 66, 0), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  },
  '.menuContainer': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(7),
    padding: theme.spacing(5),
  },
  '.menuItem': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 8),
    gap: theme.spacing(7),
    minWidth: theme.spacing(55),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.misc.lightGrayBG,
    },
  },
}));

export function ThreeDotMenu({
  open,
  onClose,
  anchorEl,
  id,
  menuItem,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
}: PropsI) {
  const filteredMenuItem = menuItem.filter((menu) => menu.isView);
  return (
    <StyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={(e: React.SyntheticEvent) => {
        e.stopPropagation();
        onClose(e);
      }}
      anchorOrigin={anchorOrigin}
    >
      <Box onClick={onClose} padding={5} className='menuContainer'>
        {filteredMenuItem.map((menu) => (
          <Box
            className='menuItem'
            onClick={(e) => {
              e.stopPropagation();
              menu.onClickFunction();
            }}
            key={menu.name}
          >
            {menu.icon}
            <Typography variant='h6' sx={{ color: menu.color || '#222222' }}>
              {menu.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </StyledPopover>
  );
}
