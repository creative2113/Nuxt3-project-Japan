<template>
  <p class="flex items-center gap-1 text-[10px] text-[#CCCCCC] bg-[#444444] font-semibold px-[10px] py-2">
    <template v-for="link, i of links" :key="i">
      <nuxt-link :to="link.path" :class="i === links.length - 1 && 'text-white'">{{ link.name }}</nuxt-link>
      <span v-if="i !== links.length - 1">＞</span>
    </template>
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  links: {
    name: string;
    path: string;
  }[];
}>();
</script>
