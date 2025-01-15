<template>
  <section>
    <ContentPageTop title="インストラクター" en_title="Instructor" banner_pc="/images/instructor-banner-pc.webp" banner_sp="/images/instructor-banner-sp.webp" />
    <ContentCompatibilityPlannerTop />
    <SatisfactionTopRanking :instructors="instructors" />
  </section>
</template>

<script setup lang="ts">
const instructors: any = await(await fetch("/data/instructors.json")).json();
</script>
