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
      <SwiperSlide v-for="(article, i) of articles" :key="i">
        <div class="w-[176px] bg-white rounded-[15px] shadow-lg overflow-hidden">
          <img :src="article.photo_url" :alt="article.title" width="176" height="98" loading="lazy" class="w-full h-auto" />
          <div class="p-2">
            <div class="flex justify-between text-[10px] text-[#999999]">
            <span>{{ article.date }}</span>
            <span>{{ article.name }}</span>
          </div>
          <h6 class="mt-2 text-xs">{{ article.title }}</h6>
          <p class="mt-3 text-[11px]">{{ article.description }}</p>
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
const articles : any = await(await fetch("/data/experarticles.json")).json();
</script>
