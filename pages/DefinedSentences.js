import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Wordcard from "../components/Wordcard";
import { SafeAreaView } from "react-native-safe-area-context";
import basicSentences from "../utils/basicSentences";
import { StatusBar } from "expo-status-bar";

export default function DefinedSentences() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(basicSentences);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = basicSentences.filter((item) =>
        item.sentence.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(basicSentences);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.sectionText}>
          Here is a list of your pre-defined sentences that you can use to
          communicate. Just pick one card and click on it to read it out loud.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search here"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Wordcard {...item} key={item.id} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9cfe0",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  sectionText: {
    fontSize: 17,
    color: "#000000",
    marginTop: 12,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ffffff",
    flex: 1,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#435ABF",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#8197B7",
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
});
