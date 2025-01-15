<template>
  <section>
    <FreeTrialForm :course="course" :areas="areas" />
  </section>
</template>

<script lang="ts" setup>
const course = ref();
course.value = await(await fetch("/data/courses.json")).json();
const areas = ref();
areas.value = await(await fetch("/data/area.json")).json();
</script>
