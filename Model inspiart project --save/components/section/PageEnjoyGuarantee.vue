<template>
  <div class="pt-[60px]">
    <AtomSectionTitle
      en_title="ENJOY保証"
      title="気に入らないレッスンは<br>無料で補講！"
      sub_title="未経験者に優しいInspiartZでありたいから・・・"
    />
    <OrganLessonFree />
    <OrganPageFreeDetail />
    <OrganNewLessons />
    <OrganNarauno
      :main-article="PopularArticle.mainArticle"
      :sub-article1="PopularArticle.subArticle1"
      :sub-article2="PopularArticle.subArticle2"
      :articles="NaraunoArticle"
      :players="NaraunoPlayer"
    />
  </div>
</template>

<script setup lang="ts">
const PopularArticle = ref();
PopularArticle.value = await(await fetch('/data/na-ra-uno-popular-article.json')).json();
const NaraunoArticle = ref();
NaraunoArticle.value = await(await fetch('/data/na-ra-uno-article.json')).json();
const NaraunoPlayer = ref();
NaraunoPlayer.value = await(await fetch('/data/na-ra-uno-player.json')).json();
</script>
