import { SortPipe } from './pipes/sort.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituacaoPipe } from './pipes/situacao.pipe';



@NgModule({
  declarations: [
    SortPipe,
    SituacaoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SortPipe,
    SituacaoPipe
  ],
  providers:[
    SortPipe,
    SituacaoPipe
  ]
})
export class SharedModule { }
