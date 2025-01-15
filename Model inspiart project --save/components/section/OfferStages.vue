<template>
  <div class="pt-[110px] pb-[50px]">
    <div class="w-[335px] mx-auto shadow-[0_5px_20px_#00000042] bg-white rounded-b-[20px]">
      <OrganOfferStages :stages="stages" />
      <OrganNFTMeans />
      <OrganSpecialCourse />
      <OrganUntilNow v-if="id !== 4" />
      <OrganCurriculumEnjoy v-if="id !== 4" />
    </div>
  </div>
</template>

<script setup lang="ts">
const stages = ref();
stages.value = await fetch('/data/offer-stages.json').then(res => res.json());
defineProps<{
  id?: number;
}>();
</script>