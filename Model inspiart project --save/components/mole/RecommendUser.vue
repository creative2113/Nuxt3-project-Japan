<template>
  <div
    class="relative w-[155px] rounded-[20px] overflow-hidden"
    :class="user.id % 2 ? 'mt-5' : ''"
    :style="toShadow"
  >
    <img
      :src="user.image"
      width="155"
      height="170"
      :alt="user.title"
      class="w-full h-auto"
      decoding="async"
    />
    <span
      class="absolute z-20 text-[80px] top-0 right-5 italic roboto-bold"
      :style="toStyle"
      >{{ user.id }}</span
    >
    <div
      class="clip-big-recommend flex flex-col items-center absolute z-10 bottom-0 left-0 w-full pb-[7px] pt-5 bg-[#FFFFFFE4]"
    >
      <h4 class="text-[12px] text-center font-bold" v-html="user.title"></h4>
      <nuxt-link :to="`#0${user.id}`"
        class="py-[5px] pl-[30px] pr-[15px] rounded-full border-[1.5px] relative font-bold text-[10px] mt-1 bg-white"
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
  boxShadow: `0 5px 20px #00000040, 10px 10px 0 ${props.user.color}`,
}));
</script>

<style scoped>
.clip-big-recommend {
  clip-path: polygon(-1% 20px, 101% -1%, 101% 101%, -1% 101%);
}
</style>
