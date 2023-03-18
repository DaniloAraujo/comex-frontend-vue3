<template>
<Slide />
<ProdutosHome />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Slide from '@/views/home/Slide.vue';
import ProdutosHome from '@/views/home/ProdutosHome.vue';

export default defineComponent({
    name: 'Home',

    data() {
        return {}
    }
})
</script>