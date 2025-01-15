<template>
  <div class="pt-7">
    <div class="pt-5 px-5 pb-[90px] bg-gradient-to-r from-[#77BBDD] to-[#6688DD]">
      <MoleStudioList :studios="studios" />
    </div>
    <div class="pb-[50px] bg-white rounded-t-[20px]">
      <div class="flex justify-between items-start p-5">
        <div v-for="{ icon, text }, i of items" :key="i" class="">
          <div
            class="w-[70px] h-[70px] rounded-full border-[3px] border-white flex justify-center items-center shadow-lg bg-gradient-to-br from-[#77BBDD] to-[#6688DD]">
            <img :src="icon" :alt="text" loading="lazy" decoding="async" class="w-[30px] h-auto" />
          </div>
          <p v-html="text" class="text-[10px] text-center font-semibold mt-2"></p>
        </div>
      </div>
      <MoleCommunityItems :contents="contents" />
      <button class="text-xl text-white bg-black py-3 px-[70px] block mx-auto mt-5 relative roboto-bold italic">
        VIEW MORE
        <img src="/images/arrow/arrow-right.svg" alt="arrow" width="30" height="30" loading="lazy" decoding="async" class="absolute right-5 top-1/2 -translate-y-1/2" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const studios = await fetch("/data/studios.json").then((res) => res.json()).catch(() => []);

const items = [
  {
    icon: "/images/dance-studio-bottom-1.svg",
    text: "足腰に優しい<br>床材使用"
  },
  {
    icon: "/images/dance-studio-bottom-2.svg",
    text: "音響最高の<br>スタジオ"
  },
  {
    icon: "/images/dance-studio-bottom-3.svg",
    text: "全校シャワー<br>ロッカー完備"
  },
  {
    icon: "/images/dance-studio-bottom-4.svg",
    text: "快適で綺麗な<br>ロビー"
  }
]

const contents = [
  {
    banner: "/images/dance-studio-content-1.webp",
    title: "駅チカで通いやすい",
    sub_title: "学校帰りや部活帰りにも気軽に通えます！"
  },
  {
    banner: "/images/dance-studio-content-2.webp",
    title: "快適で綺麗なロビー",
    sub_title: "レッスンの合間に、他クラスのレッスンをチェック！"
  },
  {
    banner: "/images/dance-studio-content-3.webp",
    title: "綺麗なロッカー＆シャワールーム",
    sub_title: "レッスン後の汗も疲れも、スッキリ！"
  },
]
</script>