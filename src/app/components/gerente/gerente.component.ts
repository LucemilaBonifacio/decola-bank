import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@Component({
  selector: 'app-gerente',
  imports: [ClientesListaComponent, CommonModule],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {
  constructor(private router: Router) {}

  novoCliente(): void {
    this.router.navigate(['clientes/novo']);
  }
}
