<template>
  <div class="relative pt-9 w-[220px] max-lg:flex max-lg:w-full justify-between" :class="ranking === 2 && 'max-lg:flex-row-reverse'">
    <div class="relative max-lg:-mx-10">
      <img :src="user.image" :alt="user.title" loading="lazy" decoding="async" class="w-[210px] aspect-square" />
      <img v-if="ranking === 1" src="/images/ranking-flower.svg" loading="lazy" alt="ranking 1" class="w-[73px] h-[63px] absolute right-0 top-0 max-lg:-right-4 max-lg:top-4" />
      <img v-if="ranking === 2" src="/images/obj-white-pink.svg" loading="lazy" alt="ranking 2" class="w-[60px] h-[58px] absolute right-0 bottom-0 max-lg:-left-4 max-lg:top-4" />
      <img v-if="ranking === 3" src="/images/obj-color.svg" loading="lazy" alt="ranking 3" class="w-[60px] h-[58px] absolute right-0 top-0 max-lg:-right-4 max-lg:top-4" />
      <img v-if="ranking === 1" src="/images/ranking-title-1.svg" loading="lazy" alt="ranking1" class="absolute left-1/2 -translate-x-1/2 top-1/2" />
      <img v-if="ranking === 2" src="/images/ranking-title-2.svg" loading="lazy" alt="ranking2" class="absolute left-1/2 -translate-x-1/2 top-1/2" />
      <img v-if="ranking === 3" src="/images/ranking-title-3.svg" loading="lazy" alt="ranking3" class="absolute left-1/2 -translate-x-1/2 top-1/2" />
    </div>
    <div class="flex flex-col items-center mt-[16px]" :class="ranking === 2 ? 'max-lg:items-start' : 'max-lg:items-end'">
      <span class="absolute text-[54px] top-0 left-0 leading-snug futura-pt font-semibold text-[#D87E80] max-lg:relative">0{{ ranking }}</span>
      <h3 class="text-xl text-center" :class="ranking === 2 ? 'max-lg:text-left' : 'max-lg:text-right'" v-html="user.title" />
      <h5 class="relative text-xs text-center mt-[10px] max-lg:pr-3 max-lg:text-left" :class="ranking === 3 && 'max-lg:w-[160px] text-nowrap max-lg:text-wrap'" v-html="user.description" />
      <nuxt-link :to="`#${user.link}`" aria-label="feature" class="w-10 aspect-square shadow-md flex items-center justify-center rounded-full bg-[#E39597] mt-[13px] max-lg:absolute max-lg:-bottom-5" :class="ranking === 2 ? 'max-lg:right-11' : 'max-lg:left-11'">
        <img src="/images/ranking-more.svg" alt="more" loading="lazy" class="w-3.5 aspect-square" />
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  ranking: number
  user: {
    image: string
    link: string
    title: string
    description: string
  };
}>();
</script>
