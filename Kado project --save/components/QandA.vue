<script setup lang="ts">
defineProps({
  questions: {
    type: Array as PropType<Array<{
      title: string;
      answer: string;
      description: string;
      isOpen: boolean;
    }>>,
    required: true,
  }
});
</script>
<template>
  <!-- Q&A よくあるご質問 -->
  <div class="pt-[40px] lg:pt-[125px] pb-5 lg:pb-[47px]">
    <h3 class="text-2xl lg:text-[30px] font-bold text-[#444444] text-center tracking-[0.2em]">
      Q&A よくあるご質問
    </h3>

    <div class="mt-[18px] lg:mt-[62px] mx-auto px-3 lg:px-5 max-w-[840px]">
      <ContentQA
        v-for="(item, index) in questions"
        :key="index"
        :title="item.title"
        :answer="item.answer"
        :description="item.description"
        :is-open="item.isOpen"
      />
    </div>

    <nuxt-link href="/qa">
      <SquareButton width="small" class="mt-5">12件全てを表示</SquareButton>
    </nuxt-link>
  </div>
  <!-- /Q&A よくあるご質問 -->
</template>
