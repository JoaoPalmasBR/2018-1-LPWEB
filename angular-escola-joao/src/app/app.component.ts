import { Component } from '@angular/core';
import {Repositorio} from "./repositorio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LPWeb';
  projeto = 'Angular';
  repositorios = [
    new Repositorio("01 - Listando Disciplinas","./01%20-%20Listando%20Disciplinas/","https://github.com/JoaoPalmasBR/2018-1-LPWEB/tree/01-listando-disciplinas","14-04-2018","Funcionalidade Apresentar a Lista de Disciplinas."),
    new Repositorio("02 - CRUD Disciplinas","./02%20-%20Crud%20Disciplinas/","https://github.com/JoaoPalmasBR/2018-1-LPWEB/tree/02-crud-disciplinas","14-04-2018","Implementar um CRUD de Disciplinas."),
    new Repositorio("03 - CRUD Disciplinas com LocalStorage","./03%20-%20Crud%20Disciplinas%20com%20Local%20Storage/","https://github.com/JoaoPalmasBR/2018-1-LPWEB/tree/03-crud-disciplinas-localstorage","14-04-2018","Implementar um CRUD de disciplinas."),
    new Repositorio("04 - G1 Avaliação","./04%20-%20G1%20Avaliacao/","https://github.com/JoaoPalmasBR/2018-1-LPWEB/tree/g1-avaliacao","16-04-2018","Execução da parte pratica obrigatoria da avaliação de G1.")
  ];
}
