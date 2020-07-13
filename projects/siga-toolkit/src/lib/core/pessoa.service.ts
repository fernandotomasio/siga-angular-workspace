import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  
  constructor(private http: HttpClient) { }

  findAll(search: any): Observable<any> {
    return this.http.get<any>(`${environment.API}/resource_`, { params: search })
  }
  find(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${environment.API}/resource_/${id}`)
  }
  remove(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.API}/resource_/${id}`)
  }

  save(data:any): Observable<Pessoa>{
    return !data.id
    ? this.http.post<Pessoa>(`${environment.API}/resource_/`, data)
    : this.http.put<Pessoa>(`${environment.API}/resource_/`, data)
  }
}
