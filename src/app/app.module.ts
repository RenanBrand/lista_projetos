import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
/*Components*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  HeaderComponent,
  HomeComponent  } from './components';
import { SharedModule } from './shared';
import { 
  ListaProjetosModule,
  ListaProjetosRoutingModule} from './projetos/lista-projetos';
import { 
  CadastroProjetosModule,
  CadastroProjetosRoutingModule } from './projetos/cadastro-projetos';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CadastroProjetosModule,
    CadastroProjetosRoutingModule,
    FlexLayoutModule,
    ListaProjetosModule,
    ListaProjetosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    Ng2SearchPipeModule, 
    

    
    AppRoutingModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
