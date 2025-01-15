<template>
  <div class="mt-7 w-[335px] mx-auto bg-white flex flex-col gap-[30px]">
    <MoleOfferStage v-for="{ title, title_bg, title_w, title_h, contents }, i of stages" :key="i"
      :stage="{ id: i + 1, title, title_bg, title_w, title_h, contents }" />
  </div>
</template>

<script lang="ts" setup>
const stages = [
  {
    title: "経験なんて要らない！<br>むしろ、未経験歓迎！",
    title_bg: "/images/dance-possibility-stage-title-1.svg",
    title_w: 219,
    title_h: 102,
    contents: [
      {
        banner: "/images/dance-possibility-stage-image-1.webp",
        title: "素人状態から頑張ってチャレンジする姿…<br>そんなあなたをファンは応援したいのです！",
      },
    ],
  },
  {
    title: "基礎から学べる<br>リズムトレーニングがおすすめ！",
    title_bg: "/images/dance-possibility-stage-title-2.svg",
    title_w: 303,
    title_h: 103,
    contents: [
      {
        banner: "/images/dance-possibility-stage-image-2.webp",
        title: "超入門クラスは周りもみんな未経験者だから安心。<br>まずは楽しむ事をモットーにレッスンを進めます。",
      },
      {
        banner: "/images/dance-possibility-stage-image-3.webp",
        title: "無理な振り付けはしません。<br>レベルにあわせて、細かく丁寧にレッスンします",
      },
    ],
  },
]
</script>