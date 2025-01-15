<template>
  <div class="px-5 pt-[22px]">
    <h3
      class="w-[219px] h-[116px] bg-[url('/images/first-page-layout-top-title.svg')] bg-center bg-contain bg-no-repeat pt-[22px] text-center text-[18px] font-bold text-white ml-4 relative">
      こんなお悩み・疑問…<br />ありませんか？
    </h3>
    <div class="w-full bg-white rounded-[20px] shadow-[0_5px_20px_#00000040] mt-[-40px]">
      <img src="/images/first-page-layout-questions.webp" alt="questions" width="325" height="316" loading="lazy"
        decoding="async" class="mt-5 mx-auto" />
      <h4
        class="min-w-[355px] h-[80px] mx-[-10px] text-center font-bold content-center bg-white shadow-[0_3px_20px_#00000016] rounded-[10px] -mt-1 relative">
        楽器購入のハードルが高く、<br />
        気軽に始められない方が多いという事実。
      </h4>
      <img src="/images/arrow-pink-bottom-bg.svg" alt="arrow" width="36" height="50" class="py-5 mx-auto" />
      <div
        class="min-w-[355px] h-[135px] mx-[-10px] bg-[url('/images/first-page-top-solved-title.svg')] bg-center bg-contain bg-no-repeat pt-[19px] drop-shadow-[0_5px_20px_#00000040]">
        <p class="text-white text-center text-[18px] font-semibold">
          InspiartZなら
        </p>
        <h5 class="mt-4 w-max mx-auto bg-white text-[#FF5555] text-[24px] font-semibold py-1 px-9 rounded-[10px]">
          全部解決！
        </h5>
      </div>
      <div class="mt-4 w-[314px] mx-auto relative">
        <div class="w-[120px] mx-auto relative">
          <p class="w-full text-center text-[40px] roboto-bold italic text-[#FC88A7] mb-[-30px] relative z-10">
            01
          </p>
          <div class="bg-[#EEAAAA32] w-[120px] h-[120px] p-[10px] mx-auto rounded-full">
            <p
              class="w-full h-full bg-gradient-to-r from-[#FC88A7] to-[#FF5555] bg-cover text-[24px] font-bold text-center content-center text-white rounded-full tracking-[0.2em]">
              最速
            </p>
          </div>
          <p
            class="absolute bottom-[-22px] left-1/2 -translate-x-1/2 w-[120px] h-[50px] font-bold text-[15px] content-center rounded-[10px] shadow-[0_3px_6px_#00000025] tracking-tighter bg-white text-center text-[#FC88A7]">
            入会当日に<br />
            その場でお渡し!
          </p>
        </div>
        <img src="/images/first-page-ss-1-image.webp" alt="first solved" width="260" height="260" loading="lazy"
          decoding="async" class="mx-auto rounded-full" />
        <div class="flex justify-between pb-[50px] mt-[-76px] px-[10px]">
          <div class="w-[120px] relative">
            <p class="w-full text-[40px] roboto-bold italic text-[#66DDDD] mb-[-30px] relative right-[10px] z-10">
              02
            </p>
            <div class="bg-[#88CCDD32] w-[120px] h-[120px] p-[10px] mx-auto rounded-full">
              <p
                class="w-full h-full bg-gradient-to-r from-[#66DDDD] to-[#77BBDD] bg-cover text-[24px] font-bold text-center content-center text-white rounded-full tracking-[0.2em]">
                最速
              </p>
            </div>
            <p
              class="absolute bottom-[-22px] left-1/2 -translate-x-1/2 w-[120px] h-[50px] font-bold text-[15px] content-center rounded-[10px] shadow-[0_3px_6px_#00000025] tracking-tighter bg-white text-center text-[#66DDDD]">
              入会当日に<br />
              その場でお渡し!
            </p>
          </div>
          <div class="w-[120px] relative">
            <p
              class="w-full text-right text-[40px] roboto-bold italic text-[#5DCFA2] mb-[-30px] relative left-[10px] z-10">
              03
            </p>
            <div class="bg-[#88DDBB32] w-[120px] h-[120px] p-[10px] mx-auto rounded-full">
              <p
                class="w-full h-full bg-gradient-to-r from-[#88DD77] to-[#55CCAA] bg-cover text-[24px] font-bold text-center content-center text-white rounded-full tracking-[0.2em]">
                最速
              </p>
            </div>
            <p
              class="absolute bottom-[-22px] left-1/2 -translate-x-1/2 w-[120px] h-[50px] font-bold text-[15px] content-center rounded-[10px] shadow-[0_3px_6px_#00000025] tracking-tighter bg-white text-center text-[#5DCFA2]">
              入会当日に<br />
              その場でお渡し!
            </p>
          </div>
        </div>
      </div>
      <slot></slot>
      <OrganEnjoyYourSoundSmall />
    </div>
  </div>
</template>
