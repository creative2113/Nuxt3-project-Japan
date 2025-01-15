<script lang="ts" setup>
const groupLessons = ref();
groupLessons.value = await(await fetch("/data/group-lesson.json")).json();
</script>

<template>
  <div id="group-lesson-outer-slider" class="max-w-[900px] mx-auto mt-[16px] lg:mt-12 relative pb-[113px]">
    <Swiper :modules="[SwiperNavigation]" :navigation="{
      prevEl: '.group-lesson-swiper-button-prev',
      nextEl: '.group-lesson-swiper-button-next',
    }" :centered-slides="true" :slides-per-view="1.2" :space-between="-30" :loop="false" :breakpoints="{
      1000: {
        slidesPerView: 3,
        spaceBetween: -30,
      },
    }" class="!pb-[60px] lg:!pb-[98px] relative">
      <SwiperSlide v-for="(groupLesson, index) in groupLessons.items" :key="index"
        class="!w-[320px] !h-[680px] rounded-[30px] overflow-hidden drop-shadow-xl relative">
        <div id="group-lesson-inner-slider"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[70px] before:bg-gradient-to-b before:from-[#FFFFFF00] before:to-[#FFFFFF] before:z-[2]">
          <Swiper :modules="[SwiperPagination, SwiperAutoplay]" :pagination="{
            clickable: true,
            type: 'custom',
            renderCustom: (swiper: any, current: any, total: any) => {
              let paginationHtml = `<div class='flex items-center justify-center gap-[2px] px-8'>`;
              for (let i = 1; i <= total; i++) {
                paginationHtml += `<span class='pagination-item ${i < current ? 'completed' : ''} ${i === current ? 'active' : ''}' style='width: calc(100% / ${total});'></span>`;
              }
              paginationHtml += `</div>`;
              return paginationHtml;
            },
          }" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }" :loop="true">
            <template v-for="(file, innerIndex) in groupLesson.files">
              <SwiperSlide v-if="file" :key="`innner-${innerIndex}`">
                <!-- <video v-if="
                  (file.file_path &&
                    file &&
                    file.file_path?.endsWith('.mp4')) ||
                  file.file_path?.endsWith('.MP4') ||
                  file.file_path?.endsWith('.mov')
                " class="w-[320px] h-[520px] object-cover" :src="file.file_path" loop muted @mouseover="(event: any) =>
                  (event.target as HTMLVideoElement) &&
                  (event.target as HTMLVideoElement).play()
                  " @mouseout="(event: any) =>
                    (event.target as HTMLVideoElement) &&
                    (event.target as HTMLVideoElement).pause()
                    "></video> -->
                <div class="relative">
                  <img class="w-full h-full absolute inset-0 -z-10" src="/images/no_image.webp" width="320" height="530" alt="" role="presentation" decoding="async" />
                  <div class="absolute inset-0 backdrop-blur-md"></div>
                  <div class="relative z-10 w-full h-[530px] flex items-center justify-center">
                    <img class="w-full" src="/images/event-lesson-img.webp" width="320" height="530" alt="" role="presentation" loading="lazy" decoding="async" />
                  </div>
                </div>
              </SwiperSlide>
            </template>
          </Swiper>
        </div>
        <div
          class="absolute left-0 top-[30px] z-10 text-white text-xs bg-[#47D59C] rounded-r-full p-[10px_15px_10px_10px]">
          {{ groupLesson.type }}
        </div>
        <div class="relative z-10 bg-white w-full px-3 h-[150px]">
          <div class="pt-2 pb-[5px] lg:py-2 border-b-[1px] border-[#DBDADA]">
            <img class="mx-auto w-[78px] h-9" src="/images/logo.svg" width="109" height="50" alt="音楽教室 EYS-Kids"
              loading="lazy" decoding="async" />
          </div>

          <nuxt-link to="/"
            class="relative flex items-center justify-center text-xl text-white bg-[#47D59C] w-[300px] h-[50px] rounded-[30px] drop-shadow-md mt-[9px] lg:mt-2 -translate-x-[3px] lg:translate-x-0">体験レッスン申し込み</nuxt-link>
          <nuxt-link to="/"
            class="relative flex items-center justify-center font-bold text-xs lg:tracking-normal mt-[10px] lg:mt-3 -translate-x-[10px] lg:translate-x-0 after:content-[url('/images/arrow/arrow_right_black.svg')] after:absolute after:right-8 lg:after:right-10 after:top-1/2 after:-translate-y-1/2">
            このグループレッスンの詳細を見る
          </nuxt-link>
        </div>
      </SwiperSlide>
    </Swiper>
    <button
      class="group-lesson-swiper-button-prev bg-[#00000077] p-[15px] absolute top-[46%] lg:top-1/2 -translate-y-1/2 !w-[80px] !h-[80px] !left-0 lg:!-left-8 lg:-translate-x-full z-10"
      aria-label="前へ">
      <img src="/images/arrow-left.svg" width="50" height="50" alt="" loading="lazy" class="w-full"
        role="presentation" />
    </button>
    <button
      class="group-lesson-swiper-button-next bg-[#00000077] p-[15px] absolute top-[46%] lg:top-1/2 -translate-y-1/2 !w-[80px] !h-[80px] !right-0 lg:!-right-8 lg:translate-x-full z-10"
      aria-label="次へ">
      <img src="/images/arrow-right.svg" width="50" height="50" alt="" loading="lazy" class="w-full"
        role="presentation" />
    </button>
    <div class="pt-10 text-center">
      <button aria-label="スク婚ページへ"
        class="text-[13px] relative py-4 px-[100px] rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-t after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2">
        スク婚ページへ
      </button>
    </div>
  </div>
</template>

<style>
#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide-active {
  z-index: 2;
}

#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide-prev,
#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide-next {
  z-index: 1;
}

#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide:not(.swiper-slide-active) {
  transform: translateY(50px);

  @media (1000px < width) {
    transform: translateY(96px);
  }
}

#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide:not(.swiper-slide-active)::before {
  content: "";
  transition: background-color 0.24s ease;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.7);
}

#group-lesson-inner-slider .swiper-pagination-custom {
  top: 10px !important;
}

#group-lesson-inner-slider .active-pagination {
  animation: grow 5s linear forwards;
}

#group-lesson-inner-slider .pagination-item {
  position: relative;
  background-color: black;
  height: 4px;
  border-radius: 2px;
}

#group-lesson-inner-slider .pagination-item.completed {
  background-color: #7799ff;
}

#group-lesson-inner-slider .pagination-item.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #7799ff;
  animation: grow 5s linear forwards;
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
