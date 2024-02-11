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
    localStorage.setItem('isLogin',true);
    localStorage.setItem('token',token);
    localStorage.setItem('user',username);
  }
  
  function handleLogout() {
    setUserInfo({ isLogin: false, username: "", token: "" });
    localStorage.setItem('isLogin',false);
    localStorage.setItem('token','');
    localStorage.setItem('user','');
    navigate('/login');
  }

  function isLogin_To_Redirect(page, condicion){
    const _isLogin = localStorage.getItem('isLogin');
    console.log(_isLogin);
    console.log(typeof(_isLogin));
    if(_isLogin === condicion){
      navigate(`/${page}`);
    }
  }

  return (
    <LoginContext.Provider value={{ userInfo, handleLogin, handleLogout, isLogin_To_Redirect }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextLogin;
