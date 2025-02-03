import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Conta } from '../classes/conta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private chaveConta = 'contaCliente';
  private loggedIn = new BehaviorSubject<boolean>(this.hasConta());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  private hasConta(): boolean {
    return !!localStorage.getItem(this.chaveConta);
  }

  setConta(conta: Conta): void {
    localStorage.setItem(this.chaveConta, JSON.stringify(conta));
    this.loggedIn.next(true);
  }

  getConta(): Conta | null {
    const contaStorage = localStorage.getItem(this.chaveConta);
    return contaStorage ? JSON.parse(contaStorage) as Conta : null;
  }

  logout(): void {
    localStorage.removeItem(this.chaveConta);
    this.loggedIn.next(false);
  }

  getAdminId(): number | null {
    const adminId = localStorage.getItem('adminId');
    return adminId ? parseInt(adminId, 10) : null;
  }
}