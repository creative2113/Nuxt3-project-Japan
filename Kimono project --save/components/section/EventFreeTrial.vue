<template>
  <section class="w-full relative">
    <div class="w-full bg-[#F7E4E5] pt-10 pb-[60px]">
      <h6 id="apply"
        class="bg-white rounded-full py-3 px-[60px] text-center text-[#D87E80] w-max mx-auto relative after:border-x-8 after:border-x-transparent after:border-t-[16px] after:border-t-white after:absolute after:right-8 after:-bottom-2">
        まずは無料体験レッスン！</h6>
      <h4 class="mt-4 text-[80px] gallatone text-[#D87E80] text-center">Free Trial</h4>
      <p class="mt-3.5 text-base text-center max-lg:mt-0">無料体験レッスンお申し込み</p>
      <nuxt-link to="/apply" class="block mt-10 bg-[#D87E80] text-white text-center w-[340px] mx-auto py-1.5 rounded-full">
        <p class="text-sm">無料体験レッスン</p>
        <h5 class="text-[22px]">お申込みフォーム</h5>
      </nuxt-link>
      <div class="max-w-[1000px] w-full mx-auto rounded-[7px] overflow-hidden">
        <div>
          <img src="/images/event-free-trial-banner.webp" alt="event free trial" width="1000" height="170"
            loading="lazy" class="w-full h-auto mt-7" />
        </div>
        <div>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/event-free-trial-sp.webp 1x, /images/event-free-trial-sp.webp 2x"
              type="image/webp"
              width="375"
              height="299"
            >
            <img src="/images/event-free-trial-function.webp" alt="event free trial" width="1000" height="186"
            loading="lazy" class="w-full h-auto" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>