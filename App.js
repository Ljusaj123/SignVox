import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Home, Camera, DefinedSentences, Contacts } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import LogicContext from "./contexes/LogicContext";
import UserInfo from "./pages/modals/UserInfo";
import ProfileNSettings from "./pages/modals/ProfileNSettings";
import Header from "./components/Header";
import { purpleExtra, smokewhite, smokewhiteExtra } from "./customs/colors";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LogicContext>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: purpleExtra,
            tabBarStyle: {
              height: 60,
              fontSize: 5,
              backgroundColor: smokewhite,
              borderTopColor: smokewhiteExtra,
              borderTopWidth: 1,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom: 4, //I think this looks better and the easiest way of not modifing the whole navbar
              fontWeight: 600,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={26} color={color} />
              ),
              header: () => <Header />,
            }}
          />

          <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              ),
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="videocamera" size={26} color={color} />
              ),
              header: () => <Header />,
            }}
          />
          <Tab.Screen
            name="Sentences"
            component={DefinedSentences}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="co-present" size={26} color={color} />
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
