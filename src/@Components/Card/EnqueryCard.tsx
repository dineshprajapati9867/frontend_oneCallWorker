import { styled, Box, Typography, Button } from "@mui/material";
import { TextInput } from "@Primitives/index";
import { removeSpecialCharAndCapFirstLetter } from "@Utils/helpers";
import React from "react";
import { useParams } from "react-router-dom";

const EnquiryCardStyle = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.misc.borderColor}`,
  boxSizing: "border-box",
  width: theme.spacing(168),
  height: theme.spacing(135),
  padding: theme.spacing(7.5),
  borderRadius: theme.spacing(4),

  position: "sticky",
  top: 0,

  ".des": {
    fontWeight: 500,
    paddingTop: theme.spacing(6),
  },
  ".type": {
    color: theme.text.lightBlue,
  },
  ".inputContainer": {
    paddingTop: theme.spacing(7.5),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(6),
  },
  ".btn": {
    height: theme.spacing(17.5),
  },
}));
const EnquiryCard = () => {
  const { type } = useParams();

  return (
    <EnquiryCardStyle>
      <Box>
        <Typography variant="subtitle1">
          Get the List of Top{" "}
          <span className="type">{type.split("-").join(" ")}</span>
        </Typography>
      </Box>
      <Typography className="des" variant="body2">
        We'll send you contact details in seconds for free
      </Typography>
      <Box className="inputContainer">
        <TextInput label="Name" placeholder="Enter your name" />
        <TextInput
          label="Mobile Number"
          placeholder="Enter your Mobile Number"
        />

        <Button className="btn" variant="contained">
          Send Enquiry
        </Button>
      </Box>
    </EnquiryCardStyle>
  );
};

export default EnquiryCard;
