<template>
  <section class="pt-[100px] max-lg:pt-[78px]">
    <div class="max-w-[800px] w-full mx-auto">
      <img
        width="162"
        height="63"
        src="/images/event-married-title.svg"
        alt="campaign"
        class="w-[162px] h-[63px] block mx-auto"
      />
      <div
        class="w-full text-center mt-4 flex gap-9 items-end justify-center before:block before:w-0.5 before:h-12 before:bg-[#222222] before:origin-bottom before:-rotate-[20deg] after:block after:w-0.5 after:h-12 after:bg-[#222222] after:origin-bottom after:rotate-[20deg] max-lg:before:hidden max-lg:after:hidden max-lg:mt-7"
      >
        <h3 class="text-xl">
          スクールで恋して結婚する<br />EYSが提案する新しい出会いの方程式
        </h3>
      </div>
      <img
        src="/images/event-married-date-compressed.webp"
        alt="event date"
        width="800"
        height="350"
        loading="lazy"
        class="w-full h-auto mt-7 max-lg:mt-9"
      />
      <div class="w-[720px] mx-auto -mt-12 relative bg-white shadow-md max-lg:w-full max-lg:mt-0 py-5 max-lg:pb-0">
        <img
          src="/images/event-married-node.svg"
          alt="event married"
          width="234"
          height="112"
          loading="lazy"
          class="w-[234px] h-auto mx-auto -mt-[75px] drop-shadow-lg max-lg:w-[190px]"
        />
        <div class="flex px-[30px] justify-between max-lg:px-5">
          <div v-for="item, i of small_images" class="w-[200px] pb-5 max-lg:w-[100px] relative" :class="i===1? '' : 'max-lg bottom-2'">
            <img
              :src="item.image"
              alt="event date"
              width="200"
              height="140"
              loading="lazy"
              class="w-full h-auto shadow-md rounded-[10px]"
            />
            <p class="text-sm text-center mt-3 font-semibold max-lg:mt-1.5 max-lg:text-xs">{{ item.title }}</p>
          </div>
        </div>
        <h4 class="text-center w-max mx-auto py-3 bg-[#47D59C] rounded-full text-xl font-semibold px-[117px] text-white max-lg:rounded-none max-lg:w-full max-lg:px-0 max-lg:text-lg">
          他にも企画目白押し！
        </h4>
        <img
          src="/images/event-married-1.webp"
          alt="event date"
          width="92"
          height="91"
          loading="lazy"
          class="absolute w-[92px] h-auto bottom-0 left-36 max-lg:left-0 max-lg:w-[76px]"
        />
        <img
          src="/images/event-married-2.webp"
          alt="event date"
          width="106"
          height="91"
          loading="lazy"
          class="absolute w-[106px] h-auto bottom-0 right-36 max-lg:right-0 max-lg:w-[78px]"
        />
      </div>
      <div class="pt-[68px] text-center max-lg:pt-[30px]">
        <SquareButton width="large" arrow="down" class="max-lg:w-[300px] mx-auto">
        スク婚ページへ
        </SquareButton>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const small_images = [
  {
    title: "料理合コン",
    image: "/images/event-date-1.webp",
  },
  {
    title: "ゴルフ合コン",
    image: "/images/event-date-2.webp",
  },
  {
    title: "歌合コン",
    image: "/images/event-date-3.webp",
  },
]
</script>