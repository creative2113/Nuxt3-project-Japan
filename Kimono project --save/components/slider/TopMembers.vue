<script lang="ts" setup>
const members: any = await(await fetch('/data/topmembers.json')).json();
</script>

<template>
  <div class="min-w-[1535px] pt-[62px] max-lg:min-w-full">
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
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 67,
        },
      }"
      :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(mem, i) of members" :key="i">
        <ContentMember :mem="mem" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-control">
      <div class="swiper-button-prev">
        <img
          src="/images/arrow-left.svg"
          alt="arrow left"
          width="30"
          loading="lazy"
          height="15"
        />
      </div>
      <div class="swiper-button-next">
        <img
          src="/images/arrow-right.svg"
          alt="arrow right"
          loading="lazy"
          width="30"
          height="15"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-control {
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
    left: 0;
  }

  > .swiper-button-next {
    right: 0;
  }
}
</style>
