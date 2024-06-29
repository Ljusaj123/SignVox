import React, { useContext, useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";
import { HeaderFont } from "../customs/fonts";
import { friends, recentCalls } from "../utils/homePageUtils";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import {
  FriendsProfile,
  RecentCallProfile,
} from "../components/StackComponents";
import {
  blueExtra,
  smokewhite,
  smokewhiteExtra,
  white,
} from "../customs/colors";
import { SafeAreaView } from "react-native-safe-area-context"; //this works accross all devices, same import from react native works only for IOS
import { LogicCntx } from "../contexes/LogicContext";

const Contacts = () => {
  const { setProfileNSettingsDisplay } = useContext(LogicCntx);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(friends);
  const [noDataText, setNoDataText] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = friends.filter((friend) =>
        friend.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredData(filtered);

      if (filtered.length !== 0) {
        setNoDataText("");
      } else {
        setNoDataText("There are no fiends for that query.");
      }
    } else {
      setFilteredData(friends);
    }
  };
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
          placeholder="Search friends..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <Feather name="more-horizontal" size={24} color={blueExtra} />
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

        {noDataText ? (
          <Text style={styles.noDataText}>{noDataText}</Text>
        ) : null}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
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
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 20,
    paddingBottom: 0,
    gap: 15,
  },

  searchIcon: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    left: 10,
  },
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

  noDataText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});
