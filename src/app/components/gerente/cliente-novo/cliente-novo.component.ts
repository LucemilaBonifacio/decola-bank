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
  idAdmin!: number; 


  constructor(
    private gerenteService: GerenteService,
    private contaService: ContaService,
    private router: Router
  ) {}


 
  gerarNumeroConta(): string {
    const numero = Math.floor(Math.random() * 1000000000).toString().padStart(10, '0');
    return numero;

  }

  concluir(form: NgForm) {
    if (form.invalid) {
      console.error('Formulário inválido. Preencha todos os campos corretamente.');
      return;
    }

    this.gerenteService.postCliente(this.cliente, this.idAdmin).subscribe({
      next: (clienteCriado) => {
        this.conta.idCliente = clienteCriado.id;
        this.conta.nomeCliente = clienteCriado.nome;
        this.conta.cpfCliente = clienteCriado.cpf;
        this.conta.numConta = this.gerarNumeroConta(); 
        this.conta.saldo = 0;  
        this.conta.dataCriacao = new Date();
        this.conta.tipoConta = 1;  // Tipo de conta (ex: 1 para Simples)
  

        this.contaService.criarConta(this.conta).subscribe({
          next: () => {
            this.router.navigate(['/clientes']);
          },
          error: (err) => {
            console.error('Erro ao criar conta:', err);
          }
        });
      },
      error: (err) => {
        console.error('Erro ao criar cliente:', err);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/clientes']);  

  }

  // Método para buscar o endereço pelo CEP
  // buscarEndereco() {
  //   if (this.cep.length === 8) {
  //     this.cepService.buscarCep(this.cep).subscribe(
  //       data => {
  //         if (data) {
  //           this.endereco = data.logradouro;
  //           this.bairro = data.bairro;
  //           this.cidade = data.localidade;
  //         }
  //       },
  //       error => {
  //         console.error('Erro ao buscar o CEP:', error);
  //       }
  //     );
  //   }
  // }
}