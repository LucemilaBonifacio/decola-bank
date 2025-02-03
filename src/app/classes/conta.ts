export class Conta {
    constructor(
        public agencia: string = '',
        public numConta: string = '',
        public saldo: number = 0,          // Adicionado valor padrão para saldo
        public dataCriacao: Date = new Date(),
        public tipoConta: number = 1,      // Definido valor padrão para tipoConta
        public idCliente: number = 0,      // Definido valor padrão para idCliente
        public nomeCliente: string = '',
        public cpfCliente: string = '',
        public id?: number
    ) {}
   
    public mostrar() : string{
        return `Agencia: ${this.agencia} \nNumConta: ${this.numConta}\nSaldo: ${this.saldo.toFixed(2)}\nDataCriacao: ${this.dataCriacao.toLocaleDateString()}\nTipoConta: ${this.tipoConta}\nIdCliente: ${this.idCliente}\nNomeCliente: ${this.nomeCliente}\nCpfCliente: ${this.cpfCliente}\nId: ${this.id}`;
    }
}
