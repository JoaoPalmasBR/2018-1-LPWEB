import {Professor} from "./professor";

export class Disciplina {
    codigo: number;
    nome: string;
    descricao: string;
    data: Date;
    estaativo: boolean;
    tipo: string;
    periodo: number;

    constructor(
        codigo: number,
        nome: string,
        data: Date,
        estaativo: boolean,
        tipo: string,
        periodo: number,
        descricao?: string) {

        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.estaativo = estaativo;
        this.tipo = tipo;
        this.periodo = periodo;
    }
}
