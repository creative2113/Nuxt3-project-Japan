<template>
  <section class="w-full py-[30px]">
    <div class="w-[400px] flex items-center gap-3 mx-auto bg-[#88DDBB] border border-white py-4 px-[18px] shadow-md max-lg:hidden">
      <img src="/images/top-chart-title-mark.svg" alt="table" loading="lazy" decoding="async" width="46" height="50" class="w-[46px] h-auto" />
      <div>
        <h2 class="text-[13px] font-bold">「華道＆アレンジフラワー初心者」からの支持率</h2>
        <div class="flex items-center gap-1.5">
          <img src="/images/top-chart-title-no.svg" alt="table" loading="lazy" decoding="async" width="82" height="34" class="w-[82px] h-auto" />
          <h3 class="text-2xl text-white font-bold tracking-tighter">華道＆フラワー教室</h3>
        </div>
      </div>
    </div>
    <p class="text-center mt-1.5 text-[8px] max-lg:hidden">※株式会社マーケティングアソシエイツ(2018年11月)調べ</p>
    <div class="pt-[60px] max-lg:pt-0">
      <img src="/images/top-chart-title.svg" alt="table" loading="lazy" decoding="async" width="265" height="121"
        class="w-[265px] h-auto drop-shadow-lg mx-auto relative z-10 max-lg:w-[246px]" />
      <picture>
        <source media="(max-width: 1024px)" srcset="/images/top-chart-sp.webp 1x" type="image/webp">
        <img src="/images/top-chart-pc.webp" alt="table" loading="lazy" decoding="async" width="800" height="1004"
        class="w-[800px] h-auto drop-shadow-lg mx-auto mt-[-54px] max-lg:drop-shadow-none max-lg:mt-[-68px]" />
      </picture>
    </div>
    <div
      class="max-w-[800px] mx-auto flex justify-between gap-7 items-start mt-8 px-2.5 max-lg:flex-col max-lg:mt-0">
      <div v-for="(user, i) of users"
        class="w-[172px] relative pt-10 max-lg:flex items-end max-lg:w-full max-lg:border-b border-[#DDDDDD] max-lg:pt-2">
        <img src="/images/about-user-path.svg" alt="user path" loading="lazy" decoding="async"
          class="absolute w-2/3 top-0 left-0 max-lg:hidden" />
        <img :src="user.face" :alt="user.title" loading="lazy" decoding="async"
          class="block w-[172px] h-[196px] relative max-lg:h-[80px] max-lg:w-[70px]" />
        <div>
          <h6 v-if="user.age === 60" class="absolute text-[#6096E0] top-1 pl-2 mr-2 max-lg:relative max-lg:top-0 inline roboto">
            <b class="text-[26px]">{{ user.age }}</b><span class="text-[15px] ml-1">代〜</span>
          </h6>
          <h6 v-if="user.age === 40" class="absolute text-[#3AB5ED] top-1 pl-2 mr-2 max-lg:relative max-lg:top-0 inline roboto">
            <b class="text-[26px]">40</b><span class="text-[15px] ml-1">〜</span>
            <b class="text-[26px]">50</b><span class="text-[15px] ml-1">代</span>
          </h6>
          <h6 v-if="user.age === 30" class="absolute text-[#33C7C7] top-1 pl-2 mr-2 max-lg:relative max-lg:top-0 inline roboto">
            <b class="text-[26px]">{{ user.age }}</b><span class="text-[15px] ml-1">代</span>
          </h6>
          <h6 v-if="user.age === 20" class="absolute text-[#5DD066] top-1 pl-2 mr-2 max-lg:relative max-lg:top-0 inline roboto">
            <b class="text-[26px]">{{ user.age }}</b><span class="text-[15px] ml-1">代</span>
          </h6>
          <h4 class="text-sm w-full text-center mt-[14px] max-lg:inline max-lg:text-[13px] font-bold">{{ user.title }}</h4>
          <p class="text-xs w-full mt-2 font-medium">
            {{ user.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const users = [
  {
    age: 60,
    title: "アクティブシニア世代",
    description:
      "プライベート時間に余裕ができ、これからもますます輝きある生活を送りたい方に！",
    face: "/images/top-sum-user-1.webp",
  },
  {
    age: 40,
    title: "働き盛りワーキング世代",
    description:
      "仕事もプライベートも充実、ワークライフバランスを重視の方に！",
    face: "/images/top-sum-user-2.webp",
  },
  {
    age: 30,
    title: "キャリア世代",
    description:
      "仕事もプライベートもしっかり楽しむ。生活にメリハリを求める方に！",
    face: "/images/top-sum-user-3.webp",
  },
  {
    age: 20,
    title: "ヤングキャリア世代",
    description:
      "仕事にも慣れ、自分磨きの時間も取れそう。貴重な空き時間に趣味を見つけたい方に！",
    face: "/images/top-sum-user-4.webp",
  },
];
</script>