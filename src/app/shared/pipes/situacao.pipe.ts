import { Situacao } from './../../projetos/cadastro-projetos/models/situacao.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class SituacaoPipe implements PipeTransform {

  transform(situacao: Situacao,args?:string): string {
    return this.obterTexto(situacao);
  }
  obterTexto(situacao: Situacao): string {
  	let statusDesc: string;
  	switch (situacao) {
  		case Situacao.PLANEJADO:
  			statusDesc = 'Planejado';
  			break;
  		case Situacao.EM_DESENVOLVIMENTO:
  			statusDesc = 'Em desenvolvimento';
  			break;
  		case Situacao.CANCELADO:
  			statusDesc = 'Cancelado';
  			break;
  		case Situacao.CONCLUIDO:
  			statusDesc = 'Concluído';
  			break;
  		default:
  			statusDesc = situacao;
  			break;
  	}
  	return statusDesc;
  }
}
