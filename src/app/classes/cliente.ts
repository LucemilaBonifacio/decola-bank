export class Cliente {
    constructor(
        public id: number,
        public cpf: string = '', 
        public nome: string = '', 
        public email: string = '',
        public telefone: string = '') 
    {}
    
    public mostrar() : string{
        return `CPF: ${this.cpf}\nNome: ${this.nome}\nEmail: ${this.email}\nFone: ${this.telefone}`;
    }
}
