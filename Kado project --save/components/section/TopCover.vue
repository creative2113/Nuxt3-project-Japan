<template>
  <section class="w-full max-lg:h-[530px] overflow-hidden relative lg:bg-[url('/images/top-cover-bg.webp')] bg-no-repeat bg-center bg-cover py-5 max-lg:py-0">
    <div class="max-w-[1000px] mx-auto w-full">
      <div class="absolute z-20 top-2.5 max-lg:hidden">
        <ContentCoverLink :links="links" />
      </div>
      <div class="absolute z-20 top-2.5 left-2.5 lg:hidden">
        <ContentCoverLink :links="[{ title: 'EYS華道&フラワー教室トップ', url: '/' }]" />
      </div>
    </div>
    <div class="absolute z-10 max-w-[1400px] w-full h-[475px] bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-t from-[#9999EE80] via-[#F6B7CC40] to-[#E2A1C401] pt-[60px] max-lg:h-[380px] max-lg:bottom-0 max-lg:pt-[138px]">
      <div class="bars-title">
        <h2 class="py-2 px-10 bg-white tracking-[0.35em] ryumin-pm max-lg:py-1 max-lg:px-2.5 max-lg:text-xs max-lg:tracking-[0.18em]">貴方の思うまま、気軽に自由に楽しめる</h2>
      </div>
      <img src="/images/cover-logo.svg" alt="logo" loading="lazy" decoding="async" width="485" height="80" class="w-[485px] h-auto mx-auto mt-2 max-lg:w-[303px]" />
      <div class="flex justify-center items-center gap-[50px] mt-4 max-lg:gap-[5px]">
        <div class="w-60 h-60 relative max-lg:w-[115px] max-lg:h-[115px]">
          <h3 class="absolute font-semibold w-full text-center z-20 top-0 pt-6 max-lg:text-[10px] max-lg:pt-3 max-lg:leading-3 max-lg:tracking-tighter">お花のこと全部<br>まとめて楽しめる♪</h3>
          <p class="absolute h-[31px] font-bold text-[11px] px-3 bg-white rounded-full text-center content-center z-20 bottom-14 left-7 max-lg:hidden">華道</p>
          <p class="absolute h-[31px] font-bold text-[11px] px-3 bg-white rounded-full text-center content-center z-20 bottom-2 left-1/2 -translate-x-1/2 max-lg:hidden">生花</p>
          <p class="absolute h-[31px] font-bold text-[11px] px-3 bg-white rounded-full text-center content-center z-20 leading-[13px] right-1.5 bottom-14 max-lg:hidden">フラワー<br>アレンジメント</p>
          <img src="/images/top-circle-1.webp" alt="eys-trial" width="240" height="240" loading="lazy" decoding="async" class="w-full h-full relative z-10" />
          <img src="/images/top-circle-flower-1.webp" alt="eys-flower" width="150" height="164" loading="lazy" decoding="async" class="w-[150px] h-auto absolute -bottom-2.5 -right-5 max-lg:w-[88px] max-lg:-bottom-6 max-lg:-right-6" />
        </div>
        <div class="w-60 h-60 relative max-lg:w-[115px] max-lg:h-[115px]">
          <h3 class="absolute font-semibold w-full text-center z-20 top-0 pt-6 max-lg:text-[10px] max-lg:pt-3 max-lg:leading-3 max-lg:tracking-tighter">ゼロから学べて<br>　初心者でも安心♪</h3>
          <img src="/images/top-circle-2.webp" alt="eys-trial" width="240" height="240" loading="lazy" decoding="async" class="w-full h-full relative z-10" />
          <img src="/images/top-circle-flower-2.webp" alt="eys-flower" width="242" height="223" loading="lazy" decoding="async" class="w-[242px] h-auto absolute -top-[58px] -right-[54px] max-lg:w-[86px] max-lg:-top-[26px] max-lg:-right-4" />
        </div>
        <div class="w-60 h-60 relative max-lg:w-[115px] max-lg:h-[115px]">
          <h3 class="absolute font-semibold w-full text-center z-20 top-0 pt-6 max-lg:text-[10px] max-lg:pt-3 max-lg:leading-3 max-lg:tracking-tighter">業界最大級！<br>　コミュニティも充実♪</h3>
          <img src="/images/top-circle-3.webp" alt="eys-trial" width="240" height="240" loading="lazy" decoding="async" class="w-full h-full relative z-10" />
          <img src="/images/top-circle-flower-3.webp" alt="eys-flower" width="173" height="168" loading="lazy" decoding="async" class="w-[173px] h-auto absolute -bottom-[11px] -right-[21px] max-lg:w-[66px] max-lg:-bottom-4 max-lg:right-0" />
        </div>
      </div>
    </div>
    <picture>
      <source media="(max-width: 1024px)" srcset="/images/top-cover-sp.webp" type="image/webp">
      <img src="/images/top-cover.webp" width="1400" height="697" decoding="async" alt="top-cover" class="max-w-[1400px] h-auto w-full mx-auto" />
    </picture>
  </section>
</template>

<style lang="scss" scoped>
.bars-title {
  display: flex;
  justify-content: center;
  align-items: center;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 168px;
    height: 2px;
    background-color: white;
    @media (max-width: 1024px) {
      width: 30px;
      height: 1px;
    }
  }
}
</style>

<script lang="ts" setup>
const links = [
  {
    title: "EYS華道＆フラワー教室トップ",
    url: "/",
  },
  {
    title: "テキスト",
    url: "/",
  },
];
</script>