<template>
    <h2 class="text-center mt-3">Novo Produto</h2>
        <form action="#" method="post" id="formulario-produtos" class="container" @submit.prevent="salvaProduto">
            <div class="d-flex">
                <div class="col-md-5 me-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome" name="nome" v-model="nomeProduto">
                </div>
                <div class="col me-3">
                    <label for="preco" class="form-label">Preco</label>
                    <input type="text" class="form-control" id="preco" name="preco" v-model="precoProduto">
                </div>
                <div class="col">
                    <label for="estoque" class="form-label">Quantidade em estoque</label>
                    <input type="number" class="form-control" id="estoque" name="estoque" v-model="estoqueProduto">
                </div>
            </div>
            <div class="d-flex mt-3">
                <div class="me-3 col-md-5">
                    <label for="descricao" class="form-label">Descrição</label>
                    <textarea class="form-control" id="descricao" name="descricao" rows="3" v-model="descricaoProduto"></textarea>
                </div>
                <div class="col me-3">
                    <label for="url" class="form-label">URL da Imagem</label>
                    <input type="text" class="form-control" id="url" name="url" v-model="urlProduto">
                </div>
                <div class="col">
                    <div >
                        <label for="categoria" class="form-label">Categoria</label>
                        <select  class="form-select" aria-label="categoria" id="categoria" v-model="categoriaProduto">
                            <option disabled value="">Selecione...</option>
                            <option v-for="(item, index) in nomeCategoriaDoProduto" :key="index" :value="item.nome">{{ item.nome }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-auto text-center mt-3">
                <button type="submit" class="btn btn-primary ps-5 pe-5">Salvar</button>
            </div>
        </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import  { criaProduto } from '@/models/produto';
import { apiSalvaProduto } from '@/services/produto-service';
import { apiBuscaCategoria } from '@/services/categoria-service';

const nomeProduto = ref('');
const precoProduto = ref('');
const estoqueProduto = ref('');
const descricaoProduto = ref('');
const urlProduto = ref('');
const categoriaProduto = ref('');

function salvaProduto() {
    const novoProduto = criaProduto(
        nomeProduto.value,
        descricaoProduto.value,
        precoProduto.value,
        estoqueProduto.value,
        urlProduto.value,
        categoriaProduto.value
    );

    apiSalvaProduto(novoProduto)
        .then(() => {
            nomeProduto.value = '';
            precoProduto.value = '';
            estoqueProduto.value = '';
            descricaoProduto.value = '';
            urlProduto.value = '';
            categoriaProduto.value = '';
        })
};

const nomeCategoriaDoProduto: any = ref([]);

onMounted(() => {
    apiBuscaCategoria().then(c => nomeCategoriaDoProduto.value = c);
})

</script>