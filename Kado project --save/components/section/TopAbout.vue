<template>
  <div class="pt-[100px] w-full lg:bg-[url('/images/top-about-bg.webp')] lg:bg-contain lg:bg-bottom lg:bg-no-repeat">
    <div>
      <img src="/images/top-about-title.svg" alt="about" loading="lazy" decoding="async" width="240" height="261"
        class="w-[240px] h-auto mx-auto max-lg:w-[200px]" />
      <h2 class="text-[30px] font-bold text-center mt-[-140px] max-lg:text-xl max-lg:mt-[-120px]">お花の癒しを感じながら<br>アート体験</h2>
      <div class="text-sm text-center mt-6 leading-7 max-lg:text-xs max-lg:leading-6">
        <p>『EYS華道＆フラワー教室』は、<br class="lg:hidden">EYS-STYLEがプロデュースする<br>
          華道＆アレンジフラワーコミュニティ。</p>
        <p>
          難しい“しきたり”にとらわれず、<br class="lg:hidden">ただのスクールにとどまらず、<br>
          アート感覚で毎日に「花」を<br class="lg:hidden">取り入れることができます。</p>
      </div>
      <div class="mt-7">
        <picture>
          <source media="(max-width: 1024px)" srcset="/images/top-about-sp.webp" type="image/webp">
          <img src="/images/top-about-main.webp" alt="about image" loading="lazy" decoding="async" width="1166px" height="320px" class="mx-auto" />
        </picture>
        <div class="flex justify-center gap-[30px] pb-9 max-lg:gap-3 max-lg:pt-5 max-lg:bg-[url('/images/top-about-bg-line-sp.webp')] max-lg:bg-contain max-lg:bg-bottom max-lg:bg-no-repeat max-lg:pb-7">
          <div class="relative">
            <img src="/images/top-pin-left.svg" alt="pin" loading="lazy" decoding="async" width="59" height="58" class="w-[60px] h-auto absolute -top-4 right-1/2 max-lg:w-[30px]" />
            <h3 class="font-bold text-[15px] max-lg:text-[11px] text-center mb-4 relative max-lg:mb-3">四季の花体験</h3>
            <img src="/images/top-about-1.webp" alt="about" loading="lazy" decoding="async" width="200" height="200" class="w-[200px] h-auto relative max-lg:w-[110px]" />
          </div>
          <div class="relative">
            <img src="/images/top-pin-center.svg" alt="pin" loading="lazy" decoding="async" width="70" height="28" class="w-[28px] h-auto absolute -top-4 left-1/2 max-lg:w-4" />
            <h3 class="font-bold text-[15px] max-lg:text-[11px] text-center mb-4 relative max-lg:mb-3">お花のある生活</h3>
            <img src="/images/top-about-2.webp" alt="about" loading="lazy" decoding="async" width="200" height="200" class="w-[200px] h-auto relative max-lg:w-[110px]" />
          </div>
          <div class="relative">
            <img src="/images/top-pin-right.svg" alt="pin" loading="lazy" decoding="async" width="59" height="58" class="w-[60px] h-auto absolute -top-4 left-1/2 max-lg:w-[30px]" />
            <h3 class="font-bold text-[15px] max-lg:text-[11px] text-center mb-4 relative max-lg:mb-3 max-lg:-mt-2 max-lg:leading-[12px]">テーブル<br class="lg:hidden">コーディネイト</h3>
            <img src="/images/top-about-3.webp" alt="about" loading="lazy" decoding="async" width="200" height="200" class="w-[200px] h-auto relative max-lg:w-[110px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>