<template>
  <LazySectionInstructorPageTop />
  <LazySectionInstructorPageOffer />
  <LazySectionClassCTA />
  <LazyQandA :questions="questions[0].questions.slice(0, 5)" />
  <LazyCampaignCTA :deadline="new Date()" />
  <LazySectionFreeTrial />
</template>

<script lang="ts" setup>
const questions = ref();
questions.value = await(await fetch('/data/qa.json')).json();
useHead({
  title: "Kado Instructor | インストラクター",
  meta: [
    {
      name: "description",
      content: "インストラクターのページです。",
    },
  ],
});
</script>