// Banco de dados SIMULADO.
// Armazena tudo apenas na memória.
// Se fechar o app, os dados somem.
let contatos = [
  {
    id: 1,
    nome: "João",
    telefone: "99233-0501",
    email: "reizinDelus@gmail.com",
    endereco: "Rua das Flores, 123",
    escolaridade: "Graduação",
  },
  {
    id: 2,
    nome: "Camila",
    telefone: "99732-1301",
    email: "rainhaDaBoiada@gmail.com",
    endereco: "Av. Central, 456",
    escolaridade: "Pós-graduado",
  },
  {
    id: 3,
    nome: "Asaffe",
    telefone: "91235-9572",
    email: "MeioGayMeioBixa@gmail.com",
    endereco: "Rua das Árvores, 789",
    escolaridade: "Graduado",
  },
];

// Retorna a lista completa.
// Se essa função não existisse, a tela de contatos não teria como pegar os dados.
export function getContatos() {
  return contatos;
}

// Adiciona um novo contato à lista.
// Gera ID automaticamente baseado no tamanho atual.
// Sem isso, novos contatos não apareceriam no app.
export function adicionarContato(novoContato) {
  novoContato.id = contatos.length + 1;
  contatos.push(novoContato);
}
