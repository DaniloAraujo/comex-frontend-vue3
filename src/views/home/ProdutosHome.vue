<template>
    <section section>
        <div class="container mt-5">
            <div class="promocoes">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style="fill: rgba(143, 168, 255, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
                <h3 class="titulo-promocoes">{{ titulo }}</h3>
            </div>
            <div class="cards">
                <div class="row">
                    <div class="col col-md-3 cardItens" v-for="(item, index) in produtos" :key="index">
                        <div class="card mx-1 my-4">
                            <img :src="item.url" class="card-img-top" :alt="`${item.nome} imagem`">
                            <div class="card-body text-center">
                                <h5 class="card-title"><strong>{{ item.nome }}</strong></h5>
                                <p class="card-text"><strong><span class="cifrao">$</span>{{ item.preco }}</strong></p>
                                <a href="/produto.html" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProdutosHome',

    data() {
        return {
            titulo: 'Produtos mais vendidos',
            produtos: [
                {
                   "id": "54a18686-989c-4c98-a3b4-3b9fdac2bf9d",
                   "nome": "Placa-mãe",
                   "descricao": "Placa-mãe sinistrona para gamer",
                   "preco": "2.000",
                   "quantidadeEmEstoque": "5",
                   "categoria": "4c9178e4-3d7a-4231-8c42-1697aa8836b0",
                   "url": "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
                   "criacao": "2023-03-06T17:45:00.000Z"
                 },
                 {
                   "id": "f7d5a47e-034c-4103-bce2-00eb0d14e887",
                   "url": "https://images.unsplash.com/photo-1615411836704-2c1636331bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2656&q=80",
                   "nome": "Celular",
                   "preco": "3.500",
                   "criacao": "2023-03-06T21:57:52.341Z",
                   "categoria": "3f53c030-9a14-473d-a5ec-d1609e8ff21b",
                   "descricao": "Celular topzeira",
                   "quantidadeEmEstoque": 30
                 }
             ]
        }
    }
})

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