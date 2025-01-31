export class Extrato {
    constructor(
      public idTransacao: number,
      public titularConta: string = '',
      public conta: string = '',
      public valor: number = 0,
      public dataTransacao: Date = new Date(),
      public tipoTransacao: string = '',
      public codigoTransacao: string = '',
      public statusTransacao: string = '',
      public tarifa: string = ''
    ) {}
  
    public mostrar(): string {
      return `ID Transação: ${this.idTransacao}\nTitular: ${this.titularConta}\nConta: ${this.conta}\nValor: R$ ${this.valor.toFixed(2)}\nData: ${this.dataTransacao.toLocaleDateString()}\nTipo: ${this.tipoTransacao}\nCódigo: ${this.codigoTransacao}\nStatus: ${this.statusTransacao}\nTarifa: ${this.tarifa}`;
    }
  }
