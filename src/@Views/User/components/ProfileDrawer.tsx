import {
  CrossBigIcon,
  LogoutIconMui,
  NotificationsIconMui,
  ProfileIcon,
  LocationIconMui,
  TranslateIconMui,
} from "@Icons/index";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
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
  ".crossIconBox": {
    display: "flex",
    justifyContent: "start",
    padding: theme.spacing(10, 15, 0, 15),

    // '&:hover':{
    //   backgroundColor:"red"
    // }
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

  ".main": {
    padding: theme.spacing(9, 10),
    // display: "flex",
    // gap: theme.spacing(10),
    // flexDirection: "column",
    ".flexBox": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(8),
      cursor: "pointer",
      padding: theme.spacing(5),
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        transition: "background-color 0.2s ease",
      },
    },
  },
}));
const ProfileDrawer = ({ open, onClose }: PrposI) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const listing = [
    {
      name: "Edit Profile",
      icon: <ProfileIcon />,
    },
    {
      name: "Manage Address",
      icon: <LocationIconMui />,
    },
    {
      name: "Notifications",
      icon: <NotificationsIconMui />,
    },
    {
      name: "Change language",
      icon: <TranslateIconMui />,
    },
    {
      name: "Logout",
      icon: <LogoutIconMui />,
    },
  ];
  return (
    <ProfileDrawerStyle open={open} onClose={onClose} anchor="right">
      <Box className="crossIconBox">
        <IconButton onClick={onClose}>
          <CrossBigIcon />
        </IconButton>
      </Box>

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
      <Box className="main">
        {listing.map((val) => (
          <Box className="flexBox">
            {val.icon}
            <Typography variant="h6">{val.name}</Typography>
          </Box>
        ))}
      </Box>
    </ProfileDrawerStyle>
  );
};

export default ProfileDrawer;
