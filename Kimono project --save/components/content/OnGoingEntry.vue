<script lang="ts" setup>
defineProps<{
  points: number;
  photo: string;
  avatar: string;
  name: string;
  sns: string;
  sns_icon: string;
}>();
</script>

<template>
  <div class="w-[250x] max-lg:w-[160px]">
    <div
      class="w-[100px] h-[100px] rounded-full p-[7px] bg-[#DDDDDDAA] relative mx-auto -mb-[50px] max-lg:w-[60px] max-lg:h-[60px] max-lg:-mb-[30px] max-lg:p-1">
      <div class="w-full h-full flex flex-col justify-center items-center bg-[#EEB0B0] rounded-full">
        <span class="text-[30px] roboto font-bold text-white leading-8 italic max-lg:text-xl max-lg:leading-5">{{
          points }}</span>
        <hr class="w-12 border-t border-t-white max-lg:w-7" />
        <p class="text-[10px] text-center mt-1 max-lg:text-[7px] max-lg:mt-0.5 max-lg:leading-[9px]">応援<br />ポイント
        </p>
      </div>
    </div>
    <div class="w-full bg-white rounded-[7px] overflow-hidden shadow-md">
      <img :src="photo" width="250" height="250" alt="contest" loading="lazy" class="w-full h-auto" />
      <div class="flex items-center gap-3 p-[10px_10px_20px_10px] max-lg:p-[5px]">
        <div class="relative w-[60px] h-[60px] max-lg:w-10 max-lg:h-10">
          <img :src="avatar" width="60" height="60" :alt="name" loading="lazy"
            class="w-full h-auto rounded-full border-white border-2 shadow-md max-lg:border" />
          <img :src="sns_icon" width="30" height="30" :alt="sns" loading="lazy"
            class="w-[30px] h-auto absolute -bottom-2.5 -right-2.5 max-lg:w-[15px] max-lg:bottom-0 max-lg:-right-[7px]" />
        </div>
        <p class="text-xs max-lg:text-[9px]">＠{{ name }}さん</p>
      </div>
    </div>
  </div>
</template>