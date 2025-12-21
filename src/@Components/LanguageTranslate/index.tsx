import * as React from "react";
import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import { ChevronArrowDown, ChevronArrowUp } from "@Icons/ArrowDown";
import { languages } from "@Constants/Home";
import { TranslateIconMui } from "@Icons/index";
interface PopsI {
  handleGetCurrentLanguage: any;
  i18n: any;
}
const LanguageTranslateStyle = styled(Box)(({ theme }) => ({
  ".languages": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2.5),
    cursor: "pointer",
  },
}));
function LanguageTranslate({ i18n, handleGetCurrentLanguage }: PopsI) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setAnchorEl(null);
  };

  // Language menu handlers
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseOut = () => {
    setAnchorEl(null);
  };
  return (
    <LanguageTranslateStyle>
      <Box
        className="languages"
        onMouseEnter={handleMouseEnter}
        // onMouseOut={handleMouseOut}
      >
        <TranslateIconMui />

        <Typography variant="body1"> {handleGetCurrentLanguage()}</Typography>
        {open ? <ChevronArrowUp /> : <ChevronArrowDown />}
        <Menu anchorEl={anchorEl} open={open} onClose={handleMouseOut}>
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
    </LanguageTranslateStyle>
  );
}

export default LanguageTranslate;
