<template>
  <div class="w-full rounded-[20px] relative overflow-hidden mt-[30px]" :style="user.id === 2 ? toCounterShadow : toShadow">
    <img
      :src="user.image"
      width="335"
      height="222"
      :alt="user.title"
      decoding="async"
      loading="lazy"
      class="w-full h-auto"
    />
    <span
      class="absolute z-20 text-[140px] roboto-bold italic top-0"
      :style="toStyle"
      :class="user.id === 2 ? 'right-5' : 'left-0'"
      >{{ user.id }}</span
    >
    <div
      class="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full pt-[31px] pb-[7px] bg-[#FFFFFFE4] z-10"
      :class="
        user.id === 2 ? 'clip-big-recommend' : 'clip-big-recommend-counter'
      "
    >
      <h3 class="text-[12px] roboto-black" :style="{ color: user.color }">
        {{ user.role }}
      </h3>
      <h4 class="text-[18px] font-bold">{{ user.title }}</h4>
      <nuxt-link :to="`#0${user.id}`"
        class="py-[5px] pl-[30px] pr-[15px] rounded-full border-[1.5px] relative font-bold text-[11px] mt-1 bg-white"
        :style="toStyle"
      >
        <span
          class="block absolute left-3.5 top-2 w-1.5 h-1.5 border-b border-r rotate-45"
          :style="toStyle"
        ></span>
        詳しくみる
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  user: {
    id: number;
    role: string;
    title: string;
    image: string;
    color: string;
  };
}>();

const toStyle = computed(() => ({
  color: props.user.color,
  borderColor: props.user.color,
}));

const toShadow = computed(() => ({
  boxShadow: `0 5px 20px #00000040, 10px 10px 0 ${props.user.color}`
}));

const toCounterShadow = computed(() => ({
  boxShadow: `0 5px 20px #00000040, -10px 10px 0 ${props.user.color}`
}))
</script>

<style scoped>
.clip-big-recommend {
  clip-path: polygon(-1% -1%, 101% 40px, 101% 101%, -1% 101%);
}

.clip-big-recommend-counter {
  clip-path: polygon(-1% 40px, 101% -1%, 101% 101%, -1% 101%);
}
</style>
