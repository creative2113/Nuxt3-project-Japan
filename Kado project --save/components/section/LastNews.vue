<script lang="ts" setup>
const news = ref();
news.value = await (await fetch('/data/news.json')).json();
</script>
<template>
    <ContentNews :cards="news"/>
</template>