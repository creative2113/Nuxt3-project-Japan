<template>
  <div v-if="result" class="w-full mt-10 pb-10 bg-white rounded-[7px] overflow-hidden shadow-lg max-lg:mt-5">
    <h4
      class="text-center text-lg bg-[#AAAAAA] py-2 text-white">
      現在、開催中！</h4>
    <div class="w-full lg:w-[700px] mx-auto max-lg:w-[300px] pt-9">
      <div class="w-full flex justify-between items-center">
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
        <h4 class="text-2xl text-center text-[#D87E80] futura-pt">THEME</h4>
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
      </div>
      <h5 class="text-[28px] text-center mt-2 mb-2">{{ result?.title }}</h5>
      <hr class="w-full border-t-[5px] border-t-[#E39597] mt-5">
      <p class="text-lg text-center tracking-[0.25em] futura-pt mt-4">{{ from }} >>> {{ to }}</p>
      <ContestButton link="/contest/on" class="mt-5">コンテストに応募する</ContestButton>
      <img src="/images/ranking-divider.svg" width="700" height="20" alt="present" loading="lazy"
        class="w-full h-auto mt-10 max-lg:hidden" />
      <div class="pt-[26px] text-center">
        <h3 class="text-[32px] text-[#D87E80] futura-pt">PRIZE</h3>
        <h4 class="text-base">受賞者</h4>
      </div>
      <div class="max-w-[600px] w-full mx-auto">
        <div v-for="ranking_photo, i of result?.ranking_photos" :key="i"
          class="w-full flex justify-between items-center pt-8 relative max-lg:flex-col max-lg:items-start">
          <img src="/images/contest-detail-path.webp" alt="contest" :width="439" :height="227" loading="lazy" decoding="async" class="w-[439px] h-auto absolute max-lg:hidden" :class="i === 1 ? 'bottom-0 left-0' : ' -bottom-10 right-0'" />
          <div class="w-[300px] pt-6 relative">
            <div class="flex w-full justify-between items-center relative px-5 -mb-[50px] max-lg:-mb-[30px]">
              <div class="relative" :class="i === 1 ? 'order-1':''">
                <span class="text-[100px] leading-[100px] text-[#D87E80] futura-pt">{{ ranking_photo.ranking }}</span>
                <p v-if="i === 0" class="absolute text-[50px] text-[#E39597] gallatone -top-8 -left-8 -rotate-[5deg] leading-10 w-40">Grand
                  <span class="w-full block text-right">Prix</span>
                </p>
                <p v-if="i === 1" class="absolute text-[50px] text-[#E39597] gallatone -top-8 -left-8 -rotate-[5deg] leading-10">Second</p>
                <p v-if="i === 2" class="absolute text-[50px] text-[#E39597] gallatone -top-8 -left-8 -rotate-[5deg] leading-10">Third</p>
              </div>
              <div
                class="w-[100px] h-[100px] rounded-full p-[10px] bg-[#DDDDDDAA]">
                <div class="w-full h-full flex flex-col justify-center items-center bg-[#EEB0B0] rounded-full">
                  <span
                    class="text-[34px] -tracking-[0.07em] roboto font-bold text-white leading-7 pt-1 italic">{{
                    ranking_photo.points }}</span>
                  <hr class="w-12 border-t border-t-white" />
                  <p class="text-[10px] text-center mt-1">
                    応援<br />ポイント</p>
                </div>
              </div>
            </div>
            <div class="w-full bg-white rounded-[7px] overflow-hidden border border-[#DDDDDD]">
              <img :src="ranking_photo.photo" alt="contest result" :width="300" :height="300" loading="lazy"
                decoding="async" class="w-full h-auto" />
              <div class="flex p-2.5 items-center gap-2.5">
                <div class="w-[70px]">
                  <img :src="ranking_photo.avatar" :alt="ranking_photo.sns" :width="60" :height="60" loading="lazy" decoding="async" class="w-[60px] h-[60px] border-2 border-white shadow-md rounded-full" />
                  <img :src="ranking_photo.sns_icon" :alt="ranking_photo.sns" :width="30" :height="30" loading="lazy" decoding="async" class="w-[30px] h-[30px] rounded-full -mt-5 ml-auto" />
                </div>
                <p class="text-xs max-lg:text-[9px]">@{{ ranking_photo.username }}さん</p>
              </div>
            </div>
          </div>
          <div class="w-[260px] flex justify-between items-center gap-2.5 py-5 max-lg:w-full" :class="i === 1 ? '-order-1 max-lg:order-1 max-lg:justify-end' : 'max-lg:justify-start'">
            <img :src="result?.prizes[i]?.image" alt="contest prize" :width="100" :height="100" loading="lazy" decoding="async" class="w-[100px] h-auto" />
            <div class="flex flex-col justify-center gap-2 text-xs whitespace-nowrap" :class="i === 1 ? '-order-1 items-end text-right !gap-4' : ''">
              <span class="block w-[22px] h-[1px] bg-[#454545] origin-left" :class="i === 1 ? 'rotate-[30deg]' : 'rotate-[-30deg]'" />
              <p v-html="result?.prizes[i]?.title" />
              <span class="block w-[22px] h-[1px] bg-[#454545] origin-left" :class="i === 1 ? 'rotate-[-30deg]' : 'rotate-[30deg]'" />
            </div>
          </div>
        </div>
        <div class="w-full mt-10">
          <h6 class="text-center text-[50px] text-[#E39597] gallatone -rotate-[5deg]">For All</h6>
          <div class="w-full grid grid-cols-4 mt-5 rounded-[7px] overflow-hidden">
            <img v-for="other_photo, i of result?.other_photos.slice(0, 16)" :src="other_photo.photo" :alt="other_photo.username" :width="150" :height="150" loading="lazy" decoding="async" class="w-[150px] h-[150px] max-lg:w-[75px] max-lg:h-[75px]" />
          </div>
        </div>
        <div class="w-full flex lg:flex-col justify-center items-center mt-7 gap-2.5 max-lg:mt-5 max-lg:justify-end">
          <h5 class="text-center text-xs flex justify-center items-end gap-[22px] max-lg:leading-6 max-lg:gap-2 before:block before:w-[1px] before:h-[22px] before:bg-[#454545] before:origin-bottom before:rotate-[-30deg] after:block after:w-[1px] after:h-[22px] after:bg-[#454545] after:origin-bottom after:rotate-[30deg] max-lg:text-[10px] max-lg:flex-col max-lg:text-right max-lg:before:rotate-[-60deg] max-lg:after:origin-top max-lg:after:rotate-[60deg]">ご参加いただいた皆様、<br class="lg:hidden">ありがとうございました！<br>
            全員に？？？？をプレゼント！</h5>
          <img src="/images/contest-prize-img-4.webp" alt="contest" :width="100" :height="100" loading="lazy" decoding="async" class="w-[100px] h-auto" />
        </div>
        <ContestButton link="/contest/results" class="mt-10">すべての応募作品を見る</ContestButton>
      </div>
    </div>
  </div>
  <div v-else>
    <h4 class="w-full text-center text-[28px] futura-pt">Not Found this Contest!</h4>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  id: number;
}>();
interface ContestPrize {
  ranking: number;
  title: string;
  image: string;
}
interface ContestRankingPhoto {
  ranking: number;
  points: number;
  photo: string;
  username: string;
  avatar: string;
  sns: string;
  sns_icon: string;
}
interface ContestOtherPhoto {
  username: string;
  photo: string;
}
interface ContestResult {
  id: number;
  title: string;
  from: string;
  to: string;
  prizes: ContestPrize[];
  ranking_photos: ContestRankingPhoto[];
  other_photos: ContestOtherPhoto[];
}
const result = await (await (await fetch('/data/contestresults.json')).json()).find((x: ContestResult) => x.id === props.id);
const from = await (new Date(result.from).getMonth() + 1) + "." + new Date(result.from).getDate() + " " + getDayName(new Date(result.from));
const to = await (new Date(result.to).getMonth() + 1) + "." + new Date(result.to).getDate() + " " + getDayName(new Date(result.to));
</script>
