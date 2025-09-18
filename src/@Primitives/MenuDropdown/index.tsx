import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuIcon } from '../../@Assets/@Icons/MenuIcon';

export interface MenuDropdownI {
  options: string[];
  selected?: boolean;
}

export default function MenuDropdown({ options, selected }: MenuDropdownI) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  /**
   * Handles the click event for the anchor element.
   * @param {React.MouseEvent<HTMLElement>} event - The click event.
   * @returns None
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   * Handles the closing of the anchor element.
   * @returns None
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label='more' id='long-button' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     width: '20ch',
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //   },
        // }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={selected} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
