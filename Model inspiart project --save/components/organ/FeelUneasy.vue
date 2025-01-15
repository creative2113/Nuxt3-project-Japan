<template>
  <div
    class="w-[335px] pb-[30px] mx-auto mt-[47px] rounded-[20px] shadow-[0_5px_20px_#00000040] bg-gradient-to-b from-[#FE88BB] to-[#AA99EE] relative">
    <img src="/images/feel-uneasy-banner.webp" alt="electric" width="335" height="286" loading="lazy" decoding="async"
      class="w-full h-auto rounded-t-[20px] brightness-[0.8]" />
    <h3 class="absolute w-full text-center text-[26px] font-bold text-white top-[88px] left-0">「オンライン」なんて、<br>
      何だか不安…</h3>
    <img src="/images/feel-uneasy-top.svg" alt="electric" width="87" height="73" loading="lazy" decoding="async"
      class="w-[87px] h-auto absolute left-2.5 top-0 -translate-y-1/2" />
    <div class="absolute w-full flex justify-center items-start top-[172px] left-0 gap-3 text-xs text-center font-bold">
      <p class="rounded-text">
        楽譜って<br>
        どうやって<br>
        共有する？
      </p>
      <p class="rounded-text">
        細かな動き<br>
        チェック<br>
        できる？
      </p>
      <p class="rounded-text">
        SNS投稿<br>
        投げ銭も<br>
        できる？
      </p>
    </div>
    <h4 class="w-full text-[28px] text-white font-bold mt-5">
      <span class="block border-b-white border-b-[5px] w-max mx-auto">
        <img src="/images/logo_inspiart_art.svg" alt="electric" width="172" height="40" loading="lazy" decoding="async"
          class="w-[172px] h-auto mb-1 inline-block" />なら
      </span>
      <span class="block border-b-white border-b-[5px] w-max mx-auto">大丈夫！</span>
    </h4>
    <div>
      <div v-for="content, i in contents" :key="i" class="w-full relative mt-5">
        <h4 v-html="content.title"
          class="text-lg text-white text-center pt-5 font-bold bg-no-repeat bg-contain bg-center -mb-5 relative z-10 h-[112px]"
          :class="i === 1 ? 'w-[220px] ml-auto mr-[-10px]' : 'w-[200px] mr-auto ml-[-10px]'"
          :style="{ backgroundImage: `url('${content.title_bg}')` }">
        </h4>
        <img :src="content.banner" :alt="content.title" width="335" height="188" loading="lazy" decoding="async"
          class="w-full h-auto" />
        <h5 v-html="content.sub_title" class="min-w-[355px] -mx-[10px] h-[80px] text-center content-center shadow-md font-bold text-[15px] bg-white rounded-[10px]"></h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contents = [
  {
    title: "音楽に最適化した<br>オンラインシステム",
    title_bg: "/images/page-instructors-title.svg",
    banner: "/images/uneasy-photo-1.webp",
    sub_title: "先生と一緒にリアルタタイムで<br>楽譜を見ながらレッスンできます！",
  },
  {
    title: "手元と引きのW表示！,<br>2画面で分かりやすい！",
    title_bg: "/images/feel-uneasy-title-2.svg",
    banner: "/images/uneasy-photo-2.webp",
    sub_title: "先生側も生徒側も2画面にできるから、<br>細かな指の動きまでチェックしてもらえます！",
  },
  {
    title: "オンラインレッスンも<br>投げ銭に対応！",
    title_bg: "/images/page-instructors-title.svg",
    banner: "/images/uneasy-photo-3.webp",
    sub_title: "オンラインレッスンをライブ配信！<br>レッスンがそのままコンテンツになります！",
  },
]
</script>

<style scoped>
.rounded-text {
  width: 83px;
  height: 83px;
  border-radius: 83px;
  background-color: white;
  font-weight: bold;
  text-align: center;
  align-content: center;
  position: relative;
}

.rounded-text::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: white;
  position: absolute;
}

.rounded-text:nth-of-type(1)::after {
  bottom: 0;
  right: 0;
}

.rounded-text:nth-of-type(2)::after {
  bottom: 4px;
  left: 50%;
  transform: translate(-50%, 50%);
}

.rounded-text:nth-of-type(3)::after {
  bottom: 0;
  left: 0;
}
</style>