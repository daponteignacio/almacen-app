import { View, Text } from "react-native";

export default function PreciosHeader() {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: 70,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
          flex: 1,
          color: "cornflowerblue",
        }}
      >
        Producto
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
          flex: 1,

          color: "cornflowerblue",
        }}
      >
        Precio
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          flex: 1,

          fontSize: 20,
          color: "cornflowerblue",
        }}
      >
        Categoría
      </Text>
    </View>
  );
}
