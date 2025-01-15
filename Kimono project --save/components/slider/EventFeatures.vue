<template>
  <div class="w-full max-w-[1000px] mx-auto relative max-lg:px-5">
    <Swiper
      :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      }"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(feature, i) of features" :key="i">
        <div class="w-[150px] h-[266px] rounded-[20px] overflow-hidden shadow-lg relative">
          <img :src="feature.photo_url" :alt="feature.from" class="relative z-10 w-full h-full object-center object-contain" />
          <img :src="feature.bg_url" :alt="feature.from" class="absolute top-0 left-0 w-full h-full brightness-50 blur-sm" />
          <div class="absolute w-full h-1/2 bg-gradient-to-t from-[#000000] to-[#00000001] bottom-0 left-0 z-20 text-white flex flex-col justify-end p-2">
            <p class="text-sm leading-4">{{ feature.text }}</p>
            <div class="flex gap-1 items-center">
              <img :src="feature.avatar_url" :alt="feature.from" class="w-[40px] h-[40px] rounded-[50%]" />
              <div>
                <p class="text-[10px]">{{ feature.from }}</p>
                <h6 class="text-[10px]">{{ feature.features }}</h6>
              </div>
            </div>
          </div>
          <span v-if="feature.type === 'video'" class="flex justify-center items-center w-[75px] h-[75px] bg-[#00000099] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 after:block after:border-y-[14px] after:border-y-transparent after:border-l-[26px] after:border-l-white"></span>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-control">
      <div class="swiper-button-prev after:!hidden bg-[#45454580] !w-[50px] !h-[50px] !-left-20">
        <img
          src="/images/arrow-left.svg"
          alt="arrow left"
          loading="lazy"
          width="30"
          height="15"
        />
      </div>
      <div class="swiper-button-next after:!hidden bg-[#45454580] !w-[50px] !h-[50px] !-right-20">
        <img
          src="/images/arrow-right.svg"
          alt="arrow right"
          width="30"
          loading="lazy"
          height="15"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const features : any = await(await fetch("/data/eventfeatures.json")).json();
</script>
