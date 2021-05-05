import { Projetos } from './../../projetos/cadastro-projetos/models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(projeto: Projetos[], args?: any): any {
  console.log('TESTANDOO',projeto)

  return projeto.sort((a:Projetos,b:Projetos) =>{
    let x = a.viabilidade.toLowerCase();
    let y = b.viabilidade.toLowerCase();

    if(x>y) {
     
      return -1;

    } else if(x<y) {
      
      return 1;

    }else {
      return 0;
    }
  })
}

}


  /*return value.filter((projeto) =>{
    return projeto.viabilidade ==type
  })*/
  
    /*  const regex = /[1-5]+/g;
     
    if(type === 'viabilidade'){
      let vibs = projetos.sort((a, b) => b.viabilidade - a.viabilidade);
    console.log(vibs)
      return vibs;
    }
    
    if(type === 'status'){

    }
  return [];*/
