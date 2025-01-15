<template>
<!-- ナビゲーション -->
    <div class="pt-10 lg:pt-[60px] pb-14 lg:pb-[29px] bg-black">
      <div class="w-[235px] lg:w-[275px] h-auto mx-auto">
        <img
          src="/images/cover-logo.svg"
          width="275"
          height="70"
          alt="EYS MUSIC SHOOL"
          loading="lazy"
          class="w-full"
          decoding="async"
        />
      </div>

      <nav class="max-w-[800px] mx-auto mt-[67px] lg:mt-[57px]">
        <ul class="flex flex-wrap justify-between">
          <li
            v-for="(group, groupIndex) in navigationGroups"
            :key="groupIndex"
            class="text-white text-xs max-lg:pl-6 lg:text-[15px] tracking-widest font-semibold w-1/2 lg:w-auto"
            :class="groupIndex === 1 ? 'max-lg:hidden':''"
          >
            {{ group.name }}
            <ul class="mt-3 lg:mt-6 pr-5">
              <li
                v-for="(item, itemIndex) in group.items"
                :key="itemIndex"
                class="text-xs lg:text-[13px] font-light leading-loose flex lg:items-center gap-2 lg:[&:not(:first-child)]:mt-[10px] before:hidden lg:before:block before:w-3 before:h-[1px] before:bg-white"
              >
                <a :href="item.link">{{ item.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /ナビゲーション -->
</template>

<script setup lang="ts">
// ナビゲーション
const navigationGroups = ref([
  {
    name: 'ON-girl着付け教室について',
    items: [
      { text: 'トップ', link: '/' },
      { text: '料金/システム', link: '/' },
      { text: 'コース', link: '/' },
      { text: '講師', link: '/' },
      { text: 'アクセス', link: '/' },
      { text: 'クラス紹介', link: '/' },
      { text: '初めての方へ', link: '/' },
    ],
  },
  {
    name: 'ON-girl着付け教室を選ぶ理由',
    items: [
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
      { text: '●●●●●●●●', link: '/' },
    ],
  },
  {
    name: '運営会社',
    items: [
      { text: '会社概要', link: '/' },
      { text: '講師募集', link: '/' },
      { text: 'お問い合わせ', link: '/' },
      { text: 'オウンドメディア', link: '/' },
    ],
  },
]);
</script>