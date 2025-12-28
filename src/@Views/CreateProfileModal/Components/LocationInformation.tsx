import { Box, styled } from "@mui/material";
import { TextInput } from "@Primitives/index";
import { hooks } from "@Utils/index";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
interface PropsI {
  control: any;
  watch: any;
  setValue: any;
}
const LocationStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(12),
    width: isMobile ? "90%" : theme.spacing(260),
    paddingTop: theme.spacing(16),
  })
);
const LocationInformation = ({ control, watch, setValue }: PropsI) => {
  const {ShowCautionSnackBar}=hooks.useSnackBar()
  const { isMobile } = hooks.useResponsive();
  const { useGetPostalCode } = hooks.useMisc();
  const pincode = watch("pincode");
  const { data, isSuccess,isError } = useGetPostalCode(
    pincode?.length === 6 && pincode
  );

console.log("isError",isError);

  useEffect(() => {
    if (isSuccess && data) {
      setValue("city", data.city);
      setValue("state", data.state);
    }
    if(isError){
      ShowCautionSnackBar("Postal code not found")
      setValue("pincode", "");    }
  }, [isSuccess, data, setValue,isError]);
  
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
          <TextInput {...field} label="Area*" placeholder="Enter Area" />
        )}
      />
      <Controller
        name="landmark"
        control={control}
        render={({ field }) => (
          <TextInput {...field} label="Landmark" placeholder="Enter Landmark" />
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              if (val.length <= 6) {
                field.onChange(val);
              }
              setValue('city', '');
              setValue('state', '');
            }}
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
