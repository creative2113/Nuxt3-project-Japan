<template>
  <div :id="`0${id}`" class="text-center pt-10">
    <h2 class="text-[110px] leading-[133px] roboto-bold italic w-max px-4 mx-auto bg-gradient-to-b from-[#AA77CC] to-[#EE66BB] bg-clip-text text-transparent">{{ id }}</h2>
    <h3 class="text-[28px] font-bold text-black" v-html="title"></h3>
    <h4 class="text-[13px] font-semibold mt-3" v-html="sub_title"></h4>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number;
  title: string;
  sub_title: string;
}>();
</script>