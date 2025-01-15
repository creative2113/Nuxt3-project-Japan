<template>
  <div>
    <div class="bg-gradient-to-b from-[#EE66BB] to-[#AA77CC] relative">
      <div class="flex justify-center items-center pt-5">
        <hr class="w-[30px] border-t-white border-t-[3px] rotate-[60deg]" />
        <h3 class="text-white font-bold text-lg">実際の授業が体験できる！</h3>
        <hr class="w-[30px] border-t-white border-t-[3px] -rotate-[60deg]" />
      </div>
      <div class="w-[335px] mx-auto rounded-[20px] shadow-[0_5px_20px_#00000040] relative mt-4 overflow-hidden">
        <img src="/images/dance-real-lesson-banner.webp" alt="lesson" width="335" height="400" loading="lazy"
          decoding="async" class="w-full h-auto" />
        <h5 class="text-center font-bold text-[30px] w-full absolute top-3.5 left-0 z-[1]">無料体験レッスン</h5>
        <p class="w-[120px] h-[120px] absolute bottom-5 right-5 z-[1] bg-white rounded-full border-[6px] border-[#FE88BB] shadow-md text-center text-[#FE88BB] content-center font-bold">
          <span class="text-[15px]">まずは</span><br>
          <span class="text-[30px] leading-[30px]">無料<br>体験</span>
        </p>
      </div>
      <h4 class="text-center text-white font-bold text-sm pt-5 pb-6">
        inspiartZでは、すべてのコースで<br>
        無料体験レッスンを受け付けています。<br>
        まずはお気軽にお問い合わせください。
      </h4>
    </div>
    <div class="flex p-[5px] justify-between items-center bg-[#000000CC]">
      <button class="w-[180px] h-10 rounded-full bg-[#FFFFFF] flex justify-center items-center gap-2">
        <img src="/images/freedial.svg" alt="arrow" width="30" height="20" loading="lazy" decoding="async"
          class="w-[30px] h-auto" />
          <div>
            <p class="roboto-bold text-lg leading-5">0120-978-900</p>
            <p class="text-[9px] roboto-bold font-bold"><span>電話受付：</span> 8:00~25:00</p>
          </div>
      </button>
      <button class="w-[180px] h-10 rounded-full bg-[#6688DD] text-white font-bold text-[15px]">無料体験レッスン</button>
    </div>
    <div class="relative">
      <img src="/images/dance-real-lesson-image.webp" alt="lesson" width="375" height="120" loading="lazy"
        decoding="async" class="w-full h-auto" />
      <hr class="absolute w-full h-[60px] border-none bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF01] top-[60px] left-0 z-[1]" />
      <h3 class="w-max py-2 px-4 bg-[#222222] text-white font-bold text-[15px] absolute top-[60px] left-1/2 -translate-x-1/2 z-[2]">ダンス超入門クラス</h3>
      <h4 class="text-[26px] font-bold text-center">体験レッスンのご紹介</h4>
      <p class="w-[335px] mx-auto mt-2.5 text-sm">初めてでちょっと不安…という方も、超入門クラスのインストラクターが誠心誠意サポートします。</p>
      <div class="flex mt-5 px-[30px] justify-between items-start">
        <div class="w-[150px] h-[150px] rounded-full bg-[#FF88BB24] flex flex-col justify-center items-center relative">
          <h5 class="text-xl font-bold text-[#FF88BB] text-center">服装</h5>
          <p class="w-[130px] text-sm mt-2">
            ・動きやすい服装<br>
            ・室内履きシューズ
          </p>
          <img src="/images/real-lesson-icon-1.svg" alt="lesson" width="45" height="45" loading="lazy"
            decoding="async" class="w-[45px] h-auto absolute bottom-0 right-3" />
        </div>
        <div class="w-[150px] h-[150px] rounded-full bg-[#55CCAA24] flex flex-col justify-center items-center relative">
          <h5 class="text-xl font-bold text-[#55CCAA] text-center">持ち物</h5>
          <p class="w-[130px] text-sm mt-2">
            ・汗拭き用のタオル<br>
            ・飲み物
          </p>
          <img src="/images/real-lesson-icon-2.svg" alt="lesson" width="45" height="45" loading="lazy"
            decoding="async" class="w-[45px] h-auto absolute bottom-0 right-3" />
        </div>
      </div>
    </div>
    <div class="pt-10 pb-10 flex flex-col gap-9 px-5">
      <div v-for="step, i of steps" :key="i" class="relative">
        <div class="flex items-end">
          <img :src="step.banner" :alt="step.title" width="175" height="130" loading="lazy" decoding="async" class="w-[175px] h-auto rounded-t-[20px]" />
          <div class="w-40">
            <p class="flex justify-center items-center gap-2">
              <span class="text-xl block">STEP</span>
              <span class="text-[#FF88BB] text-[68px] roboto-bold italic block leading-[44px]">{{ step.id }}</span>
            </p>
            <h6 v-html="step.title" class="text-sm roboto-bold font-bold bg-[#AA99EE64] rounded-tr-[20px] py-5 w-full text-center"></h6>
          </div>
        </div>
        <p v-if="step.desc" v-html="step.desc" class="text-xs pt-4 pb-3 px-6 w-full bg-[] rounded-b-[20px] text-white bg-[#AA99EE]"></p>
        <hr v-if="i !== 2" class="border-t-[16px] border-t-[#222222] border-x-[19px] border-x-transparent absolute top-[100%] right-[60px] cursor-pointer">
      </div>
    </div>
    <OrganNarauno
      :main-article="PopularArticle.mainArticle"
      :sub-article1="PopularArticle.subArticle1"
      :sub-article2="PopularArticle.subArticle2"
      :articles="NaraunoArticle"
      :players="NaraunoPlayer"
    />
  </div>
</template>

<script lang="ts" setup>
const PopularArticle = ref();
PopularArticle.value = await(await fetch('/data/na-ra-uno-popular-article.json')).json();
const NaraunoArticle = ref();
NaraunoArticle.value = await(await fetch('/data/na-ra-uno-article.json')).json();
const NaraunoPlayer = ref();
NaraunoPlayer.value = await(await fetch('/data/na-ra-uno-player.json')).json();
const steps = [
  {
    id: 1,
    title: "“動きやすい服装”に<br>着替えて準備完了！",
    banner: "/images/real-lesson-step-1.webp",
  },
  {
    id: 2,
    title: "先生と一緒に、<br>レッスンスタート！",
    banner: "/images/real-lesson-step-2.webp",
    desc: "全くゼロからご参加いただける内容ですが、でも心配という方は、まずはレッスンをご見学ください",
  },
  {
    id: 3,
    title: "動きに慣れたら音楽<br>に合わせてトライ！",
    banner: "/images/real-lesson-step-3.webp",
    desc: "最後に、少しだけ音楽に乗せて、トライ！",
  },
]
</script>
