<template>
  <div class="mt-[50px] w-[335px] mx-auto rounded-[20px] shadow-[0_5px_20px_#00000040] bg-white relative pt-7">
    <h3 class="text-xl text-center font-bold relative z-10">オフ会プログラムも充実！</h3>
    <hr class="w-[246px] h-4 bg-gradient-to-r from-[#AA99EE] to-[#FE88BB] mx-auto -mt-3 opacity-30">
    <h4 class="text-sm text-center font-bold mt-3">オンライン会員も参加できるタイミングで<br>まとめて🎶</h4>
    <div v-for="content, i in contents" :key="i" class="w-full py-5">
      <h5
        class="w-[355px] min-w-[355px] mx-[-10px] h-[95px] text-center content-center text-white font-bold text-xl pb-4 bg-no-repeat bg-contain bg-center"
        v-html="content.title" :style="{ backgroundImage: `url('${content.title_bg}')` }"></h5>
      <h6 class="text-center text-sm font-bold mt-1.5" v-html="content.sub_title"></h6>
      <img :src="content.image" alt="banner" :width="content.image_w" :height="content.image_h" loading="lazy" decoding="async"
        class="mx-auto mt-7" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const contents = [
  {
    title: "Inspiartならではのプログラム",
    title_bg: "/images/online-program-title-bg-1.svg",
    sub_title: "上京時に、まとめて参加できるように<br>スケジューリング",
    image: "/images/online-program-image-1.webp",
    image_w: 305,
    image_h: 310,
  },
  {
    title: "特別講座もオンラインで",
    title_bg: "/images/online-program-title-bg-2.svg",
    sub_title: "特別講座もオンライン受講Welcome!",
    image: "/images/online-program-image-2.webp",
    image_w: 305,
    image_h: 305,
  },
  {
    title: "オンライン、リアルスタジオが<br>いつでも切り替え可能！",
    title_bg: "/images/online-program-title-bg-3.svg",
    sub_title: "オンライン、リアルスタジオが<br>いつでも切り替え可能！",
    image: "/images/online-program-image-3.webp",
    image_w: 303,
    image_h: 307,
  },
]
</script>