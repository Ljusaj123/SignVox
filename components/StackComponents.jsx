import React, { useContext } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { purple, smokewhiteExtra } from "../customs/colors";
import { MediumFont, HeaderMedium, NormalFont } from "../customs/fonts";
/////////
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
    <View>
      <Pressable
        style={styles.friendContainer}
        onPress={() => setUserInfoDisplay(true)}
      >
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
      </Pressable>
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
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: purple,
    borderRadius: 10,
    height: 80,
    borderWidth: 1,
    marginVertical: 5,
    padding: 10,
  },

  ///////////////////////////////
});
export { RecentCallProfile, FriendsProfile };
