<template>
  <section class="w-full px-5 pb-5">
    <ContentOnGoingContest :title="title" :from="from" :to="to" :prizes="prizes" />
  </section>
</template>
<script lang="ts" setup>
const ongoingcontest = await(await fetch('/data/ongoingcontest.json')).json();
const title = ongoingcontest.title;
const from : string = new Date(ongoingcontest.from).getMonth() + 1 + "." + new Date(ongoingcontest.from).getDate() + " " + getDayName(new Date(ongoingcontest.from));
const to : string = new Date(ongoingcontest.to).getMonth() + 1 + "." + new Date(ongoingcontest.to).getDate() + " " + getDayName(new Date(ongoingcontest.to));
const prizes = ongoingcontest.prizes.slice(0, 3).map((prize: any) => prize.image)
</script>
