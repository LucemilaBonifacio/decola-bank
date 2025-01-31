import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../classes/cliente';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor(private http: HttpClient) {}

 
  baseUrl: string = "http://localhost:8081/gerente";  

  
  public getClientes(): Observable<Cliente[]> {
    const url: string = "listar/clientes";  
    return this.http.get<Cliente[]>(`${this.baseUrl}/${url}`);
  }

  public getCliente(id: number) : Observable<Cliente> {
    const url = `buscar/${id}`;
    return this.http.get<Cliente>(`${this.baseUrl}/${url}`);
  }

  public putClientes(cliente: Cliente, id: number): Observable<Cliente> {
    const url = `alterar/${id}`;
    return this.http.put<Cliente>(`${this.baseUrl}/${url}`, cliente);
  }
}
