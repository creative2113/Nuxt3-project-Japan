<template>
  <div class="px-5 py-10 mx-auto w-full bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] lg:hidden">
    <div class="bg-white p-[3px] rounded-bl-[30px] pb-9 relative shadow-lg">
      <div class="relative">
        <img src="/images/flower-sta.webp" alt="sta" width="300" height="180" loading="lazy" decoding="async"
          class="w-full h-auto mx-auto" />
        <span class="text-[30px] absolute savoye text-white text-center left-9 bottom-0">Free trial
          lesson</span>
      </div>
      <img src="/images/flower-cta-mark.svg" alt="無料で体験!!" width="92" height="92" loading="lazy" decoding="async"
        class="w-[92px] h-auto absolute -top-8 -right-3" />
      <p class="w-full text-[13px] leading-6 text-center mt-9">
        EYS華道＆フラワー教室では、全てのコースで<br />無料体験レッスンを受け付けています。<br />まずはお気軽にお問い合わせください。
      </p>
    </div>
    <div class="flex justify-between items-center mt-5">
      <div class="flex justify-center items-center gap-1.5 pl-4 pr-2 py-2 bg-white rounded-full shadow-md">
        <img src="/images/freedial.svg" loading="lazy" decoding="async" width="33" height="20" alt="dial"
          class="w-[21px] h-auto" />
        <div class="font-semibold">
          <p class="text-xl roboto leading-5">0120-978-900</p>
          <p class="text-[8px] font-bold roboto">
            （受付時間 8:00〜25:00）
          </p>
        </div>
      </div>
      <nuxt-link to="/"
        class="text-white bg-black shadow-md text-center tracking-tighter py-2 px-[23px] font-semibold rounded-full">
        <p class="text-[11px]">無料体験レッスン</p>
        <h6 class="text-sm -mt-1">お申込みフォーム</h6>
      </nuxt-link>
    </div>
  </div>
  <LazySectionClassCTA class="max-lg:hidden" />
</template>
