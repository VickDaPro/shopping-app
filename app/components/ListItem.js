import { StyleSheet, View, Image } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={{ justifyContent: "center" }}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
