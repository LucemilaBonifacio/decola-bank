import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saque',
  imports: [CommonModule, FormsModule],
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {
  saldoCliente: number = 1000; // Saldo do cliente
  valorSaque: number = 0; // Valor digitado pelo cliente
  mensagemErro: string = ''; // Mensagem de erro

  constructor(private router: Router) {}

  verificarSaldo() {
    if (this.valorSaque > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor digitado é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoCliente -= this.valorSaque; // Subtrai o valor do saldo
      this.router.navigate(['/tela-inicial-cliente']); // Redireciona para a tela inicial
    }
  }
}