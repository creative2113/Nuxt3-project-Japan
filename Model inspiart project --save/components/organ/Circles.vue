<template>
  <div
    class="flex justify-center items-center gap-[11px] absolute w-full h-auto left-0 bottom-[20px] z-10"
  >
    <div class="circle-inner" :style="{backgroundImage: `linear-gradient(to right bottom, ${bgFrom}, ${bgTo})`}">
      <p class="text-[18px]">Z学割</p>
      <p class="text-[15px]"><b class="roboto-bold text-[28px] leading-7">9,800</b>円<br />/月</p>
    </div>
    <div class="circle-inner" :style="{backgroundImage: `linear-gradient(to right bottom, ${bgFrom}, ${bgTo})`}">
      <p class="text-[30px] leading-[30px]">最新<br />設備</p>
      <p class="text-[13px]">使い放題</p>
    </div>
    <div class="circle-inner" :style="{backgroundImage: `linear-gradient(to right bottom, ${bgFrom}, ${bgTo})`}">
      <p class="text-[13px] tracking-[-0.1em]">レッスンで</p>
      <p class="text-[24px] leading-6">SNS動画</p>
      <p class="text-[13px]">が作れる</p>
      <img src="/images/TikTok.webp" alt="TikTok" width="30" height="30" loading="lazy" decoding="async" class="w-[30px] h-auto absolute top-0 left-0" />
      <img src="/images/Instagram.webp" alt="Instagram" width="30" height="30" loading="lazy" decoding="async" class="w-[30px] h-auto absolute top-0 right-0" />
      <img src="/images/Twitter.webp" alt="Twitter" width="30" height="30" loading="lazy" decoding="async" class="w-[30px] h-auto absolute bottom-0 right-0" />
      <img src="/images/Youtube.webp" alt="Youtube" width="30" height="30" loading="lazy" decoding="async" class="w-[30px] h-auto absolute bottom-0 left-0" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  bgFrom: string;
  bgTo: string;
}>();
</script>
<style scoped>
.circle-inner {
  width: 110px;
  height: 110px;
  border-radius: 110px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  border: solid 3px white;
  color: white;
  text-align: center;
  align-content: center;
  font-weight: bold;
}
</style>