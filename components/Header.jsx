import React, { useContext } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { LogicCntx } from "../contexes/LogicContext";

function Header() {
  const { setProfileNSettingsDisplay } = useContext(LogicCntx);

  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/SignVoxLogoImg.png")}
        style={{ height: 85, width: 170, objectFit: "contain" }}
      />
      <Pressable onPress={() => setProfileNSettingsDisplay(true)}>
        <Image
          source={{
            uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
        />
      </Pressable>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
