<template>
  <LazyLayoutKimonoHeader />
  <main class="max-lg:w-[375px] max-lg:mx-auto overflow-hidden shadow-md">
    <nuxt-page />
  </main>
  <LazyLayoutFooter />
</template>
<script setup lang="ts">
import "swiper/swiper-bundle.css";
import "../style/global.scss";
</script>