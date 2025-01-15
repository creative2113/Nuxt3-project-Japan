<template>
  <section>
    <div class="text-center pt-[60px] pb-6 max-lg:pb-9 max-lg:pt-10">
      <img src="/images/voice-user-title.svg" alt="user voice" width="320" height="53" loading="lazy" decoding="async" class="w-[320px] h-auto mx-auto max-lg:w-[192px]">
      <h3 class="hidden">User’s voice</h3>
      <h4 class="text-[454545] text-[30px] font-bold mt-7 max-lg:text-2xl max-lg:mt-4">喜びの声、続々♫<br>“私たち、<br class="lg:hidden">着物一式もらいました”</h4>
    </div>
    <UsersVoice :cards="voices" />
  </section>
</template>
<script lang="ts" setup>
const voices = await(await fetch('/data/voice.json')).json();
</script>