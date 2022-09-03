import { StyleSheet, View, Platform, StatusBar, Text } from "react-native";
import { useEffect, useState } from "react";
import { getDate } from "../helpers/getDate";
import MyButton from "../components/boton";

export default function HomeScreen({ navigation }) {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const date = getDate();

    setFecha(date);
  }, []);

  return (
    <View style={styles.AndroidSafeArea}>
      <Text
        style={{
          textAlign: "center",
          color: "#1e2963",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Hoy es {fecha}
      </Text>
      <View
        style={{
          height: "100%",
          alignItems: "center",
        }}
      >
        {/* <MyButton
          title={"Escanear producto"}
          colorText={"white"}
          colorButton={"#1e2963"}
          icon={"scan"}
          onPress={() => navigation.navigate("Escanear")}
        /> */}
        <MyButton
          title={"Lista de productos"}
          colorText={"white"}
          colorButton={"#1e2963"}
          icon={"list"}
          onPress={() => navigation.navigate("Precios")}
        />
        <MyButton
          title={"Agregar producto"}
          colorText={"white"}
          colorButton={"#1e2963"}
          icon={"add"}
          onPress={() => navigation.navigate("Agregar")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
