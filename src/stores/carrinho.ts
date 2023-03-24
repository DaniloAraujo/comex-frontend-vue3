import type { Produto } from './../models/produto';
import { defineStore } from "pinia";

export const useCarrinhoStore = defineStore('carrinho', {
    // state são as propriedades reativas
    state: () => ({
        produtos: [] as Produto[]
    }),

    // actions são os metodos
    actions: {
        addProduto(item: Produto) {
            this.produtos.push(item);       
        }
    },

    // getters são as propriedades computadas
    getters: {}
})