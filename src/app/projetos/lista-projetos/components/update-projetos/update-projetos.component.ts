import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Projetos } from './../../../cadastro-projetos/models/projetos';
import { ListaProjetosService } from './../../services/lista-projetos.service';
import { Component, OnInit } from '@angular/core';
import { Situacao } from 'src/app/projetos/cadastro-projetos/models/situacao.enum';

@Component({
  selector: 'app-update-projetos',
  templateUrl: './update-projetos.component.html',
  styleUrls: ['./update-projetos.component.css']
})
export class UpdateProjetosComponent implements OnInit {
  form !: FormGroup;
  projetos !: Projetos;
  id!:string;
  situacao!:Situacao[];
  /* metodo default do TS para injeção de dependencia */
  constructor(
    private listaProjetosService:ListaProjetosService,
    private fb:FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private route:ActivatedRoute) { }
/* um gancho de ciclo de vida do Angular para indicar que terminou de 
criar o componente e o metodo é carregado na inicialização dele */
  ngOnInit(){
    this.id = JSON.stringify(+this.route.snapshot.paramMap.get('id')!);
    
    //this.listarId();
    this.listarId();
  this.gerarForm();
  this.situacao = [
    Situacao.PLANEJADO,
    Situacao.EM_DESENVOLVIMENTO,
    Situacao.CANCELADO,
    Situacao.CONCLUIDO
  ]
  }
/* metodo que irá fazer a chamada do service para fazer a requisição onde irá puxar o id */
  listarId(){
    console.log(this.id)
    this.listaProjetosService.listarId(this.id)
    .subscribe(
      data => {
        this.projetos = data;
        localStorage.setItem('string',this.id);
      },
      err => {
        console.log(err)
      }
    )
  }
/* metodo para criar o formulario reativo */  
  gerarForm(){
/* Aqui onde vai pegar os campos e os que são para alteração foi colocado o 
  "Validator" para ser obrigatorio o preenchimento */    
    this.form = this.fb.group(
      {
        id:['',[]],
        descricao:['',[Validators.required]],
        viabilidade:['',[Validators.required]],
        dataInicio:['',[]],
        dataFim:['',[]],
        situacao:['',[Validators.required]],
        valorDaExecucao:['',[]],
        nomeDoResponsavel:['',[]]

      }
    )
  }

/* metodo para atualizar os campos */

  atualizar(){
/* Caso os campos forem invalidos, ele retorna com uma caixa de mensagem de aviso */
    if(this.form.invalid){
      this.toastr.warning('Preencha os campos corretamente','AVISO')
      return;
    }
/* metodo para setar os campos que estão no banco */
    this.form.get('id')?.setValue(parseInt(this.id));
    this.form.get('dataInicio')?.setValue(this.projetos.dataInicio);
    this.form.get('dataFim')?.setValue(this.projetos.dataFim);
    this.form.get('valorDaExecucao')?.setValue(this.projetos.valorDaExecucao);
    this.form.get('nomeDoResponsavel')?.setValue(this.projetos.nomeDoResponsavel);
    const projetos:Projetos = this.form.value;  

/* metodo onde faz a chamada com o service para fazer a requisição de alteração */
    this.listaProjetosService.atualizarProjetos(projetos)
    .subscribe(
      data => {
        const msg:string = "Projeto alterado com sucesso";
        this.toastr.success(msg,'SUCESSO');
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err)
        let msg:string = "Erro ao alterar o projeto, tente novamente";
        if(err.status == 404){
          msg = "Não encontrado";
        }
        this.toastr.error(msg,'ERRO');
      }
    )
  }
}

