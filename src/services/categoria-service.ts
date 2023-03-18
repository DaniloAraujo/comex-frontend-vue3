import type { Categoria } from "@/models/categoria";

export function apiSalvaCategoria(categoria: Categoria): Promise<Categoria> {
    return fetch('http://localhost:3000/categorias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    })
        .then(resposta => resposta.json())
}

export function apiBuscaCategoria(): Promise<Categoria> {
    return fetch('http://localhost:3000/categorias')
        .then(resposta => resposta.json());
}

export function apiEditaCategoria(categoria: Categoria) {
    return fetch(`http://localhost:3000/categorias/${categoria.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    })
        .then(resposta => resposta.json());
}

export function apiExcluiCategoria(categoria: Categoria): Promise<void> {
    return fetch(`http://localhost:3000/categorias/${categoria.id}`, {
        method: 'DELETE'
    })
        .then(resposta => console.log('Categoria excluida.'));
}