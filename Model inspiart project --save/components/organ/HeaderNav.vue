<template>
  <div class="header-nav flex justify-between items-center bg-black">
    <AtomNavLink v-for="link of links" :key="link.to" :to="link.to" :text="link.text" :devider="link.devider" />
  </div>
</template>

<script lang="ts" setup>
const links = [
    { to: '/', text: 'コース一覧', devider: true },
    { to: '/', text: '受講料金', devider: true },
    { to: '/', text: 'スタジオ', devider: true },
    { to: '/', text: '講師紹介' },
]
</script>