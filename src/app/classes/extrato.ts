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

  }
