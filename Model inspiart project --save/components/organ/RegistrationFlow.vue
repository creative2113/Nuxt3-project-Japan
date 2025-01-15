<template>
  <div class="mt-[30px] px-5">
    <div class="w-[335px] mx-auto bg-white shadow-[0_5px_20px_#00000040] rounded-[20px]">
      <h4
        class="w-full h-[126px] pt-5 text-center text-xl font-bold text-white bg-[url('/images/chart-keep-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl">
        アーティスト登録から<br>バンド結成までのフロー
      </h4>
      <h5 class="text-sm text-center font-bold mt-5">アーティスト登録すると<br><span class="text-[#FF88BB]">バンドレッスン(ビギナーコース)</span>を受講できます</h5>
      <div class="w-full px-5 mt-3.5 relative">
        <div class="flex justify-between items-center">
          <img src="/images/registration-flow-1.webp" alt="banner" width="130" height="130" class="w-[130px] h-auto rounded-full shadow-[0_3px_6px_#00000026]" />
          <img src="/images/registration-flow-2.webp" alt="banner" width="130" height="130" class="w-[130px] h-auto rounded-full shadow-[0_3px_6px_#00000026]" />
        </div>
        <div class="flex px-1 justify-between items-center pt-2.5 pb-[15px]">
          <button class="w-[120px] h-[30px] rounded-full bg-[#6688DD] text-white text-xs font-bold">ステージレッスン</button>
          <img src="/images/plus-icon-registration-flow.svg" alt="banner" width="27" height="27" class="w-[27px] h-auto" />
          <button class="w-[120px] h-[30px] rounded-full bg-[#FF88BB] text-white text-xs font-bold">バンドレッスン</button>
        </div>
      </div>
      <div class="w-full py-[60px] bg-[url('/images/registration-flow-3-bg.svg')] bg-no-repeat bg-top bg-[length:100%_100%] drop-shadow-[0_5px_20px_#00000040]">
        <h5 class="text-sm text-center px-5 font-bold">担当プロデューサーとのコミュニケーションを通じてバンドユニットを組みます</h5>
        <img src="/images/registration-flow-3.webp" alt="banner" width="295" height="210" class="w-[295px] h-auto rounded-[15px] mx-auto mt-[15px]" />
      </div>
      <div class="w-full pt-5 px-5 pb-6">
        <h5 class="text-sm text-center font-bold">
          <span class="text-[#FF88BB]">バンドレッスン(プロコース)</span>
          でデビューに<br>
          向けてレッスンや作品作りに励みます
        </h5>
        <img src="/images/registration-flow-4.webp" alt="banner" width="295" height="210" class="w-[295px] h-auto rounded-[15px] mx-auto mt-[15px]" />
        <button class="bg-[#FF88BB] text-white font-bold text-xs rounded-full -mt-5 w-[200px] h-10 mx-auto block relative z-10">バンドレッスン (プロコース)</button>
      </div>
    </div>
  </div>
</template>