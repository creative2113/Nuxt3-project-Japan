<template>
  <div class="pb-16">
    <MoleSupportItem :item="items[3]" />
  </div>
</template>

<script lang="ts" setup>
const items = ref();
items.value = await fetch('/data/support-items.json').then(res => res.json());
</script>