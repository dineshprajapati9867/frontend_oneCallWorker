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
  Button,
  Divider,
  Drawer,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { IOSSwitch } from "@Primitives/index";
import { capitalizedFirstLetter } from "@Utils/helpers";
import { hooks } from "@Utils/index";
import React, { useState } from "react";
import avatar from "@Assets/Images/avatar.png";
interface PrposI {
  open: boolean;
  onClose: () => void;
}
const ProfileDrawerStyle = styled(Drawer)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
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
      padding: isMobile
        ? theme.spacing(5, 7, 0, 7)
        : theme.spacing(10, 15, 0, 15),

      // '&:hover':{
      //   backgroundColor:"red"
      // }
    },
    ".header": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(6),
      padding: isMobile ? theme.spacing(5, 7) : theme.spacing(10, 15),
      ".avatar": {
        width: theme.spacing(28),
        height: theme.spacing(28),
      },
    },
    ".signInBtn": {
      fontWeight: 600,
      fontSize: `${theme.spacing(8.5)} !important`,
    },
    ".main": {
      padding:isMobile?theme.spacing(4.5, 5): theme.spacing(9, 10),

      ".text": {
        fontWeight: 400,
      },
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
      ".commonStyle": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transition: "background-color 0.2s ease",
        },
      },
    },
  })
);
const ProfileDrawer = ({ open, onClose }: PrposI) => {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>(Notification.permission);
  const { handleOpenLogin } = hooks.useUser();
  const { ShowInfoSnackBar } = hooks.useSnackBar();
  const { isMobile } = hooks.useResponsive();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleNotification = async () => {
    if (!("Notification" in window)) {
      return ShowInfoSnackBar("This browser does not support notifications");
    }

    if (notificationPermission === "granted") {
      return ShowInfoSnackBar(
        "To disable notifications, please update browser settings manually."
      );
    }

    if (Notification.permission === "denied") {
      return ShowInfoSnackBar(
        "Permission denied. Please enable notifications from browser settings."
      );
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  };

  const handleLogout = () => {
    localStorage.clear();
    onClose();
  };
  return (
    <ProfileDrawerStyle
      open={open}
      onClose={onClose}
      anchor="right"
      isMobile={isMobile}
    >
      <Box className="crossIconBox">
        <IconButton onClick={onClose}>
          <CrossBigIcon />
        </IconButton>
      </Box>

      <Box className="header" justifyContent={`${!user && "space-between"}`}>
        <Avatar className="avatar" src={user?.picture || avatar} />
        {user ? (
          <Box className="right">
            <Typography variant="h3">
              {capitalizedFirstLetter(user.family_name)}
            </Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Box>
        ) : (
          <Button
            onClick={handleOpenLogin}
            className="signInBtn"
            variant="text"
          >
            Sign in
          </Button>
        )}
      </Box>
      <Divider />
      <Box className="main">
        <Box className="flexBox">
          <ProfileIcon />
          <Typography className="text" variant="h6">
            Edit Profile
          </Typography>
        </Box>
        <Box className="flexBox">
          <LocationIconMui />
          <Typography className="text" variant="h6">
            Manage Address
          </Typography>
        </Box>
        <Box className="commonStyle" onClick={handleNotification}>
          <Box className="flexBox">
            <NotificationsIconMui />
            <Typography className="text" variant="h6">
              Notifications
            </Typography>
          </Box>
          <IOSSwitch checked={notificationPermission === "granted"} />
        </Box>
        <Box onClick={handleLogout} className="flexBox">
          <LogoutIconMui />
          <Typography className="text" variant="h6">
            Logout
          </Typography>
        </Box>
      </Box>
    </ProfileDrawerStyle>
  );
};

export default ProfileDrawer;
