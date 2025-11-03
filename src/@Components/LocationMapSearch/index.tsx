import SearchWithLocation from "@Components/SearchWithLocation";
import {
  Box,
  Button,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { BasicModal, SearchableDropDown, TextInput } from "@Primitives/index";
import { hooks, validationPatterns } from "@Utils/index";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// @ts-ignore
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// @ts-ignore
import markerIcon from "leaflet/dist/images/marker-icon.png";
// @ts-ignore
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Controller, useForm } from "react-hook-form";
import { HomeIcon, SmallLocationWithInsideCircle } from "@Icons/index";
import { mapStyles } from "@Constants/Home";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
interface PropsI {
  open: boolean;
  onClose: () => void;
}
const QuickTips = [
  "Your location helps us assign nearby work",
  "You can update this anytime",
  " Location is kept private and secure",
];
const MainStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(10, 25),
  gap: theme.spacing(25),
  ".leftSide": {
    width: theme.spacing(179),
    // width:'20%',

    ".header": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(3),

      ".homeIcon": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(3),
        marginBottom: theme.spacing(2),
        ".headerTitle": {
          color: theme.palette.primary.contrastText,
        },
      },
      ".headerSubtitle": {
        color: theme.palette.secondary.dark,
      },
    },
    ".inputContainer": {
      // borderRadius: theme.spacing(6),
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(10),
      padding: theme.spacing(10),
      // border: "1px solid black",
      boxSizing: "border-box",
    },
    ".infoBox": {
      backgroundColor: theme.misc.lightGrayBG,
      borderRadius: theme.spacing(4),
      padding: theme.spacing(5, 8),
      paddingBottom: "0px",

      ".infoTitleBox": {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(4),
      },

      ".infoList": {
        fontSize: theme.spacing(6),
        color: theme.text.darkGrey,
        lineHeight: 1.8,
        paddingLeft: 0,
        listStyle: "none",

        li: {
          marginBottom: theme.spacing(0.5),
        },
      },
    },
    ".tipsBox": {
      backgroundColor: theme.misc.lightGrayBG,
      borderRadius: theme.spacing(4),
      padding: theme.spacing(5, 8),
      paddingBottom: "0px",

      ".tipsTitle": {
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
      },

      ".tipsList": {
        color: theme.text.light,
        lineHeight: 1.8,
        paddingLeft: 0,
        listStyle: "none",
      },
    },
  },
  ".rightSide": {
    height: "95vh",
    width: "80%",
    position: "relative",

    ".mapDropdown": {
      position: "absolute",
      top: theme.spacing(8),
      right: theme.spacing(8),
      zIndex: 1000,
      minWidth: theme.spacing(80),
    },
  },
}));
/**
 *  handle Click on map
 */
const MapClickHandler = ({
  setPosition,
}: {
  setPosition: (pos: [number, number]) => void;
}) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

/**
 *  animation map on click
 */
function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
      duration: 1,
      easeLinearity: 0.25,
    });
  });
  return null;
}

/**
 *  update the map
 */
function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      const maxZoom = map.getMaxZoom();
      map.flyTo(position, maxZoom, {
        animate: true,
        duration: 3,
        easeLinearity: 0.25,
      });
    }
  }, [position]);

  return null;
}

const LocationMapSearch = ({ open, onClose }: PropsI) => {
  const { control, watch } = useForm({
    mode: "onChange",
  });
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState<[number, number]>([
    19.25188376838804, 72.84543669445839,
  ]);
  const animateRef = useRef(false);
  const [mapStyle, setMapStyle] = useState<{ label: string; value: string }>({
    label: "Satellite",
    value: "satellite-streets-v12",
  });
  const { useGetAddress, useForwardGeocodingAddressToLatLon } =
    hooks.useLocations();
  const [loactionSuggestions, setLocationSuggestions] = useState([]);
  const searchDebounce = hooks.useDebounce(inputValue, 1000);

  const { data: addressList, isLoading: addressLoading } = useGetAddress(
    searchDebounce,
    10
  );
  const pincode = watch("pincode");
  const valid = pincode?.length >= 6 ? pincode : "";
  const { data: forwardGeocodingData } =
    useForwardGeocodingAddressToLatLon(valid);

  const {
    coords,
    error,
    getLatitudeAndLongitude,
    loading: isGeoLoading,
  } = hooks.useGetLatitudeAndLongitude();

  useEffect(() => {
    if (forwardGeocodingData?.[0]) {
      const { lat, lon } = forwardGeocodingData[0];
      setPosition([parseFloat(lat), parseFloat(lon)]);
    }
  }, [forwardGeocodingData]);
  useEffect(() => {
    if (addressList) setLocationSuggestions(addressList);
  }, [addressList]);
  return (
    <BasicModal open={true} close={onClose} fullScreen>
      <MainStyle>
        <Box className="leftSide">
          <Box className="header">
            <Box className="homeIcon">
              <HomeIcon />
              <Typography variant="h3" className="headerTitle">
                Set Work Location
              </Typography>
            </Box>
            <Typography className="headerSubtitle" variant="body1">
              Pin your home or workplace on the map
            </Typography>
          </Box>
          <Box className="inputContainer">
            <Controller
              name="pincode"
              control={control}
              rules={{
                validate: (val) => {
                  if (!validationPatterns.pattern.allowOnlyNumbers.test(val)) {
                    return "Only numbers are allowed";
                  }
                  if (
                    !validationPatterns.pattern.pincode.test(val) ||
                    val.length > 6
                  ) {
                    return "Enter valid pincode";
                  }
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  {...field}
                  placeholder="Enter 6-digit pincode"
                  label="workplace pincode"
                  // onChange={(e) => {
                  //   const val = e.target.value;
                  //   if (
                  //     val.length < 7 &&
                  //     validationPatterns.pattern.positiveInteger.test(val)
                  //   ) {
                  //     field.onChange(e);
                  //   }
                  // }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            <SearchWithLocation
              value={inputValue}
              handleChange={(val) => setInputValue(val)}
              isLoading={isGeoLoading || addressLoading}
              loactionSuggestions={loactionSuggestions}
              handleGetCurrentLatitudeAndLongitude={getLatitudeAndLongitude}
            />
            <SearchableDropDown
              label="Select Location"
              placeholder="Choose your area"
            />
            <Box className="infoBox">
              <Box className="infoTitleBox">
                <SmallLocationWithInsideCircle />
                <Typography variant="subtitle1">
                  How to set location:
                </Typography>
              </Box>

              <ul className="infoList">
                <li>• Enter your workplace pincode</li>
                <li>• Select your area from dropdown</li>
                <li>• Click on the map to pin exact location</li>
                <li>• Confirm your selection</li>
              </ul>
            </Box>
            <Button variant="contained">Confirm Location</Button>
            <Box className="tipsBox">
              <Typography className="tipsTitle" variant="subtitle1">
                Quick Tips:
              </Typography>
              <ul className="tipsList">
                {QuickTips.map((val) => (
                  <Box>
                    <Typography className="tipsList" variant="body2">
                      ✓ {val}
                    </Typography>
                  </Box>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className="rightSide">
          <Box className="mapDropdown" bgcolor={"red"}>
            <SearchableDropDown
              value={mapStyle}
              onChange={(e) => {
                setMapStyle(e);
              }}
              options={mapStyles}
            />
          </Box>
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={position}
            zoom={100}
            scrollWheelZoom={true}
            dragging={true}
            doubleClickZoom={true}
            attributionControl={false}
            zoomAnimation={true}
            zoomAnimationThreshold={4}
            fadeAnimation={true}
            zoomControl={false}
          >
<TileLayer
  url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
  attribution="© Google"
/>

            {/* <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/${mapStyle.value}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAP_BOX}`}
              attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            /> */}
            <MapClickHandler setPosition={setPosition} />
            <ZoomControl position="bottomright" />
            {position && (
              <>
                <Marker position={position} riseOnHover />
                <FlyToLocation position={position} />
              </>
            )}

            <SetViewOnClick animateRef={animateRef} />
          </MapContainer>
        </Box>
      </MainStyle>
    </BasicModal>
  );
};

export default LocationMapSearch;
