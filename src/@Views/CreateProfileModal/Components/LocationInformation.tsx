import { Box, styled } from "@mui/material";
import { TextInput } from "@Primitives/index";
import { hooks } from "@Utils/index";
import React from "react";
import { Controller } from "react-hook-form";
interface PropI {
  control: any;
}
const LocationStyle = styled(Box)<{isMobile:boolean}>(({ theme ,isMobile}) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),
  width:isMobile ?'90%':theme.spacing(260),
  paddingTop: theme.spacing(16),
}));
const LocationInformation = ({ control }: PropI) => {
  const {isMobile}=hooks.useResponsive()
  return (
    <LocationStyle isMobile={isMobile}>
      <Controller
        name="address_one"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Address Line 1*"
            placeholder="Enter Floor Name,Building Name,Street"
          />
        )}
      />
      <Controller
        name="address_one"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Address Line 2"
            placeholder="Enter Floor Name,Building Name,Street"
          />
        )}
      />
      <Controller
        name="area"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Area*"
            placeholder="Enter Area"
          />
        )}
      />
      <Controller
        name="landmark"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Landmark"
            placeholder="Enter Landmark"
          />
        )}
      />
      <Controller
        name="pincode"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Pincode*"
            placeholder="Enter Pincode"
          />
        )}
      />
      <Controller
        name="state"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="State*"
            placeholder="State"
            disabled={true}
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="City*"
            placeholder="City"
            disabled={true}
          />
        )}
      />
    </LocationStyle>
  );
};

export default LocationInformation;
