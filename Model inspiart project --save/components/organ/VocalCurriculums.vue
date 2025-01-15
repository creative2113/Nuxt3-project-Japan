<template>
  <div class="pt-5">
    <h4
      class="w-[201px] h-[112px] ml-[10px] pt-5 text-lg text-center text-white font-bold bg-[url('/images/page-instructors-title.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl">
      17カテゴリー、78の<br>技術を段階別に整理
    </h4>
    <div class="w-[335px] mx-auto drop-shadow-[0_5px_20px_#00000042]">
      <img src="/images/vocal-curriculum-1.webp" alt="curriculum" class="w-[335px] h-[250px] mx-auto -mt-5" />
      <div class="w-full rounded-[20px] bg-white drop-shadow-[0_5px_20px_#00000026] -mt-5 relative z-10 py-6">
        <p class="text-xs px-5">声量、音程、声域、パフォーマンス・・・プロのレベルでは、いずれも弱点は許されません。</p>
        <img src="/images/vocal-curriculum-graph.svg" alt="curriculum" class="w-full h-auto mx-auto mt-3.5" />
        <div v-for="sub, i in subs" :key="i" class="w-full mt-5">
          <h6 v-html="sub.title" :style="{ backgroundColor: sub.color }"
            :class="i % 2 ? ['ml-auto', '-mr-2.5', 'clip-right'] : ['mr-auto', '-ml-2.5', 'clip-left']"
            class="text-xs text-white py-1.5 pl-7 pr-9 font-bold w-max rounded-[5px]"></h6>
          <div class="flex justify-between items-start px-5 mt-[15px]">
            <img :src="sub.image" :alt="sub.title" width="110" height="110"
              class="w-[110px] h-auto rounded-[10px] shadow-md" />
            <p v-html="sub.desc" :class="i % 2 && ['-order-1']" class="text-xs w-[170px] pt-2.5"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const subs = [
  {
    title: "独自メソッドによる科学的な分析",
    image: "/images/vocal-curriculum-item-1.webp",
    desc: "17カテゴリー、78項目の技術を段階的に整理して、独自カリキュラムを構築します。",
    color: "#66DDDD",
  },
  {
    title: "集中トレーニングの実施",
    image: "/images/vocal-curriculum-item-2.webp",
    desc: "特定された弱点を補うために、過去にその弱点克服に効果の高かったトレーニング方法を集中的に実施します。",
    color: "#66DDDD",
  },
]
</script>

<style scoped>
.clip-left {
  clip-path: polygon(0 0, 102% 0, calc(100% - 10px) 100%, 0 100%);
}

.clip-right {
  clip-path: polygon(-2% 0, 100% 0, 100% 100%, 10px 100%);
}
</style>
