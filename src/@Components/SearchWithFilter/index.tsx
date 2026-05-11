import React from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  styled,
  Typography,
} from "@mui/material";
import {
  CloseIcon,
  DarkFilterIcon,
  SearchIcon,
} from "@Icons";
import { BasicModal } from "@Primitives";

export interface SearchWithFilterPropsI {
  searchText: string | undefined;
  handleSearchValue: (e: any) => void;
  open?: boolean;
  onClose?: () => void;
  onClickFilterIcon?: () => void;
  children?: React.ReactNode;
  onApply?: () => void;
  onCancel?: () => void;
  minHeight?: string | number;
  autoFocus?: boolean;
  isFilter?: boolean;
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
}));

const FilterModal = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 16),
  minWidth: theme.spacing(213),
  width: "auto",
  height: "auto",
  ".filterHeader": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(15),
  },
  ".closeIcon": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  ".filterFooter": {
    marginTop: theme.spacing(32.5),
  },
  ".applyBtn": {
    marginRight: theme.spacing(5),
  },
}));

/**
 * The main component for the search with filter component.
 * @param {SearchWithFilterPropsI} props - The props for the component.
 * @returns A React component.
 */
export default function SearchWithFilter({
  searchText,
  handleSearchValue,
  open,
  onClose,
  onClickFilterIcon,
  children,
  minHeight = 228,
  onApply,
  onCancel,
  autoFocus,
  isFilter = true,
}: SearchWithFilterPropsI) {
  return (
    <MainBox>
      <Box
        className="searchInput"
        sx={{
          width: {
            xs:"100%",
            lg: 500,
          },
        }}
      >
        <CustomInputStyled
          placeholder="Search"
          value={searchText}
          onChange={handleSearchValue}
          autoFocus={autoFocus}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon width={24} height={24} />
            </InputAdornment>
          }
          endAdornment={
            searchText && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() =>
                    handleSearchValue({
                      target: { value: "" },
                    })
                  }
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </Box>
      {isFilter && (
        <Box className="filterIcon" onClick={onClickFilterIcon}>
          <DarkFilterIcon />
        </Box>
      )}
      {open && onClose && (
        <BasicModal open={open} close={onClose}>
          <FilterModal minHeight={minHeight}>
            <Box className="filterHeader">
              <Typography variant="h6" color={(theme) => theme.text.dark}>
                Filters
              </Typography>
              <Box className="closeIcon" onClick={onClose}>
                <CloseIcon />
              </Box>
            </Box>
            {children}
            <Box className="filterFooter">
              <Button
                variant="contained"
                size="medium"
                className="applyBtn"
                onClick={onApply}
              >
                Apply
              </Button>
              <Button variant="outlined" size="medium" onClick={onCancel}>
                Cancel
              </Button>
            </Box>
          </FilterModal>
        </BasicModal>
      )}
    </MainBox>
  );
}
