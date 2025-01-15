<template>
  <div
    class="fixed bottom-0 z-50 h-20 w-full bg-[#45454580] flex justify-center items-center gap-5 max-lg:gap-[5px] max-lg:h-[50px]">
    <div
      class="bg-white shadow-md font-semibold flex justify-center items-center gap-[10px] py-1.5 px-4 max-lg:gap-1 max-lg:px-4 max-lg:pt-3 relative max-lg:pb-1">
      <p class="lg:hidden text-[9px] text-center font-bold absolute w-full left-0 top-0.5">タップするだけでかけられます</p>
      <img src="/images/freedial.svg" alt="dial" class="w-[41px] h-[27px] max-lg:w-[28px] max-lg:h-[18px]"
        loading="lazy" />
      <div>
        <p class="text-2xl roboto max-lg:text-base">0120-978-900</p>
        <p class="text-xs max-lg:hidden">電話受付 :
          <span class="roboto">8:00〜25:00</span></p>
      </div>
    </div>
    <nuxt-link to="/"
      class="group relative text-2xl text-white font-semibold bg-black py-3.5 pl-8 pr-16 max-lg:text-[15px] max-lg:py-1 max-lg:pl-6 max-lg:pr-11">
      無料体験レッスン
      <span
        class="hidden group-hover:block absolute top-0 left-1/2 py-1 px-4 -translate-x-1/2 translate-y-[calc(-100%-2px)] text-nowrap text-sm rounded-[5px] bg-white text-[#9999EE] border border-[#88DDBB] max-lg:group-hover:hidden">
        わずか5分で即決お申込み！
        <span
          class="w-2.5 h-2.5 border border-r-[#88DDBB] border-b-[#88DDBB] border-l-transparent border-t-transparent inline-block absolute z-10 -bottom-1 left-1/2 translate-x-1/2 origin-center rotate-45 bg-white"></span>
      </span>
      <img src="/images/click-pointer.svg" alt="finger" width="38" height="55" loading="lazy" class="w-[38px] h-auto max-lg:w-[28px] absolute right-2 top-4 max-lg:top-2 max-lg:right-1" />
    </nuxt-link>
    <button @click="scrollToElm()"
      class="absolute w-20 h-20 -top-12 right-0 max-lg:w-12 max-lg:h-12 bg-[#45454580] flex items-center justify-center lg:-top-0"
      aria-label="ページトップへ">
      <img src="/images/arrow/arrow-up-simple-white.svg" alt="white" loading="lazy"
        class="w-[15px] h-[38px] max-lg:w-[7px] max-lg:h-[18px] relative lg:left-1" />
    </button>
  </div>
</template>
