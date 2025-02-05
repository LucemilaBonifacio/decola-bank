import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../classes/cliente';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GerenteService } from '../../../services/gerente.service';



@Component({
  selector: 'app-clientes-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})

export class ClientesListaComponent implements OnInit {
  constructor(private gerenteService: GerenteService){}

  ngOnInit(): void {
    this.gerenteService.getClientes().subscribe({
      next: resposta => this.clientes = resposta
    });
  }

  clientes: Cliente[] = [];
}
