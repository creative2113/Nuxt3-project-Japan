<template>
  <header class="w-full shadow-md max-lg:w-[375px] max-lg:overflow-hidden max-lg:mx-auto relative z-40">
    <LayoutWebHeader />
    <LayoutHeaderMenu title="EYSワインスクール" logo="/images/logo.svg"
      pcCopy="着物も小物も無料プレゼントしちゃう着付け教室。<br/>レッスンはリアルでもオンラインでもお好みで。" spCopy="自宅オンラインでも、<br/>リアルスタジオでも。" :pcMenu="pcMenu"
      :spMenu="spMenu">
      <img src="/images/tel-btn.svg" decoding="async" loading="lazy" alt="tel" width="158" height="58" />
      <nuxt-link to="/apply"
        class="w-max rounded-full text-white bg-[#E39597] text-center shadow-md py-1 px-[34px] max-lg:py-1 max-lg:px-10">
        <p class="text-[11px] max-lg:text-[11px] text-nowrap leading-3">無料体験レッスン</p>
        <p class="text-[14px] max-lg:text-[14px] text-nowrap">お申込みフォーム</p>
      </nuxt-link>
    </LayoutHeaderMenu>
  </header>
</template>

<script setup lang="ts">
const pcMenu = [
  { label: 'トップ' },
  { label: '初めての方へ' },
  { label: '料金/システム' },
  { label: 'コース' },
  { label: 'アクセス' },
  { label: '講師紹介' },
]
const spMenu = [
  { label: 'トップ', image: "/images/icon_home.svg" },
  { label: '初めての方へ' },
  { label: '料金/システム' },
  { label: 'コース' },
  { label: 'アクセス' },
  { label: '講師' },
]
</script>
