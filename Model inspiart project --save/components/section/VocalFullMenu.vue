<template>
  <div class="pt-10 pb-[50px]">
    <div v-for="user in vocal_users.slice(0, 3)" :key="user.id" class="w-[355px] bg-white drop-shadow-[0_5px_20px_#00000040] relative overflow-hidden mt-[30px]" :class="user.id%2 ? ['mr-auto', 'rounded-r-[15px]']:['ml-auto', 'rounded-l-[15px]']">
      <img :src="user.image" alt="banner" width="355" height="240" loading="lazy" decoding="async" class="w-full h-auto" />
      <p class="absolute text-[114px] leading-[137px] roboto-bold italic bottom-[60px]" :class="user.id%2 ? ['left-2']:['right-10']" :style="{ color: user.color }">{{ user.id }}</p>
      <h3 class="absolute text-2xl font-bold px-1.5 py-[5px] leading-[30px] text-white bottom-[52px]" :class="user.id%2 ? ['left-0']:['right-0']" :style="{ backgroundColor: user.color }">{{ user.title }}</h3>
      <h4 class="absolute text-sm font-bold px-2.5 py-1 leading-[18px] bg-black text-white bottom-[18px]" :class="user.id%2 ? ['left-0']:['right-0']">{{ user.sub_title }}</h4>
    </div>
    <div v-for="user in vocal_users.slice(3)" :key="user.id" class="w-[355px] mt-[30px]" :class="user.id%2 ? ['mr-auto']:['ml-auto']">
      <div class="flex items-center gap-4" :class="user.id%2 ? 'justify-end pr-5':'justify-start pl-5'" :style="{ color: user.color }">
        <p class="roboto-bold text-[60px] italic leading-[40px]">{{ user.id }}</p>
        <h4 class="text-xl font-bold" :class="user.id%2 && ['-order-1']">{{ user.title }}</h4>
      </div>
      <div class="flex justify-between bg-white drop-shadow-[0_3px_6px_#00000026] overflow-hidden" :class="user.id%2 ? ['rounded-r-[10px]']:['rounded-l-[10px]']">
        <div class="p-4">
          <h5 class="text-xs font-bold text-[#666666]">{{ user.sub_title }}</h5>
          <p v-html="user.desc" class="font-bold mt-1"></p>
        </div>
        <img :src="user.image" alt="inspiart" loading="lazy" decoding="async" class="w-auto h-[100px]" :class="user.id%2 ? ['-order-1', '-mr-16', 'bannclip-board-1'] : ['-ml-16', 'bannclip-board-2']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const vocal_users = ref<any>(null);
vocal_users.value = await fetch('/data/vocal-recommend-users.json').then(res => res.json());
</script>

<style scoped>
.bannclip-board-1 {
  clip-path: polygon(0 0, 120px 0, 100px 100%, 0 100%);
}

.bannclip-board-2 {
  clip-path: polygon(calc(100% - 120px) 0, 100% 0, 100% 100%, calc(100% - 100px) 100%);
}
</style>