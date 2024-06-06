import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Home, Video, DefinedSentences } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import LogicContext from "./contexes/LogicContext";
import UserInfo from "./pages/modals/UserInfo";
import ProfileNSettings from "./pages/modals/ProfileNSettings";
import Header from "./components/Header";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LogicContext>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
              headerShown: false, //Fix navigation for sign in and sign up compon
            }}
          />
          <Tab.Screen
            name="Video"
            component={Video}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="videocamera" size={size} color={color} />
              ),
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name="Defined Sentences"
            component={DefinedSentences}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="co-present" size={size} color={color} />
              ),
              header: () => <Header />,
            }}
          />
        </Tab.Navigator>
        <Toast forwardRef={(ref) => Toast.setRef(ref)} />
        <ProfileNSettings />
        <UserInfo />
        {/* because of navbar I moved this to global, but in future move to Home component */}
      </NavigationContainer>
    </LogicContext>
  );
}

AppRegistry.registerComponent(appName, () => Main);

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp"; //group this
// const App = () => {
//   return <SignUp />;
//   return <SignIn />;
// };

// export default App;

// const styles = StyleSheet.create({});
