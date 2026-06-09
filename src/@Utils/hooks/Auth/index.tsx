import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin, saveGoogleUser } from "@Utils/controllers/misc";
import { hooks } from "@Utils/index";
import React, { useContext, createContext, useState } from "react";
import { interfaces } from "@Utils/index";
import {
  SignUpAuth,
  LogoutpAuth,
  SendOtpAuth,
  SignInAuth,
  UpdatePasswordpAuth,
} from "@Utils/controllers/auth";
import { useMutation } from "@tanstack/react-query";
type AuthScreen = "signin" | "signup" | "sendOtp" | "updatePassword";
interface AuthContextI {
  handleLoginWithGoogle: () => void;
  authScreen: AuthScreen;
  setAuthScreen: React.Dispatch<React.SetStateAction<AuthScreen>>;
  isSignInAuthLoading: boolean;
  handleSignIn: (data: interfaces.SignUpFormData) => void;

  handleSignUp: (data: interfaces.SignUpFormData) => void;
  isSignUpLoading: boolean;

  handleSendOtp: (data) => void;
  isSendOtpLoading: boolean;

  handleUpdatePassword: (data) => void;
  isUpdatePasswordLoading: boolean;

  handleLogout: () => void;
  isLogoutLoading: boolean;
}

const authContext = createContext<AuthContextI>({} as AuthContextI);

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>("signin");
  const { setUser } = hooks.useToken();

  const { ShowApiErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
  const { handleCloseLogin } = hooks.useUser();
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
      const userInfo = await googleLogin(res.access_token);
      const savedUser = await saveGoogleUser(userInfo.data);
      setUser(savedUser.data.user);
      handleCloseLogin();
    },
    onError: (err) => {
      ShowApiErrorSnackBar(err);
    },
  });

  // Sign In
  const { mutate: mutateSignInAuth, isPending: isSignInAuthLoading } =
    useMutation({
      mutationFn: SignInAuth,
      onSuccess(data) {
        setUser(data.data.user);

        ShowSuccessSnackBar("Login successful");

        handleCloseLogin();
      },
      onError: (err) => {
        ShowApiErrorSnackBar(err);
      },
    });

  const handleSignIn = (data) => {
    mutateSignInAuth(data);
  };

  // Sign Up
  const { mutate: mutateSignUpAuth, isPending: isSignUpLoading } = useMutation({
    mutationFn: SignUpAuth,
    onSuccess: (data) => {
      ShowSuccessSnackBar("Account created successfully");
      setUser(data.data.user), 
      // setToken(data.data.jwtToken), 
      handleCloseLogin();
    },
    onError: (err) => {
      ShowApiErrorSnackBar(err);
    },
  });

  const handleSignUp = (data: interfaces.SignUpFormData) => {
    mutateSignUpAuth(data);
  };

  // Send OTP
  const { mutate: mutateSendOtpAuth, isPending: isSendOtpLoading } =
    useMutation({
      mutationFn: SendOtpAuth,
      onSuccess: () => {
        ShowSuccessSnackBar("OTP sent successfully");
        setAuthScreen("updatePassword");
      },
      onError: (err) => {
        ShowApiErrorSnackBar(err);
      },
    });

  const handleSendOtp = (data) => {
    mutateSendOtpAuth(data);
  };

  // Update Password
  const {
    mutate: mutateUpdatePasswordAuth,
    isPending: isUpdatePasswordLoading,
  } = useMutation({
    mutationFn: UpdatePasswordpAuth,
    onSuccess: () => {
      ShowSuccessSnackBar("Password updated successfully");
      handleCloseLogin();
    },
    onError: (err) => {
      ShowApiErrorSnackBar(err);
    },
  });

  const handleUpdatePassword = (data) => {
    const payload = {
      email: data.email,
      password: data.new_password,
      otp: data.otp,
    };
    mutateUpdatePasswordAuth(payload);
  };

  //Logout
  const { mutate: mutateLogoutAuth, isPending: isLogoutLoading } = useMutation({
    mutationFn: LogoutpAuth,
    onSuccess: () => {
      ShowSuccessSnackBar("Logged out successfully");
      localStorage.clear();
    },
    onError: (err) => {
      ShowApiErrorSnackBar(err);
    },
  });

  const handleLogout = () => {
    mutateLogoutAuth();
  };
  return {
    handleLoginWithGoogle,
    authScreen,
    setAuthScreen,
    isSignInAuthLoading,
    handleSignIn,
    handleSignUp,
    isSignUpLoading,

    handleSendOtp,
    isSendOtpLoading,

    handleUpdatePassword,
    isUpdatePasswordLoading,

    handleLogout,
    isLogoutLoading,
  };
}

interface ProvideAuthI {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthI) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
