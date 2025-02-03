import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Pix } from '../classes/pix';



@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl: string = "http://localhost:8081/transacao";

  constructor(private http: HttpClient) { }
  //Saque
  public realizarSaqueApi(valor: number, id: number): Observable<string> {
    if (!id) {
      return throwError(() => new Error("Usuário não logado."));
    }
    const url = `${this.baseUrl}/saque/${id}`;
    return this.http.post<string>(url, { valor }, { responseType: 'text' as 'json' });
  }
  
  //Depósito
  public realizarDepositoApi(valor: number, id: number): Observable<string> {
    if (!id) {
      return throwError(() => new Error("Usuário não logado."));
    }
    const url = `${this.baseUrl}/deposito/${id}`;
    return this.http.post<string>(url, { valor }, { responseType: 'text' as 'json' });
  }

  //Pix
  public realizarPixApi(idContaOrigem: number, chavePixDestino: string, valor: number): Observable<string> {
    const url = `${this.baseUrl}/pix/${idContaOrigem}/${chavePixDestino}`;
    return this.http.post<string>(url, { valor }, { responseType: 'text' as 'json' });

}
  
}
