<template>
  <div class="w-[380px] p-5 rounded-[7px] shadow-md bg-white max-lg:w-[335px] max-lg:pb-[30px]">
    <div class="w-full text-center">
      <div class="w-full flex justify-between items-center">
        <hr class="w-[120px] border-t-[5px] border-t-[#E39597] max-lg:w-[90px]">
        <h4 class="text-2xl text-[#D87E80]">THEME</h4>
        <hr class="w-[120px] border-t-[5px] border-t-[#E39597] max-lg:w-[90px]">
      </div>
      <h5 class="text-[28px] mt-2">{{ result.title }}</h5>
      <hr class="w-full border-t-[5px] border-t-[#E39597] mt-5" />
      <p class="text-[15px] futura-pt mt-3.5 tracking-[0.25em]">{{ from }} >>> {{ to }}</p>
    </div>
    <div class="flex justify-center items-end mt-1 gap-[15px] max-lg:gap-[10px] max-lg:-mx-[5px]">
      <div v-for="photo, i of result.ranking_photos" :key="i" class="text-center"
        :class="photo.ranking === 2 && '-order-1'">
        <span class="block w-full text-[40px] text-[#D87E80] futura-pt -mb-7 relative">{{ photo.ranking }}</span>
        <img :src="photo.photo" alt="contest result" :width="130"
          :height="130" loading="lazy" decoding="async" class="rounded-[7px]" :class="photo.ranking === 1 ? 'w-[130px] h-[130px] max-lg:w-[120px] max-lg:h-[120px]' : 'w-[90px] h-[90px] max-lg:w-[80px] max-lg:h-[80px]'" />
      </div>
    </div>
    <ContestButton :link="'/contest/'+result.id" class="mt-5 max-lg:mt-[30px]">コンテスト結果を見る</ContestButton>
  </div>
</template>
<script setup lang="ts">
interface RankingPhoto {
  ranking: number;
  photo: string;
}

interface ContestResult {
  id: number;
  title: string;
  from: string;
  to: string;
  ranking_photos: RankingPhoto[];
}

const props = defineProps<{
  result: ContestResult;
}>();

const from = ref("");
const to = ref("");

onMounted(() => {
  from.value = (new Date(props.result.from).getMonth() + 1) + "." + new Date(props.result.from).getDate() + " " + getDayName(new Date(props.result.from));
  to.value = (new Date(props.result.to).getMonth() + 1) + "." + new Date(props.result.to).getDate() + " " + getDayName(new Date(props.result.to)) ;
})
</script>