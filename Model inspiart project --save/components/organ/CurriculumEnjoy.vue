<template>
  <div class="pt-5 text-white">
    <img
      src="/images/fukidashi.svg"
      alt="fukidashi"
      width="355"
      height="203"
      loading="lazy"
      decoding="async"
      class="min-w-[355px] h-auto mx-[-10px] drop-shadow-xl relative"
    />
    <div
      class="w-[335px] mx-auto bg-gradient-to-r from-[#B0A2E9] to-[#C2ABE4] pt-[67px] mt-[-40px] rounded-[20px] shadow-xl overflow-hidden"
    >
      <h3 class="text-center text-[20px] mamelon">
        レッスンを受けるだけで<br />
        フォロワーも収入も増えちゃう<br />
        総合芸能スクール
      </h3>
      <div class="relative mt-5 pb-[108px]">
        <div
          class="w-full h-[280px] bg-gradient-to-b from-[#00000001] to-[#00000064] absolute bottom-0 left-0"
        ></div>
        <img
          src="/images/pixta-girl.webp"
          alt="enjoy"
          width="256"
          height="558"
          loading="lazy"
          decoding="async"
          class="w-[256px] h-auto ml-1 relative"
        />
        <p
          class="text-[36px] roboto-black italic leading-[52px] opacity-30 absolute right-2 top-[114px]"
        >
          <span class="text-[48px]">E</span>njoy<br />
          <span class="text-[48px] ml-3">Y</span>our<br />
          <span class="text-[48px] ml-6">S</span>ound
        </p>
        <div
          class="absolute w-[240px] h-[240px] border-4 border-[#FFFFFF] rounded-full bottom-[66px] left-1/2 -translate-x-1/2"
        >
          <div class="relative w-full h-full">
            <img
              src="/images/logo_inspiart.svg"
              alt="inspiart"
              width="108"
              height="100"
              loading="lazy"
              decoding="async"
              class="w-[108px] h-auto absolute top-[56px] left-1/2 -translate-x-1/2"
            />
            <div
              class="flex items-start justify-center absolute bottom-[25px] left-1/2 -translate-x-1/2 gap-[4px] z-10"
            >
              <img
                v-for="(item, i) of [
                  '/images/TikTok.webp',
                  '/images/Instagram.webp',
                  '/images/Youtube.webp',
                  '/images/Twitter.webp',
                ]"
                :key="i"
                :src="item"
                width="30"
                height="30"
                alt="social"
                :class="i === 1 || i === 2 ? 'mt-4' : ''"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p
              v-for="(item, i) of [
                '楽器<br>スキル',
                'ライブ<br>配信',
                '投げ銭<br>収入',
                'SNS<br>投稿作品',
                'チャンネル<br>登録者数',
                'SNS<br>フォロワー',
                'NFT<br>収入',
                'NFT<br>作品',
              ]"
              class="rounded-text"
              :key="i"
              v-html="item"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounded-text {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  color: white;
  font-weight: bold;
  text-align: center;
  align-content: center;
  line-height: 18px;
  border: solid 3px white;
  background-image: linear-gradient(to bottom right, #fe88bb, #aa99ee);
  box-shadow: 0 5px 10px #00000033;
  position: absolute;
  transform: translate(-50%, -50%);
  letter-spacing: -0.1em;
}

.rounded-text:nth-of-type(1) {
  top: 0;
  left: 50%;
}

.rounded-text:nth-of-type(2) {
  top: 14%;
  left: 86%;
}

.rounded-text:nth-of-type(3) {
  top: 50%;
  left: 100%;
}

.rounded-text:nth-of-type(4) {
  top: 86%;
  left: 86%;
}

.rounded-text:nth-of-type(5) {
  top: 100%;
  left: 50%;
}

.rounded-text:nth-of-type(6) {
  top: 86%;
  left: 14%;
}

.rounded-text:nth-of-type(7) {
  top: 50%;
  left: 0;
}

.rounded-text:nth-of-type(8) {
  top: 14%;
  left: 14%;
}
</style>
