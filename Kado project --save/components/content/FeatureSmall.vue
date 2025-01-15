<template>
  <div class="w-[178px] max-lg:w-[315px] relative">
    <img
      class="absolute w-[120px] h-auto max-lg:w-20"
      :class="
        index === 0
          ? '-left-[58px] -bottom-[51px] max-lg:left-auto max-lg:-bottom-[30px] max-lg:-right-[30px]'
          : index === 1
            ? '-right-3 -bottom-10 max-lg:right-auto max-lg:-left-5'
            : index === 2
              ? '-right-7 -top-[40px] max-lg:top-auto max-lg:-bottom-5'
              : index === 3
                ? '-bottom-[50px] -right-[34px] max-lg:right-auto max-lg:-bottom-8 max-lg:rotate-180 max-lg:-left-[30px]'
                : '-top-9 -right-9 max-lg:top-auto max-lg:-right-4 max-lg:-bottom-5'
      "
      :src="flower"
      alt="feature"
      width="120"
      height="auto"
      loading="lazy"
      decoding="async"
    />
    <div class="bg-white drop-shadow-lg relative max-lg:flex max-lg:items-center max-lg:justify-between max-lg:pl-[15px]">
      <img
        class="w-auto h-[50px] absolute -top-8 left-0.5 max-lg:relative max-lg:top-0 max-lg:left-0 z-10"
        :src="rank_num"
        alt="feature"
        width="auto"
        height="50"
        loading="lazy"
        decoding="async"
      />
      <img
        class="w-full h-auto object-cover [clip-path:polygon(0px_0px,0px_100%,100%_70%,100%_0px)] max-lg:w-24 max-lg:h-20 max-lg:[clip-path:polygon(0px_0px,40%_100%,100%_100%,100%_0px)] max-lg:order-1"
        :src="image"
        alt="feature"
        width="178"
        height="130"
        loading="lazy"
        decoding="async"
      />
      <div class="p-2.5">
        <h4
          v-html="title"
          class="text-sm font-bold text-center mt-2.5 mb-3.5 max-lg:my-0 max-lg:-mr-4"
        />
        <nuxt-link :to="to" class="block w-full bg-black text-center text-[13px] text-white py-2 arrow max-lg:hidden">
          詳しく見る
        </nuxt-link>
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
}

const props = defineProps<FeatureTopCardProps>();
</script>
<style lang="scss" scoped>
.arrow {
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 9px;
    height: 9px;
    border-top: solid 1px white;
    border-right: solid 1px white;
    transform: rotateZ(135deg);
  }
}
</style>