<template>
  <div
    class="fixed bottom-0 z-50 h-20 w-full bg-[#45454580] flex justify-center items-center gap-5 max-lg:gap-[5px] max-lg:h-[50px]">
    <div
      class="w-max h-max rounded-full bg-white shadow-md flex justify-center items-center gap-[10px] py-[10px] px-[28px] max-lg:gap-1 max-lg:px-4 max-lg:py-2">
      <img src="/images/freedial.svg" alt="dial" class="w-[41px] h-[27px] max-lg:w-[28px] max-lg:h-[18px]"
        loading="lazy" />
      <img src="/images/dial-number.svg" alt="0120-978-900 電話受付：8:00~25:00"
        class="w-[169px] h-[41px] max-lg:w-[113px] max-lg:h-[27px]" loading="lazy" />
    </div>
    <nuxt-link to="/apply"
      class="block group relative w-max rounded-full text-center text-white bg-[#E39597] shadow-md py-1 px-[50px] max-lg:py-1 max-lg:px-8">
      <p class="text-[14px] max-lg:text-[11px] text-nowrap ">無料体験レッスン</p>
      <p class="text-[22px] text-nowrap max-lg:text-[14px] max-lg:leading-4">お申込みフォーム</p>
      <span
        class="hidden group-hover:block absolute top-0 left-1/2 py-1 px-4 -translate-x-1/2 translate-y-[calc(-100%-2px)] text-nowrap rounded-[5px] bg-white text-[#D87E80] border border-[#D87E80] max-lg:group-hover:hidden">
        わずか5分で即決お申込み！
        <span
          class="w-2.5 h-2.5 border border-r-[#D87E80] border-b-[#D87E80] border-l-transparent border-t-transparent inline-block absolute z-10 -bottom-1 left-1/2 translate-x-1/2 origin-center rotate-45 bg-white"></span>
      </span>
    </nuxt-link>
    <button @click="scrollToElm()"
      class="absolute w-20 h-20 -top-12 right-0 max-lg:w-12 max-lg:h-12 bg-[#45454580] flex items-center justify-center lg:-top-0"
      aria-label="ページトップへ">
      <img src="/images/arrow/arrow_up-simple_white.svg" alt="white" loading="lazy"
        class="w-[15px] h-[38px] max-lg:w-[7px] max-lg:h-[18px] relative lg:left-1" />
    </button>
  </div>
</template>
