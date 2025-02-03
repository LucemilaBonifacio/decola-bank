export class Pix {
    constructor(
      public agencia: string = '',
      public numConta: string = '',
      public saldo: number = 0,
      public dataCriacao: Date = new Date(),
      public tipoConta: number = 0,
      public idCliente: number = 0,
      public nomeCliente: string = '',
      public cpfCliente: string = '',
      public id?: number,
      public chavePix: string = '',
      public valorPix: number = 0
    ) {}
  
    public mostrar(): string {
      return `Agencia: ${this.agencia} \nNumConta: ${this.numConta}\nSaldo: ${this.saldo.toFixed(2)}\nDataCriacao: ${this.dataCriacao.toLocaleDateString()}\nTipoConta: ${this.tipoConta}\nIdCliente: ${this.idCliente}\nNomeCliente: ${this.nomeCliente}\nCpfCliente: ${this.cpfCliente}\nId: ${this.id}\nChavePix: ${this.chavePix}\nValorPix: ${this.valorPix.toFixed(2)}`;

     
    }
  }