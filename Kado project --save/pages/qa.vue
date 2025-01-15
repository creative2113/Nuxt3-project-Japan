<template>
  <LazySectionQaPageTop />
  <LazyCampaignCTA :deadline="new Date()" />
  <LazySectionFreeTrial class="pt-[95px] pb-[113px] max-lg:pt-0 max-lg:pb-[50px]" />
</template>

<script lang="ts" setup>
useHead({
  title: "Kado Q&A | よくあるご質問",
  meta: [
    {
      name: "description",
      content: "よくあるご質問のページです。",
    },
  ],
});
</script>