<template>
  <div class="py-[60px] px-5">
    <div class="w-full rounded-[20px] shadow-[0_5px_20px_#00000040] border border-white bg-white overflow-hidden">
      <div class="flex justify-between items-center bg-[#AA99EE26] pr-5" :style="{ backgroundColor: `${color}26` }">
        <img :src="banner ? banner : '/images/101019661.webp'" width="156" height="99" alt="new lessons" loading="lazy"
          decoding="async" class="w-[156px] h-auto" />
        <h4 class="text-center text-[#AA99EE] text-xl font-bold ml-[-10px]" :style="{ color }"
          v-html="title ? title : 'ギターレッスンが<br>初めての方へ'"></h4>
      </div>
      <div class="py-5 px-3 w-full flex justify-between flex-wrap gap-y-[30px] items-start">
        <div v-for="text, i of 4" class="relative" :key="i">
          <div :class="i % 2 ? 'mt-5' : ''"
            class="bg-[#DDDDDD] rounded-[20px] shadow-[0_5px_20px_#00000040] overflow-hidden w-[150px] pt-[100px] relative">
            <p class="text-center bg-white w-full text-[#AA99EE] pt-3 pb-6 text-xs font-bold">キャチコピーが<br>入ります</p>
          </div>
          <img src="/images/gradient-arrow.svg" width="30" height="30" alt="new lessons" loading="lazy" decoding="async"
            class="w-[30px] h-auto absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  banner?: string;
  title?: string;
  color?: string;
}>();
</script>
