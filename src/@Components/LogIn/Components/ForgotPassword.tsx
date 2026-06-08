import React from "react";
import { Box, Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Controller } from "react-hook-form";
import { pattern } from "@Utils/pattern";
import { TextInput } from "@Primitives/index";
import { OpenEyeBlackIcon } from "@Icons/index";
interface PropsI {
  control: any;
  onSignIn: () => void;
  onOtpSent: () => void;
  onSignUp:()=>void
  isLoading:boolean
}
const ResetStyled = styled(Box)<{isMobile:boolean}>(({ theme,isMobile }) => ({
  display: "flex",
  gap: theme.spacing(10),
  flexDirection: "column",
  ".btn": {
    fontWeight: 600,
    border: "none",
    borderRadius: theme.spacing(3.5),
  },
    '.alreadyBox':{
    display:"flex",
    alignItems:"center"
    ,
    '.already':{
        color:theme.text.darkGrey,
    },
   '.signInBtn':{
     color:theme.text.lightBlue,
        fontSize:`${theme.spacing(7)} !important`
   },
  },
  '.bottomBox':{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:isMobile?"column":"row"
  }
}));
export const ForgotPassword = ({ control, onSignIn, onOtpSent,onSignUp,isLoading }: PropsI) => {
  const isMobile=useMediaQuery((theme)=>theme.breakpoints.only('xs'))
  return (
    <>
   
    <ResetStyled isMobile={isMobile}>
      <Box>
        <Typography mb={3} variant="h4">
          Reset Your Password
        </Typography>
        <Typography variant="body1">
          Enter your email address and we'll send an OTP to your email.
        </Typography>
      </Box>

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          validate: (val: string) => {
            if (!pattern.noSpace.test(val)) return "Space not allowed";
            if (!pattern.email.test(val)) return "Enter valid email";

            return undefined;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            placeholder="your@email.com"
            label="Email*"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Button disabled={isLoading} type="submit" className="btn" variant="contained">
        Reset Password
      </Button>
      <Box className="bottomBox">

      <Box className="alreadyBox">
        <Typography className="already" variant="body1">
          Already have an account?
        </Typography>
        <Button disabled={isLoading} onClick={onSignIn} className="signInBtn">
          Sign In
        </Button>
      </Box>
      <Box className="alreadyBox">
        <Typography className="already" variant="body1">
          Need an account?
        </Typography>
        <Button disabled={isLoading} onClick={onSignUp} className="signInBtn">
          Sign Up
        </Button>
      </Box>
      </Box>
    </ResetStyled>
     </>
  );
};
