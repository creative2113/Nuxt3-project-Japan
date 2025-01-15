<template>
  <h1 class="hidden">{{ id }}</h1>
  <LazyContentStudioDetailTop
    pc_banner="/images/studio-detail-banner-1.webp"
    sp_banner="/images/studio-detail-banner-1-sp.webp"
    title="代官山スタジオ"
    sub_title="代官山にふさわしい洗練された空間"
    description="ヨーロッパの街並みのようなエントランスロビーや、<br class='max-lg:hidden' />北欧製の照明やインテリア、安らぎを与える観葉植物、ほのかに香るアロマなど、<br class='max-lg:hidden' />細部にまでこだわった温もりのある空間で、<br class='max-lg:hidden' />「お花を楽しむ大人たち」をもてなします。"
  />
  <ContentStudioDetailLocation />
  <LazyCampaignCTA :deadline="new Date()" />
  <LazySectionLastNews />
  <LazySectionTopAbout />
  <LazySectionTopReason />
  <LazyFooterMembers />
  <LazySectionTopChart />
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;
useHead({
  title: 'Kado | Sduio ' + id,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '貴方の思うまま、気軽に自由に楽しめる、大人の華道＆フラワーアレンジメント教室。初心者・まずは無料体験レッスンを！',
    },
  ],
});
</script>
