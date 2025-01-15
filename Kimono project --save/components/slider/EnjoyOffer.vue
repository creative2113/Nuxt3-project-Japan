<template>
  <Swiper
    :modules="[SwiperNavigation, SwiperAutoplay, SwiperEffectCreative]"
    :loop="true"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :breakpoints="{
      320: {
        slidesPerView: 1.4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="offer, i of offers" :key="i" class="pt-5">
      <div class="relative w-[318px] flex flex-col justify-center rounded-[10px] max-lg:w-[235px]">
        <img
          :src="offer.banner_img"
          width="318"
          height="211"
          :alt="offer.for"
          loading="lazy"
          class="w-full h-auto"
        />
        <span
          class="py-2 pl-2.5 pr-4 rounded-r-full bg-[#E39597] text-white absolute top-[14px] left-0"
          >超入門者</span
        >
        <button aria-label="hard"
          class="block w-[54px] h-[54px] rounded-full shadow-md absolute top-1.5 right-1.5 bg-white bg-[url('/images/hard-line.svg')] bg-no-repeat bg-center bg-[length:25px]"
        ></button>
        <div class="px-1.5 py-3 bg-white text-[13px] leading-6 max-lg:text-[10px] max-lg:tracking-tighter">
          <div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">費用</span>
              <span>:</span>
              <p>
                <span class="text-[22px] roboto text-[#D87E80] font-bold italic"
                  >{{ offer.cost }}</span
                >
                円 / 月
              </p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">ジャンル</span>
              <span>:</span>
              <p>{{ offer.genre }}</p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">コース</span>
              <span>:</span>
              <p>{{ offer.course }}</p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">回数</span>
              <span>:</span>
              <p>回数の定めなし</p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">期間</span>
              <span>:</span>
              <p>{{ offer.duration }}</p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">開催方法</span>
              <span>:</span>
              <p>
                <span
                  class="py-0.5 pl-2 pr-4 bg-gradient-to-r from-[#7799FF] to-[#77DDFF] rounded-full mr-1 max-lg:pr-1"
                  >{{ offer.method }}</span>
                <span class="py-0.5 pl-2 pr-4 bg-[#DDDDDD] rounded-full max-lg:pr-1"
                  >動画見逃し配信</span>
              </p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="inline-block w-14">定員</span>
              <span>:</span>
              <p>
                <span>{{ offer.capacity.split("/")[0] }} /</span>
                <span class="text-[#D87E80]">{{ offer.capacity.split("/")[1] }}</span>
              </p>
            </div>
          </div>
          <div class="mt-[22px]">
            <p
              class="w-full text-center py-1 bg-[#EEB0B0] text-[15px] text-white"
            >
              プレゼント
            </p>
            <div
              class="bg-[#FDF3F1] py-2 px-[14px] flex items-center gap-[14px]"
            >
              <img
                :src="offer.present_img"
                width="54"
                height="54"
                alt="offer present"
                loading="lazy"
                class="border border-[#DDDDDD] rounded-full"
              />
              <span class="text-base">着物＆小物一式</span>
            </div>
          </div>
          <div class="flex items-center gap-6 mt-[10px]">
            <div class="flex items-center">
              <img
                v-for="i of 5"
                :key="i"
                src="/images/enjoy-follower-face.webp"
                width="40"
                height="40"
                alt="follower"
                class="border-2 border-white rounded-full shadow-sm -mr-2"
              />
            </div>
            <p class="text-[#D87E80] text-[13px]">…{{ offer.follow_num }}名が担当</p>
          </div>
        </div>
        <img
          :src="offer.graph_url"
          width="319"
          height="310"
          alt="offer graph"
          loading="lazy"
          class="w-full h-auto"
        />
        <div class="p-1 bg-white border-none">
          <button aria-label="詳しく見る"
            class="block w-full py-2.5 border border-[#999999] rounded-full relative after:block after:w-2 after:h-2 after:border-r-2 after:border-t-2 after:border-[#E39597] after:absolute after:origin-center after:rotate-45 after:right-3 after:top-1/2 after:-translate-y-1/2"
          >
            詳しく見る
          </button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

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
  follow_num: number;
  graph_url: string;
}
const offers : any = await (await fetch("/data/enjoyoffers.json")).json();
</script>

<style scoped lang="scss">
.swiper-slide-active {
  >div {
    border: solid 6px #E39597;
    position: relative;
    top: -20px;
    @media (max-width: 1024px) {
      border: solid 3px #E39597;
    }
  }
}
</style>