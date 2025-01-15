<template>
  <div>
    <h3
      class="w-[260px] h-[102px] ml-[10px] pt-[18px] text-lg text-center text-white font-bold bg-[url('/images/bass-curriculum-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl"
      v-html="data.title">
    </h3>
    <div
      class="-mt-4 w-[335px] mx-auto rounded-[20px] overflow-hidden shadow-[0_5px_20px_#00000040] bg-white p-[30px_10px_20px]">
      <h4 class="roboto-bold text-[22px] text-center tracking-[0.6em] italic">START!</h4>
      <img :src="data.startBanner" :alt="data.startSubTitle" width="315" height="244" class="w-full h-auto" />
      <h5 v-html="data.startSubTitle"></h5>
    </div>
    <img :src="data.stagesBanner" alt="stages" width="345" height="724" class="w-[345px] h-auto mx-auto drop-shadow-[0_3px_6px_#00000040]" />
    <h3
      class="w-[355px] h-[103px] mt-[10px] mx-auto pt-[18px] text-lg text-center text-white font-bold bg-[url('/images/bass-curriculum-live-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl"
      v-html="data.liveTitle">
    </h3>
    <div
      class="-mt-4 w-[335px] mx-auto rounded-[20px] overflow-hidden shadow-[0_5px_20px_#00000040] bg-white p-[30px_10px_20px]">
      <h4 class="roboto-bold text-[22px] text-center tracking-[0.6em] italic">LIVE!</h4>
      <img :src="data.liveBanner" alt="banner" width="315" height="244" class="w-full h-auto" />
    </div>
    <img :src="data.liveContent" alt="live" width="355" height="196" class="w-[355px] h-auto mx-auto rounded-[20px] shadow-[0_3px_6px_#00000040] relative -mt-5" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data: {
    title: string;
    startBanner: string;
    startSubTitle: string;
    stagesBanner: string;
    liveTitle: string;
    liveBanner: string;
    liveContent: string;
  }
}>();
</script>
