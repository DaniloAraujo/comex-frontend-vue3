<template>
    <table class="table container text-center">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in carrinhoStore.produtos" :key="item.id">
                <td>{{ item.nome }}</td>
                <td>{{ item.preco }}</td>
            </tr>
            <tr>
                <td></td>
               <td>
                Total: {{ valorTotal() }}
               </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinhoStore = useCarrinhoStore();

function valorTotal(): number {
    return carrinhoStore.produtos.reduce((total, valorProduto) => total + valorProduto.preco, 0)
}

</script>