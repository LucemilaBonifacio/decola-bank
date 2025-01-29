import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposito',
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {
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
  
//Rever este codigo
