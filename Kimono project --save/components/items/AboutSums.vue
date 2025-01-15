<template>
  <div class="w-[380px] flex flex-col items-center">
    <ItemsNodeTitle title="圧倒的な<br>On-girl会員数" />
    <div
      class="bg-white -mt-[30px] pt-[50px] pb-[84px] px-[20px] rounded-[10px] text-[#454545] max-lg:!bg-inherit yu-gothic"
    >
      <h3 class="text-center text-lg">
        着物&小物プレゼント！<br />
        圧倒的な支持を誇る着付け教室
      </h3>
      <h5 class="text-sm mt-[14px]">
        2008年にスタートしたEYS・ON
        girlスクール。音楽・ダンス・バレエを皮切りに、大人の文化・芸術スクールにイノベーションをもたらしてきました。未経験の方でも安心して通える理由があります。
      </h5>
      <div class="flex relative gap-2 pt-[40px]">
        <div class="flex flex-col justify-between">
          <span class="text-xs">2024</span>
          <span class="text-xs">2009</span>
        </div>
        <div>
          <img
            src="/images/arrow-chart.webp"
            alt="ON-girl全体の会員数"
            width="300"
            loading="lazy"
            height="auto"
          />
        </div>
        <div class="absolute right-0 bottom-0 flex items-center flex-col">
          <h6 class="text-base">ON-girl全体の会員数</h6>
          <p class="text-[10px]">(2023年現在)</p>
          <div class="flex justify-center items-center text-[22px] gap-[5px]">
            約<NumberPan :num="86234" />人
          </div>
        </div>
      </div>
    </div>
  </div>
  <img src="/images/about-line-sp.svg" width="335" height="20" class="w-full lg:hidden" />
  <div class="w-[380px] flex flex-col items-center max-lg:mt-[27px]">
    <ItemsNodeTitle title="リアル教室でも<br>オンラインでも" />
    <div
      class="bg-white -mt-[30px] pt-[50px] pb-5 px-5 rounded-[10px] text-[#454545] max-lg:!bg-inherit max-lg:pb-[38px]"
    >
      <h3 class="text-center text-lg">
        全国津々浦々、どこにいても<br />
        レッスンができます！
      </h3>
      <h5 class="text-sm mt-[14px]">
        駅チカで通いやすい教室は全国に続々拡大中。お近くに教室がなくてもオンラインレッスンもご用意していますので日本全国どこにいてもレッスンが可能。
      </h5>
      <div class="flex relative gap-2 mt-[43px]">
        <img
          src="/images/maponline.webp"
          alt="ON-girl全体の会員数"
          width="362"
          loading="lazy"
          height="301"
          class="w-full"
        />
      </div>
    </div>
  </div>
  <img src="/images/about-line-sp.svg" width="335" height="20" class="w-full lg:hidden" />
  <div class="w-full flex flex-col items-center mt-[47px] pb-40 max-lg:pb-5">
    <ItemsNodeTitle title="年代別・レベル別の<br>クラス分けで安心！" class="relative z-10" />
    <div
      class="w-full bg-white -mt-[30px] pt-[50px] rounded-[10px] text-[#454545] relative max-lg:!bg-inherit max-lg:pb-0 max-lg:pt-0"
    >
      <div class="flex relative gap-2 justify-center mt-[43px]">
        <img
          src="/images/chart.webp"
          alt="ON-girl全体の会員数"
          loading="lazy"
          width="444"
          height="440"
          class="w-[444px] h-[440px] max-lg:w-[350px] max-lg:h-[350px]"
        />
      </div>
      <span class="triangle"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.triangle {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  border-left: solid transparent 390px;
  border-right: solid transparent 390px;
  border-top: solid #FFFFFF 120px;
  transform: translateX(-50%);
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
</style>