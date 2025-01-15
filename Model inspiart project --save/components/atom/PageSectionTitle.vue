<template>
  <div :id="`0${id}`" class="text-center pt-10">
    <h2 class="text-[110px] leading-[133px] roboto-bold italic" :style="{color}">{{ id }}</h2>
    <h3 class="text-[24px] font-semibold" v-html="title"></h3>
    <h4 class="text-[14px] text-[#666666] mt-3" v-html="sub_title"></h4>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number;
  title: string;
  sub_title: string;
  color: string;
}>();
</script>