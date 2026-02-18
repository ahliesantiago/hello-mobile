import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function onChangeText(input) {
    setName(input);
    setSubmitted(false); // Reset submitted state when input changes
  }

  function handleSubmit() {
    if (!submitted) {
      // Capitalize first letter and submit
      setName(name.charAt(0).toUpperCase() + name.slice(1));
      setSubmitted(true);
    } else {
      // Reset
      setName("");
      setSubmitted(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Hello{submitted ? `, ${name}` : ""}!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>What's your name?</Text>
        <TextInput
          onChangeText={onChangeText}
          value={name}
          style={styles.input}
        />
      </View>
      <Button
        onPress={handleSubmit}
        title={submitted ? "Reset" : "Submit"}
        color="#CA7669"
        accessibilityLabel="Name submission button"
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
  },
  inputContainer: {
    padding: 20,
    width: "75%",
  },
  inputLabel: {
    fontWeight: "semibold",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    margin: 12,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 5,
    fontSize: 15,
    color: "black",
  },
})