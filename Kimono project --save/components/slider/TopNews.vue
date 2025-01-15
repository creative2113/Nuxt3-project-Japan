<template>
  <div class="news-swiper-container">
    <Swiper
      :modules="[
        SwiperNavigation,
        SwiperAutoplay,
        SwiperEffectCreative,
      ]"
      :loop="true"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1.4,
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
      <SwiperSlide v-for="(news, i) of newsItems" :key="i">
        <ContentTopNew :news="news" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-control">
      <div class="swiper-button-prev">
        <img
          src="/images/arrow-left.svg"
          alt="arrow left"
          loading="lazy"
          decoding="async"
          width="30"
          height="15"
        />
      </div>
      <div class="swiper-button-next">
        <img
          src="/images/arrow-right.svg"
          alt="arrow right"
          width="30"
          loading="lazy"
          decoding="async"
          height="15"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const newsItems : any = await(await fetch('/data/news.json')).json();
</script>
<style lang="scss">
.news-swiper-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin-inline: auto;
  padding: 25px 0 60px;
  @media (max-width: 1024px) {
    padding: 25px 0 60px;
  }
  .swiper-control {
    @media (max-width: 1024px) {
      display: none !important;
    }

    > .swiper-button-prev,
    > .swiper-button-next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: none;
      background-color: #45454580;

      &::after {
        display: none;
      }
    }

    > .swiper-button-prev {
      left: -100px;
    }

    > .swiper-button-next {
      right: -100px;
    }
  }
}
</style>
