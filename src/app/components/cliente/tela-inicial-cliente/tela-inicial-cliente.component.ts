import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Conta } from '../../../classes/conta';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../services/clientes.service';


@Component({
  selector: 'app-tela-inicial-cliente',
  imports: [NgOptimizedImage, CommonModule, RouterLink],
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrls: ['./tela-inicial-cliente.component.css']
})
export class TelaInicialClienteComponent implements OnInit {
  saldo: number = 0;
  nomeCliente: string = '';
  conta: Conta | null = null;
  numConta: string = '';

  constructor(private clienteService: ClienteService) {
    // Inicialize a conta com valores padrão
    this.conta = new Conta('', '', 0, new Date(), 0, 0, '', '', 0);
  }

  ngOnInit(): void {
    // Inicialização do componente
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.obterConta(this.numConta);
    } else {
      console.log('Formulário inválido');
    }
  }

  obterConta(numConta: string): void {
    this.clienteService.obterConta(numConta).subscribe(
      (conta: Conta) => {
        this.conta = conta;
        this.nomeCliente = conta.nomeCliente;
        this.saldo = conta.saldo;
      },
      (error: any) => {
        console.error('Erro ao obter conta', error);
      }
    );
  }
}