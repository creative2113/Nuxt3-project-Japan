<script setup lang="ts">
interface UserVoice {
  title: string;
  date: string;
  rating: number;
  comment: string;
  name: string;
  image: string;
}
const props = defineProps<{
  userVoice: UserVoice[];
}>();
const rankingdata = [
  {
    title: "大変不満",
    icon: "/images/icon_satisfuction-face-1.svg",
  },
  {
    title: "やや不満",
    icon: "/images/icon_satisfuction-face-2.svg",
  },
  {
    title: "まあまあ",
    icon: "/images/icon_satisfuction-face-3.svg",
  },
  {
    title: "大変満足",
    icon: "/images/icon_satisfuction-face-4.svg",
  },
  {
    title: "ほぼ満足",
    icon: "/images/icon_satisfuction-face-5.svg",
  },
]
</script>

<template>
  <div
    class="bg-[#DDDDDD] lg:max-w-full mx-auto lg:mt-[-36px] w-full overflow-x-hidden lg:h-[500px] pt-[26px] lg:pt-[90px]"
  >
    <div class="max-w-[375px] w-full mx-auto lg:max-w-[1200px]">
      <div class="flex items-center gap-[13px] ml-[10px] lg:justify-center lg:gap-[30px] lg:mt-0 lg:-translate-x-2">
        <h3 class="text-[22px] lg:ml-[5px] lg:text-center lg:text-[#9876DE] lg:text-[30px] font-medium roboto tracking-[1.6px] lg:tracking-[2.3px] lg:leading-[41px]">
          USER's VOICE
        </h3>
        <p class="text-xs lg:text-sm tracking-[1.4px]">参加者の声</p>
      </div>
      <Swiper
        id="user-voice"
        class="mt-[18px] max-w-[375px] lg:max-w-full mx-auto lg:mt-5"
        :modules="[SwiperPagination, SwiperNavigation]"
        :format-fraction-total="(total: number) => `0${total}`"
        :pagination="{
          type: 'progressbar',
          el: '.user-voice-pagination',
        }"
        :loop="true"
        :effect="'fade'"
        :centered-slides="true"
        :breakpoints="{
          1000: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          0: {
            slidesPerView: 1.3,
            spaceBetween: 0,
          },
        }"
      >
        <div class="user-voice-pagination !h-0.5 w-[1200px] max-w-[355px] lg:max-w-[1200px]"></div>
        <SwiperSlide
          v-for="(slide, index) in props.userVoice"
          :key="`user-voice-${index}`"
          class="h-full mt-[2px] lg:mt-[32px]"
        >
          <div
            class="w-[261px] lg:w-[370px] mb-[37px] mx-[20px] lg:mx-[40px] bg-white rounded-full pt-3 lg:pt-[20px] pb-2 lg:pb-[14px] shadow-[0px_3px_10px_#aaaaaa] border-[2px] border-[#DDDDDD] relative tracking-widest "
          >
            <p class="text-[13px] font-bold text-center tracking-[2px] lg:tracking-normal lg:text-[15px] lg:-mt-1">{{ slide.title }}</p>
            <p
              class="text-center mt-[0px] lg:mt-[2px] lg:pb-5 text-[10px] text-[#666666] after:w-5 after:h-[1px] relative after:top-[23px] after:lg:top-[32px] after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-black"
            >
              {{ slide.date }}
            </p>
            <div class="flex justify-center items-center mt-[15px] lg:mt-5">
              <img
                :src="rankingdata[slide.rating - 1].icon"
                width="14"
                height="14"
                alt="ranking"
                loading="lazy"
                decoding="async"
              />
              <p class="text-[13px] lg:ml-[2px] font-bold">{{ slide.rating }}</p>
              <p class="text-[11px] font-bold lg:ml-[6px] lg:text-xs translate-x-[5px] lg:translate-x-0">{{ rankingdata[slide.rating - 1].title }}</p>
            </div>
            <p class="text-[10px] lg:text-xs w-[200px] lg:w-[270px] line-clamp-2 lg:line-clamp-3 mx-auto mt-1 lg:mt-[5px] lg:leading-[20px]">
              {{ slide.comment }}
            </p>
            <p class="text-[11px] font-bold text-center mt-2 lg:mt-[6px]">{{ slide.name }}</p>
            <img
              class="absolute right-[5px] lg:-right-1 -bottom-[10px] lg:bottom-[-8px] w-[45px] lg:w-[60px] border border-[#DDDDDD] rounded-full shadow-md"
              :src="slide.image"
              width="60"
              height="60"
              alt=""
              role="presentation"
              loading="lazy"
              format="avif"
              decoding="async"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
#user-voice {
  max-width: 355px;
  overflow: visible !important;
}

@media (min-width: 1000px) {
  #user-voice {
    max-width: 1000px;
  }
}
#user-voice {
  .swiper-wrapper {
    padding-top: 30px;
  }
  .swiper-pagination-progressbar{
    background-color: #FFF !important;
  }

  .swiper-pagination-progressbar-fill {
    background-color: #000 !important;
  }
  @media (min-width: 1000px) {
    .swiper-pagination-progressbar-fill {
      background-color: #9876de !important;
    }
  }
}
</style>
