<template>
  <button @click="scrollToElm" class="scroll-top h-[40px] content-center pl-[28px] pr-[8px] absolute top-[-40px] right-0 z-10 bg-[#000000cc]">
    <img src="/images/arrow-scroll-top.svg" alt="scroll-top" width="13" height="26" loading="lazy" decoding="async" />
  </button>
</template>

<style scoped>
.scroll-top {
  clip-path: polygon(10px 0, 101% 0, 101% 100%, 0 100%);
}
</style>