import { BlackNormalLocationIcon, CrossBigIcon } from "@Icons/index";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  styled,
  Typography,
} from "@mui/material";
import { capitalizedFirstLetter } from "@Utils/helpers";
import React from "react";

interface PrposI {
  open: boolean;
  onClose: () => void;
}
const ProfileDrawerStyle = styled(Drawer)(({ theme }) => ({
  ".MuiPaper-root": {
    boxSizing: "border-box",
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(182.5),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  ".crossIcon": {
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(10, 15, 0, 15),
  },
  ".header": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    padding: theme.spacing(10, 15),
    ".avatar": {
      width: theme.spacing(28),
      height: theme.spacing(28),
    },
  },
  '.flexBox':{
    display:"flex",
    alignItems:"center",
    gap:theme.spacing(8)
  }
}));
const ProfileDrawer = ({ open, onClose }: PrposI) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ProfileDrawerStyle open={open} onClose={onClose} anchor="right">
      <Button variant="text" className="crossIcon" onClick={onClose}>
        <CrossBigIcon />
      </Button>

      <Box className="header">
        <Avatar className="avatar" src={user.picture} />
        <Box className="right">
          <Typography variant="h3">
            {capitalizedFirstLetter(user.family_name)}
          </Typography>
          <Typography variant="body1">{user.email}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box className="flexBox">
        <BlackNormalLocationIcon />
        <Typography variant="body1">Manage Address</Typography>
      </Box>
    </ProfileDrawerStyle>
  );
};

export default ProfileDrawer;
