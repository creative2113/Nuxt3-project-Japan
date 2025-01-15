<template>
  <div class="pt-[60px] pb-[40px]">
    <AtomSectionTitle
      en_title="PLAN"
      title="学割 × キャンペーンで<br>気軽にはじめられる"
      sub_title="通常のレッスン料金から最大10%OFF！<br>曜日＆時間帯割引でさらにおトクに。"
    />
    <div class="regular-price">
      <p class="text-[11px] font-bold">通常料金</p>
      <h5 class="text-[30px] roboto-black leading-[37px] mt-4 relative after:block after:w-[120px] after:h-[3px] after:bg-[#666666] after:absolute after:top-4 z-10 after:left-1/2 after:-translate-x-1/2">¥ 7,400</h5>
      <p class="text-[11px] font-bold absolute right-[27px] bottom-5">/ １レッスン</p>
    </div>
    <img src="/images/arrow-blue-bottom.svg" alt="arrow" width="28" height="16" loading="lazy" decoding="async" class="mx-auto my-2" />
    <div class="regular-price bg-gradient-to-r from-[#77BBDD] to-[#6688DD] shadow-lg">
      <p class="text-[11px] font-bold">EYS Junior の学割なら</p>
      <h5 class="text-[40px] roboto-black leading-[37px] mt-4">¥ 4,900</h5>
      <p class="text-[11px] font-bold absolute right-[27px] bottom-5">/ １レッスン</p>
    </div>
    <h6 class="text-[11px] text-center text-[#849DE2] font-bold mt-2">※ 平日・昼の料金になります。</h6>
    <button class="block font-bold mx-auto w-[300px] text-[#6688DD] border-2 border-[#6688DD] rounded-full py-3 mt-[28px]">料金プランについて詳しく</button>
  </div>
</template>

<style scoped>
.regular-price {
  position: relative;
  width: 335px;
  margin-inline: auto;
  background-color: #CCCCCC;
  border-radius: 20px;
  text-align: center;
  color: white;
  padding: 18px 0 13px;
}
</style>
