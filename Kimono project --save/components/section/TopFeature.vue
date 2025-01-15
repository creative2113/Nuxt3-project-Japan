<template>
  <section class="top-feature lg:py-[100px] pt-[60px] pb-[50px]">
    <div class="mb-[30px] max-w-[706px] mx-auto max-lg:mb-9">
      <ItemsMainTitle color="#F7D6D1">
        <div class="pt-[14px] pb-[19px]">
          <h4 class="text-[60px] text-[#D87E80] text-center max-lg:text-[45px] futura-pt">
            FEATURE
          </h4>
          <h3 class="text-[18px] text-[#454545] text-center max-lg:text-[16px]">
            なぜ選ばれるのか？
          </h3>
          <h2 class="text-[18px] text-[#454545] text-center max-lg:text-[16px]">
            ON-girl着付け教室の特徴
          </h2>
        </div>
      </ItemsMainTitle>
    </div>

    <ItemsContentTitle>
      <div>
        <h3
          class="text-[28px] text-[#454545] flex items-center gap-[10px] flex-nowrap whitespace-nowrap"
        >
          全国
          <number-pan :num="68234" />
          人に
        </h3>
        <h5
          class="text-[28px] text-[#454545] text-center flex-nowrap whitespace-nowrap"
        >
          支持される理由
        </h5>
      </div>
    </ItemsContentTitle>
    <div class="max-w-[1000px] mx-auto w-full max-lg:w-full max-lg:px-5">
      <div class="max-w-[800px] mt-5 mx-auto">
        <ItemsFeatureContent />
      </div>
    </div>
  </section>
</template>
