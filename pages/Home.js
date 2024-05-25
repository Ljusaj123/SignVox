import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.intro}>
          <Text style={styles.title}>SignVox</Text>
          <Text style={styles.text}>
            This application facilitates communication between deaf or mute
            individuals and those who do not understand sign language. By
            utilizing a camera, the app translates sign language gestures into
            spoken words, enabling more seamless everyday interactions.
            Additionally, users can predefine commonly used words or phrases,
            which can be spoken aloud with a single click, further enhancing
            communication efficiency.
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.cardContent}
              onPress={() => navigation.navigate("Video")}
            >
              <Text style={styles.cardText}>Video Camera</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.cardContent}
              onPress={() => navigation.navigate("Defined Sentences")}
            >
              <Text style={styles.cardText}>Predefined sentences</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  intro: {
    borderBottomWidth: 1,
    borderBottomColor: "#8197B7",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  text: {
    fontSize: 17,
    textAlign: "center",
    lineHeight: 35,
  },

  cardsContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  card: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    position: "relative",
    minHeight: 100,
    minWidth: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
