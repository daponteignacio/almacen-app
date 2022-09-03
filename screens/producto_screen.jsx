import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

import MyButton from "../components/boton";

export default function ProductoScreen({ navigation }) {
  const { productoSelected } = useSelector((state) => state.productos);

  return (
    <ScrollView>
      <View style={styles.AgregarScreen}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemInfoTitle}>Nombre</Text>
          <Text style={styles.itemInfoData}>{productoSelected.producto}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemInfoTitle}>Precio de compra</Text>
          <Text style={styles.itemInfoData}>{productoSelected.precio}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemInfoTitle}>Precio de venta</Text>
          <Text style={styles.itemInfoData}>{productoSelected.precio}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemInfoTitle}>Código</Text>
          <Text style={styles.itemInfoData}>{productoSelected.id}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemInfoTitle}>Categoría</Text>
          <Text style={styles.itemInfoData}>{productoSelected.categoria}</Text>
        </View>
        <MyButton
          title={"Editar datos"}
          colorText={"white"}
          colorButton={"#1e2963"}
          icon={"pencil"}
          onPress={() => navigation.navigate("Agregar")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemInfoData: {
    fontSize: 20,
  },
  itemInfoTitle: { fontWeight: "bold", fontSize: 24, color: "#1e2963" },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  AgregarScreen: {
    alignItems: "center",
    borderColor: "grey",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
