<template>
  <div class="max-w-[576px] w-full mx-auto relative">
    <Swiper
      :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1.7,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(player, i) of players" :key="i">
        <div class="w-[176px] bg-white rounded-[15px] shadow-lg overflow-hidden">
          <img :src="player.photo_url" :alt="player.en_name" width="176" height="145" loading="lazy" class="w-full h-auto" />
          <div class="py-2 px-4">
            <h5 class="text-lg text-center text-[#DDDDDD] -mb-4">{{ player.en_name }}</h5>
            <h6 class="text-base text-center text-[#222222] mb-2.5">{{ player.ja_name }}</h6>
            <p class="text-[11px]">{{ player.job }} / {{ player.age }} /</p>
            <p class="text-[11px]">挑戦楽器：{{ player.ob_type }}</p>
          </div>
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
const players : any = await(await fetch("/data/experplayers.json")).json();
</script>
