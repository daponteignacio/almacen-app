import { Button, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyButton({
  title,
  colorText = "black",
  colorButton,
  onPress,
  icon,
  width = 300,
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: width,
          marginVertical: 20,
          backgroundColor: colorButton,
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 6,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: colorText, fontSize: 20 }}>
          {title}
        </Text>
        <Ionicons name={icon} size={32} color="green" />
      </View>
    </Pressable>
  );
}
