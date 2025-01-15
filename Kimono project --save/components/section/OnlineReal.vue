<template>
  <section class="w-full pb-20 bg-[#F7D6D155] max-lg:pb-10">
    <div
      class="w-full bg-[#EEB0B0] py-6 text-center text-white relative after:border-x-[400px] after:border-t-[120px] after:border-x-transparent after:border-t-[#EEB0B0] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[100%] max-lg:after:top-[50%]">
      <h2 class="text-2xl relative z-10" id="realSection">リアルの場合</h2>
      <h3
        class="text-[60px] max-lg:text-[40px] gallatone absolute left-1/2 top-[100%] -translate-x-1/2 z-10 origin-center -rotate-6 max-lg:top-3/4">
        Real
      </h3>
    </div>
    <div class="pt-[176px] max-lg:pt-28">
      <ItemsSubTitle>こだわり抜いた空間をご用意！</ItemsSubTitle>
      <div class="pt-3.5">
        <ItemsContentTitle>
          <h3 class="text-center text-[28px] whitespace-nowrap">
            駅近で通いやすい<br />全国16スタジオ
          </h3>
        </ItemsContentTitle>
      </div>
      <h4 class="text-6xl text-center gallatone text-[#D87E80] mt-12 origin-center -rotate-6 max-lg:text-5xl">Pick Up
      </h4>
    </div>
    <div class="w-full relative before:block before:absolute before:w-full before:h-[190px] before:bg-[#F7D6D1] before:bottom-0 before:left-0">
      <div class="max-w-[800px] w-full mx-auto relative max-lg:px-2.5">
        <div class="w-full pt-[60px] max-lg:pt-12">
          <h5 class="bg-[#E39597] text-white text-xl text-center mx-auto w-max py-1.5 px-6 mb-2.5 max-lg:text-xs max-lg:py-2 max-lg:px-4">代官山スタジオ</h5>
          <div class="w-full aspect-[2/1] relative max-lg:aspect-[3/2]">
            <img :src="studios[active].banner_url" alt="studio" width="800" height="540" loading="lazy" decoding="async" class="w-full h-full object-center" />
            <p class="absolute text-center text-white text-sm content-center w-[98px] h-[98px] bg-[url('/images/studio-mark.svg')] bg-contain bg-no-repeat bg-center -translate-y-1/2 top-0 max-lg:translate-x-0 -translate-x-1/2 left-0">人気<br>教室</p>
          </div>
        </div>
        <div class="py-5 relative max-lg:py-2.5 max-lg:mt-2.5">
          <SliderStudioSlider :studios="studios" @SetActive="setActive" />
        </div>
      </div>
    </div>
    <div class="w-full relative before:block before:absolute before:w-full before:h-[190px] before:bg-[#F7D6D1] before:bottom-0 before:left-0">
      <div class="max-w-[800px] w-full mx-auto relative max-lg:px-2.5">
        <div class="w-full pt-[60px] max-lg:pt-12">
          <h5 class="bg-[#E39597] text-white text-xl text-center mx-auto w-max py-1.5 px-6 mb-2.5 max-lg:text-xs max-lg:py-2 max-lg:px-4">銀座スタジオ</h5>
          <div class="w-full aspect-[2/1] relative max-lg:aspect-[3/2]">
            <img :src="studios[active2].banner_url" alt="studio" width="800" height="540" loading="lazy" decoding="async" class="w-full h-full object-center" />
            <p class="absolute text-center text-white text-sm content-center w-[98px] h-[98px] bg-[url('/images/studio-mark.svg')] bg-contain bg-no-repeat bg-center -translate-y-1/2 top-0 max-lg:translate-x-0 translate-x-1/2 right-0">新規<br>OPEN</p>
          </div>
        </div>
        <div class="py-5 relative max-lg:py-2.5 max-lg:mt-2.5">
          <SliderSecondStudioSlider :studios="studios" @SetActive="setSecondActive" />
        </div>
      </div>
    </div>
    <ItemsOnlineAndStudios :regions="regions" />
  </section>
</template>
<script lang="ts" setup>
const active = ref(0);
const active2 = ref(0);
function setActive(index: number) {
  active.value = index;
}
function setSecondActive(index: number) {
  active2.value = index;
}
const studios = await(await fetch('/data/studio.json')).json();
const regions = await(await fetch('/data/regions.json')).json();
</script>
