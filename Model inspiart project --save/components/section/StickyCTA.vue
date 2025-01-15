<template>
  <div @click="scrollToElm" class="sticky-cta">
    <AtomFreeTrialBtn
      image="/images/music-symbol.svg"
      :width="16"
      :height="17"
      text="無料体験レッスン"
      class="bg-gradient-to-r from-[#FF88BB] to-[#FF5555]"
    />
    <span
      class="text-[12px] w-[30px] h-[30px] rounded-full bg-white text-center content-center roboto-italic mx-[-20px] relative z-10 roboto-bold italic"
      >OR</span
    >
    <AtomFreeTrialBtn
      image="/images/counsell-message.svg"
      :width="18"
      :height="18"
      text="無料カウンセリング"
      class="bg-gradient-to-r from-[#77BBDD] to-[#6688DD]"
    />
    <AtomScrollTopBtn />
  </div>
</template>

<style scoped>
.sticky-cta {
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: #000000cc;
}
</style>
