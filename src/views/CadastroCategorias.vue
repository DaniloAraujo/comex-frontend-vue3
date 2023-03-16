<template>
        <section class="container">
            <form id="formulario-categoria">
                <div class="text-center mt-5">
                    <h2>Nova Categoria</h2>
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-md-6 d-flex">
                            <input type="text" class="form-control rounded-0 rounded-start-2" id="form-nome"
                                name="form-nome" v-model="categoriaNome">
                            <button type="submit" id="enviar" @click.prevent="salvaCategorias(categoriaNome)"
                                class="btn btn-primary rounded-0 rounded-end-2">Salvar</button>
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
                    <tbody v-for="(item, index) in categorias" :key="index">
                        <tr>
                            <td>{{ item.nome }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.criacao }}</td>
                            <td>
                                <button type="button" class="btn" id="excluir" @click="exluiCategoria(item.id)" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</template>

<script setup lang="ts">
import { criaCategoria, type Categoria } from '@/models/categoria.js';
import { ref } from 'vue';

let categoriaNome: string = '';

let categorias: any = ref<Categoria[]>([]);

function salvaCategorias(nome: string) {
    categorias.value.push(criaCategoria(nome));
    console.log(categorias.value);
}

function exluiCategoria(id: string) {
    let novaLista = categorias.value.filter((objeto: any) => objeto.id !== id);
    categorias.value = novaLista;
}

</script>