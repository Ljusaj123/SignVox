import {
  Image,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  HeaderFont,
  NormalFont,
  HeaderMedium,
  MediumFont,
} from "../customs/fonts";
import {
  purpleExtra,
  linearGradientWhite,
  smokewhiteExtra,
  smokewhite,
  white,
} from "../customs/colors";
import React from "react";
import { Link } from "@react-navigation/native";

const Authenitcation = ({ isSignUp }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#F4EEFF", "#424874"]}
        start={{ x: 0.5, y: 1 }} // Starting point (bottom-right corner)
        end={{ x: 0.5, y: 0 }} // Ending point (top-left corner)
        style={styles.background}
      />

      <View
        style={[styles.contentContainer, isSignUp ? null : { height: 520 }]}
      >
        <Image
          source={require("../assets/SignVoxLogoSmall.png")}
          style={styles.logo}
        />
        <HeaderFont style={{ textDecorationLine: "none" }}>
          {isSignUp ? "Sign up" : "Sign in"}
        </HeaderFont>
        <NormalFont
          style={{
            color: smokewhiteExtra,
            width: isSignUp ? 250 : 300,
            textAlign: "center",
          }}
        >
          {isSignUp
            ? "Create an account and start revolutionary way of communication"
            : "Sign in with account and get back on the revolutionary way of communication"}
        </NormalFont>
        <View style={styles.form}>
          {isSignUp ? (
            <>
              <MediumFont>Username:</MediumFont>
              <TextInput
                style={styles.input}
                placeholder="Enter your username..."
              />
            </>
          ) : null}
          <MediumFont>Email:</MediumFont>
          <TextInput style={styles.input} placeholder="Enter your email..." />
          <MediumFont>Password:</MediumFont>
          <TextInput
            style={styles.input}
            placeholder="Enter your password..."
          />
        </View>
        {isSignUp ? (
          <Pressable
            style={{ width: "90%", marginTop: 10 }}
            onPress={() => {
              console.log("Sign up"); // add functionality
            }}
          >
            <HeaderMedium style={styles.button}>Sign up</HeaderMedium>
          </Pressable>
        ) : (
          <Pressable
            style={{ width: "90%", marginTop: 10 }}
            onPress={() => {
              console.log("Sign in"); // add functionality
            }}
          >
            <HeaderMedium style={styles.button}>Sign in</HeaderMedium>
          </Pressable>
        )}
        {isSignUp ? (
          <View style={{ flexDirection: "row" }}>
            <NormalFont>Have an account? </NormalFont>
            <Link to={{ screen: "" }}>
              {/* This will be linked to sign in page  */}
              <NormalFont style={{ textDecorationLine: "underline" }}>
                Sign in!
              </NormalFont>
            </Link>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <NormalFont>Don't have an account? </NormalFont>
            <Link to={{ screen: "" }}>
              {/* This will be linked to sign up page  */}
              <NormalFont style={{ textDecorationLine: "underline" }}>
                Sign up!
              </NormalFont>
            </Link>
          </View>
        )}
      </View>
    </View>
  );
};

export default Authenitcation;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    gap: 10,
    height: 600,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    objectFit: "contain",
    width: 200,
    height: 70,
    alignSelf: "top",
  },
  form: {
    justifyContent: "center",
    width: "90%", //I think this looks better, feel free to change to 100%
    alignItems: "flex-start",
    gap: 5,
  },

  input: {
    backgroundColor: smokewhite,
    height: 45,
    width: "100%",
    borderRadius: 8,
    paddingLeft: 15,
  },
  button: {
    textDecorationLine: "none",
    height: 60,
    lineHeight: 60, // make this better if I have
    textAlign: "center",
    backgroundColor: purpleExtra,
    color: white,
    borderRadius: 8,
  },
});
