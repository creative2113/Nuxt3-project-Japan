<script lang="ts" setup>
const users = [
  {
    age: 60,
    title: "アクティブシニア世代",
    description:
      "着物で毎日をもっと楽しく。伝統に根ざした心豊かな暮らしを叶えたいあなたへ！",
    face: "/images/aboutuser (2).webp",
  },
  {
    age: 40,
    title: "働き盛りワーキング世代",
    description:
      "ワンランク上の時間を。演劇・観劇など、多様な趣味を着物で楽しみたいあなたへ！",
    face: "/images/aboutuser (4).webp",
  },
  {
    age: 30,
    title: "キャリア世代",
    description:
      "仕事もプライベートも大切に。着物に触れ、伝統文化への造詣を深めたいあなたへ！",
    face: "/images/aboutuser (1).webp",
  },
  {
    age: 20,
    title: "ヤングキャリア世代",
    description:
      "自分磨きの時間を。憧れだった着物を学び、少し大人の世界へ踏み出したいあなたへ！",
    face: "/images/aboutuser (3).webp",
  },
];
</script>
<template>
  <div
    class="max-w-[800px] mx-auto flex justify-between gap-7 items-start mt-2 max-lg:flex-col max-lg:mt-0 max-lg:px-2.5"
  >
    <div
      v-for="(user, i) of users"
      class="w-[192px] relative pt-10 max-lg:flex items-end max-lg:w-full max-lg:border-b border-[#DDDDDD] max-lg:pt-2"
    >
      <img
        src="/images/about-user-path.svg"
        alt="user path"
        loading="lazy"
        class="absolute w-2/3 top-0 left-[10px] max-lg:hidden"
      />
      <img
        :src="user.face"
        :alt="user.title"
        loading="lazy"
        class="block w-[172px] h-[196px] relative max-lg:h-[80px] max-lg:w-[70px]"
      />
      <div>
        <h6 class="absolute text-[#D87E80] top-1 pl-2 mr-2 max-lg:relative max-lg:top-0 inline roboto">
          <b class="text-[26px]">{{ user.age }}</b>
          <span v-if="user.age === 60" class="text-[15px] ml-1">代〜</span>
          <span v-if="user.age === 40" class="text-[15px] ml-1">〜</span>
          <b v-if="user.age === 40" class="text-[26px]">{{ user.age + 10 }}</b>
          <span v-if="user.age !== 60" class="text-[15px] ml-1">代</span>
        </h6>
        <h4 class="text-sm w-full text-center mt-[14px] max-lg:inline max-lg:text-[13px]">{{ user.title }}</h4>
        <p class="text-xs w-full mt-2">
          {{ user.description }}
        </p>
      </div>
    </div>
  </div>
</template>
