<template>
  <div class="absolute w-full h-full top-0 left-0 bg-[#454545CC] z-50 pt-10 px-5">
    <h6
      class="bg-white rounded-full py-3 px-[60px] text-center text-[#D87E80] w-max mx-auto relative after:border-x-8 after:border-x-transparent after:border-t-[16px] after:border-t-white after:absolute after:right-8 after:-bottom-2">
      まずは無料体験レッスン！</h6>
    <h4 class="mt-4 text-[80px] gallatone text-[#D87E80] text-center">Free Trial</h4>
    <h6 class="mt-3.5 text-base text-white text-center max-lg:mt-0">無料体験レッスンお申し込み</h6>
    <hr class="w-6 border-t-[3px] border-[#D87E80] mt-7 mx-auto">
    <p class="text-center text-base text-white mt-7">ご希望の受講方法を<br>お選びください</p>
    <div class="flex items-center justify-center mt-7 gap-10 max-lg:gap-[15px]">
      <div @click="state = true"
        class="flex justify-center rounded-[10px] border border-[#CCCCCC] bg-white overflow-hidden max-lg:flex-col max-lg:w-40 relative">
        <picture class="w-[190px] h-auto max-lg:w-full max-lg:h-[118px]">
          <source
            media="(max-width: 1023px)"
            srcset="/images/freetrial-local-sp.webp"
            type="image/avif"
          />
          <img
            src="/images/freetrial-local.webp"
            width="190"
            height="98"
            alt="freetrial"
            loading="lazy"
          />
        </picture>
        <p class="text-center text-[#222222] w-[172px] content-center max-lg:w-full py-2.5 relative z-10"
          :class="state ? '!text-white' : ''">教室に来校して<br>レッスン</p>
        <span v-if="state"
          class="absolute top-0 left-0 block pl-16 pt-5 w-full h-full bg-[#EEB0B0C0] before:block before:h-9 before:w-14 before:bg-transparent before:border-l-8 before:border-b-8 before:border-white before:-rotate-45 max-lg:pl-14 max-lg:pt-8" />
      </div>
      <div @click="state = false"
        class="flex justify-center rounded-[10px] border border-[#CCCCCC] bg-white overflow-hidden max-lg:flex-col max-lg:w-40 relative">
        <picture class="w-[190px] h-auto max-lg:w-full max-lg:h-[118px]">
          <source
            media="(max-width: 1023px)"
            srcset="/images/freetrial-online-sp.webp"
            type="image/webp"
          />
          <img
            src="/images/freetrial-online.webp"
            width="190"
            height="98"
            alt="freetrial"
            loading="lazy"
          />
        </picture>
        <p class="text-center text-[#222222] w-[172px] content-center max-lg:w-full py-2.5 relative z-10"
          :class="!state ? '!text-white' : ''">教室に来校して<br>レッスン</p>
        <span v-if="!state"
          class="absolute top-0 left-0 block pl-16 pt-5 w-full h-full bg-[#EEB0B0C0] before:block before:h-9 before:w-14 before:bg-transparent before:border-l-8 before:border-b-8 before:border-white before:-rotate-45 max-lg:pl-14 max-lg:pt-8" />
      </div>
    </div>
    <button @click="emit('toggleCover')" class="block w-max mx-auto mt-[30px] px-32 pt-[23px] pb-[18px] rounded-full bg-white text-sm">次へ</button>
  </div>
</template>

<script lang="ts" setup>
const state = ref(true);
const emit = defineEmits(['toggleCover']);
</script>