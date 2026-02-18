import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [clicked, setClicked] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Hello{clicked ? ", World" : ""}!</Text>
      <Button
        onPress={() => setClicked(!clicked)}
        title="Click me!"
        color="#CA7669"
        accessibilityLabel="Button for 'Click Me'"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  homeText: {
    fontWeight: "bold",
    fontSize: 40,
  }
})