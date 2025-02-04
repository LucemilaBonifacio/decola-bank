export class Conta {
    constructor(
      public agencia: string = '',
	    public numConta: string = '' ,
	    public saldo: number,
	    public dataCriacao: Date = new Date,
	    public tipoConta: number ,
	    public idCliente: number,
	    public nomeCliente: string = '' ,
	    public cpfCliente: string = '',
      public id: number,
      public chavePix: string = '',
      public valorPix: number = 0) 
    {}
}



