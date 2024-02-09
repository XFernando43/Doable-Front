import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext({ isLogin: false, username: "", token: "" });

const ContextLogin = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ isLogin: false, username: "", token: "" });
  
  function handleLogin(username, token) {
    const userNewInfo = { isLogin: true, username: username, token: token };
    setUserInfo(userNewInfo);
  }
  
  function handleLogout() {
    setUserInfo({ isLogin: false, username: "", token: "" });
  }

  return (
    <LoginContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextLogin;
