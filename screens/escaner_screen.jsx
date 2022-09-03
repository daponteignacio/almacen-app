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

export default function AgregarScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData] = useState();
  const [permission, setPermission] = useState(true);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const { status, granted } =
        await BarCodeScanner.requestPermissionsAsync();

      if (status === "granted") {
        setPermission(true);
      } else {
        setPermission(false);
      }
    } catch (error) {
      console.log(error);
      setPermission(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <View style={styles.container}>
        <Text>Esperando permisos</Text>
      </View>
    );

  if (scanData) return <AgregarScreen barcode={scanData} />;

  if (permission)
    return (
      <BarCodeScanner
        style={styles.container}
        onBarCodeScanned={({ type, data }) => {
          try {
            setScanData(data);
            navigation.navigate({
              name: "Agregar",
              params: { data },
              merge: true,
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Text>Escanear el codigo</Text>
      </BarCodeScanner>
    );

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: { width: "90%", alignItems: "flex-start", marginBottom: 20 },
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
  },
  inputTitle: {
    textAlign: "center",
    color: "#1e2963",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
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
