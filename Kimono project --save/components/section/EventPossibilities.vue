<template>
  <section class="pt-14">
    <ItemsSubTitle>さらにひろがる可能性！</ItemsSubTitle>
    <div class="mt-3.5">
      <ItemsContentTitle>
        <h3 class="text-[28px] text-center whitespace-nowrap">
          イベントやスク婚<br />着物仲間との出会いも！
        </h3>
      </ItemsContentTitle>
    </div>
    <div class="max-w-[800px] w-full flex mx-auto items-start justify-between mt-24 max-lg:px-5 max-lg:mt-9">
      <div class="flex flex-col items-center mt-[62px] max-lg:mt-[140px]">
        <p class= "w-[140px] h-[138px] text-white relative z-10 text-[15px] text-center bg-[url('/images/flower-bg-2.svg')] bg-cover bg-no-repeat bg-center content-center max-lg:w-[100px] max-lg:h-[98px] max-lg:text-xs max-lg:right-10">
          レッスン＆<br />
          飲み会で<br />
          生まれる
        </p>
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-1.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] -mt-10 origin-center rotate-[-5deg] max-lg:w-[160px] max-lg:h-[100px] max-lg:rotate-0"
        />
        <span class="text-[30px] text-center text-[#E39597]">恋愛</span>
      </div>
      <div class="flex flex-col items-center -mx-8 max-lg:-mx-20 relative">
        <p class= "w-[140px] h-[138px] text-white relative z-10 text-[15px] right-12 text-center bg-[url('/images/flower-blue-bg-2.svg')] bg-cover bg-no-repeat bg-center content-center max-lg:w-[100px] max-lg:h-[98px] max-lg:text-xs">
          講師との間に<br>生まれる
        </p>
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-2.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] -mt-16 max-lg:w-[160px] max-lg:h-[100px] max-lg:-mt-8"
        />
        <span class="text-[30px] text-center text-[#7E9DD8] max-lg:absolute max-lg:top-16 max-lg:-right-8">絆</span>
      </div>
      <div class="flex flex-col items-center mt-[75px] max-lg:mt-[105px]">
        <p class= "w-[140px] h-[138px] text-white relative z-10 text-[15px] text-center bg-[url('/images/flower-bg-purple.svg')] bg-cover bg-no-repeat bg-center content-center max-lg:w-[100px] max-lg:h-[98px] max-lg:text-xs max-lg:left-10">
          趣味を通して<br>繋がる<br>一生モノの
        </p>
        <img
          quality="90"
          width="300"
          height="180"
          src="/images/possibility-img-3.webp"
          alt="possibility-img"
          class="w-[300px] h-[180px] -mt-16 origin-center rotate-6 max-lg:w-[160px] max-lg:h-[100px] max-lg:rotate-0 max-lg:-mt-10"
        />
        <span class="text-[30px] text-center text-[#AEAEFD]">恋愛</span>
      </div>
    </div>
    <div class="max-w-[800px] w-full overflow-hidden mx-auto mt-12 -mb-4">
      <img src="/images/ranking-divider.svg" alt="devider" width="800" height="20" loading="lazy" class="min-w-[800px] w-[800px] h-auto max-lg:mx-[-213px]" />
      <h4 class="text-[#D87E80] text-[45px] futura-pt text-center mt-9">Event</h4>
      <h5 class="lg:hidden text-xl mt-5 text-center">四季折々のイベントを企画</h5>
      <div
        class="w-full text-center mt-2 flex gap-9 items-end justify-center before:block before:w-0.5 before:h-12 before:bg-[#222222] before:origin-bottom before:-rotate-[20deg] after:block after:w-0.5 after:h-12 after:bg-[#222222] after:origin-bottom after:rotate-[20deg] max-lg:before:hidden max-lg:after:hidden max-lg:mt-5">
        <h3 class="text-xl max-lg:text-sm">
          わたしたち、EYS音楽教室のイベンターズが<br />四季折々のイベントを企画しています
        </h3>
      </div>
      <img src="/images/event-season-banner-compressed.webp" alt="event banner" width="800" height="400" loading="lazy" class="w-full h-auto mt-7" />
    </div>
    <div class="w-full bg-white relative pb-[38px] shadow-md">
      <div class="w-max text-center text-sm text-white bg-[#EEB0B0] py-2 px-[75px] rounded-full mx-auto relative bottom-6 after:border-x-8 after:border-x-transparent after:border-t-[16px] after:border-[#EEB0B0] after:absolute after:right-8 after:-bottom-2 max-lg:py-1.5">
        世代・性別・国籍・仕事も<br>
        違う仲間が集います！
      </div>
      <div class="flex justify-center items-start gap-4 flex-wrap">
        <div v-for="item, i in eventItems" :key="i" class="text-center w-[130px] max-lg:w-[100px]" :class="i%2 ? 'mt-5 max-lg:mt-0' : ''">
          <img :src="item.image" alt="event ranking avatar" width="130" height="120" loading="lazy" class="w-full h-auto rounded-[10px] max-lg:rounded-none" />
          <p class="text-sm mt-1.5 max-lg:text-xs" v-text="item.title" />
        </div>
      </div>
      <div class="flex justify-between items-center mx-auto max-w-[800px] gap-4 w-full overflow-hidden max-lg:justify-center mt-9">
        <hr class="w-[357px] border-t border-t-[#CCCCCC]">
        <span class="text-lg text-[#D87E80] font-bold whitespace-nowrap">Pick Up</span>
        <hr class="w-[357px] border-t border-t-[#CCCCCC]">
      </div>
      <div class="mt-9 flex justify-center gap-10 items-start max-lg:w-full max-lg:justify-start max-lg:overflow-x-auto max-lg:px-5">
        <div v-for="pick, i of picks.slice(0,5)" :key="i" class="w-[208px] min-w-[208px] text-center relative">
          <h5 class="text-[#222222] roboto font-bold text-[30px]">{{ pick.date }}</h5>
          <span class="text-xl tracking-[8px] roboto">{{ pick.day }}</span>
          <div class="flex items-center gap-2 justify-center mt-2 mb-3">
            <span class="px-[10px] py-[5px] text-[10px] text-[#05B0FD] border border-[#EEEEEE] rounded-full">{{ pick.status }}</span>
            <span v-if="pick.gap > 0" class="px-[10px] py-[5px] text-[10px] text-[#FF8822] border border-[#EEEEEE] rounded-full">残席わずか：{{ pick.gap }}席</span>
          </div>
          <img :src="pick.banner_url" :alt="pick.banner_title" width="208" height="208" loading="lazy" class="w-full h-auto rounded-[60px]" />
          <p class="absolute text-sm px-6 py-1.5 rounded-full text-white top-[275px] left-1/2 -translate-x-1/2 w-max" :class="i % 2 ? 'bg-[#2FBD9A]' : 'bg-[#8CCC4B]'">{{ pick.banner_title }}</p>
          <h6 class="text-[#222222] text-lg mt-[15px] mb-[14px]">{{ pick.title }}</h6>
          <div class="flex gap-2.5 items-center">
            <img :src="pick.user_avatar" :alt="pick.user_name" width="40" height="40" loading="lazy" class="w-[40px] h-[40px] rounded-full border border-[#EEEEEE]" />
            <div class="text-left">
              <p class="text-xs text-[#2FBD9A] font-bold">{{ pick.user_company }}</p>
              <p class="text-[13px]">{{ pick.user_name }}</p>
            </div>
          </div>
          <p class="text-xs text-left mt-[15px] mb-[10px]">{{ pick.description }}</p>
          <div class="flex items-center gap-2">
            <span class="block w-4 h-4 bg-[url('/images/yen-icon.svg')] bg-contain bg-no-repeat bg-center"></span>
            <span class="text-[13px]">{{ pick.price === 0 ? "無料" : pick.price+"円" }}</span>
          </div>
          <button class="py-2 pl-6 pr-10 text-white relative rounded-full shadow-md !bg-[#DDDDDD] mt-5 mx-auto after:block after:w-2 after:h-2 after:border-r after:border-t after:border-white after:absolute after:origin-center after:rotate-45 after:top-4 after:right-4" :class="pick.gap > 0 ? 'bg-gradient-to-r from-[#798DE4] to-[#92C9EF]' : ''">イベント申し込み</button>
        </div>
      </div>
    </div>
    <div class="pt-10 text-center">
      <button class="text-[13px] relative py-6 px-16 rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-t after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2">着物仲間と出会うイベントを見る</button>
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
