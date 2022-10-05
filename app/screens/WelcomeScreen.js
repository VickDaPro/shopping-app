import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import NativeStatusBarManager from "react-native/Libraries/Components/StatusBar/NativeStatusBarManagerAndroid";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  backgroundImage = require("../assets/background.jpg");
  logoImage = require("../assets/logo-red.png");
  return (
    <ImageBackground
      style={styles.backgound}
      source={backgroundImage}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("Pressed!")} />
        <AppButton
          title="Register"
          onPress={() => console.log("Pressed!")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgound: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
