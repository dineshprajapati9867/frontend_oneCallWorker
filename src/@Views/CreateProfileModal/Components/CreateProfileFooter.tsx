import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Button, useMediaQuery } from "@mui/material";
import { hooks } from "@Utils/index";

export interface PropsI {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  isButtonDisabled?: boolean;
}

const Footer = styled(Paper)<{isMobile:boolean}>(({ theme ,isMobile}) => ({
  position: isMobile?"fixed":"static",
  bottom: 0,
  left: 0,
  right: 0,
  maxHeight: 75,
  padding: 2,
  paddingTop: theme.spacing(6.5),
  paddingBottom: theme.spacing(7),
  paddingLeft: theme.spacing(16),
  paddingRight: theme.spacing(16),
  boxShadow: "none",
  borderTop: `1px solid ${theme.misc.borderColor}`,
...(!isMobile&&{
  borderBottom: `1px solid ${theme.misc.borderColor}`,

}) ,
  zIndex: 1,
  boxSizing: "border-box",
}));

export function CreateProfileFooter({
  activeStep,
  handleNext,
  handleBack,
  isButtonDisabled,
}: PropsI) {
  /**
   * Returns the button text.
   */
  const handleButtonText = () => {
    if(activeStep===3){
        return "Submit"
    }
    return "Next";
  };

const isMobile=useMediaQuery((theme)=>theme.breakpoints.only('xs'))
  return (
    <>
      <Footer elevation={3} isMobile={isMobile}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Button
            size={`${isMobile ? "small" : "large"}`}
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep===1}
          >
            {activeStep === 1 ? "Cancel" : "Back"}
          </Button>
          <Button
            type="submit"
            size={`${isMobile ? "small" : "large"}`}
            variant="contained"
             disabled={isButtonDisabled}
            onClick={handleNext}
          >
            {handleButtonText()}
          </Button>
        </Grid>
      </Footer>
    </>
  );
}
