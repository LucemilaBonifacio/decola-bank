import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposito',
  imports: [CommonModule, FormsModule],
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css'],
})
export class DepositoComponent {
  agencia: string = '';
  numConta: string = '';
  valor: number = 0;
  saldoCliente: number = 1000; // Exemplo de saldo inicial
  erroMensagem: string = ''; 

  constructor(private router: Router) {}

  // Método para validar e processar o depósito
  verificarDeposito(): void {
    this.erroMensagem = ''; // Limpar a mensagem de erro antes de cada validação

    // Validação da agência
    if (!this.agencia || this.agencia.length !== 4) {
      this.erroMensagem = 'A agência deve conter 4 dígitos.';
      return;
    }

    // Validação da conta
    if (!this.numConta || this.numConta.length !== 7) {
      this.erroMensagem = 'O número da conta deve conter 7 dígitos.';
      return;
    }

    // Validação do valor
    if (!this.valor || this.valor <= 0) {
      this.erroMensagem = 'O valor do depósito deve ser maior que zero.';
      return;
    }

    // Atualizar o saldo do cliente
    this.saldoCliente += this.valor;
    
    // Redirecionar para a tela inicial do cliente
    this.router.navigate(['/tela-inicial-cliente']);

    // Exibir sucesso no console
    console.log('Depósito efetuado com sucesso!', {
      agencia: this.agencia,
      numConta: this.numConta,
      valor: this.valor,
      saldoAtual: this.saldoCliente,
    });
  }
}