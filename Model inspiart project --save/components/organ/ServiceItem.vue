<script lang="ts" setup>
defineProps<{
  item: {
    title: string;
    index: string;
    text: string;
    description: string;
    image: string;
  };
}>();
</script>
<template>
  <div class="w-full mt-[16px]" :class="item.index === '2' ? 'pl-[20px]' : 'pr-[20px]'">
    <div class="text-white px-[20px] flex justify-between items-end">
      <h3 v-html="item.title" class="text-[20px] font-bold tracking-[-0.1em]" :class="{ 'order-1': item.index === '2' }"></h3>
      <span class="text-[60px] roboto-bold italic leading-[40px]">{{ item.index }}</span>
    </div>
    <div class="flex bg-white justify-between items-center shadow-lg rounded-[10px]">
      <img
        :src="item.image"
        :alt="item.title"
        width="120"
        height="100"
        loading="lazy"
        decoding="async"
        class="w-[120px] h-auto"
        :class="{ 'order-1': item.index === '2' }"
      />
      <div class="px-[20px] ml-[-40px]" :class="{ '!ml-0': item.index === '2' }">
        <h4 v-html="item.text" class="text-[12px] font-bold text-[#666666]"></h4>
        <h5 v-html="item.description" class="text-[14px] font-bold mt-[6px]"></h5>
      </div>
    </div>
  </div>
</template>
