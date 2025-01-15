<script lang="ts" setup>
const members: any = await(await fetch('/data/topmembers.json')).json();
</script>

<template>
  <div class="footer-member relative w-full bg-gradient-to-r from-[#DEE1F4] to-[#FFEDFC] pb-8 pt-[104px] mt-14 max-lg:pb-7 max-lg:pt-12">
    <img src="/images/footer-union.webp" alt="union" width="545" height="536" class="absolute top-0 left-1/2 -translate-x-1/2 w-[612px] min-w-[545px] h-auto">
    <div class="relative max-w-[1000px] w-full mx-auto overflow-visible max-lg:px-5">
      <h3 class="py-[11px] px-8 w-max mx-auto text-xl max-lg:text-base tracking-widest border-b border-b-[#222222]">
        個性豊かなEYSを創った<br class="lg:hidden">仕掛け人をご紹介します
      </h3>
      <div class="min-w-[1535px] pt-[62px] max-lg:min-w-full">
        <Swiper :modules="[SwiperNavigation]" :loop="true" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 67,
        },
      }">
          <SwiperSlide v-for="(mem, i) of members" :key="i">
            <div class="w-[200px] flex flex-col items-center justify-center max-lg:w-40">
              <h3 class="text-[16px] text-[#454545] mb-7">{{ mem.name }}</h3>
              <div class="relative">
                <span
                  class="absolute inline-block w-[120px] h-[120px] border-white border-2 max-lg:w-[90px] max-lg:h-[90px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-10" />
                <img :src="mem.image" :alt="mem.name" loading="lazy" decoding="async" width="200" height="215"
                  class="w-[200px] h-auto -mb-2" />
              </div>
              <h4
                class="text-[12px] mb-[18px] w-full text-center text-white font-bold bg-black py-[2px] max-lg:text-[11px] relative">
                {{ mem.role }}
              </h4>
              <p class="text-[12px] mb-[14px] text-black max-lg:text-[11px]">{{ mem.description }}</p>
              <button aria-label="member" class="border border-white bg-[#45454580] py-[14px] px-[11px]">
                <img src="/images/arrow/arrow-down-white.svg" alt="arrow" loading="lazy" width="16" height="9" />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-control lg:hidden">
          <div class="swiper-button-prev">
            <img src="/images/arrow/arrow-left.svg" alt="arrow left" width="30" loading="lazy" height="15" />
          </div>
          <div class="swiper-button-next">
            <img src="/images/arrow/arrow-right.svg" alt="arrow right" loading="lazy" width="30" height="15" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-member {
  clip-path: polygon(0 60px, calc(50% - 60px) 60px, 50% 0, calc(50% + 60px) 60px, 100% 60px, 100% 100%, 0 100%);
  @media (max-width: 1024px) {
    clip-path: polygon(0 30px, calc(50% - 30px) 30px, 50% 0, calc(50% + 30px) 30px, 100% 30px, 100% 100%, 0 100%);
  }
}
.swiper-control {

  >.swiper-button-prev,
  >.swiper-button-next {
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

  >.swiper-button-prev {
    left: 0;
  }

  >.swiper-button-next {
    right: 0;
  }
}
</style>
