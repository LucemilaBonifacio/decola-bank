import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { GerenteService } from '../../../services/gerente.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-gerente',
  imports:[FormsModule, CommonModule, RouterLink],
  templateUrl: './login-gerente.component.html',
  styleUrls: ['./login-gerente.component.css']
})
export class LoginGerenteComponent {

  senha: string = '';
  idAdmin: number = 0;

  constructor(private gerenteService: GerenteService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.idAdmin) {
      this.fazerLogin(this.idAdmin);
    } else {
      console.log('Número da conta inválido');
    }
  }
 
  fazerLogin(idAdmin: number): void {
    localStorage.setItem('idAdmin', idAdmin.toString())
    this.router.navigate(['/clientes']);
  }
 
 

  validateLength(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

}