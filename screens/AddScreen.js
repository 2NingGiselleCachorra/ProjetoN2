import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";
import { adicionarContato } from "../data/banco"; // Importa a função que salva o contato no “banco de dados”.

export default function AddScreen() {
  // Cada useState guarda o valor digitado no formulário.
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [escolaridade, setEscolaridade] = useState("");

  // Função inicia ao clicar em "Salvar contato".
  function SalvarContato() {
    // Monta um objeto com os dados digitados pelo usuário.
    let novo = {
      nome: nome,
      telefone: telefone,
      email: email,
      endereco: endereco,
      escolaridade: escolaridade,
    };

    // Envia o objeto para o banco simulado.
    // Se essa função não existir, o contato nunca seria salvo.
    adicionarContato(novo);

    alert("Contato salvo!");

    // Limpa o formulário.
    // Sem isso, os dados antigos continuariam aparecendo.
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

        {/* Cada campo abaixo controla seu conteúdo através do useState correspondente.
        Sem o value/onChangeText, o campo não funcionaria corretamente. */}

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

        {/* Botão que chama a função de salvar. */}
        <Button title="Salvar contato" onPress={SalvarContato} />
      </View>
    </View>
  );
}
