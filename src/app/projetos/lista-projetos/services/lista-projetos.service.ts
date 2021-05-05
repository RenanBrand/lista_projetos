import { ActivatedRoute } from '@angular/router';
import { Projetos } from './../../cadastro-projetos/models/projetos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
//import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListaProjetosService {
 baseUrl = "http://localhost:3000/projetos";

  constructor(
    private http:HttpClient) { }
  
  listarProjetos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  atualizarProjetos(projetos:Projetos): Observable<any> {
    return this.http.put(this.baseUrl + '/' + projetos.id,
    projetos)
  }
  
  listarId(id:string):Observable<any> {
    return this.http.get(this.baseUrl+ '/' + id)
  }

}
