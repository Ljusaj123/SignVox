import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Home, Video, DefinedSentences } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="videocamera" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Defined Sentences"
          component={DefinedSentences}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="co-present" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
