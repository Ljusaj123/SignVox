import React, { useContext } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { LogicCntx } from "../contexes/LogicContext";
import { SafeAreaView } from "react-native-safe-area-context";

function Header() {
  const { setProfileNSettingsDisplay } = useContext(LogicCntx);

  return (
    <SafeAreaView style={styles.header}>
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
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 0,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
