<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["handleClickClose"])
function handleClickClose() {
  emit('handleClickClose')
}
const props = defineProps<{
  showDetails: boolean
}>();
</script>
<template>
  <div :class="props.showDetails ? 'h-auto block' : 'h-0 hidden'">
    <div class="mx-auto pt-[26px] bg-white w-full pb-2 lg:pt-10 lg:pb-[43px] shadow-inset-down relative">
      <h4 class="py-1.5 px-[26px] text-white text-sm bg-[#E39597] w-max mx-auto">業界初のENJOY保証が生まれた理由</h4>
      <h5 class="text-2xl mt-6 w-max mx-auto text-center mb-8">貴重な時間を<br> 最大限に楽しめるように</h5>
      <div class="-top-0 inset-x-0 z-0">
        <img src="/images/welcome-enjoy-make.webp" width="1281" height="629" />
      </div>
      <div class="flex items-center justify-between pt-[30px] pb-[10px] px-[50px] max-lg:flex-col max-lg:px-[16px]">
        <div class="w-[300px]">
          <h6 class="text-xl text-center">楽しいレッスンの提供に<br>最大限努めています</h6>
          <p class="text-sm mt-7 leading-5">
            EYSのEは“ENJOY”のEです。レッスンは、しんどい時間ではなく、皆様自身の自由な表現の場であるべきです。EYSでは、何よりも楽しいレッスンのために講師を育成し、レッスンプログラムを組み立てています。</p>
        </div>
        <div class="h-[220px] w-0 relative border-l-2 border-dotted border-[#7B7373] max-lg:w-full max-lg:h-0 max-lg:border-l-0 max-lg:border-b-2 max-lg:mt-16">
          <span
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full align-middle text-center text-white text-[30px] font-bold bg-[#E39597]">+</span>
        </div>
        <div class="w-[300px] max-lg:mt-11">
          <h6 class="text-xl text-center">講師を交代できる制度を<br>業界に先駆けて始めました</h6>
          <p class="text-sm mt-7">
            もし仮に、講師がつまらないレッスンをしてしまった場合は、別の講師でご満足いただけるまでレッスンをやり直しさせていただきます。講師変更は事務局で承りますので、お気兼ねなくお申し付け下さい。</p>
        </div>
      </div>
      <span
        class="w-0 h-0 border-x-transparent border-x-[400px] border-t-[120px] border-t-white absolute bottom-[1px] translate-y-[100%] max-lg:border-x-[180px] max-lg:border-t-[40px] left-1/2 -translate-x-1/2"></span>
    </div>
    <div class="mt-[150px] pb-[109px] max-lg:mt-[68px] max-lg:pb-[60px]">
      <ItemsSubTitle>
        <span class="whitespace-nowrap">こんなお悩みはありませんか？</span>
      </ItemsSubTitle>
      <div class="flex items-center justify-center gap-0 relative mt-5 max-lg:mt-36">
        <div class="flex items-center justify-center w-40 h-40 rounded-full bg-[#EEB0B080] flex-col -mx-2.5 max-lg:relative z-10">
          <h6 class="text-base">つまらない</h6>
          <p class="mt-[10px] text-[13px] text-center">基礎練習ばかり<br>させられる…</p>
        </div>
        <div class="flex items-center justify-center w-40 h-40 rounded-full bg-[#EEB0B080] flex-col -mx-2.5 max-lg:absolute -top-[120px]">
          <h6 class="text-base">だらしがない</h6>
          <p class="mt-[10px] text-[13px] text-center">こんな先生で<br>大丈夫…？</p>
        </div>
        <div class="flex items-center justify-center w-40 h-40 rounded-full bg-[#EEB0B080] flex-col -mx-2.5">
          <h6 class="text-base">先生が怖い</h6>
          <p class="mt-[10px] text-[13px] text-center">レッスンに<br>行きたくない…</p>
        </div>
        <img src="/images/welcome-concern.webp" width="122" height="193"
          class="absolute -top-5 left-[80px] w-[122px] h-[193px] max-lg:left-4 max-lg:-top-[110px]" />
        <img src="/images/spiral-line.svg" width="62" height="71"
          class="absolute top-0 right-[147px] w-[62px] h-[71px] max-lg:right-14 max-lg:-top-[110px]" />
      </div>
    </div>
    <div class="mx-auto pt-[26px] bg-white w-full pb-2 lg:pt-10 lg:pb-[43px] shadow-inset-down relative max-lg:px-[10px]">
      <span class="clip-path" />
      <h4 class="py-1.5 px-[26px] text-white text-sm bg-[#E39597] w-max mx-auto">業界初のENJOY保証が生まれた理由</h4>
      <h5 class="text-2xl mt-6 w-max mx-auto text-center mb-8">貴重な時間を<br> 最大限に楽しめるように</h5>
      <div class="-top-0 inset-x-0 z-0">
        <img src="/images/welcome-enjoy-guarantee-compressed.webp" width="1281" height="629" />
      </div>
      <p class="text-sm text-center mt-7 max-lg:px-[18px] max-lg:text-left">ON-girl 着付け教室には厳選された講師だけが在籍していますので、<br class="max-lg:hidden">
        レッスンには自信があります。<br class="max-lg:hidden">
        それでも生徒様と講師の相性が合わないこともあります。<br class="max-lg:hidden">
        そんなときはこの制度をご利用ください。</p>
      <div
        class="bg-[#F7D6D177] rounded-[10px] pt-[26px] pb-10 px-10 mt-7 text-center max-w-[720px] mx-auto w-full relative max-lg:px-[10px]">
        <h6 class="text-[50px] futura-pt text-white absolute left-1/2 -translate-x-1/2 top-0">STEP</h6>
        <h4 class="text-xl relative after:bg-[#D87E80] after:block after:w-6 after:h-[3px] after:mt-7 flex flex-col items-center">簡単2ステップ申請</h4>
        <p class="text-sm mt-7">申請は専用サイトからたったの2ステップで完結するので、<br>言い出しにくいあなたでも大丈夫！<br>他の会員さまからの講師の満足度評価も事前にしっかりチェックできます！</p>
        <img src="/images/welcome-step-mobile.webp" width="136" height="193"
          class="absolute right-3 -top-8 w-[136px] h-[193px] max-lg:w-[72px] max-lg:h-24 max-lg:-right-2 max-lg:-top-4" />
        <div class="flex justify-between items-start mt-[26px] max-lg:flex-col max-lg:items-center">
          <div class="w-[284px] max-lg:w-full">
            <h6 class="flex items-center gap-2 justify-center bg-white text-[#D87E80]">
              <span class="text-[13px] font-bold">step</span>
              <span class="text-[25px] futura-pt">01</span>
            </h6>
            <h5 class="text-[16px] mt-[18px]">専用サイトで、<br>受講したレッスンを評価</h5>
            <p class="text-[13px] mt-7 text-left w-[260px] mx-auto">講師の評価が「1」か「2」の場合にレッスンを受け直していただけます。</p>
            <div class="grid grid-row grid-cols-5 mt-[46px] rounded-[10px] overflow-hidden shadow-md max-lg:mt-4">
              <div class="flex flex-col items-center justify-center gap-1 py-2 bg-white">
                <span class="text-xs">1</span>
                <span class="block w-10 h-10 bg-[url('/images/icon_satisfuction-face-5.svg')] bg-cover"></span>
                <span class="text-[11px]">大変<br>満足</span>
              </div>
              <div class="flex flex-col items-center justify-center gap-1 py-2 bg-white">
                <span class="text-xs">2</span>
                <span class="block w-10 h-10 bg-[url('/images/icon_satisfuction-face-4.svg')] bg-cover"></span>
                <span class="text-[11px]">大変<br>満足</span>
              </div>
              <div class="flex flex-col items-center justify-center gap-1 py-2 bg-white">
                <span class="text-xs">3</span>
                <span class="block w-10 h-10 bg-[url('/images/icon_satisfuction-face-3.svg')] bg-cover"></span>
                <span class="text-[11px]">大変<br>満足</span>
              </div>
              <div class="flex flex-col items-center justify-center gap-1 py-2 bg-[#ADADAD55]">
                <span class="text-xs">4</span>
                <span class="block w-10 h-10 bg-[url('/images/icon_satisfuction-face-2.svg')] bg-cover"></span>
                <span class="text-[11px]">大変<br>満足</span>
              </div>
              <div class="flex flex-col items-center justify-center gap-1 py-2 bg-[#ADADAD55]">
                <span class="text-xs">5</span>
                <span class="block w-10 h-10 bg-[url('/images/icon_satisfuction-face-1.svg')] bg-cover"></span>
                <span class="text-[11px]">大変<br>満足</span>
              </div>
            </div>
            <div class="text-right">
              <span class="relative text-white bg-[#E39597] text-xs py-1.5 px-[14px] rounded-full right-0 bottom-0.5 after:block after:w-0 after:h-0 after:absolute after:border-x-[5px] after:border-x-transparent after:border-b-[8px] after:border-b-[#E39597] after:left-1/2 after:-translate-x-1/2 after:-top-2">ENJOY保証対象</span>
            </div>
          </div>
          <hr class="h-[348px] w-0 border-r max-lg:hidden">
          <div class="w-[284px] max-lg:w-full max-lg:mt-[53px]">
            <h6 class="flex items-center gap-2 justify-center bg-white text-[#D87E80]">
              <span class="text-[13px] font-bold">step</span>
              <span class="text-[25px] futura-pt">01</span>
            </h6>
            <h5 class="text-[16px] mt-[18px]">お好きな講師を選んで<br>再受講予約！</h5>
            <p class="text-[13px] mt-7 text-left w-[260px] mx-auto">講師の評価が「1」か「2」の場合にレッスンを受け直していただけます。</p>
            <div class="mt-[46px] rounded-[10px] overflow-hidden shadow-md max-lg:mt-10">
              <img class="w-full h-auto" src="/images/welcome-step-two.webp" width="280" height="120" alt="step01" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-375 lg:max-w-screen-lg mx-auto pb-10 lg:pb-[50px] bg-white max-lg:pt-3 max-lg:pb-6">
      <SquareButton class="" @click="handleClickClose" arrow="up"><span
          class="py-[14px] lg:py-3">閉じる</span></SquareButton>
    </div>
  </div>
</template>

<style scoped>

.clip-path {
  background-color: white;
  display: block;
  width: 100%;
  height: 120px;
  clip-path: polygon(0% 0%, 50% 100%, 100% 0, 100% 100%, 0 100%);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
}
@media screen and (max-width: 1024px) {
  .clip-path {
    height: 60px;
  }
}
</style>