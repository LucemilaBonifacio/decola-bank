import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor() { }

  getTransacoes() {
    return [
      { idTransacao: 1, titularConta: 'João Silva', conta: '12345-6', valor: 100.00, dataTransacao: new Date(), tipoTransacao: 'Débito', codigoTransacao: '001', statusTransacao: 'Concluída', tarifa: 'Nenhuma' },
      // Adicione mais transações conforme necessário
    ];
  }
}