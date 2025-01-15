<template>
  <section>
    <LazyContentPageTop title="料金とシステム" en_title="Price & System" banner_pc="/images/price-page-banner-pc.webp" banner_sp="/images/price-page-banner-sp.webp" />
    <LazyContentScheduleStyle class="mt-10" />
    <LazySectionScheduleChange />
    <LazySectionClassCTA class="mt-[60px]" />
    <LazyQandA :questions="questions[0].questions.slice(0, 5)" />
    <LazyCampaignCTA :deadline="new Date()" />
    <LazySectionFreeTrial class="mt-[95px] pb-[113px] max-lg:mt-0 max-lg:pb-[50px]" />
    <LazySectionMultiCTA :deadline="new Date()" />
    <LazySectionLastMusicSchool />
  </section>
</template>

<script lang="ts" setup>
const questions = ref();
questions.value = await(await fetch('/data/qa.json')).json();
useHead({
  title: "Kado Price & System | よくあるご質問",
  meta: [
    {
      name: "description",
      content: "こちらは価格とサービスのページです。",
    },
  ],
});
</script>