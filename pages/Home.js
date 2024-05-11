import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text>Home</Text>
          <Button
            title="Go to video"
            onPress={() => navigation.navigate("Video")}
          ></Button>
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
});
