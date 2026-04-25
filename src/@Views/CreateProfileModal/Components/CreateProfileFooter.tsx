import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";
import { hooks } from "@Utils/index";

export interface PropsI {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  isButtonDisabled?: boolean;
}

const Footer = styled(Paper)(({ theme }) => ({
  position: "fixed",
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

  /**
   * Checks if the next button should be disabled.
   * @returns {boolean} - True if the next button should be disabled.
   */
  // const handleNextDisable = () => {
  //   return false;
  // };
  const { isMobile } = hooks.useResponsive();
  return (
    <>
      <Footer elevation={3}>
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
