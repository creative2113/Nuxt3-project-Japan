<template>
  <div>
    <h3 class="w-max mx-auto text-transparent text-2xl roboto-black tracking-[0.3em] bg-clip-text italic" :style="{ backgroundImage: `linear-gradient(to right, ${color_from}, ${color_to})` }">{{ en_title }}</h3>
    <h4 class="text-2xl mt-2 text-center font-bold text-black tracking-widest" v-html="title"></h4>
    <h5 class="text-xs text-center font-bold mt-3" v-html="sub_title"></h5>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  en_title: string;
  title: string;
  sub_title?: string;
  color_from: string;
  color_to: string;
}>();
</script>
