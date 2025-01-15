<template>
  <LazyContentStudioDetailTop
    pc_banner="/images/bigarea-banner-pc.webp"
    sp_banner="/images/bigarea-banner-sp.webp"
    title="東京都渋谷区"
    sub_title="東京都渋谷区の<br>EYS華道&フラワー教室"
  />
  <LazyContentBigAreaArrangement />
  <LazyContentDaikanyamaStudio :open="true" />
  <LazyContentDaikanyamaStudio />
  <LazyCampaignCTA :deadline="new Date()" />
  <LazySectionLastNews />
  <LazySectionTopAbout />
  <LazySectionTopReason />
  <LazyFooterMembers />
  <LazySectionTopChart />
</template>

<script lang="ts" setup>
  useHead({
    title: 'Kado | 東京都渋谷区',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '貴方の思うまま、気軽に自由に楽しめる、大人の華道＆フラワーアレンジメント教室。初心者・まずは無料体験レッスンを！',
      },
    ],
  });
</script>