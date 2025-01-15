<template>
  <div class="relative w-full">
    <OrganScPageHeader />
    <OrganHeaderNav />
    <MoleLinkRoutes :links="links" />
    <p class="text-center text-white font-semibold text-[10px] py-2 bg-[#888888]">ギター教室・ギターレッスンなら、Inspiart</p>
    <OrganVocalTopSlider />
  </div>
</template>ap
<script lang="ts" setup>
const links = [
  { name: 'Inspiart', path: '/' },
  { name: 'コース一覧', path: '/' },
  { name: 'ギター', path: '/' },
];
</script>