<template>
    <button class="block w-max bg-white text-[#6688DD] border-2 border-[#6688DD] rounded-full font-bold py-3 px-20 relative mx-auto">
        {{ text }}
        <img src="/images/arrow-bottom-blue.svg" width="19" height="12" alt="" loading="lazy" decoding="async" class="w-[19px] h-[12px] absolute top-1/2 -translate-y-1/2 right-4" :class="open ? 'rotate-180' : ''" />
    </button>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
  open: boolean;
}>();
</script>
