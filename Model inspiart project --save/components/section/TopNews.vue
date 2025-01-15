<script lang="ts" setup>
const news = ref();
news.value = await (await fetch('/data/news.json')).json();
</script>
<template>
    <OrganNews :cards="news"/>
</template>