<template>
  <div class="flex justify-between items-start px-5 mb-[30px] max-lg:flex-col max-lg:px-0">
    <ContentMainRankedUser v-for="(user, i) of rankingUsers.slice(0, 3)" :key="i" :ranking="i + 1" :user="user" />
  </div>
  <img src="/images/ranking-divider.svg" alt="devider" width="800" height="20" loading="lazy"
    class="w-full h-auto max-lg:hidden" />
  <div class="flex justify-between items-start px-[30px] max-lg:flex-col max-lg:px-0">
    <ContentRankedUser v-for="(user, i) of rankingUsers.slice(3, 5)" :key="i" :ranking="i + 4" :user="user" />
  </div>
  <img src="/images/ranking-divider.svg" alt="devider" width="800" height="20" loading="lazy"
    class="w-full h-auto max-lg:hidden" />
  <div class="flex justify-between items-start px-[30px] max-lg:flex-col max-lg:px-0">
    <ContentRankedUser v-for="(user, i) of rankingUsers.slice(5, 7)" :key="i" :ranking="i + 6" :user="user" />
  </div>
</template>

<script lang="ts" setup>
const rankingUsers = await(await fetch('/data/rankingusers.json')).json();
</script>
