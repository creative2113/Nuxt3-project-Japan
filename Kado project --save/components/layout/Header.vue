<template>
  <header class="w-full shadow-md max-lg:w-[375px] max-lg:overflow-hidden max-lg:mx-auto relative z-40" :class="spMenuOpen ? 'max-lg:fixed max-lg:top-0 max-lg:z-[9999] max-lg:h-screen max-lg:w-full max-lg:bg-white header-show' : ''">
    <LayoutWebHeader />
    <LayoutHeaderMenu title="EYSワインスクール" logo="/images/header-logo.svg" :spMenuOpen="spMenuOpen" @SpMenuToggle="spMenuOpen = !spMenuOpen"
      pcCopy="貴方の思うまま、気軽に自由に楽しめる、大人の華道＆フラワーアレンジメント<br/>教室。初心者・まずは無料体験レッスンを！" spCopy="自宅オンラインでも、<br/>リアルスタジオでも。" :pcMenu="pcMenu"
      :spMenu="spMenu">
      <div class="w-40 h-10 flex items-center justify-center gap-2">
        <img src="/images/freedial.svg" alt="freedial" width="30" height="20" loading="lazy" />
        <div>
          <p class="text-lg roboto font-bold leading-[18px]">0120-978-900</p>
          <p class="text-[9px]">電話受付 :
            <span class="roboto font-bold">8:00〜25:00</span></p>
        </div>
      </div>
      <nuxt-link to="/" class="text-white tracking-tighter bg-black py-2.5 pl-9 w-[200px] arrow">
        無料体験レッスン
      </nuxt-link>
    </LayoutHeaderMenu>
  </header>
</template>

<style lang="scss" scoped>
.header-show {
  animation: fadeHeight 0.5s forwards ease-in-out;
}
@keyframes fadeHeight {
  from {
    height: 90px;
  }
  to {
    height: 100vh;
  }
}
.arrow {
  &::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 20px;
    border-top: solid 1px white;
    border-right: solid 1px white;
    transform: rotateZ(45deg);
  }
}
</style>

<script setup lang="ts">
const spMenuOpen = ref(false);
const pcMenu = [
  { label: 'トップ', link: '/' },
  { label: '初めての方へ', link: '/qa' },
  { label: '料金/システム', link: '/price' },
  { label: 'コース紹介', link: '/courses' },
  { label: 'アクセス', link: '/access' },
  { label: '講師紹介', link: '/instructor' },
]
const spMenu = [
  { label: 'トップ', image: "/images/home-icon.svg", link: '/' },
  { label: '初めての方へ', link: '/qa' },
  { label: '料金/システム', link: '/price' },
  { label: 'コース', link: '/courses' },
  { label: 'アクセス', link: '/access' },
  { label: '講師', link: '/instructor' },
]
</script>