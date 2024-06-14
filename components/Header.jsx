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
            uri: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
