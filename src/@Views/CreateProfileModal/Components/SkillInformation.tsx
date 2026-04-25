import CircleDaySelector from "@Components/CircleDaySelector";
import { skills, days, experience } from "@Constants/Home";
import { Box, styled, Typography } from "@mui/material";
import { CheckBox, SearchableDropDown } from "@Primitives/index";
import { hooks } from "@Utils/index";
import React from "react";
import { Controller, useWatch } from "react-hook-form";

interface PropsI {
  control: any;
  setValue: any;
  watch: any;
}
const SkillStyle = styled(Box)<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),
  width: isMobile ? '90%' : theme.spacing(260),
  paddingTop: theme.spacing(12),
  ".selectDayWeek": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ".dayBox": {
    display: "flex",
    gap: theme.spacing(7),
  },
}));
const SkillInformation = ({ control, watch, setValue }: PropsI) => {
  const { isMobile } = hooks.useResponsive()
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
  return (
    <SkillStyle isMobile={isMobile}>
      <Controller
        name="skills"
        control={control}
        rules={
          {
            required: "Skills is required"
          }
        }
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
        rules={
          {
            required: "Skills is required"
          }
        }
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
          <Typography variant="h6">Select Days Of the Week*</Typography>
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
    </SkillStyle>
  );
};

export default SkillInformation;
