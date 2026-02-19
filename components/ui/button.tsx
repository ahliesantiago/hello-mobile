import { Pressable, Text, View } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  title: string;
  accessibilityLabel?: string;
}

export default function CustomButton(props: ButtonProps) {
  return (
    <View className="border py-1 px-3 rounded-md bg-blue-500">
      <Pressable onPress={props.onPress}>
        <Text className="text-white">{ props.title }</Text>
      </Pressable>
    </View>
  )
}
