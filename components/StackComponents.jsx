import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { purple, purpleExtra, smokewhiteExtra } from "../customs/colors";
import { MediumFont, HeaderMedium, NormalFont } from "../customs/fonts";
/////////
import { Feather } from "@expo/vector-icons";
import { LogicCntx } from "../contexes/LogicContext";

const RecentCallProfile = ({ text, image }) => {
  return (
    <View style={styles.rCProfileItemContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.rCImg}
      />
      <MediumFont>{text}</MediumFont>
    </View>
  );
};

const FriendsProfile = ({ image, name, date }) => {
  //Chnage variable names I have zero imagination for naming them

  const { setUserInfoDisplay } = useContext(LogicCntx);
  return (
    <View style={styles.friendsContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 60, height: 60, borderRadius: 80 }}
      />
      <View>
        <HeaderMedium>{name}</HeaderMedium>
        <NormalFont style={{ color: smokewhiteExtra }}>
          Last time called: {date}
        </NormalFont>
      </View>

      <View style={{ marginLeft: "auto", flexDirection: "row", gap: 20 }}>
        <Feather name="video" size={26} color={purpleExtra} />
        <Pressable onPress={() => setUserInfoDisplay(true)}>
          <Feather name="info" size={26} color={purpleExtra} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rCProfileItemContainer: {
    display: "flex",
    alignItems: "center",
  },
  rCImg: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  friendsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: purple,
    height: 80,
    borderBottomWidth: 2,
  },

  ///////////////////////////////
});
export { RecentCallProfile, FriendsProfile };
