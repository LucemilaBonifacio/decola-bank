import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TransacaoService } from '../../../../services/transacao.service';
import { AuthService } from '../../../../services/auth.service';
import { Conta } from '../../../../classes/conta';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  saldo: number = 0; 
  valor: number = 0;
  mensagemErro: string = '';
  mensagemSucesso: string = ''; 
  conta: Conta | null = null;

  constructor(
    private router: Router, 
    private transacaoService: TransacaoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.carregarConta();
  }

  carregarConta(): void {
    this.conta = this.authService.getConta();
    if (this.conta) {
      this.saldo = this.conta.saldo ?? 0; // Garante que saldo seja sempre um número válido
    } else {
      console.error('Erro: Conta não encontrada.');
    }
  }

  verificarSaldo(): void {
    if (!this.conta) {
      this.mensagemErro = 'Erro: Conta não encontrada.';
      return;
    }

    if (this.valor <= 0) {
      this.mensagemErro = 'Erro: O valor do saque deve ser maior que zero.';
      return;
    }

    if (this.valor > this.saldo) {
      this.mensagemErro = 'Erro: O valor digitado é maior que o saldo disponível.';
      return;
    }

    this.mensagemErro = '';

    const contaId = this.conta.id;
    if (contaId === undefined) {
      this.mensagemErro = 'Erro: ID da conta inválido.';
      return;
    }

    // Realizar a transação de saque na API
    this.transacaoService.realizarSaqueApi(this.valor, contaId).subscribe(
      (resposta: string) => {
        this.mensagemSucesso = resposta; // Mensagem de sucesso retornada da API
    
        // Recuperar os dados da conta e atualizar o saldo
        const contaAtualizada = this.authService.getConta(); // Garantir que a conta no localStorage esteja atualizada
        if (contaAtualizada) {
          contaAtualizada.saldo = contaAtualizada.saldo ?? 0; // Garantir que o saldo seja válido
          this.authService.setConta(contaAtualizada); // Atualiza os dados no localStorage com a conta atualizada
          this.saldo = contaAtualizada.saldo; // Atualiza a variável de saldo no componente para refletir a mudança
        }
    
        setTimeout(() => {
          this.router.navigate(['/tela-inicial-cliente']); // Volta para tela inicial
        }, 2000); // Espera 2 segundos antes de voltar
      },
      (error) => {
        console.error('Erro ao processar saque', error);
        this.mensagemErro = 'Erro ao processar o saque.';
      }
    );
    
  }


}
