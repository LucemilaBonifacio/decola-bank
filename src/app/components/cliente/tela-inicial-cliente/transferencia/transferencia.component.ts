import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoService } from '../../../../services/saldo.service';

@Component({
  selector: 'app-transferencia',
  imports: [CommonModule, FormsModule],
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  saldoCliente: number = 0; 
  agenciaDestinatario: string = ''; 
  contaDestinatario: string = '';
  valorTransferencia: number | null = null; 
  mensagemErro: string = '';

  constructor(private router: Router, private saldoService: SaldoService) {}

  ngOnInit(): void {
    this.saldoCliente = this.saldoService.getSaldo(); 
  }

  verificarSaldo() {
    if (this.valorTransferencia === null || this.valorTransferencia <= 0) {
      this.mensagemErro = 'Erro: O valor da transferência deve ser maior que zero.';
    } else if (this.valorTransferencia > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor digitado é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoService.atualizarSaldo(-this.valorTransferencia);
      this.saldoCliente = this.saldoService.getSaldo(); 
      this.router.navigate(['/tela-inicial-cliente']);
    }
  }
}