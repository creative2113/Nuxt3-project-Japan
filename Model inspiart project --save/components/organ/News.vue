<script setup lang="ts">
defineProps({
  cards: {
    type: Array as PropType<
      Array<{
        updated: string;
        title: string;
        text: string;
        images: Array<string>;
        category: string;
        created: string;
        contributor: string;
        contributorImage: Array<string>;
        comment: string;
        bgColor: {
          start_r: number;
          start_g: number;
          start_b: number;
          middle_r?: number;
          middle_g?: number;
          middle_b?: number;
          end_r?: number;
          end_g?: number;
          end_b?: number;
        };
      }>
    >,
    default: () => [],
  },
});

const emit = defineEmits<{
  (event: "slideChange", index: number, activeIndex: number): void;
}>();

const thumbsSwipers = ref<any[]>([]);

const setThumbsSwiper = (index: number, swiper: any) => {
  thumbsSwipers.value[index] = swiper;
};

const handleSlideChange = (index: number, swiper: any) => {
  emit("slideChange", index, swiper.activeIndex);
};

const getCategoryBackground = (card: any) => {
  const { bgColor } = card;
  if (bgColor.middle_r && bgColor.end_r) {
    return `linear-gradient(90deg,
            rgba(${bgColor.start_r},${bgColor.start_g},${bgColor.start_b}, 1) 0%,
            rgba(${bgColor.middle_r},${bgColor.middle_g},${bgColor.middle_b}, 1) 50%,
            rgba(${bgColor.end_r},${bgColor.end_g},${bgColor.end_b}, 1) 100%)`;
  } else if (bgColor.end_r) {
    return `linear-gradient(90deg,
            rgba(${bgColor.start_r},${bgColor.start_g},${bgColor.start_b}, 1) 0%,
            rgba(${bgColor.end_r},${bgColor.end_g},${bgColor.end_b}, 1) 100%)`;
  } else {
    return `rgba(${bgColor.start_r},${bgColor.start_g},${bgColor.start_b}, 1)`;
  }
};
</script>

<template>
  <section
    class="pt-[58px] pb-10 bg-no-repeat bg-[url('/images/top-news-bg.svg')] bg-[-60px_-70px] bg-[length:130%]"
  >
    <div class="max-w-[375px] mx-auto">
      <AtomSectionTitle en_title="NEWS" title="新着ニュース" />
      <div
        id="news-slider"
        class="mt-5 ml-[12.5px] relative"
      >
        <Swiper
          :modules="[SwiperThumbs]"
          :loop="true"
          :slides-per-view="1.4"
          :space-between="30"
          class="!px-2"
        >
          <SwiperSlide
            v-for="(news, cIndex) in cards"
            :key="`news-${cIndex}`"
            class="swiper-slide-card bg-white rounded-[10px] min-w-[245px]"
          >
            <div
              class="rounded-[10px] relative pt-[17px]"
            >
              <div class="px-2.5">
                <div class="flex relative text-right">
                  <span
                    class="text-white font-bold px-3 tracking-[1px] py-[4px] text-[10px] absolute -top-2 -left-6"
                    :style="{
                      background: getCategoryBackground(news),
                    }"
                  >
                    {{ news.category }}</span
                  >
                  <span
                    class="text-[10px] text-[#666666] roboto-bold tracking-[-0.8px] translate-x-[140px] mt-0"
                    >{{ news.updated }}</span
                  >
                </div>
                <h2
                  class="text-sm font-bold mt-[14px]"
                >
                  {{ news.title }}
                </h2>
                <p
                  class="mt-[11px] text-[11px] font-normal"
                >
                  {{ news.text }}
                </p>
              </div>
              <Swiper
                :modules="[SwiperNavigation, SwiperThumbs]"
                loop
                :slides-per-view="1"
                class="main-swiper relative mt-3"
                :thumbs="{ swiper: thumbsSwipers[cIndex] }"
              >
                <SwiperSlide
                  v-for="(image, idx) in news.images"
                  :key="`main-image-${idx}`"
                  :class="{
                    '!h-[156px]': news.category !== '発表会 [ユビフェス]', // 通常の高さ
                    '!h-[206px]': news.category === '発表会 [ユビフェス]', // 特定のカテゴリーの場合の高さ
                  }"
                >
                  <img
                    :src="image"
                    width="245"
                    height="203"
                    alt=""
                    role="presentation"
                    class="!h-full !w-full object-cover"
                    decoding="async"
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                v-if="news.category !== '発表会 [ユビフェス]'"
                :modules="[SwiperNavigation, SwiperThumbs]"
                :slides-per-view="5"
                :space-between="6"
                class="thumbnail-swiper absolute b-0 l-0 !p-[5px] bg-black"
                @swiper="setThumbsSwiper(cIndex, $event)"
              >
                <SwiperSlide
                  v-for="(image, idx) in news.images"
                  :key="`thumb-${idx}`"
                  class="swiper-slide !w-10 !h-10 last:!mr-0"
                >
                  <img
                    :src="image"
                    width="40"
                    height="40"
                    alt=""
                    role="presentation"
                    class="!h-full !w-full object-cover"
                    decoding="async"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="p-2.5">
              <div
                v-for="(image, index) in news.contributorImage"
                :key="index"
                class="flex items-center"
              >
                <div
                  class="w-10 h-10 rounded-full border-0 border-white shadow-md"
                >
                  <img
                    :src="image"
                    width="40"
                    height="40"
                    alt=""
                    role="presentation"
                    decoding="async"
                  />
                </div>
                <div class="ml-2.5">
                  <span
                    class="text-[10px] text-[#666666] roboto-bold block"
                    >{{ news.created }}</span
                  >
                  <h3 class="text-xs font-bold">{{ news.contributor }}</h3>
                </div>
              </div>
              <p
                class="mt-3 text-[10px] rounded-[5px] font-light p-[4px_10px_10px_10px] bg-[#F6F6F6] relative before:absolute before:-top-[6px] before:left-[14px] before:w-0 before:h-0 before:border-r-[7px] before:border-r-transparent before:border-l-[7px] before:border-l-transparent before:border-b-[6px] before:border-b-[#F6F6F6] before:border-t-0"
              >
                {{ news.comment }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<style scoped>
.swiper-slide-card {
  max-width: 236px;
  margin: auto; /* カードを中央に配置 */
}
@media screen and (min-width: 1000px) {
  .swiper-slide-card {
    max-width: calc(100% / 3);
  }
}

/* サムネイルスライダーのスタイル調整 */
.thumbnail-swiper .swiper-slide {
  opacity: 0.5 !important; /* 選択されていないサムネイルを暗く表示 */
  transition: opacity 0.3s !important; /* スムーズな遷移効果 */
}
.thumbnail-swiper .swiper-slide-thumb-active {
  opacity: 1 !important; /* 選択されているサムネイルを明るく表示 */
}
</style>
