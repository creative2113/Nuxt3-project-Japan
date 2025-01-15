<template>
  <div class="relative w-[335px] mx-auto shadow-[0_5px_20px_#00000040] bg-white py-5 rounded-[20px] mt-[50px]">
    <div class="flex justify-between items-start px-5">
      <h5 v-html="item.title" :style="{ backgroundImage: `url('${item.title_bg}')` }"
        class="w-[140px] h-[143px] pb-3 text-center text-white font-bold content-center -mt-10 -mx-[30px] drop-shadow-lg">
      </h5>
      <p v-html="item.desc" :class="item.id % 2 && ['-order-1']" class="text-xs w-[170px]"></p>
    </div>
    <img v-if="item.banner" :src="item.banner" alt="banner" width="335" height="232"
      class="w-full h-auto border-2 border-white mt-10" />
    <img v-if="item.special_svg" :src="item.special_svg" alt="special" width="315" height="234"
      class="w-[315px] h-auto mx-auto mt-3" />
    <div v-for="sub, i in item.subs" :key="i" class="w-full mt-5">
      <h6 v-html="sub.title" :style="{ backgroundColor: item.color }"
        :class="i % 2 ? ['ml-auto', '-mr-2.5', 'clip-right'] : ['mr-auto', '-ml-2.5', 'clip-left']"
        class="text-xs text-white py-1.5 pl-7 pr-9 font-bold w-max rounded-[5px]"></h6>
      <div class="flex justify-between items-start px-5 mt-[15px]">
        <img :src="sub.image" :alt="sub.title" width="110" height="110"
          class="w-[110px] h-auto rounded-[10px] shadow-md" />
        <p v-html="sub.desc" :class="i % 2 && ['-order-1']" class="text-xs w-[170px] pt-2.5"></p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  item: {
    id: number;
    title: string;
    title_bg: string;
    desc: string;
    color: string;
    banner?: string;
    special_svg?: string;
    subs: {
      title: string;
      image: string;
      desc: string;
    }[];
  };
}>();
</script>

<style scoped>
.clip-left {
  clip-path: polygon(0 0, 102% 0, calc(100% - 10px) 100%, 0 100%);
}

.clip-right {
  clip-path: polygon(-2% 0, 100% 0, 100% 100%, 10px 100%);
}
</style>
