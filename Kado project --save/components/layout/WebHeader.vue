<template>
  <div class="w-full bg-[#333333] text-white">
    <div class="SharedWebHeader flex w-full max-w-[1000px] mx-auto justify-between items-stretch">
      <div class="flex justify-center items-center gap-5 py-[10px] max-lg:px-5">
        <img src="/images/webheader-logo.svg" width="75" height="12" alt="eys-style" class="py-[5px]" />
        <p class="text-[10px] max-lg:hidden">
          “学び” と “コミュニティ” で、<br />
          Enjoy Your Life の実現をあらゆる面からサポートします。
        </p>
      </div>
      <section class="flex justify-between items-center max-lg:hidden">
        <nuxt-link href="/" class="pl-6 pr-10 relative flex flex-col justify-center items-center">
          <header class="text-[10px]">大人女性のための</header>
          <footer class="text-[16px]">“文化・藝術”</footer>
        </nuxt-link>
        <hr />
        <nuxt-link href="/" class="pl-6 pr-10 relative flex flex-col justify-center items-center">
          <header class="text-[10px]">大人女性のための</header>
          <footer class="text-[16px]">“学びとキャリア”</footer>
        </nuxt-link>
        <hr />
        <nuxt-link href="/" class="pl-6 pr-10 relative flex flex-col justify-center items-center">
          <header class="text-[10px]">2nd Communityが提供する</header>
          <footer class="text-[16px]">“コミュニティ”</footer>
        </nuxt-link>
        <hr />
      </section>
      <section class="flex h-[50px] justify-between items-center lg:hidden tracking-tighter">
        <hr />
        <nuxt-link href="/" class="pl-4 pr-6 text-center text-xs text-nowrap relative flex flex-col justify-center items-center">
          文化<br>藝術
        </nuxt-link>
        <hr />
        <nuxt-link href="/" class="pl-4 pr-6 text-center text-xs text-nowrap relative flex flex-col justify-center items-center">
          学びと<br>キャリア
        </nuxt-link>
        <hr />
        <nuxt-link href="/" class="pl-4 pr-6 text-center text-xs text-nowrap relative flex flex-col justify-center items-center">
          コミュニティ
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const hover = ref({ first: false, second: false, third: false })
</script>

<style lang="scss" scoped>
.SharedWebHeader {
  >svg {
    margin-right: 2rem;
    width: 75px;
    flex-shrink: 0;
  }

  >section {
    a {
      cursor: pointer;
      height: 100%;

      &:hover {
        background-color: #ffffff;
        color: #333333;

        path {
          fill: #333333;
        }

        &::after {
          background-image: url('/images/arrow/arrow_up-header-small-black.svg');
        }
      }

      &::after {
        content: "";
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 7px;
        height: 15px;
        background-image: url('/images/arrow/arrow_down-header-small-white.svg');
        background-size: cover;
        background-repeat: no-repeat;
        @media (max-width: 1024px) {
          right: 8px;
        }
      }
    }

    >hr {
      display: block;
      border: none;
      border-left: 1px solid #444444;
      width: 1px;
      height: 30px;
    }
  }
}
</style>