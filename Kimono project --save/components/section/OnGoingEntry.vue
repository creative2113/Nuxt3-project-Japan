<template>
  <section class="w-full pt-[60px] max-lg:px-5">
    <div class="max-w-[700px] mx-auto w-full">
      <ItemsMainTitle opposite color="#F7D6D1">
        <div class="pt-[14px] pb-[37px] text-center max-lg:pb-[24px]">
          <h2 class="text-[60px] text-[#D87E80] futura-pt max-lg:text-[45px]">ENTRY</h2>
          <h3 class="text-lg max-lg:text-base">応募いただいた作品</h3>
        </div>
      </ItemsMainTitle>
    </div>
    <div class="max-w-[800px] w-full mx-auto">
      <div class="flex justify-center items-end gap-[120px]">
        <img src="/images/thumb-bubble-blue.svg" width="83" height="64" alt="thumb" loading="lazy"
          class="w-[83px] h-auto" />
        <img src="/images/hard-bubble-pink.svg" width="74" height="58" alt="hard" loading="lazy"
          class="w-[74px] h-auto" />
      </div>
      <h4
        class="text-xl text-center flex items-end justify-center gap-5 before:block before:w-[1px] before:h-[23px] before:bg-[#454545] before:origin-bottom before:rotate-[-30deg] after:block after:w-[1px] after:h-[23px] after:bg-[#454545] after:origin-bottom after:rotate-[30deg] max-lg:text-lg">
        今この瞬間も、続々応募中！<br />「いいね」で応援しよう！
      </h4>
      <div
        class="w-full mt-[43px] grid grid-cols-3 gap-x-[25px] gap-y-[30px] max-lg:grid-cols-2 max-lg:gap-x-[15px] max-lg:gap-y-[25px]">
        <ContentOnGoingEntry v-for="entry, i of (more ? oncontest.entries : oncontest.entries.slice(0, 9))" :key="i"
          :points="entry.points" :photo="entry.photo" :avatar="entry.avatar" :name="entry.name" :sns="entry.sns" :sns_icon="entry.sns_icon" />
      </div>
      <ContestButton :direction="more ? 'up' : 'down'" @click="more = !more" class="mt-10">もっと見る</ContestButton>
    </div>
  </section>
</template>
<script lang="ts" setup>
const more = ref(false);
const oncontest: any = await(await fetch("/data/ongoingcontest.json")).json();
</script>