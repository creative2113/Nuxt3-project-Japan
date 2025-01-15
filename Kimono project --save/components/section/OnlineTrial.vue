<script lang="ts" setup>
const flag = ref(true);
</script>

<template>
  <section class="w-full pt-[95px]">
    <ItemsContentTitle>
      <h2 class="text-center text-[28px] whitespace-nowrap">
        初めての着付け教室<br />体験レッスンのご紹介
      </h2>
    </ItemsContentTitle>
    <h3 class="text-center text-xl mt-8 max-lg:text-sm">
      ちょっと不安がある気持ち・・<br />
      超入門コースの先生が<br class="lg:hidden" />誠心誠意サポートします。
    </h3>
    <div class="lg:hidden w-full border-b-[5px] flex px-[10px] justify-between mt-9" :class="flag ? 'border-b-[#A0B6DF]': 'border-b-[#EEB0B0]'">
      <button @click="flag = true" class="text-[#7E9DD8] text-[15px] pt-[18px] pb-[12px] block text-left pl-4 w-[178px] bg-[url('/images/tab_white_2.svg')] bg-contain bg-no-repeat bg-bottom" :class="flag && `!bg-[url('/images/tab_blue.svg')] !text-white`">オンラインの場合</button>
      <button @click="flag = false" class="text-[#D87E80] text-[15px] pt-[18px] pb-[12px] block text-right pr-6 w-[178px] bg-[url('/images/tab_white.svg')] bg-contain bg-no-repeat bg-bottom" :class="!flag && `!bg-[url('/images/tap_pink.svg')] !text-white`">リアルの場合</button>
    </div>
    <div class="max-w-[800px] mx-auto flex items-stretch justify-between mt-8 max-lg:mt-0">
      <!-- オンラインの場合 -->
      <div class="w-[375px] bg-[#D1E4F755]" :class="!flag && 'max-lg:hidden'">
        <div>
          <h5 class="w-full bg-[#A0B6DF] text-center text-white text-xl py-4 max-lg:hidden">
            オンラインの場合
          </h5>
          <div
            class="w-full relative after:absolute after:w-full after:h-full after:bg-[#A0B6DF88] after:top-0 after:left-0 after:z-10">
            <img src="/images/online-trial-main-1.webp" alt="trial" width="375" height="200" loading="lazy"
              class="w-full h-auto" />
          </div>
          <div>
            <h6 class="flex items-center justify-center pt-[30px] pb-[27px]">
              <span class="text-2xl font-bold text-[#7E9DD8]">[</span>
              <span class="text-base mx-6">持ち物</span>
              <span class="text-2xl font-bold text-[#7E9DD8]">]</span>
            </h6>
            <ul class="text-[13px] pl-[43px] pb-[29px]">
              <li
                class="relative before:block before:w-2 before:h-2 before:rounded-full before:bg-[#7E9DD8] before:absolute before:top-2 before:-left-4">
                オンラインは無料体験レッスンを<br />
                ご用意しておりません。
              </li>
              <li
                class="mt-1.5 relative before:block before:w-2 before:h-2 before:rounded-full before:bg-[#7E9DD8] before:absolute before:top-2 before:-left-4">
                初回レッスンをオンライン登録いただければ、<br />
                ご自宅にプレゼント着物・小物を送付いたします。
              </li>
            </ul>
          </div>
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#7E9DD8]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">01</p>
            </div>
            <p class="text-lg">
              オンラインの入会フォームから<br />
              カンタン入会登録♫
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            着物・小物プレゼントをお申し込みください。
          </p>
          <div class="w-[320px] h-[315px] mx-auto">
            <img src="/images/online-trial-first-1.webp" alt="trial" width="320" height="315" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-blue-bg-1.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base">
            3分で<br />簡単登録！
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute top-[158px] right-0" />
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#7E9DD8]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">02</p>
            </div>
            <p class="text-lg">
              自宅まで着物と小物を郵送で<br />
              お届けします！
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            入会登録時に選択した着物が届くドキドキの瞬間です。<br />
            初回レッスンがとても待ち遠しくなります。
          </p>
          <div class="w-[320px] h-[315px] mx-auto">
            <img src="/images/online-trial-first-2.webp" alt="trial" width="320" height="315" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-blue-bg-1.svg')] bg-cover bg-center absolute bottom-0 right-2 text-center content-center text-white text-base">
            いよいよ<br />開封！
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute bottom-[37px] left-0" />
        </div>
        <div
          class="border-t-2 border-t-[#A0B6DF] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#A0B6DF] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#7E9DD8]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">03</p>
            </div>
            <p class="text-lg">
              待ちに待った初回レッスン！<br />
              自宅からオンラインで。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            自宅が着付け教室に早変わり！
          </p>
          <div class="w-[320px] h-[315px] mx-auto">
            <img src="/images/online-trial-first-3.webp" alt="trial" width="320" height="315" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-blue-bg-1.svg')] bg-cover bg-center absolute bottom-0 left-0 text-center content-center text-white text-base">
            3分で<br />簡単登録！
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute bottom-[37px] right-0" />
        </div>
      </div>
      <!-- オンラインの場合 -->
      <div class="w-[375px] bg-[#F7D6D155]" :class="flag && 'max-lg:hidden'">
        <div>
          <h5 class="w-full bg-[#EEB0B0] text-center text-white text-xl py-4 max-lg:hidden">
            オンラインの場合
          </h5>
          <div
            class="w-full relative after:absolute after:w-full after:h-full after:bg-[#F7D6D188] after:top-0 after:left-0 after:z-10">
            <img src="/images/online-trial-main-2.webp" alt="trial" width="375" height="200" loading="lazy"
              class="w-full h-auto" />
          </div>
          <div>
            <h6 class="flex items-center justify-center pt-[30px] pb-[27px]">
              <span class="text-2xl font-bold text-[#D87E80]">[</span>
              <span class="text-base mx-6">持ち物</span>
              <span class="text-2xl font-bold text-[#D87E80]">]</span>
            </h6>
            <ul class="text-[13px] pl-[43px] pb-[29px]">
              <li
                class="relative before:block before:w-2 before:h-2 before:rounded-full before:bg-[#D87E80] before:absolute before:top-2 before:-left-4">
                オンラインは無料体験レッスンを<br />
                ご用意しておりません。
              </li>
              <li
                class="mt-1.5 relative before:block before:w-2 before:h-2 before:rounded-full before:bg-[#D87E80] before:absolute before:top-2 before:-left-4">
                初回レッスンをオンライン登録いただければ、<br />
                ご自宅にプレゼント着物・小物を送付いたします。
              </li>
            </ul>
          </div>
        </div>
        <div
          class="border-t-2 border-t-[#D87E80] pt-3 pb-5 relative before:block before:w-[1px] before:h-4 before:bg-[#D87E80] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#D87E80]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">01</p>
            </div>
            <p class="text-lg">
              オンラインの入会フォームから<br />
              カンタン入会登録♫
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            着物・小物プレゼントをお申し込みください。
          </p>
          <div class="w-[320px] h-[315px] mx-auto">
            <img src="/images/online-trial-second-1.webp" alt="trial" width="320" height="315" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-cover bg-center absolute bottom-0 left-2 text-center content-center text-white text-base">
            どれも<br>可愛すぎて<br>目移り･･･
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute top-[158px] right-0" />
        </div>
        <div
          class="border-t-2 border-t-[#D87E80] pt-3 pb-5 mt-10 relative before:block before:w-[1px] before:h-4 before:bg-[#D87E80] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#D87E80]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">02</p>
            </div>
            <p class="text-lg">
              自宅まで着物と小物を郵送で<br />
              お届けします！
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            入会登録時に選択した着物が届くドキドキの瞬間です。<br />
            初回レッスンがとても待ち遠しくなります。
          </p>
          <div class="w-[320px] h-[315px] mx-auto">
            <img src="/images/online-trial-second-2.webp" alt="trial" width="320" height="315" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-cover bg-center absolute bottom-0 right-2 text-center content-center text-white text-base">
            立っている<br>だけでもOK!
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute bottom-[37px] left-0" />
        </div>
        <div
          class="border-t-2 border-t-[#D87E80] pt-3 pb-5 mt-10 mb-5 relative before:block before:w-[1px] before:h-4 before:bg-[#D87E80] before:absolute before:top-0 before:left-20">
          <div class="flex px-5 items-center gap-9">
            <div class="w-9 text-center text-[#D87E80]">
              <p class="text-sm font-bold roboto">STEP</p>
              <p class="text-[35px] leading-9 futura-pt">03</p>
            </div>
            <p class="text-lg">
              待ちに待った初回レッスン！<br />
              自宅からオンラインで。
            </p>
          </div>
          <p class="mt-8 mb-7 text-center text-sm">
            せっかくの初めての着付け！<br />
            綺麗でかっこいいご自身のお姿を<br />
            記念撮影いたします。
          </p>
          <div class="w-[361px] h-[378px] mx-auto relative z-10">
            <img src="/images/online-trial-second-3.webp" alt="trial" width="361" height="378" loading="lazy"
              class="w-full h-full" />
          </div>
          <p
            class="block w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-cover bg-center absolute bottom-0 left-0 text-center content-center text-white text-base z-10">
            レッスンの度に<br>思い出が増えます
          </p>
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute top-[182px] right-0" />
          <img src="/images/class-grid-tile.svg" alt="trial" width="200" height="40" loading="lazy"
            class="w-[200px] h-auto absolute bottom-[42px] left-0" />
        </div>
      </div>
    </div>
    <!-- Na-ra-uno公式リポーターがワインスクールにチャレンジ♫ -->
    <div class="max-w-[800px] w-full mx-auto mt-[100px] pt-10 bg-[#D1E4F7] rounded-[30px] max-lg:px-5">
      <img src="/images/online-experience-title.svg" alt="experience" width="370" height="92" loading="lazy"
        class="w-[370px] h-[92px] mx-auto max-lg:w-[315px] max-lg:h-auto" />
      <div
        class="w-full text-center mt-10 flex gap-9 items-end justify-center before:block before:w-0.5 before:h-12 before:bg-[#222222] before:origin-bottom before:-rotate-[20deg] after:block after:w-0.5 after:h-12 after:bg-[#222222] after:origin-bottom after:rotate-[20deg] max-lg:after:hidden max-lg:before:hidden">
        <h3 class="text-base">
          Na-ra-uno公式リポーターが<br />ワインスクールにチャレンジ♫
        </h3>
      </div>
      <div class="relative w-[560px] mx-auto mt-5 max-lg:w-full">
        <div class="w-ful relative">
          <img src="/images/online-experience-banner.webp" alt="experience" width="530" height="390" loading="lazy"
            class="w-[530px] h-[390px] max-lg:w-[323px] max-lg:h-[242px]" />
          <div class="bg-white mt-[26px] relative rounded-[15px] shadow-lg w-[500px] ml-auto pt-4 pl-4 pb-6 bottom-16 max-lg:w-[315px]">
            <h4 class="text-[25px] text-[#222222] w-[375px] max-lg:w-[180px] max-lg:text-lg max-lg:tracking-tighter">
              大人の楽器サックスに憧れて。いきなり「ルパン三世’79」に挑戦？
            </h4>
            <h5 class="text-[28px] text-[#DDDDDD] relative top-5 left-2 max-lg:text-xl">
              Kazuho Ishida
            </h5>
            <h6 class="text-base text-[#222222] max-lg:text-sm">石田 一帆</h6>
            <p class="text-[13px] text-[#666666] max-lg:text-[11px]">
              ショップ店員 / 24歳 / 挑戦楽器：サックス
            </p>
            <span
              class="absolute w-3.5 h-3.5 border-[#CCCCCC] border-t border-r origin-center rotate-45 right-4 top-1/2 -translate-y-1/2" />
          </div>
          <img src="/images/online-experience-2.webp" alt="experience" width="168" height="380" loading="lazy"
            class="w-[168px] h-[380px] absolute bottom-0 right-[33px] max-lg:[126px] max-lg:h-[326px] max-lg:right-0" />
        </div>
        <div class="flex mt-10 justify-between max-lg:mt-0">
          <div class="w-[260px] max-lg:w-[160px] max-lg:relative max-lg:-top-6">
            <img src="/images/online-experience-3.webp" alt="experience" width="230" height="409" loading="lazy"
              class="w-[230px] max-lg:w-[140px] h-auto" />
            <div class="bg-white relative -mt-10 rounded-[15px] shadow-lg w-[230px] ml-auto p-3 bottom-20 max-lg:w-[140px]">
              <h4 class="text-[14px] text-[#222222]">
                大人の楽器サックスに憧れて。いきなり「ルパン三世’79」に挑戦？
              </h4>
              <h5 class="text-[13px] text-[#DDDDDD] relative top-3 -mt-2 left-2">
                Kazuho Ishida
              </h5>
              <h6 class="text-[11px] text-[#222222]">石田 一帆</h6>
              <p class="text-[9px] text-[#666666]">
                ショップ店員 / 24歳 / 挑戦楽器：サックス
              </p>
              <span
                class="absolute w-1.5 h-1.5 border-[#CCCCCC] border-t border-r origin-center rotate-45 right-1.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div class="w-[260px] max-lg:w-[160px]">
            <img src="/images/online-experience-4.webp" alt="experience" width="230" height="409" loading="lazy"
              class="w-[230px] max-lg:w-[140px] h-auto" />
            <div class="bg-white relative rounded-[15px] shadow-lg w-[230px] ml-auto -mt-10 p-3 bottom-20 max-lg:w-[140px]">
              <h4 class="text-[14px] text-[#222222]">
                大人の楽器サックスに憧れて。いきなり「ルパン三世’79」に挑戦？
              </h4>
              <h5 class="text-[13px] text-[#DDDDDD] relative top-3 -mt-2 left-2">
                Kazuho Ishida
              </h5>
              <h6 class="text-[11px] text-[#222222]">石田 一帆</h6>
              <p class="text-[9px] text-[#666666]">
                ショップ店員 / 24歳 / 挑戦楽器：サックス
              </p>
              <span
                class="absolute w-1.5 h-1.5 border-[#CCCCCC] border-t border-r origin-center rotate-45 right-1.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
        <button class="text-[13px] block mx-auto relative py-[18px] px-[112px] rounded-full border border-[#999999] after:w-2 after:h-2 after:block after:border-r-2 after:border-t-2 after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2 max-lg:-mt-10">
          もっと見る
        </button>
      </div>
      <div class="max-w-[760px] w-full mx-auto mt-10 pb-[60px]">
        <div class="w-full">
          <h4 class="text-[15px] text-center py-5 mb-7 bg-[url('/images/online-experience-articles-title.svg')] bg-contain bg-center bg-no-repeat">Na-ra-uno 体験記<br>人気の記事</h4>
          <SliderExperienceArticle />
        </div>
        <div class="w-full">
          <h4 class="mt-7 py-6 text-[15px] text-center mb-6 bg-[url('/images/online-experience-players-title.svg')] bg-contain bg-center bg-no-repeat">Na-ra-uno 体験記<br>人気のプレイヤー</h4>
          <SliderExperiencePlayers />
        </div>
      </div>
    </div>
  </section>
</template>
