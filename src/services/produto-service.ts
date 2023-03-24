import type { Produto } from "@/models/produto";

export function apiSalvaProduto(produto: Produto): Promise<Produto> {
    return fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
        .then(resposta => resposta.json())
}

export function apiBuscaProduto(): Promise<Produto> {
    return fetch('http://localhost:3000/produtos')
        .then(resposta => resposta.json())
}