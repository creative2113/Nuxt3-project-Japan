<script lang="ts" setup>
interface Studio {
  title: string;
  banner_url: string;
}
defineProps<{
  studios: Studio[]
}>();
const emit = defineEmits(['SetActive']);
</script>

<template>
  <Swiper :modules="[
    SwiperNavigation,
    SwiperAutoplay,
    SwiperEffectCreative,
  ]" :loop="true" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }" :breakpoints="{
        320: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }" :autoplay="{
        delay: 10000,
      }"
      @slideChange="emit('SetActive', $event.activeIndex)">
    <SwiperSlide v-for="(studio, i) of studios" :key="i">
      <img :src="studio.banner_url" :alt="studio.title" width="120" height="120" loading="lazy" decoding="async"
        class="w-[120px] h-[120px] max-lg:w-[60px] max-lg:h-[60px] object-center object-cover" />
    </SwiperSlide>
  </Swiper>
  <div class="swiper-control">
    <div class="swiper-button-prev !-left-2.5 lg:!-left-[100px] flex justify-center items-center !w-[50px] !h-[50px] bg-[#45454580] after:hidden max-lg:w-10 max-lg:h-10">
      <img src="/images/arrow-left.svg" alt="arrow left" loading="lazy" width="30" height="15" class="max-lg:w-[18px] max-lg:h-[7px]" />
    </div>
    <div class="swiper-button-next !-right-2.5 lg:!-right-[100px] flex justify-center items-center !w-[50px] !h-[50px] bg-[#45454580] after:hidden max-lg:w-10 max-lg:h-10">
      <img src="/images/arrow-right.svg" alt="arrow right" loading="lazy" width="30" height="15" class="max-lg:w-[18px] max-lg:h-[7px]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide-active {
  >img {
    border: solid 4px white;
    @media only screen and (max-width: 1024px) {
      border: solid 2px white;
    }
  }
}
</style>
