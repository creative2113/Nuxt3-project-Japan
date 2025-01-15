<template>
  <div class="top-members pt-[168px] pb-[30px] bg-[#F2CDCE] relative max-lg:pt-[113px] max-lg:pb-[58px]">
    <div class="w-[458px] mx-auto flex justify-between items-end max-lg:w-full">
      <span class="inline-block w-10 h-0.5 bg-[#707070] origin-right rotate-[60deg]"></span>
      <h2 class="text-[#222222] text-[20px] text-center max-lg:text-[18px]">
        圧倒的な支持を獲得してきた<br />
        <span class="text-[#e2838f]">ON-girlの仕掛け人</span>を紹介します
      </h2>
      <span class="inline-block w-10 h-0.5 bg-[#707070] origin-left rotate-[-60deg]"></span>
    </div>
    <div class="max-w-[1000px] mx-auto w-full relative max-lg:px-5">
      <SliderTopMembers />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-members {
  background-image: url("/images/members-bg-pc.webp");
  background-repeat: no-repeat;
  background-size: auto 117%;
  background-position: top;

  @media screen and (max-width: 1024px) {
    background-image: url("/images/members-sp-bg.webp");
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    border-left: solid transparent 400px;
    border-right: solid transparent 400px;
    border-top: solid #F1F1F1 120px;
    transform: translateX(-50%);

    @media screen and (max-width: 1024px) {
      border-left: solid transparent 300px;
      border-right: solid transparent 300px;
      border-top: solid #F1F1F1 80px;
    }
  }
}
</style>
