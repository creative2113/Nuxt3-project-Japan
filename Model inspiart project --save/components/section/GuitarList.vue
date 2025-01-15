<template>
  <div class="pt-[28px]">
    <h3
      class="w-[300px] h-[125px] mx-auto text-center pt-[26px] text-white font-bold bg-[url('/images/first-page-list-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl"
    >
      トップクラスの品質を誇る<br />厳選楽器をプレゼント！
    </h3>
    <div class="w-[330px] mx-auto pb-[15px] mt-[-50px]">
      <div class="guitar-user-list">
        <img
          :src="images[activeIndex]"
          width="330"
          height="330"
          alt="images"
          class="w-full h-auto rounded-t-[20px]"
        />
        <Swiper
          :slides-per-view="6"
          :loop="true"
          :autoplay="true"
          @slideChange="activeIndex = $event.realIndex"
        >
          <SwiperSlide v-for="(image, i) in images" :key="i">
            <img
              :src="image"
              width="55"
              height="55"
              alt="image"
              class="w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h4
        class="py-[22px] text-center font-bold text-[30px] text-[#FC88A7] bg-white"
      >
        ギター女子増殖中！
      </h4>
      <h5
        class="py-[10px] text-[14px] text-center text-white bg-[#888888] rounded-b-[20px] relative after:block after:absolute after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:border-t-[15px] after:border-t-[#888888] after:border-x-[15px] after:border-x-transparent"
      >
        名工房でつくられた高品質ギタープレゼント！
      </h5>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-x-[15px] gap-y-[32px] mt-[10px] pb-5">
      <div v-for="(guitar, i) in guitars" :key="i" class="bg-white p-[5px] h-[190px] pb-5 relative" :class="i > 2 ? 'w-[160px]' : 'w-[105px]'">
        <hr class="w-[calc(100%-10px)] h-[90px] absolute bottom-0 left-[5px] bg-gradient-to-t from-[#000000CC] to-[#00000001] border-none" />
        <div class="relative w-full h-full flex flex-col justify-between items-center">
          <h5 v-html="guitar.title" class="text-[14px] w-full text-center py-0.5 bg-[#BBAA7748] tracking-tighter font-bold"></h5>
          <img :src="guitar.image" :alt="guitar.title" class="mx-auto max-h-[99px]" />
          <h6 class="text-[11px] text-white text-center" v-html="guitar.en_title"></h6>
        </div>
        <nuxt-link to="/" class="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[34px] h-[34px] z-20 bg-[#BBAA77] pt-[6px]">
          <hr class="block w-[14px] h-[14px] border-r border-b border-r-white border-b-white border-t-0 rotate-45 mx-auto" >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeIndex = ref(0);
const images = [
  "/images/01.webp",
  "/images/02.webp",
  "/images/03.webp",
  "/images/04.webp",
  "/images/05.webp",
  "/images/06.webp",
  "/images/01.webp",
  "/images/02.webp",
  "/images/03.webp",
  "/images/04.webp",
  "/images/05.webp",
  "/images/06.webp",
];
const guitars = [
  {
    title: "クラシック<br>ギター",
    en_title: "Vientos",
    image: "/images/guitar_list-1.webp",
  },
  {
    title: "アコースティ<br>ックギター",
    en_title: "Maneuver",
    image: "/images/guitar_list-2.webp",
  },
  {
    title: "フラメンコ<br>ギター",
    en_title: "Alma Blanca",
    image: "/images/guitar_list-3.webp",
  },
  {
    title: "エレキギター<br>(テレキャスター)",
    en_title: "Rooster",
    image: "/images/guitar_list-4.webp",
  },
  {
    title: "エレキギター<br>(ストラトキャスター)",
    en_title: "Hydrangea",
    image: "/images/guitar_list-5.webp",
  },
];
</script>

<style scoped>
.guitar-user-list .swiper-slide {
  filter: brightness(0.7);
}
.guitar-user-list .swiper-slide-active {
  filter: brightness(1) !important;
  transform: scale(0.92);
}
</style>
