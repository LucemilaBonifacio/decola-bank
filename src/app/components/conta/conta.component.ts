import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../../services/gerente.service';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-conta',
  imports: [CommonModule, RouterLink],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})

export class ContaComponent implements OnInit {

  constructor(private gerenteService: GerenteService, private route: ActivatedRoute) { }

  contas: any = {};  

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('id');
    
    if (cpf !== null) {
      const cpfNumber = +cpf; 
      this.gerenteService.getContasPorIdCliente(cpfNumber)
        .subscribe(resposta => {
          this.contas = resposta;  
        });
    } else {
      console.error('CPF não encontrado');
    }
  }

  getTipoContaDescricao(status?: number): string {
    return status === 1 ? 'Simples' : 'Especial';
  }

  cancelarConta(): void {
    
  }
}