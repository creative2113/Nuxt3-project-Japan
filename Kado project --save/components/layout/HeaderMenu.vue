<template>
  <div class="bg-white">
    <div class="HeaderMenu w-full max-w-[1000px] mx-auto">
      <header class="flex items-center justify-between gap-2.5 py-5">
        <div class="flex justify-between items-center gap-4 max-lg:w-full">
          <nuxt-link to="/">
            <img
              :src="props.logo"
              :alt="props.title"
              width="254"
              height="42"
              class="w-[254px] h-auto max-lg:w-[182px]"
            />
          </nuxt-link>
          <p
            class="text-[10px] max-lg:hidden tracking-tighter "
            v-html="pcCopy.replace(/\n/g, '<br/>')"
          ></p>
          <p class="lg:hidden text-[8px]">大人のための華道＆<br>フラワーアレンジメント教室。</p>
          <button aria-label="toggle" @click="emit('SpMenuToggle')" class="sp-menu-toggle-button" :class="spMenuOpen ? 'close': ''"></button>
        </div>
        <div class="flex items-center justify-center max-lg:hidden gap-1.5">
          <slot />
        </div>
      </header>
    </div>
    <div v-if="spMenuOpen" class="lg:hidden">
      <layout-mobile-menu @click="emit('SpMenuToggle')" />
    </div>
    <div v-if="!spMenuOpen" class="HeaderMenu w-full max-w-[1000px] mx-auto">
      <ul class="lg:py-4">
        <li
          class="flex items-center justify-center lg:hidden"
          v-for="i of spMenu"
        >
          <nuxt-link
            :to="i.link ? i.link : '/'"
            class="max-lg:py-2.5 max-lg:px-2 text-nowrap"
          >
            <img v-if="i.image" :src="i.image" :alt="i.label" width="18" height="15" />
            <span v-else v-html="i.label" />
          </nuxt-link>
        </li>
        <li class="max-lg:hidden" v-for="i of pcMenu">
          <nuxt-link :to="i.link ? i.link : '/'">
            <img v-if="i.image" :src="i.image" :alt="i.label" />
            <span v-else v-html="i.label" />
          </nuxt-link>
        </li>
        <li v-if="!otherHidden" class="max-lg:hidden">
          <nuxt-link to="/" class="flex items-center gap-2">
            その他
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6.791"
              viewBox="0 0 12 6.791"
            >
              <path
                id="arrow"
                d="M0,11.305.7,12,6.791,6,.7,0,0,.695,5.381,6Z"
                transform="translate(12) rotate(90)"
                fill="#222"
              />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Menu = { label: string; image?: string; link?: string };
const props = defineProps<{
  title: string;
  logo: string;
  spMenuOpen: boolean;
  pcCopy: string;
  spCopy: string;
  pcMenu: Menu[];
  spMenu: Menu[];
  otherHidden?: boolean;
}>();
const emit = defineEmits(["SpMenuToggle"]);
</script>

<style lang="scss">
.sp-menu-toggle-button {
  display: none;
  @media (max-width: 1024px) {
    width: 20px;
    height: 14px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: black;
      transition: all 0.3s ease-in-out;
      transform-origin: 1px center;
    }
  }
}
.sp-menu-toggle-button.close {
  &::before {
    transform: rotateZ(45deg);
  }
  &::after {
    transform: rotateZ(-45deg);
  }
}

.HeaderMenu {
  > header {
    @media (width <=1000px) {
      padding: 5px 10px;
      justify-content: space-between;
      width: 100%;
    }

    > h2 {
      font-size: 10px;
      font-weight: 300;
    }
  }

  > ul {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    font-size: 13px;

    @media (width <=1000px) {
      font-size: 12px;
      border-top: 1px solid #dddddd;

      > li {
        &:not(:first-child) {
          border-left: 1px solid #dddddd;
        }
        > a.router-link-active {
          background-color: #aaaaff64;
        }
      }
    }
  }
}
</style>
