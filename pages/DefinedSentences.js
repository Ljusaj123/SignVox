import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Wordcard from "../components/Wordcard";
import { SafeAreaView } from "react-native-safe-area-context";
import basicSentences from "../utils/basicSentences";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

export default function DefinedSentences() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(basicSentences);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sentence, setSentence] = useState("");
  const [noDataText, setNoDataText] = useState("");

  useEffect(() => {
    if (!basicSentences) {
      setNoDataText(
        "There are no predefined sentences. Click on plus button to add new."
      );
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = basicSentences.filter((item) =>
        item.sentence.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);

      if (filtered.length !== 0) {
        setNoDataText("");
      } else {
        setNoDataText("There are no sententces for that query.");
      }
    } else {
      setFilteredData(basicSentences);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSave = () => {
    const newSentence = {
      id: String(Math.random()),
      sentence: sentence,
    };
    const newSentences = [...basicSentences, newSentence];
    setFilteredData(newSentences);
    setSentence("");
    setNoDataText("");
    toggleModal();
    Toast.show({
      type: "success",
      text1: "Sentence Added",
      text2: "Your new sentence has been added successfully.",
    });
  };

  const handleDelete = (id) => {
    const newSentences = filteredData.filter((item) => item.id !== id);
    setFilteredData(newSentences);
    Toast.show({
      type: "error",
      text1: "Sentence Deleted",
      text2: "The sentence has been deleted successfully.",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionText}>
        Here is a list of your pre-defined sentences that you can use to
        communicate. Just pick one card and click on it to read it out loud.
      </Text>

      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            toggleModal();
          }}
        >
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => {
            toggleModal();
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>New Sentence</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter sentence..."
                value={sentence}
                onChangeText={setSentence}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                  <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={toggleModal}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TextInput
          style={styles.textInput}
          placeholder="Search here"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <Text style={styles.noDataText}>{noDataText}</Text>

      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Wordcard
            {...item}
            key={item.id}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCD5F9",
    paddingHorizontal: 20,
    paddingVertical: StatusBar.currentHeight,
  },
  sectionText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    width: "100%",
    minWidth: 200,
    maxWidth: 300,
    minHeight: 45,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#ECF2FF",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    padding: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
  },

  noDataText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});
