import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conta } from '../classes/conta';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private baseUrl = 'http://localhost:8080/contas'; // Ajuste conforme seu backend

  constructor(private http: HttpClient) { }

  // Método para criar a conta
  criarConta(conta: Conta): Observable<Conta> {
    const url = `${this.baseUrl}/contas`; // Ajuste com o endpoint correto para criação de conta
    return this.http.post<Conta>(url, conta);
  }
}
