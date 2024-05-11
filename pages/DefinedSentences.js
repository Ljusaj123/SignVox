import { Text, StyleSheet, View, ScrollView, Button } from "react-native";
import Wordcard from "../components/Wordcard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import basicSentences from "../utils/basicSentences";

export default function DefinedSentences() {
  const [definedSentences, setDefinedSentences] = useState(basicSentences);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Button style={styles.button} title="Create sentence" />
          <Text style={styles.sectionHeaderText}>
            Here is a list of your pre-defined sentences that you can use to
            communicate. Just pick one card and click on it to read it out loud.
          </Text>
        </View>
        <View>
          {definedSentences.map((sentence) => {
            return <Wordcard {...sentence} key={sentence.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9cfe0",
    paddingHorizontal: 20,
  },

  sectionHeaderText: {
    fontSize: 25,
    marginBottom: 12,
    fontWeight: "bold",
    color: "#000000",
  },
});
