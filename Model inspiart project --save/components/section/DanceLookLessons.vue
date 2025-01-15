<script lang="ts" setup>
const bandpanels = ref();
bandpanels.value = await(await fetch("/data/band.json")).json();
</script>

<template>
  <div class="clip-background pt-16 pb-5 bg-gradient-to-b from-[#AA77CC] to-[#EE66BB]">
    <h2 class="text-xl text-center text-white font-bold">レッスン風景を覗いてみよう!</h2>
    <!-- 「大人気！バンドやろうよEYS音楽教室の原点となったとても濃いYoko-Chin Bandプログラム」のカルーセル -->
    <OrganBandPanels :panels="bandpanels" />
    <!-- /「大人気！バンドやろうよEYS音楽教室の原点となったとても濃いYoko-Chin Bandプログラム」のカルーセル -->
    <button class="text-xl text-white bg-black py-3 px-[70px] block mx-auto mt-3 relative roboto-bold italic">
      VIEW MORE
      <img src="/images/arrow/arrow-right.svg" alt="arrow" width="30" height="30" loading="lazy" decoding="async" class="absolute right-5 top-1/2 -translate-y-1/2" />
    </button>
  </div>
</template>

<style scoped>
.clip-background {
  clip-path: polygon(0 0, 50% 40px, 100% 0, 100% 100%, 0 100%);
}
</style>
