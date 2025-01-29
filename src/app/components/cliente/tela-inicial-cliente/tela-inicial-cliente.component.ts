import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tela-inicial-cliente',
  imports: [NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrl: './tela-inicial-cliente.component.css'
})
export class TelaInicialClienteComponent {

}
