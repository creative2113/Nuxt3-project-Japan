<template>
  <section class="top-about">
    <div class="pt-[60px] pb-[30px] mx-auto max-w-[706px] w-full max-lg:pt-[40px] max-lg:pb-[37px]">
      <ItemsMainTitle :opposite="true" color="#F7D6D1">
        <div class="pt-[14px] pb-[17px] max-lg:pt-0 max-lg:pb-0">
          <h4 class="text-center text-[60px] text-[#d87e80] max-lg:text-[45px] futura-pt leading-[60px]">
            ABOUT
          </h4>
          <h2 class="text-center text-[18px] text-[#454545] max-lg:text-[16px]">
            着物も小物ももらえちゃう<br />着付け教室
          </h2>
        </div>
      </ItemsMainTitle>
    </div>
    <div class="max-w-[1000px] w-full mx-auto relative">
      <ItemsContentTitle>
      <div>
        <h3 class="text-[28px] text-[#454545] flex items-center gap-[10px] flex-nowrap whitespace-nowrap">
          全国
          <number-pan :num="68234" />
          人が
        </h3>
        <h5 class="text-[28px] text-[#454545] text-center text-nowrap whitespace-nowrap">
          通う着付け教室です
        </h5>
      </div>
    </ItemsContentTitle>
    </div>
    <div
      class="max-w-[800px] mx-auto flex justify-between flex-wrap items-stretch pt-[43px] pb-[55px] max-lg:pb-0 max-lg:pt-[34px]"
    >
      <ItemsAboutSums />
      <ItemsAboutUsers />
    </div>
  </section>
</template>
