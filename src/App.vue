<template>
  <header>
    <BarraNavegacao />
  </header>

  <main>
    <!-- <CadastroCategorias /> -->
    <Home />
  </main>

  <footer>
    <Rodape />
  </footer>
</template>

<script setup lang="ts">
import BarraNavegacao from '@/components/BarraNavegacao.vue';
import Rodape from '@/components/Rodape.vue';
import CadastroCategorias from '@/views/CadastroCategorias.vue';
import Home from '@/views/home/Home.vue';

</script>

<style scoped>
footer {
  background-color: #8FA8FF;
    margin-top: 150px;
}
</style>