import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-cliente',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-cliente.component.html',
  styleUrl: './login-cliente.component.css'
})
export class LoginClienteComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      numConta: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      agencia: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      senha: ['', Validators.required]
    });
  }

  validateLength(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Processar o login
      console.log('Formulário válido', this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}