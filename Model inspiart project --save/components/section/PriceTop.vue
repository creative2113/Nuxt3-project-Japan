<template>
  <div class="pt-10">
    <div class="w-[335px] mx-auto drop-shadow-[0_5px_20px_#00000040]">
      <div class="w-full flex rounded-[18px] bg-gradient-to-t from-[#FF88BB] to-[#FF5555] overflow-hidden">
        <img src="/images/price-style-image-1.webp" alt="logo" loading="lazy" decoding="async" width="226" height="180" class="w-[226px] h-auto" />
        <div class="w-[109px] content-center">
          <p class="text-base text-center font-bold text-white">マンツーマン<br>レッスン</p>
          <h4 class="text-[24px] text-center text-white font-bold">月<span class="text-[40px] roboto-bold">2</span>回</h4>
        </div>
      </div>
      <div class="w-[70px] h-[70px] mx-auto rounded-full shadow-lg flex justify-center items-center bg-white my-[-20px] z-10 relative">
        <img src="/images/plus-pink.svg" alt="plus" width="40" height="40" loading="lazy" decoding="async" class="w-[40px] h-auto" />
      </div>
      <div class="w-full flex rounded-[18px] bg-gradient-to-t from-[#66DDDD] to-[#77BBDD] overflow-hidden">
        <img src="/images/price-style-image-2.webp" alt="logo" loading="lazy" decoding="async" width="226" height="180" class="w-[226px] h-auto" />
        <div class="w-[109px] content-center">
          <p class="text-base text-center font-bold text-white">ステージ<br>レッスン</p>
          <h4 class="text-[24px] text-center text-white font-bold">月<span class="text-[40px] roboto-bold">1</span>回</h4>
        </div>
      </div>
      <img src="/images/arrow-bottom-pink-bold.svg" alt="plus" width="99" height="44" loading="lazy" decoding="async" class="w-[99px] h-auto mx-auto" />
      <div class="flex justify-center text-center">
        <div class="w-[230px] h-[230px] rounded-full bg-gradient-to-r from-[#FF88BB] to-[#FF6D85] overflow-hidden">
          <div class="w-full bg-white text-[#FF88BB] font-bold pt-7 pb-[7px]">
            <p class="text-[15px]">中高大生限定の学割</p>
            <h6 class="text-[30px] leading-7">Z学割!!</h6>
          </div>
          <p class="font-bold text-white tracking-wider">
            <span class="text-[40px] roboto-bold">9,800</span>
            <span class="text-sm">円〜/月</span>
          </p>
          <hr class="border-t-white w-[200px] border-t-2 mx-auto">
          <hr class="border-t-white w-[200px] border-t-2 mx-auto mt-[2px]">
          <p class="text-[10px] text-center text-white mt-4">※ 地域・コースによって<br>
            金額は変動します。</p>
        </div>
        <div class="w-[100px] h-[100px] rounded-full bg-white overflow-hidden text-center content-center -ml-10 shadow-md">
          <p class="text-xs">さらに</p>
          <h5 class="roboto-bold text-[40px] text-[#FC88A7] leading-10">¥0</h5>
          <p class="text-xs">補講無料</p>
        </div>
      </div>
    </div>
    <OrganFreeGifts :gifts="id === 4 ? vocal_gifts : gifts" />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  id?: number;
}>();
const gifts = [
  {
    icon: "/images/gift-union-1.svg",
    title: "特別講座",
  },
  {
    icon: "/images/gift-union-2.svg",
    title: "楽器プレゼント",
  },
  {
    icon: "/images/gift-union-3.svg",
    title: "写真撮影1回",
  },
  {
    icon: "/images/gift-union-4.svg",
    title: "アーティスト登録",
  }
];
const vocal_gifts = [
  {
    icon: "/images/gift-union-1.svg",
    title: "特別講座",
  },
  {
    icon: "/images/gift-vocal-2.svg",
    title: "レコーディング<br>1回",
  },
  {
    icon: "/images/gift-vocal-3.svg",
    title: "オーディション<br>参加費",
  },
  {
    icon: "/images/gift-union-3.svg",
    title: "写真撮影1回",
  },
  {
    icon: "/images/gift-union-4.svg",
    title: "アーティスト登録",
  },
];
</script>