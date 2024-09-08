import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authContext";

import "./App.css";

export default function App() {
  const [isLoggedIn, seIsLoggedIn] = useState(false);
  const [token, seToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const router = useRoutes(routes);

  const login = useCallback((userInfos, token) => {
    seToken(token);
    seIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }, []);

  const logout = useCallback(() => {
    seToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          seIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        token: token,
        userInfos: userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
