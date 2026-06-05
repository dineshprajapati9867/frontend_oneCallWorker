import { Box, Grid, styled } from "@mui/material";
import { TextInput } from "@Primitives/index";
import { hooks } from "@Utils/index";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
interface PropsI {
  control: any;
  watch: any;
  setValue: any;
}
const LocationStyle = styled(Grid)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    // width: isMobile ? "100%" : theme.spacing(260),
    paddingTop: theme.spacing(16),
  }),
);
const LocationInformation = ({ control, watch, setValue }: PropsI) => {
  const { ShowCautionSnackBar } = hooks.useSnackBar();
  const { isMobile } = hooks.useResponsive();
  const { useGetPostalCode } = hooks.useMisc();
  const pincode = watch("pincode");
  const { data, isSuccess, isError } = useGetPostalCode(
    pincode?.length === 6 && pincode,
  );

  useEffect(() => {
    if (isSuccess && data) {
      setValue("city", data.city);
      setValue("state", data.state);
    }
    if (isError) {
      ShowCautionSnackBar("Postal code not found");
      setValue("pincode", "");
    }
  }, [isSuccess, data, setValue, isError]);

  return (
    <LocationStyle
      container
      columnSpacing={10}
      rowSpacing={8}
      isMobile={isMobile}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="address_one"
          control={control}
          rules={{
            required: "Address is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Address*"
              placeholder="Enter Floor Name,Building Name,Street"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </Grid>
      {/* <Controller
        name="address_two"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Address Line 2"
            placeholder="Enter Floor Name,Building Name,Street"
          />
        )}
      /> */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="area"
          control={control}
          rules={{
            required: "Area is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Area*"
              placeholder="Enter Area"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
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
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="pincode"
          control={control}
          rules={{
            required: "Pincode is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Pincode*"
              placeholder="Enter Pincode"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const val = e.target.value;
                if (val.length <= 6) {
                  field.onChange(val);
                }
                setValue("city", "");
                setValue("state", "");
              }}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="state"
          control={control}
          rules={{
            required: "state is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="State*"
              placeholder="State"
              disabled={true}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="city"
          control={control}
          rules={{
            required: "City is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="City*"
              placeholder="City"
              disabled={true}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      </Grid>
    </LocationStyle>
  );
};

export default LocationInformation;
