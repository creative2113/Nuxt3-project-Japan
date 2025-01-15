<template>
  <section class="w-full bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB]">
    <div class="max-w-[800px] mx-auto w-full relative px-5 py-5">
      <div class="mx-auto max-w-[600px] relative w-full z-10 max-lg:bg-white">
        <div class="bg-white rounded-[10px] w-full p-[3px] shadow-lg flex justify-between relative max-lg:rounded-none max-lg:p-0 max-lg:shadow-none">
          <img src="/images/class-cta-pc.webp" alt="class contact" width="260" height="192" loading="lazy" decoding="async" class="w-[260px] max-lg:w-[160px]" />
          <div class="text-center text-[#454545] pt-4 w-[330px] max-lg:pt-0">
            <h2 class="text-lg font-bold tracking-[0.25em] max-lg:text-sm max-lg:mt-2">実際の授業が体験できる！</h2>
            <h3 class="text-[#9999EE] font-bold text-4xl mt-4 mb-[15px] max-lg:text-[30px] max-lg:mt-2 max-lg:mb-0 max-lg:leading-7">無料体験レッスン</h3>
            <h4 class="text-sm mt-4 max-lg:hidden">EYS華道＆フラワー教室では、</h4>
            <h5 class="text-sm mt-1.5 max-lg:hidden">無料体験授業を随時行っています。</h5>
            <p class="text-sm mt-1.5 max-lg:hidden">まずはお気軽にお問い合わせください。</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-2.5 max-lg:mt-0 max-lg:bg-white max-lg:p-2">
          <div class="flex items-center justify-center max-lg:hidden">
            <h5 class="text-xs text-white bg-gradient-to-r tracking-tighter from-[#9999EE] to-[#E2A1C4] w-[120px] font-semibold py-2 text-center">無料体験レッスンに<br>お申込みください</h5>
            <span class="w-0 h-0 border-r-0 border-l-[#E2A1C4] border-l-[20px] border-y-[24px] border-y-transparent"/>
          </div>
          <div class="bg-white shadow-lg py-1 pl-5 pr-3 max-lg:px-1 max-lg:gap-1 max-lg:shadow-none">
            <p class="font-bold max-lg:hidden">
              <span class="text-[13px] pr-2">お電話で</span>
              <span class="text-[10px]">電話受付 : </span>
              <span class="roboto text-xs">8:00〜25:00</span>
            </p>
            <div class="flex justify-center items-center gap-1.5 max-lg:gap-0">
              <img
                src="/images/freedial.svg"
                loading="lazy" decoding="async"
                width="33"
                height="20"
                alt="dial"
                class="w-[33px] h-auto max-lg:w-[27px]"
              />
              <div class="font-semibold">
                <p class="text-2xl roboto max-lg:text-base leading-5">0120-978-900</p>
              </div>
            </div>
            <p class="lg:hidden text-[10px] font-bold roboto">（受付時間 8:00〜25:00）</p>
          </div>
          <nuxt-link to="/" class="text-white bg-black shadow-md text-xl tracking-tighter py-3 pl-7 pr-4 font-semibold max-lg:text-sm max-lg:py-2.5 max-lg:pl-5 max-lg:pr-3 arrow">
            無料体験レッスン
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.arrow {
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -4px;
    width: 14px;
    height: 14px;
    margin-left: 8px;
    border-top: solid 2px white;
    border-right: solid 2px white;
    transform: rotateZ(135deg);
    @media (max-width: 1024px) {
      width: 10px;
      height: 10px;
      border-top: solid 1px white;
      border-right: solid 1px white;
    }
  }
}
</style>