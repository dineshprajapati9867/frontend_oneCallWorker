import React from "react";
import { Box, IconButton, Input, InputAdornment, styled, Typography } from "@mui/material";
import { SearchIcon } from "@Icons";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
export interface SearchWithFilterPropsI {
  searchText: string | undefined;
  handleSearchValue: (e: any) => void;
  autoFocus?: boolean;
}

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ".searchInput": {
    height: 40,
  },
  ".filterIcon": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: theme.spacing(8),
  },
}));

const CustomInputStyled = styled(Input)(({ theme }) => ({
  ...theme.typography.inputValue,
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.secondary.light,
  border: `1px solid ${theme.misc.borderColor}`,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(5, 4),
  fontSize: "14px",
  letterSpacing: theme.spacing(0.5),
  lineHeight: theme.spacing(10),
  color: theme.misc.inputPlaceholder,
  "&:before, &:after, &:hover:not(.Mui-disabled):before": {
    border: "0",
  },
  "&.Mui-disabled": {
    opacity: 0.6,
  },
  "&.Mui-focused": {
    backgroundColor: theme.palette.primary.contrastText,
    border: `1px solid ${theme.misc.focusedBorder}`,
  },
  "&.Mui-error": {
    border: `2px solid ${theme.misc.darkRed}`,
  },
  ".MuiInputAdornment-positionEnd": {
    display:'flex',
    gap:theme.spacing(2.5),
    marginLeft:theme.spacing(0)
  },
  '.searchIcon':{
    backgroundColor:"red",

  }
}));

/**
 * The main component for the search with filter component.
 * @param {SearchWithFilterPropsI} props - The props for the component.
 * @returns A React component.
 */
export default function SearchWithMic({
  searchText,
  handleSearchValue,
  autoFocus,
}: SearchWithFilterPropsI) {
  return (
    <MainBox>
      <Box
        className="searchInput"
        sx={{
          width: {
            md: 326,
            lg: 500,
            xl: 705,
          },
        }}
      >
        <CustomInputStyled
          placeholder="Search"
          value={searchText}
          onChange={handleSearchValue}
          autoFocus={autoFocus}
          endAdornment={
            <InputAdornment position="end">
              <MicOutlinedIcon />
              <button className="searchIcon">

              <SearchIcon width={24} height={24} />
              
              </button>
            </InputAdornment>
          }
        />
      </Box>
    </MainBox>
  );
}
