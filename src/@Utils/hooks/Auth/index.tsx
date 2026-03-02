import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin, saveGoogleUser } from "@Utils/controllers/misc";
import { hooks } from "@Utils/index";
import React, { useContext, createContext } from "react";

interface AuthContextI {
  handleLoginWithGoogle: () => void;
}

const authContext = createContext<AuthContextI>({} as AuthContextI);

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const { setToken ,setUser} = hooks.useToken();
  const {ShowApiErrorSnackBar}=hooks.useSnackBar();
  const {handleCloseLogin}=hooks.useUser()
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
        const userInfo = await googleLogin(res.access_token);        
        const savedUser = await saveGoogleUser(userInfo.data);
        setToken(savedUser.data.jwtToken)        
        setUser(savedUser.data.user)
        handleCloseLogin()
    },
    onError: (err) => {
      ShowApiErrorSnackBar(err)
    },
  });

  return { handleLoginWithGoogle };
}
interface ProvideAuthI {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthI) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>{children}</authContext.Provider>
  );
}
