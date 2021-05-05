import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SharedModule } from './../../shared';
import { ListaProjetosService } from './services';
import { 
  ListarProjetosComponent,
  ListaProjetosComponent,
  UpdateProjetosComponent } from './components';

  
@NgModule({
  declarations: [
    ListaProjetosComponent,
    ListarProjetosComponent,
    UpdateProjetosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar:true,
      progressAnimation:"increasing",
      preventDuplicates:true
    }),
    SharedModule,
    Ng2SearchPipeModule
  ],
  exports:[
    ListaProjetosComponent
  ],
  providers:[
    ListaProjetosService
  ]
})
export class ListaProjetosModule { }
