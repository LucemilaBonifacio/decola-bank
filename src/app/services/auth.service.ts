import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private numContaKey = 'numConta'; // Chave usada para armazenar os dados no localStorage
  private loggedIn = new BehaviorSubject<boolean>(this.hasNumConta());

  isLoggedIn = this.loggedIn.asObservable();

  constructor() { }

  // Método para verificar se há uma conta no localStorage
  private hasNumConta(): boolean {
    return !!localStorage.getItem(this.numContaKey);
  }

  // Método para recuperar a conta do localStorage
  getNumConta(): string | null {
    const numConta = localStorage.getItem(this.numContaKey);
    if (numConta) {
      try {
        return numConta; 
      } catch (error) {
        console.error('Erro ao analisar os dados do localStorage', error);
        return null;
      }
    }
    return numConta;
  }

  // Método para atualizar os dados da conta no localStorage
  setNumConta(numConta: string): void {
    try {
      localStorage.setItem(this.numContaKey , numConta); // Salva os dados no localStorage
      this.loggedIn.next(true); // Atualiza o estado de autenticação
    } catch (error) {
      console.error('Erro ao salvar dados no localStorage', error);
    }
  }

  // Método para limpar o localStorage, caso o usuário faça logout
  logout(): void {
    try {
      localStorage.removeItem(this.numContaKey); // Remove os dados da conta do localStorage
      this.loggedIn.next(false); // Atualiza o estado de autenticação
    } catch (error) {
      console.error('Erro ao remover dados do localStorage', error);
    }
  }
}