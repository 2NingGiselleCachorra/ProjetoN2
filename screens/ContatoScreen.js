import { View, Text, Button, ScrollView } from "react-native";
import { getContatos } from "../data/banco"; // Importa os contatos armazenados no banco simulado.
import { useIsFocused } from "@react-navigation/native"; // Hook que detecta quando a tela fica visível.
import { useState, useEffect } from "react";

import { styles } from "../styles/styles";

export default function ContatoScreen({ navigation }) {
  // Lista que será exibida na tela.
  const [lista, setLista] = useState([]);

  // Detecta quando o usuário volta para esta tela.
  // Sem isso a lista não atualizaria após salvar um contato.
  const telaAtiva = useIsFocused();

  useEffect(() => {
    // Toda vez que a tela fica ativa, busca a lista atualizada.
    setLista(getContatos());
  }, [telaAtiva]); // Dependência importante: sem ela a lista não recarrega.

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* map() cria um card para cada contato salvo no banco.
      Se remover o map, nada seria exibido. */}
        {lista.map((contato) => (
          <View key={contato.id} style={styles.card}>
            <Text style={styles.title}>{contato.nome}</Text>
            <Text>Telefone: {contato.telefone}</Text>
            <Text>E-mail: {contato.email}</Text>
            <Text>Endereço: {contato.endereco}</Text>
            <Text>Escolaridade: {contato.escolaridade}</Text>

            {/* Botão que envia os dados do contato para a tela de detalhes.
          Sem navigation.navigate, não seria possível abrir a tela seguinte. */}
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
