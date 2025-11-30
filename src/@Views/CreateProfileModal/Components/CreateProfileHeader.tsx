import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  AppBar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { BasicStepper, Loader } from "@Primitives";
import { CloseIcon } from "@Icons";
import { useFormContext } from "react-hook-form";
import BreadCrumbs from "@Components/BreadCrumbs";

export interface PropI {
  steps: string[];
  activeStep: number;
  onClose: () => void;
  handleSaveAndNext: () => void;
  isBtnLoading: boolean;
}

const FixedAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(15, 11),
  minHeight: 108,
  maxHeight: 108,
  boxShadow: "none",
  border: `1px solid ${theme.palette.primary.light}`,
  justifyContent: "center",
}));


export function CreateProfileHeader({
  steps,
  activeStep,
  onClose,
  handleSaveAndNext,
  isBtnLoading,
}: PropI) {
  return (
    <div>
      <FixedAppBar position="fixed" color="inherit">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Grid
              container
              wrap="nowrap"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid item>
                <IconButton
                  sx={(theme) => ({
                    marginRight: theme.spacing(2),
                    marginBottom: theme.spacing(-3),
                  })}
                  onClick={onClose}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Box paddingBottom={3.5}>
                  <BreadCrumbs
                    item={[
                      { name: `Profile`, onClick: onClose },
                      { name: "Create Profile" },
                    ]}
                  />
                </Box>
                <Typography
                  variant="h4"
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
          <Grid
            item
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
      </FixedAppBar>
    </div>
  );
}
