import React, { useState } from "react";
import { useSelector } from "react-redux";

import Routes from "./routes";

import OneSignalConfig from "./config/OneSignalConfig";

// context

import AuthContext from "./pages/Auth/AuthContext";

export default function App() {
  const [registred, setRegistred] = useState(false);
  // const signed = useSelector((state) => state.auth.signed);

  // const user = useSelector((state) => state.user.profile);

  // console.log(user);
  // signed={signed}
  return (
    <AuthContext.Provider value={{ registred, setRegistred }}>
      <Routes />
      {/* <OneSignalConfig idUser={user} /> */}
    </AuthContext.Provider>
  );
}
