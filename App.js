import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  Alert,
  SafeAreaView,
} from "react-native";

export default function App() {
  let x = 1;
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("Having Fun?", "Want more?", [
            { text: "Yes", onPress: () => console.log("Yes Pressed") },
            { text: "No", onPress: () => console.log("No Pressed") },
          ])
        }
      />
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
      <Image source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
