<script lang="ts" setup>
interface Offer {
  for: string;
  banner_img: string;
  cost: string;
  genre: string;
  course: string;
  number: string;
  duration: string;
  method: string;
  capacity: string;
  present_img: string;
  present_color: string;
  follow_num: number;
  followers: string[];
  graph_url: string;
}

const offers = ref<Offer[]>([]);
offers.value = await(await fetch("/data/enjoyoffers.json")).json();

const groupLessons = ref();
groupLessons.value = await(await fetch("/data/group-lesson.json")).json();

const crt_offer = ref(0);
</script>

<style scoped lang="scss">
.active-current-offer {
  > div {
    border: solid 6px #aaaafd;
    position: relative;
    top: -20px;
    @media (max-width: 1024px) {
      border: solid 3px #aaaafd;
      top: 0;
    }
  }
}
#group-lesson-outer-slider {
  position: relative;
  box-shadow: inset 0 0 10px #00000022;
  &::before {
    width: 40px;
    height: 40px;
    background-color: #e7e7ff;
    display: block;
    content: "";
    box-shadow: inset 5px 5px 5px #00000022;
    position: absolute;
    transform: rotateZ(45deg);
    top: -20px;
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      top: -10px;
    }
  }
}
#group-lesson-outer-slider.first {
  &::before {
    left: calc(50% - 360px);
    @media (max-width: 1024px) {
      left: 40%;
    }
  }
}
#group-lesson-outer-slider.second {
  &::before {
    left: calc(50% - 20px);
    @media (max-width: 1024px) {
      left: 40%;
    }
  }
}
#group-lesson-outer-slider.third {
  &::before {
    left: calc(50% + 320px);
    @media (max-width: 1024px) {
      left: 40%;
    }
  }
}
</style>

<style>
#group-lesson-outer-slider:not(#group-lesson-inner-slider)
  .swiper-slide-active {
  z-index: 2;
}

@media (max-width: 1024px) {
  #group-lesson-outer-slider:not(#group-lesson-inner-slider)
    > *
    > *
    > *:not(.swiper-slide-active) {
    filter: brightness(0.5);
  }
  #group-lesson-outer-slider:not(#group-lesson-inner-slider)
    > *
    > *
    > .swiper-slide-active {
    top: -48px;
  }
}

#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide-prev,
#group-lesson-outer-slider:not(#group-lesson-inner-slider) .swiper-slide-next {
  z-index: 1;
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
<template>
  <div>
    <div
      class="max-w-[1000px] w-full mx-auto flex justify-between pt-4 pb-5 max-lg:gap-5 max-lg:px-2.5 max-lg:overflow-x-scroll"
    >
      <div
        v-for="(offer, i) of offers"
        :key="i"
        @click="crt_offer = i"
        class="pt-5"
        :class="i === crt_offer ? 'active-current-offer' : ''"
      >
        <div
          class="relative w-[318px] flex flex-col shadow-lg justify-center rounded-[6px] overflow-hidden max-lg:w-[235px]"
        >
          <img
            :src="offer.banner_img"
            width="318"
            height="211"
            :alt="offer.for"
            loading="lazy"
            class="w-full h-auto"
          />
          <span
            class="py-2 pl-2.5 pr-6 bg-gradient-to-r text-white max-lg:text-[10px] max-lg:py-[5px] font-bold absolute top-[14px] left-0 [clip-path:polygon(0_0,100%_0,calc(100%-15px)_100%,0_100%)]"
            :class="
              i === 0
                ? 'from-[#7594EA] to-[#8DF2DF]'
                : i === 1
                  ? 'from-[#179F9F] to-[#B7F2BE]'
                  : 'from-[#F0917E] to-[#EAE8C6]'
            "
            >{{ offer.for }}</span
          >
          <button
            aria-label="hard"
            class="block w-[54px] h-[54px] rounded-full shadow-md absolute top-1.5 right-1.5 bg-white bg-[url('/images/hard-grey-line.svg')] bg-no-repeat bg-center bg-[length:25px]"
          ></button>
          <div
            class="px-1.5 py-3 bg-white text-[13px] leading-6 max-lg:text-[10px] max-lg:tracking-tighter"
          >
            <div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">費用</b>
                <span>:</span>
                <p class="font-bold">
                  <span
                    class="text-[30px] max-lg:text-lg roboto text-[#EE88AA] font-bold italic"
                    >{{ offer.cost }}</span
                  >
                  円 / 月
                </p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">ジャンル</b>
                <span>:</span>
                <p>{{ offer.genre }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">コース</b>
                <span>:</span>
                <p>{{ offer.course }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">回数</b>
                <span>:</span>
                <p>回数の定めなし</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">期間</b>
                <span>:</span>
                <p>{{ offer.duration }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">開催方法</b>
                <span>:</span>
                <p>
                  <span
                    class="py-1 px-1.5 text-white bg-gradient-to-r from-[#7799FF] to-[#77DDFF] rounded-full mr-1 max-lg:pr-1"
                    >{{ offer.method }}</span
                  >
                  <span
                    class="py-1 px-1.5 text-white bg-[#DDDDDD] rounded-full max-lg:pr-1"
                    >動画見逃し配信</span
                  >
                </p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">定員</b>
                <span>:</span>
                <p>
                  <span>{{ offer.capacity.split("/")[0] }} /</span>
                  <span class="text-[#FF93B0]">{{
                    offer.capacity.split("/")[1]
                  }}</span>
                </p>
              </div>
            </div>
            <div class="mt-[22px]">
              <p
                class="w-full text-center py-1 bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] text-[19px] font-bold text-white max-lg:text-xs"
              >
                コース
              </p>
              <div
                class="bg-[#FFEEEE30] border border-[#EEEEEE] py-2 px-[14px] flex items-center gap-3"
              >
                <img
                  :src="offer.present_img"
                  width="54"
                  height="54"
                  alt="offer present"
                  loading="lazy"
                  class="rounded-full max-lg:w-10"
                />
                <span
                  class="text-xl font-bold tracking-tighter max-lg:text-xs"
                  :style="`color: ${offer.present_color}`"
                  >{{ offer.for }}</span
                >
              </div>
            </div>
            <div class="flex items-center gap-6 mt-[10px]">
              <div class="flex items-center">
                <img
                  v-for="(follower, i) of offer.followers.slice(0, 5)"
                  :key="i"
                  :src="follower"
                  width="40"
                  height="40"
                  alt="follower"
                  class="border-2 border-white rounded-full shadow-sm -mr-2 max-lg:w-[30px]"
                />
              </div>
              <p
                class="text-[#9999EE] text-[13px] font-bold max-lg:text-[10px]"
              >
                …{{ offer.follow_num }}名が担当
              </p>
            </div>
          </div>
          <div class="w-full bg-[#F9F9F9] py-3">
            <img
              :src="offer.graph_url"
              width="282"
              height="284"
              alt="offer graph"
              loading="lazy"
              class="w-[282px] h-auto mx-auto max-lg:w-[211px]"
            />
          </div>
          <div :class="i === crt_offer ? '' : 'p-1.5'">
            <button
              class="block w-full py-2.5 bg-black text-white font-bold relative after:block after:w-[17px] after:h-[7px] after:bg-[url('/images/arrow/arrow-right-small-white.svg')] after:bg-cover after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="group-lesson-outer-slider"
    class="w-full mx-auto bg-[#AAAAFF48] relative pt-12 max-lg:pt-6"
    :class="crt_offer === 0 ? 'first' : crt_offer === 1 ? 'second' : 'third'"
  >
    <h3
      class="text-center text-2xl font-bold pb-[60px] flex justify-center items-end gap-10 max-lg:gap-6 max-lg:text-base max-lg:pb-5 after:block after:w-0.5 after:h-[30px] after:bg-[#222222] after:rotate-[30deg] before:rotate-[-30deg] before:block before:w-0.5 before:h-[30px] before:bg-[#222222]"
    >
      具体的なクラスを<br class="lg:hidden" />覗いてみよう！
    </h3>
    <Swiper
      :modules="[SwiperNavigation]"
      :navigation="{
        prevEl: '.group-lesson-swiper-button-prev',
        nextEl: '.group-lesson-swiper-button-next',
      }"
      :centered-slides="true"
      :slides-per-view="1.2"
      :space-between="-30"
      :loop="false"
      :breakpoints="{
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
      class="!pb-[60px] max-lg:!pt-14"
    >
      <SwiperSlide
        v-for="(groupLesson, index) in groupLessons.items"
        :key="index"
        class="!w-[320px] !h-[680px] rounded-[30px] overflow-hidden drop-shadow-xl relative"
      >
        <div
          id="group-lesson-inner-slider"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[70px] before:bg-gradient-to-b before:from-[#FFFFFF00] before:to-[#FFFFFF] before:z-[2]"
        >
          <Swiper
            :modules="[SwiperPagination, SwiperAutoplay]"
            :pagination="{
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
            }"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :loop="true"
          >
            <template v-for="(file, innerIndex) in groupLesson.files">
              <SwiperSlide v-if="file" :key="`innner-${innerIndex}`">
                <div v-if="file.class_title_detail"></div>
                <div v-else class="relative">
                  <img
                    class="w-auto object-cover h-full absolute top-0 left-0 inset-0 -z-10"
                    :src="
                      file.file_path ? file.file_path : '/images/no_image.webp'
                    "
                    width="320"
                    height="530"
                    alt=""
                    role="presentation"
                    decoding="async"
                  />
                  <div
                    class="absolute inset-0 backdrop-blur-sm backdrop-brightness-[0.4] max-lg:hidden"
                  ></div>
                  <div
                    class="relative z-10 w-full h-[530px] flex items-center justify-center max-lg:opacity-0"
                  >
                    <img
                      class="w-auto"
                      :src="
                        file.file_path
                          ? file.file_path
                          : '/images/no_image.webp'
                      "
                      width="320"
                      height="530"
                      alt=""
                      role="presentation"
                      loading="lazy"
                      decoding="async"
                    />
                    <h5
                      class="absolute text-white text-2xl w-full p-3 left-0 bottom-9"
                    >
                      {{ file.title }}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </template>
          </Swiper>
        </div>
        <div
          class="absolute left-0 top-[30px] z-10 text-white text-xs font-semibold bg-[#AAAAFF] rounded-r-full p-[10px_15px_10px_10px]"
        >
          {{ groupLesson.type }}
        </div>
        <div class="absolute z-20 flex pl-2.5 gap-1 w-full bottom-40 left-0">
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
        <div class="relative z-10 bg-white w-full px-3 pb-6">
          <div class="pt-2 pb-6 lg:py-2 border-b-[1px] border-[#DBDADA]">
            <img
              class="mx-auto w-[114px] h-9"
              src="/images/logo-school.svg"
              width="114"
              height="50"
              alt="音楽教室 EYS-Kids"
              loading="lazy"
              decoding="async"
            />
          </div>

          <nuxt-link
            to="/"
            class="relative flex items-center justify-center text-lg tracking-tighter text-white font-semibold bg-[#AAAAFF] w-[300px] h-[50px] rounded-[30px] shadow-lg mt-6 lg:mt-6 -translate-x-[3px] lg:translate-x-0 after:content-[url('/images/arrow/arrow_right_white_link.svg')] after:absolute after:right-5 after:top-1/2 after:-translate-y-1/2"
            >このレッスンの詳細を見る</nuxt-link
          >
        </div>
      </SwiperSlide>
    </Swiper>
    <button
      class="group-lesson-swiper-button-prev absolute top-[46%] lg:top-1/2 -translate-y-1/2 !w-[50px] !h-[50px] !left-0 lg:!-left-8 lg:-translate-x-full z-10 px-2 py-4 bg-[#00000080]"
      aria-label="前へ"
    >
      <img
        src="/images/arrow/arrow-left.svg"
        width="50"
        height="50"
        alt=""
        loading="lazy"
        class="w-8"
        role="presentation"
      />
    </button>
    <button
      class="group-lesson-swiper-button-next absolute top-[46%] lg:top-1/2 -translate-y-1/2 !w-[50px] !h-[50px] !right-0 lg:!-right-8 lg:translate-x-full z-10 px-2 py-4 bg-[#00000080]"
      aria-label="次へ"
    >
      <img
        src="/images/arrow/arrow-right.svg"
        width="50"
        height="50"
        alt=""
        loading="lazy"
        class="w-8"
        role="presentation"
      />
    </button>
  </div>
</template>
