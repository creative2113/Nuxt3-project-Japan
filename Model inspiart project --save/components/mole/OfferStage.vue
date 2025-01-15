<template>
    <div class="flex flex-col relative">
      <h4 v-html="stage.title" :class="{ '!absolute top-[-82px] right-[-10px]': stage.id === 0, '!ml-[-10px] !mr-auto': stage.id === 1 }"
        class="ml-auto mr-[-10px] bg-contain bg-no-repeat bg-center drop-shadow-[0_5px_20px_#00000026] text-center text-white font-bold pt-[18px] -mb-5 z-10 relative"
        :style="{ backgroundImage: `url('${stage.title_bg}')`, width: `${stage.title_w}px`, height: `${stage.title_h}px` }"></h4>
      <div v-for="content, j of stage.contents">
        <img :src="content.banner" :alt="content.title">
        <p v-html="content.title"
          class="min-w-[355px] h-[80px] mx-[-10px] text-center text-[15px] font-bold bg-white rounded-[10px] shadow-lg content-center">
        </p>
      </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  stage:{
    id: number;
    title: string;
    title_bg: string;
    title_w: number;
    title_h: number;
    contents: {
      banner: string;
      title: string;
    }[];
  }
}>();
</script>
