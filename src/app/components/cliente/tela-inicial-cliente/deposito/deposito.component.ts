import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoService } from '../../../../services/saldo.service';

@Component({
  selector: 'app-deposito',
  imports: [CommonModule, FormsModule],
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  saldoCliente: number = 0;
  agencia: string = '';
  numConta: string = '';
  valorDeposito: number = 0;
  mensagemErro: string = '';

  constructor(private router: Router, private saldoService: SaldoService) {}

  ngOnInit(): void {
    this.saldoService.getSaldo(1).subscribe(
      (data: number) => {
        this.saldoCliente = data;
      },
      (error) => {
        console.error('Erro ao buscar saldo', error);
      }
    );
  }

  validateLength(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (!/^\d{4}$/.test(this.agencia)) {
        this.mensagemErro = 'Erro: A agência deve ter exatamente 4 dígitos.';
      } else if (!/^\d{7}$/.test(this.numConta)) {
        this.mensagemErro = 'Erro: A conta deve ter exatamente 7 dígitos.';
      } else {
        this.saldoService.atualizarSaldo(+this.valorDeposito);
        this.saldoService.getSaldo(1).subscribe(
          (data: number) => {
            this.saldoCliente = data;
            this.router.navigate(['/tela-inicial-cliente']);
            console.log('Formulário válido', form.value);
          },
          (error) => {
            console.error('Erro ao atualizar saldo', error);
          }
        );
      }
    } else {
      this.mensagemErro = 'Erro: Formulário inválido';
      console.log('Formulário inválido');
    }
  }
}