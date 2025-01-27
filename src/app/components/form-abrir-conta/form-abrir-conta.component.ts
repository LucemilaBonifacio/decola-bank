import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-abrir-conta',
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './form-abrir-conta.component.html',
  styleUrls: ['./form-abrir-conta.component.css']
})
export class FormAbrirContaComponent {
  form: FormGroup;
  mostrarPopup = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmacaoEmail: ['', Validators.required],
      politica: [false, Validators.requiredTrue]
    }, { validator: this.emailMatchValidator });
  }

  emailMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.get('email');
    const confirmacaoEmail = control.get('confirmacaoEmail');
    if (email?.value !== confirmacaoEmail?.value) {
      return { 'emailMismatch': true };
    }
    return null;
  }

  fecharFormulario() {
    this.router.navigate(['/home']);
  }

  onSubmit() {
    if (this.form.valid) {
      this.mostrarPopup = true;
      console.log('Formulário enviado com sucesso:', this.form.value);
    }
  }

  concluir() {
    this.router.navigate(['/home']);
  }
}