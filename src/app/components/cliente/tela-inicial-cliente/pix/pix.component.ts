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
    this.saldoService.getSaldo(1).subscribe(
      (data: number) => {
        this.saldoCliente = data;
      },
      (error) => {
        console.error('Erro ao buscar saldo', error);
      }
    );
  }

  realizarPix() {
    if (this.valorPix <= 0) {
      this.mensagemErro = 'Erro: O valor do Pix deve ser maior que zero.';
    } else if (this.valorPix > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor do Pix é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoService.atualizarSaldo(-this.valorPix);
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
}