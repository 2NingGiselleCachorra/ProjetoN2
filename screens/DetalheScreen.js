import { View, Text, Button } from "react-native";
import { styles } from "../styles/styles";

export default function DetalheScreen({ route, navigation }) {
  // route.params recebe os dados enviados pela tela anterior.
  // Sem isso, a tela não saberia qual contato deve exibir.
  const params = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalhes do Contato</Text>

        <Text>Nome: {params.nome}</Text>
        <Text>Telefone: {params.telefone}</Text>
        <Text>E-mail: {params.email}</Text>
        <Text>Endereço: {params.endereco}</Text>
        <Text>Escolaridade: {params.escolaridade}</Text>

        <View style={{ marginTop: 15 }}>
           {/* Botão que volta para a tela anterior.
              navigation.goBack só funciona por causa do Stack Navigator. */}
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
}
