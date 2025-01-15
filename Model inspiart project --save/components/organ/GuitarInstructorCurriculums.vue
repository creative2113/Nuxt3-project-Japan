<template>
  <div class="pt-[10px]">
    <div class="grid grid-cols-2 grid-rows-4 gap-[10px] w-[334px] mx-auto">
      <div v-for="{ en_title, title, image } in curriculums" :key="en_title"
        class="w-[162px] rounded-[20px] overflow-hidden shadow-[0_2px_6px_#00000040] border-[5px] border-white relative"
        :class="(en_title === 'Electric' || en_title === 'Acoustic') && ['row-span-2']">
        <img :src="image" width="152" height="auto" :alt="en_title" loading="lazy" decoding="async"
          class="w-full h-auto" />
        <div
          class="w-full h-full absolute top-0 left-0 bg-[#00000033] flex justify-center items-center flex-col text-center text-white">
          <h5 v-html="en_title" class="roboto-black text-xs"></h5>
          <h5 v-html="title" class="font-bold leading-5"></h5>
        </div>
      </div>
    </div>
    <div class="px-5 pt-10">
      <h4
        class="bg-[url('/images/guitar-instructor-curriculum.svg')] bg-no-repeat bg-center bg-contain w-[283px] h-[133px] pt-5 drop-shadow-lg text-lg text-center text-white font-bold">
        各ジャンルごとの特徴は？<br>
        自分に合うジャンルを<br>
        自由に選ぼう！
      </h4>
      <div class="w-full drop-shadow-[0_5px_20px_#00000040] pt-[5px]">
        <div class="grid grid-cols-12">
          <button @click="activeTap = 0" class="col-span-4 h-10 text-xs rounded-t-[20px]" :class="activeTap === 0 && ['bg-white']">アコースティック</button>
          <button @click="activeTap = 1" class="col-span-2 h-10 text-xs rounded-t-[20px]" :class="activeTap === 1 && ['bg-white']">エレキ</button>
          <button @click="activeTap = 2" class="col-span-3 h-10 text-xs rounded-t-[20px]" :class="activeTap === 2 && ['bg-white']">クラシック</button>
          <button @click="activeTap = 3" class="col-span-3 h-10 text-[10px] rounded-t-[20px]" :class="activeTap === 3 && ['bg-white']">ジャズ<br>ボサノヴァ</button>
        </div>
        <div class="bg-white p-[10px] rounded-[20px]" :class="{'rounded-tl-none' : activeTap === 0, 'rounded-tr-none' : activeTap === 3}">
          <img src="/images/0194_original.webp" alt="" width="315" height="244" class="w-full h-auto rounded-[17px]" />
          <div class="flex items-center justify-center gap-6 pt-3 pb-[8px]">
            <hr class="w-[20px] border-t-[#FC88A7] rotate-[60deg]">
            <h5 class="text-[#FC88A7] text-sm font-bold">こんな人にオススメ！</h5>
            <hr class="w-[20px] border-t-[#FC88A7] -rotate-[60deg]">
          </div>
          <div class="flex gap-[10px] items-center rounded-[15px] border border-[#DDDDDD] overflow-hidden">
            <div class="w-[78px] h-[70px] pt-[8px] pl-5 bg-gradient-to-r from-[#88DD77] to-[#55CCAA]">
              <img src="/images/acouctic-icon-1.svg" alt="" width="45" height="40" class="w-[45px] h-auto" />
            </div>
            <p class="text-[13px]">ギター一本で、渋くブルースや<br>自分の好きな曲を弾いてみたい方</p>
          </div>
          <div class="flex gap-[10px] items-center rounded-[15px] border border-[#DDDDDD] overflow-hidden mt-[10px]">
            <div class="w-[78px] h-[70px] pt-[8px] pl-5 bg-gradient-to-r from-[#66DDDD] to-[#77BBDD]">
              <img src="/images/acouctic-icon-1.svg" alt="" width="45" height="40" class="w-[45px] h-auto" />
            </div>
            <p class="text-[13px]">うまくなったら、<br>弾き語りもやってみたい方</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeTap = ref(0);
const curriculums = [
  {
    en_title: "Electric",
    title: "エレキ<br>ギター",
    image: "/images/not-instructor-img-1.webp"
  },
  {
    en_title: "Jazz",
    title: "ジャズ<br>ギター",
    image: "/images/not-instructor-img-2.webp"
  },
  {
    en_title: "Classic",
    title: "クラシック<br>ギター",
    image: "/images/not-instructor-img-3.webp"
  },
  {
    en_title: "Flamenco",
    title: "フラメンコ<br>ギター",
    image: "/images/not-instructor-img-4.webp"
  },
  {
    en_title: "Acoustic",
    title: "アコースティック<br>ギター",
    image: "/images/not-instructor-img-5.webp"
  },
  {
    en_title: "Bossanova",
    title: "ボサノバ<br>ギター",
    image: "/images/not-instructor-img-6.webp"
  },
];
</script>
