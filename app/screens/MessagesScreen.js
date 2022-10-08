import { StyleSheet, FlatList } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const MessagesScreen = () => {
  const data = [
    {
      id: 1,
      title: "Ram",
      desc: "d1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Shyam",
      desc: "d2",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 3,
      title: "Gopal",
      desc: "d3",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 4,
      title: "Laxman",
      desc: "d4",
      image: require("../assets/mosh.jpg"),
    },
  ];

  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
