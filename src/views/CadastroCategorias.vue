<template>
        <section class="container">
            <form id="formulario-categoria" @submit.prevent="salvaCategoria">
                <div class="text-center mt-5">
                    <h2>{{ titulo }}</h2>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-md-6 d-flex">
                            <input type="text" class="form-control rounded-0 rounded-start-2" id="form-nome"
                                name="form-nome" v-model="categoriaNome">
                            <button type="submit" class="btn btn-primary rounded-0 rounded-end-2">Salvar</button>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </form>
        </section>

        <section class="mt-5 container">
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Status</th>
                            <th scope="col">Data de criação</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in arrCategorias" :key="item.id">
                            <td>{{ item.nome }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.criacao }}</td>
                            <td>
                                <button class="btn btn-outline-primary btn-sm m-1" @click.prevent="editaNomeCategoria(item)">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm m1" @click.prevent="excluiCategoria(item)">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { criaCategoria, type Categoria } from '@/models/categoria.js';
import { apiSalvaCategoria, apiBuscaCategoria, apiExcluiCategoria, apiEditaCategoria } from '@/services/categoria-service';

export default defineComponent({
    name: 'CadastroCategorias',

    data() {
        return {
            titulo: 'Nova Categoria',
            categoriaNome: '',
            arrCategorias: [] as Categoria[]
        }
    },

    methods: {
        salvaCategoria() {
        let novaCategoria = criaCategoria(this.categoriaNome);

        apiSalvaCategoria(novaCategoria)
            .then((categoriaCadastrada: Categoria) => {
                this.categoriaNome = '';
                this.arrCategorias.push(categoriaCadastrada);
            })
        },

        excluiCategoria(categoria: Categoria) {
            apiExcluiCategoria(categoria)
                .then(() => {
                    this.arrCategorias = this.arrCategorias.filter(c => c.id !== categoria.id);
                });
        },

        editaNomeCategoria(categoria: Categoria) {
            let novoNome = prompt('Digite o novo nome da categoria:');
            if (novoNome && novoNome.trim().length > 2) {
                categoria.nome = novoNome;
                apiEditaCategoria(categoria)
            }
        }
    },

    mounted() {
        apiBuscaCategoria()
            .then((categorias: any) => this.arrCategorias = categorias);
    }
})

</script>