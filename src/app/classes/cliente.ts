export class Cliente {
    constructor(
        public cpf: string = '', 
        public nome: string = '', 
        public email: string = '',
        public telefone: string = '',
        public statusCliente?: number,
        public id?: number) 
    {}
    
    public mostrar() : string{
        return `Id: ${this.id} \nCPF: ${this.cpf}\nNome: ${this.nome}\nEmail: ${this.email}\nTelefone: ${this.telefone}\nStatus: ${this.statusCliente}`;
    }
}
