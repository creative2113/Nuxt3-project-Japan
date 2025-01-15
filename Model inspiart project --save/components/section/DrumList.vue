<template>
  <div class="pt-[28px]">
    <h3
      class="w-[300px] h-[125px] mx-auto text-center pt-[26px] text-white font-bold bg-[url('/images/first-page-list-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl">
      トップクラスの品質を誇る<br />厳選楽器をプレゼント！
    </h3>
    <h4 class="text-sm text-center font-bold mt-5">今人気の”Otolier”からドラム2種を採用！</h4>
    <div class="flex justify-between mt-[15px] px-5 pb-5">
      <div class="w-40 bg-white border-[5px] border-white pb-5 relative">
        <h5 class="w-full text-center font-bold text-sm bg-[#BBAA7748]">電子ドラム</h5>
        <img src="/images/drum-image-1.webp" width="146" height="119" alt="drum" loading="lazy" decoding="async" class="mt-2 mx-auto relative z-10" />
        <p class="relative text-center text-white text-xs z-10">L’espace</p>
        <hr class="w-full absolute left-0 bottom-0 h-[90px] bg-gradient-to-t from-[#000000] to-[#00000001] border-none" />
        <nuxt-link to="/" class="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[34px] h-[34px] z-20 bg-[#BBAA77] pt-[6px]">
          <hr class="block w-[14px] h-[14px] border-r border-b border-r-white border-b-white border-t-0 rotate-45 mx-auto" >
        </nuxt-link>
      </div>
      <div class="w-40 bg-white border-[5px] border-white pb-5 relative">
        <h5 class="w-full text-center font-bold text-sm bg-[#BBAA7748]">アクリルドラム</h5>
        <img src="/images/drum-image-2.webp" width="137" height="109" alt="drum" loading="lazy" decoding="async" class="mt-5 mx-auto relative z-10" />
        <p class="relative text-center text-white text-xs z-10">Rocher Suprême</p>
        <hr class="w-full absolute left-0 bottom-0 h-[90px] bg-gradient-to-t from-[#000000] to-[#00000001] border-none" />
        <nuxt-link to="/" class="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[34px] h-[34px] z-20 bg-[#BBAA77] pt-[6px]">
          <hr class="block w-[14px] h-[14px] border-r border-b border-r-white border-b-white border-t-0 rotate-45 mx-auto" >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>