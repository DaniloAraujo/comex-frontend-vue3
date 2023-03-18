<template>
  <header>
    <BarraNavegacao />
  </header>

  <main>
    <CadastroCategorias />
    <!-- <Home /> -->
  </main>

  <footer>
    <Rodape />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BarraNavegacao from '@/components/BarraNavegacao.vue';
import Rodape from '@/components/Rodape.vue';
import CadastroCategorias from '@/views/CadastroCategorias.vue';
import Home from '@/views/home/Home.vue';

export default defineComponent({
  name: 'App',

  components: {
    BarraNavegacao,
    Rodape,
    CadastroCategorias,
    Home
  },

  data() {
    return {}
  }
})

</script>

<style>
footer {
  background-color: #8FA8FF;
    margin-top: 150px;
}
</style>