<template>
  <section>
    <div>
      <img src="/images/top-feature-title.svg" alt="feature" width="264" height="261" loading="lazy" decoding="async" class="w-[264px] h-auto mx-auto max-lg:w-[211px]" />
      <div class="text-center text-[30px] font-bold mt-[-140px] max-lg:text-xl max-lg:mt-[-110px]">
        <h2>“EYS華道＆フラワー教室”</h2>
        <h3>8つの特徴</h3>
      </div>
      <p class="text-sm text-center leading-8 mt-4 max-lg:text-xs max-lg:leading-6">より身近に「花」を愉しんでいただくために、<br>“EYS華道＆フラワー教室”では<br class="lg:hidden">様々なサービスをご用意しています。</p>
    </div>
    <div class="w-full py-[90px] bg-[url('/images/top-feature-bg.webp')] bg-center bg-cover">
      <div class="flex justify-between items-start max-w-[800px] w-full mx-auto mt-2 max-lg:flex-col max-lg:items-center max-lg:gap-[30px]">
        <ContentFeatureCard
          v-for="(card, i) in topFeatures.slice(0, 3)"
          :key="i"
          :index="i"
          :image="card.image"
          :rank_num="card.rank_num"
          :to="card.to"
          :title="card.title"
          :description="card.description"
          :flower="card.flower"
        />
      </div>
      <div class="flex justify-between items-start max-w-[1000px] w-full mx-auto mt-[85px] max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:mt-5">
        <ContentFeatureSmall
          v-for="(card, i) in topFeatures.slice(3, 8)"
          :key="i"
          :index="i"
          :image="card.image"
          :rank_num="card.rank_num"
          :to="card.to"
          :title="card.title"
          :flower="card.flower"
          :class="i % 2 == 1 ? 'lg:mt-[30px]' : ''"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const topFeatures : Array<any> = await (await fetch('/data/topfeatures.json')).json();
</script>