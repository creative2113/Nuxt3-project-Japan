<template>
  <div class="campaign-cta">
    <div class="flex justify-center items-center gap-2">
      <hr class="bg-white border-none w-[2px] h-[20px] rotate-[-30deg]" />
      <h2 class="text-white text-center text-[18px] font-semibold">
        今なら期間限定キャンペーン実施中！
      </h2>
      <hr class="bg-white border-none w-[2px] h-[20px] rotate-[30deg]" />
    </div>
    <div class="flex justify-center items-center mt-2">
      <div class="campaign-item">
        <h3 class="border-[#FF5555] text-[#FF5555]">まずは試してみたい！</h3>
        <p class="text-center text-[12px]">という方は…</p>
        <img :src="banner1 ? banner1 : '/images/campaign-photo-1.webp'" alt="campaign-photo" width="170" height="150"
          loading="lazy" decoding="async" class="campaign-image" />
        <div class="absolute bottom-2 left-2">
          <AtomFreeTrialBtn image="/images/music-symbol.svg" :width="16" :height="17" text="無料体験レッスン"
            class="bg-gradient-to-r from-[#FF88BB] to-[#FF5555] !w-[155px]" />
        </div>
      </div>
      <p class="campaign-or">OR</p>
      <div class="campaign-item">
        <h3 class="border-[#6688DD] text-[#6688DD]">まずは試してみたい！</h3>
        <p class="text-center text-[12px]">という方は…</p>
        <img :src="banner2 ? banner2 : '/images/campaign-photo-2.webp'" alt="campaign-photo" width="170" height="150"
          loading="lazy" decoding="async" class="campaign-image" />
        <div class="absolute bottom-2 left-2">
          <AtomFreeTrialBtn image="/images/counsell-message.svg" :width="18" :height="18" text="無料カウンセリング"
            class="bg-gradient-to-r from-[#77BBDD] to-[#6688DD] !w-[155px] tracking-tighter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  banner1?: string;
  banner2?: string;
}>();
</script>

<style scoped>
.campaign-cta {
  position: relative;
  z-index: 20;
  padding: 37px 0 15px;
  background-image: linear-gradient(to top left, #88ddff, #ff88bb);
  clip-path: polygon(0 0, 50% 20px, 100% 0, 100% 100%, 0 100%);
  margin-top: -26px;
}

.campaign-item {
  position: relative;
  width: 170px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px #00000033;
}

.campaign-item>h3 {
  font-size: 13px;
  border-bottom-width: 2px;
  margin-top: 5px;
  font-weight: bold;
  width: max-content;
  margin-inline: auto;
}

.campaign-image {
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 50% 20px, 100% 0, 100% 100%, 0 100%);
  margin-top: -10px;
}

.campaign-or {
  width: 40px;
  height: 40px;
  margin-inline: -15px;
  border-radius: 20px;
  background-color: #000000cc;
  color: white;
  font-weight: bold;
  text-align: center;
  align-content: center;
  position: relative;
  font-style: italic;
  font-size: 18px;
  z-index: 10;
}
</style>
