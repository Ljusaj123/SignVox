import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { HeaderFont } from "../customs/fonts";
import { friends, recentCalls } from "../utils/homePageUtils";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import {
  Friends,
  FriendsProfile,
  RecentCallProfile,
} from "../customs/stackComponents";
import {
  purpleExtra,
  smokewhite,
  smokewhiteExtra,
  purple,
  white,
} from "../customs/colors";

const Home = () => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
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
      <HeaderFont>Recent calls</HeaderFont>

      <FlatList
        contentContainerStyle={styles.rCContainerItemStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={recentCalls}
        renderItem={({ item }) => (
          <RecentCallProfile text={item.name} image={item.img} />
        )}
        // keyExtractor={(item) => item.id}
      />
      <HeaderFont>Friends</HeaderFont>
      <FlatList // Will fix in future because it doesn't scroll through all items and  right position of it
        style={styles.friendsContainer}
        data={friends}
        renderItem={({ item }) => (
          <FriendsProfile
            name={item.name}
            image={item.img}
            date={item.lastTimeCalled}
          />
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: smokewhite,
    padding: 20,
    paddingBottom: 0,
    gap: 10,
  },
  searchIcon: { position: "absolute", zIndex: 1, top: 15, left: 10 },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    gap: 5,
  },
  search: {
    backgroundColor: white,
    flexGrow: 1,
    flex: 1,
    borderRadius: 50,
    paddingLeft: 40,
    height: 50,
  },

  rCContainerItemStyle: {
    gap: 10,
  },
  friendsContainer: {
    flexGrow: 1,
  },
});
