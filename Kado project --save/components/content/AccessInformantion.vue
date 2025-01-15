<script lang="ts" setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="max-w-[1000px] w-full mx-auto bg-[#EEEEEF] lg:pt-5 px-5">
    <h3
      class="text-2xl font-bold tracking-widest text-center py-9 max-lg:text-xl max-lg:pt-4 max-lg:pb-6"
    >
      代官山スタジオへの<br class="lg:hidden" />アクセス
    </h3>
    <hr
      class="lg:hidden w-[30px] h-[1px] bg-[#888888] border-none mx-auto mb-5"
    />
    <div>
      <ContentDetailLocationData />
    </div>
    <div class="mt-[113px] max-lg:mt-[60px]">
      <ContentStudioDetailSpace />
    </div>
    <div class="mt-[115px] max-lg:mt-[56px]">
      <ContentStudioDetialFloorMap />
    </div>
    <div class="mt-[115px] max-lg:mt-[56px] mb-20 max-lg:mb-10">
      <ContentStudioDetailPack />
    </div>
    <div class="pb-10">
      <button
        @click="() => emit('close')"
        class="block w-[300px] mx-auto bg-black text-white font-semibold py-3.5 relative"
      >
        <span>閉じる</span>
        <img
          src="/images/arrow/arrow-down-white.svg"
          alt="arrow"
          loading="lazy"
          width="16"
          height="9"
          class="w-4 h-auto absolute top-[22px] right-4 rotate-180"
        />
      </button>
    </div>
  </div>
</template>
