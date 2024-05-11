import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Wordcard({ sentence }) {
  const handleCardPress = () => {
    Speech.speak(sentence, {
      language: "hr", // Specify language code for French
    });
  };

  const handlePauseSpeech = () => {
    Tts.pause();
  };

  const handleStopSpeech = () => {
    Tts.stop();
  };
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <AntDesign name="sound" size={24} color="black" />
        <Text style={styles.cardText}>{sentence}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
});
