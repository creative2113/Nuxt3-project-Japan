<script lang="ts" setup>
const Instruments = ref();
Instruments.value = await(await fetch('/data/instruments.json')).json();
const Areas = ref();
Areas.value = await(await fetch('/data/area.json')).json();
</script>
<template>
  <!-- まずは無料体験レッスン -->
  <OrganFreeTrialForm :instruments="Instruments" :areas="Areas"/>
</template>