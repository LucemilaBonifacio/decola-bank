import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../classes/cliente';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "http://localhost:8081/gerente";


  public getClientes(): Observable<Cliente[]> {
    const url: string = "listar/clientes";
    return this.http.get<Cliente[]>(`${this.baseUrl}/${url}`);
  }

  public getCliente(id: number): Observable<Cliente> {
    const url = `buscar/cliente/${id}`;
    return this.http.get<Cliente>(`${this.baseUrl}/${url}`);
  }

  
  public postCliente(cliente: Cliente, idAdmin: number): Observable<any> {
  const url = `${this.baseUrl}/novo/clientes/${idAdmin}`; // ID do gerente é incluído na URL
  const dados = {
    cpf: cliente.cpf,
    nome: cliente.nome,
    email: cliente.email,
    telefone: cliente.telefone,
    statusCliente: cliente.statusCliente?.toString() ?? '0',
    endereco: cliente.endereco,
    senha: cliente.senha,
  };

  return this.http.post<any>(url, dados);
}

  public putClientes(cliente: Cliente, id: number): Observable<Cliente> {
    const url = `alterar/${id}`;
    return this.http.put<Cliente>(`${this.baseUrl}/${url}`, cliente);
  }
}
