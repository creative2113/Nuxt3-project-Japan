<template>
  <div class="w-full max-w-[740px] mx-auto *:text-center">
    <h3 class="text-2xl font-bold max-lg:text-xl">代官山スタジオは“最新”が満載！</h3>
    <h4 class="text-base mt-[27px] font-light max-lg:text-sm max-lg:mt-[17px]">スタジオ以外の部屋も充実しています！</h4>
    <div class="flex justify-between mt-[35px] flex-wrap max-lg:gap-[18px] max-lg:mt-[25px]">
      <div v-for="pack, i of packs" class="w-[170px] max-lg:w-[158px]">
        <img :src="pack.image" :alt="pack.title" width="170" height="170" loading="lazy" decoding="async" class="w-full h-auto max-lg:border-[5px] max-lg:border-white max-lg:shadow-[0_0_6px_#00000033]" />
        <h5 class="text-[10px] text-[#9999EE] mt-[11px] roboto">{{ pack.en_title }}</h5>
        <hr class="w-[30px] h-[1px] bg-[#888888] border-none mx-auto mt-[10px]" />
        <h6 class="text-sm text-center font-semibold mt-[11px]">{{ pack.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const packs = [
  { title: "エントランス", en_title: "ENTRANCE", image: "/images/studio-detail-pack-1.webp" },
  { title: "語学ルーム", en_title: "ENGLISH ROOM", image: "/images/studio-detail-pack-2.webp" },
  { title: "ピアノルーム", en_title: "PIANO ROOM", image: "/images/studio-detail-pack-3.webp" },
  { title: "アートルーム", en_title: "ART ROOM", image: "/images/studio-detail-pack-4.webp" },
];
</script>
