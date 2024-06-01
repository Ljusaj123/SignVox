import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { LogicCntx } from "../../contexes/LogicContext";
import { Feather } from "@expo/vector-icons";
import { HeaderMedium, MediumFont, NormalFont } from "../../customs/fonts";
import {
  purpleExtra,
  purple,
  white,
  smokewhite,
  black,
} from "../../customs/colors";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";

//Cutom modal
const UserInfo = () => {
  const { profileNSettingsDisplay, setProfileNSettingsDisplay } =
    useContext(LogicCntx);
  const [showProfile, setShowProfile] = useState(true);

  /////////////////////////////////////////
  return profileNSettingsDisplay ? (
    <>
      <View style={styles.background}>
        <Pressable
          onPress={() => setProfileNSettingsDisplay(false)}
          style={styles.removeModal}
        ></Pressable>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable
              style={[
                styles.profileHeading,
                {
                  backgroundColor: showProfile ? purpleExtra : smokewhite,
                },
              ]}
              onPress={() => setShowProfile(true)}
            >
              <HeaderMedium
                style={{ color: showProfile ? white : black, fontWeight: 500 }}
              >
                Profile
              </HeaderMedium>
            </Pressable>
            <Pressable
              onPress={() => setShowProfile(false)}
              style={[
                styles.settingsHeading,
                {
                  backgroundColor: showProfile ? smokewhite : purpleExtra,
                  color: white,
                },
              ]}
            >
              <HeaderMedium
                style={{ fontWeight: 500, color: showProfile ? black : white }}
              >
                Settings
              </HeaderMedium>
            </Pressable>
          </View>
          <View style={styles.divider}></View>
          {
            showProfile ? <Profile /> : <Settings />
            //I think it's overkill to use router here
          }
        </View>
      </View>
    </>
  ) : null;
};

export default UserInfo;

const shareHeading = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};
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
    height: 520,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    gap: 10,
    zIndex: 2, //because what I want to make is when everything outside of container is clicked, that closes the modal
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    paddingHorizontal: 10,
  },
  profileHeading: {
    ...shareHeading,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  settingsHeading: {
    ...shareHeading,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: purple,
  },
});
