<template>
  <div class="bg-white">
    <div v-if="isOpen">
      <img src="/images/nayami.webp" width="375" height="422" alt="guitar" loading="lazy" decoding="async"
        class="w-full h-auto" />
      <h4 class="pt-4 text-center text-sm">
        生徒様のやる気や興味をうまく引き出すには、<br>
        講師の経験やスキルが大変重要です。<br>
        相性のいい講師に出会えるかどうか…
      </h4>
      <img src="/images/arrow-bottom-green.svg" width="36" height="51" alt="guitar" loading="lazy" decoding="async"
        class="mx-auto my-[18px]" />
      <MoleLessonStep />
      <MolePreciousTime />
    </div>
    <h4 v-else class="pt-4 text-center text-sm">
      気に入らないレッスンがあった場合、<br>
      無料で補講ができる<br>
      EYSオリジナルの制度です。
    </h4>
    <div class="pt-[38px] pb-7">
      <AtomOpenCloseBtn @click="isOpen = !isOpen" :open="isOpen" :text="isOpen ? '閉じる' : 'もっと詳しく見る'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
</script>