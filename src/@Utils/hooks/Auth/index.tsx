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
    openLogin: boolean;
  handleOpenLogin: () => void;
  handleCloseLogin: () => void;
  checkIsUserLogin:()=>boolean
}

const authContext = createContext<AuthContextI>({} as AuthContextI);

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>("signin");
    const [openLogin, setOpenLogin] = useState(false);
  const { setUser, setIsUserLogin } = hooks.useToken();

  const { ShowApiErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
    /*
   *  open and close Login
   */
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };


 const checkIsUserLogin = () => {
  const isUserLogin = JSON.parse(localStorage.getItem("isUserLogin") || "false");

  if (!isUserLogin) {
    handleOpenLogin();
    return false;
  }

  return true;
};
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
      const userInfo = await googleLogin(res.access_token);
      const savedUser = await saveGoogleUser(userInfo.data);
      setUser(savedUser.data.user);
      setIsUserLogin(true);
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
        setIsUserLogin(true);
        ShowSuccessSnackBar("Login successful");

        handleCloseLogin();
        window.location.reload();
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
      (setUser(data.data.user), setIsUserLogin(true));
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
      window.location.reload();
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
        openLogin,
    handleOpenLogin,
    handleCloseLogin,
    checkIsUserLogin
  };
}

interface ProvideAuthI {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthI) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
