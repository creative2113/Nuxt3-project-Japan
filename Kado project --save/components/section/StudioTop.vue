<template>
  <section class="pt-[100px]">
    <div
      class="w-full py-[104px] lg:bg-[url('/images/top-title-5.svg')] bg-top bg-no-repeat lg:bg-cover max-lg:py-24 max-lg:bg-[url('/images/top-title-5-sp.svg')] max-lg:bg-contain relative z-10"
    >
      <h2 class="text-[30px] font-bold text-center max-lg:text-xl">
        華道＆アレンジフラワーを<br />学ぶ最高の空間
      </h2>
    </div>
    <ContentStudiosSlider class="max-lg:-mt-16" />
    <OnlineAndStudios :regions="regions" />
  </section>
</template>

<script lang="ts" setup>
const regions = await(await fetch("/data/regions.json")).json();
</script>
