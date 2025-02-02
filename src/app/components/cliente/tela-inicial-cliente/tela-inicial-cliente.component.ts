import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Conta } from '../../../classes/conta';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial-cliente',
  imports: [NgOptimizedImage,CommonModule, RouterLink],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrls: ['./tela-inicial-cliente.component.css']
})
export class TelaInicialClienteComponent implements OnInit {
  conta: Conta = new Conta('', '', 0, new Date(), 0, 0, '', '', 0);
  saldo: number = 0;
  nomeCliente: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const contaSalva = this.authService.getConta();

    if (contaSalva) {
      this.conta = contaSalva;
      this.nomeCliente = this.conta.nomeCliente;
      this.saldo = this.conta.saldo;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login/cliente']);
   }
}
