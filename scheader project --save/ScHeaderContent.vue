<template>
  <div class="sc-header-content">
    <div class="sc-header-content-title">
      <img
        src="/scheader-images/header-content-icon.svg"
        alt="logo"
        loading="lazy"
        decoding="async"
      />
      <h3>ご利用中のサービス</h3>
    </div>
    <ul class="sc-header-content-menu">
      <li
        v-for="(menu, i) of service"
        :key="i"
        @click="active_menu = i"
        class="sc-header-content-menu-item"
      >
        <img :src="menu.menu.icon" loading="lazy" decoding="async" alt="logo" />
        <div>
          <img :src="menu.menu.logo" loading="lazy" decoding="async" alt="logo" />
        </div>
        <p>{{ menu.menu.title }}</p>
      </li>
      <li class="sc-header-content-menu-item">
        <img src="/scheader-images/header-menu-setting.webp" alt="logo" />
        <h6>ご利用中のサービス</h6>
      </li>
    </ul>
    <div
      v-if="
        service[active_menu].title"
      class="sc-header-menu-detail"
    >
      <img
        :src="service[active_menu]?.logo"
        loading="lazy"
        decoding="async"
        :alt="service[active_menu].title"
        class="detail-logo"
      />
      <h4 v-html="service[active_menu]?.title" class="detail-title"></h4>
      <ul class="detail-content">
        <li
          v-for="(item, i) of service[active_menu]?.items"
          :key="i"
          :style="{
            gridColumnEnd: item.colspan ? `span ${item.colspan}` : 'span 1',
          }"
          :class="{ active: crt_hostname === item.hostname }"
        >
          <a :href="item.hostname" target="_blank">
            <div>
              <img
                :src="item.logo"
                loading="lazy"
                decoding="async"
                :alt="item.title"
                class="item-detail-logo"
              />
              <h5 v-html="item.title"></h5>
            </div>
            <img
              :src="item.banner"
              loading="lazy"
              decoding="async"
              :alt="item.title"
              class="item-detail-banner"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const active_menu = ref(1);
const crt_hostname = ref("https://www.eys-style.jp/");
defineProps<{
  service?: any;
}>();
</script>

<style lang="scss" scoped>
.sc-header-content {
  width: 100%;
  .sc-header-content-title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 1000px) {
      padding-inline: 20px;
    }
    > img {
      width: 24px;
      height: auto;
      @media (max-width: 1000px) {
        width: 20px;
      }
    }
    > h3 {
      font-size: 18px;
      font-weight: bold;
      @media (max-width: 1000px) {
        font-size: 14px;
      }
    }
  }
  .sc-header-content-menu {
    padding-bottom: 80px;
    color: #333333;
    width: 100%;
    margin-top: 28px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (max-width: 1000px) {
      margin-top: 11px;
      padding-bottom: 40px;
      gap: 1px;
      grid-template-columns: 1fr;
      padding-inline: 20px;
    }
    > .sc-header-content-menu-item {
      position: relative;
      background-color: white;
      display: flex;
      gap: 10px;
      align-items: center;
      cursor: pointer;
      @media (max-width: 1000px) {
        gap: 5px;
      }
      > img {
        width: 100px;
        height: auto;
        @media (max-width: 1000px) {
          width: 67px;
        }
      }
      > div {
        width: 140px;
        @media (max-width: 1000px) {
          width: 90px;
        }
        > img {
          width: 100%;
          max-height: 40px;
          @media (max-width: 1000px) {
            width: 100%;
            max-height: 30px;
          }
        }
      }
      > p {
        width: 180px;
        height: 30px;
        font-size: 10px;
        border: solid 1px #dddddd;
        text-align: center;
        align-content: center;
        @media (max-width: 1000px) {
          width: 130px;
          height: 24px;
          font-size: 9px;
          border-width: 1px;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 12px;
        aspect-ratio: 1;
        border-right: solid 1px black;
        border-top: solid 1px black;
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translate(50%, -50%) rotate(45deg);
        @media (max-width: 1000px) {
          width: 8px;
          right: 15px;
        }
      }
    }
    > .sc-header-content-menu-item:last-of-type {
      > h6 {
        font-weight: normal;
        font-size: 15px;
        padding-left: 30px;
        @media (max-width: 1000px) {
          font-size: 12px;
          padding-left: 15px;
        }
      }
    }
  }
  .sc-header-menu-detail {
    width: calc(100% + 20px);
    margin-inline: -10px;
    padding-bottom: 80px;
    @media (max-width: 1000px) {
      width: 354px;
      margin-inline: auto;
      padding-bottom: 40px;
    }
    > .detail-logo {
      display: block;
      height: 60px;
      width: auto;
      max-width: 316px;
      margin-inline: auto;
      @media (max-width: 1000px) {
        height: 40px;
        max-width: 190px;
      }
    }
    > .detail-title {
      font-size: 18px;
      font-weight: bold;
      margin-top: 27px;
      text-align: center;
      @media (max-width: 1000px) {
        font-size: 14px;
        margin-top: 17px;
      }
    }
    > .detail-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: 17px;
      @media (max-width: 1000px) {
        margin-top: 8px;
        grid-template-columns: repeat(2, 1fr);
      }
      > li {
        border-radius: 5px;
        padding: 10px;
        > a {
          background-color: white;
          display: block;
          width: 100%;
          color: #333333;
          > div {
            height: 130px;
            padding-block: 20px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            @media (max-width: 1000px) {
              height: 85px;
              padding-block: 8px;
            }
            .item-detail-logo {
              max-width: 218px;
              max-height: 40px;
              margin-inline: auto;
              display: block;
              @media (max-width: 1000px) {
                max-width: 145px;
                max-height: 30px;
              }
            }
            > h5 {
              font-size: 12px;
              text-align: center;
              @media (max-width: 1000px) {
                font-size: 11px;
              }
            }
          }
          > .item-detail-banner {
            height: 120px;
            width: auto;
            display: block;
            @media (max-width: 1000px) {
              height: 80px;
              min-width: 100%;
            }
          }
        }
      }
      > li.active {
        background-image: linear-gradient(to right bottom, #efc6f3, #a9d9fe);
      }
    }
  }
}
</style>
