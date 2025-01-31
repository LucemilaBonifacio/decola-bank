import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SaldoService } from '../../../services/saldo.service';
import { ExtratoService } from '../../../services/extrato.service';
import { Extrato } from '../../../classes/extrato';

@Component({
  selector: 'app-extrato',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  saldoCliente: number = 0; 
  selectedOption: string = '';
  mensagemErro: string = '';
  transacoes: Extrato[] = []; // Lista de transações
  transacoesFiltradas: Extrato[] = []; // Lista de transações filtradas

  constructor(private router: Router, private saldoService: SaldoService, private extratoService: ExtratoService) {}

  ngOnInit(): void {
    this.saldoCliente = this.saldoService.getSaldo(); 
    this.transacoes = this.extratoService.getTransacoes().map(transacao => new Extrato(
      transacao.idTransacao,
      transacao.titularConta,
      transacao.conta,
      transacao.valor,
      new Date(transacao.dataTransacao),
      transacao.tipoTransacao,
      transacao.codigoTransacao,
      transacao.statusTransacao,
      transacao.tarifa
    ));
  }

  visualizarExtrato() {
    const dias = parseInt(this.selectedOption);
    if (isNaN(dias)) {
      this.mensagemErro = 'Selecione uma opção válida.';
      return;
    }

    const dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() - dias);

    this.transacoesFiltradas = this.transacoes.filter(transacao => {
      return new Date(transacao.dataTransacao) >= dataLimite;
    });

    if (this.transacoesFiltradas.length === 0) {
      this.mensagemErro = 'Nenhuma transação encontrada para o período selecionado.';
    } else {
      this.mensagemErro = '';
      this.router.navigate(['/view-extrato'], { state: { transacoes: this.transacoesFiltradas } });
    }
  }
}