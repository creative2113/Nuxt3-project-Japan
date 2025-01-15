<template>
  <div class="relative">
    <img
      :src="banner"
      :alt="en_title"
      width="375px"
      height="490"
      loading="lazy"
      decoding="async"
      class="w-full h-auto relative"
    />
    <div class="absolute z-10 top-0 left-0 w-full pt-[23px] text-white text-center">
      <h1 class="text-[30px] roboto-bold tracking-widest">{{ en_title }}</h1>
      <hr class="border-t border-t-white w-5 mx-auto mt-4" />
      <h2 class="text-sm font-bold mt-4">{{ title }}</h2>
      <h3 class="text-xl mt-[18px] mamelon" v-html="sub_title"></h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  banner: string;
  en_title: string;
  title: string;
  sub_title: string;
}>();
</script>
