import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl: string = "http://localhost:8081/transacao";

  constructor(private http: HttpClient) { }

  public realizarSaqueApi(valor: number, id: number): Observable<string> {
    if (!id) {
      return throwError(() => new Error("Usuário não logado."));
    }
    const url = `${this.baseUrl}/saque/${id}`;
    return this.http.post<string>(url, { valor }, { responseType: 'text' as 'json' });
  }
}
  

