import { defineStore } from "pinia";

import type { Carrinho } from "@/models/carrinho";

export const useCarrinhoStore = defineStore('carrinho', {
    // state são as propriedades reativas
    state: () => ({
        produtos: [] as Carrinho[]
    }),

    // actions são os metodos
    actions: {
        addProduto(item: Carrinho) {
            this.produtos.push(item);       
        }
    },

    // getters são as propriedades computadas
    getters: {
        valorTotal(): number {
            return this.produtos.reduce((total, produto) => total + produto.preco, 0);
        }
    }
})