<template>
  <section class="w-full pt-24 max-lg:pt-20">
    <ItemsContentTitle>
      <div class="text-center text-[28px] whitespace-nowrap">
        <h4 class="text-nowrap">着物＆小物プレゼント</h4>
        <div class="flex items-center gap-2 justify-center">
          <NumberPan :num="68434" />個の衝撃
        </div>
      </div>
    </ItemsContentTitle>
    <div class="text-center pt-8 pb-6 max-lg:pb-9">
      <h3 class="text-[#D87E80] text-[40px] futura-pt max-lg:text-4xl">User’s voice</h3>
      <h5 class="text-[454545] text-[20px] mt-4 max-lg:text-2xl max-lg:pt-4">喜びの声、続々♫<br>“私たち、<br class="lg:hidden">着物一式もらいました”</h5>
    </div>
    <ItemsUsersVoice :cards="voices" />
  </section>
</template>


<script lang="ts" setup>
const voices = await(await fetch('/data/voice.json')).json();
</script>