<script setup lang="ts">
const questions = ref();
questions.value = await(await fetch("/data/qa.json")).json();
</script>

<template>
  <ItemsQA :questions="questions" />
</template>
