import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/home_screen";
import PreciosScreen from "../screens/precios_screen";
import AgregarScreen from "../screens/agregar_screen";
import EscanerScreen from "../screens/escaner_screen";
import ProductoScreen from "../screens/producto_screen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductos } from "../actions/producto";

const Stack = createNativeStackNavigator();
export default function Rutas() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalle" component={ProductoScreen} />
        <Stack.Screen name="Precios" component={PreciosScreen} />
        <Stack.Screen name="Agregar" component={AgregarScreen} />
        <Stack.Screen name="Escanear" component={EscanerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
