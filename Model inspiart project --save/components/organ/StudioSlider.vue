<template>
  <div class="w-full p-5">
    <h4
      class="bg-[url('/images/studio-slider-title.svg')] bg-contain bg-no-repeat drop-shadow-xl w-[243px] h-[132px] pt-[18px] text-center text-white text-[18px] font-semibold relative z-10"
    >
      InspiartZのスタジオは、<br />
      何処もお洒落で綺麗！<br />
      新スタジオも続々♪
    </h4>
    <div
      class="relative bg-white rounded-[20px] overflow-hidden shadow-xl mt-[-14px]"
    >
      <img
        :src="images[activeIndex]"
        alt="studio"
        width="335"
        height="250"
        loading="lazy"
        decoding="async"
        class="w-full h-auto"
      />
      <div class="p-[10px]">
        <Swiper
          :modules="[SwiperNavigation]"
          :slides-per-view="4"
          :space-between="7"
          @slideChange="activeIndex = $event.realIndex"
        >
          <SwiperSlide v-for="(image, i) in images" :key="i">
            <img
              :src="image"
              width="73"
              height="55"
              alt="studio"
              loading="lazy"
              decoding="async"
              class="w-[73px] h-auto rounded-[10px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "images/studio-slide-thumb-1.webp",
  "images/studio-slide-thumb-2.webp",
  "images/studio-slide-thumb-3.webp",
  "images/studio-slide-thumb-4.webp",
  "images/studio-slide-thumb-1.webp",
  "images/studio-slide-thumb-2.webp",
  "images/studio-slide-thumb-3.webp",
  "images/studio-slide-thumb-4.webp",
];

const activeIndex = ref(0);
</script>
