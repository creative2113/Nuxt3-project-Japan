<template>
    <MusicSchoolInfo :music-school-infos="musicSchoolInfos" />
</template>
<script lang="ts" setup>
const musicSchoolInfos = ref();
musicSchoolInfos.value = await(await fetch('/data/music-school-infos.json')).json();
</script>