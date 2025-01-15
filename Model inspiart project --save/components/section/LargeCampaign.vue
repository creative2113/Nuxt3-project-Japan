<template>
  <div class="campaign-cta">
    <div class="flex justify-center items-center gap-2">
      <hr class="bg-white border-none w-[2px] h-[20px] rotate-[-30deg]" />
      <h2 class="text-white text-center text-[18px] font-semibold">
        今なら期間限定キャンペーン実施中！
      </h2>
      <hr class="bg-white border-none w-[2px] h-[20px] rotate-[30deg]" />
    </div>
    <div class="mt-4 px-5">
      <div class="campaign-item">
        <h3 class="border-[#FF5555] text-[#FF5555]">まずは試してみたい！</h3>
        <p class="text-center text-[20px] mt-1">という方は…</p>
        <img
          src="/images/photo-221.webp"
          alt="campaign-photo"
          width="170"
          height="150"
          loading="lazy"
          decoding="async"
          class="campaign-image"
        />
        <div class="absolute bottom-[10px] left-1/2 -translate-x-1/2">
          <button class="free-trial-btn flex justify-center items-center gap-[20px] w-[310px] h-[60px] rounded-full shadow-lg bg-gradient-to-r from-[#FF88BB] to-[#FF5555]">
            <img src="/images/music-symbol.svg" alt="無料体験レッスン" loading="lazy" decoding="async" width="22" height="24">
            <span class="text-white text-[20px] font-bold">無料体験レッスン</span>
          </button>
        </div>
        <p class="absolute bottom-20 right-5 w-[120px] h-[120px] rounded-full bg-white text-[#FF88BB] border-[6px] border-[#FF88BB] text-center content-center font-bold">
          <span class="text-[15px]">まずは</span>
          <br />
          <span class="text-[30px] leading-[30px]">無料</span>
          <br />
          <span class="text-[30px] leading-[30px]">体験</span>
        </p>
      </div>
      <div class="campaign-item mt-5">
        <h3 class="border-[#6688DD] text-[#6688DD]">まずは試してみたい！</h3>
        <p class="text-center text-[20px] mt-1">という方は…</p>
        <img
          src="/images/photo-222.webp"
          alt="campaign-photo"
          width="170"
          height="150"
          loading="lazy"
          decoding="async"
          class="campaign-image"
        />
        <div class="absolute bottom-[10px] left-1/2 -translate-x-1/2">
          <button class="free-trial-btn flex justify-center items-center gap-[20px] w-[310px] h-[60px] rounded-full shadow-lg bg-gradient-to-r from-[#77BBDD] to-[#6688DD] tracking-tighter">
            <img src="/images/counsell-message.svg" alt="無料カウンセリング" loading="lazy" decoding="async" width="28" height="28">
            <span class="text-white text-[20px] font-bold">無料カウンセリング</span>
          </button>
        </div>
        <p class="absolute bottom-20 left-5 w-[120px] h-[120px] rounded-full bg-white text-[#88DDFF] border-[6px] border-[#88DDFF] text-center content-center font-bold">
          <span class="text-[15px]">まずは</span>
          <br />
          <span class="text-[30px] leading-[30px]">簡単</span>
          <br />
          <span class="text-[30px] leading-[30px]">相談</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.campaign-cta {
  position: relative;
  padding: 37px 0 15px;
  background-image: linear-gradient(to top left, #88ddff, #ff88bb);
  clip-path: polygon(0 0, 50% 20px, 100% 0, 100% 100%, 0 100%);
  margin-top: -26px;
}

.campaign-item {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px #00000033;
}

.campaign-item > h3 {
  font-size: 24px;
  border-bottom-width: 2px;
  margin-top: 5px;
  font-weight: bold;
  width: max-content;
  margin-inline: auto;
}

.campaign-image {
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 50% 35px, 100% 0, 100% 100%, 0 100%);
  margin-top: -10px;
}
</style>
