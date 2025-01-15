<script lang="ts" setup>
defineProps<{
  to: string
  text: string
  devider?: boolean
}>();
</script>

<template>
  <nuxt-link :to="to" class="nav-link px-[18px] py-[11px] text-white font-bold text-[13px]">{{ text }}</nuxt-link>
  <hr v-if="devider" class="nav-devider w-[1px] h-[15px] bg-[#444444] border-none" />
</template>