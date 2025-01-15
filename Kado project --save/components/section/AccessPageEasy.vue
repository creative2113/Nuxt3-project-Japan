<template>
  <section class="w-full py-10 lg:hidden">
    <div class="w-full py-9 bg-gradient-to-b from-[#E6E9FD] to-[#FDF2FB]">
      <h2 class="text-lg text-center font-bold tracking-wider">駅チカで通いやすい教室！<br>全国拡大中!<br>EYS華道&フラワー教室のこだわり</h2>
      <div class="flex justify-evenly mt-10 gap-x-4 gap-y-[26px] flex-wrap px-5">
        <div v-for="condition, i of conditions" class="w-[100px]">
          <img :src="condition.image" :alt="condition.title" width="100" height="86" loading="lazy" decoding="async" class="w-[100px] h-auto drop-shadow-[0_0_6px_#00000033]" />
          <h3 class="text-lg mt-3 text-center font-bold">{{ condition.title }}</h3>
          <p class="text-xs mt-2 font-semibold">{{ condition.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const conditions = [
  {
    title: "駅チカ",
    description: "教室は全て最寄り駅から徒歩5分圏内！",
    image: "/images/access-easy-condition-1.svg",
  },
  {
    title: "駅チカ",
    description: "元気な子どもたちに優しいクッション素材の床や壁を採用。",
    image: "/images/access-easy-condition-2.svg",
  },
  {
    title: "駅チカ",
    description: "レッスン前後にゆっくりくつろげるキレイなロビー。",
    image: "/images/access-easy-condition-3.svg",
  },
  {
    title: "駅チカ",
    description: "教室内は常に清潔に保たれ、全室空調設備や空気清浄機を完備しています。",
    image: "/images/access-easy-condition-4.svg",
  },
  {
    title: "駅チカ",
    description: "防犯カメラの他、体温感知・顔認証の入退場システムの防犯対策もバッチリ。",
    image: "/images/access-easy-condition-5.svg",
  },
]
</script>