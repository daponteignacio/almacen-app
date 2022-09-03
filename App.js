import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Rutas from "./router/routes";

export default function App() {
  return (
    <View style={styles.AndroidSafeArea}>
      <Provider store={store}>
        <Rutas />
      </Provider>
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
