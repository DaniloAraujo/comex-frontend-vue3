import { v4 as uuidv4 } from 'uuid';

function dataFormatada() {
    return new Date()
        .toLocaleDateString("en-US")
        .split(',')[0]
        .split('/')
        .reverse()
        .join('-');
};

export interface Categoria {
    id: string;
    nome: string;
    criacao: string;
    status: string;
};

export const criaCategoria = (nome: string): Categoria => {
    return {
        id: uuidv4(),
        nome,
        criacao: dataFormatada(),
        status: 'ATIVA'
    };
};