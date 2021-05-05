import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  ListaProjetosComponent, 
  ListarProjetosComponent,
  UpdateProjetosComponent } from './components';
const listaProjetosRoutes: Routes = [
  {
    path:'projetos',
    component:ListarProjetosComponent,
    children:[
      {
        path:'',
        component:ListaProjetosComponent
      },
      {
        path:'update/:id',
        component:UpdateProjetosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(listaProjetosRoutes)],
  exports: [RouterModule]
})
export class ListaProjetosRoutingModule { }
