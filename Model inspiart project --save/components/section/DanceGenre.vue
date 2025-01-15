<template>
  <div class="pt-7">
    <img src="/images/dance-genre-banner.webp" alt="genre" width="375" height="200" loading="lazy" decoding="async"
      class="w-full h-auto" />
    <div class="relative z-[1] -mt-[60px] bg-white rounded-t-[20px]">
      <h6 class="text-center font-bold text-[15px] pt-3.5 pb-2.5">ストリートダンスの基本プログラム、<br>HIP-HOP と Jazz！</h6>
      <div class="flex justify-between">
        <div class="relative">
          <img src="/images/dance-genre-image-1.webp" alt="genre" width="180" height="282" loading="lazy"
            decoding="async" class="w-[180px] h-auto rounded-r-[10px]" />
          <p class="absolute z-[1] text-xl font-bold bg-black text-white py-1 px-2.5 bottom-5 left-0">HIP-HOP</p>
        </div>
        <div class="relative">
          <img src="/images/dance-genre-image-2.webp" alt="genre" width="180" height="282" loading="lazy"
            decoding="async" class="w-[180px] h-auto rounded-l-[10px]" />
          <p class="absolute z-[1] text-xl font-bold bg-black text-white py-1 px-2.5 bottom-5 right-0">Jazz</p>
        </div>
      </div>
      <h6 class="text-center font-bold text-[15px] pt-[18px] pb-1">更に多彩なジャンルを用意！<br>やりたいダンスがきっと見つかる！</h6>
      <hr
        class="w-full border-t-white border-t-[40px] border-x-transparent border-x-[188px] absolute top-[100%] left-0 drop-shadow-xl" />
    </div>
    <div class="w-full pt-[50px] pb-[90px] relative">
      <img src="/images/dance-genre-offer-bg.webp" alt="genre" width="375" height="720" loading="lazy" decoding="async"
        class="w-full h-auto absolute top-0 left-0" />
      <div class="relative z-[1] flex flex-wrap justify-between px-[15px] gap-y-5">
        <div v-for="offer, i of offers" :key="i" class="relative w-max" :class="{ 'top-5': i % 3 === 1, 'top-10': i % 3 === 2 }">
          <img :src="offer.banner" :alt="offer.tip1" width="105" height="180" loading="lazy" decoding="async"
            class="w-[105px] h-auto rounded-[10px]" />
          <div class="absolute z-[1] text-xs font-bold bottom-4 left-0">
            <p class="bg-black text-white px-2.5 py-1 w-max">{{ offer.tip1 }}</p>
            <p class="bg-black text-white px-2.5 py-1 w-max">{{ offer.tip2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const offers = [
  {
    banner: "/images/dance-genre-offer-1.webp",
    tip1: "Rhythm",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-2.webp",
    tip1: "Theme Park",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-3.webp",
    tip1: "Lock",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-4.webp",
    tip1: "Contemporary",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-5.webp",
    tip1: "House",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-6.webp",
    tip1: "Cheer",
    tip2: "Dance",
  },
  {
    banner: "/images/dance-genre-offer-7.webp",
    tip1: "Breakin",
    tip2: "/ Acrobat",
  },
]
</script>
