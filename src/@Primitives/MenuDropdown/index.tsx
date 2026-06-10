import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuIcon } from "../../@Assets/@Icons/MenuIcon";
import { ThreeDots } from "@Icons/ThreeDots";
import { Box, Typography } from "@mui/material";

interface option {
  id: string | number;
  label: string;
  icon: React.ReactNode;
}
export interface MenuDropdownI {
  options: option[];
  selected?: boolean;
  handleClickOnMenu?: (val: string) => void;
}

export default function MenuDropdown({
  options,
  selected,
  handleClickOnMenu,
}: MenuDropdownI) {
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
  const handleClose = (val: string) => {
    handleClickOnMenu(val);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {/* <MenuIcon /> */}
        <ThreeDots />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        // PaperProps={{
        //   style: {
        //     width: '20ch',
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //   },
        // }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            selected={selected}
            onClick={() => handleClose(option.label)}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
              {option.icon}
              <Typography variant="body1">{option.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
