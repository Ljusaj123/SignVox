import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
export const LogicCntx = createContext();

const LogicContext = ({ children }) => {
  const [userInfoDisplay, setUserInfoDisplay] = useState(false);
  const [profileNSettingsDisplay, setProfileNSettingsDisplay] = useState(false);
  console.log(userInfoDisplay);

  let theme = useColorScheme();
  console.log(theme);
  return (
    <LogicCntx.Provider
      value={{
        userInfoDisplay,
        setUserInfoDisplay,
        profileNSettingsDisplay,
        setProfileNSettingsDisplay,
      }}
    >
      {children}
    </LogicCntx.Provider>
  );
};

export default LogicContext;
