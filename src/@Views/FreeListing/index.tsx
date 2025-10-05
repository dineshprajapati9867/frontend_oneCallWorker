import {
  styled,
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import React from "react";

import { ChevronArrowDown } from "@Icons/ArrowDown";
import { FAQs } from "@Constants/Home";
import { useNavigate } from "react-router-dom";
import { RightArrowMui } from "@Icons/index";
const FreeListingStyled = styled(Box)(({ theme }) => ({
  ".navbar": {
    height: theme.spacing(40),
    borderBottom: `1px solid ${theme.misc.borderColor}`,
    width: "100%",
    padding: theme.spacing(0, 10),
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    '.leftSide':{
    display: "flex",
    alignItems: "center",
    },
  },
  ".logo": {
    margin: theme.spacing(0, 15),
  },
  ".backHomeBox": {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(10),

    ".homeBtn": {
      fontSize: theme.spacing(5.5),
      minWidth: "0px",
    },
    ".freeListing": {
      color: theme.palette.secondary.dark,
      fontSize: theme.spacing(5.5),
    },
  },
  ".accordion": {
    border: `1px solid ${theme.misc.selectedBlue}`,
    borderRadius: `${theme.spacing(8)} !important`,
    padding: theme.spacing(10, 7.5, 10, 0),
    margin: theme.spacing(12.5, 0),
  },
  ".main": {
    padding: theme.spacing(0, 10, 10, 10),
    ".gotQustion": {
      margin: theme.spacing(15, 0),
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      backgroundColor: theme.misc.veryPaleBlue,
      padding: theme.spacing(5),
      borderRadius: "100%",
    },
    ".MuiAccordionSummary-root": {
      minHeight: "0px",
      maxHeight: "0px",
      padding: theme.spacing(7.5, 0, 7.5, 11),
    },
  },
  ".headerTexts": {
    fontSize: theme.spacing(10),
    fontWeight: 600,
  },
  ".ul": {
    li: {
      fontSize: theme.spacing(10),
      margin: theme.spacing(2.5, 0),
    },
  },
}));
function FreeListing() {
  const navigate = useNavigate();
  return (
    <FreeListingStyled>
      <nav className="navbar">
        <Box className="leftSide">
        <Typography className="logo">oneCallWorker</Typography>
          <Button variant="text">FAQs</Button>
        </Box>
<Button variant="contained">Create Your Profile</Button>
      </nav>
      <Box className="backHomeBox">
        <Button className="homeBtn" onClick={() => navigate(-1)} variant="text">
          Home
        </Button>
        <RightArrowMui color="secondary" />
        <Typography className="freeListing">Free Listing</Typography>
      </Box>
      <Box className="main">
        <Typography className="gotQustion" variant="h2">
          Got a question?
        </Typography>
        {FAQs.map((val) => (
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ChevronArrowDown />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="headerTexts">{val.question}</Typography>
            </AccordionSummary>
            <ul className="ul">
              {val.answers.map((ans) => (
                <li>{ans}</li>
              ))}
            </ul>
          </Accordion>
        ))}
      </Box>
    </FreeListingStyled>
  );
}

export default FreeListing;
