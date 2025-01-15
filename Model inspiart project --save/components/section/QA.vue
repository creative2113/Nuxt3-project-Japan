<template>
  <div class="pt-[60px] px-5 pb-[30px]">
    <AtomSectionTitle
      en_title="Q&A"
      title="よくあるご質問"
    />
    <div>
      <MoleQA
        v-for="(item, index) in isViewAll ? qaes : qaes.slice(0, 5)"
        :key="index"
        :title="item.title"
        :answer="item.answer"
        :description="item.description"
        :is-open="item.isOpen"
      />
    </div>
    <AtomOpenCloseBtn @click="isViewAll = !isViewAll" :open="isViewAll" :text="isViewAll ? '閉じる' : '他のQ&Aを見る'" class="mt-[30px]" />
  </div>
</template>

<script setup lang="ts">
const isViewAll = ref(false);
const qaes = ref();
qaes.value = await(await fetch('/data/qa.json')).json();
</script>
