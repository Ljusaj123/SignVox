import React, { useContext } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import { LogicCntx } from "../contexes/LogicContext";

function Header() {
  const { setProfileNSettingsDisplay } = useContext(LogicCntx);

  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/SignVoxLogoSmall.png")}
        style={{ height: 50, width: 140, objectFit: "contain" }}
      />
      <Pressable onPress={() => setProfileNSettingsDisplay(true)}>
        <Image
          source={{
            uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png",
          }}
          style={{
            width: 50,
            height: 50,
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
