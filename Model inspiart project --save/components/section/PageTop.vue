<template>
  <div class="relative w-full">
    <OrganScPageHeader />
    <OrganHeaderNav />
    <MoleLinkRoutes :links="links" />
    <p class="text-center text-white font-semibold text-[10px] py-2 bg-[#888888]">ギター教室・ギターレッスンなら、Inspiart</p>
    <OrganPageTopMain :banner="banner" :en_title="en_title" :title="title" :sub_title="sub_title" />
    <OrganCircles :bg-from="bgFrom" :bg-to="bgTo" />
  </div>
</template>ap
<script lang="ts" setup>
const links = [
  { name: 'Inspiart', path: '/' },
  { name: 'コース一覧', path: '/' },
  { name: 'ギター', path: '/' },
];

defineProps<{
  banner: string;
  en_title: string;
  title: string;
  sub_title: string;
  bgFrom: string;
  bgTo: string;
}>();
</script>
