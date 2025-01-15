<template>
  <div class="w-full flex justify-center items-end gap-6">
    <span class="inline-block w-6 h-[1px] bg-[#454545] origin-right rotate-[60deg]"></span>
    <h4 class="text-[#454545] text-[20px] text-center max-lg:text-[18px]">
      <slot />
    </h4>
    <span class="inline-block w-6 h-[1px] bg-[#454545] origin-left rotate-[-60deg]"></span>
  </div>
</template>