import { 
  CadastrarProjetosComponent,
  CadastroProjetosComponent } from './components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cadastro-projetos',
    component:CadastrarProjetosComponent,
    children:[
      {
        path:'',
        component:CadastroProjetosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProjetosRoutingModule { }
