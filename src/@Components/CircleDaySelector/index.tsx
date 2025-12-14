import { Box, styled, Typography } from "@mui/material";
import React from "react";

interface PropsI {
  name: string;
  selectedDays: string[];
  onChange: (days: string[]) => void;
}

const DayCircle = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
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
  const isActive = selectedDays.includes(name);

  const handleClick = () => {
    if (isActive) {
      onChange(selectedDays.filter((d) => d !== name));
    } else {
      onChange([...selectedDays, name]);
    }
  };

  return (
    <DayCircle active={isActive} onClick={handleClick}>
      <Typography className="text" variant="subtitle2">{name}</Typography>
    </DayCircle>
  );
}

export default CircleDaySelector;
