<template>
  <div class="w-full relative">
    <h3 class="online-studios-title">オンライン</h3>
    <div class="p-5">
      <h4
        class="bg-[url('/images/top-studio-online-title.svg')] bg-contain bg-no-repeat drop-shadow-xl w-[243px] h-[102px] pt-[18px] text-center text-white text-[18px] font-semibold relative z-10"
      >
        自宅がスタジオに<br>
        早変わり！
      </h4>
      <div class="relative bg-white rounded-[10px] overflow-hidden shadow-xl mt-[-14px]">
        <img src="/images/top-studio-online-image.webp" alt="オンライン" width="335" height="250" loading="lazy" decoding="async" class="w-full h-auto" />
        <p class="w-max text-white font-bold bg-[#FF88BB] absolute py-1 px-[10px] z-10 left-0 bottom-[60px]">タップひとつで家が教室に！</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.online-studios-title {
  padding-top: 32px;
  padding-bottom: 14px;
  background-color: #FF88BB;
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  clip-path: polygon(0 0, 50% 20px, 100% 0, 100% 100%, 0 100%);
}
</style>
