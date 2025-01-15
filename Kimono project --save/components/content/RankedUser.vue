<template>
  <span v-if="ranking%2" class="block border-l border-[#DDDDDD] w-[1px] h-[130px] mt-2.5 max-lg:hidden" />
  <img src="/images/about-line-sp.svg" width="335" height="20" loading="lazy" decoding="async" class="w-full lg:hidden" />
  <div class="flex w-[325px] justify-between items-center py-2.5 max-lg:w-full" :class="ranking%2 && 'max-lg:flex-row-reverse'">
    <div class="relative" :class="ranking%2 && 'max-lg:text-right'">
      <span class="text-[32px] leading-8 futura-pt font-semibold text-[#D87E80]">0{{ ranking }}</span>
      <div class="mt-3">
        <h3 class="text-lg leading-5 text-[#454545]" v-html="user.title" />
        <h5 class="text-[11px] leading-5 text-[#454545] mt-1">{{ user.description }}</h5>
      </div>
    </div>
    <div class="flex items-center flex-col">
      <img :src="user.image" :alt="user.title" loading="lazy" decoding="async" class="w-[120px] aspect-square" />
      <nuxt-link :to="`#${user.link}`" aria-label="ranking" class="w-[26px] aspect-square shadow-md flex items-center rounded-full justify-center -mt-[13px] relative bg-[#E39597]">
        <img src="/images/ranking-more.svg" alt="more" class="w-2 aspect-square" />
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
  }
}>()
</script>
