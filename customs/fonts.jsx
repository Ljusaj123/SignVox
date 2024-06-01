import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { black } from "./colors";

const HeaderFont = ({ children, style }) => {
  // To merge styles just do this {children, style} and inside the Text component just change [(insert your styles)), style]
  return (
    <Text
      style={[
        {
          fontSize: 30,
          fontWeight: "bold",
          color: "#000",
          textDecorationLine: "underline",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
const HeaderMedium = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: 25,
          fontWeight: "600",
          color: black,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
const MediumFont = ({ children, style }) => {
  return (
    <Text style={[{ fontSize: 20, fontWeight: "500" }, style]}>{children}</Text>
  );
};

const NormalFont = ({ children, style }) => {
  return <Text style={[{ fontSize: 15 }, style]}>{children}</Text>;
};

export { HeaderFont, NormalFont, MediumFont, HeaderMedium };
