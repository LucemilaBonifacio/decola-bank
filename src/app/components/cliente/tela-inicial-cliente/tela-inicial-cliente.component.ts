import { Component, OnInit } from '@angular/core';
import { SaldoService } from '../../../services/saldo.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tela-inicial-cliente',
  imports: [NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrls: ['./tela-inicial-cliente.component.css']
})
export class TelaInicialClienteComponent implements OnInit {
  saldoCliente: number = 0;
  nomeCliente: string = 'Lucemila Bonifácio';

  constructor(private saldoService: SaldoService) {}

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
}