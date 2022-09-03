import { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFormik } from "formik";
import { validate } from "../helpers/validateForm";
import { getProductos } from "../actions/producto";
import { useDispatch } from "react-redux";

export default function AgregarScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    if (route.params?.data) {
      setBarcode(route.params?.data);
    } else {
      setBarcode("");
    }
  }, [route.params?.data]);

  const handleSubmit = () => {
    dispatch(
      getProductos({
        id: barcode,
        producto: formik.values.nombre,
        precio: formik.values.precio,
        categoria: "Fiambre",
      })
    );
    navigation.navigate("Precios");
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: 0,
      ganancia: 0,
    },
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <ScrollView>
      <View style={styles.AgregarScreen}>
        <Text style={styles.inputTitle}>Ingresá los datos del producto</Text>

        {/* Codigo de barras */}
        <View style={styles.inputContainer}>
          <Text>Codigo de barras</Text>
          {route.params?.data ? (
            <View style={[styles.inputCodeBar]}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                {route.params?.data}
              </Text>
            </View>
          ) : (
            <Pressable
              onPress={() => navigation.navigate("Escanear")}
              style={styles.pressable}
            >
              <Text style={{ color: "white" }}>Escanear</Text>
            </Pressable>
          )}
        </View>

        {/* Nombre del producto */}
        <View style={styles.inputContainer}>
          <Text>Nombre del producto</Text>
          <TextInput
            onBlur={formik.handleBlur("nombre")}
            style={styles.input}
            onChangeText={formik.handleChange("nombre")}
            value={formik.values.nombre}
          />
          {formik.errors.nombre && formik.touched.nombre ? (
            <Text style={styles.errorText}>{formik.errors.nombre}</Text>
          ) : null}
        </View>

        {/* Precio */}
        <View style={styles.inputContainer}>
          <Text>Precio</Text>
          <TextInput
            onBlur={formik.handleBlur("precio")}
            style={styles.input}
            onChangeText={formik.handleChange("precio")}
            value={formik.values.precio}
            keyboardType="number-pad"
          />
          {formik.errors.precio && formik.touched.precio ? (
            <Text style={styles.errorText}>{formik.errors.precio}</Text>
          ) : null}
        </View>

        {/* Ganancia */}
        <View style={styles.inputContainer}>
          <Text>Porcentaje de ganancia</Text>
          <TextInput
            onBlur={formik.handleBlur("ganancia")}
            style={styles.input}
            onChangeText={formik.handleChange("ganancia")}
            value={formik.values.ganancia}
            keyboardType="number-pad"
          />
          {formik.errors.ganancia && formik.touched.ganancia ? (
            <Text style={styles.errorText}>{formik.errors.ganancia}</Text>
          ) : null}
        </View>

        {/* Categoria */}
        <View style={styles.inputContainer}>
          <Text>Categoría</Text>

          {/* <Picker
            ref           = {pickerRef}
            selectedValue = {categoriasArray[categoria]}
            onValueChange = {(itemValue, itemIndex) => setCategoria(itemIndex)}
            style         = {styles.input}
          >
            {categoriasArray.map((cat, index) => (
              <Picker.Item label = {cat} value = {cat} key = {index} />
            ))}
          </Picker> */}
        </View>

        <Pressable onPress={formik.handleSubmit}>
          <View style={styles.pressable}>
            <Text style={styles.buttonText}>Guardar producto</Text>
            <Ionicons name="save" size={32} color="green" />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    width: 200,
    marginVertical: 20,
    backgroundColor: "#1e2963",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    alignItems: "center",
  },
  errorText: { color: "red" },
  inputContainer: { width: "90%", alignItems: "flex-start", marginBottom: 40 },
  input: {
    height: 60,
    margin: 12,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: 6,
    borderColor: "#1e2963",
    backgroundColor: "white",
    justifyContent: "space-between",
    borderWidth: 2,
    padding: 10,
  },
  inputCodeBar: {
    backgroundColor: "grey",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    height: 60,
    margin: 12,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: 6,
    borderColor: "#1e2963",
    borderWidth: 2,
    padding: 10,
  },
  inputTitle: {
    textAlign: "center",
    color: "#1e2963",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonText: { fontWeight: "bold", color: "white" },
  AgregarScreen: {
    alignItems: "center",
    borderColor: "grey",
    borderRadius: 6,
    backgroundColor: "#fefefe",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
