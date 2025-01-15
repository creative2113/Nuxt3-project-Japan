<template>
  <section
    class="py-[30px] relative before:absolute pt-0 lg:pt-[107px] before:w-full before:h-[120px] before:-top-[76px] before:lg:-top-[160px] before:lg:h-[320px] before:bg-[#FFFFFFB3] before:[clip-path:polygon(100%_0,0_100%,100%_100%)]  before:-z-20">
    <h2 class="text-center text-xl tracking-[0.2em] font-bold lg:text-[30px] text-[#444444] lg:-translate-y-6">
      EYS音楽教室を選ぶ理由
    </h2>
    <div class="bg-[#FFFFFFB3] lg:mt-[25px]">
      <HookBracketsTitle class="mt-[15px] lg:mt-[0px] py-0 lg:py-1 lg:-translate-y-6">
        <span class="mr-2 inline-block text-sm lg:text-base lg:translate-x-[3px] lg:-translate-y-[2px]">全国</span>
        <NumberPan :num="68434" class="mr-2 lg:translate-y-[5px]" />人が<br class="lg:hidden" />
        <span
          class="mt-2 lg:mt-3 tracking-[1.4px] lg:tracking-[4.7px] -translate-x-3 lg:-translate-x-[2px] lg:-translate-y-[2px] inline-block">通う音楽教室です</span>
      </HookBracketsTitle>
      <div class="mt-[10px] lg:mt-[6px] ">
        <p
          class="hidden lg:block text-center text-xs lg:text-sm lg:w-full mx-5 px-2 lg:mx-auto leading-6 lg:leading-normal tracking-[1.2px] lg:tracking-[1.4px] lg:-mt-[6px] lg:-translate-x-[2px]">
          音楽を気軽に楽しんでもらうために、業界初の幅広いサービスを取り添えています。
        </p>
        <p
          class="lg:hidden text-center text-xs lg:text-sm lg:w-full mx-5 px-0 lg:mx-auto leading-6 lg:leading-normal tracking-[1.2px] lg:tracking-[1.4px] lg:-mt-[6px] lg:-translate-x-[2px]">
          EYSならレッスンを一年間継続いただける方全員に、ラ<br />ンキングトップクラスの厳選楽器をプレゼント！
        </p>
      </div>

      <div class="flex flex-col mt-[95px] lg:mt-[92px] lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10">
        <!-- 圧倒的なEYS会員数 -->
        <div
          class="bg-[#FFF4FB] pt-10 pb-5 relative z-10 drop-shadow-lg order-1 lg:w-[410px] lg:rounded-[10px] lg:bg-white lg:pt-[70px] lg:px-[30px] lg:mr-2 lg:h-[540px]">
          <div class="max-w-[375px] mx-auto lg:mx-0 lg:max-w-full lg:w-full">
            <div class="absolute -top-[75px] left-1/2 -translate-x-1/2 lg:-top-[56px]">
              <img style="width: 202px; height: 112px;" class="drop-shadow-lg" src="/images/top-reason-title-pink.svg"
                alt="圧倒的なEYS会員数" loading="lazy" decoding="async" />
            </div>

            <h3
              class="text-center text-base font-semibold leading-7 lg:leading-8 tracking-widest lg:tracking-normal lg:text-lg  text-[#EE88AA]">
              楽器プレゼントと<br />緻密なボーカルカリキュラムで実現した<br />
              圧倒的な会員数を誇る大人の音楽教室
            </h3>
            <p
              class="text-sm text-custom-gray mt-2 lg:mt-4 px-5 lg:px-0 tracking-[1.8px] lg:tracking-[1px] leading-6 lg:leading-[24px]">
              EYSは2009年の立ち上げ以来、独自のサービス展開で年々会員数が増加中。圧倒的な会員数の伸びを誇っています。
            </p>
            <div class="relative mt-[18px] lg:mt-6 ml-5 lg:ml-0">
              <picture>
                <source media="(max-width: 999px)" srcset="/images/chart.svg" type="image/svg+xml" />
                <img class="w-[335px] lg:w-[329px]" width="330" height="234" src="/images/chart.svg"
                  alt="EYS会員数の推移" loading="lazy" decoding="async" />
              </picture>
              <div class="absolute text-center bottom-0 right-4 lg:right-0">
                <p class="text-base font-semibold">EYS全体の会員数</p>
                <span class="inline-block text-[10px]">（2023年現在）</span>
                <div>
                  <span class="inline-block text-[22px] font-semibold mr-0 lg:-mr-[2px]">約</span>
                  <NumberPan :num="68434" size="medium" />
                  <span
                    class="inline-block text-[22px] font-semibold ml-2 -translate-x-[3px] lg:translate-x-0 lg:ml-[5px]">人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-[#F7EFFF] h-[540px] pt-[35px] pb-[14px] mt-[105px] relative z-10 drop-shadow-lg order-3 lg:order-2 lg:w-[410px] lg:mt-0 lg:rounded-[10px] lg:bg-white lg:pt-[75px] lg:px-[25px] lg:-translate-x-[8px]">
          <div class="max-w-[375px] w-375 mx-auto lg:max-w-full lg:w-full">
            <div class="absolute -top-[75px] left-1/2 -translate-x-1/2 lg:-top-[56px]">
              <img class="w-[204px] object-cover drop-shadow-lg" style="width: 202px;height: 106px;" src="/images/top-reason-title-blue.svg"
                width="201" height="111" alt="教室・オンライン" loading="lazy" decoding="async" />
            </div>

            <h3
              class="text-center text-base font-semibold leading-7 lg:text-lg tracking-widest lg:tracking-normal lg:text-primary">
              オンラインでも、リアルスタジオでも。<br />
              全国津々浦々、どこにいても<br />
              レッスンができます！
            </h3>
            <p
              class="text-sm text-custom-gray mt-3 lg:mt-[30px] px-5 lg:px-0 tracking-[1.1px] leading-6 lg:leading-normal">
              駅チカで通いやすい教室は全国に続々拡大中。お近くに教室がなくても
              <span class="hidden lg:inline">、オンラインレッスンで</span>
              <span class="lg:hidden">オンラインレッスンもご用意していますので</span>
              日本全国どこにいてもレッスンが可能です。
            </p>
            <div class="flex justify-center mt-0 lg:mt-3 ml-[7px] lg:ml-0">
              <picture>
                <source media="(max-width: 999px)" srcset="/images/map-online.webp 1x" type="image/webp" />
                <img class="w-[362px] lg:w-[360px] lg:h-[265px]" width="723" height="530"
                  src="/images/map-online.webp" alt="全国の教室" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
