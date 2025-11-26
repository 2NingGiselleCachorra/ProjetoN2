import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function ConfigScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tela de Configurações</Text>
        <Text>Aqui você poderá ajustar preferências futuramente.</Text>
      </View>
    </View>
  );
}
