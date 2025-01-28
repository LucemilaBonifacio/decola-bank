import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-gerente',
  imports:[FormsModule, CommonModule],
  templateUrl: './login-gerente.component.html',
  styleUrls: ['./login-gerente.component.css']
})
export class LoginGerenteComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

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