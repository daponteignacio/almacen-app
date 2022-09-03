import { View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { setProductoSelected } from "../../actions/producto";

export default function PreciosItem({ item, backgroundColor, navigation }) {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setProductoSelected(item));
    navigation.navigate("Detalle");
  };
  return (
    <Pressable onPress={handlePress}>
      <View
        style={{
          maxHeight: 200,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: backgroundColor,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            flex: 1,
          }}
        >
          {item.producto}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "green",
            fontWeight: "bold",
            flex: 1,
          }}
        >
          ${item.precio}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            flex: 1,
          }}
        >
          {item.categoria}
        </Text>
      </View>
    </Pressable>
  );
}
