export class Ocorrencia {
  alunomatricula: number;
  alunonome: string;
  data: string;
  responsavelcompareceu: boolean;
  responsavelnome: string;
  tipo: number;
  observacao: string;

  constructor(alunomatricula: number, alunonome: string, data: string, responsavelcompareceu: boolean, responsavelnome: string, tipo: number, observacao: string) {
    this.alunomatricula = alunomatricula;
    this.alunonome = alunonome;
    this.data = data;
    this.responsavelcompareceu = responsavelcompareceu;
    this.responsavelnome = responsavelnome;
    this.tipo = tipo;
    this.observacao = observacao;
  }
}
