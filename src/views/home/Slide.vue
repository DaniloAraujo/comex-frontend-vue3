<template>
    <section>
        <div class="container mt-3">
            <div id="auto-slide" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#indicadores-slide" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#indicadores-slide" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#indicadores-slide" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/images/gamer.jpg" class="d-block w-100" alt="banner central 1">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>{{ promocoes }}</h2>
                                <p class="fs-4 text-light">{{ subPromocoes }}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/images/razer.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>{{}}</h2>
                                <p class="fs-4 text-light">{{}}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/images/personagens.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>{{}}</h2>
                                <p class="fs-4 text-light">{{}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const promocoes = 'CONFIRA AS PROMOÇÕES';
const subPromocoes = 'Monte seu setup';
</script>