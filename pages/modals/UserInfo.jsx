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
import { black, purple, purpleExtra } from "../../customs/colors";

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
            <Pressable onPress={() => console.log("Video")}>
              <Feather name="video" size={26} color={purpleExtra} />
            </Pressable>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.pfpContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <MediumFont style={{ marginTop: 5 }}>+09112345</MediumFont>
              {/* Telephone number or name */}
            </View>
            <View style={styles.bioContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <NormalFont style={{ fontWeight: "500" }}>
                  Bio: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur omnis commodi adipisci quis neque eaque cupiditate,
                  eveniet obcaecati impedit, veniam ut sed tenetur dolore fuga,
                  ex cum sapiente possimus saepe!
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
    aspectRatio: 4 / 3,
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
    padding: 20,
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
});
