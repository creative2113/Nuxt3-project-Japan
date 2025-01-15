<script lang="ts" setup>
defineProps({
  title: {
    type: String as PropType<string>,
  },
  class: {
    type: String as PropType<string>,
  }
})
</script>
<template>
  <div class="py-2 relative flex flex-col items-center gap-1 mx-auto w-max" :class="class">
    <span class="bg-[#E39597] w-[1px] h-full absolute left-1.5 top-0" />
    <span class="bg-[#E39597] w-full h-[1px]" />
    <div class="px-3">
      <h5 class="bg-[#E39597] py-2 px-8 text-white text-lg text-center tracking-normal" v-html="title" />
    </div>
    <span class="bg-[#E39597] w-full h-[1px]" />
    <span class="bg-[#E39597] w-[1px] h-full absolute right-1.5 top-0" />
    <svg height="24" width="30" xmlns="http://www.w3.org/2000/svg" class="absolute left-1/2 -bottom-2.5 -translate-x-1/2">
      <polyline points="0,0 15,24 30,0" style="fill:none;stroke:#E39597;stroke-width:1" />
    </svg>
  </div>
</template>