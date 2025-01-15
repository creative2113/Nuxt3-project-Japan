<template>
  <section class="pt-14 pb-[60px]">
    <div class="pb-3.5">
      <ItemsSubTitle>オンライン？リアル？</ItemsSubTitle>
    </div>
    <ItemsContentTitle>
      <h3 class="text-[28px] text-center text-nowrap">
        通い方は自由自在<br>気分に合わせて選べます！
      </h3>
    </ItemsContentTitle>
    <div class="max-w-[800px] mx-auto mt-14 relative max-lg:mt-11">
      <img
        src="/images/online-real-freedom-title.svg"
        width="117"
        height="26"
        alt="online select"
        loading="lazy"
        class="block w-[117px] h-auto mx-auto max-lg:w-16"
      />
      <div class="w-full h-[67px] flex justify-between px-40 mt-2.5 items-center bg-[url('/images/online-real-freedom-subtitle.svg')] bg-contain bg-no-repeat bg-center max-lg:bg-[url('/images/online-real-freedom-subtitle-sp.svg')] max-lg:h-[43px] max-lg:px-16 max-lg:mt-1.5">
        <h5 class="text-white text-2xl max-lg:text-base">オンライン？</h5>
        <h5 class="text-white text-2xl max-lg:text-base">リアル？</h5>
      </div>
      <h5 class="mt-5 text-2xl text-center mb-7 max-lg:text-base">お好きな方を選びましょう</h5>
      <div class="flex justify-between max-lg:gap-[15px]">
        <div class="bg-[#A0B6DF] w-[392px] relative">
          <picture>
            <source
              media="(max-width: 999px)"
              srcset="
                /images/online-select-img-1-sp.webp 1x,
                /images/online-select-img-1-sp.webp 2x
              "
              type="image/avif"
            />
            <img
              srcset="
                /images/online-select-img-1.webp 1x,
                /images/online-select-img-1.webp 2x
              "
              src="/images/online-select-img-1.webp"
              width="392"
              height="461"
              alt=""
              role="presentation"
              loading="lazy"
              class="w-full h-auto"
              decoding="async"
            />
          </picture>
          <div class="w-[280px] h-[160px] absolute pt-4 px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/online-real-freedom-left.svg')] bg-contain bg-no-repeat bg-center max-lg:w-[180px] max-lg:h-[116px] max-lg:bg-[url('/images/online-real-freedom-left-sp.svg')] max-lg:pt-2 max-lg:px-4 max-lg:bg-[length:110%]">
            <h6 class="text-lg text-[#7E9DD8] text-center max-lg:text-xs">私は、オンライン！</h6>
            <p class="text-xs mt-8 max-lg:text-[10px] max-lg:mt-4">家の近くに教室が無いし、気軽に参加したいから、オンラインが楽かな。</p>
          </div>
          <div class="flex flex-col items-center gap-[18px] py-10 -mt-24 max-lg:-mt-14">
            <span class="w-[18px] h-[18px] border-r-2 border-b-2 border-white origin-center rotate-[45deg] max-lg:w-2 max-lg:h-2"></span>
            <h6 class="text-white text-[15px] text-center max-lg:text-xs">駅チカで設備の整った<br>
              リアル教室でレッスン！</h6>
            <nuxt-link to="#onlineSection" class="text-[13px] relative py-3 px-[61px] rounded-full bg-white shadow-md text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-b after:origin-center after:border-[#7E9DD8] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 max-lg:py-2 max-lg:px-[53px]">詳しく見る</nuxt-link>
          </div>
        </div>
        <div class="bg-[#EEB0B0] w-[392px] relative">
          <picture>
            <source
              media="(max-width: 999px)"
              srcset="
                /images/online-select-img-2-sp.webp 1x,
                /images/online-select-img-2-sp.webp 2x
              "
              type="image/avif"
            />
            <img
              srcset="
                /images/online-select-img-2.webp 1x,
                /images/online-select-img-2.webp 2x
              "
              src="/images/online-select-img-2.webp"
              width="392"
              height="461"
              alt="online"
              role="presentation"
              loading="lazy"
              class="w-full h-auto"
              decoding="async"
            />
          </picture>
          <div class="w-[280px] h-[160px] absolute pt-4 px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/online-real-freedom-right.svg')] bg-contain bg-no-repeat bg-center max-lg:w-[180px] max-lg:h-[116px] max-lg:bg-[url('/images/online-real-freedom-right-sp.svg')] max-lg:pt-2 max-lg:px-4 max-lg:bg-[length:110%]">
            <h6 class="text-lg text-[#D87E80] text-center max-lg:text-xs">私は、リアル！</h6>
            <p class="text-xs mt-8 max-lg:text-[10px] max-lg:mt-4">先生や仲間と直接ふれあいながら学びたいから、リアルの教室かな。</p>
          </div>
          <div class="flex flex-col items-center gap-[18px] py-10 -mt-24 max-lg:-mt-14">
            <span class="w-[18px] h-[18px] border-r-2 border-b-2 border-white origin-center rotate-[45deg] max-lg:w-2 max-lg:h-2"></span>
            <h6 class="text-white text-[15px] text-center max-lg:text-xs">駅チカで設備の整った<br>
              リアル教室でレッスン！</h6>
            <nuxt-link to="#realSection" class="text-[13px] relative py-3 px-[61px] rounded-full bg-white shadow-md text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-b after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 max-lg:py-2 max-lg:px-[53px]">詳しく見る</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>