<script setup lang="ts">
import { type PropType } from "vue";

const props = defineProps({
  questions: {
    type: Array as PropType<
      Array<{
        title: string;
        answer: string;
        description: string;
        isOpen: boolean;
      }>
    >,
    required: true,
  },
});
const toggleDescription = (index: number) => {
  props.questions[index].isOpen = !props.questions[index].isOpen;
};
</script>
<template>
  <section class="pt-11 pb-[60px] bg-white">
    <h4
      class="text-center futura-pt text-[45px] text-[#D87E80] pb-4 relative after:block after:w-6 after:h-[3px] after:bg-[#D87E80] after:mx-auto">
      FAQ
    </h4>
    <h3 class="text-base tracking-wider lg:tracking-normal relative text-center">
      よくあるご質問
    </h3>

    <div class="mt-0 lg:mt-12 mx-auto px-5 max-w-[1040px] translate-y-1 lg:translate-y-0">
      <div v-for="(item, index) in questions" :key="index"
        class="mt-5 bg-white shadow-lg rounded-[10px] border border-[#EEEEEE]" @click="toggleDescription(index)">
        <div class="accordion-header flex justify-between items-center pt-0 lg:py-1">
          <div>
            <h2
              class="text-sm lg:text-lg font-semibold pt-[10px] pl-[10px] pr-[10px] pb-[6px] lg:p-[14px] flex gap-2 items-start border-b-[1px] border-[#EEEEEE] border-solid">
              <span class="text-[#7799FF] text-xl lg:text-2xl font-roboto font-bold">Q.</span>{{ item.title }}
            </h2>
            <p
              class="text-sm lg:text-lg font-semibold pt-[6px] pl-[12px] pr-[10px] pb-[8px] lg:p-[14px] flex gap-2 items-start">
              <span class="text-[#FC89CB] text-xl lg:text-2xl font-roboto font-medium">A.</span>{{ item.answer }}
            </p>
          </div>
        </div>
        <div v-show="item.isOpen" class="ml-[28px] px-[14px] pb-[14px]">
          <div class="text-xs lg:text-sm font-light text-left">
            {{ item.description }}
          </div>
        </div>
        <div v-show="!item.isOpen" class="ml-[28px] px-[14px] pb-[25px] relative">
          <div class="text-xs lg:text-sm font-light text-left overflow-hidden" style="max-height: 1.5em">
            {{ item.description }}
          </div>
          <div
            class="text-2xs flex justify-center items-center gap-[5px] pb-2 absolute bottom-0 inset-x-0 -translate-x-4 lg:translate-x-0 -translate-y-2 lg:translate-y-0 bg-white before:bg-white-to-transparent-y before:block before:w-full before:h-4 before:absolute before:bottom-full before:inset-x-0">
            もっと見る
            <span class="border-r-[1px] border-b-[1px] border-[#D87E80] border-solid h-[6px] w-[6px] rotate-45"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-10 text-center">
      <button aria-label="もっと見る"
        class="text-[13px] relative py-4 px-20 rounded-full shadow-md border border-[#999999] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-b after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2">
        ＋12件をすべて表示
      </button>
    </div>
  </section>
</template>

<style scoped></style>
