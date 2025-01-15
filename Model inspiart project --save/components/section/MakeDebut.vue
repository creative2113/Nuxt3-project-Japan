<template>
  <div class="pt-7 px-5">
    <div class="w-full bg-white rounded-t-[20px] drop-shadow-[0_5px_20px_#00000040] relative">
      <div class="w-full relative pb-10 rounded-t-[20px] overflow-hidden">
        <img :src="banner" alt="banner" width="335" height="320" loading="lazy" decoding="async"
          class="w-full h-auto" />
        <h3
          class="text-center text-white text-[20px] mamelon bg-black min-w-[375px] py-1 -rotate-[10deg] absolute bottom-10 left-1/2 -translate-x-1/2">
          {{ title }}
        </h3>
      </div>
      <div class="relative z-10">
        <h4 class="text-center text-[20px] font-bold">プロデビューに必要なのは<br>３つの要素！</h4>
        <img :src="image ? image : '/images/make-debut-elements.webp'" alt="elements" width="336" height="308" class="w-full h-auto mt-3" />
        <h5 class="text-center text-[20px] font-bold mt-6">でも…<br>プロデビューなんて<br>本当にできるの？？</h5>
        <hr class="w-full border-t-white border-t-[35px] border-x-transparent border-x-[168px] absolute top-[100%] left-0 drop-shadow-xl" />
      </div>
      <div class="w-full bg-gradient-to-b from-[#F9F9F9] to-[#DDDDDD] make-debut-clip drop-shadow-[0_5px_20px_#00000040] relative z-[2]">
        <img :src="question_image ? question_image : '/images/make-debut-question.webp'" alt="steps" width="336" height="377" class="w-full h-auto" />
      </div>
      <h3 class="curriculum-learn-title -mt-[72px] relative top-9">
        <span>大丈夫！</span>
        <span>
          <img src="/images/logo-inspiart-small.svg" alt="inspiart" width="185" height="40" loading="lazy"
            decoding="async" class="w-auto h-[40px] inline-block mb-1" />
          なら
        </span>
        <span>できます！</span>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  banner: string;
  image?: string;
  question_image?: string;
}>();
</script>

<style scoped>
.curriculum-learn-title {
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  color: white;
  padding-top: 60px;
  padding-bottom: 70px;
  background-image: url('/images/make-debut-bottom-bg.svg');
}

.curriculum-learn-title>span {
  display: block;
  width: max-content;
  margin-inline: auto;
  border-bottom: solid 5px white;
}

.make-debut-clip {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 35px), 50% 100%, 0 calc(100% - 35px));
}
</style>
