<script lang="ts" setup>
defineProps({
  desc: {
    type: String as PropType<string>,
  },
})
</script>
<template>
  <div class="py-2 relative flex flex-col items-center gap-1 mx-auto w-max">
    <span class="bg-[#999999] w-[1px] h-full absolute left-1.5 top-0" />
    <span class="bg-[#999999] w-full h-[1px]" />
    <div class="px-3">
      <p class="bg-white w-[149px] border border-[#999999] py-2 px-1 text-xs tracking-normal" v-html="desc" />
    </div>
    <span class="bg-[#999999] w-full h-[1px]" />
    <span class="bg-[#999999] w-[1px] h-full absolute right-1.5 top-0" />
  </div>
</template>