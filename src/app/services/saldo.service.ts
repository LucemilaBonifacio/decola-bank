import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {
  private saldo: number = 1000; // Saldo inicial

  getSaldo(): number {
    return this.saldo;
  }

  atualizarSaldo(valor: number): void {
    this.saldo += valor;
  }
}