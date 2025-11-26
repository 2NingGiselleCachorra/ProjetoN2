import { View, Text, Button, ScrollView } from "react-native";
import { getContatos } from "../data/banco";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { styles } from "../styles/styles";

export default function ContatoScreen({ navigation }) {
  const [lista, setLista] = useState([]);
  const telaAtiva = useIsFocused();

  useEffect(() => {
    setLista(getContatos());
  }, [telaAtiva]);

  return (
    <ScrollView>
    
    <View style={styles.container}>
      {lista.map((contato) => (
        <View key={contato.id} style={styles.card}>
          <Text style={styles.title}>{contato.nome}</Text>
          <Text>Telefone: {contato.telefone}</Text>
          <Text>E-mail: {contato.email}</Text>
          <Text>Endereço: {contato.endereco}</Text>
          <Text>Escolaridade: {contato.escolaridade}</Text>

          <Button
            title="Ver detalhes"
            onPress={() =>
              navigation.navigate("Detalhes", {
                nome: contato.nome,
                telefone: contato.telefone,
                email: contato.email,
                endereco: contato.endereco,
                escolaridade: contato.escolaridade,
              })
            }
          />
        </View>
      ))}
    </View>

    </ScrollView>
    );
}
