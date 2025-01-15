<template>
  <div class="py-[50px]">
    <img src="/images/support-debut-banner.webp" alt="arrow" width="375" height="257" class="w-full h-auto" />
    <h3 class="text-[#6688DD] text-[20px] text-center font-bold bg-gradient-to-t from-[#F9F9F9] via-[#F9F9F9] to-[#F9F9F901] -mt-11 relative z-10">デビューに向けて、<br>クリエイター活動を最大限に<br>サポート!!</h3>
    <MoleSupportItem v-for="item, i in items" :key="i" :item="item" />
  </div>
</template>

<script lang="ts" setup>
const items = ref();
items.value = await fetch('/data/support-items.json').then(res => res.json());
</script>
