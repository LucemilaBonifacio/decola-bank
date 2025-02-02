import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Conta } from '../../../classes/conta';
import { ClienteService } from '../../../services/clientes.service';


@Component({
  selector: 'app-login-cliente',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})

export class LoginClienteComponent {
  conta: Conta;
  senha: string = '';
  numConta: string =''

  constructor(private clienteService: ClienteService) {
    // Inicialize a conta com valores padrão
    this.conta = new Conta('', '', 0, new Date(), 0, 0, '', '', 0);
  }

  validateLength(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Processar o login
      this.obterConta(this.conta.numConta);
    } else {
      console.log('Formulário inválido');
    }
  }

  obterConta(numConta: string): void {
    
    this.clienteService.obterConta(numConta).subscribe(
      (conta: Conta) => {
        this.conta = conta;
        console.log('Dados da Conta:', this.conta);
        sessionStorage.setItem('contaCliente', JSON.stringify(this.conta));
      },
      (error) => {
        console.error('Erro ao obter conta:', error);
      }
    );
   
  }
}