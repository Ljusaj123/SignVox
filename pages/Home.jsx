import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { HeaderFont } from "../customs/fonts";
import { friends, recentCalls } from "../utils/homePageUtils";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import {
  FriendsProfile,
  RecentCallProfile,
} from "../components/StackComponents";
import {
  purpleExtra,
  smokewhite,
  smokewhiteExtra,
  purple,
  white,
  black,
} from "../customs/colors";
import { SafeAreaView } from "react-native-safe-area-context"; //this works accross all devices, same import from react native works only for IOS
import { LogicCntx } from "../contexes/LogicContext";
import { useColorScheme } from "react-native";

const Home = () => {
  let theme = useColorScheme();
  console.log(theme);
  const [text, onChangeText] = useState("");
  const { setProfileNSettingsDisplay } = useContext(LogicCntx);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/SignVoxLogoSmall.png")}
          style={{ height: 50, width: 140, objectFit: "contain" }}
        />
        <Pressable onPress={() => setProfileNSettingsDisplay(true)}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          />
        </Pressable>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={20}
          color={smokewhiteExtra}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for your friends..."
        />
        <Feather name="more-horizontal" size={24} color={purpleExtra} />
      </View>
      <View style={{ gap: 10 }}>
        <HeaderFont>Recent calls</HeaderFont>
        <FlatList
          contentContainerStyle={styles.rCContainerItemStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={recentCalls}
          renderItem={({ item }) => (
            <RecentCallProfile text={item.name} image={item.img} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.friendsContainer}>
        <HeaderFont style={{ marginBottom: -10 }}>Friends</HeaderFont>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={friends}
          renderItem={({ item }) => (
            <FriendsProfile
              name={item.name}
              image={item.img}
              date={item.lastTimeCalled}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    paddingBottom: 0,
    gap: 15,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: { position: "absolute", zIndex: 1, top: 15, left: 10 },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",

    gap: 5,
  },
  search: {
    backgroundColor: smokewhite,
    flexGrow: 1,
    borderRadius: 50,
    paddingLeft: 40,
    height: 50,
  },

  rCContainerItemStyle: {
    gap: 10,
  },

  friendsContainer: {
    gap: 15,

    height: 400, //please fix this if you know how to make container to expand himself fully, but to not overflow navbar because, all users cannot be scrolled through
  },
});
