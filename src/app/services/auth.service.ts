import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Conta } from '../classes/conta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private contaKey = 'conta'; // Chave usada para armazenar os dados no localStorage

  constructor() { }

  // Método para recuperar a conta do localStorage

  getConta(): Conta | null {
    const contaJson = localStorage.getItem(this.contaKey);
    if (contaJson) {
      try {
        return JSON.parse(contaJson); // Converte de volta para o objeto
      } catch (error) {
        console.error('Erro ao analisar os dados do localStorage', error);
        return null;
      }
    }
    return null;
  }

  // Método para atualizar os dados da conta no localStorage
  setConta(conta: Conta): void {
    try {
      localStorage.setItem(this.contaKey, JSON.stringify(conta)); // Salva os dados no localStorage
    } catch (error) {
      console.error('Erro ao salvar dados no localStorage', error);
    }
  }

  // Método para limpar o localStorage, caso o usuário faça logout
  logout(): void {
    try {
      localStorage.removeItem(this.contaKey); // Remove os dados da conta do localStorage
    } catch (error) {
      console.error('Erro ao remover dados do localStorage', error);
    }

  }
}