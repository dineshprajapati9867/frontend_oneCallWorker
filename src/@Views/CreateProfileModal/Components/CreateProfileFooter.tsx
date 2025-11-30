import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Grid, Button } from "@mui/material";

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
  boxSizing:"border-box"
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
    return "Next";
  };

  /**
   * Checks if the next button should be disabled.
   * @returns {boolean} - True if the next button should be disabled.
   */
  const handleNextDisable = () => {
    return false;
  };

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
            size="large"
            variant="outlined"
            onClick={ handleBack}
            sx={(theme: any) => ({
              maxWidth: 84,
              minWidth: 84,
              minHeight: 48,
              maxHeight: 48,
              backgroundColor: theme.palette.primary.contrastText,
              color: theme.text.label,
              fontSize: theme.spacing(8),
              fontWeight: 400,
              lineHeight: theme.spacing(12),
              textTransform: "none",
              borderColor: theme.misc.borderColor,
              borderRadius: theme.spacing(4),
              boxShadow: "none",
            })}
          >
            {activeStep === 0 ? "Cancel" : "Back"}
          </Button>
          <Button
            type="submit"
            size="large"
            variant="contained"
            // disabled={handleNextDisable()}
            onClick={handleNext}
          >
            {handleButtonText()}
          </Button>
        </Grid>
      </Footer>
    </>
  );
}
