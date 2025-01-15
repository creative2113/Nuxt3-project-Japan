<template>
  <div class="w-full flex flex-col gap-5">
    <MoleOfferStage v-for="{ title, title_bg, title_w, title_h, contents }, i of stages" :key="i" :stage="{ id: i, title, title_bg, title_w, title_h, contents }" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  stages: {
    title: string;
    title_bg: string;
    title_w: number;
    title_h: number;
    contents: {
      banner: string;
      title: string;
    }[];
  }[];
}>();
</script>
