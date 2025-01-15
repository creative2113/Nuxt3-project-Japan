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
  <div
    class="mt-5 bg-white shadow-lg pb-[10px] border border-[#EEEEEE]"
    @click="toggleDescription()"
  >
    <h2
      class="text-sm lg:text-lg font-semibold pt-[13px] px-[12px] pb-[5px] lg:p-[14px] w-full flex gap-2 items-center border-b-[1px] border-[#EEEEEE] border-solid -translate-y-[6px] lg:-translate-y-[4px]"
    >
      <span class="text-[#9999EE] text-[16px] lg:text-2xl font-roboto font-bold"
        >Q.</span
      ><span v-html="title"></span>
    </h2>

    <p
      class="text-sm lg:text-lg font-semibold p-[14px] flex gap-2 items-start text-start"
    >
      <span class="text-[#EE88AA] text-xl lg:text-2xl font-roboto font-medium"
        >A.</span
      ><span v-html="answer"></span>
    </p>
    <div v-show="isOpen" class="ml-[28px] px-[14px] pb-[14px]">
      <div
        class="text-xs lg:text-sm font-light text-left"
        v-html="description"
      ></div>
    </div>
    <div v-show="!isOpen" class="ml-[28px] px-[14px] pb-[14px] relative">
      <div
        class="text-xs lg:text-sm font-light text-left overflow-hidden"
        style="max-height: 1.5em"
        v-html="description"
      ></div>
      <div
        class="text-2xs flex justify-center items-center gap-[5px] pb-2 absolute bottom-0 inset-x-0 bg-white before:bg-white-to-transparent-y before:block before:w-full before:h-4 before:absolute before:bottom-full before:inset-x-0"
      >
        もっと見る
        <span
          class="border-r-[1px] border-b-[1px] border-[#017DEB] border-solid h-[6px] w-[6px] rotate-45"
        ></span>
      </div>
    </div>
  </div>
</template>
