import { Situacao } from './../../../cadastro-projetos/models/situacao.enum';
import { ListaProjetosService } from './../../services/lista-projetos.service';
import { Projetos } from './../../../cadastro-projetos/models/projetos';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
projetos !: Projetos[];
situacao = Situacao["CANCELADO"];
term !: string;
  constructor(
    private listaProjetosService:ListaProjetosService,
    private router: Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(){
    
    this.listarProjetos();
  }

  listarProjetos(){
    this.listaProjetosService.listarProjetos()
    .subscribe(
      data => {
        this.projetos = data;
      }
    )
  }
  search(){
    if(this.term != ''){
      this.projetos = this.projetos.filter((status) => {
        return status.situacao.toLowerCase().match(this.term.toLowerCase())
      })
    }else if (this.term == ''){
      this.ngOnInit();
    }
  }
}
