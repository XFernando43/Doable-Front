import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const ContextLogin = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ isLogin: false, username: "NONE", token: "TOKEN_NONE" });
  const navigate = useNavigate();

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
    navigate('/login');
  }

  return (
    <LoginContext.Provider value={{ userInfo, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextLogin;
