<template>
  <section class="w-full pt-[60px] max-lg:px-5 max-lg:pt-5">
    <div class="w-full max-w-[800px] mx-auto">
      <div class="w-full">
        <ItemsMainTitle opposite color="#F7D6D1">
          <div class="pt-[14px] pb-[37px] text-center max-lg:-mx-5">
            <h2 class="text-[60px] text-[#D87E80] futura-pt max-lg:text-[45px]">ON GOING</h2>
            <h3 class="text-lg max-lg:text-base">開催中のコンテスト</h3>
          </div>
        </ItemsMainTitle>
      </div>
      <ContentOnGoingContestDetail :contest="contest" />
    </div>
  </section>
</template>
<script lang="ts" setup>
const contest : any = await (await fetch("/data/ongoingcontest.json")).json() || {};
</script>