import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";
import { adicionarContato } from "../data/banco";

export default function AddScreen() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [escolaridade, setEscolaridade] = useState("");

  function SalvarContato() {
    let novo = {
      nome: nome,
      telefone: telefone,
      email: email,
      endereco: endereco,
      escolaridade: escolaridade,
    };

    adicionarContato(novo);

    alert("Contato salvo!");

    setNome("");
    setTelefone("");
    setEmail("");
    setEndereco("");
    setEscolaridade("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Adicionar Contato</Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={telefone}
          keyboardType="numeric"
          onChangeText={setTelefone}
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o e-mail"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
          value={endereco}
          onChangeText={setEndereco}
        />

        <Text style={styles.label}>Escolaridade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nível escolar"
          value={escolaridade}
          onChangeText={setEscolaridade}
        />

        <Button title="Salvar contato" onPress={SalvarContato} />
      </View>
    </View>
  );
}
