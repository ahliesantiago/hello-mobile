import { Text, TextInput } from "react-native";

interface InputProps {
  onChangeText: (text: string) => void;
  value: string;
}

export default function InputField(props: InputProps) {
  return (
    <TextInput
      onChangeText={props.onChangeText}
      value={props.value}
      className="border m-2 p-2 text-lg max-w-3/5"
    />
  )
}
