import { useState } from "react";
import axios from "axios";

/**
 * Simple Local Storage Token Manager
 */
const TokenStorage = {
  setToken(token: string) {
    localStorage.setItem("token", token);
  },

  getToken() {
    return localStorage.getItem("token");
  },

  clearToken() {
    localStorage.removeItem("token");
  },
  setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user))
  }
};

/**
 * Hook to store and access JWT token
 */
export default function useToken() {
  // Read token from localStorage when app loads
  const [token, setTokenState] = useState<string | null>(TokenStorage.getToken());

  /**
   * Save token in state + localStorage + axios header
   */
  const saveToken = (jwtToken: string) => {
    TokenStorage.setToken(jwtToken);
    setTokenState(jwtToken);
    axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
  };

  /**
   * Remove token everywhere
   */
  const removeToken = () => {
    TokenStorage.clearToken();
    setTokenState(null);
    axios.defaults.headers.common.Authorization = "";
  };

  return {
    token,
    setToken: saveToken,
    removeToken,
    setUser:TokenStorage.setUser
  };
}
