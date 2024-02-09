import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

const ContextLogin = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ isLogin: false, username: "NONE", token: "TOKEN_NONE" });
  
  function handleLogin(username, token) {
    const userNewInfo = { isLogin: true, username: username, token: token };
    setUserInfo(userNewInfo);
    localStorage.setItem('token',token);
    localStorage.setItem('user',username);
  }
  
  function handleLogout() {
    setUserInfo({ isLogin: false, username: "", token: "" });
    localStorage.setItem('token','');
    localStorage.setItem('user','');
  }

  return (
    <LoginContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextLogin;
