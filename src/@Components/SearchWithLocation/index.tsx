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
  ClickAwayListener,
  CircularProgress,
  IconButton,
} from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { LocationIconGray } from "@Icons/LocationIcon";
import { CrossBigIcon } from "@Icons/index";
import { hooks } from "@Utils/index";
import { useDebounce } from "@Utils/hooks";
import { Loader } from "@Primitives/Loader";

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: theme.spacing(240),
  maxHeight: theme.spacing(200),
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
  border: "1px solid #ccc",
  borderRadius: "6px",
  overflow: "hidden",
}));

export default function SearchWithLocation() {
  const {
    coords,
    error,
    getLatitudeAndLongitude,
    loading: geoLoading,
  } = hooks.useGetLatitudeAndLongitude();

  const [query, setQuery] = useState("");
  const [openList, setOpenList] = useState(false);
  const [detectedAddress, setDetectedAddress] = useState("");

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
      setOpenList(false);
      localStorage.setItem("userLocation", JSON.stringify(reverseGeocoding));
    }
  }, [reverseGeocoding]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const isLoading = geoLoading || addressLoading || reverseLoading;

  return (
    <ClickAwayListener onClickAway={() => setOpenList(false)}>
      <SearchContainer>
        {/* Input Box */}
        <InputBox>
          <TextField
            variant="outlined"
            placeholder="Select location"
            value={query || detectedAddress}
            onChange={handleChange}
            onFocus={() => setOpenList(true)}
            fullWidth
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
                        <CrossBigIcon />
                      </IconButton>
                    )
                  )}
                </InputAdornment>
              ),
            }}
          />
        </InputBox>

        {/* Dropdown */}
        {openList && (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              mt: 1,
              maxHeight: "250px",
              overflowY: "auto",
            }}
          >
            <List>
              <ListItem
                onClick={() => {
                  if (!isLoading) {
                    getLatitudeAndLongitude();
                  }
                }}
                sx={{
                  pointerEvents: isLoading ? "none" : "auto",
                  opacity: isLoading ? 0.6 : 1,
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
                      setOpenList(false);
                    }}
                  >
                    {/* <ListItemText primary={opt} /> */}
                  </ListItem>
                ))
              )}
            </List>
          </Box>
        )}
      </SearchContainer>
    </ClickAwayListener>
  );
}
