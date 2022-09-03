import { ScrollView } from "react-native";
import PreciosHeader from "../components/precios-lista/lista-header";
import PreciosItem from "../components/precios-lista/lista-item";
import { useSelector } from "react-redux";

export default function PreciosScreen({ navigation }) {
  const { allProductos } = useSelector((state) => state.productos);

  return (
    <ScrollView>
      <PreciosHeader />
      {allProductos.map((item) => (
        <PreciosItem
          backgroundColor={item.id % 2 === 0 && "#e3e3e3"}
          key={item.id}
          item={item}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
