import { Component } from '@angular/core';
import { ClienteService } from '../../../services/clientes.service';
import { AuthService } from '../../../services/auth.service';
import { Conta } from '../../../classes/conta';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  conta: Conta = new Conta('', '', 0, new Date(), 0, 0, '', '', 0);
  senha: string = '';
  numConta: string = '';

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.numConta) {
      this.fazerLogin(this.numConta);
    } else {
      console.log('Número da conta inválido');
    }
  }

  fazerLogin(numConta: string): void {
    this.obterConta(numConta);
  }

  obterConta(numConta: string): void {
    this.clienteService.obterConta(numConta).subscribe(
      (conta: Conta) => {
        this.conta = conta;
        this.authService.setConta(conta);
        console.log('Dados da Conta:', this.conta);
        this.router.navigate(['/tela-inicial-cliente']);
      },
      (error) => {
        console.error('Erro ao obter conta:', error);
      }
    );
  }

 }
