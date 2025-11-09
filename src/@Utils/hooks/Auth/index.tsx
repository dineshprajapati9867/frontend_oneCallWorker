// Hook (use-auth.js)
import React, { useContext, createContext } from 'react';




interface PropsI{

}
const authContext = createContext<PropsI>({} as PropsI );



export const useAuth = () => useContext(authContext);


function useProvideAuth(){

}
interface ProvideAuthI {
    children: React.ReactNode;
  }

export function ProvideAuth({ children }: ProvideAuthI) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
