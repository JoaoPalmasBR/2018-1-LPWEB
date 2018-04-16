import { Component } from '@angular/core';
//import {Disciplina} from "./disciplina";
//import {Professor} from "./professor";

import {Aluno} from "./aluno"; //g1
import {Tipo} from "./tipo"; //g1
import {Ocorrencia} from "./ocorrencia"; //g1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Disciplinas';
  projeto = 'Angular Ocorrencias';
  alunos = [
    new Aluno(0,"Ana"),
    new Aluno(1,"Bruno"),
    new Aluno(2,"Carla"),
    new Aluno(3,"Daniele")
  ];
  tipos = [
    new Tipo(0,"Indisciplina em Sala de Aula"),
    new Tipo(1,"Comportamento Inadequado com Colegas"),
    new Tipo(2,"Baixo Índice de Rendimento"),
    new Tipo(3,"Indicação de Atenção por Assunto Familiar, Psicológico ou Social")
  ];
  //ocorrencias = [];
  ///*
  ocorrencias = [
    new Ocorrencia(0,"Ana", "2018-04-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-04-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-04-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-03-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-03-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-03-16",true,"Joao",0,"Sem Observacao"),
    new Ocorrencia(0,"Ana", "2018-03-16",true,"Joao",0,"Sem Observacao")
  ];
  //*/
  //Ocorrencia
  alunomatricula = null;
  alunonome = null;
  data = null;
  responsavelcompareceu = false;
  responsavelnome = null;
  tipo = null;
  observacao = null;
  //Estatisticas
  tipo0 = 0;
  tipo1 = 0;
  tipo2 = 0;
  tipo3 = 0;
  tipoTodos = 0;
  totalmarco = 0;
  totalabril = 0;
  percentual0 = 0;
  percentual1 = 0;
  percentual2 = 0;
  percentual3 = 0;
  percentualrelacao = 0;
  //projeto
  exibirFormulario = false;
  cadastrou = false;
  atualizou = false;// INICIO CHECK parte do processo pra descobrir se existe armazenamento no LOCALSTORAGE
  inicio(){
    if(localStorage.getItem("tipos")){
      //existe
      this.tipos = JSON.parse(localStorage.getItem("tipos"));
    }
    if(localStorage.getItem("ocorrencias")){
      //existe
      this.ocorrencias = JSON.parse(localStorage.getItem("ocorrencias"));
    }
    if(localStorage.getItem("alunos")){
      //existe
      this.alunos = JSON.parse(localStorage.getItem("alunos"));
    }
    else{
      //nao existe
    }
    this.atualizou = true;
  }// FINAL CHECK parte do processo pra descobrir se existe armazenamento no LOCALSTORAGE

  //Metodos
  exibirFormularioEmBranco(){
    this.limpar();
    this.exibirFormulario = true;
    this.cadastrou = false;
  }
  atualizar(){
    this.tipo0 = 0;
    this.tipo1 = 0;
    this.tipo2 = 0;
    this.tipo3 = 0;
    this.percentual0 = 0;
    this.percentual1 = 0;
    this.percentual2 = 0;
    this.percentual3 = 0;
    this.percentualrelacao = 0;
    this.tipoTodos = 0;
    this.totalmarco = 0;
    this.totalabril = 0;
    for(let x of this.ocorrencias){
      if(x.tipo==0){
        this.tipo0 ++;
      }
      if(x.tipo==1){
        this.tipo1 ++;
      }
      if(x.tipo==2){
        this.tipo2 ++;
      }
      if(x.tipo==3){
        this.tipo3 ++;
      }
      this.tipoTodos ++;
      if(x.data.indexOf("-04-") != -1){
        this.totalabril ++;
      }
      if(x.data.indexOf("-03-") != -1){
        this.totalmarco ++;
      }
    }
    this.percentual0 = Math.round((this.tipo0/this.tipoTodos)*100);
    this.percentual1 = Math.round((this.tipo1/this.tipoTodos)*100);
    this.percentual2 = Math.round((this.tipo2/this.tipoTodos)*100);
    this.percentual3 = Math.round((this.tipo3/this.tipoTodos)*100);
    this.percentualrelacao = Math.round(((this.totalabril-this.totalmarco)/this.totalmarco)*100);
  }
  salvar(){
    const ocor = new Ocorrencia(this.alunomatricula,this.alunonome,this.data,this.responsavelcompareceu,this.responsavelnome,this.tipo,this.observacao);
    this.ocorrencias.push(ocor);
    this.limpar();
    this.atualizar();
    this.cadastrou = true;
    localStorage.setItem("tipos", JSON.stringify(this.tipos));
    localStorage.setItem("ocorrencias", JSON.stringify(this.ocorrencias));
    localStorage.setItem("alunos", JSON.stringify(this.alunos));
  }
  limpar(){
    this.alunomatricula = null;
    this.alunonome = null;
    this.data = null;
    this.responsavelcompareceu = false;
    this.responsavelnome = null;
    this.tipo = null;
    this.observacao = null;
    this.exibirFormulario = false;
    this.cadastrou = false;
  }
}
