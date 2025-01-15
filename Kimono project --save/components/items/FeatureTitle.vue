<script lang="ts" setup>
defineProps<{
  ranking: number;
  title: string;
  image: string;
  main_title: string;
  sub_title: string;
}>();
</script>
<template>
  <section class="w-full pt-[270px] mt-[100px] max-w:pt-[254px]">
    <span class="bg-[url('/images/feature-title-tile.svg')] bg-contain bg-repeat-x block w-full h-[30px]" />
    <div class="flex flex-col justify-center items-center bg-[#EEB0B0] pt-[116px]">
      <div class="relative w-80 h-80 -mt-80">
        <span class="futura-pt text-[80px] absolute text-[#D87E80] -mt-16">0{{ ranking }}</span>
        <img :src="image" alt="present" width="320" height="320" loading="lazy" class="w-full h-full" />
        <h2
          class="gallatone text-[90px] leading-[100px] text-center origin-center -rotate-[5deg] text-white absolute -translate-x-1/2 left-1/2 -bottom-4" :class="ranking === 6 ? 'flex flex-nowrap' : ''" v-html="title" />
      </div>
      <div class="max-w-[800px] w-full py-[30px] max-lg:max-w-[335px]">
        <ItemsMainTitle :opposite="ranking % 2 == 0">
          <div class="min-w-max">
            <h3 class="text-[28px] leading-[36px] text-white text-center" v-html="main_title" />
            <h5 class="text-[18px] text-white text-center mt-6 max-lg:text-[13px]" v-html="sub_title" />
          </div>
        </ItemsMainTitle>
      </div>
    </div>
    <span class="bg-[url('/images/feature-title-tile.svg')] bg-contain bg-repeat-x block w-full h-[30px]" />
  </section>
</template>
