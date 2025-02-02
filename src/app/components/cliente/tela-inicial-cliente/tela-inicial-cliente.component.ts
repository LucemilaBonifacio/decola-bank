import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Conta } from '../../../classes/conta';

@Component({
  selector: 'app-tela-inicial-cliente',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrls: ['./tela-inicial-cliente.component.css']
})
export class TelaInicialClienteComponent implements OnInit {
  conta: Conta = new Conta('', '', 0, new Date(), 0, 0, '', '', 0); 
  saldo: number = 0;
  nomeCliente: string = '';

  ngOnInit(): void {
    const contaStorage = sessionStorage.getItem('contaCliente');

    if (contaStorage) {
      this.conta = JSON.parse(contaStorage) as Conta;
      this.nomeCliente = this.conta?.nomeCliente || ''; 
      this.saldo = this.conta?.saldo || 0; 
    }
  }
}
