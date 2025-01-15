<template>
  <div class="pt-8 bg-white">
    <div>
      <h4
        class="w-[219px] h-[115px] bg-[url('/images/page-voice-detail-title-bg.svg')] bg-contain bg-no-repeat bg-center text-white font-bold text-[18px] pt-6 text-center mx-auto drop-shadow-xl">
        こんな楽器まで!?<br>驚きのラインナップ
      </h4>
      <img src="/images/voice-detail-instruments.webp" alt="instruments" class="min-w-[385px] mr-[-10px] mt-4">
    </div>
    <div class="bg-[#EFEFEF] w-full pt-4 pb-5 px-5">
      <div class="flex items-center justify-between">
        <hr class="border-t-2 border-t-[#BBAA77] w-20">
        <h5 class="text-xl font-bold text-[#BBAA77]">３つの企業努力</h5>
        <hr class="border-t-2 border-t-[#BBAA77] w-20">
      </div>
      <div class="flex flex-col gap-5 mt-[25px]">
        <div v-for="items, i of efforts" :key="i" class="flex justify-between items-center">
          <div class="w-[145px]">
            <img :src="items.image" :alt="items.title" loading="lazy" decoding="async"
              :class="i === 1 ? 'w-[119px] h-[117px]' : 'w-[145px] h-[100px]'">
          </div>
          <div class="w-[178px]">
            <h5 class="font-bold">{{ items.title }}</h5>
            <p class="text-[12px] mt-[10px]">{{ items.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-[37px]">
      <h4 class="text-center">世界中の小さな工房との<br>
        パートナーシップにより<br>
        高品質な楽器を開発し、会員様に無料で<br>
        プレゼントしています！</h4>
      <img src="/images/voice-video-instruments.webp" loading="lazy" decoding="async" alt="video"
        class="w-full h-auto mt-[27px]">
      <h4 class="text-center mt-[27px]">楽器無料プレゼントへの<br>
        道のりを動画でチェック！</h4>
      <div class="mt-5">
        <div
          class="flex justify-center items-center bg-gradient-to-r from-[#FF88BB] to-[#FF6473] w-full pt-3 pb-[46px]">
          <img src="/images/video-title-icon.svg" loading="lazy" decoding="async" alt="video"
            class="w-[32px] h-[32px] mr-4">
          <h5 class="text-white font-semibold">楽器プレゼントを動画解説♪</h5>
        </div>
        <img src="/images/voice-video-1.webp" loading="lazy" decoding="async" alt="video"
          class="w-[335px] h-auto mx-auto mt-[-34px]">
      </div>
      <div class="mt-5">
        <div
          class="flex justify-center items-center bg-gradient-to-r from-[#66DDDD] to-[#77BBDD] w-full pt-3 pb-[46px]">
          <img src="/images/video-title-icon.svg" loading="lazy" decoding="async" alt="video"
            class="w-[32px] h-[32px] mr-4">
          <h5 class="text-white font-semibold">楽器の材料探しドキュメンタリー！</h5>
        </div>
        <img src="/images/voice-video-2.webp" loading="lazy" decoding="async" alt="video"
          class="w-[335px] h-auto mx-auto mt-[-34px]">
      </div>
      <div class="pt-5">
        <h5 class="w-full bg-[#AAAAAA] pt-3 pb-[46px] text-white text-center font-semibold">実際、楽器の価格ってどうなってるの？</h5>
        <div class="w-[335px] mt-[-34px] mx-auto bg-[#DDDDDD] rounded-[10px] p-[10px] flex flex-col gap-[28px]">
          <div v-for="story, i of stories" :key="i" :class="i === stories.length - 1 ? 'after:hidden' : 'after:block'"
            class="relative w-full bg-white p-[10px] after:absolute after:bottom-[-15px] after:left-1/2 after:-translate-x-1/2 after:border-t-[15px] after:border-t-white after:border-x-[15px] after:border-x-transparent">
            <img :src="story.image" loading="lazy" decoding="async" alt="video" class="w-full h-auto">
            <h6 class="pt-[18px] pb-[8px] text-center mamelon tracking-[-0.1em]" v-html="story.text" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full pt-[27px] pb-[54px]">
      <button @click="handleClose"
        class="block w-[300px] font-bold mx-auto text-[#6688DD] border-2 border-[#6688DD] rounded-full py-3 px-[15px]">
        閉じる
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['onClose']);

const handleClose = () => {
  emit('onClose');
};

const efforts = [
  {
    image: "/images/voice-detail-first-1.webp",
    title: "世界に広がる工場",
    desc: "素材と部品、加工技術にこだわった高品質モデルを大量生産"
  },
  {
    image: "/images/voice-detail-first-2.webp",
    title: "モデルを絞り込み",
    desc: "こだわりの高品質モデルに絞り込み生産の無駄をカット"
  },
  {
    image: "/images/voice-detail-first-3.webp",
    title: "モデルを絞り込み",
    desc: "独自のネットワークを使った物流一元化により、安定かつ安価なロジスティクスをグローバルに実現"
  },
]

const stories = [
  {
    image: "/images/bottom-voice-story-1.webp",
    text: "音楽を始めるのに、<br>一番の障害は楽器購入費用"
  },
  {
    image: "/images/bottom-voice-story-2.webp",
    text: "値段も高いし、<br>種類もどれを選べば良いかわからない…"
  },
  {
    image: "/images/bottom-voice-story-3.webp",
    text: "音楽教室に通うと、<br>不要に高額な楽器を勧められたりする"
  },
  {
    image: "/images/bottom-voice-story-4.webp",
    text: "実は、音楽教室と楽器メーカーには<br>マージン発生の関係があるからで…"
  },
  {
    image: "/images/bottom-voice-story-5.webp",
    text: "そのうえ、楽器の価格は、<br>流通費や広告費で不当に高くなっている…"
  },
  {
    image: "/images/bottom-voice-story-6.webp",
    text: "楽器の本当の価値は、<br>わからないまま…"
  },
  {
    image: "/images/bottom-voice-story-7.webp",
    text: "レッスンよりも楽器販売で儲けるような<br>ビジネスモデルに陥ってしまっているのです"
  },
  {
    image: "/images/bottom-voice-story-8.webp",
    text: "EYSはこのビジネスモデルを捨て、<br>純粋にレッスンの価値で勝負します！"
  },
  {
    image: "/images/bottom-voice-story-9.webp",
    text: "楽器の本当の価値や価格も、<br>提携サイト「Otolier」で明らかに！"
  },
  {
    image: "/images/bottom-voice-story-10.webp",
    text: "既に16,750個もの楽器を<br>無料でプレゼントした実績があります"
  },
  {
    image: "/images/bottom-voice-story-11.webp",
    text: "安くて質の高い楽器を手に、<br>気軽に音楽を始めてほしい…"
  },
  {
    image: "/images/bottom-voice-story-12.webp",
    text: "それが私達の願いであり…<br>あなたの笑顔が最高のプレゼントなのです。"
  }
]
</script>
