<template>
  <section>
    <LazyContentPageTop title="アクセス" en_title="Access" banner_pc="/images/access-page-banner-pc.webp" banner_sp="/images/access-page-banner-sp.webp" />
  </section>
  <LazyContentStudiosSlider class="lg:mt-[88px]" />
  <LazyOnlineAndStudios :regions="regions" />
  <LazySectionAccessPageEasy />
  <LazyCampaignCTA :deadline="new Date()" />
  <LazySectionFreeTrial class="my-[60px]" />
</template>

<script lang="ts" setup>
const questions = ref();
questions.value = await(await fetch('/data/qa.json')).json();
const regions : any = await(await fetch("/data/regions.json")).json();
useHead({
  title: "Kado Access | アクセス",
  meta: [
    {
      name: "description",
      content: "アクセスのページです。",
    },
  ],
});
</script>