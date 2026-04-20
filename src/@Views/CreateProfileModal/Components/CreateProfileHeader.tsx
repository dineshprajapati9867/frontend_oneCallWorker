import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  AppBar,
  Typography,
  Box,
  IconButton,
  Button,
  LinearProgress,
} from "@mui/material";
import { BasicStepper, Loader } from "@Primitives";
import { CloseIcon } from "@Icons";
import BreadCrumbs from "@Components/BreadCrumbs";
import { hooks } from "@Utils/index";

export interface PropI {
  steps: string[];
  activeStep: number;
  onClose: () => void;
  handleSaveAndNext: () => void;
  isBtnLoading: boolean;
}

const FixedAppBar = styled(AppBar)<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    padding: isMobile ? theme.spacing(7.5, 5.5) : theme.spacing(15, 11),
    ...(isMobile && {
      paddingTop: "0px",
      paddingBottom: "0px",
    }),
    minHeight: 108,
    maxHeight: 108,
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.light}`,
    justifyContent: "center",

    ...(isMobile && {
      '.crossIcon':{
 paddingLeft:  "0px",
 paddingTop:'0px'
      },
      ".stepBox": {
        paddingTop: theme.spacing(9),
      },
      ".stepText": {
        paddingBottom: theme.spacing(3),
      },

      
    }),
  }),
);

export function CreateProfileHeader({
  steps,
  activeStep,
  onClose,
  handleSaveAndNext,
  isBtnLoading,
}: PropI) {
  const { isMobile } = hooks.useResponsive();
  const progress = (activeStep / steps.length) * 100;
  console.log("isMobile", isMobile);

  return (
    <>
      <FixedAppBar position="fixed" color="inherit" isMobile={isMobile}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid>
            <Grid
              container
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="center"

            >
              <Grid>
                <IconButton
                  sx={(theme) => ({
                    marginRight: theme.spacing(2),
                    marginBottom: theme.spacing(-3),
                    paddingLeft: isMobile && "0px",
                  })}
                  onClick={onClose}
                  className="crossIcon"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>

              <Grid>
                {!isMobile && (
                  <Box paddingBottom={3.5}>
                    <BreadCrumbs
                      item={[
                        { name: `Profile`, onClick: onClose },
                        { name: "Create Profile" },
                      ]}
                    />
                  </Box>
                )}
                <Typography
                  variant={isMobile ? "subtitle1" : "h4"}
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    color: theme.text.secondary,
                  })}
                >
                  Create Profile
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {!isMobile && (
            <Grid
              sx={{
                width: "50%",
              }}
            >
              <BasicStepper
                isDarkComplete
                steps={steps}
                activeStep={activeStep}
              />
            </Grid>
          )}
          <Grid>
            <Button
              disabled={isBtnLoading}
              onClick={handleSaveAndNext}
              size="small"
              variant="outlined"
            >
              {isBtnLoading ? (
                <Loader color="secondary" size={24} type="button" />
              ) : (
                "Save & Exit"
              )}
            </Button>
          </Grid>
        </Grid>
        {isMobile&&
        <Box className="stepBox">
          <Typography className="stepText" variant="subtitle1">
            STEP {activeStep} OF {steps.length}
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>}
      </FixedAppBar>
    </>
  );
}
