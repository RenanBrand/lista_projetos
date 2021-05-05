import { Projetos } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroProjetosService {

  baseUrl = "http://localhost:3000/projetos/";

  constructor(private http:HttpClient) { }

  cadastrarProjetos(projetos:Projetos): Observable<any> {
    return this.http.post( this.baseUrl,projetos);

  }
}
