<script lang="ts" setup>
defineProps<{
    pictures: {
        btn_picture: string
        detailpicture_sp: string
        detailpicture_pc: string
    }[]
}>();
const crt_index = ref(0);
</script>

<template>
  <div class="max-w-[1000px] w-full mx-auto">
    <picture>
      <source media="(max-width: 1024px)" :srcset="pictures[crt_index].detailpicture_sp" type="image/webp">
      <img :src="pictures[crt_index].detailpicture_pc" alt="studio" width="1000" height="auto" loading="lazy" decoding="async" class="w-full h-auto object-cover">
    </picture>
    <div class="w-full flex justify-between gap-2 p-2.5 max-lg:overflow-x-auto max-lg:gap-[5px] max-lg:p-[5px]">
      <img v-for="picture, i of pictures" @click="crt_index = i" :src="picture.btn_picture" alt="studio button" width="115" height="64" loading="lazy" decoding="async" class="w-[115px] h-auto cursor-pointer max-lg:w-[70px]" :class="i === crt_index ? 'brightness-100' : 'brightness-50'">
    </div>
  </div>
</template>