import React, { useState, useEffect } from "react";
import {
  styled,
  Box,
  TextField,
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
import { hooks } from "@Utils/index";
import { useDebounce } from "@Utils/hooks";
import { Loader } from "@Primitives/Loader";

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
    width: theme.spacing(120),
    height: theme.spacing(20),
    borderRadius: "6px",
  },
}));

export default function SearchWithLocation() {
  const {
    coords,
    error,
    getLatitudeAndLongitude,
    loading: geoLoading,
  } = hooks.useGetLatitudeAndLongitude();

  const [query, setQuery] = useState("");
  const [detectedAddress, setDetectedAddress] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { useGetAddress, useReverseGeocodingToAddress } = hooks.useLocations();
  const searchDebounce = useDebounce(query, 1000);

  const { data: GetAddress, isLoading: addressLoading } = useGetAddress(
    searchDebounce,
    10
  );

  const { data: reverseGeocoding, isLoading: reverseLoading } =
    useReverseGeocodingToAddress(coords?.lat, coords?.lng);

  // When reverse geocoding finishes, auto-fill address
  useEffect(() => {
    if (reverseGeocoding?.display_name) {
      setDetectedAddress(reverseGeocoding.display_name);
      localStorage.setItem("userLocation", JSON.stringify(reverseGeocoding));
    }
  }, [reverseGeocoding]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const isLoading = geoLoading || addressLoading || reverseLoading;

  return (
    <SearchContainer>
      <InputBox>
        <TextField
          variant="outlined"
          placeholder="Select location"
          value={query || detectedAddress}
          onChange={handleChange}
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
                  query && (
                    <IconButton
                      onClick={() => {
                        setQuery("");
                        setDetectedAddress("");
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
                  getLatitudeAndLongitude();
                }
              }}
              sx={{
                pointerEvents: isLoading ? "none" : "auto",
                opacity: isLoading ? 0.6 : 1,
                cursor:isLoading?"none":"pointer"
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

            {addressLoading ? (
              <Loader type="section" size={30} />
            ) : (
              GetAddress?.map((opt) => (
                <ListItem
                  key={opt}
                  className="listItem"
                  onClick={() => {
                    setQuery(opt);
                  }}
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
