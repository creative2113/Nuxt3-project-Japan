<template>
  <section class="w-full pb-[100px]">
    <ItemsContentTitle>
      <h3 class="text-[28px] text-center text-nowrap">
        ENJOY保証で<br />無料補講を実施！
      </h3>
    </ItemsContentTitle>
    <h4 class="text-lg text-center text-nowrap py-9 mx-auto">
      レッスンに満足できるまで<br />別の講師に変更して<br />無料で補講が受けられます！
    </h4>
    <div class="max-w-[800px] mx-auto relative z-10 shadow-xl max-lg:max-w-[335px] rounded-b-[10px] overflow-hidden">
      <div class="w-full h-[400px] relative rounded-t-[10px] overflow-hidden max-lg:h-[660px]">
        <img src="/images/welcome-enjoy-bg-pc-compressed.webp" width="800" height="400" alt="present" loading="lazy"
          class="w-full h-full brightness-[90%] max-lg:hidden" />
        <img src="/images/welcome-enjoy-bg-sp-compressed.webp" width="335" height="660" alt="present" loading="lazy"
          class="w-full h-full brightness-75 lg:hidden" />
        <span class="absolute w-full top-0 left-0 bg-[#E3959777] z-10 block h-full" />
      </div>
      <div class="px-6 py-5" :class="showDetails && '!hidden'">
        <button aria-label="square" @click="handleClickOpen"
          class="block w-max mx-auto text-[13px] relative py-5 px-[52px] rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r-2 after:border-b-2 after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-5 after:top-1/2 after:-translate-y-1/2">
          ENJOY保証を詳しく見る
        </button>
      </div>
      <ItemsAssuranceDetail :showDetails="showDetails" @handle-click-close="handleClickClose" />
    </div>
  </section>
</template>

<script setup lang="ts">
const showDetails = ref(false);

function handleClickOpen() {
  showDetails.value = true;
}

function handleClickClose() {
  showDetails.value = false;
}
</script>
