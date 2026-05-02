import { Rating, styled, RatingProps } from "@mui/material";
import React from "react";
const StarRatingStyel = styled(Rating)(({ theme }) => ({

  ".MuiRating-icon": {
    border: `1px solid ${theme.text.darkGrey}`,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(2),
    marginLeft:theme.spacing(7.5)
  },
  ".MuiRating-iconFilled": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
function StarRating(props: RatingProps) {
  return <StarRatingStyel {...props} />;
}

export default StarRating;
