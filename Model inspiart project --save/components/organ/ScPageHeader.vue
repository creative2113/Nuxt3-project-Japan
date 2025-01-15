<template>
  <div class="bg-white w-full" :class="isOpen && ['!bg-[#000000]', 'fixed', 'h-full', '!w-[375px]', 'top-0', 'left-1/2', '-translate-x-1/2', 'z-[9999]']">
    <div class="w-full h-[55px] flex justify-between items-center pl-2.5 pr-5">
      <div class="flex items-center gap-[15px]">
        <img :src="isOpen ? '/images/logo-inspiart-small.svg' : '/images/header-logo.svg'" alt="logo" width="139"
          height="30" loading="lazy" decoding="async" class="w-[139px] h-auto" />
        <p class="text-[9px] text-[#999999]" :class="isOpen && ['!text-white']">powered by EYS-STYLE</p>
      </div>
      <button aria-label="open menu" @click="isOpen = !isOpen" class="flex flex-col justify-between w-5 h-[13px]">
        <hr class="border-t-black w-full duration-300" :class="{'!border-t-white origin-[18.5px] -rotate-45': isOpen} " />
        <hr class="border-t-black w-full duration-300" :class="{'!border-t-white origin-[18.5px] rotate-45': isOpen }" />
      </button>
    </div>
    <ul v-if="isOpen" class="bg-[#222222]">
      <li v-for="nav, i in openNavs" :key="i" class="w-full">
        <nuxt-link :href="nav.path" class="block w-full relative">
          <div v-if="nav.type === 'icon_link'" class="flex gap-2.5 items-center h-[50px] w-full bg-black text-white px-5 border-t border-t-[#444444]">
            <img :src="nav.icon" :alt="nav.name" loading="lazy" decoding="async" />
            <p class="text-sm">{{ nav.name }}</p>
            <hr class="border-t border-r border-white w-[9px] h-[9px] rotate-45 absolute right-3 top-1/2 -translate-y-1/2">
          </div>
          <div v-if="nav.type === 'banner_link'" class="p-5 w-full">
            <img :src="nav.banner" :alt="nav.name" :width="335" :height="70" loading="lazy" decoding="async"
              class="w-full h-auto" />
          </div>
          <p v-if="nav.type === 'common_link'" class="text-white text-xs py-3.5 px-5 border-t border-[#707070] after:border-t after:border-r after:border-white after:w-[6px] after:h-[6px] after:rotate-45 after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2" :class="i === openNavs.length - 1 && ['border-b']">{{ nav.name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const isOpen = ref(false);
const openNavs = [
  {
    type: 'icon_link',
    name: 'トップ',
    path: '/',
    icon: '/images/home-link-icon.svg',
  },
  {
    type: 'icon_link',
    name: '料金',
    path: '/',
    icon: '/images/price-link-icon.svg',
  },
  {
    type: 'icon_link',
    name: 'アクセス',
    path: '/',
    icon: '/images/access-link-icon.svg',
  },
  {
    type: 'icon_link',
    name: '講師&プロデューサーのご紹介',
    path: '/',
    icon: '/images/introduce-link-icon.svg',
  },
  {
    type: 'banner_link',
    banner: "/images/nav-banner-1.webp",
    name: 'はじめての方へ',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'イベント',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'ライブ&パフォーマンス',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'コミュニティ',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'Q&A',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'インストラクター募集',
    path: '/',
  },
  {
    type: 'common_link',
    name: 'メディア',
    path: '/',
  },
]
</script>