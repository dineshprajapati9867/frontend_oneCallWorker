import { DragAndDropAvatar } from "@Components/DragAndDrop/DragAndDropAvatar";
import DragAndDropCoverPic from "@Components/DragAndDrop/DragAndDropCoverPic";
import DragAndDropLogo from "@Components/DragAndDrop/DragAndDropLogo";
import { allIndianLanguage } from "@Constants/Home";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { SearchableDropDown, TextInput } from "@Primitives/index";
import React from "react";
import { Controller } from "react-hook-form";
interface PropsI {
  control: any;
  watch: any;
}
const PersonalStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),
}));
const PersonalInformation = ({ control, watch }: PropsI) => {
  const logo = watch("logo");

  return (
    <PersonalStyled>
      <Controller
        name="logo"
        control={control}
        render={({ field: { onChange } }) => (
          <DragAndDropAvatar onChange={onChange} displayPicture={logo} />
        )}
      />
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
            label="Email ID*"
            placeholder="Enter Email ID"
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
        name="age"
        control={control}
        render={({ field }) => (
          <TextInput {...field} label="Age*" placeholder="Enter Your Age" />
        )}
      />
      <Controller
        name="Phone_number"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="Phone number*"
            placeholder="Enter Phone number"
          />
        )}
      />
      <Controller
        name="whatsApp_number"
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            label="WhatsApp number"
            placeholder="Enter WhatsApp number"
          />
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
      <Controller
        name="languages"
        control={control}
        render={({ field }) => (
          <SearchableDropDown
            {...field}
            label="Select your languages"
            placeholder="Select your languages"
            options={allIndianLanguage}
            isMulti={true}
            toolTipText="Select languages in which you can talk to customers"
            isTooltipIcon={true}
          />
        )}
      />
    </PersonalStyled>
  );
};

export default PersonalInformation;
