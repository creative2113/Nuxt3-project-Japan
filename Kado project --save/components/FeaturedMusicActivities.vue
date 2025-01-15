<script setup lang="ts">
interface Teacher {
  id: number;
  name: string;
  icon: string;
  desc: string;
}

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


interface musicActivity {
  eys_class_id: number;
  title: string;
  area: string;
  teacher: Teacher;
  files: File[];
  class_categories: string[];
  service_name: string;
}

const props = defineProps<{
  musicActivities: musicActivity[];
}>();


function truncateText(text: string, length: number) {
  return text.length > length ? text.substring(0, length) + '...' : text;
}
</script>

<template>
  <div
    class="mt-[30px] lg:mt-[84px] lg:pt-[25px] lg:pb-[30px] w-full lg:max-w-full bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] pt-[20px] pb-[30px]"
  >
    <p class="text-center text-lg text-black font-bold leadin-none">注目のワークショップ</p>
    <div
      id="onkatsu-slider"
      class="max-w-[375px] lg:max-w-[1000px] mt-[15px] lg:mt-[15px] mx-auto relative translate-x-5 lg:translate-x-0"
    >
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="2.3"
        :space-between="20"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          1000: {
            slidesPerView: 6,
          },
        }"
      >
        <SwiperSlide
          v-for="(slide, index) in musicActivities"
          :key="`onkatsu-${index}`"
          class="!w-[150px] !h-[266px] rounded-[20px] overflow-hidden pl-0 relative "
        >
          <video
            v-if="slide.files.length > 0 && slide.files[0].file_path.endsWith('.mp4')"
            class="w-full h-full object-cover"
            :src="slide.files[0].file_path"
            loop
            muted
            @mouseover="
              (event: any) =>
                (event.target as HTMLVideoElement) && (event.target as HTMLVideoElement).play()
            "
            @mouseout="
              (event: any) =>
                (event.target as HTMLVideoElement) && (event.target as HTMLVideoElement).pause()
            "
          ></video>
          <div
            v-else
            class="relative"
          >
            <img
              class="w-full h-full absolute inset-0 -z-10"
              :src="
                slide.files.length > 0
                  ? slide.files[0].file_path
                  : '/images/no_image.webp'
              "
              alt=""
              role="presentation"
              decoding="async"
            />
            <div class="absolute inset-0 backdrop-blur-md"></div>
            <div class="relative z-10 w-[150px] h-[266px] flex items-center justify-center">
              <img
                class=""
                :src="
                  slide.files.length > 0
                    ? slide.files[0].file_path
                    : '/images/no_image.webp'
                "
                width="150"
                height="266"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div class="absolute z-10 bottom-[10px] left-[10px] w-[130px]">
            <p class="text-white text-sm line-clamp-3">{{ slide.title }}</p>
            <div class="flex items-center gap-1 mt-1">
              <img
                class="shrink-0 w-[30px] h-[30px] object-cover rounded-full"
                :src="slide.teacher.icon"
                width="30"
                height="30"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p class="text-[10px] text-white">{{ slide.service_name }}</p>
                <!-- <p class="text-[10px] text-white">
                  {{ slide.area }}/{{ slide.class_categories.join('/') }}
                </p> -->
                <p class="text-[10px] text-white whitespace-nowrap">
                  {{ truncateText(slide.area + '/' + slide.class_categories.join('/'), 10) }}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        class="swiper-button-prev !w-[80px] !h-[80px] px-4 bg-[#00000080] !-left-8 -translate-x-[77px] lg:-translate-y-[18px]"
        aria-label="前へ"
      >
        <img
          src="/images/arrow/arrow-left.svg"
          width="50"
          height="50"
          alt=""
          loading="lazy"
          class="w-full"
          decoding="async"
        />
      </button>
      <button
        class="swiper-button-next !w-[80px] !h-[80px] px-4 bg-[#00000080] !-right-8 translate-x-[77px] lg:-translate-y-[18px]"
        aria-label="次へ"
      >
        <img
          src="/images/arrow/arrow-right.svg"
          width="50"
          height="50"
          alt=""
          loading="lazy"
          class="w-full"
          decoding="async"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
#onkatsu-slider {
  .swiper-button-prev,
  .swiper-button-next {
    @media (width < 1000px) {
      display: none;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: none;
  }
}
</style>
