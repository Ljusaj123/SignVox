import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image,
  Pressable,
  KeyboardAvoidingView,
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

const Home = () => {
  const [search, onChangeSearch] = useState("");

  // You can remove this for last time, also if you want to remove case sensitivity itm.toLowerCase.name.includes(search)
  const filteredSearch = friends.filter(
    (itm) => itm.name.includes(search) || itm.lastTimeCalled.includes(search)
  );
  const [displayInput, setDisplayInput] = useState(false);

  // const { setProfileNSettingsDisplay } = useContext(LogicCntx);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={20}
          color={smokewhiteExtra}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.search}
          onChangeText={onChangeSearch}
          onFocus={() => setDisplayInput(true)}
          onBlur={() => setDisplayInput(false)}
          value={search}
          placeholder="Search for your friends..."
        />
        <Feather name="more-horizontal" size={24} color={purpleExtra} />
      </View>
      {!displayInput ? (
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
      ) : null}
      <View style={styles.friendsContainer}>
        <HeaderFont style={{ marginBottom: -10 }}>Friends</HeaderFont>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredSearch}
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
    flex: 1,
    backgroundColor: white,
    padding: 20,
    paddingBottom: 0,
    gap: 15,
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
    flex: 1,
    gap: 15,
  },
});
