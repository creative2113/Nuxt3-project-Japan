<template>
  <section class="pt-[60px]">
    <h2 class="text-center text-[16px] roboto-black tracking-[0.5em] text-[#6688DD]">REVIEW</h2>
    <div class="mt-[30px] pt-[27px] relative z-10 bg-white">
      <div class="text-center font-bold">
        <h3 class="text-[14px]">ギターコースってどう？</h3>
        <h4 class="text-[28px]">REVIEW</h4>
        <h5 class="text-[14px] mt-1">メンバーの生の声を聞いてみよう！</h5>
      </div>
      <SectionUsersVoice :cards="voices" />
    </div>
  </section>
</template>
<script lang="ts" setup>
const voices = await(await fetch('/data/voice.json')).json();
</script>