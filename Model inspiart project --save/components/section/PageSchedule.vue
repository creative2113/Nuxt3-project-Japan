<template>
  <div class="pt-[60px] pb-[40px]">
    <AtomSectionTitle en_title="SCHEDULE" title="忙しくても、通いやすい！" sub_title="オールフリーと固定性、2つの仕組みで、<br>スケジュール調整自由自在！" />
    <OrganScheduleDetail v-if="isOpen" />
    <MoleScheduleMenu v-else />
    <button @click="isOpen = !isOpen"
      class="font-bold mx-auto w-[300px] text-[#6688DD] border-2 border-[#6688DD] rounded-full py-3 mt-[34px] flex items-end justify-center gap-1">
      <span class="font-[system-ui] text-[30px] block leading-[30px]" :class="{ 'rotate-45': isOpen }">+</span>
      <span>{{ isOpen ? '閉じる' : 'スケジュール設定について詳しく' }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
</script>
