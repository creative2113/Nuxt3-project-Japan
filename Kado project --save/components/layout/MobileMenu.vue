<template>
  <ul>
    <li v-for="item, i of mainMenu" :key="i" class="border-t">
      <nuxt-link :to="item.link" class="relative h-[50px] flex items-center px-5">
        <div class="w-[34px]">
          <img :src="item.icon" :alt="item.label" width="18" height="18" class="w-[18px] h-auto" />
        </div>
        <span class="text-sm">{{ item.label }}</span>
        <span class="absolute w-2 h-2 border-t border-r border-black rotate-45 right-3 top-1/2 -translate-y-1/2" />
      </nuxt-link>
    </li>
    <li class="p-5 bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] border-b border-b-[#22222232]">
      <nuxt-link to="/" class="block">
        <img src="/images/mobile-menu-beginner.webp" alt="footer" width="100%" height="auto" class="w-full h-auto" />
      </nuxt-link>
    </li>
    <li v-for="item, i of others" :key="i" class="border-b border-b-[#22222232]">
      <nuxt-link :to="item.link" class="px-5 py-[13px] text-xs block">{{ item.label }}</nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const mainMenu = [
  { label: 'トップ', link: '/', icon: '/images/mobile-menu-home.svg' },
  { label: 'コース紹介', link: '/courses', icon: '/images/mobile-menu-course.svg' },
  { label: '料金システム', link: '/price', icon: '/images/mobile-menu-price.svg' },
  { label: 'アクセス', link: '/access', icon: '/images/mobile-menu-access.svg' },
  { label: '講師紹介', link: '/instructor', icon: '/images/mobile-menu-instructor.svg' },
]
const others= [
  { label: '個展・グループ展', link: '/'},
  { label: 'ワークショップ', link: '/'},
  { label: 'コミュニティ', link: '/'},
  { label: 'イベント', link: '/'},
  { label: 'スク婚', link: '/'},
  { label: 'Q&A', link: '/qa'},
  { label: '講師募集', link: '/'},
]
</script>