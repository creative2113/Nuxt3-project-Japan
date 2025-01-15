<template>
  <div class="pt-6">
    <h4 class="text-center text-[37px] font-bold text-[#FF88BB]">しかも、今なら</h4>
    <div
      class="w-[335px] mx-auto mt-[10px] bg-gradient-to-b from-[#AA99EE] to-[#FE88BB] rounded-[20px] shadow-xl overflow-hidden p-[24px_15px_22px]">
      <h5 class="text-center text-white text-[37px] font-bold">アーティスト力を<br>
        高める</h5>
      <h6 class="text-center flex justify-center items-center gap-2">
        <span class="roboto-bold text-[71px] leading-[0px]">4</span>
        <span class="text-[37px] font-bold">つの無料特典</span>
      </h6>
      <div class="flex flex-col gap-[15px] mt-4">
        <div v-for="gift, i of gifts" :key="i" class="flex font-bold bg-white rounded-[15px] overflow-hidden">
          <div class="bg-black w-[45px] text-center content-center">
            <p class="text-white">特典</p>
            <p class="text-[50px] text-[#FF88BB] italic leading-[40px] roboto-bold">{{ i + 1 }}</p>
          </div>
          <div class="flex justify-center flex-col py-3">
            <div class="flex items-center justify-between w-[260px] px-2">
              <img :src="gift.icon" alt="gift" loading="lazy" decoding="async" />
              <p class="text-[20px] leading-[20px] text-center" v-html="gift.title"></p>
              <p class="text-[#FF88BB] text-[26px]">無料</p>
            </div>
            <div v-if="i === 0" class="px-2">
              <p class="py-[2px] bg-[#FF88BB] rounded-full text-white text-center">YouTuber / TikTokerキャンパス</p>
              <div class="flex mt-1 justify-between">
                <p class="py-[2px] bg-[#FF88BB] rounded-full text-white px-3">作詞作曲講座</p>
                <p class="py-[2px] bg-[#FF88BB] rounded-full text-white px-3">作詞作曲講座</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


defineProps<{
  gifts: {
    icon: string;
    title: string;
  }[];
}>();
</script>