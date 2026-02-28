import { useState } from "react";
import CustomButton from "@/components/ui/button";
import InputField from "@/components/ui/input-field";
import {
  StyleSheet,
  Text,
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
    <View className="w-full h-full items-center justify-center gap-5">
      <Text className="text-5xl font-bold">Hello{submitted ? `, ${name}` : ""}!</Text>
      <View className="flex gap-2 max-w-3/5">
        <Text className="text-2xl font-semibold text-center">What's your name?</Text>
        <InputField onChangeText={onChangeText} value={name} />
      </View>
      <CustomButton
        onPress={handleSubmit}
        title={submitted ? "Reset" : "Submit"}
        accessibilityLabel="Name submission button"
      />
    </View>
  );
}
