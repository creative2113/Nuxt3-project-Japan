<template>
  <div class="content-title-slot">
    <div
      class="content-slots w-full relative flex items-end justify-center flex-nowrap gap-[20px] min-w-[1000px]"
    >
      <svg height="10" width="400" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="0"
          x2="400"
          y2="0"
          style="stroke: #e39597; stroke-width: 10"
        />
      </svg>
      <slot />
      <svg height="10" width="400" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="0"
          x2="400"
          y2="0"
          style="stroke: #e39597; stroke-width: 10"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-title-slot {
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  > .content-slots {
    > svg {
      position: relative;
      height: 10px;
      background-color: #e39597;
      display: inline-block;
    }
    > svg:first-of-type {
      left: 0;
      bottom: 57px;
    }
    > svg:last-of-type {
      right: 0;
      bottom: 15px;
    }
  }
}
</style>
