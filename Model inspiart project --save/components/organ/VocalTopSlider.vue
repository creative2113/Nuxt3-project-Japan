<template>
  <div class="top-pagenation-swiper">
    <Swiper :modules="[SwiperPagination]" :slides-per-view="1" :loop="true" :pagination="true">
      <SwiperSlide
        v-for="src, i of ['/images/vocal-top-banner-1.webp', '/images/vocal-top-banner-2.webp', '/images/vocal-top-banner-3.webp']">
        <img :src="src" alt="vocal-top-banner" width="375" height="490" loading="lazy"
          decoding="async" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>