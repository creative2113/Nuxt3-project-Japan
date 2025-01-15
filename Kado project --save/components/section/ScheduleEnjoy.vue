<template>
  <section class="w-full pt-[60px] pb-[100px] max-lg:pt-[30px] max-lg:pb-[60px]">
    <div
      class="max-w-[800px] mx-auto shadow-xl max-lg:max-w-[355px]"
    >
      <h3 class="text-2xl text-white text-center font-bold w-full bg-[#AAAAFF] py-[18px]">
        <span class="text-[30px] border-b-[5px] border-b-white max-lg:text-base max-lg:border-b-2">ENJOY保証</span>
        で無料補講を実施！
      </h3>
      <div
        class="w-full"
      >
        <picture>
          <source media="(max-width: 1024px)" srcset="/images/schedule-enjoy-banner-sp.webp 1x" type="image/webp">
          <img src="/images/schedule-enjoy-banner-pc.webp" width="800" height="400" alt="present" loading="lazy" decoding="async" class="w-full h-auto brightness-[90%] max-lg:w-[355px] mx-auto" />
        </picture>
      </div>
      <div class="px-6 py-5" :class="showDetails && '!hidden'">
        <SquareButton
          @click="handleClickOpen"
          arrow="down"
          width="small"
        >
          ENJOY保証を詳しく見る
        </SquareButton>
      </div>
      <AssuranceDetail
        :showDetails="showDetails"
        @handle-click-close="handleClickClose"
      />
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
