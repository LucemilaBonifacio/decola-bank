import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from '../../../services/cep.service';


@Component({
  selector: 'app-cliente-novo',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent {
  // Dados do cliente
  cpf: string = '';
  nomeCompleto: string = '';
  email: string = '';

  // Dados do endereço
  cep: string = '';
  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  bairro: string = '';
  cidade: string = '';

  // Dados da conta
  tipoConta: string = '';
  agencia: string = '';
  senhaInicial: string = '';

  // Outros
  politica: boolean = false;
  mostrarPopup: boolean = false;

  constructor(private router: Router, private cepService: CepService) {}

  // Método para fechar o formulário
  cancelar() {
    this.router.navigate(['/clientes']);
  }

  // Método chamado ao submeter o formulário
  onSubmit(form: any) {
    if (form.valid) {
      this.mostrarPopup = true;
      console.log('Formulário enviado com sucesso:', form.value);
    } else {
      console.log('Formulário inválido!');
    }
  }

  getEnderecoCompleto(): string {
    // Concatenar os dados do endereço em um único formato
    return `${this.endereco}, ${this.numero || 'S/N'}${this.complemento ? `, ${this.complemento}` : ''}, ${this.bairro}, ${this.cidade}, ${this.cep}`;
  }

  // Método para concluir o processo
  concluir() {
    this.router.navigate(['/clientes']);
  }

  // Método para buscar o endereço pelo CEP
  buscarEndereco() {
    if (this.cep.length === 8) {
      this.cepService.buscarCep(this.cep).subscribe(
        data => {
          if (data) {
            this.endereco = data.logradouro;
            this.bairro = data.bairro;
            this.cidade = data.localidade;
          }
        },
        error => {
          console.error('Erro ao buscar o CEP:', error);
        }
      );
    }
  }
}