import * as React from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import {
  NotificationIcon,
  NotificationLeadIcon,
} from "@Icons/NotificationIcon";
import { NotificationWhiteIcon } from "@Icons/NotificationWhiteIcon";
import { useTranslation } from "react-i18next";
import { ArrowDowns, ChevronArrowDown, ChevronArrowUp } from "@Icons/ArrowDown";

const NavbarStyle = styled(Box)(({ theme }) => ({
  height: theme.spacing(40),
  borderBottom: `1px solid ${theme.misc.borderColor}`,
  width: "100%",
  padding: theme.spacing(0, 10),
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".languages": {
    display: "flex",
    alignItem: "center",
    gap: theme.spacing(2.5),
  },
}));
const languages = [
  { code: "en", name: "English - EN" },
  { code: "hi", name: "हिंदी - HI" },
];
export default function Navbar() {
  const { t, i18n } = useTranslation("navbar");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Language menu handlers
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  // Current language display
  const getCurrentLanguage = () => {
    const current = languages.find((lang) => lang.code === i18n.language);
    return current.code.toLocaleUpperCase();
  };
  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  return (
    <NavbarStyle>
      <h1>hii</h1>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          className="languages"
          onClick={handleClick}
          onMouseEnter={handleOpen}
        >
          <Typography variant="body1"> {getCurrentLanguage()}</Typography>

          {open ? <ChevronArrowUp /> : <ChevronArrowDown />}

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {languages.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                selected={i18n.language === language.code}
              >
                <Typography>{language.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton>
          <Badge badgeContent={1} color="error">
            <NotificationIcon />
          </Badge>
        </IconButton>
        <Button variant="contained">{t("loginSignUp")}</Button>
      </Box>
    </NavbarStyle>
  );
}
