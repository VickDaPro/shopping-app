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
      desc: "Mai hu Ram",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Shyam",
      desc: "Aur mai Shyam",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 3,
      title: "Gopal",
      desc: "Mera naam hai Gopal",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 4,
      title: "Laxman",
      desc: "Mai Laxman hu, Ram ka bhai",
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
