export class Cliente {
    constructor(
        public cpf: string = '', 
        public nome: string = '', 
        public email: string = '',
        public telefone: string = '',
        public statusCliente?: number,
        public id?: number) 
    {}
    
}
