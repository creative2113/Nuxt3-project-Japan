<template>
  <div class="pt-[28px] pb-[30px]">
    <div class="studio-style">
      <img src="/images/studio-style-title.svg" alt="オンライン or リアルスタジオ" loading="lazy" decoding="async" width="355"
        height="73" class="min-w-[355px] h-auto mx-[-10px] drop-shadow-[0px_10px_20px_#00000055]" />
      <h4 class="text-center text-xl font-bold mt-5">
        地方からオンライン参加。<br>
        関東・関西・中京・北海道の<br>
        スタジオで参加。
      </h4>
      <div class="relative w-full mt-6 px-3 pt-20 pb-[60px] flex justify-between">
        <hr class="w-full h-[240px] absolute top-0 left-0 border-2 border-white bg-gradient-to-b from-[#95959550] to-[#FFFFFF01]" >
        <div class="w-[145px] mx-auto relative z-10">
          <img src="/images/vocal-studio-style-1.webp" alt="オンライン" loading="lazy" decoding="async" width="145"
            height="155" class="w-full h-auto rounded-[15px] border-2 border-white" />
          <p
            class="absolute -top-16 left-0 w-[145px] py-5 text-center bg-[url('/images/studio-menu-bg-1.svg')] bg-no-repeat bg-contain bg-center text-[11px] mamelon">
            家の近くにスタジオが<br />
            無いから<br />
            オンライン！
          </p>
          <div
            class="w-[80px] h-[80px] absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#FF88BB] rounded-full flex flex-col justify-center items-center cursor-pointer">
            <img src="/images/studio-online-content.svg" alt="online" loading="lazy" decoding="async" width="32"
              height="31" class="w-[32px] h-auto" />
            <p class="text-center text-xs text-white roboto-bold mt-1">ONLINE</p>
            <hr class="w-2.5 h-2.5 border-b-2 border-r-2 border-white border-t-0 rotate-45" />
          </div>
        </div>
        <div class="w-[145px] mx-auto relative z-10">
          <img src="/images/vocal-studio-style-2.webp" alt="リアルスタジオ" loading="lazy" decoding="async" width="145"
            height="155" class="w-full h-auto rounded-[15px] border-2 border-white" />
          <p
            class="absolute -top-16 left-0 w-[145px] py-5 text-center bg-[url('/images/studio-menu-bg-2.svg')] bg-no-repeat bg-contain bg-center text-[11px] mamelon">
            友達と切磋琢磨<br>
            したいのでスタジオに<br>
            通いたい！
          </p>
          <div
            class="w-[80px] h-[80px] absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#6688DD] rounded-full flex flex-col justify-center items-center cursor-pointer">
            <img src="/images/studio-studio-content.svg" alt="studio" loading="lazy" decoding="async" width="32"
              height="31" class="w-[32px] h-auto" />
            <p class="text-center text-xs text-white roboto-bold mt-1">STUDIO</p>
            <hr class="w-2.5 h-2.5 border-b-2 border-r-2 border-white border-t-0 rotate-45" />
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