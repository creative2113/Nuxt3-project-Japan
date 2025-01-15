<script lang="ts" setup>
const props = defineProps<{
  num: number;
}>();
let str: string = `${props.num}`;
</script>
<template>
  <button
    class="px-[3.5px] bg-white shadow-md flex items-center justify-center w-[min-content] self-center gap-[2.6px] text-[#D87E80] text-[24px] rounded roboto">
    <span>{{ str[0] }}</span>
    <span>{{ str[1] }}</span>
    <strong>,</strong>
    <span>{{ str[2] }}</span>
    <span>{{ str[3] }}</span>
    <span>{{ str[4] }}</span>
  </button>
</template>
<style lang="scss" scoped>
button {
  >span {
    padding: 1px 2px 1px 2px;
    line-height: 1;
    border-radius: 3px;
    background-image: linear-gradient(to top,
        #e6e6e6,
        #ffffff,
        #ffffff,
        #ffffff);
    box-shadow: 1px 1px 2px #00000033;
  }

  >strong {
    margin-right: 2px;
  }
}
</style>
