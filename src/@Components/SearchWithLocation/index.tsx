import React, { useState } from "react";
import {
  styled,
  Box,
  InputAdornment,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Popover,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { LocationIconGray } from "@Icons/LocationIcon";
import { CrossIcon } from "@Icons/index";
import { Loader } from "@Primitives/Loader";
import { TextInput } from "@Primitives/index";

interface PropsI {
  handleChange: (val: string) => void;
  value: string;
  isLoading: boolean;
  handleGetCurrentLatitudeAndLongitude?: () => void;
  loactionSuggestions: any;
}
const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  ".listItem": {
    display: "flex",
    gap: theme.spacing(3),
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.misc.borderColor,
    },
  },
}));

const InputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  ".MuiInputBase-root": {
    width: '100%',
    height: '100%',
    borderRadius: "6px",
  },
}));

export default function SearchWithLocation({
  handleChange,
  value,
  handleGetCurrentLatitudeAndLongitude,
  loactionSuggestions,
  isLoading,
}: PropsI) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <SearchContainer>
      <InputBox>
        <TextInput
          variant="outlined"
          placeholder="Choose your area"
          label="Select Location"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          fullWidth
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationIconGray />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {isLoading ? (
                  <Loader type="button" size={20} />
                ) : (
                  value && (
                    <IconButton
                      onClick={() => {
                        handleChange("");
                      }}
                    >
                      <CrossIcon />
                    </IconButton>
                  )
                )}
              </InputAdornment>
            ),
          }}
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <List
            sx={(theme) => ({
              paddingY: 0,
              width: theme.spacing(120),
            })}
          >
            <ListItem
              onClick={() => {
                if (!isLoading) {
                  handleGetCurrentLatitudeAndLongitude();
                }
              }}
              sx={{
                pointerEvents: isLoading ? "none" : "auto",
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? "none" : "pointer",
              }}
              className="listItem"
            >
              <MyLocationIcon color="info" />
              <ListItemText
                primary={
                  <Typography variant="body1">Detect Location</Typography>
                }
              />
            </ListItem>

            {isLoading ? (
              <Loader type="section" size={30} />
            ) : (
              loactionSuggestions?.map((opt) => (
                <ListItem
                  key={opt}
                  className="listItem"
                  onClick={() => handleChange(opt)}
                >
                  {" "}
                </ListItem>
              ))
            )}
          </List>
        </Popover>
      </InputBox>
    </SearchContainer>
  );
}
