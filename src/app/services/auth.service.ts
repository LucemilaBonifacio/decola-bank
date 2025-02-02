import { Injectable } from '@angular/core';
import { Conta } from '../classes/conta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private chaveConta = 'contaCliente';

  
  setConta(conta: Conta): void {
    localStorage.setItem(this.chaveConta, JSON.stringify(conta)); 
  }

  
  getConta(): Conta | null {
    const contaStorage = localStorage.getItem(this.chaveConta);
    return contaStorage ? JSON.parse(contaStorage) as Conta : null;
  }

  
  logout(): void {
    localStorage.removeItem(this.chaveConta);
  }
}
