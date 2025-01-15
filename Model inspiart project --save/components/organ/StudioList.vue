s<template>
  <div class="w-full pt-[28px] pb-[30px] px-5">
    <h4
      class="bg-[url('/images/studio-list-title.svg')] bg-contain bg-no-repeat drop-shadow-xl w-[233px] h-[104px] pt-[18px] text-center text-white text-[18px] font-semibold relative z-10 ml-auto -mb-5"
    >
      気になるスタジオを<br>
      見てみよう♪
    </h4>
    <MoleStudioList :studios="studios" />
  </div>
</template>

<script setup lang="ts">
const studios = await fetch("/data/studios.json").then((res) => res.json()).catch(() => []);
</script>
