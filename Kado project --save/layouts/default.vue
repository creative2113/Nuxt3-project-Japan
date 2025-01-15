<template>
  <SharedScHeader @userClick="user.login()" :hideScrollY="200" :service="service" />
  <LazyLayoutHeader />
  <main>
    <nuxt-page />
  </main>
  <LazyLayoutFooter />
</template>
<script setup lang="ts">
import "swiper/swiper-bundle.css";
import "../style/global.scss";
const service = <any>ref(null);
const user = useUser()
onMounted( async () => {
  service.value = await (await fetch("/data/service.json")).json();
});
</script>
<style lang="scss" scoped>
main {
  position: relative;
  @media (max-width: 1024px) {
    max-width: 375px;
    width: 100%;
    margin-inline: auto;
    overflow-x: hidden;
    box-shadow: 0 3px 6px #00000030;
  }
}
</style>