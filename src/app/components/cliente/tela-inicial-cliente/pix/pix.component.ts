import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoService } from '../../../../services/saldo.service';

@Component({
  selector: 'app-pix',
  imports: [CommonModule, FormsModule],
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent implements OnInit {
  saldoCliente: number = 0; 
  chavePix: string = '';
  valorPix: number = 0;
  selectedOption: string = '';
  mensagemErro: string = '';

  constructor(private router: Router, private saldoService: SaldoService) {}

  ngOnInit(): void {
    this.saldoCliente = this.saldoService.getSaldo(); 
  }

  realizarPix() {
    if (this.valorPix <= 0) {
      this.mensagemErro = 'Erro: O valor do Pix deve ser maior que zero.';
    } else if (this.valorPix > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor do Pix é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoService.atualizarSaldo(-this.valorPix);
      this.saldoCliente = this.saldoService.getSaldo(); 
      this.router.navigate(['/tela-inicial-cliente']);
    }
  }
}