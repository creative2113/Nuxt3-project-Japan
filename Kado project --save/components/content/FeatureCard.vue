<template>
  <div class="w-60 max-lg:w-[315px] relative">
    <img
      class="absolute w-40 h-auto"
      :class="
        index === 0
          ? '-left-16 -top-[53px]'
          : index === 1
            ? '-right-10 -bottom-14'
            : '-right-14 -top-[53px] max-lg:top-auto max-lg:right-auto max-lg:-bottom-4 max-lg:-left-[30px]'
      "
      :src="flower"
      alt="feature"
      width="160"
      height="auto"
      loading="lazy"
      decoding="async"
    />
    <div class="bg-white w-full drop-shadow-lg relative">
      <img
        class="w-auto h-[65px] absolute -top-9 -left-4 z-10 max-lg:left-2.5 max-lg:-top-5"
        :src="rank_num"
        alt="feature"
        width="auto"
        height="65"
        loading="lazy"
        decoding="async"
      />
      <img
        class="w-full h-auto object-cover [clip-path:polygon(0px_0px,0px_100%,100%_83%,100%_0px)]"
        :src="image"
        alt="feature"
        width="240"
        height="180"
        loading="lazy"
        decoding="async"
      />
      <div class="p-3">
        <h4 v-html="title" class="text-lg font-bold text-center" />
        <p v-html="description" class="text-[13px] mt-5 mb-3 max-lg:hidden" />
        <nuxt-link
          :to="to"
          aria-label="詳しく見る"
          class="block w-full bg-black text-center text-sm text-white relative py-3 arrow max-lg:w-10 max-lg:h-10 max-lg:absolute max-lg:bottom-24 max-lg:right-6"
          ><span class="max-lg:hidden">詳しく見る</span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FeatureTopCardProps {
  rank_num: string;
  to: string;
  index: number;
  image: string;
  flower: string;
  title: string;
  description: string;
}

const props = defineProps<FeatureTopCardProps>();
</script>

<style lang="scss" scoped>
.arrow {
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 15px;
    width: 12px;
    height: 12px;
    border-top: solid 1px white;
    border-right: solid 1px white;
    transform: rotateZ(135deg);
  }
}
</style>
