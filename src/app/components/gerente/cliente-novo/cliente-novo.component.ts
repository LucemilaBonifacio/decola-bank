import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GerenteService } from '../../../services/gerente.service';
import { ContaService } from '../../../services/conta.service';
import { Cliente } from '../../../classes/cliente';
import { Conta } from '../../../classes/conta';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-novo',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent {
  cliente: Cliente = new Cliente();
  conta: Conta = new Conta();
  idAdmin!: number; // Id do gerente (admin), que pode vir de um serviço de autenticação.

  constructor(
    private gerenteService: GerenteService,
    private contaService: ContaService,
    private router: Router
  ) {}

  // Função para gerar número de conta
  gerarNumeroConta(): string {
    const numero = Math.floor(Math.random() * 1000000000).toString().padStart(10, '0');
    return numero;
  }

  concluir(form: NgForm) {
    if (form.invalid) {
      console.error('Formulário inválido. Preencha todos os campos corretamente.');
      return;
    }

    // 1. Criação do cliente
    this.gerenteService.postCliente(this.cliente, this.idAdmin).subscribe({
      next: (clienteCriado) => {
        // 2. Criar a conta associada ao cliente
        this.conta.idCliente = clienteCriado.id;
        this.conta.nomeCliente = clienteCriado.nome;
        this.conta.cpfCliente = clienteCriado.cpf;
        this.conta.numConta = this.gerarNumeroConta();  // Gerando número da conta
        this.conta.saldo = 0;  // Inicializando saldo
        this.conta.dataCriacao = new Date();
        this.conta.tipoConta = 1;  // Tipo de conta (ex: 1 para Simples)
  
        // 3. Criar a conta no backend
        this.contaService.criarConta(this.conta).subscribe({
          next: () => {
            // Redireciona após a criação da conta com sucesso
            this.router.navigate(['/clientes']);
          },
          error: (err) => {
            console.error('Erro ao criar conta:', err);
            // Exibir mensagem de erro ao usuário, se necessário
          }
        });
      },
      error: (err) => {
        console.error('Erro ao criar cliente:', err);
        // Exibir mensagem de erro ao usuário, se necessário
      }
    });
  }
  
  
  // Função de cancelamento
  cancelar() {
    this.router.navigate(['/clientes']);  // Ou outra página de sua escolha
  }
}
