import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix',
  imports: [CommonModule, FormsModule],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.css'
})
export class PixComponent  {
  saldoCliente: number = 1000; // Saldo do cliente
  valorPix: number = 0;
  selectedOption: string = '';
  mensagemErro: string = ''; // Mensagem de erro

  constructor(private router: Router) {}

  realizarPix() {
    if (this.valorPix <= 0) {
      this.mensagemErro = 'Erro: O valor do Pix deve ser maior que zero.';
    } else if (this.valorPix > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor do Pix é maior que o saldo disponível.';
    } else {
      this.mensagemErro = '';
      this.saldoCliente -= this.valorPix; // Subtrai o valor do Pix do saldo
    // console.log('Valor do Pix:', this.valorPix); 
    // console.log('Saldo do Cliente:', this.saldoCliente); 
      this.router.navigate(['/tela-inicial-cliente']);
      // alert('Pix realizado com sucesso!'); // Exibe uma mensagem de sucesso
    }
  }
}
    