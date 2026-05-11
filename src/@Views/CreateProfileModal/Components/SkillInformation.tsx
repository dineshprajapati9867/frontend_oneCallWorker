import CircleDaySelector from "@Components/CircleDaySelector";
import UploadImage from "@Components/UploadImage";
import { skills, days, experience } from "@Constants/Home";
import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { CheckBox, SearchableDropDown } from "@Primitives/index";
import { hooks, theme } from "@Utils/index";
import ImageCard from "@Views/WorkerDetails/components/ImageCard";
import React, { useCallback } from "react";
import { Controller, useWatch } from "react-hook-form";

interface PropsI {
  control: any;
  setValue: any;
  watch: any;
}
const SkillStyle = styled(Box)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    ".mainBox": {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(12),
      width: isMobile ? "100%" : theme.spacing(260),
      paddingTop: theme.spacing(12),
    },

    ".fS14": {
      fontSize: isMobile && `${theme.spacing(7)} !important`,
    },
    ".selectDayWeek": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ".dayBox": {
      display: "flex",
      gap: theme.spacing(7),
    },
    ".uploadImages": {
      marginTop: theme.spacing(12),

      ".uploadText": {
        marginBottom: theme.spacing(6),
      },
      ".cardBox": {
        marginTop: theme.spacing(10),
        flexWrap: "wrap",
      },
    },
  }),
);
const SkillInformation = ({ control, watch, setValue }: PropsI) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const selectedDays = useWatch({
    control,
    name: "days",
  });

  const handleAllDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("days", days);
    } else {
      setValue("days", []);
    }
  };
  const images = useWatch({
    name: "images",
    control: control,
    defaultValue:[]
  });

  const handleUploadImage = (files: any) => {    
    setValue("images", [...images, ...files], {
      shouldValidate: true,
    });
  };

  return (
    <SkillStyle isMobile={isMobile}>
      <Box className="mainBox">
        <Controller
          name="skills"
          control={control}
          rules={{
            required: "Skills is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <SearchableDropDown
              {...field}
              label="Select Your Skills"
              placeholder="Select Your Skills"
              options={skills}
              isMulti={true}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="experience"
          control={control}
          rules={{
            required: "Skills is required",
          }}
          render={({ field, fieldState: { error } }) => (
            <SearchableDropDown
              {...field}
              label="Years of Experience*"
              placeholder="Select Experience"
              options={experience}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Box>
          <Box className="selectDayWeek">
            <Typography className="fS14" variant="h6">
              Select Days Of the Week*
            </Typography>
            <CheckBox
              size="small"
              checked={selectedDays?.length === days.length}
              onChange={handleAllDays}
              label="Select All Days"
            />
          </Box>
          <Controller
            name="days"
            control={control}
            render={({ field: { value = [], onChange } }) => (
              <Box className="dayBox">
                {days.map((day: string) => (
                  <CircleDaySelector
                    key={day}
                    name={day}
                    selectedDays={value}
                    onChange={onChange}
                  />
                ))}
              </Box>
            )}
          />
        </Box>
      </Box>
      <Box className="uploadImages">
        <Typography className="fS14 uploadText" variant="h6">
          Upload your work
        </Typography>

        <UploadImage onChange={handleUploadImage} />
        <Box className="cardBox dayBox">
          {images?.map((val: { url: string }) => {
            return (
              <ImageCard
                key={val.url}
                link={val.url}
                handleCrossIcon={() => {
                  const filtered = images.filter(
                    (img: { url: string }) => img.url !== val.url,
                  );

                  setValue("images", filtered);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </SkillStyle>
  );
};

export default SkillInformation;
