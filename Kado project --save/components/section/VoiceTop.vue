<template>
  <section class="pt-[100px]">
    <div
      class="w-full py-[104px] lg:bg-[url('/images/top-title-2.svg')] bg-top bg-no-repeat lg:bg-cover max-lg:py-24 max-lg:bg-[url('/images/top-title-2-sp.svg')] max-lg:bg-contain relative z-10"
    >
      <h2 class="text-[30px] font-bold text-center max-lg:text-xl">
        入会いただいた方に、<br />
        華道道具一式を<br class="lg:hidden" />無料プレゼント！
      </h2>
    </div>
    <div
      class="w-full lg:bg-[url('/images/voice-top-bg-pc.webp')] bg-center bg-cover bg-no-repeat -mt-[100px] pt-[177px] max-lg:pt-24"
    >
      <div class="flex flex-wrap w-[480px] relative mx-auto gap-2.5 max-lg:w-[330px]">
        <img
          src="/images/voice-top-flower.webp"
          alt="voice flower"
          width="267"
          height="228"
          loading="lazy"
          decoding="async"
          class="absolute w-[267px] h-auto -top-24 left-11 max-lg:w-[160px] max-lg:-top-14 max-lg:left-[75px]"
        />
        <div
          v-for="(item, i) of topPhotoes"
          :key="i"
          class="relative"
          :class="
            i === 0
              ? 'top-11 max-lg:top-5'
              : i === 2
                ? 'ml-auto'
                : i === 3
                  ? 'bottom-11 max-lg:bottom-5'
                  : ''
          "
        >
          <p
            class="w-max mx-auto text-base text-white absolute py-3 px-6 bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] rounded-full top-[-22px] left-1/2 -translate-x-1/2 z-10 tracking-tighter -mb-6 max-lg:text-[10px] max-lg:py-[5px] max-lg:px-4 max-lg:-top-5"
          >
            {{ item.title }}
          </p>
          <img
            :src="item.photo"
            alt="voice"
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
            class="w-[200px] h-auto shadow-lg max-lg:w-[150px]"
          />
        </div>
      </div>
      <div class="max-w-[800px] w-full mx-auto bg-[#AAAAFF] py-7 pl-[30px] mt-16 relative top_triangle max-lg:mt-9 max-lg:px-5 max-lg:pt-[22px] max-lg:pb-8">
        <h3 class="text-2xl text-white font-bold w-max border-b-[5px] border-b-white max-lg:text-base max-lg:w-full max-lg:text-center">すぐにレッスン開始できて、便利＆安心！</h3>
        <p class="text-sm text-white font-bold leading-[30px] mt-7 max-lg:text-xs max-lg:leading-[18px] max-lg:w-[200px]">
          最初に道具を揃えるのは、何を買えば良いかわからないし、出費も多くなります。<br>
          EYS華道＆フラワー教室では、必要なものを一式プレゼントするので、<br class="max-lg:hidden">
          初心者・未経験者も、すぐにレッスンを開始できます。
        </p>
        <img src="/images/voice-top-bottom-photo.webp" alt="voice" width="177" height="240" loading="lazy" decoding="async" class="w-[177px] h-auto absolute bottom-0 right-5 max-lg:w-[126px]" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const topPhotoes = [
  {
    title: "フローリストはさみ",
    photo: "/images/voice-top-photo-1.webp",
  },
  {
    title: "花袋",
    photo: "/images/voice-top-photo-2.webp",
  },
  {
    title: "剣⼭付き花器",
    photo: "/images/voice-top-photo-3.webp",
  },
  {
    title: "花瓶",
    photo: "/images/voice-top-photo-4.webp",
  },
];
</script>

<style lang="scss" scoped>
.top_triangle {
  &::before {
    content: "";
    display: block;
    border-inline: solid 20px transparent;
    border-bottom: solid 35px #aaaaff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
  }
}
</style>
