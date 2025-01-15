<template>
  <div>
    <h4 class="min-w-[355px] mx-[-10px] text-center bg-white py-4 rounded-[10px] shadow-md font-bold text-[15px]">
      気軽に音楽に触れて欲しいから<br>
      楽器プレゼントで皆さんの音楽教室デビューを<br>
      全力でサポートします！
    </h4>
    <img src="/images/arrow-bottom-yellow.svg" width="36" height="50" alt="guitar" loading="lazy" decoding="async"
      class="mx-auto my-[18px]" />
    <div
      class="min-w-[355px] h-[135px] mx-[-10px] bg-[url('/images/guitar-first-content-title-bg.svg')] bg-center bg-contain bg-no-repeat pt-[19px] drop-shadow-[0_5px_20px_#00000040]">
      <p class="text-white text-center text-[18px] font-semibold">
        さらに
      </p>
      <h5 class="mt-4 w-max mx-auto bg-white text-[#FFBB66] text-[24px] font-semibold py-1 px-9 rounded-[10px]">
        安心の高品質！
      </h5>
    </div>
    <div class="guitar-first-swiper relative mt-[10px]">
      <Swiper
        :modules="[SwiperNavigation]"
        :loop="true"
        :navigation="{
          nextEl: '.guitar-first-swiper-button-next',
          prevEl: '.guitar-first-swiper-button-prev',
        }"
        :spaceBetween="-80"
        class="!overflow-visible"
      >
        <SwiperSlide v-for="i in 10" :key="i">
          <div class="min-w-[335px] pb-[10px]">
            <h5 class="bg-[#BBAA77] text-white text-[15px] text-center py-[10px] font-bold">アコースティックギター</h5>
            <img src="/images/guitar-first-content-banner.webp" width="335" height="310" alt="guitar" loading="lazy"
              decoding="async" class="mx-auto w-full h-auto" />
            <h6 class="text-center pt-4 text-sm font-bold">オリジナルアコースティックギター<br>マニューバーのこだわり</h6>
            <img src="/images/guitar-first-content-lists.webp" width="358" height="440" alt="guitar" loading="lazy"
              decoding="async" class="min-w-[358px] py-5 mx-[-11px]" />
            <p class="text-lg font-bold mt-9 text-center text-[#998855]">ここでご紹介した特徴はほんの一部!<br>是非、以下から詳しくご覧ください。</p>
            <button class="border border-black block w-[315px] mx-auto py-3 mt-[10px]">もっと詳しく見る</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <button aria-label="prev" class="guitar-first-swiper-button-prev absolute z-10 w-[50px] h-[50px] bg-[#BBAA77CC] -left-5 top-[400px]">
        <img src="/images/arrow/arrow-left.svg" width="30" height="30" alt="" loading="lazy" decoding="async" class="mx-auto" />
      </button>
      <button aria-label="next" class="guitar-first-swiper-button-next absolute z-10 w-[50px] h-[50px] bg-[#BBAA77CC] -right-5 top-[400px]">
        <img src="/images/arrow/arrow-right.svg" width="30" height="30" alt="" loading="lazy" decoding="async" class="mx-auto" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.guitar-first-swiper .swiper-slide {
  filter: brightness(0.5);
  background-color: white;
  position: relative;
  top: 62px;
  transition-duration: 0.5s;
}
.guitar-first-swiper .swiper-slide-active {
  filter: brightness(1) !important;
  position: relative;
  top: 0;
  z-index: 1;
}
</style>