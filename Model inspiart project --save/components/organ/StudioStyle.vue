<template>
  <div class="pt-[28px] pb-[30px]">
    <div class="studio-style">
      <img
        src="/images/studio-style-title.svg"
        alt="オンライン or リアルスタジオ"
        loading="lazy"
        decoding="async"
        width="355"
        height="73"
        class="min-w-[355px] h-auto mx-[-10px] drop-shadow-[0px_10px_20px_#00000055]"
      />
      <h4 class="text-center text-xl font-bold mt-5">
        どちらのコースでも、<br />しっかりレッスン！
      </h4>
      <div class="relative w-full mt-6 px-5 py-10">
        <div
          class="flex justify-between flex-col w-full h-full absolute top-0 left-0 rounded-b-[20px] overflow-hidden border-2 border-white"
        >
          <hr
            class="border-none w-full h-[180px] bg-gradient-to-b from-[#FF88BB55] to-[#FFFFFF55]"
          />
          <hr
            class="border-none w-full h-[180px] bg-gradient-to-t from-[#6688DD55] to-[#FFFFFF55]"
          />
        </div>
        <div class="w-[295px] mx-auto relative">
          <img
            src="/images/studio-style-image-1.webp"
            alt="オンライン"
            loading="lazy"
            decoding="async"
            width="295"
            height="223"
            class="w-full h-auto rounded-[15px]"
          />
          <p class="absolute top-3 -right-3 w-[160px] py-5 text-center bg-[url('/images/studio-menu-bg-1.svg')] bg-contain bg-center text-xs mamelon">
            家の近くにスタジオが<br />
            無いから<br />
            オンライン！
          </p>
          <div class="w-[104px] h-[104px] absolute -bottom-[15px] -left-[10px] bg-[#FF88BB] rounded-full flex flex-col justify-center items-center">
            <img src="/images/studio-online-content.svg" alt="online" loading="lazy" decoding="async" width="50" height="48" class="w-[50px] h-auto" />
            <p class="text-center text-white roboto-bold">ONLINE</p>
          </div>
        </div>
        <div class="w-[295px] mx-auto mt-[45px] relative">
          <img
            src="/images/studio-style-image-2.webp"
            alt="リアルスタジオ"
            loading="lazy"
            decoding="async"
            width="295"
            height="223"
            class="w-full h-auto rounded-[15px]"
          />
          <p class="absolute top-3 -left-3 w-[160px] py-5 text-center bg-[url('/images/studio-menu-bg-2.svg')] bg-contain bg-center text-xs mamelon">
            友達と切磋琢磨<br>
            したいのでスタジオに<br>
            通いたい！
          </p>
          <div class="w-[104px] h-[104px] absolute -bottom-[15px] -right-[10px] bg-[#6688DD] rounded-full flex flex-col justify-center items-center">
            <img src="/images/studio-studio-content.svg" alt="studio" loading="lazy" decoding="async" width="50" height="48" class="w-[50px] h-auto" />
            <p class="text-center text-white roboto-bold">STUDIO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.studio-style {
  position: relative;
  width: 335px;
  margin-inline: auto;
  background-color: white;
  box-shadow: 0 5px 20px #00000033;
  padding-top: 18px;
  border-radius: 20px;
}
</style>
