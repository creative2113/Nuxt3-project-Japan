<template>
    <div class="lg:hidden w-full border-b-[5px] flex items-end px-[10px] justify-between mt-3" :class="flag ? 'border-b-[#AAAAFF]': 'border-b-[#FF99BB]'">
      <button @click="flag = true" class="text-[#AAAAFF] text-[15px] pt-[18px] pb-[12px] block text-left pl-4 w-[178px] bg-[url('/images/trial-tab-white-left.svg')] bg-contain bg-no-repeat bg-bottom" :class="flag && `!bg-[url('/images/trial-tab-blue.svg')] !text-white`">オンラインの場合</button>
      <button @click="flag = false" class="text-[#FF99BB] text-[15px] pt-[18px] pb-[12px] block text-right pr-6 w-[178px] bg-[url('/images/trial-tab-white-right.svg')] bg-contain bg-no-repeat bg-bottom" :class="!flag && `!bg-[url('/images/trial-tab-pink.svg')] !text-white`">リアルの場合</button>
    </div>
    <div class="max-w-[800px] mx-auto flex items-stretch justify-between mt-3 max-lg:mt-0">
      <!-- オンラインの場合 -->
      <div class="w-[375px] bg-[#D1E4F755] pb-5 shadow-lg" :class="!flag && 'max-lg:hidden'">
        <div>
          <h5 class="w-full bg-[#AAAAFF] text-center text-white text-xl font-bold py-4 max-lg:hidden">
            華道の場合
          </h5>
          <div
            class="w-full relative">
            <img src="/images/trial-banner-1.webp" alt="trial" width="375" height="200" loading="lazy"
              class="w-full h-auto" />
            <h6 class="text-[80px] savoye tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Kadou</h6>
          </div>
          <div>
            <h6 class="flex items-center justify-center pt-[30px] pb-[27px]">
              <span class="text-2xl font-bold text-[#AAAAFF]">[</span>
              <span class="text-base mx-6 font-semibold">持ち物</span>
              <span class="text-2xl font-bold text-[#AAAAFF]">]</span>
            </h6>
            <ul class="text-[13px] pl-[43px] pb-[29px]">
              <li
                class="relative before:block before:w-2 before:h-2 before:rounded-full font-semibold before:bg-[#AAAAFF] before:absolute before:top-2 before:-left-4">
                特にお持ちいただくものはございません。<br>お気軽におこしください。
              </li>
            </ul>
          </div>
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#AAAAFF]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">01</p>
            </div>
            <p class="text-lg font-semibold">
              手ぶら参加OK！<br>特別な準備は不要です。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            季節を感じる花材を準備してお待ちしております。
          </p>
          <div class="w-[310px] h-[310px] mx-auto relative">
            <img src="/images/trial-photo-11.webp" alt="trial" width="310" height="310" loading="lazy"
              class="w-full h-full" />
            <img src="/images/trial-flower-1.svg" alt="trial" width="147" height="169" loading="lazy"
              class="w-[147px] h-auto absolute -top-10 -right-[22px] z-10" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-blue.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base">
            最初は<br>ドキドキかも
          </p>
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#AAAAFF]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">02</p>
            </div>
            <p class="text-lg font-semibold">
              剣山を用いた簡単アレンジの<br>仕方をお伝えします。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            お花を活けるのが初めてでも大丈夫です。<br>お一人おひとりにあったペースで丁寧に指導します。
          </p>
          <div class="w-[310px] h-[310px] mx-auto relative">
            <img src="/images/trial-photo-12.webp" alt="trial" width="310" height="310" loading="lazy"
              class="w-full h-full" />
            <img src="/images/trial-flower-2.svg" alt="trial" width="151" height="153" loading="lazy"
              class="w-[151px] h-auto absolute -top-5 -left-4 z-10" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-blue.svg')] bg-cover bg-center absolute bottom-0 right-2 text-center content-center text-white text-base">
            使用した花材は<br>ご自宅へお持ち<br>帰り頂けます
          </p>
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#AAAAFF]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">03</p>
            </div>
            <p class="text-lg font-semibold">
              作品が出来上がったら<br>撮影タイム!!!
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            初めて作った作品を記念に残しましょう。
          </p>
          <div class="w-[361px] mx-auto">
            <img src="/images/trial-photo-13.webp" alt="trial" width="361" height="378" loading="lazy"
              class="w-full h-auto" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-blue.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base">
            レッスンの度に<br>思い出が増えます
          </p>
        </div>
      </div>
      <!-- オンラインの場合 -->
      <div class="w-[375px] bg-[#F7D6D155] pb-5 shadow-lg" :class="flag && 'max-lg:hidden'">
        <div>
          <h5 class="w-full bg-[#FF99BB] text-center text-white text-xl font-bold py-4 max-lg:hidden">
            オンラインの場合
          </h5>
          <div class="w-full relative">
            <img src="/images/trial-banner-2.webp" alt="trial" width="375" height="200" loading="lazy"
              class="w-full h-auto" />
            <h6 class="text-[70px] leading-[70px] text-center savoye tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Arrange<br>Flower</h6>
          </div>
          <div>
            <h6 class="flex items-center justify-center pt-[30px] pb-[27px]">
              <span class="text-2xl font-bold text-[#FF99BB]">[</span>
              <span class="text-base mx-6 font-semibold">持ち物</span>
              <span class="text-2xl font-bold text-[#FF99BB]">]</span>
            </h6>
            <ul class="text-[13px] pl-[43px] pb-[29px]">
              <li
                class="relative before:block before:w-2 before:h-2 before:rounded-full font-semibold before:bg-[#FF99BB] before:absolute before:top-2 before:-left-4">
                特にお持ちいただくものはございません。<br>お気軽におこしください。
              </li>
            </ul>
          </div>
        </div>
        <div
          class="border-t-2 border-t-[#FF99BB] pt-3 pb-5 relative before:block before:w-[1px] before:h-4 before:bg-[#FF99BB] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#FF99BB]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">01</p>
            </div>
            <p class="text-lg font-semibold">
              手ぶら参加OK！<br>特別な準備は不要です。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            季節を感じる花材を準備してお待ちしております。
          </p>
          <div class="w-[310px] h-[310px] mx-auto relative">
            <img src="/images/trial-photo-21.webp" alt="trial" width="310" height="310" loading="lazy"
              class="w-full h-full" />
            <img src="/images/trial-flower-1.svg" alt="trial" width="147" height="169" loading="lazy"
              class="w-[147px] h-auto absolute -top-10 -right-[22px] z-10" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-pink.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base">
            最初は<br>ドキドキかも
          </p>
        </div>
        <div
          class="border-t-2 border-t-[#FF99BB] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#FF99BB] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#FF99BB]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">02</p>
            </div>
            <p class="text-lg font-semibold">
              オアシスを用いてお一人お一人<br>の自由な発想を大切にします。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            経験豊富な講師によるアイデアで、<br>ご自宅に飾って楽しむアレンジをお伝えします。
          </p>
          <div class="w-[310px] h-[310px] mx-auto relative">
            <img src="/images/trial-photo-22.webp" alt="trial" width="310" height="310" loading="lazy"
              class="w-full h-full" />
            <img src="/images/trial-flower-2.svg" alt="trial" width="151" height="153" loading="lazy"
              class="w-[151px] h-auto absolute -top-5 -left-4 z-10" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-pink.svg')] bg-cover bg-center absolute bottom-0 right-2 text-center content-center text-white text-base">
            制作した作品は<br>ご自宅へお持ち<br>帰り頂けます
          </p>
        </div>
        <div
          class="border-t-2 border-t-[#FF99BB] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#FF99BB] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#FF99BB]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 roboto">03</p>
            </div>
            <p class="text-lg font-semibold">
              作品が出来上がったら<br>撮影タイム!!!
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm font-medium">
            初めて作った作品を記念に残しましょう。
          </p>
          <div class="w-[361px] h-[378px] mx-auto relative z-10">
            <img src="/images/trial-photo-23.webp" alt="trial" width="361" height="378" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] font-semibold bg-[url('/images/trial-comment-bg-pink.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base z-10">
            レッスンの度に<br>思い出が増えます
          </p>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
  const flag = ref(true);
</script>