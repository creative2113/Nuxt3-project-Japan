<template>
  <div class="bg-black">

    <!-- logo -->
    <div class="pt-8 pb-3 border-b border-b-[#707070]">
      <nuxt-link to="/" aria-label="logo" aria-current="page" class="block w-max mx-auto">
        <img
          src="/images/logo_inspiart.svg"
          alt="logo"
          width="113"
          height="105"
          loading="lazy"
          decoding="async"
          class="w-[113px] h-auto"
        />
      </nuxt-link>
    </div>
    <!-- logo -->

    <!-- nav -->
    <div class="pt-[37px] pb-[28px]">
      <ul class="flex flex-col gap-[30px] justify-center px-5">
        <li v-for="nav, i of navs" :key="i" class="w-full">
          <nuxt-link :href="nav.link" :aria-label="nav.title" aria-current="page" class="text-white text-[13px] font-bold">
            {{ nav.title }}
          </nuxt-link>
          <ul class="flex justify-between flex-wrap mt-3">
            <li v-for="sub, j of nav.subs" :key="j" class="w-[50%]">
              <nuxt-link :href="sub.link" :aria-label="sub.title" aria-current="page" class="text-white text-[12px]">
                {{ sub.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- nav -->

    <!-- sns -->
    <div class="pt-[10px] pb-[30px]">
      <ul class="flex gap-[30px] justify-center">
        <li v-for="sns of snss" :key="sns.name" class="w-10">
          <nuxt-link :href="sns.link" :aria-label="sns.name" aria-current="page">
            <img
              :src="sns.icon"
              width="70"
              height="70"
              :alt="sns.name"
              loading="lazy"
              class="w-full h-auto"
              decoding="async"
            />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- sns -->
  </div>
</template>

<script setup lang="ts">
const navs = [
  {
    title: "Inspiart Z について",
    link: "/",
    subs: [
      {
        title: "コース一覧",
        link: "/",
      },
      {
        title: "講師のご紹介",
        link: "/",
      },
      {
        title: "料金のご案内",
        link: "/",
      },
      {
        title: "はじめての方へ",
        link: "/",
      },
      {
        title: "スタジオ一覧",
        link: "/",
      },
      {
        title: "Q&A",
        link: "/",
      },
    ]
  },
  {
    title: "Inspiart Z を選ぶ理由",
    link: "/",
    subs: [
      {
        title: "無料楽器プレゼント",
        link: "/",
      },
      {
        title: "EYSメソッド",
        link: "/",
      },
      {
        title: "オールフリーと固定性",
        link: "/",
      },
      {
        title: "エンジョイ保証",
        link: "/",
      },
    ]
  },
]

const snss = [
  {
    name: "Facebook",
    icon: "/images/facebook-icon.svg",
    link: "/",
  },
  {
    name: "X",
    icon: "/images/x.svg",
    link: "/",
  },
  {
    name: "Instagram",
    icon: "/images/instagram-icon.webp",
    link: "/",
  },
  {
    name: "Line",
    icon: "/images/Line-icon.svg",
    link: "/",
  },
];
</script>
