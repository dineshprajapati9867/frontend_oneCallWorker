import { DragAndDropAvatar } from "@Components/DragAndDrop/DragAndDropAvatar";
import { allIndianLanguage } from "@Constants/Home";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { CheckBox, SearchableDropDown, TextInput } from "@Primitives/index";
import { hooks } from "@Utils/index";
import React from "react";
import { Controller, useWatch } from "react-hook-form";
interface PropsI {
  control: any;
  watch: any;
  setValue: any;
}
const PersonalStyled = styled(Box)<{isMobile:boolean}>(({ theme,isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),
  width:isMobile ?'90%':theme.spacing(260),
  position: "relative",
  ".logo": {
    marginBottom: theme.spacing(7.5),
    marginTop: theme.spacing(2.5),
  },
  ".checkBox": {
    position: "absolute",
    right: "0",
    ".MuiFormControlLabel-root": {
      marginRight: "0px",
    },
  },
}));
const PersonalInformation = ({ control, watch, setValue }: PropsI) => {
  const {isMobile}=hooks.useResponsive()
  const mobileNnumber = useWatch({
    name: "mobile_number",
    control: control,
  });
  const logo = useWatch({
    name: "logo",
    control: control,
  });
  //const logo = watch("logo");
  const handleSameAsMobileNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("whatsApp_number", mobileNnumber);
    } else {
      setValue("whatsApp_number", "");
    }
  };
  return (
    <PersonalStyled isMobile={isMobile}>
      <Box className="logo">
        <Controller
          name="logo"
          control={control}
          render={({ field: { onChange } }) => (
            <DragAndDropAvatar onChange={onChange} displayPicture={logo} />
          )}
        />
      </Box>
      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="First Name*"
            placeholder="Enter First Name"
          />
        )}
      />
      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Last Name*"
            placeholder="Enter Last Name"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Email ID*"
            placeholder="Enter Email ID"
          />
        )}
      />
      <Controller
        name="mobile_number"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Mobile Number*"
            placeholder="Enter Mobile Number"
          />
        )}
      />
      <Box>
        <Controller
          name="whatsApp_number"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              label="WhatsApp Number"
              placeholder="Enter WhatsApp Number"
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
      </Box>
      <Controller
        name="languages"
        control={control}
        render={({ field }) => (
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
      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <TextInput {...field} label="Age*" placeholder="Enter Your Age" />
        )}
      />
      <Box>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
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
            </>
          )}
        />
      </Box>
    </PersonalStyled>
  );
};

export default PersonalInformation;
