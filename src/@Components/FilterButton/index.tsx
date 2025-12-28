import { Box, styled, Typography } from "@mui/material";
import React from "react";
interface PropsI {
  name: string;
  selectedFilter: string;
  handleSelectFilter: (Filter: string) => void;
  startIcon?: React.ReactNode;
}

const FilterButtonContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5.5, 6),
  textAlign: "center",
  borderRadius: theme.spacing(6),
  border: `1px solid ${theme.text.frostGray}`,
  maxWidth: theme.spacing(72.5),
  cursor: "pointer",
  minWidth: theme.spacing(72.5),
  //   height:theme.spacing(21)
}));

export function FilterButton({
  name,
  handleSelectFilter,
  selectedFilter,
  startIcon,
}: PropsI) {
  const isSelected = selectedFilter === name;

  return (
    <FilterButtonContainer
      sx={(theme) => ({
        background: isSelected ? theme.text.silverGray : "",
      })}
      onClick={() => handleSelectFilter(isSelected ? "" : name)} // toggle
    >
      {startIcon}
      <Typography variant="subtitle1">{name}</Typography>
    </FilterButtonContainer>
  );
}
