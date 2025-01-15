<template>
  <div class="pb-[50px]">
    <div class="relative w-[335px] mx-auto shadow-[0_5px_20px_#00000040] bg-white py-5 rounded-[20px] mt-[50px]">
      <div class="flex justify-between items-start px-5">
        <h5 :style="{ backgroundImage: `url('/images/support-item-title-3.svg')` }"
          class="w-[140px] h-[143px] pb-3 text-center text-white font-bold content-center -mt-10 -mx-[30px] drop-shadow-lg">
          ピアノ・ギ<br>
          ター・ドラムなど<br>
          豊富なオプ<br>
          ション講座も！
        </h5>
        <p class="text-xs w-[170px]">
          昨今のアーティストは、歌のみならず、楽器などでも様々なパフォーマンスを求められます。Inspiartでは、ピアノ・ギター・ドラム・DTMなど豊富なオプション講座を用意。
        </p>
      </div>
      <img src="/images/support-item-banner-3.webp" alt="banner" width="335" height="232"
        class="w-full h-auto border-2 border-white mt-10" />
      <img src="/images/support-item-special-3.svg" alt="special" width="315" height="234"
        class="w-[315px] h-auto mx-auto mt-3" />
      <div class="w-full">
        <h6 class="text-sm text-white bg-[#6688DD] font-bold pl-5 pr-7 py-1 rounded w-max -ml-2.5 clip-left">月１〜４回のオプション講座を選択可能</h6>
        <ul class="w-[315px] grid grid-cols-2 gap-[1px] bg-[#EEEEEE] pb-[1px] mx-auto mt-5">
          <li v-for="item, i of [
            'レッスン回数',
            'レッスン料金',
            '1',
            '¥ 6,500',
            '2',
            '¥ 12,000',
            '4',
            '¥ 23,000',
          ]" :key="i" class="text-xs text-center py-[7px]" :class="i < 2 ? 'font-bold':'bg-white'">{{ item }}</li>
        </ul>
        <h6 class="text-sm text-white bg-[#6688DD] font-bold pl-5 pr-7 py-1 rounded w-max -mr-2.5 ml-auto mt-5 clip-right">充実のオプション講座から自由に選択可能</h6>
      </div>
      <div class="flex justify-between items-start gap-y-[10px] flex-wrap w-[315px] mx-auto py-5">
        <img v-for="image, i of courses" :key="i" :src="image" alt="course" :width="150" :height="140"
          class="w-[150px] h-auto drop-shadow-md" :class="i % 2 && ['relative top-[60px]']"/>
      </div>
      <p class="text-[10px] text-[#666666] px-7">※ レッスンはいずれも1回55分になります</p>
      <p class="text-[10px] text-[#666666] px-7">※ 毎月好きな講座を選択し、変更も自由です</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const courses = [
  '/images/optional-courses-item-1.webp',
  '/images/optional-courses-item-2.webp',
  '/images/optional-courses-item-3.webp',
  '/images/optional-courses-item-4.webp',
  '/images/optional-courses-item-5.webp',
  '/images/optional-courses-item-6.webp',
  '/images/optional-courses-item-7.webp',
  '/images/optional-courses-item-8.webp',
  '/images/optional-courses-item-9.webp',
]
</script>

<style scoped>
.clip-left {
  clip-path: polygon(0 0, 102% 0, calc(100% - 10px) 100%, 0 100%);
}

.clip-right {
  clip-path: polygon(10px 0, 100% 0, 100% 100%, -1% 100%);
}
</style>
