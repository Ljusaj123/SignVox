import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Wordcard from "../components/Wordcard";
import { SafeAreaView } from "react-native-safe-area-context";
import basicSentences from "../utils/basicSentences";
import Toast from "react-native-toast-message";
import {
  smokewhite,
  smokewhiteExtra,
  purpleExtra,
  purple,
  white,
} from "../customs/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HeaderMedium, Title } from "../customs/fonts";

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
      type: "success",
      text1: "Sentence Deleted",
      text2: "The sentence has been deleted successfully.",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Your sentences</Title>
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
          animationType="none"
          onRequestClose={() => {
            toggleModal();
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.header}>
                <HeaderMedium>New Sentence</HeaderMedium>
              </View>

              <TextInput
                style={styles.textInput}
                placeholder="Enter sentence..."
                value={sentence}
                onChangeText={setSentence}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={toggleModal}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={20}
            color={smokewhiteExtra}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.search}
            placeholder="Search sentences..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      {noDataText ? <Text style={styles.noDataText}>{noDataText}</Text> : null}

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
    padding: 20,
    paddingBottom: 0,
    backgroundColor: white,
    gap: 15,
  },

  search: {
    backgroundColor: smokewhite,
    flex: 1,
    borderRadius: 50,
    paddingLeft: 40,
    height: 50,
    minWidth: 250,
  },

  searchContainer: {
    flexDirection: "row",
    gap: 5,
    flex: 1,
  },

  searchIcon: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    left: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  button: {
    backgroundColor: purpleExtra,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },

  cancelButton: {
    backgroundColor: "#666",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  buttonText: {
    color: white,
  },

  formContainer: {
    flexDirection: "row",
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
    backgroundColor: "rgba(69, 71, 75, 0.6)",
  },

  modalContainer: {
    width: 300,
    height: 230,
    padding: 20,
    backgroundColor: white,
    borderRadius: 20,
    gap: 20,
    justifyContent: "space-between",
  },

  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: smokewhite,
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    maxHeight: 50,
  },

  noDataText: {
    textAlign: "center",
    fontSize: 20,
  },

  header: {
    borderBottomColor: purple,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
});
