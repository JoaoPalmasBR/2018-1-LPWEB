export class Repositorio {
  nome: string;
  endereco: string;
  github: string;
  datadecriacao: string;
  objetivo: string;

  constructor(nome: string, endereco: string, github: string, datadecriacao: string, objetivo: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.github = github;
    this.datadecriacao = datadecriacao;
    this.objetivo = objetivo;
  }
}
