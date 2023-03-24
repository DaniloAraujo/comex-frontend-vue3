import { v4 as uuidv4 } from 'uuid';

function dataFormatada() {
    return new Date()
        .toLocaleDateString("en-US")
        .split(',')[0]
        .split('/')
        .reverse()
        .join('-');
}

export interface Produto {
    nome: string,
    descricao: string,
    preco: number,
    quantidade: string,
    url: string,
    categoria: string,
    id: string
}

export const criaProduto = (
    nome: string,
    descricao: string,
    preco: number,
    quantidade: string,
    url: string,
    categoria: string): Produto => {
    return {
        nome,
        descricao,
        preco,
        quantidade,
        url,
        categoria,
        id: uuidv4()
    };
}