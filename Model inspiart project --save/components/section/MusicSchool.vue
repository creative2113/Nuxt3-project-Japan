<template>
  <div>
    <OrganMusicSchoolInfo :music-school-infos="musicSchoolInfos" />
  </div>
</template>

<script setup lang="ts">
const musicSchoolInfos = ref();
musicSchoolInfos.value = await(await fetch('/data/music-school-infos.json')).json();
</script>