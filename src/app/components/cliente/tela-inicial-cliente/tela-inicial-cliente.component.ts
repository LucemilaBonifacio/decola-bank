import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SaldoService } from '../../../services/saldo.service';


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
    this.saldoCliente = this.saldoService.getSaldo();
  }
}