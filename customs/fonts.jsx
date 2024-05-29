import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderFont = ({ children }) => {
  // To merge styles just do this {children, style} and inside the Text component just change [(insert your styles)), style]
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        textDecorationLine: "underline",
      }}
    >
      {children}
    </Text>
  );
};
const HeaderMedium = ({ children }) => {
  return (
    <Text
      style={{
        fontSize: 25,
        fontWeight: "600",
        color: "#000",
      }}
    >
      {children}
    </Text>
  );
};
const MediumFont = ({ children }) => {
  return <Text style={{ fontSize: 20, fontWeight: "500" }}>{children}</Text>;
};

const NormalFont = ({ children }) => {
  return <Text style={{ fontSize: 15 }}>{children}</Text>;
};

export { HeaderFont, NormalFont, MediumFont, HeaderMedium };
