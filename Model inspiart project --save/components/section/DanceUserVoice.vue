<template>
  <div class="pt-[60px]">
    <AtomSectionTitle en_title="User’s voice" title="喜びの声、続々🎵" />
    <SectionUsersVoice :cards="voices" />
  </div>
</template>
<script lang="ts" setup>
const voices = await(await fetch('/data/voice.json')).json();
</script>