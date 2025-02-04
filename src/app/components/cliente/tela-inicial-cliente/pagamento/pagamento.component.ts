
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoService } from '../../../../services/saldo.service';

@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  saldoCliente: number = 0;
  valorPagamento: number = 0;
  codigoPagamento: string = '';
  dataVencimento: string = '';
  descricao: string = '';
  mensagemErro: string = '';

  constructor(private router: Router, private saldoService: SaldoService) {}

  ngOnInit(): void {
    this.saldoService.getSaldo(1).subscribe(
      (data: number) => {
        this.saldoCliente = data;
      },
      (error) => {
        console.error('Erro ao buscar saldo', error);
      }
    );
  }

  verificarSaldo() {
    if (this.valorPagamento > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor digitado é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoService.atualizarSaldo(-this.valorPagamento);
      this.saldoService.getSaldo(1).subscribe(
        (data: number) => {
          this.saldoCliente = data;
          this.router.navigate(['/tela-inicial-cliente']);
        },
        (error) => {
          console.error('Erro ao atualizar saldo', error);
        }
      );
    }
    
  }
  voltar(): void {
    this.router.navigate(['/tela-inicial-cliente']);
  }
}