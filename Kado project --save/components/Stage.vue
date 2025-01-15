<script setup lang="ts">
interface Stage {
  date: string;
  day: string;
  status: string;
  seats: string;
  thumbnail: string;
  title: string;
  companyImage: string;
  organizer: string;
  label: string;
  labelColor: string;
  fullHouse: boolean;
  school: string;
  description: string;
  price: string;
  url: string;
}

const props = defineProps<{
  stages: Stage[];
}>();
</script>
<template>
  <div class="bg-white relative pt-4 lg:pt-4">
    <img
      class="mx-auto w-[278px] relative lg:left-[100px] drop-shadow-xl"
      src="/images/group-stage-title.webp"
      width="278"
      height="124"
      alt="ジャズ、ポップス、和楽器、クラシック…いろんなステージをご用意しています"
      loading="lazy"
      decoding="async"
    />
    <div class="max-w-375 lg:max-w-[1220px] w-full mx-auto -mt-[2px] lg:mt-11">
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="-80"
        :loop="true"
        :effect="'fade'"
        :centered-slides="true"
        :breakpoints="{
          1000: {
            slidesPerView: 3,
            spaceBetween: 34,
            centeredSlides: false,
          },
        }"
        class="!overflow-visible"
      >
        <SwiperSlide
          v-for="(slide, index) in stages"
          :key="`stage-${index}`"
          class="h-full"
        >
          <div class="w-[280px] lg:w-[388px] mx-auto">
            <p class="text-[24px] lg:text-[30px] font-bold font-roboto text-center">{{ slide.date }}</p>
            <p class="text-base lg:text-xl font-bold font-roboto text-center tracking-[14.4px] lg:tracking-[18px] -mt-[6px] lg:-mt-1 translate-x-2 lg:translate-x-2">{{ slide.day }}</p>
            <div class="flex justify-center gap-[5px] lg:gap-1 mt-3 lg:mt-1">
              <div class="bg-white h-[17px] lg:h-[24px] px-[5px] py-[3px] lg:px-[9px] lg:py-[6px] rounded-full border-[1px] border-[#EEEEEE]">
                <p class="text-2xs leading-none text-[#05B0FD]">{{ slide.status }}</p>
              </div>
              <div class="bg-white h-[17px] lg:h-[24px] px-[6px] py-[3px] lg:px-[9px] lg:py-[6px] rounded-full border-[1px] border-[#EEEEEE]">
                <p class="text-2xs leading-none text-[#FF8822]">{{ slide.seats }}</p>
              </div>
            </div>
            <div class="w-full h-[160px] lg:h-[238px] rounded-full mt-[15px] relative lg:mt-[8px]">
              <img
                :src="slide.thumbnail"
                width="280"
                height="160"
                format="avif"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
                class="lg:h-full lg:w-[388px] rounded-full shadow-lg"
              />
              <h3
                class="absolute bottom-[10px] lg:bottom-[20px] left-1/2 -translate-x-1/2 px-[8px] lg:px-[16px] py-[2px] lg:py-[4px] text-white rounded-full text-[14px] tracking-[-1px] lg:tracking-[1px]"
                :class="slide.labelColor"
              >
                {{ slide.label }}
              </h3>
              <img
                v-if="slide.fullHouse"
                src="/images/deco_full-house@2x.webp"
                srcset="/images/deco_full-house.webp 1x, /images/deco_full-house@2x.webp 2x"
                width="150"
                height="48"
                class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                alt="満員御礼"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p class="text-center text-lg lg:text-xl font-bold mt-3 lg:mt-[15px] tracking-widest lg:tracking-normal">{{ slide.title }}</p>
            <div class="flex justify-center gap-[10px] mt-[10px] lg:mt-3 translate-x-[1px] lg:-translate-x-2">
              <div class="w-[38px] lg:w-10 h-[38px] lg:h-10 rounded-full">
                <img
                  :src="slide.companyImage"
                  width="38"
                  height="38"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full"
                />
              </div>
              <div>
                <p class="text-[11px] lg:text-[12px] text-[#39AEDA] avenir tracking-[1px] lg:tracking-normal">{{ slide.organizer }}</p>
                <p class="text-xs lg:text-sm lg:mt-1 tracking-[1.6px] lg:tracking-[2px]">{{ slide.school }}</p>
              </div>
            </div>
            <p class="text-xs mt-[5px] lg:mt-[17px] leading-[21px] lg:leading-[20px]">{{ slide.description }}</p>
            <div class="flex items-center gap-2 mt-[10px] lg:mt-[14px]">
              <img
                src="/images/deco_money.svg"
                width="15"
                height="15"
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
              />
              <p class="text-xs text-[#585451]">{{ slide.price }}</p>
            </div>
            <a
              v-if="!slide.fullHouse"
              :href="slide.url"
              @click="$emit('click',slide.title)"
            >
              <div
                class="w-[146px] lg:w-[166.67px] py-[8px] lg:py-[10px] mx-auto bg-gradient-to-r from-[#7F9CE6] to-[#9ED0F1] mb-[30px] lg:mb-0 rounded-full flex items-center justify-between px-[15px] mt-[20px] lg:mt-[17px] lg:translate-x-[4px] shadow-md"
              >
                <p class="text-white text-xs font-semibold lg:text-sm text-center lg:leading-[1.167] lg:tracking-widest">イベント申し込み</p>
                <span class="w-2.5 h-2.5 border-t border-t-white border-r border-r-white rotate-45" />
              </div>
            </a>
            <div
              v-else
              class="w-[166.67px] py-[10px] mx-auto bg-[#DDDDDD] rounded-full flex items-center shadow-md justify-between px-[15px] mt-5"
            >
              <p class="text-white text-xs font-semibold text-center">イベント申し込み</p>
              <span class="w-2.5 h-2.5 border-t border-t-white border-r border-r-white rotate-45" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <SquareButton width="small" arrow="down" class="mt-10">グループ展一覧へ</SquareButton>
    </div>
  </div>
</template>

<style scoped>
.avenir {
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>