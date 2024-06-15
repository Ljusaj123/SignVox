import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { purple } from "../customs/colors";

export default function Wordcard({ sentence, onDelete }) {
  const handleCardPress = () => {
    Speech.speak(sentence, {
      language: "en",
    });
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleCardPress} style={styles.cardContent}>
        <AntDesign name="sound" size={24} color="black" />
        <Text style={styles.cardText}>{sentence}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderColor: purple,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    position: "relative",
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
    marginLeft: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
