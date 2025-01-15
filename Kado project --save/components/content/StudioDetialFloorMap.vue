<template>
  <div class="max-w-[800px] w-full mx-auto max-lg:w-[335px]">
    <h3 class="text-center text-2xl font-bold tracking-widest max-lg:text-xl">フロアマップ</h3>
    <h4 class="text-center font-light tracking-widest mt-[27px] max-lg:text-sm max-lg:font-normal max-lg:text-left max-lg:mt-[17px] max-lg:px-5">
      フロアマップ中の各ルームをクリックすると<br class="max-lg:hidden" />
      内部の様子をご覧いただけます。
    </h4>
    <div class="flex justify-center items-center gap-6 mt-[35px] max-lg:p-[30px_8px] max-lg:shadow-[0_3px_6px_#00000033] max-lg:mt-[25px] max-lg:bg-white">
      <picture>
        <source media="(max-width: 1024px)" srcset="/images/FloorMap_Daikanyama-sp.webp" type="image/webp">
        <img src="/images/FloorMap_Daikanyama.webp" alt="studio" width="374" height="420" loading="lazy" decoding="async" class="w-[374px] h-auto max-lg:w-full">
      </picture>
      <div class="w-[390px] shadow-[0_3px_6px_#00000033] max-lg:hidden">
        <img src="/images/FloorMap_photo.webp" alt="studio" width="390" height="340" loading="lazy" decoding="async" class="w-[390px] h-auto">
        <h5 class="text-center mt-7 roboto text-xs text-[#AAAAAA]">LOUNGE</h5>
        <hr class="mx-auto w-[30px] h-[1px] bg-[#888888] border-none mt-2.5">
        <p class="text-center text-sm mt-[11px] font-semibold pb-6">ラウンジ</p>
      </div>
    </div>
  </div>
</template>
