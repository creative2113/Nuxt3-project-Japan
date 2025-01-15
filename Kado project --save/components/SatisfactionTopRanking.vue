<script setup lang="ts">
interface SatisfactionCount {
  verySatisfied: number;
  mostlySatisfied: number;
  average: number;
  slightlyDissatisfied: number;
  veryDissatisfied: number;
}

interface AvailableDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

interface Policy {
  icon: string;
  heading: string;
  description: string;
}

interface Review {
  icon: string;
  name: string;
  course: string;
  date: string;
  content: string;
  rating: number;
}

interface Instructor {
  image: string;
  icon: string;
  name: string;
  rank: string;
  satisfactionCount: SatisfactionCount;
  mobile_photo: string;
  rankImageName?: string;
  profile: string;
  studios: string[];
  courses: string[];
  availableDays: AvailableDays;
  videos: string[];
  level: {
    easiness: number;
    beginner: number;
    theory: number;
  };
  philosophy: string;
  policies: Policy[];
  reviews: Review[];
}

const props = defineProps<{
  instructors: Instructor[];
}>();

const emit = defineEmits<{
  (event: 'play', isPlaying: boolean): void;
  (event: 'open', isOpen: boolean): void;
  (event: 'moreView'): void;
}>();

const activeIndex = ref(0);
const activeInstructor = computed(() => {
  if (props.instructors) {
    return props.instructors[activeIndex.value];
  } else {
    return null;
  }
});
const onSwiper = (swiper: any) => {
  swiper.slides.forEach((slide: HTMLElement, index: number) => {
    let scale = Math.pow(0.85, Math.abs(index - swiper.activeIndex - 1));
    if (index == swiper.activeIndex) {
      scale = 1.17;
    }
    slide.style.transform = `scale(${scale})`;
  });
};
const onSlideChange = (swiper: any) => {
  const swiperIdxStr = document
    .getElementById('satisfuction-index-ranking')
    ?.querySelector('.swiper-slide-active')
    ?.getAttribute('data-swiper-slide-index');
  const swiperIdx = Number(swiperIdxStr);

  activeIndex.value = swiperIdx;

  swiper.slides.forEach((slide: HTMLElement, index: number) => {
    let scale = Math.pow(0.8, Math.abs(index - swiper.activeIndex - 1));
    if (index == swiper.activeIndex) {
      scale = 1.17;
    }
    slide.style.transform = `scale(${scale})`;
  });
};

const getAvailableDays = (availableDays: any) => {
  const days = ['月', '火', '水', '木', '金', '土', '日'];
  return days.map((day, index) => ({
    day,
    isAvailable: availableDays[Object.keys(availableDays)[index]],
  }));
};

/* 円グラフの生成 */
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const getChartData = (instructor: any) => {
  if (instructor && instructor.satisfactionCount) {
    return {
      labels: ['大変満足', '概ね満足', 'ふつう', 'やや不満', '大変不満'],
      datasets: [
        {
          data: [
            instructor.satisfactionCount.verySatisfied || 0,
            instructor.satisfactionCount.mostlySatisfied || 0,
            instructor.satisfactionCount.average || 0,
            instructor.satisfactionCount.slightlyDissatisfied || 0,
            instructor.satisfactionCount.veryDissatisfied || 0,
          ],
          backgroundColor: ['#FFAAAA', '#F4C97C', '#AAAAAA', '#ACE2DB', '#BAD4FF'],
        },
      ],
    };
  } else {
    return {
      labels: ['大変満足', '概ね満足', 'ふつう', 'やや不満', '大変不満'],
      datasets: [
        {
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#FFAAAA', '#F4C97C', '#AAAAAA', '#ACE2DB', '#BAD4FF'],
        },
      ],
    };
  }
};

const getVerySatisfiedPer = (instructor: any) => {
  const verySatisfiedValue = instructor.satisfactionCount.verySatisfied;

  return ((Number(verySatisfiedValue) / Number(getTotalcount(instructor))) * 100).toFixed(1);
};

/* videoの再生 */
const videoPlayer = ref<(HTMLVideoElement | null)[]>([]);
const togglePlay = (index: number) => {
  console.log(index);

  // const player = videoPlayer.value[index];
  // if (player) {
  //   if (player.paused) {
  //     player.play();
  //   } else {
  //     player.pause();
  //   }
  //   emit('play', !player.paused);
  // }
};

/* 満足度件数の表示 */
const labels = ['大変満足', 'ほぼ満足', 'まあまあ', 'やや不満', '大変不満'];

const getTotalcount = (instructor: any) => {
  if (!instructor.satisfactionCount) return 0;
  const data: number[] = Object.values(instructor.satisfactionCount);

  return data.reduce((acc: number, curr: number) => acc + curr, 0);
};

/* パネルのアコーディオン */
const showDetails = ref([
  // 同期パネルの分とランキングのパネル
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

const toggleDetails = (idx: number) => {
  showDetails.value[idx] = !showDetails.value[idx];
  emit('open', showDetails.value[idx]);
};

/* レビューを追加表示するボタン */
const showReviewsCount = ref([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
const maxReviewsCount = (instructor: any) => {
  return instructor && instructor.reviews ? instructor.reviews.length : 0;
};

const showMoreReviews = (instructor: any, idx: number) => {
  showReviewsCount.value[idx] = Math.min(
    showReviewsCount.value[idx] + 4,
    maxReviewsCount(instructor)
  );
  emit('moreView');
};
</script>

<template>
  <div class="relative pb-[38px] lg:pb-[30px] bg-[#EEEEFF]">
    <div class="bg-gradient-to-t from-[#EEEEFF] via-[#FFFFFF] to-[#EEEEFF]">
      <div class="overflow-x-hidden">
        <div id="satisfuction-index-ranking" class="max-w-screen-lg mx-auto !pb-8 relative max-lg:pl-5">
          <Swiper :loop="true" :slides-per-view="5" :space-between="0" :modules="[SwiperNavigation]" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }" :breakpoints="{
            1000: {
              spaceBetween: 50,
            },
          }" class="w-full !static !overflow-visible lg:!overflow-clip lg:!h-[500px] !pl-16 !pr-0 !py-20 max-lg:!pl-0 max-lg:!pt-10 max-lg:!pb-0" @swiper="onSwiper"
            @slide-change-transition-end="onSlideChange">
            <SwiperSlide v-for="(instructor, index) in instructors" :key="index" class="">
              <div class="carousel-item">
                <img :src="instructor.image" width="auto" height="445" alt="presentation" role="presentation"
                  loading="lazy" decoding="async" class="w-auto h-[360px] max-lg:h-[200px]" />
              </div>
            </SwiperSlide>
            <button aria-label="前へ"
              class="swiper-button-prev bg-[#00000080] !w-[50px] lg:!w-[80px] px-2 !h-[50px] lg:!h-[80px] !absolute !z-20 !top-[55%] lg:!top-[52%] !left-0 lg:!-left-14 -translate-y-1/2 lg:-translate-x-full after:hidden">
              <img src="/images/arrow/arrow-left.svg" width="50" height="50" alt="presentation" role="presentation"
                loading="lazy" class="w-[30px] lg:w-[50px]" decoding="async" />
            </button>
            <button aria-label="次へ"
              class="swiper-button-next bg-[#00000080] !w-[50px] lg:!w-[80px] px-2 !h-[50px] lg:!h-[80px] !absolute !z-20 !top-[55%] lg:!top-[52%] !right-0 lg:!-right-14 -translate-y-1/2 lg:translate-x-full after:hidden">
              <img src="/images/arrow/arrow-right.svg" width="50" height="50" alt="presentation" role="presentation"
                loading="lazy" class="w-[30px] lg:w-[50px]" decoding="async" />
            </button>
          </Swiper>
        </div>
      </div>
      <!-- /カルーセル -->
    </div>

    <div class="lg:-mt-3">
    <!-- 同期パネル -->
    <div
      v-if="activeInstructor"
      class="max-w-[355px] lg:max-w-screen-lg mx-auto px-[10px] z-10 lg:-mt-12 relative before:absolute before:left-10 lg:before:left-[90px] before:bottom-full before:z-10 lg:before:-mb-[6px] before:border-x-[12px] lg:before:border-x-[24px] before:border-y-[22px] lg:before:border-y-[40px] before:border-transparent"
      :class="
        activeInstructor.rankImageName === 'img_ranking-no1'
          ? `before:border-b-[#F28D8D] lg:before:border-b-white`
          : `before:border-b-white`
      "
    >
      <div class="bg-white shadow-sm w-[355px] lg:w-[1000px] -translate-x-[10px]">
        <!-- 同期パネルヘッダー -->
        <div
          class="flex items-center pt-[10px] pb-[7px] lg:py-[10px] px-2 lg:px-3 border border-[#EEEEEE] relative lg:mt-[10px]"
          :class="activeInstructor.rankImageName ? `pt-[35px] lg:pt-[10px] ` : ``"
        >
          <div
            class="w-[86px] h-[86px] lg:w-20 lg:h-20 lg:ml-2 rounded-full shadow-lg  overflow-hidden"
          >
            <img
              :src="activeInstructor.icon"
              width="80"
              height="80"
              alt=""
              role="presentation"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="text-lg font-semibold tracking-wider ml-1 lg:ml-[10px] lg:mt-[0px]">
            {{ activeInstructor.name }}
          </p>
          <div class="text-center ml-[14px] lg:ml-[22px] lg:mt-[0px]">
            <img
              :src="activeInstructor.rank"
              width="42"
              height="40"
              alt=""
              role="presentation"
              loading="lazy"
              decoding="async"
            />
            <p class="text-[10px] text-[#666666] leading-3 font-semibold">講師<br />ランク</p>
          </div>
          <div class=" ml-7 lg:mx-7 w-20 h-20 relative">
            <Pie
              :data="getChartData(activeInstructor)"
              :options="{ responsive: true }"
            />
            <div
              class="text-[10px] font-semibold text-center leading-tight text-[#333] absolute top-1/2 left-1/2 -translate-x-1/2"
            >
              大変満足<br />
              <span class="text-xs font-roboto font-bold">{{
                getVerySatisfiedPer(activeInstructor)
              }}</span
              ><span class="text-[8px] font-roboto font-bold">%</span>
            </div>
          </div>
        </div>
        <!-- /同期パネルヘッダー -->

        <!-- 同期パネルコンテンツ（初期表示） -->
        <div class="lg:px-[10px] lg:pt-5 pb-3 lg:pb-[28px] py-5 lg:flex flex-row-reverse gap-[15px]">
          <div class="lg:w-[52%] shrink-0 pl-[10px] lg:pl-[35px]">
            <h4
              class="text-sm font-semibold tracking-[0.1px] pl-[10px] border-l-[3px] border-black border-solid"
            >
              レッスンスタイル
            </h4>
            <div class="lg:flex gap-[15px] items-center">
              <!-- ビデオカルーセル -->
              <div class="mt-[10px] px-[10px] lg:mt-5 w-[335px] lg:w-[292px] shrink-0 relative lg:ml-[2px]">
                <Swiper
                  :slides-per-view="2"
                  :space-between="10"
                  :modules="[SwiperNavigation]"
                  :navigation="{
                    nextEl: '.swiper-button-next-video',
                    prevEl: '.swiper-button-prev-video',
                  }"
                  class="w-full !static"
                >
                  <SwiperSlide v-for="(video, videoIndex) in activeInstructor.videos" :key="videoIndex"
                    class="aspect-[126/224] rounded-lg overflow-hidden">
                    <div class="w-full h-full">
                      <img :ref="(el:any) => (videoPlayer[videoIndex] = el as HTMLVideoElement)"
                        class="w-full h-full object-cover" alt="video" :src="video" @click="togglePlay(videoIndex)" />
                    </div>
                  </SwiperSlide>
                  <button
                    aria-label="前へ"
                    class="swiper-button-prev-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[120px] lg:top-[100px] left-[10px] z-50 -translate-x-1/2 bg-white shadow-lg"
                  >
                    <img
                      src="/images/arrow/arrow_right_black.svg"
                      width="10"
                      height="17"
                      alt=""
                      loading="lazy"
                      class="w-2 rotate-180"
                      role="presentation"
                    />
                  </button>
                  <button
                    aria-label="次へ"
                    class="swiper-button-next-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[120px] lg:top-[100px] right-[10px] z-50 translate-x-1/2 bg-white shadow-lg"
                  >
                    <img
                      src="/images/arrow/arrow_right_black.svg"
                      width="10"
                      height="17"
                      alt=""
                      loading="lazy"
                      class="w-2"
                      role="presentation"
                    />
                  </button>
                </Swiper>
              </div>
              <!-- /ビデオカルーセル -->
              <!-- レベルバー -->
              <div class="w-[335px] lg:w-[160px] lg:h-[186px] mt-[22px] lg:mt-3">
                <div class="">
                  <div
                    class="flex justify-center lg:justify-between items-center lg:flex-wrap gap-[10px] lg:gap-[1px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">やさしい</span>
                    <div
                      class="w-[213px] lg:w-full h-[6px] lg:mt-5 bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full lg:order-3 lg:-translate-y-[5px]"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 lg:order-2"
                        :style="{ left: activeInstructor.level.easiness + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">スパルタ</span>
                  </div>
                </div>

                <div class="mt-3 lg:mt-[30px]">
                  <div
                    class="flex justify-center lg:justify-between items-center lg:flex-wrap gap-[10px] lg:gap-[1px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">初心者向き</span>
                    <div
                      class="w-[213px] lg:w-full h-[6px] lg:mt-5 bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full lg:order-3 lg:-translate-y-[5px]"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 lg:order-2"
                        :style="{ left: activeInstructor.level.beginner + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">経験者向き</span>
                  </div>
                </div>

                <div class="mt-[14px] lg:mt-[30px]">
                  <div
                    class="flex justify-center lg:justify-between items-center lg:flex-wrap gap-[10px] lg:gap-[1px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">理論</span>
                    <div
                      class="w-[213px] lg:w-full h-[6px] lg:mt-5 bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full lg:order-3 lg:-translate-y-[4px]"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2 lg:order-2"
                        :style="{ left: activeInstructor.level.theory + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">感覚</span>
                  </div>
                </div>
              </div>
              <!-- /レベルバー -->
            </div>
          </div>

          <div
            class="w-[355px] lg:w-full mt-[22px] lg:mt-1 pt-5 lg:pt-0 border-transparent border-t-[#EEEEEE] border lg:border-none lg:translate-x-[33px]"
          >
            <div class="px-[10px] lg:px-0 lg:ml-[10px] mt-[2px] lg:mt-0">
              <h4
                class="text-[13px] leading-tight font-semibold tracking-widest pl-[10px] border-l-[3px] border-black border-solid"
              >
                プロフィール
              </h4>
              <p class="text-xs font-light pl-[10px] mt-[10px] line-clamp-3 lg:line-clamp-none leading-[19px] lg:leading-normal">
                <!-- TODO: モバイル時に、詳細表示押した段階で、clamp-noneにする機能 -->
                {{ activeInstructor.profile }}
              </p>
            </div>

            <div
              class="hidden lg:block py-[15px] pl-[10px] mt-10 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9] lg:ml-[18px] lg:w-[470px]"
            >
              <div class="lg:flex">
                <h4
                  class="text-xs font-semibold tracking-[-0.3px] pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid text-nowrap"
                >
                  対応スタジオ
                </h4>
                <p class="text-[10px] font-light">{{ activeInstructor.studios.join(' / ') }}</p>
              </div>
              <div class="mt-5 lg:flex">
                <h4
                  class="text-xs font-semibold tracking-[-0.5px] pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid"
                >
                  対応コース
                </h4>
                <p class="text-[10px] font-light">{{ activeInstructor.courses.join('、') }}</p>
              </div>
              <div class="mt-5 lg:flex">
                  <h4
                    class="text-xs font-semibold tracking-[-0.5px] pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid lg:pt-1"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(activeInstructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- /同期パネルコンテンツ（初期表示） -->

        <!-- 同期パネルコンテンツ（詳細表示） -->
        <div v-if="showDetails[0]">
          <div
            class="lg:hidden py-[15px] px-[15px] mx-5 mb-5 lg:mt-5 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
          >
            <div class="lg:flex">
              <h4
                class="text-xs font-semibold tracking-widest pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid"
              >
                スタジオ
              </h4>
              <p class="text-[10px] font-light">{{ activeInstructor.studios.join(' / ') }}</p>
            </div>
            <div class="mt-5 lg:flex">
              <h4
                class="text-xs font-semibold tracking-widest pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid"
              >
                対応コース
              </h4>
              <p class="text-[10px] font-light">{{ activeInstructor.courses.join('、') }}</p>
            </div>
            <div class="mt-5 lg:flex">
              <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] lg:w-[90px] flex-shrink-0 border-l-[2px] border-black border-solid lg:pt-1"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(activeInstructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
          </div>
          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <div class="lg:flex">
              <div class="w-[340px] shrink-0">
                <h4
                  class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-black border-solid"
                >
                  メンバー満足度
                  <span class="text-[10px] scale-80"
                    >回答数<span class="text-sm font-roboto font-semibold">{{
                      getTotalcount(activeInstructor)
                    }}</span
                    >件</span
                  >
                </h4>
                <div class="flex gap-8 mt-[10px]">
                  <div>
                    <div class="w-[120px] h-[120px] ml-5">
                      <Pie
                        :data="getChartData(activeInstructor)"
                        :options="{ responsive: true }"
                      />
                    </div>
                    <div class="mt-5">
                      <div
                        v-for="(count, index) in Object.values(activeInstructor.satisfactionCount)"
                        :key="index"
                      >
                        <div class="flex items-center mt-[6px]">
                          <img
                            :src="`/images/icon_satisfuction-face-${5 - index}.svg`"
                            width="26"
                            height="26"
                            alt=""
                            role="presentation"
                            loading="lazy"
                            class="w-5 h-5"
                            decoding="async"
                          />
                          <span class="text-[10px] ml-1">{{ labels[index] }}</span>
                          <span class="ml-2 text-[10px] font-semibold">
                            <span class="text-sm font-roboto">{{
                              (
                                (Number(count) / Number(getTotalcount(activeInstructor))) *
                                100
                              ).toFixed(1)
                            }}</span
                            >%<span class="text-xs font-roboto ml-[5px]">{{ count }}</span
                            >件
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- TODO: 件数から割合を計算するようにする -->
                  </div>
                  <div class="w-[110px] h-[300px]">
                    <img
                      :src="activeInstructor.image"
                      width="334"
                      height="880"
                      alt=""
                      role="presentation"
                      loading="lazy"
                      class="w-auto h-full object-cover object-top"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
                  <div
                    v-for="(review, reviewIndex) in activeInstructor.reviews.slice(
                      0,
                      showReviewsCount[0]
                    )"
                    :key="reviewIndex"
                    class="px-[10px] pt-[10px] pb-[5px] border-[#eee] border-[1px] rounded-lg bg-[#f9f9f9]"
                  >
                    <div class="flex items-start">
                      <div
                        class="w-[50px] h-[50px] rounded-full border border-black overflow-hidden shrink-0"
                      >
                        <img
                          :src="review.icon"
                          width="48"
                          height="48"
                          alt=""
                          role="presentation"
                          loading="lazy"
                          class="w-full h-full object-cover"
                          decoding="async"
                        />
                      </div>
                      <div class="flex flex-col w-full ml-[10px]">
                        <span class="text-xs font-semibold">{{ review.name }}</span>
                        <span class="text-[10px] mt-2">{{ review.course }}</span>
                        <span class="text-[10px]">{{ review.date }}</span>
                      </div>

                      <p class="flex items-center shrink-0">
                        <img
                          :src="`/images/icon_satisfuction-face-${review.rating}.svg`"
                          width="26"
                          height="26"
                          alt=""
                          role="presentation"
                          loading="lazy"
                          class="w-4 h-4"
                          decoding="async"
                        />
                        <span class="font-roboto font-semibold text-xs ml-1">{{
                          review.rating
                        }}</span>
                        <span class="font-semibold text-xs ml-2">{{
                          labels[5 - review.rating]
                        }}</span>
                      </p>
                    </div>

                    <p class="mt-[10px] text-xs font-light">{{ review.content }}</p>
                  </div>
                </div>
                <SquareButton
                  v-if="showReviewsCount[0] < maxReviewsCount(activeInstructor)"
                  class="mt-5"
                  @click="showMoreReviews(activeInstructor, 0)"
                  >口コミをもっと見る</SquareButton
                >
              </div>
            </div>
          </div>

          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <h4
              class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-black border-solid"
            >
              レッスンで心掛けていること
            </h4>
            <p class="text-xs font-light pl-[10px] mt-[10px]">
              {{ activeInstructor.philosophy }}
            </p>
          </div>

          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-[10px]">
              <div
                v-for="(policy, policyIndex) in activeInstructor.policies"
                :key="policyIndex"
                class="flex flex-start gap-[10px]"
              >
                <div class="w-[58px] h-[58px] p-[10px] border-[#ddd] border shrink-0 rounded-lg">
                  <img
                    :src="policy.icon"
                    width="48"
                    height="48"
                    alt=""
                    role="presentation"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 class="font-sm font-semibold">{{ policy.heading }}</h3>
                  <p class="text-[10px] font-light mt-[2px]">{{ policy.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /同期パネルコンテンツ（詳細表示） -->

        <div class="pb-5 lg:pb-2 lg:-translate-y-[10px]">
          <SquareButton
            :arrow="showDetails[0] ? 'up' : 'down'"
            width="small"
            class="h-[43px]"
            @click="toggleDetails(0)"
            >{{ showDetails[0] ? '閉じる' : '口コミ情報も見る' }}</SquareButton
          >
        </div>
      </div>
    </div>
    <!-- /同期パネル -->
    </div>
  </div>
</template>