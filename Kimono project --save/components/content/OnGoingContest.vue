<script lang="ts" setup>
defineProps<{
  title: string;
  from: string;
  to: string;
  prizes: string[];
}>();
</script>
<template>
  <div
    class="max-w-[800px] w-full mx-auto border-4 border-[#E39597] bg-white pt-[43px] px-[46.5px] pb-[31px] rounded-[7px] shadow-md max-lg:px-0">
    <div class="w-full max-lg:overflow-hidden">
      <ItemsMainTitle opposite color="#F7D6D1">
        <div class="text-center pt-0.5 pb-[18px] leading-[55px] max-lg:-mx-5">
          <h2 class="text-[45px] text-[#D87E80] futura-pt">ON GOING</h2>
          <h3 class="text-base mt-1.5">開催中のコンテスト</h3>
        </div>
      </ItemsMainTitle>
    </div>
    <div class="w-full lg:w-[700px] lg:mx-auto pt-7 max-lg:px-[18px]">
      <div class="w-full flex justify-between items-center">
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
        <h4 class="text-2xl text-center text-[#D87E80] futura-pt">THEME</h4>
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
      </div>
      <h5 class="text-[28px] text-center mt-2 mb-2">{{ title }}</h5>
      <hr class="w-full border-t-[5px] border-t-[#E39597] mt-5">
      <p class="text-lg text-center tracking-[0.25em] futura-pt mt-4">{{ from }} >>> {{ to }}</p>
    </div>
    <div class="pt-6">
      <h6
        class="text-center text-lg flex justify-center items-end gap-[22px] leading-5 max-lg:leading-6 max-lg:gap-4 before:block before:w-[1px] before:h-[23px] before:bg-[#454545] before:origin-bottom before:rotate-[-30deg] after:block after:w-[1px] after:h-[23px] after:bg-[#454545] after:origin-bottom after:rotate-[30deg]">
        豪華商品<br class="lg:hidden">プレゼント！</h6>
      <div class="flex justify-center items-start pt-2">
        <img
          v-for="image, i of prizes"
          :src="image" alt="contest prize"
          :width="i === 0 ? 200 : 160"
          :height="i === 0 ? 200 : 160"
          loading="lazy"
          decoding="async"
          :class="i === 0 ?
          'relative -mx-[30px] max-lg:w-[160px] max-lg:h-[160px] max-lg:-mx-[42px]'
          :(i === 1 ? 'mt-[60px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mt-[50px] -order-1'
          : 'mt-[60px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mt-[50px]')" />
      </div>
    </div>
    <ContestButton link="/contest/ongoing" class="mt-5">詳細を見る</ContestButton>
  </div>
</template>
