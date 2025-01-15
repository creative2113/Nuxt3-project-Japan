<template>
  <SectionContestTop />
  <SectionOnGoingDetail />
  <SectionOnGoingEntry />
  <SectionOnGoingResults />
</template>

<script setup lang="ts">
useHead({
  title: "kimono | フォトコンテスト",
  meta: [
    {
      name: "description",
      content: "フォトコンテストでは、フォトをアップロードして、友達とコミュニティにアップロードしたフォトを共有することができます。"
    },
    {
      name: "keywords",
      content: "フォトコンテスト, photo, contest, photo contest, kimono, on-girl"
    }
  ]
});
</script>