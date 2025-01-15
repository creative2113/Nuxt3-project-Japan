<template>
  <div class="max-w-[800px] w-full mx-auto">
    <div class="mt-[30px] grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-[30px]">
      <ContentContestResult v-for="result, i of num === 0 ? results : results.slice(0, num)" :key="i" :result="result" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  num: number;
}>();
const results = await(await fetch('/data/contestresults.json')).json();
</script>