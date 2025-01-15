<script setup lang="ts">
const emit = defineEmits(["open"]);

const props = defineProps<{
  title: string;
  answer: string;
  description: string;
  isOpen: boolean;
}>();

const isOpen = ref(props.isOpen);

const toggleDescription = () => {
  isOpen.value = !isOpen.value;
  emit("open", props.isOpen);
};
</script>
<template>
  <div class="mt-5 bg-white shadow-lg pb-[10px] border border-[#EEEEEE] relative" @click="toggleDescription()">
    <h2
      class="text-sm font-semibold pt-[13px] px-[12px] pb-[5px] w-full flex gap-2 items-start border-b-[1px] border-[#EEEEEE] border-solid -translate-y-[6px]">
      <span class="text-[#AA99EE] text-xl roboto-bold">Q.</span>
      <span v-html="title" class="pt-[5px]"></span>
    </h2>
    <p class="text-sm font-semibold p-[14px] flex gap-2 items-start text-start">
      <span class="text-[#FF88BB] text-xl roboto-bold">A.</span>
      <span v-html="answer" class="pt-[5px]"></span>
    </p>
    <div v-show="isOpen" class="ml-[28px] px-[14px] pb-[14px]">
      <div class="text-xs font-light text-left" v-html="description"></div>
    </div>
    <div v-show="!isOpen" class="ml-[28px] px-[14px] pb-[14px] relative">
      <div class="text-xs font-light text-left overflow-hidden" style="max-height: 1.5em" v-html="description"></div>
    </div>
    <button v-show="!isOpen"
      class="w-full text-[10px] flex justify-center items-center gap-[5px] absolute bottom-4 left-0 pt-3 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF01] cursor-pointer">
      もっと見る
      <span class="border-r-[1px] border-b-[1px] border-[#C3A5E2] border-solid h-[6px] w-[6px] rotate-45"></span>
    </button>
  </div>
</template>
