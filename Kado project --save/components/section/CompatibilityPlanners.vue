<template>
  <section class="pb-[5px] lg:pb-7.5">
    <ContentCompatibilityPlannerTop />
    <SatisfactionIndexRanking :instructors="instructors" />
  </section>
</template>

<script setup lang="ts">
const instructors: any = await(await fetch("/data/instructors.json")).json();
</script>
