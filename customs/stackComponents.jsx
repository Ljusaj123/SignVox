import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { purple, purpleExtra, smokewhite, smokewhiteExtra } from "./colors";
import { MediumFont, HeaderMedium, NormalFont } from "./fonts";
/////////
import { Feather } from "@expo/vector-icons";

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
        <NormalFont>Last time called: {date} </NormalFont>
      </View>

      <View style={{ marginLeft: "auto", flexDirection: "row", gap: 20 }}>
        <Feather name="video" size={26} color={purpleExtra} />
        <Feather name="info" size={26} color={purpleExtra} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rCProfileItemContainer: {
    display: "flex",
    alignItems: "center",
    height: 145,
  },
  rCImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
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
