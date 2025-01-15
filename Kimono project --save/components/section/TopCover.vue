<template>
  <section class="w-full overflow-hidden relative">
    <div class="max-w-[1000px] mx-auto w-full">
      <div class="absolute z-20 top-2.5 max-lg:hidden">
        <LazySharedCoverLink :links="links" />
      </div>
      <LazyItemsCircles />
    </div>
    <SliderTopMain />
  </section>
</template>

<script lang="ts" setup>
const links = [
  {
    title: "ON-girl着付け教室トップ",
    url: "/",
  },
  {
    title: "テキスト",
    url: "/",
  },
];
</script>