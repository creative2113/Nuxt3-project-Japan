<template>
  <div>
    <div class="w-full p-5">
      <img src="/images/dance-eys-dance-banner.webp" alt="top-about-image" width="335" height="120" loading="lazy"
        decoding="async" class="w-full h-auto" />
    </div>
    <div
      class="w-[335px] mx-auto bg-white rounded-[20px] shadow-[0_5px_20px_#00000040] mt-[30px]"
    >
      <div>
        <h3
          class="text-center text-[20px] pt-3 font-bold text-white w-full bg-no-repeat bg-cover bg-center h-[104px] bg-[url('/images/dance-content-title-bg.svg')]"
        >
          68.000人のレッスン生/<br />所属アーティスト
        </h3>
        <h4 class="w-full px-5 text-wrap mt-5 text-sm text-center font-bold">
          10年で所属アーティスト/レッスン生が68,000人まで増えたのは、確かな<br />カリキュラムと育成の実績に他なりません。
        </h4>
        <img
          src="/images/page-summary-graph.svg"
          alt="page-summary-image"
          width="300"
          height="257"
          loading="lazy"
          decoding="async"
          class="w-[300px] h-auto mx-auto mt-6"
        />
      </div>
      <div class="bg-[#AAAAAA33] rounded-b-[20px]">
        <h3
          class="text-center text-[20px] pt-3 font-bold text-white w-full bg-no-repeat bg-cover bg-center mt-[30px] h-[104px] bg-[url('/images/dance-content-title-bg.svg')]"
        >
          スタジオ＆オンラインレッスンで<br />全国津々浦々までカバー
        </h3>
        <img
          src="/images/page-summary-map.webp"
          alt="page-summary-image"
          width="324"
          height="358"
          loading="lazy"
          decoding="async"
          class="w-[300px] h-auto ml-auto mt-3 relative z-10"
        />
        <div class="pt-[66px] bg-white mt-[-53px] rounded-b-[20px] clip-board">
          <h4 class="w-full px-5 text-wrap text-sm text-center font-bold">
            オンラインでも、リアルスタジオでも。<br />全国津々浦々、どこにいても<br />レッスンできる！
          </h4>
          <img
            src="/images/page-summary-people.webp"
            alt="page-summary-image"
            width="335"
            height="219"
            loading="lazy"
            decoding="async"
            class="w-full h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-board {
  clip-path: polygon(0 0, 100% 40px, 100% 0, 100% 100%, 0 100%);
}
</style>
