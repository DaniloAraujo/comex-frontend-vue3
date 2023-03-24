import { v4 as uuidv4 } from 'uuid';

export interface Endereco {
    cep: string,
    cidade: string,
    bairro: string,
    logradouro: string,
    uf: string,
    complemento: string,
    numero: string
}

export interface Cliente {
    nome: string,
    sobrenome: string,
    cpf: string,
    telefone: string,
    email: string,
    endereco: Endereco
}

export const criaEndereco = (
    cep: string,
    cidade: string,
    bairro: string,
    logradouro: string,
    uf: string,
    complemento: string,
    numero: string
): Endereco => {
    return {
        cep,
        cidade,
        bairro,
        logradouro,
        uf,
        complemento,
        numero
    }
}

export const criaCliente = (
    nome: string,
    sobrenome: string,
    cpf: string,
    telefone: string,
    email: string,
    endereco: Endereco
): Cliente => {
    return {
        nome,
        sobrenome,
        cpf,
        telefone,
        email,
        endereco
    }
}