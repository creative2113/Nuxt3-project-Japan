<script lang="ts" setup>
const blogs = await(await fetch("/data/eventblogs.json")).json();
</script>

<template>
  <section class="pt-11 pb-20 lg:pb-[100px]">
    <h4
      class="text-center futura-pt text-[45px] text-[#D87E80] pb-4 relative after:block after:w-6 after:h-[3px] after:bg-[#D87E80] after:mx-auto"
    >
      BLOG
    </h4>
    <h3
      class="text-base tracking-wider lg:tracking-normal relative text-center"
    >
      ブログ
    </h3>
    <img
      src="/images/event-blog-bg.webp"
      alt="event date"
      width="1920"
      height="240"
      loading="lazy"
      class="w-full h-auto mt-[38px] max-lg:hidden"
    />
    <div class="max-w-[745px] mx-auto relative mt-[-60px] max-lg:mt-12 max-lg:px-5">
      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(blog, i) of blogs" :key="i">
          <div class="w-[235px] bg-white shadow-lg">
            <img
              :src="blog.banner_url"
              alt="event date"
              width="235"
              height="185"
              loading="lazy"
              class="w-full h-auto clip-blog-img"
            />
            <div class="w-full p-2.5">
              <span class="text-[10px]">{{ blog.date }}</span>
              <h5 class="text-[#222222] roboto font-bold text-[13px] mt-2">
                {{ blog.title }}
              </h5>
              <p class="text-[11px] text-left mt-2.5">
                {{ blog.content }}
              </p>
              <div class="mt-5 text-center">
                <button aria-label="スク婚ページへ"
                  class="text-xs relative py-2 w-full rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-t after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
                >
                  スク婚ページへ
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-control">
        <div
          class="swiper-button-prev after:!hidden bg-[#45454580] !w-[50px] !h-[50px] !-left-20"
        >
          <img
            src="/images/arrow-left.svg"
            alt="arrow left"
            loading="lazy"
            width="30"
            height="15"
          />
        </div>
        <div
          class="swiper-button-next after:!hidden bg-[#45454580] !w-[50px] !h-[50px] !-right-20"
        >
          <img
            src="/images/arrow-right.svg"
            alt="arrow right"
            width="30"
            loading="lazy"
            height="15"
          />
        </div>
      </div>
      <div class="mt-10 text-center">
        <button aria-label="スク婚ページへ"
          class="text-xs relative py-4 px-[100px] rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-t after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
        >
          スク婚ページへ
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.clip-blog-img {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  @media screen and (max-width: 1024px) {
    clip-path: unset;
  }
}
</style>
