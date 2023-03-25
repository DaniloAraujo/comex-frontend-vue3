<template>
    <table class="table container text-center">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in carrinhoStore.produtos">
                <td>{{ item.nome }}</td>
                <td>{{ item.preco }}</td>
            </tr>
            <tr>
                <td></td>
               <td>
                <strong>Total: {{ carrinhoStore.valorTotal }}</strong>
               </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinhoStore = useCarrinhoStore();
</script>