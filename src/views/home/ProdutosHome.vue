<template>
    <section>
        <div class="container mt-5">
            <div class="promocoes">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style="fill: rgba(143, 168, 255, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
                <h3 class="titulo-promocoes">{{ titulo }}</h3>
            </div>
            <div class="cards">
                <div class="row" v-if="produtos">
                    <div class="col col-md-3 cardItens" v-for="(item, index) in produtos" :key="index">
                        <div class="card mx-1 my-4">
                            <img :src="item.url" class="card-img-top" :alt="`${item.nome} imagem`">
                            <div class="card-body text-center">
                                <h5 class="card-title"><strong>{{ item.nome }}</strong></h5>
                                <p class="card-text"><strong><span class="cifrao">$</span>{{ item.preco }}</strong></p>
                                <button class="btn btn-primary" @click.prevent="adicionarProduto.addProduto(item)">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>Carregando...</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { apiBuscaProduto } from '@/services/produto-service';
import { useCarrinhoStore } from '@/stores/carrinho.js';

const adicionarProduto = useCarrinhoStore();

const titulo = 'Produtos mais vendidos';
const produtos: any = ref(null);


onMounted(() => {
    apiBuscaProduto().then(p => produtos.value = p);
});
</script>

<style>
.promocoes {
    display: flex;
    align-items: center;
    justify-content: center;
}

.titulo-promocoes {
    color: #8fa8ff;
}

.cardItens {
    height: 350px;
    width: 270px;
}

.card img {
    height: 180px;  
}

.cifrao {
    color: black;
}
</style>