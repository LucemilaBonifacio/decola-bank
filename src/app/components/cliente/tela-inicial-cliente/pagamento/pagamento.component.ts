import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
  saldoCliente: number = 1000;
  valorPagamento: number = 0;
  codigoPagamento: string = '';
  dataVencimento: string = '';
  descricao: string = '';
  mensagemErro: string = '';

  constructor(private router: Router) {}

  verificarSaldo() {
    if (this.valorPagamento > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor digitado é maior que o saldo disponível.';
    } else if (!/^\d{1,48}$/.test(this.codigoPagamento)) {
      this.mensagemErro = 'Erro: O código de pagamento deve conter apenas números e ter no máximo 48 dígitos.';
    } else {
      this.mensagemErro = '';
      this.saldoCliente -= this.valorPagamento;
      this.router.navigate(['/tela-inicial-cliente']);
    }
  }
}