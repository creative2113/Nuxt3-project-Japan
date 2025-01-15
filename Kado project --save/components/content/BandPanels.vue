<script setup lang="ts">
interface File {
  class_title_detail: boolean;
  id: number;
  name: string;
  file_path: string;
  mime_type: string;
  file_type: string;
  landscape: boolean;
  thumbnail: string | null;
}

interface ClassProps {
  eys_class_id: number;
  files: File[];
  application_url: string;
  detail_url: string;
}

const props = defineProps<{
  panels: ClassProps[];
}>();
</script>
<template>
  <div id="yoko-chin-band-outer-slider" class="max-w-[900px] mx-auto pt-10 pb-[30px] lg:mt-4 relative">
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
      prevEl: '.yoko-chin-swiper-button-prev',
      nextEl: '.yoko-chin-swiper-button-next',}"
      :centered-slides="true"
      :slides-per-view="1.25"
      :space-between="-30"
      :loop="true"
      :breakpoints="{
        1000: {
          slidesPerView: 3,
          spaceBetween: -30,
        },
      }"
      class="!pb-10 lg:!pb-[98px] !overflow-y-visible">
      <SwiperSlide v-for="(band, index) in panels" :key="index"
        class="!w-[320px] !h-[680px] rounded-[30px] overflow-hidden drop-shadow-xl">
        <div id="yoko-chin-band-inner-slider"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[70px] before:bg-gradient-to-b before:from-[#FFFFFF00] before:to-[#FFFFFF] before:z-[2]">
          <Swiper :modules="[SwiperPagination, SwiperAutoplay]" :pagination="{
      clickable: true,
      type: 'custom',
      renderCustom: (swiper:any, current:any, total:any) => {
        let paginationHtml = `<div class='flex items-center justify-center gap-[2px] px-8'>`;
        for (let i = 1; i <= total; i++) {
          paginationHtml += `<span class='pagination-item ${i < current ? 'completed' : ''} ${i === current ? 'active' : ''}' style='width: calc(100% / ${total});'></span>`;
        }
        paginationHtml += `</div>`;
        return paginationHtml;
      },
    }" :autoplay="{
      delay: 5000,
      disableOnInteraction: false
    }" :loop="true">
            <template v-for="(file, innerIndex) in band.files">
              <SwiperSlide v-if="file.file_path" :key="`innner-${innerIndex}`">
                <video v-if="(file && file.file_path?.endsWith('.mp4')) ||
      file.file_path?.endsWith('.MP4') ||
      file.file_path?.endsWith('.mov')
      " class="w-[320px] h-[520px] object-cover" :src="file.file_path" loop muted @mouseover="(event: any) =>
      (event.target as HTMLVideoElement) &&
      (event.target as HTMLVideoElement).play()
      " @mouseout="(event: any) =>
      (event.target as HTMLVideoElement) &&
      (event.target as HTMLVideoElement).pause()
      "></video>
                <div v-else class="relative">
                  <img class="w-full h-full absolute inset-0 -z-10" :src="file
      ? file.file_path
      : 'https://art-lesson.2nd-community.com/images/no_image.webp'
      " width="320" height="530" alt="" role="presentation" decoding="async" />
                  <div class="absolute inset-0 backdrop-blur-md"></div>
                  <div class="relative z-10 w-full h-[530px] flex items-center justify-center">
                    <img class="w-full" :src="file
      ? file.file_path
      : 'https://art-lesson.2nd-community.com/images/no_image.webp'
      " width="320" height="530" alt="" role="presentation" loading="lazy" decoding="async" />
                  </div>
                </div>
              </SwiperSlide>
            </template>
          </Swiper>
        </div>
        <div class="absolute z-10 flex pl-2.5 gap-1 w-full bottom-[150px] pb-2 left-0 border-b">
          <div
            class="flex justify-center items-center pr-4 gap-1.5 rounded-full bg-white border border-[#DDDDDD]"
          >
            <img
              src="/images/guitar-1.webp"
              width="30"
              height="30"
              alt="offer"
              loading="lazy"
              decoding="async"
              class="w-[30px] h-auto"
            />
            <span class="text-xs font-bold text-center">ギター</span>
          </div>
          <div
            class="flex justify-center items-center pr-4 gap-1.5 rounded-full bg-white border border-[#DDDDDD]"
          >
            <img
              src="/images/guitar-2.webp"
              width="30"
              height="30"
              alt="offer"
              loading="lazy"
              decoding="async"
              class="w-[30px] h-auto"
            />
            <span class="text-xs font-bold text-center">エレキギター</span>
          </div>
        </div>
        <div class="relative z-10 bg-white w-full px-3 h-[150px]">
          <div class="py-2 border-b-[1px] border-[#DBDADA]">
            <img class="mx-auto" src="/images/logo-school.svg" width="96" height="31" alt="" loading="lazy" decoding="async" />
          </div>

          <a :href="band.application_url"
            class="relative flex items-center justify-center text-xl text-white bg-[#47D59C] w-[300px] h-[50px] rounded-[30px] drop-shadow-md mt-2 after:content-[url('/images/arrow/arrow_right_white_link.svg')] after:absolute after:right-5 after:top-1/2 after:-translate-y-1/2"
            @click="$emit('application_click', band.eys_class_id)">体験レッスン申し込み</a>
          <a :href="band.detail_url"
            class="relative flex items-center justify-center font-light text-xs mt-3 after:content-[url('/images/arrow/arrow_right_black.svg')] after:absolute after:right-10 after:top-1/2 after:-translate-y-1/2"
            @click="$emit('detail_click', band.eys_class_id)">
            このグループレッスンの詳細を見る
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
    <button
      class="yoko-chin-swiper-button-prev absolute top-1/2 -translate-y-1/2 !w-[50px] !h-[50px] bg-[#00000080] px-2.5 !left-0 lg:!-left-8 lg:-translate-x-full z-10"
      aria-label="前へ">
      <img src="/images/arrow/arrow-left.svg" width="30" height="15" alt="" loading="lazy" class="w-full"
        role="presentation" />
    </button>
    <button
      class="yoko-chin-swiper-button-next absolute top-1/2 -translate-y-1/2 !w-[50px] !h-[50px] bg-[#00000080] px-2.5 !right-0 lg:!-right-8 lg:translate-x-full z-10"
      aria-label="次へ">
      <img src="/images/arrow/arrow-right.svg" width="30" height="15" alt="" loading="lazy" class="w-full"
        role="presentation" />
    </button>
  </div>
</template>

<style>
#yoko-chin-band-outer-slider:not(#yoko-chin-band-inner-slider) .swiper-slide-active {
  z-index: 2;
}

#yoko-chin-band-outer-slider:not(#yoko-chin-band-inner-slider) .swiper-slide-prev,
#yoko-chin-band-outer-slider:not(#yoko-chin-band-inner-slider) .swiper-slide-next {
  z-index: 1;
}

#yoko-chin-band-outer-slider:not(#yoko-chin-band-inner-slider) .swiper-slide:not(.swiper-slide-active) {
  transform: translateY(40px);
  filter: brightness(50%);

  @media (1000px < width) {
    transform: translateY(96px);
  }
}

#yoko-chin-band-outer-slider:not(#yoko-chin-band-inner-slider) .swiper-slide:not(.swiper-slide-active)::before {
  content: '';
  transition: background-color 0.24s ease;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.7);
}

#yoko-chin-band-inner-slider .swiper-pagination-custom {
  top: 10px !important;
}

#yoko-chin-band-inner-slider .active-pagination {
  animation: grow 5s linear forwards;
}

#yoko-chin-band-inner-slider .pagination-item {
  position: relative;
  background-color: black;
  height: 4px;
  border-radius: 2px;
}

#yoko-chin-band-inner-slider .pagination-item.completed {
  background-color: #47D59C;
}

#yoko-chin-band-inner-slider .pagination-item.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #47D59C;
  animation: grow 5s linear forwards;
}

.avenir {
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

@keyframes grow {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>
