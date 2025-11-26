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

export function getContatos() {
  return contatos;
}

export function adicionarContato(novoContato) {
  novoContato.id = contatos.length + 1;
  contatos.push(novoContato);
}
