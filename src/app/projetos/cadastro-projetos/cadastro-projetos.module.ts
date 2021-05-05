import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { SharedModule } from './../../shared';
import { CadastroProjetosService } from './services';
import { 
  CadastroProjetosComponent,
  CadastrarProjetosComponent } from './components';

@NgModule({
  declarations: [
    CadastroProjetosComponent,
    CadastrarProjetosComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar:true,
      progressAnimation:"increasing",
      preventDuplicates:true
    }),
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
    
  ],
  exports:[
    CadastroProjetosComponent
  ],
  providers: [
    CadastroProjetosService
  ]
})
export class CadastroProjetosModule { }
