import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Extrato } from '../../../../classes/extrato';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-extrato',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-extrato.component.html',
  styleUrls: ['./view-extrato.component.css']
})
export class ViewExtratoComponent implements OnInit {
  transacoes: Extrato[] = [];
  modalAberto: boolean = false;
  email: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.transacoes = navigation.extras.state['transacoes'];
    }
  }

  ngOnInit(): void {}

  imprimirExtrato() {
    window.print();
  }

  gerarPDF() {
    const doc = new jsPDF();
    doc.text('Extrato de Transações', 10, 10);

    const colunas = ["ID", "Titular", "Conta", "Valor", "Data", "Tipo", "Código", "Status", "Tarifa"];
    const linhas = this.transacoes.map(transacao => [
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

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  enviarEmail() {
    if (this.email) {
      // Lógica para enviar o extrato por email
      alert(`Extrato enviado para ${this.email}`);
      this.fecharModal();
    } else {
      alert('Por favor, insira um email válido.');
    }
  }
}