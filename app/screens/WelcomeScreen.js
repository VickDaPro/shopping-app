import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import NativeStatusBarManager from "react-native/Libraries/Components/StatusBar/NativeStatusBarManagerAndroid";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  backgroundImage = require("../assets/background.jpg");
  logoImage = require("../assets/logo-red.png");
  return (
    <ImageBackground style={styles.backgound} source={backgroundImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoImage} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <AppButton title="Login" onPress={() => console.log("Pressed!")} />
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
