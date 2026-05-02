import { Box, styled, Typography } from "@mui/material";
import { hooks } from "@Utils/index";
import React from "react";

interface PropsI {
  name: string;
  selectedDays: string[];
  onChange?: (days: string[]) => void;
}

const DayCircle = styled(Box)<{ active: boolean,isMobile:boolean }>(({ theme, active,isMobile }) => ({
  width: theme.spacing(30),
  height:isMobile?theme.spacing(20): theme.spacing(30),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontWeight: 500,
  backgroundColor: active ? theme.text.primary : "transparent",
  border:  `1px solid ${theme.misc.borderColor}`,
  transition: "all 0.2s ease",
  '.text':{
    color: active ? theme.palette.primary.contrastText  :theme.text.darkGrey,
  }
}));

function CircleDaySelector({ name, selectedDays, onChange }: PropsI) {
  const isActive = selectedDays?.includes(name);

  const handleClick = () => {
    if (isActive) {
      onChange(selectedDays.filter((d) => d !== name));
    } else {
      onChange([...selectedDays, name]);
    }
  };
const {isMobile}=hooks.useResponsive()
  return (
    <DayCircle isMobile={isMobile} active={isActive} onClick={handleClick}>
      <Typography className="text" variant="subtitle2">{name}</Typography>
    </DayCircle>
  );
}

export default CircleDaySelector;
