import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { white } from "../customs/colors";
import { Title } from "../customs/fonts";

export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/79/51/97/360_F_579519791_H0ym4ex4wuiUU2eTXRejPzs6tNPVjzO4.jpg",
          }}
          imageStyle={{ opacity: 0.07 }}
          style={styles.background}
        >
          <Title>Communication for everybody</Title>
          <View style={styles.intro}>
            <Text style={styles.text}>
              This application facilitates communication between deaf or mute
              individuals and those who do not understand sign language.
            </Text>
            <Text style={styles.text}>
              By utilizing a camera, the app translates sign language gestures
              into spoken words, enabling more seamless everyday interactions.
            </Text>
            <Text style={styles.text}>
              Additionally, users can predefine commonly used words or phrases,
              which can be spoken aloud with a single click, further enhancing
              communication efficiency.
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingVertical: StatusBar.currentHeight,
  },

  intro: {
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 35,
    marginBottom: 15,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
