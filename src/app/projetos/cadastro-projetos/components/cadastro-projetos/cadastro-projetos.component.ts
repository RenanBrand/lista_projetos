import { 
  Situacao,
  Projetos } from './../../models';
import { CadastroProjetosService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastro-projetos',
  templateUrl: './cadastro-projetos.component.html',
  styleUrls: ['./cadastro-projetos.component.css']
})
export class CadastroProjetosComponent implements OnInit {
f!: FormGroup;
situacao!:string[];
  constructor(
    private fb:FormBuilder,
    private cadastroProjetosService:CadastroProjetosService,
    private toastr:ToastrService) { }

  ngOnInit(){
    this.gerarForm();
    this.situacao = [
      Situacao.PLANEJADO,
      Situacao.EM_DESENVOLVIMENTO,
      Situacao.CANCELADO,
      Situacao.CONCLUIDO
    ]
  }
gerarForm(){
  this.f = this.fb.group({
      descricao: ['',[Validators.required]],
      viabilidade:['',[Validators.required]],
      dataInicio:['',[Validators.required]],
      dataFim:['',[Validators.required]],
      situacao:['',[Validators.required]],
      valorDaExecucao:['',[Validators.required]],
      nomeDoResponsavel:['',[Validators.required,Validators.minLength(3)]]
  })
}
cadastrarProjetos() {
  if(this.f.invalid) {
    this.toastr.warning('Digite os dados corretamente','AVISO');
    return;
  }
 
  this.f.value.dataInicio = moment().format('DD/MM/YYYY');
  this.f.value.dataFim = moment().format('DD/MM/YYYY');
const cadastro: Projetos = this.f.value;
  this.cadastroProjetosService.cadastrarProjetos(cadastro)
  .subscribe(
    data => {
      console.log(data)
      const msg: string = 'Projeto cadastrado com sucesso!';
      this.toastr.success(msg,'SUCESSO');
      window.location.replace("http://localhost:4200/home");
      
    },
    err => {
      console.log(err)
      let msg: string = 'Erro ao cadastrar o projeto,tente novamente';
      if(err.status == 401){
        msg = "DADOS INVALIDOS";
      }
      this.toastr.error(msg,'ERRO');
    }
  )
}
}
