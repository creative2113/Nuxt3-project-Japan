<template>
  <div class="relative bg-white rounded-[10px] overflow-hidden shadow-[0_5px_20px_#00000040]">
    <div v-for="(studio, i) in studios" :key="i">
      <h5 class="py-[10px] px-5 bg-[#6688DD] text-white text-[15px] font-bold w-full">{{ studio.title }}</h5>
      <div class="grid grid-cols-2">
        <div v-for="(list, j) in studio.list" :key="j"
          class="flex justify-between items-center pr-[5px] border-b border-b-[#DDDDDD] border-r border-r-[#DDDDDD]">
          <img :src="list.image" alt="studio" width="60" height="60" loading="lazy" decoding="async"
            class="w-[60px] h-auto" />
          <div>
            <h3 class="text-[11px] font-bold leading-[14px]">{{ list.title }}</h3>
            <p class="text-[10px] mt-2 w-[90px] text-wrap leading-[14px]">{{ list.position }}</p>
          </div>
          <nuxt-link :to="list.link">
            <span class="block w-[7px] h-[7px] border-t border-r rotate-45 border-[#222222]"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  studios: {
    title: string;
    list: {
      title: string;
      position: string;
      image: string;
      link: string;
    }[];
  }[];
}>();
</script>