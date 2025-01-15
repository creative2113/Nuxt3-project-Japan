<template>
  <div class="top-service">
    <h2 class="text-white text-[24px] text-center font-bold">InspiartZ って<br>何ができるところ？</h2>
    <hr class="w-[40px] h-[2px] bg-white border-none mx-auto mt-[26px]" />
    <div class="pt-[16px] relative">
      <OrganServiceItem v-for="(item, i) of items" :key="i" :item="item" />
    </div>
    <div class="w-[220px] aspect-square bg-[#FFFFFF33] rounded-full p-[20px] mx-auto mt-[-60px]">
      <p class="w-full h-full text-white text-[60px] content-center text-center rounded-full bg-[#FFFFFF33] roboto-bold italic">&</p>
    </div>
    <div class="relative w-[200px] h-[200px] rounded-full border-4 border-white mx-auto content-center">
      <img src="/images/top-service-path.svg" alt="service" width="60" height="60" loading="lazy" decoding="async" class="mx-auto block" />
      <div class="circle">
        <h6>充実の</h6>
        <h5>学割</h5>
      </div>
      <div class="circle">
        <h6>最先端</h6>
        <p>スタジオ</p>
        <h5>設備</h5>
      </div>
      <div class="circle">
        <h6>初心者</h6>
        <h5>歓迎</h5>
      </div>
      <div class="circle">
        <h5>プロ</h5>
        <p>デビュー</p>
        <h5>応援</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    title: '長年の実績抜群の音楽レッスン',
    index: '1',
    text: '一人でもOK、バンドを組んでもOK',
    description: '豊富な47コースから選べて<br>何と楽器無料プレゼント！',
    image: '/images/service-item-image-1.webp',
  },
  {
    title: 'ダンスレッスンもできちゃう',
    index: '2',
    text: 'EYS自慢のキレイなスタジオ！',
    description: 'Hip-Hopからアイドルまで<br>豊富なジャンルのダンスも！',
    image: '/images/service-item-image-2.webp',
  },
  {
    title: '更に目指せライバー・ユー<br>チューバー・インフルエンサー',
    index: '3',
    text: 'YouTube / TikTok / Instagram …',
    description: '話題のメディアで活躍する次世代<br>ライバー・ユーチューバー・<br>インフルエンサーに！',
    image: '/images/service-item-image-3.webp',
  }
]
</script>

<style scoped>
.top-service {
  padding: 26px 0 36px;
  background-image: linear-gradient(to bottom, #AA99EE, #ED88CC);
  padding-bottom: 106px;
}
.circle {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: white;
  box-shadow: 0 0 10px #00000033;
  color: #6688DD;
  text-align: center;
  align-content: center;
  transform: translate(-50%, -50%);
  font-weight: 600;
}

.circle:first-of-type {
  top: -5%;
  left: 50%;
}

.circle:nth-of-type(2) {
  top: 50%;
  left: 105%;
}

.circle:nth-of-type(3) {
  top: 105%;
  left: 50%;
}

.circle:nth-of-type(4) {
  top: 50%;
  left: -5%;
}

.circle>h5 {
  font-size: 30px;
  line-height: 30px;
}

.circle>h6 {
  font-size: 19px;
  line-height: 19px;
}

.circle>p {
  font-size: 15px;
  line-height: 15px;
}
</style>
