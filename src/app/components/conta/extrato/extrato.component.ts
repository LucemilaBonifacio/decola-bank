import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoService } from '../../../services/saldo.service';
import { ExtratoService } from '../../../services/extrato.service';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Extrato } from '../../../classes/extrato';

@Component({
  selector: 'app-extrato',
  imports: [CommonModule, FormsModule],
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  saldoCliente: number = 0; 
  selectedOption: string = '';
  mensagemErro: string = '';
  transacoes: Extrato[] = []; // Lista de transações

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

  gerarExtrato() {
    const dias = parseInt(this.selectedOption);
    if (isNaN(dias)) {
      this.mensagemErro = 'Selecione uma opção válida.';
      return;
    }

    const dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() - dias);

    const transacoesFiltradas = this.transacoes.filter(transacao => {
      return new Date(transacao.dataTransacao) >= dataLimite;
    });

    if (transacoesFiltradas.length === 0) {
      this.mensagemErro = 'Nenhuma transação encontrada para o período selecionado.';
      return;
    }

    this.gerarPDF(transacoesFiltradas);
  }

  gerarPDF(transacoes: Extrato[]) {
    const doc = new jsPDF();
    doc.text('Extrato de Transações', 10, 10);

    const colunas = ["ID", "Titular", "Conta", "Valor", "Data", "Tipo", "Código", "Status", "Tarifa"];
    const linhas = transacoes.map(transacao => [
      transacao.idTransacao,
      transacao.titularConta,
      transacao.conta,
      transacao.valor.toFixed(2),
      transacao.dataTransacao.toLocaleDateString(),
      transacao.tipoTransacao,
      transacao.codigoTransacao,
      transacao.statusTransacao,
      transacao.tarifa
    ]);

    (doc as any).autoTable({
      head: [colunas],
      body: linhas,
      startY: 20
    });

    doc.save('extrato.pdf');
  }
}