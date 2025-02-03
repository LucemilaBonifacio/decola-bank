import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TransacaoService } from '../../../../services/transacao.service';
import { AuthService } from '../../../../services/auth.service';
import { ClienteService } from '../../../../services/clientes.service';
import { Pix } from '../../../../classes/pix';

@Component({
  selector: 'app-pix',
  imports: [CommonModule, FormsModule],
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent implements OnInit {
  saldoCliente: number = 0; 
  chavePix: string = '';
  valorPix: number = 0;
  selectedOption: string = '';
  mensagemErro: string = '';
  conta: Pix = new Pix();
  numConta: string | null = '';

  mensagemSucesso: string = '';

  constructor(
    private router: Router, 
    private transacaoService: TransacaoService,
    private authService: AuthService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.numConta = this.authService.getNumConta();
    if (this.numConta) {
      this.clienteService.obterConta(this.numConta).subscribe(
        (conta: Pix) => {
          this.conta = conta;
          this.saldoCliente = conta.saldo;
        },
        (error) => {
          console.error('Erro ao obter conta', error);
        }
      );
    } else {
      this.mensagemErro = 'Erro: Conta não encontrada.';
    }
  }

   realizarPix() {
    if (this.valorPix <= 0) {
      this.mensagemErro = 'Erro: O valor do Pix deve ser maior que zero.';
    } else if (this.valorPix > this.saldoCliente) {
      this.mensagemErro = 'Erro: O valor do Pix é maior que o saldo disponível.';
    } else if (this.conta.id === undefined) {
      this.mensagemErro = 'Erro: ID da conta inválido.';
    } else {
      this.mensagemErro = '';
      this.transacaoService.realizarPixApi(this.conta.id, this.chavePix, this.valorPix).subscribe(
        (resposta: string) => {
          this.mensagemSucesso = resposta; // Retorna mensagem da API
          setTimeout(() => {
            this.router.navigate(['/tela-inicial-cliente']); // Volta para tela inicial
          }, 3000); // Espera 3 segundos antes de voltar
        },
        (error) => {
          console.error('Erro ao processar Pix', error);
          this.mensagemErro = 'Erro ao processar o Pix.';
        }
      );
    }
  }
}