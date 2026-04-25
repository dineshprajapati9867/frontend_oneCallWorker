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
      padding: isMobile ? theme.spacing(4.5, 5) : theme.spacing(9, 10),
      '.iconButtons':{
        border:`1px solid ${theme.misc.borderColor}`,
        color:"black",
        '&:hover':{
          backgroundColor:"transparent"
        }
      },
      ".text": {
        fontWeight: 400,
      },
      ".flexBox": {
        padding: theme.spacing(5),
        cursor:"pointer",

        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transition: "background-color 0.2s ease",
        },
      },
      ".iconLabelBox": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(8),
        padding: theme.spacing(5),
      },
      ".commonStyle": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(8),
        padding: theme.spacing(5),
         cursor:"pointer",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          transition: "background-color 0.2s ease",
        },
      },
    },
  }),
);
const ProfileDrawer = ({ open, onClose }: PrposI) => {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>(Notification.permission);
  const { handleOpenLogin } = hooks.useUser();
  const { ShowInfoSnackBar } = hooks.useSnackBar();
  const { isMobile } = hooks.useResponsive();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleNotification = async () => {
    console.log("Notification.permission", Notification.permission);
    if (!("Notification" in window)) {
      return ShowInfoSnackBar("This browser does not support notifications");
    }

    if (notificationPermission === "granted") {
      return ShowInfoSnackBar(
        "To disable notifications, please update browser settings manually.",
      );
    }

    if (Notification.permission === "denied") {
      return ShowInfoSnackBar(
        "Permission denied. Please enable notifications from browser settings.",
      );
    }

    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  };

  const handleLogout = () => {
    localStorage.clear();
    onClose();
  };
  const menuItems = [
    {
      id: 1,
      label: "Edit Profile",
      icon: <ProfileIcon />,
      onClick: () => console.log("Edit Profile"),
    },
    {
      id: 2,
      label: "Saved",
      icon: <LocationIconMui />,
      onClick: () => console.log("Manage Address"),
    },
    {
      id: 3,
      label: "Notifications",
      icon: <NotificationsIconMui />,
      onClick: handleNotification,
      isSwitch: true,
    },
    {
      id: 4,
      label: "Logout",
      icon: <LogoutIconMui />,
      onClick: handleLogout,
    },
  ];
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
        {menuItems.map((item) => {
          return (
            <Box
              key={item.id}
              className={item.isSwitch ? "commonStyle" : "flexBox"}
              onClick={ item.onClick}
            >
              <Box className="iconLabelBox" ml={item.label==="Logout"?2:0}>
               <IconButton className="iconButtons">
                 {item.icon}
               </IconButton>
                <Typography className="text" variant="h6">
                  {item.label}
                </Typography>
              </Box>
              {item.isSwitch && (
                <IOSSwitch
                  checked={notificationPermission === "granted"}
                  onClick={item.onClick}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </ProfileDrawerStyle>
  );
};

export default ProfileDrawer;
