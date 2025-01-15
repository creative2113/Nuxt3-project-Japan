<template>
  <div class="swiper-container">
    <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
      :loop="true" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }" :autoplay="{
          delay: 100000,
          disableOnInteraction: true,
        }" :effect="'creative'" :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-100%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }" :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }">
      <SwiperSlide>
        <ViewTopFirst />
      </SwiperSlide>
      <SwiperSlide>
        <LazyViewTopSecond />
      </SwiperSlide>
      <div class="swiper-control max-lg:hidden">
        <div class="swiper-button-prev !left-0 flex justify-center items-center !w-20 !h-20 bg-[#45454580] after:!hidden">
          <img src="/images/arrow-left.svg" alt="arrow left" loading="lazy" decoding="async" width="47" height="17" />
        </div>
        <div class="swiper-button-next !right-0 flex justify-center items-center !w-20 !h-20 bg-[#45454580] after:!hidden">
          <img src="/images/arrow-right.svg" alt="arrow right" loading="lazy" decoding="async" width="47" height="17" />
        </div>
      </div>
      <div class="swiper-pagination flex justify-center mt-5"></div>
    </Swiper>
  </div>
</template>

<style lang="scss">
.swiper-pagination {
  @media (max-width: 1024px) {
    bottom: var(--swiper-pagination-bottom, 380px) !important;
  }

  .swiper-pagination-bullet {
    background-color: #00000080;
    width: 60px;
    height: 3px;
    border-radius: 0;
    margin: 0 10px;
    transition: background-color 0.3s;
    opacity: 1;
    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 2px;
    }

    &.swiper-pagination-bullet-active {
      background: #FFFFFF;
    }
  }
}
</style>