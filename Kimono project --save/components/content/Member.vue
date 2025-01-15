<script lang="ts" setup>
defineProps<{
  mem: {
    name: string;
    image: string;
    role: string;
    description: string;
  };
}>();
</script>

<template>
  <div class="w-[200px] flex flex-col items-center justify-center max-lg:w-40">
    <h3 class="text-[16px] text-[#454545] mb-7">{{ mem.name }}</h3>
    <div class="relative">
      <span
        class="absolute inline-block w-[120px] h-[120px] bg-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-10" />
      <img :src="mem.image" :alt="mem.name" loading="lazy" decoding="async" width="200" height="215"
        class="w-[200px] h-auto -mb-2" />
    </div>
    <h5 class="text-[12px] mb-[18px] w-full text-center text-white bg-[#ED91A6] py-[2px] max-lg:text-[11px] relative">
      {{ mem.role }}
    </h5>
    <p class="text-[12px] mb-[14px] text-black max-lg:text-[11px]">{{ mem.description }}</p>
    <button aria-label="member" class="border border-white bg-[#45454580] py-4 px-3 max-lg:hidden">
      <img src="/images/arrow.svg" alt="arrow" loading="lazy" width="16" height="9" />
    </button>
  </div>
</template>
