import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { HeaderMedium, MediumFont, NormalFont } from "../customs/fonts";
import React, { useState } from "react";
import {
  purple,
  purpleExtra,
  smokewhite,
  smokewhiteExtra,
  white,
} from "../customs/colors";

const Profile = () => {
  const [textCount, setTextCount] = useState("");
  const textCountCounter = textCount.split("").length; // expert in naming variables :))

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBasicInfo}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 90, height: 90, borderRadius: 50 }}
          />
          <MediumFont style={{ marginTop: 5 }}>Ivan Horvat</MediumFont>
        </View>
        <View style={styles.profileCredentials}>
          <View style={{ gap: 5 }}>
            <MediumFont
              style={{ textDecorationLine: "underline", fontSize: 18 }}
            >
              New username
            </MediumFont>
            <TextInput
              placeholder="Enter your new username..."
              style={styles.inputField}
            />
          </View>
          <View style={{ gap: 5 }}>
            <MediumFont
              style={{ textDecorationLine: "underline", fontSize: 18 }}
            >
              New password
            </MediumFont>
            <TextInput
              placeholder="Enter your new password..."
              style={styles.inputField}
            />
          </View>
        </View>
      </View>

      <View style={styles.bioSection}>
        <MediumFont style={{ textDecorationLine: "underline" }}>
          Add bio
        </MediumFont>
        <View style={styles.bioTextContainer}>
          <TextInput
            multiline={true}
            style={styles.textarea}
            placeholder="Enter your bio..."
            textAlignVertical="top"
            onChangeText={setTextCount}
            value={textCount}
          />
          <NormalFont style={styles.countText}>
            {textCountCounter}/100
          </NormalFont>
        </View>
      </View>
      <Pressable
        onPress={() => {
          if (textCountCounter <= 100) {
            console.log(true);
          } else {
            console.log(false);
            //Add toast and more conditions should be checked
          }
        }}
        style={styles.saveChangesButton}
      >
        <HeaderMedium style={{ color: white }}>Save changes</HeaderMedium>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "35%",
    borderBottomWidth: 2,
    borderBottomColor: purple,
  },
  profileBasicInfo: {
    alignItems: "center",
    borderRightColor: purple,
    borderRightWidth: 2,
    paddingRight: 15,
  },
  profileCredentials: {
    paddingLeft: 15,
    gap: 10,
  },
  inputField: {
    backgroundColor: smokewhite,
    height: 30,
    width: 150,
    fontSize: 10,
    borderRadius: 8,
    paddingLeft: 8,
  },
  bioSection: {
    gap: 10,
    positon: "relative",
  },
  textarea: {
    height: 150, //fix this in future not good practice
    backgroundColor: smokewhite,
    borderRadius: 8,
    paddingTop: 5,
    paddingLeft: 10,
  },
  countText: {
    position: "absolute",
    right: 5,
    bottom: 5,
    color: smokewhiteExtra,
  },
  saveChangesButton: {
    backgroundColor: purpleExtra,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 8,
    marginTop: 5,
  },
});
