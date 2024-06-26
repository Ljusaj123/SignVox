import { StyleSheet, View, Pressable } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import React, { useState } from "react";
import { HeaderMedium } from "../customs/fonts";
import { blue, blueExtra, white } from "../customs/colors";
import { AntDesign } from "@expo/vector-icons";

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const darkThemeFunc = () => setDarkTheme((prev) => !prev);
  ////
  const [accountPrivate, setAccountPrivate] = useState(false);
  const accountPrivateFunc = () => setAccountPrivate((prev) => !prev); //I thought of this feature such as that users can't search you username and add you for your friend
  ///////////////
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <HeaderMedium style={{ fontWeight: 500, fontSize: 22 }}>
          Dark mode
        </HeaderMedium>
        <SwitchToggle
          onPress={darkThemeFunc}
          switchOn={darkTheme}
          circleColorOff={white}
          circleColorOn={white}
          backgroundColorOn={blueExtra}
          backgroundColorOff={blue}
          style={styles.toggleSwitchStyle}
          containerStyle={styles.sliderStyle}
          circleStyle={styles.circleStyle}
        />
      </View>

      <View style={styles.optionContainer}>
        <HeaderMedium style={{ fontWeight: 500, fontSize: 22 }}>
          Private account
        </HeaderMedium>
        <SwitchToggle
          onPress={accountPrivateFunc}
          switchOn={accountPrivate}
          circleColorOff={white}
          circleColorOn={white}
          backgroundColorOn={blueExtra}
          backgroundColorOff={blue}
          style={styles.toggleSwitchStyle}
          containerStyle={styles.sliderStyle}
          circleStyle={styles.circleStyle}
        />
      </View>

      <Pressable onPress={() => console.log("Works")}>
        <View style={styles.optionContainer}>
          <HeaderMedium style={{ fontWeight: 500, fontSize: 22 }}>
            About us
          </HeaderMedium>
          <AntDesign name="arrowright" size={28} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomColor: blue,
    borderBottomWidth: 2,
  },
  sliderStyle: {
    width: 45,
    height: 28,
    borderRadius: 25,
    padding: 5,
  },
  circleStyle: {
    width: 18,
    height: 18,
    borderRadius: 100,
  },
});
