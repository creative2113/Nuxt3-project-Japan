<template>
  <div class="flex flex-col gap-5">
    <div v-for="{ banner, title, sub_title }, i of contents" :key="i" class="w-[355px] overflow-hidden relative"
      :class="i % 2 ? 'ml-auto rounded-l-[10px]' : 'mr-auto rounded-r-[10px]'">
      <img :src="banner" :alt="title" width="355" height="240" loading="lazy" decoding="async" class="w-full h-auto">
      <h4 class="text-xl font-bold text-white bg-black py-1 px-1.5 absolute bottom-[46px]"
        :class="i % 2 ? 'right-0' : 'left-0'">{{ title }}</h4>
      <h5 class="text-xs font-bold text-white bg-black py-1 px-1.5 absolute bottom-[17px]"
        :class="i % 2 ? 'right-0' : 'left-0'">{{ sub_title }}</h5>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  contents: {
    banner: string;
    title: string;
    sub_title: string;
  }[];
}>();
</script>
