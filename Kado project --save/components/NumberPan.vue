<script lang="ts" setup>
const props = defineProps<{
  num: number;
}>();
let str: string = `${props.num}`;
</script>
<template>
  <button
    class="p-0.5 bg-white shadow-md inline-block w-[min-content] mx-1 self-center gap-[2.6px] text-[#EE88AA] text-[24px] rounded roboto">
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
  text-wrap: nowrap;
  >span {
    font-weight: 600;
    display: inline-block;
    padding: 3px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    border-radius: 3px;
    background-image: linear-gradient(to top,
        #e6e6e6,
        #ffffff,
        #ffffff,
        #ffffff);
    box-shadow: 1px 1px 2px #00000033;
    margin-inline: 1px;
  }

  >strong {
    margin-right: 2px;
  }
}
</style>
