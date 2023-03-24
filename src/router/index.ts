import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router';

import Home from '@/views/home/Home.vue';
import CadastroCategorias from '@/views/CadastroCategorias.vue';
import CadastroProdutos from '@/views/CadastroProdutos.vue';
import CadastroClientes from '@/views/CadastroClientes.vue';
import Carrinho from '@/views/Carrinho.vue';

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categorias',
        name: 'Categorias',
        component: CadastroCategorias
    },
    {
        path: '/produtos',
        name: 'Produtos',
        component: CadastroProdutos
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: CadastroClientes
    },
    {
        path: '/carrinho',
        name: 'Carrinho',
        component: Carrinho
    }
];

const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
});

export default roteador;