import type { Endereco, Cliente } from '@/models/cliente';

export function apiBuscaEndereco(cep: string): Promise<Endereco> {
    return fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
}

export function apiSalvaCliente(cliente: Cliente): Promise<Cliente> {
    return fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
        .then(resposta => resposta.json())
}