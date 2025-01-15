<template>
  <div class="bg-white">
    <div class="HeaderMenu w-full max-w-[1000px] mx-auto">
      <header class="flex items-center justify-between gap-2.5 py-5">
        <nuxt-link to="/" class="flex justify-between items-center gap-5 max-lg:w-full">
          <img :src="props.logo" :alt="props.title" decoding="async" width="157" height="40" />
          <h2 class="text-[10px] max-lg:hidden" v-html="pcCopy.replace(/\n/g, '<br/>')"></h2>
          <img class="lg:hidden" src="/images/menu.svg" decoding="async" width="20" height="13" alt="メニュー" />
        </nuxt-link>
        <div class="flex items-center justify-center max-lg:hidden gap-1.5">
          <slot />
        </div>
      </header>
    </div>
    <hr />
    <div class="HeaderMenu w-full max-w-[1000px] mx-auto">
      <ul class="py-4 max-lg:py-3 max-lg:px-2.5">
        <li class="flex items-center justify-center lg:hidden" v-for="i of spMenu">
          <nuxt-link to="/">
            <img v-if="i.image" :src="i.image" :alt="i.label" width="15" height="16" />
            <span v-else v-html="i.label" />
          </nuxt-link>
        </li>
        <li class="max-lg:hidden" v-for="i of pcMenu">
          <nuxt-link to="/">
            <img v-if="i.image" :src="i.image" :alt="i.label" />
            <span v-else v-html="i.label" />
          </nuxt-link>
        </li>
        <li v-if="!otherHidden" class="max-lg:hidden">
          <nuxt-link to="/" class="flex items-center gap-2">
            その他
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6.791" viewBox="0 0 12 6.791">
              <path id="arrow" d="M0,11.305.7,12,6.791,6,.7,0,0,.695,5.381,6Z" transform="translate(12) rotate(90)"
                fill="#222" />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Menu = { label: string; image?: string };
const props = defineProps<{
  title: string;
  logo: string;
  pcCopy: string;
  spCopy: string;
  pcMenu: Menu[];
  spMenu: Menu[];
  otherHidden?: boolean;
}>();
</script>

<style lang="scss" scoped>
.HeaderMenu {
  >header {
    @media (width <=1000px) {
      padding: 5px 10px;
      justify-content: space-between;
      width: 100%;
    }

    >h2 {
      font-size: 10px;
      font-weight: 300;
    }
  }

  >ul {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    font-size: 13px;

    @media (width <=1000px) {
      font-size: 12px;
      gap: 0.5em;
      border-top: 1px solid #dddddd;

      >li {
        &:not(:first-child) {
          border-left: 1px solid #dddddd;
          padding-left: 0.5em;
        }
      }
    }
  }
}
</style>
