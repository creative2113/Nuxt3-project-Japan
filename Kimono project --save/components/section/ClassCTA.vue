<template>
  <section class="w-full bg-[#F2BFBF]">
    <div class="max-w-[800px] mx-auto w-full relative px-5">
      <img src="/images/class-grid-tile.svg" alt="grid tile" loading="lazy" class="w-[200px] h-[40px] absolute top-0 right-0" />
      <img src="/images/class-grid-tile.svg" alt="grid tile" loading="lazy" class="w-[200px] h-[40px] absolute bottom-0 left-0" />
      <div class="mx-auto max-w-[600px] relative w-full py-5 z-10">
        <div class="bg-white rounded-[10px] w-full p-[3px] flex justify-between relative max-lg:flex-col max-lg:rounded-none">
          <img src="/images/class-cta-label.webp" alt="class contact" loading="lazy" class="w-[98px] h-[98px] absolute -top-4 -left-4" />
          <img src="/images/class-cta-pc.webp" alt="class contact" loading="lazy" class="w-[260px] h-[193px] max-lg:hidden" />
          <img src="/images/class-cta-sp.webp" alt="class contact" loading="lazy" class="w-full h-[120px] lg:hidden" />
          <div class="text-center text-[#454545] pt-4 w-[330px]">
            <h3 class="text-lg max-lg:text-xs max-lg:mt-[18px]">─ 実際の授業が体験できる！─</h3>
            <h2 class="text-[#D87E80] text-4xl mt-4 mb-[15px] max-lg:text-[32px]">無料体験レッスン</h2>
            <h5 class="text-sm mt-4 max-lg:hidden">ON-girl着付け教室では、</h5>
            <h5 class="text-sm mt-1.5 max-lg:hidden">無料体験授業を随時行っています。</h5>
            <h5 class="text-sm mt-1.5 max-lg:hidden">まずはお気軽にお問い合わせください。</h5>
          </div>
        </div>
        <div class="flex items-stretch justify-between mt-2.5 max-lg:mt-5">
          <div class="flex items-center justify-center max-lg:hidden">
            <h5 class="text-xs text-[#454545] bg-[#DDDDDD] w-[120px] py-2 text-center">無料体験レッスンに<br>お申込みください</h5>
            <span class="w-0 h-0 border-r-0 border-l-[#DDDDDD] border-l-[20px] border-y-[24px] border-y-transparent"/>
          </div>
          <div
            class="w-max h-max rounded-full bg-white shadow-md flex justify-center items-center gap-[10px] py-[6px] px-[35px] max-lg:px-4 max-lg:gap-1"
          >
            <img
              src="/images/freedial.svg"
              loading="lazy"
              alt="dial"
              class="w-[21px] h-[14px] max-lg:w-[28px] max-lg:h-[18px]"
            />
            <img
              src="/images/dial-number.svg"
              alt="0120-978-900 電話受付：8:00~25:00"
              loading="lazy"
              class="w-[126px] h-[36px] max-lg:w-[100px]"
            />
          </div>
          <nuxt-link to="/apply" class="w-max rounded-full text-white bg-[#E39597] shadow-md py-2 px-[55px] max-lg:px-7 text-center">
            <p class="text-[11px] leading-3 text-nowrap">無料体験レッスン</p>
            <p class="text-[14px] leading-4 text-nowrap">お申込みフォーム</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>