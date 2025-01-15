<template>
  <div>
    <div class="w-full max-w-[1000px] mx-auto relative z-10">
      <h2 class="text-[30px] font-bold text-center bg-[#9999EE] py-5 text-white max-lg:text-xl max-lg:py-3">全国の教室一覧</h2>
      <div class="pt-[52px] max-lg:pt-0">
        <h4
          class="text-7xl text-center gallatone text-[#222222] mt-12 origin-center -rotate-6 max-lg:text-5xl max-lg:mt-7 savoye">
          Pick Up
        </h4>
        <img src="/images/pickup-title-bottom.svg" alt="pick up" width="228" height="48" loading="lazy" decoding="async"
          class="w-[228px] h-auto mx-auto -mt-6 object-center max-lg:w-[189px]" />
      </div>
    </div>
    <div
      class="w-full relative before:block before:absolute before:w-full before:h-[190px] before:bg-gradient-to-r before:from-[#E6E9FD] before:to-[#FDF2FB] before:bottom-0 before:left-0">
      <div class="max-w-[800px] w-full mx-auto relative max-lg:px-2.5">
        <div class="w-full pt-[60px] max-lg:pt-4">
          <h5
            class="bg-[#9999EE] text-white text-xl font-bold text-center mx-auto w-max py-1.5 px-6 mb-2.5 max-lg:text-xs max-lg:p-2.5">
            代官山スタジオ
          </h5>
          <div class="w-full aspect-[2/1] relative max-lg:aspect-[3/2]">
            <img :src="studios[active].banner_url" alt="studio" width="800" height="540" loading="lazy" decoding="async"
              class="w-full h-full object-center" />
            <p
              class="absolute text-center text-white text-sm font-bold content-center w-[70px] h-[70px] bg-[url('/images/pickup-slider-mark-pink.svg')] bg-contain bg-no-repeat bg-center -translate-y-1/2 top-6 max-lg:translate-x-0 translate-x-1/2 right-6 max-lg:right-0 max-lg:top-0">
              新規<br />OPEN
            </p>
          </div>
        </div>
        <div class="py-5 relative max-lg:py-2.5 max-lg:mt-2.5">
          <StudioSlider :studios="studios" @SetActive="setActive" />
        </div>
      </div>
    </div>
    <div
      class="w-full relative before:block before:absolute before:w-full before:h-[190px]  before:bg-gradient-to-r before:from-[#E6E9FD] before:to-[#FDF2FB] before:bottom-0 before:left-0">
      <div class="max-w-[800px] w-full mx-auto relative max-lg:px-2.5">
        <div class="w-full pt-[60px] max-lg:pt-12">
          <h5
            class="bg-[#9999EE] text-white text-xl font-bold text-center mx-auto w-max py-1.5 px-6 mb-2.5 max-lg:text-xs max-lg:p-2.5">
            銀座スタジオ
          </h5>
          <div class="w-full aspect-[2/1] relative max-lg:aspect-[3/2]">
            <img :src="studios[active2].banner_url" alt="studio" width="800" height="540" loading="lazy"
              decoding="async" class="w-full h-full object-center" />
            <p
              class="absolute text-center text-white font-bold text-sm content-center w-[70px] h-[70px] bg-[url('/images/pickup-slider-mark-green.svg')] bg-contain bg-no-repeat bg-center -translate-y-1/2 top-6 max-lg:translate-x-0 -translate-x-1/2 left-6 max-lg:left-0 max-lg:top-0">
              人気<br />教室
            </p>
          </div>
        </div>
        <div class="py-5 relative max-lg:py-2.5 max-lg:mt-2.5">
          <SecondStudioSlider :studios="studios" @SetActive="setSecondActive" />
        </div>
      </div>
    </div>
  </div>
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
const studios = await(await fetch("/data/studio.json")).json();

</script>