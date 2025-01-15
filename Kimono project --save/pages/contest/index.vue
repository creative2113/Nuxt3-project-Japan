<template>
  <SectionContestCover />
  <SectionContestOnGoing class="lg:-mt-[60px] max-lg:-mt-[100px]" />
  <SectionContestResults />
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