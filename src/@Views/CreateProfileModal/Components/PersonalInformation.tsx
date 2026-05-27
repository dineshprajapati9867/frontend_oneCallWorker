import { DragAndDropAvatar } from "@Components/DragAndDrop/DragAndDropAvatar";
import { allIndianLanguage } from "@Constants/Home";
import { ErrorIcon } from "@Icons/ErrorIcon";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  styled,
  Typography,
  Grid,
} from "@mui/material";
import { CheckBox, SearchableDropDown, TextInput } from "@Primitives/index";
import { hooks } from "@Utils/index";
import { pattern } from "@Utils/pattern";
import React from "react";
import { Controller, useWatch } from "react-hook-form";
interface PropsI {
  control: any;
  watch: any;
  setValue: any;
}
const PersonalStyled = styled(Grid)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    // display: "flex",
    // flexDirection: "column",
    // gap: theme.spacing(12),
    // width: isMobile ? "90%" : theme.spacing(260),
    ".logo": {
      marginBottom: theme.spacing(7.6),
      marginTop: theme.spacing(2.6),
    },
    ".checkBox": {
      position: "absolute",
      right: "0",
      bottom: "-30px",
      ".MuiFormControlLabel-root": {
        marginRight: "0px",
      },
    },
    ".formHelperBox": {
      display: "flex",
      ".MuiFormHelperText-root": {
        marginTop: "0px",
        marginLeft: theme.spacing(1.25),
        fontSize: theme.spacing(6),
      },
    },
  }),
);
const PersonalInformation = ({ control, watch, setValue }: PropsI) => {
  const { isMobile } = hooks.useResponsive();
  const mobileNnumber = useWatch({
    name: "mobile_number",
    control: control,
  });
  const logo = useWatch({
    name: "logo",
    control: control,
  });
  

  const handleSameAsMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("whatsApp_number", mobileNnumber);
    } else {
      setValue("whatsApp_number", "");
    }
  };

  const spaceNotAllowed = (val: string) => {
    if (val) {
      if (!pattern.noSpace.test(val)) {
        return "Space is not allowed";
      }
      if (!pattern.name.test(val)) {
        return "Only alphabets are allowed";
      }
    }
    return undefined;
  };

  return (
    <PersonalStyled
      container
      columnSpacing={10}
      rowSpacing={8}
      isMobile={isMobile}
    >
      <Grid size={16} className="logo">
        <Controller
          name="profile"
          control={control}
          render={({ field: { onChange, } }) => (<>

            <DragAndDropAvatar onChange={onChange} displayPicture={logo} />
          </>
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="first_name"
          control={control}
          rules={{
            required: "First name is required",
            validate: spaceNotAllowed,
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="First Name*"
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="Enter First Name"
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="last_name"
          control={control}
          rules={{
            required: "Last name is required",
            validate: spaceNotAllowed,
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Last Name*"
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="Enter Last Name"
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: pattern.email,
              message: "Enter a valid email address",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Email ID*"
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="Enter Email ID"
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="mobile_number"
          control={control}
          rules={{
            required: "Mobile Number is required",

            validate: (val) => {
              if (!pattern.mobile.test(val)) {
                return "Enter valid mobile number";
              }
              return undefined;
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Mobile Number*"
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="Enter Mobile Number"
              inputProps={{
                maxLength: 10,
              }}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} position={"relative"}>
        <Controller
          name="whatsApp_number"
          control={control}
          rules={{
            validate: (val) => {
              if (val?.length === 10 && !pattern.mobile.test(val)) {
                return "Enter valid mobile number";
              }
              return undefined;
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="WhatsApp Number"
              error={!!error}
              helperText={error ? error.message : null}
              placeholder="Enter WhatsApp Number"
              inputProps={{
                maxLength: 10,
              }}
            />
          )}
        />
        <Box className="checkBox">
          <CheckBox
            onChange={handleSameAsMobileNumber}
            size="small"
            label="Same As Mobile Number"
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="languages"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <SearchableDropDown
              {...field}
              label="Select Your Languages"
              placeholder="Select Your Languages"
              options={allIndianLanguage}
              isMulti={true}
              toolTipText="Select languages in which you can talk to customers"
              isTooltipIcon={true}
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="age"
          control={control}
          rules={{
            required: "Age name is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              {...field}
              label="Age*"
              placeholder="Enter Your Age"
              error={!!error}
              helperText={error ? error.message : null}
              inputProps={{
                maxLength: 2,
              }}
            />
          )}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          rules={{
            required: "Select a gender",
          }}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <Typography variant="h6">Gender*</Typography>

              <RadioGroup row {...field}>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {error && (
                <Box className="formHelperBox">
                  <ErrorIcon />
                  <FormHelperText>{error.message}</FormHelperText>
                </Box>
              )}
            </FormControl>
          )}
        />
      </Grid>
    </PersonalStyled>
  );
};

export default PersonalInformation;
