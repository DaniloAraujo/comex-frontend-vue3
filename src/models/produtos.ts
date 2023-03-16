import { v4 as uuidv4 } from 'uuid';

export interface Produto {
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    url: string,
    categoria: string,
    criacao: string,
    id: string
}