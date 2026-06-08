import React, { useState } from "react";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { TextInput } from "@Primitives/index";
import { Controller, useForm } from "react-hook-form";
import { pattern } from "@Utils/pattern";
import { CloseEyeBlackIcon, OpenEyeBlackIcon } from "@Icons/index";
import { hooks } from "@Utils/index";
interface PropsI {
  onSignin: () => void;
  control: any;
  isLoading: boolean;
}
const SignUpStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  flexDirection: "column",

  ".btn": {
    fontWeight: 600,
    border: "none",
    borderRadius: theme.spacing(3.5),
  },
  ".alreadyBox": {
    display: "flex",
    alignItems: "center",
    ".already": {
      color: theme.text.darkGrey,
    },
    ".signInBtn": {
      color: theme.text.lightBlue,
      fontSize: `${theme.spacing(7)} !important`,
    },
  },
}));
export const SignUp = ({ onSignin, control, isLoading }: PropsI) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SignUpStyled>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Name is required",
          pattern: {
            value: pattern.noSpace,
            message: "Space not allowed",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            placeholder="Enter your name"
            label="Name*"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
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
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: pattern.noSpace,
            message: "Space not allowed",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            {...field}
            placeholder="Enter your password"
            label="Password*"
            error={!!error}
            type={`${showPassword ? "text" : "password"}`}
            helperText={error ? error.message : null}
            postContentSx={{mr:5}}
            postContent={
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <OpenEyeBlackIcon /> : <CloseEyeBlackIcon />}
              </IconButton>
            }
          />
        )}
      />
      <Button
        disabled={isLoading}
        type="submit"
        className="btn"
        variant="contained"
      >
        Create Account
      </Button>

      <Box className="alreadyBox">
        <Typography className="already" variant="body1">
          Already have an account?
        </Typography>
        <Button disabled={isLoading} onClick={onSignin} className="signInBtn">
          Sign in
        </Button>
      </Box>
    </SignUpStyled>
  );
};
