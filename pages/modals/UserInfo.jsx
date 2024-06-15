import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { HeaderMedium, MediumFont, NormalFont } from "../../customs/fonts";
import { Feather } from "@expo/vector-icons";
import { LogicCntx } from "../../contexes/LogicContext";
import { black, purple, purpleExtra, white } from "../../customs/colors";

//Custom modal
const ProfileNSettings = ({ name }) => {
  const { userInfoDisplay, setUserInfoDisplay } = useContext(LogicCntx);
  return userInfoDisplay ? (
    <>
      <View style={styles.background}>
        <Pressable
          onPress={() => setUserInfoDisplay(false)}
          style={styles.removeModal}
        ></Pressable>
        <View style={styles.container}>
          <View style={styles.header}>
            <HeaderMedium>Ivan Horvat</HeaderMedium>
            <Pressable
              onPress={() => console.log("Video")}
              style={styles.videoButton}
            >
              <Feather name="video" size={20} color={white} />
            </Pressable>
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.pfpContainer}>
              <Image
                source={{
                  uri: "https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png",
                }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <MediumFont style={{ marginTop: 5 }}>+3859112345</MediumFont>
              {/* Telephone number or name */}
            </View>
            <View style={styles.bioContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <NormalFont style={{ fontWeight: "500" }}>
                  Bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </NormalFont>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </>
  ) : null;
};

export default ProfileNSettings;

const styles = StyleSheet.create({
  removeModal: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
  },
  background: {
    backgroundColor: "rgba(69, 71, 75, 0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  container: {
    width: "100%",
    aspectRatio: 4 / 3, //change this to fixed if this doesn't work well on all mobile devices
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 10,
    zIndex: 2, //because what I want to make is when everything outside of container is clicked, that closes the modal
  },
  header: {
    flexDirection: "row",
    borderBottomColor: purple, // purple color
    borderBottomWidth: 2,
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 20,
  },
  pfpContainer: {
    borderRightColor: purple,
    borderRightWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingRight: 10,
  },
  bioContainer: {
    flex: 1,
    width: "100%",
  },

  videoButton: {
    borderRadius: 50,
    backgroundColor: purpleExtra,
    padding: 7,
  },
});
