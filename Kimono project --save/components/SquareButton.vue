<script setup lang="ts">
interface ButtonProps {
  width?: 'small' | 'section4' | 'medium' | 'section7' | 'large';
  arrow?: 'up' | 'down';
}

const props = defineProps<ButtonProps>();

const buttonClasses = computed(() => {
  // Define classes as an object with string keys and boolean values
  let classes: Record<string, boolean> = {
    'w-[250px]': props.width === 'small',
    'w-[300px]': props.width === 'section4',
    'w-[312px]': props.width === 'medium',
    'w-[335px]': props.width === 'section7',
    'w-[360px]': props.width === 'large',
  };

  // 矢印の方向に基づいてクラスを追加
  if (props.arrow === 'up') {
    classes['after:rotate-[225deg]'] = true;
  } else if (props.arrow === 'down') {
    classes['after:rotate-[45deg]'] = true;
  }

  return classes;
});
</script>

<template>
  <div class="flex justify-center">
    <button aria-label="square" :class="buttonClasses"
      class="text-[13px] relative py-2.5 px-10 rounded-full shadow-md border border-[#99999955] text-[#222222] after:w-2 after:h-2 after:block after:border-r after:border-b after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2">
      <slot></slot>
    </button>
  </div>
</template>
