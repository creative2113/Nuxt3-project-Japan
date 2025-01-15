<template>
  <div
    class="w-full pt-12 pb-8 tracking-widest overflow-hidden relative flex flex-col items-center justify-center max-lg:pt-9 max-lg:pb-6"
  >
    <picture>
      <source
        media="(max-width: 1024px)"
        :srcset="banner_sp"
        type="image/webp"
      />
      <img
        :src="banner_pc"
        width="1920"
        height="200"
        :alt="title"
        class="w-auto h-full max-lg:w-full absolute top-0 left-1/2 -translate-x-1/2 brightness-75 object-cover"
      />
    </picture>
    <h1
      class="text-[50px] font-semibold text-white relative max-lg:order-1 max-lg:text-xl max-lg:-mt-5"
    >
      {{ title }}
    </h1>
    <h2
      class="text-[40px] savoye leading-[54px] text-white relative -mt-2 max-lg:text-[70px] max-lg:leading-normal max-lg:mt-0"
    >
      {{ en_title }}
    </h2>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  en_title: {
    type: String,
    required: true,
  },
  banner_pc: {
    type: String,
    required: true,
  },
  banner_sp: {
    type: String,
    required: true,
  },
});
</script>
