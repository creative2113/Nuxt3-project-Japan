<script setup lang="ts">
defineProps<{
  en_title: string;
  title: string;
  sub_title?: string;
  description?: string;
}>();
</script>
<template>
  <h2
    class="text-center text-[16px] roboto-black tracking-[0.5em] text-[#6688DD]"
  >
    {{ en_title }}
  </h2>
  <h3 v-html="title" class="text-center text-[24px] mt-[10px] font-bold"></h3>
  <h4 v-if="sub_title" v-html="sub_title" class="text-center text-[14px] text-[#666666] mt-[16px]"></h4>
  <p v-if="description" v-html="description" class="text-center text-[14px] mt-[16px]"></p>
</template>
