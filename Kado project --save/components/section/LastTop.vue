<template>
  <section class="pt-[100px] overflow-auto">
    <div
      class="w-full pt-[90px] pb-9 lg:bg-[url('/images/top-title-last.svg')] bg-top bg-no-repeat lg:bg-cover max-lg:bg-[url('/images/top-title-last-sp.svg')] max-lg:bg-contain relative z-10"
    >
      <h2
        class="text-[30px] font-bold text-center tracking-[0.1em] max-lg:text-xl"
      >
        初めての<br />華道&アレンジフラワー<br />体験レッスンのご紹介
      </h2>
      <p class="text-sm text-center leading-[30px] tracking-widest mt-3 max-lg:text-xs max-lg:leading-6">
        ちょっと不安がある気持ち・・<br />超入門コースの先生が<br class="lg:hidden" />誠心誠意サポートします。
      </p>
    </div>
    <div class="max-w-[800px] w-full mx-auto">
      <ContentLastTrial />
      <ContentNarauno
        :main-article="PopularArticle.mainArticle"
        :sub-article1="PopularArticle.subArticle1"
        :sub-article2="PopularArticle.subArticle2"
        :articles="NaraunoArticle"
        :players="NaraunoPlayer"
      />
      <QandA :questions="questions[0].questions.slice(0, 5)" />
    </div>
  </section>
</template>
<script lang="ts" setup>
const PopularArticle = ref();
PopularArticle.value = await(
  await fetch("/data/na-ra-uno-popular-article.json")
).json();
const NaraunoArticle = ref();
NaraunoArticle.value = await(
  await fetch("/data/na-ra-uno-article.json")
).json();
const NaraunoPlayer = ref();
NaraunoPlayer.value = await(await fetch("/data/na-ra-uno-player.json")).json();
const questions = ref();
questions.value = await(await fetch('/data/qa.json')).json();
</script>
