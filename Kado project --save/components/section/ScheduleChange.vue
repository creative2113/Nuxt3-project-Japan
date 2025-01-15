<template>
  <section class="w-full pt-[80px] max-lg:pt-[30px]">
    <div class="max-w-[800px] w-full mx-auto shadow-xl max-lg:max-w-[355px]">
      <h3
        class="text-2xl text-white font-bold bg-[#AAAAFF] py-[18px] text-center max-lg:text-xs max-lg:py-2 max-lg:tracking-widest"
      >
        バランスよく、急な振替にも対応
        <b class="text-[30px] border-b-[5px] border-b-white max-lg:border-b-2 max-lg:block max-lg:text-xl max-lg:w-max max-lg:mx-auto"
          >固定制＋無料補講</b
        >
      </h3>
      <picture>
        <source
          media="(max-width: 1024px)"
          srcset="/images/schedule-change-sp.webp 1x"
          type="image/webp"
        />
        <img
          src="/images/schedule-change-pc.webp"
          alt="Schedule Change"
          width="800"
          height="337"
          loading="lazy"
          decoding="async"
          class="w-full h-auto"
        />
      </picture>
      <div class="w-full pt-5 pb-[30px] max-lg:pb-5 max-lg:pt-0 max-lg:-mt-3">
        <picture>
          <source
            media="(max-width: 1024px)"
            srcset="/images/schedule-change-calender-sp.svg 1x"
            type="image/webp"
          />
          <img
            src="/images/schedule-change-calender.svg"
            alt="Schedule Change Calender"
            width="320"
            height="317"
            loading="lazy"
            decoding="async"
            class="w-[320px] h-auto max-lg:w-[285px] mx-auto"
          />
        </picture>
      </div>
      <div>
        <h4 class="bg-black text-xl text-center text-white font-bold py-3 tracking-widest max-lg:text-base max-lg:py-1">休んだ場合はどうなるの…？</h4>
        <div class="bg-[#BB996632] max-lg:p-2.5">
          <div class="flex justify-center items-center bg-white pt-2 gap-10 max-lg:gap-4 overflow-hidden">
          <img
            src="/images/schedule-break-1.svg"
            alt="Schedule Change Break"
            width="209"
            height="113"
            loading="lazy"
            decoding="async"
            class="w-[209px] h-auto max-lg:w-[145px]"
          />
          <img
            src="/images/schedule-break-2.webp"
            alt="Schedule Change Break"
            width="172"
            height="152"
            loading="lazy"
            decoding="async"
            class="w-[172px] h-auto max-lg:-mb-10 max-lg:w-[150px]"
          />
        </div>
        <div class="grid grid-cols-2 gap-5 p-5 max-lg:p-0 max-lg:gap-[1px]">
          <div class="bg-white shadow-lg pb-7">
            <h5 class="text-[100px] text-center text-[#BB9966] roboto leading-[140px] bg-[url('/images/schedule-break-bg.svg')] bg-cover bg-top">¥0</h5>
            <h6 class="text-2xl text-[#BB9966] text-center font-bold mt-6">補講無料</h6>
            <p class="text-sm text-center mt-3.5">当日の欠席もOK！<br>その分無料で補講レッスンが受けられます。</p>
          </div>
          <div class="bg-white shadow-lg pb-7">
            <div class="content-center h-[140px] bg-[url('/images/schedule-break-bg.svg')] bg-cover bg-top">
              <img src="/images/schedule-break-3.svg" width="119" height="114" alt="free" loading="lazy" decoding="async" class="w-[119px] h-auto mx-auto" />
            </div>
            <h6 class="text-2xl text-[#BB9966] text-center font-bold mt-6">事前に振替登録もOK</h6>
            <p class="text-sm text-center mt-3.5">同じボトルの花材を扱うレッスンで<br>あればどれでも振替自由</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
