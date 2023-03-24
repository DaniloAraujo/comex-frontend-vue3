<template>
  <header>
    <BarraNavegacao />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Rodape />
  </footer>
</template>

<script setup lang="ts">
import BarraNavegacao from '@/components/BarraNavegacao.vue';
import Rodape from '@/components/Rodape.vue';
</script>

<style>
footer {
  background-color: #8FA8FF;
    margin-top: 150px;
}
</style>