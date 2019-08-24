export interface profissional{
    nome: string,
    email: string,
    endereco: string,
    senha: string,
    tipoServico: Servicos[],
}

export interface Servicos{
    nome: string
}