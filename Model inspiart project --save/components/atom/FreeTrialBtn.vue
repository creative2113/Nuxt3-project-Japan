<script lang="ts" setup>
defineProps<{
  image: string
  width: number
  height: number
  text: string
}>();
</script>

<template>
  <button class="free-trial-btn flex justify-center items-center gap-[5px] w-[175px] h-[40px] rounded-full shadow-lg">
    <img :src="image" :alt="text" loading="lazy" decoding="async" :width="width" :height="height">
    <span class="text-white text-[14px] font-bold">{{ text }}</span>
  </button>
</template>