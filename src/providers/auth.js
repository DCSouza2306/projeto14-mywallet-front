import React, { useState } from "react";

const object = JSON?.parse(localStorage.getItem("authValidation"));

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
  const [userData, setUserData] = useState({
    token: object?.token,
    name: object?.name,
  });

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
