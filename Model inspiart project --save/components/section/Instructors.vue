<template>
  <div>
    <div class="pt-7">
      <h3
        class="w-[201px] h-[112px] ml-[10px] pt-5 text-lg text-center text-white font-bold bg-[url('/images/page-instructors-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl">
        あなたを最速で<br>プロレベルの技術に！
      </h3>
      <div class="w-full px-5 -mt-5">
        <img :src="`/images/page-instructors-top-${id}.webp`" width="335" height="250" alt="instructor" loading="lazy"
          decoding="async" class="w-full h-auto" />
      </div>
      <h4 class="text-[15px] font-bold text-center w-[355px] mx-auto py-[18px] rounded-[10px] shadow-md">
        プロデビューの為に厳選した<br>カリキュラムと講師を揃えています！</h4>
      <div class="flex items-center justify-between pt-[30px] pb-[26px] px-[30px]">
        <div @click="isInstructorList = false" :class="!isInstructorList && ['tab-active']"
          class="w-[140px] h-[140px] rounded-full border-[3px] border-white shadow-lg bg-[#E3E3E3] text-[#666666] text-center content-center font-bold cursor-pointer relative">
          <h6 class="text-[30px] leading-[30px]">最高の</h6>
          <p class="text-[18px]">カリキュラム</p>
          <hr v-show="!isInstructorList"
            class="border-t-[18px] border-t-[#C7C7C7] border-x-[20px] border-x-transparent w-0 absolute bottom-[-26px] left-1/2 -translate-x-1/2" />
        </div>
        <img src="/images/cross-black-icon.svg" alt="cross" width="30" height="30" loading="lazy" decoding="async">
        <div @click="isInstructorList = true" :class="isInstructorList && ['tab-active']"
          class="w-[140px] h-[140px] rounded-full border-[3px] border-white shadow-lg bg-[#E3E3E3] text-[#666666] text-center content-center font-bold cursor-pointer relative">
          <p class="text-[18px]">優秀な</p>
          <h6 class="text-[30px] leading-[30px]">講師</h6>
          <hr v-show="isInstructorList"
            class="border-t-[18px] border-t-[#C7C7C7] border-x-[20px] border-x-transparent w-0 absolute bottom-[-26px] left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
    <OrganSatisfactionIndexRanking v-show="isInstructorList" :instructors="instructors" />
    <OrganGuitarInstructorCurriculums v-if="!isInstructorList && (id === 1)" />
    <OrganBassInstructorCurriculums v-if="!isInstructorList && (id === 2 || id === 3)" :data="CurriculumData[id - 2]" />
    <OrganVocalCurriculums v-if="!isInstructorList && (id === 4)" />
  </div>
</template>

<script setup lang="ts">
const isInstructorList = ref(true);


const instructors = ref();
instructors.value = await(await fetch('/data/instructors.json')).json();

defineProps<{
  id: number;
}>();

const CurriculumData = [
  {
    title: "代表的なエレキベースの<br>楽しみ方をご紹介！",
    startBanner: "/images/bass-curriculum-start-banner.webp",
    startSubTitle: "ベースはリズムとハーモニーの狭間",
    stagesBanner: "/images/bass-curriculum-stages-banner.webp",
    liveTitle: "仕上げはライブで練習の<br>成果を思いっきり披露！",
    liveBanner: "/images/bass-curriculum-live-banner.webp",
    liveContent: "/images/bass-curriculum-live-content.svg",
  },
  {
    title: "代表的なドラムの<br>楽しみ方をご紹介！",
    startBanner: "/images/drum-curriculum-start-banner.webp",
    startSubTitle: "ドラムはリズムとハーモニーの狭間",
    stagesBanner: "/images/drum-curriculum-stages-banner.webp",
    liveTitle: "仕上げはライブで練習の<br>成果を思いっきり披露！",
    liveBanner: "/images/drum-curriculum-live-banner.webp",
    liveContent: "/images/bass-curriculum-live-content.svg",
  }];
</script>

<style scoped>
.tab-active {
  color: white;
  background-image: linear-gradient(to right bottom, #FE88BB, #AA99EE);
}
</style>
