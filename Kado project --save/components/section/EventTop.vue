<script setup lang="ts">
// const questions = ref();
// questions.value = await(await fetch('/data/qa.json')).json();
// const Instruments = ref();
// Instruments.value = await(await fetch('/data/instruments.json')).json();
// const Areas = ref();
// Areas.value = await(await fetch('/data/area.json')).json();
// const musicSchoolInfos = ref();
// musicSchoolInfos.value = await(await fetch('/data/music-school-infos.json')).json();

</script>
<template>
  <section class="pt-[100px]">
    <div
      class="w-full py-[104px] lg:bg-[url('/images/top-title-8.svg')] bg-top bg-no-repeat lg:bg-cover max-lg:py-24 max-lg:bg-[url('/images/top-title-8-sp.svg')] max-lg:bg-contain relative z-10"
    >
      <h2 class="text-[30px] font-bold text-center max-lg:text-xl">
        イベント・スク婚、<br />
        ハナを通じた出会い
      </h2>
    </div>
    <div>
      <!-- イベント/バンド/スク婚。音楽仲間との出会い -->
      <EventPossibilities />
      <!-- <Community /> -->

      <!-- Q&A よくあるご質問 -->
      <!-- <QandA :questions="questions"/> -->

      <!-- まずは無料体験レッスン -->
      <!-- <FreeTrialForm :instruments="Instruments" :areas="Areas"/> -->

      <!-- キャンペーンCTA -->
      <!-- <CampaignCTA :deadline="new Date('2024-05-01')" class="mt-10 lg:mt-[60px]" /> -->

      <!-- 大人の音楽教室情報 -->
      <!-- <MusicSchoolInfo :music-school-infos="musicSchoolInfos" /> -->
    </div>
  </section>
</template>
<style scoped></style>
