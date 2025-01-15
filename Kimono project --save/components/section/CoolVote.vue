<template>
  <section
    class="pt-16 w-full max-lg:max-w-[375px] max-lg:mx-auto max-lg:overflow-hidden"
  >
    <div>
      <ItemsSubTitle>「いいね！」で応援しよう！</ItemsSubTitle>
      <div
        class="w-full flex justify-between max-w-[690px] mx-auto items-start flex-wrap max-lg:gap-6"
      >
        <img
          src="/images/cool-vote-thumb-blue.svg"
          width="83"
          height="64"
          alt="cool"
          loading="lazy"
          class=""
        />
        <h2 class="text-2xl text-center mt-6 max-lg:-order-1">
          私たち、精一杯頑張りました！<br />「いいね」で投票に協力ください！
        </h2>
        <img
          src="/images/cool-vote-thumb-pink.svg"
          width="74"
          height="58"
          alt="cool"
          loading="lazy"
          class=""
        />
      </div>
    </div>
    <div class="max-w-[1000px] w-full mx-auto mt-10">
      <SliderCoolVote :cards="votes" />
    </div>
    <div class="max-w-[1000px] w-full mx-auto -mt-5 max-lg:hidden">
      <SliderCoolVote :cards="votes" />
    </div>
  </section>
</template>
<script lang="ts" setup>
const votes = await(await fetch('/data/coolvotes.json')).json();
</script>