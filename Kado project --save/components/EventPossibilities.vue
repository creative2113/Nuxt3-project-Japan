<template>
  <section class="-mt-16 shadow-md">
    <div class="max-w-[800px] w-full flex mx-auto items-start justify-between mt-24 max-lg:px-5 max-lg:mt-9">
      <div class="flex flex-col items-center mt-[62px] max-lg:mt-[140px]">
        <img
          src="/images/event-possibility-title-1.svg"
          alt="possibility-img"
          width="153"
          height="94"
          loading="lazy"
          decoding="async"
          class="w-[153px] h-auto relative z-10 drop-shadow-lg -mt-16 max-lg:w-[130px] max-lg:-mt-8"
        />
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-1.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] border-2 border-white shadow-lg -mt-6 origin-center rotate-[-5deg] max-lg:w-[160px] max-lg:h-[100px] max-lg:rotate-0"
        />
        <span class="text-[30px] text-center text-[#E39597]">恋愛</span>
      </div>
      <div class="flex flex-col items-center -mx-8 max-lg:-mx-20 relative">
        <img
          src="/images/event-possibility-title-2.svg"
          alt="possibility-img"
          width="153"
          height="94"
          loading="lazy"
          decoding="async"
          class="w-[153px] h-auto relative z-10 drop-shadow-lg -mt-16 max-lg:w-[130px] max-lg:-mt-14"
        />
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-2.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] border-2 border-white shadow-lg -mt-6 max-lg:w-[160px] max-lg:h-[100px] max-lg:-mt-4"
        />
        <span class="text-[30px] text-center text-[#7E9DD8] max-lg:absolute max-lg:top-0 max-lg:-right-8">絆</span>
      </div>
      <div class="flex flex-col items-center mt-[75px] max-lg:mt-[105px]">
        <img
          src="/images/event-possibility-title-3.svg"
          alt="possibility-img"
          width="153"
          height="94"
          loading="lazy"
          decoding="async"
          class="w-[153px] h-auto relative z-10 drop-shadow-lg -mt-16 max-lg:w-[130px] max-lg:-mt-8"
        />
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-3.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] border-2 border-white shadow-lg -mt-6 origin-center rotate-6 max-lg:w-[160px] max-lg:h-[100px] max-lg:rotate-0 max-lg:-mt-10"
        />
        <span class="text-[30px] text-center text-[#40DD9D]">仲間</span>
      </div>
    </div>
    <div class="max-w-[800px] w-full overflow-hidden mx-auto mt-5">
      <img src="/images/event-title.svg" alt="possibility-img" width="150" height="53" loading="lazy" decoding="async" class="w-[150px] mx-auto h-auto" />
      <div
        class="w-full text-center mt-[25px] flex gap-9 items-end justify-center before:block before:w-0.5 before:h-12 before:bg-[#222222] before:origin-bottom before:-rotate-[20deg] after:block after:w-0.5 after:h-12 after:bg-[#222222] after:origin-bottom after:rotate-[20deg] max-lg:before:w-[1px] max-lg:after:w-[1px] max-lg:gap-6 max-lg:mt-4">
        <h3 class="text-xl max-lg:text-sm font-bold">
          わたしたち、EYS音楽教室の<br class="lg:hidden">イベンターズが<br class="max-lg:hidden"/>四季折々のイベントを<br class="lg:hidden">企画しています
        </h3>
      </div>
      <img src="/images/event-season-banner-compressed.webp" alt="event banner" width="800" height="400" loading="lazy" class="w-full h-auto mt-7 max-lg:mt-[18px]" />
    </div>
    <div class="w-full bg-white relative pt-1">
      <img src="/images/event-season-title.svg" alt="possibility-img" width="234" height="112" loading="lazy" decoding="async" class="w-[234px] h-auto mx-auto drop-shadow-lg -mt-16 max-lg:-mb-4" />
      <div class="flex justify-center items-start gap-4 flex-wrap">
        <div v-for="item, i in eventItems" :key="i" class="text-center w-[130px] max-lg:w-[100px]" :class="i%2 ? 'mt-5 max-lg:mt-0' : ''">
          <img :src="item.image" alt="event ranking avatar" width="130" height="120" loading="lazy" class="w-full h-auto rounded-[10px]" />
          <p class="text-sm mt-1.5 max-lg:text-xs" v-text="item.title" />
        </div>
      </div>
    </div>
    <div class="border-y border-y-[#A794EC] pb-7 mt-8">
      <img src="/images/pickup-title.svg" alt="pickup" width="110" height="68" loading="lazy" decoding="async" class="w-[110px] h-auto mx-auto drop-shadow-lg -mt-8" />
      <div class="flex justify-center gap-10 items-start max-lg:w-full max-lg:justify-start max-lg:overflow-x-auto max-lg:px-5">
        <div v-for="pick, i of picks.slice(0,5)" :key="i" class="w-[208px] min-w-[208px] text-center relative">
          <h5 class="text-[#222222] roboto font-bold text-[30px]">{{ pick.date }}</h5>
          <span class="text-xl tracking-[8px] roboto">{{ pick.day }}</span>
          <div class="flex items-center gap-2 justify-center mt-2 mb-3">
            <span class="px-[10px] py-[5px] text-[10px] text-[#05B0FD] border border-[#EEEEEE] rounded-full" :class="pick.gap === 0 ? 'text-[#FF4444]' : ''">{{ pick.status }}</span>
            <span v-if="pick.gap > 0" class="px-[10px] py-[5px] text-[10px] text-[#FF8822] border border-[#EEEEEE] rounded-full">残席わずか：{{ pick.gap }}席</span>
          </div>
          <img :src="pick.banner_url" :alt="pick.banner_title" width="208" height="208" loading="lazy" class="w-full h-auto rounded-[60px] drop-shadow-lg" />
          <p class="absolute text-sm px-6 py-1.5 rounded-full text-white top-[275px] left-1/2 -translate-x-1/2 w-max" :class="i % 2 ? 'bg-[#2FBD9A]' : 'bg-[#8CCC4B]'">{{ pick.banner_title }}</p>
          <h6 class="text-[#222222] text-lg font-bold mt-[15px] mb-[14px]">{{ pick.title }}</h6>
          <div class="flex gap-2.5 items-center">
            <img :src="pick.user_avatar" :alt="pick.user_name" width="40" height="40" loading="lazy" class="w-[40px] h-[40px] rounded-full border border-[#EEEEEE]" />
            <div class="text-left">
              <p class="text-xs text-[#2FBD9A] font-bold">{{ pick.user_company }}</p>
              <p class="text-[13px]">{{ pick.user_name }}</p>
            </div>
          </div>
          <p class="text-xs text-left mt-[15px] mb-[10px]">{{ pick.description }}</p>
          <div class="flex items-center gap-2">
            <span class="block w-4 h-4 bg-[url('/images/deco_money.svg')] bg-contain bg-no-repeat bg-center"></span>
            <span class="text-[13px]">{{ pick.price === 0 ? "無料" : pick.price+"円" }}</span>
          </div>
          <button class="py-2 pl-6 pr-10 text-white relative rounded-full shadow-md !bg-[#DDDDDD] mt-5 mx-auto after:block after:w-2 after:h-2 after:border-r after:border-t after:border-white after:absolute after:origin-center after:rotate-45 after:top-4 after:right-4" :class="pick.gap > 0 ? 'bg-gradient-to-r from-[#798DE4] to-[#92C9EF]' : ''">イベント申し込み</button>
        </div>
      </div>
    </div>
    <div class="py-[30px]">
      <SquareButton width="medium" class="max-lg:w-[300px] mx-auto">仲間と出会うイベントを見る</SquareButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Item {
  image: string
  title: string
}
interface Pick {
  title: string
  description: string
  price: number
  date: string
  day: string
  status: string
  gap: number
  banner_url: string
  banner_title: string
  user_avatar: string
  user_company: string
  user_name: string
}
const eventItems : Item[] = await (await fetch("/data/eventitems.json")).json();
const picks : Pick[] = await (await fetch("/data/eventpicks.json")).json();
</script>
