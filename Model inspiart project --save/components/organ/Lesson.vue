<template>
  <div class="mt-[40px]">
    <img
      v-if="lesson.img_title"
      :src="lesson.img_title"
      alt="brand"
      width="200"
      height="73"
      loading="lazy"
      decoding="async"
      class="w-[200px] h-auto mx-auto"
    />
    <h5 v-if="lesson.title" class="mt-4 text-center text-[24px] font-bold">{{ lesson.title }}</h5>
    <h6 v-if="lesson.sub_title" class="mt-2 text-center text-[14px] text-[#666666]">{{ lesson.sub_title }}</h6>
    <div class="relative mt-5 pl-5">
      <Swiper
        :slides-per-view="1.4"
        :space-between="0"
        :loop="true"
        class="lesson-swiper !overflow-visible"
      >
        <SwiperSlide
          v-for="(brand, i) of lesson.brands"
          :key="i"
          :style="{
            backgroundImage: `linear-gradient(to top left, ${lesson.bg_from}, ${lesson.bg_to})`,
          }"
          class="max-w-[250px] h-max rounded-[20px] shadow-[0px_0px_20px_#00000055] overflow-hidden"
        >
          <img
            :src="brand.image"
            :alt="brand.name"
            width="250"
            height="250"
            loading="lazy"
            decoding="async"
            class="w-full h-full mx-auto object-contain"
          />
          <p class="absolute roboto-black font-black text-[16px] text-white text-center top-5 left-0 w-full tracking-[0.2em]">{{ brand.name }}</p>
          <div v-if="brand.instruments" class="w-full px-[7px] py-[10px] bg-white grid grid-cols-3 gap-[5px]">
            <div v-for="(instrument, i) of brand.instruments" :key="i" class="relative bg-gradient-to-br from-[#CBCBCB] to-[#FFFFFF] w-[76px] h-[76px] rounded-[10px] overflow-hidden">
              <img :src="instrument.image" width="40" height="40" loading="lazy" decoding="async" class="w-full h-aull" />
              <p class="text-[8px] font-bold text-center w-full h-[24px] absolute bottom-0 left-0 bg-[#00000080] text-white content-center" v-html="instrument.name"></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  lesson: {
    img_title?: string;
    title?: string;
    sub_title?: string;
    bg_from: string;
    bg_to: string;
    brands: {
      name: string;
      image: string;
      instruments?: {
        name: string;
        image: string;
      }[];
    }[];
  };
}>();
</script>

<style scoped>
.lesson-swiper .swiper-slide {
  transform: scale(0.8);
  transition-duration: 0.3s;
}

.lesson-swiper .swiper-slide-active {
  transform: scale(1);
}
</style>
