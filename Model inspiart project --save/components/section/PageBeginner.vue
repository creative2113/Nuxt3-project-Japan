<template>
  <div class="pt-7">
    <h3 class="w-[309px] h-[102px] ml-[10px] pt-4 text-lg text-center text-white font-bold bg-[url('/images/page-beginner-section-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl">
      InspiartZのコミュニティーなら<br>先生や周りからも応援が続々と
    </h3>
    <div class="w-[335px] mx-auto bg-white shadow-[0_5px_20px_#00000040] -mt-5 rounded-b-[20px] pb-5">
      <img src="/images/page-beginner-section-banner.webp" alt="beginner" width="335" height="250" loading="lazy" decoding="async" class="w-full h-auto" />
      <h4 class="min-w-[355px] text-center bg-white mx-[-10px] py-4 rounded-[10px] shadow-md font-bold text-[15px]">
        未経験者・初心者が確実にステップアップできる<br>プログラムがあります！
      </h4>
      <img src="/images/beginner-mark.svg" width="58" height="64" alt="guitar" loading="lazy" decoding="async" class="w-[58px] h-auto mt-6 mb-3 mx-auto" />
      <AtomSectionTitle
        en_title="BEGINNER"
        title="楽譜が読めなくても大丈夫!"
        :sub_title="id !== 1 ? 'inspiartZのビギナー向けレッスンでは、<br>音階が記載されている楽譜を使用しています':''"
      />
      <p class="w-full px-[15px] mt-[18px] text-sm">inspiartZのビギナー向けレッスンは、音階が記載されている楽譜を使用。独自カリキュラムで未経験者も飽きずに楽しくレッスンできます。</p>
      <div class="mt-9 relative">
        <img v-if="id === 1" src="/images/beginner-section-banner.webp" width="335" height="310" alt="beginner" loading="lazy" decoding="async" class="w-full h-auto" />
        <img v-else src="/images/beginner-section-banner-2.webp" width="335" height="206" alt="beginner" loading="lazy" decoding="async" class="w-full h-auto" />
        <h3 class="w-[211px] h-[134px] ml-[10px] pt-4 text-lg text-center text-white font-bold bg-[url('/images/page-beginner-sub-section-title.svg')] bg-no-repeat bg-contain bg-center absolute z-10 drop-shadow-xl bottom-[-30px] left-3">
          ほとんどの会員様が<br>未経験から スタート<br>しています
        </h3>
      </div>
      <div class="min-w-[355px] bg-white mx-[-10px] py-2 rounded-[10px] shadow-md font-bold text-[15px] flex items-center px-8 justify-between">
        <p>inspiartZで<br>ギター初心者の人の割合</p>
        <img src="/images/buginner-number-chart.svg" width="98" height="98" alt="guitar" loading="lazy" decoding="async" class="w-[98px] h-auto" />
      </div>
      <img src="/images/arrow-bottom-yellow.svg" width="36" height="50" alt="guitar" loading="lazy" decoding="async"
      class="mx-auto my-[18px]" />
      <div
        class="min-w-[355px] h-[170px] mx-[-10px] bg-[url('/images/guitar-beginner-title-bg.svg')] bg-center bg-contain bg-no-repeat pt-[19px] drop-shadow-[0_5px_20px_#00000040]">
        <p class="text-white text-center text-[18px] font-semibold">
          ギターには
        </p>
        <h5 class="mt-4 w-max mx-auto text-center bg-white text-[#FFBB66] text-[24px] font-semibold py-1 px-9 rounded-[10px]">
          タブ譜という<br>初心者の味方が！
        </h5>
      </div>
      <img v-if="id === 1" src="/images/guitar-buginner-image.webp" width="315" height="386" alt="guitar" loading="lazy" decoding="async" class="mx-auto w-[315px] h-auto mt-2" />
      <img v-if="id === 2" src="/images/guitar-buginner-image-2.webp" width="315" height="373" alt="guitar" loading="lazy" decoding="async" class="mx-auto w-[315px] h-auto mt-4" />
      <img v-if="id === 3" src="/images/guitar-buginner-image-3.webp" width="335" height="253" alt="guitar" loading="lazy" decoding="async" class="mx-auto w-[335px] h-auto mt-4" />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  id: number;
}>();
</script>