import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  agencia: string = '';
  numConta: string = '';
  senha: string = '';
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
    } else {
      console.log('Formulário inválido');
    }
  }
}
 