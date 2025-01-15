<template>
  <div>
    <h3 class="text-[30px] text-center font-bold max-lg:text-xl">料金</h3>
    <HookBracketsTitle class="mt-3">
      <h4 class="py-3 max-lg:py-1 max-lg:text-sm">シンプルな料金プランと<br />お得な割引制度が充実！</h4>
    </HookBracketsTitle>
    <div class="flex gap-7 justify-center bg-[#DDDDDD] mt-[60px] py-10 max-lg:gap-3">
      <div class="bg-white shadow-xl w-[357px] text-center max-lg:w-[125px]">
        <span class="block mx-auto w-1.5 h-3.5 bg-[#AAAAFF] max-lg:w-1 max-lg:h-2.5" />
        <h5 class="text-2xl mt-5 font-bold text-[#AAAAFF] max-lg:text-xl max-lg:mt-2">入会金</h5>
        <p class="mt-6 max-lg:mt-3">
          <span class="text-[30px] roboto font-bold max-lg:text-2xl">17,000</span>
          <span class="text-[18px] font-bold max-lg:text-base">円</span>
        </p>
      </div>
      <span class="block text-6xl text-[#666666] content-center max-lg:text-5xl"
        >+</span
      >
      <div class="bg-white shadow-xl w-[357px] text-center pb-3 max-lg:w-[125px]">
        <span class="block mx-auto w-1.5 h-3.5 bg-[#FF99BB] max-lg:w-1 max-lg:h-2.5" />
        <h5 class="text-2xl mt-5 font-bold text-[#FF99BB] max-lg:text-xl max-lg:mt-2">月会費</h5>
        <p class="mt-1 max-lg:mt-0">
          <span class="text-[30px] roboto font-bold max-lg:text-2xl">10,500</span>
          <span class="text-[18px] font-bold max-lg:text-base">円〜</span>
        </p>
        <p
          class="text-center tracking-[0.2em] font-bold mt-3.5 [&>b]:roboto [&>b]:text-2xl max-lg:[&>b]:text-xl max-lg:text-sm max-lg:mt-0"
        >
          月<b>2</b>回 ✕<b>55</b>分
        </p>
        <p class="text-center text-xs mt-2 max-lg:text-[10px] max-lg:text-left max-lg:px-3">※地域・回数等によって異なります</p>
      </div>
    </div>
    <div>
      <h3 class="text-[30px] text-center font-bold mt-[54px] max-lg:text-xl max-lg:mt-9">システム</h3>
      <HookBracketsTitle>
        <h4 class="py-3 max-lg:text-sm">
          グループレッスン・個人レッスン<br />お好きな方をお選びください
        </h4>
      </HookBracketsTitle>
      <div class="flex justify-center w-full mx-auto mt-20 bg-[#F9F9F9] border-y border-y-[#EEEEEE]">
        <picture>
          <source
            media="(max-width: 1024px)"
            srcset="/images/schedule-system-sp.webp 1x"
            type="image/webp"
          />
          <img
            src="/images/schedule-system-pc.webp"
            alt="price style"
            width="854"
            height="300"
            loading="lazy"
            decoding="async"
            class="max-w-[854px] w-full lg:-mt-20 max-lg:-mt-[50px] h-auto max-lg:w-[355px] -mx-auto"
          />
        </picture>
      </div>
      <div class="max-w-[1000px] mx-auto max-lg:bg-[#F9F9F9] max-lg:pb-5 max-lg:border-b">
        <div
          class="w-full flex justify-center gap-[112px] max-lg:block max-lg:w-[315px] mx-auto"
        >
          <div class="w-[384px] max-lg:w-full">
            <p
              class="text-xl font-bold pt-[21px] pb-[12px] relative text-center text-[#AAAAFF] w-[300px] max-lg:w-full mx-auto bg-[#AAAAFF48] border border-white shadow-md after:block after:absolute after:w-1.5 after:h-3.5 after:bg-[#A794EC] after:top-0 after:left-1/2 after:-translate-x-1/2"
            >
              個人レッスンのメリット
            </p>
            <div
              class="w-full flex max-lg:flex-col max-lg:gap-2 justify-between mt-7 items-start max-lg:mt-[15px]"
            >
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#A794EC] italic font-bold"
                  >1</span
                >
                <img
                  src="/images/schedule-system-photo-1.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  周囲の上達度を気にせず、スキルを伸ばせる
                </p>
              </div>
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full mt-3.5 max-lg:mt-0 max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#A794EC] italic font-bold"
                  >2</span
                >
                <img
                  src="/images/schedule-system-photo-2.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  先生とより仲良くなれる
                </p>
              </div>
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#A794EC] italic font-bold"
                  >3</span
                >
                <img
                  src="/images/schedule-system-photo-3.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  自分の都合でスケジュールを変更できる
                </p>
              </div>
            </div>
          </div>
          <div class="w-[384px] max-lg:w-full max-lg:mt-[30px]">
            <p
              class="text-lg pt-[21px] pb-[15px] relative text-center font-bold text-[#FF99BB] w-[300px] border border-white shadow-md max-lg:w-full mx-auto bg-[#FF99BB48] after:block after:absolute after:w-1.5 after:h-3.5 after:bg-[#FF99BB] after:top-0 after:left-1/2 after:-translate-x-1/2"
            >
              グループレッスンのメリット
            </p>
            <div
              class="w-full flex max-lg:flex-col max-lg:gap-2 justify-between mt-7 items-start max-lg:mt-[15px]"
            >
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#FF99BB] italic font-bold"
                  >1</span
                >
                <img
                  src="/images/schedule-system-photo-4.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  個人レッスンより月会費が安い
                </p>
              </div>
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full mt-3.5 max-lg:mt-0 max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#FF99BB] italic font-bold"
                  >2</span
                >
                <img
                  src="/images/schedule-system-photo-5.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  お花仲間ができる
                </p>
              </div>
              <div
                class="bg-white relative w-[120px] lg:h-[150px] shadow-lg max-lg:grid max-lg:grid-cols-[1fr_4fr_2fr] items-center max-lg:w-full max-lg:border-t"
              >
                <span
                  class="absolute -top-8 z-10 text-[40px] futura-pt left-1/2 max-lg:relative max-lg:-order-1 max-lg:left-0 max-lg:top-0 max-lg:text-center max-lg:transform-none max-lg:text-[28px] -translate-x-1/2 text-[#FF99BB] italic font-bold"
                  >3</span
                >
                <img
                  src="/images/schedule-system-photo-6.webp"
                  alt="price style"
                  width="384"
                  height="192"
                  class="w-full h-auto clip-img max-lg:order-1"
                />
                <p class="text-[13px] px-[10px] -mt-2 font-bold max-lg:text-center">
                  複数人で受講するので緊張から解放される
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-img {
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0 85%);
}
@media (max-width: 1024px) {
  .clip-img {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
  }
}
</style>
