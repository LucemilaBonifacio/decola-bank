import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Conta } from '../../../classes/conta';


@Component({
  selector: 'app-login-cliente',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  conta: Conta;
  senha: string = '';

  constructor() {
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
      console.log('Formulário válido', form.value);
      console.log('Número da Conta:', this.conta.numConta); // Exemplo de como acessar o número da conta
    } else {
      console.log('Formulário inválido');
    }
  }
}