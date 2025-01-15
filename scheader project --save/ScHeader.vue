<template>
  <header :class="{ SharedScHeader: true, hide }">
    <div class="header">
      <div>
        <a :href="authBase"><img :src="logo" alt="logo" loading="lazy" decoding="async" width="146" height="30" /></a>
        <p>
          揺りかごから墓場まで<br />
          ここはすべての人のセカンドコミュニティー
        </p>
      </div>
      <nav>
        <div
          v-if="!loggedIn"
          class="logout-btn"
          :style="{ color: menuForeColor, 'background-color': menuBackColor }"
          @click="emits('menuClick')"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 19"
            >
              <path
                d="M15.654,19A7.3,7.3,0,0,0,8.5,11.586,7.3,7.3,0,0,0,1.346,19H0a8.9,8.9,0,0,1,2.492-6.227A8.353,8.353,0,0,1,8.5,10.194,8.657,8.657,0,0,1,17,19ZM3.985,4.676A4.6,4.6,0,0,1,8.5,0,4.6,4.6,0,0,1,13.01,4.676,4.6,4.6,0,0,1,8.5,9.352,4.606,4.606,0,0,1,3.985,4.676Zm1.347,0A3.226,3.226,0,0,0,8.5,7.953a3.226,3.226,0,0,0,3.166-3.281A3.226,3.226,0,0,0,8.5,1.391,3.232,3.232,0,0,0,5.333,4.672Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <span>会員登録</span>
        </div>
        <div
          v-if="!loggedIn"
          class="logout-btn"
          :style="{ color: foreColor, 'background-color': backColor }"
          @click="emits('userClick')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              id="Path_451027"
              data-name="Path 451027"
              d="M14,.408V13.592a.41.41,0,0,1-.412.408H10.677a.389.389,0,1,1,0-.777h2.548V.777H10.677a.394.394,0,0,1-.412-.388A.394.394,0,0,1,10.677,0h2.911A.41.41,0,0,1,14,.408M9.023,7.931l-3.171,3.2a.408.408,0,0,0-.044.576.415.415,0,0,0,.582,0L10.3,7.833a.616.616,0,0,0,0-.732L6.391,3.228a.415.415,0,0,0-.582,0,.408.408,0,0,0,.044.576L9.019,7H.412a.47.47,0,0,0,0,.932Z"
              fill="#fff"
            />
          </svg>
          <span>ログイン</span>
        </div>
        <img v-if="loggedIn" @click="emits('userClick')" class="user-avatar" :src="user.icon" />
        <div v-if="loggedIn" class="data-icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="21.887" height="20" viewBox="0 0 21.887 20">
            <path id="icon_love" d="M37.729,48.779a.559.559,0,0,1-.41-.176L28.6,39.4a6.225,6.225,0,1,1,8.814-8.792l.315.315.314-.314a6.225,6.225,0,0,1,8.8,8.8L38.139,48.6A.578.578,0,0,1,37.729,48.779ZM33.013,29.924a5.1,5.1,0,0,0-3.6,8.709l8.316,8.77,8.29-8.778a4.452,4.452,0,0,0,.333-.331,5.093,5.093,0,0,0-7.52-6.869l-.7.7a.565.565,0,0,1-.8,0l-.718-.713A5.067,5.067,0,0,0,33.013,29.924Z" transform="translate(-26.779 -28.779)" fill="#fff"/>
          </svg>
          <span>99</span>
        </div>
        <div v-if="loggedIn" class="data-icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="19.913" height="20" viewBox="0 0 19.913 20">
            <path id="icon_cart" d="M-1152.272,17.625a2.152,2.152,0,0,1,2.152-2.152,2.152,2.152,0,0,1,2.152,2.152,2.152,2.152,0,0,1-2.152,2.152A2.152,2.152,0,0,1-1152.272,17.625Zm.926,0a1.227,1.227,0,0,0,1.227,1.227,1.226,1.226,0,0,0,1.226-1.227,1.226,1.226,0,0,0-1.226-1.226A1.227,1.227,0,0,0-1151.346,17.625Zm-8.817,0a2.152,2.152,0,0,1,2.153-2.152,2.152,2.152,0,0,1,2.152,2.152,2.152,2.152,0,0,1-2.152,2.152A2.153,2.153,0,0,1-1160.163,17.625Zm.9.024a1.227,1.227,0,0,0,1.25,1.2,1.226,1.226,0,0,0,1.226-1.227,1.226,1.226,0,0,0-1.226-1.226,1.227,1.227,0,0,0-1.227,1.226h-.023Zm-1.851-5.577-1.574-9.951a1.389,1.389,0,0,0-1.157-1.157l-1.782-.255a.468.468,0,0,1-.393-.532.468.468,0,0,1,.532-.393l1.782.278a2.314,2.314,0,0,1,1.944,1.921l.07.417h15.112a.452.452,0,0,1,.075.005.463.463,0,0,1,.388.527L-1147,8.877a2.8,2.8,0,0,1-2.754,2.361H-1160.3l.116.694a1.852,1.852,0,0,0,1.828,1.574h10.668a.463.463,0,0,1,.463.463.463.463,0,0,1-.463.463h-10.7A2.754,2.754,0,0,1-1161.112,12.071Zm.671-1.759h10.691a1.851,1.851,0,0,0,1.828-1.574l.81-5.415h-14.44Z" transform="translate(1166.023 0.223)" fill="#fff"/>
          </svg>
          <span>2</span>
        </div>
        <div v-if="loggedIn" class="data-icon-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20.188" height="21" viewBox="0 0 20.188 21">
            <path id="icon_bell" d="M-255.027,2.285H-261l1.993-4.186V-6.02a7.307,7.307,0,0,1,6.644-6.926V-14.99h1.329v2.025a7.3,7.3,0,0,1,6.644,6.945V-1.9l1.993,4.186h-5.973A3.311,3.311,0,0,1-251.7,5.01,3.311,3.311,0,0,1-255.027,2.285Zm3.33,1.4a1.94,1.94,0,0,0,1.972-1.4h-3.944A1.94,1.94,0,0,0-251.7,3.681Zm-5.98-9.634v4.385l-1.2,2.525h14.418l-1.262-2.525V-5.953A5.985,5.985,0,0,0-251.7-11.6,5.985,5.985,0,0,0-257.678-5.953Z" transform="translate(261.792 15.49)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1"/>
          </svg>
          <span>8</span>
        </div>
        <div class="login-btn" @click="menuOpen = !menuOpen">
          <hr />
          <svg
            v-if="menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            style="margin-right: 5px"
          >
            <path
              id="close"
              d="M7.071,7.071,0,14.142,7.071,7.071,0,0,7.071,7.071,14.142,0,7.071,7.071l7.071,7.071Z"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
          <img v-else src="/scheader-images/header-toggle-menu.svg" alt="header menu" loading="lazy" decoding="async" width="20" height="auto" />
        </div>
      </nav>
    </div>
  </header>
  <div v-if="menuOpen" class="open-menu">
    <div class="open-menu-inner">
      <div class="open-menu-container">
        <SharedScHeaderContent v-if="loggedIn && service" :service="service" />
        <SharedScMenuOpen />
      </div>
      <div @click="menuOpen = false" class="open-menu-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <path
            id="close"
            d="M7.071,7.071,0,14.142,7.071,7.071,0,0,7.071,7.071,14.142,0,7.071,7.071l7.071,7.071Z"
            transform="translate(0.354 0.354)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { authBase } = useRuntimeConfig().public;
export type Info = { icon: string; name: string; id?: number; size?: string };
const props = withDefaults(
  defineProps<{
    logo?: string;
    menu?: Info;
    hideScrollY?: number;
    service?: any;
  }>(),
  {
    logo: "https://assets.2nd-community.com/ebed13e5-dcc2-4423-9a88-b74347ce7e66.svg",
    menu: () => ({
      icon: "https://assets.2nd-community.com/9dfcd9c7-9b31-463e-963e-535f156b710f.svg",
      name: useRuntimeConfig().public.type || "音楽",
    }),
    service: null,
  }
);
const emits = defineEmits<{
  menuClick: [];
  userClick: [];
}>();
const user = useUser();
const loggedIn = computed(() => user.value.id);
const foreColor = computed(() => (loggedIn.value ? "#222222" : "#FFFFFF"));
const backColor = computed(() => (loggedIn.value ? "#FFFFFF" : "#333333"));
const menuForeColor = "#FFFFFF";
const menuBackColor = "#333333";
const menuOpen = ref(false);
const hide = ref(false);
onMounted(async () => {
  window.addEventListener('scroll', () => hide.value = props.hideScrollY ? window.scrollY > props.hideScrollY : false)
  try {
    const member = await useApiFetch("/api/users/member_token", {
      method: "POST",
    });
    if (!member) return;
    user.value = {
      ...member,
      login: user.value.login,
      loading: false,
      name: member.nickname || member.name,
      fullname: member.name,
      kana: member.family_kana + member.first_kana,
      birth: member.birthday,
      email: member.mobile_mail || member.pc_mail,
      age: member.birthday
        ? Math.floor(
            (Number(
              new Date()
                .toISOString()
                .slice(0, 10)
                .replace(/[^0-9]/g, "")
            ) -
              Number(member.birthday.replace(/[^0-9]/g, ""))) /
              10000
          )
        : NaN,
      gender: member.gender_id,
      icon: member.avatar_path,
      backColor: member.role === 'instractor' ? "#2ACCBB" : "#FF7788",
      iconBackColor: member.role === 'instractor' ? "#24A799" : "#CB606D",
    }
  } catch {
    user.value = {
      ...user.value,
      loading: false,
    }
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/mixin.scss" as *;

.SharedScHeader {
  position: sticky;
  z-index: 11111;
  top: 0;
  background-color: #111;
  display: flex;
  justify-content: center;
  padding: 0 10px;

  @media (width > 800px) {
    padding: 0 80px;
  }

  &.hide {
    transition: transform 0.3s;
    transform: translateY(-50px);
  }

  > div {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    gap: 2em;
    align-items: center;
    height: 50px;
    color: #fff;
    font-size: 10px;
    @media (max-width: 1000px) {
      gap: 10px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 30px;
      > a {
        line-height: 0;
        > img {
          @media (max-width: 1000px) {
            width: 120px;
          }
        }
      }
      > p {
        font-size: 10px;
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }

    > nav {
      display: flex;
      align-items: center;
      gap: 20px;
      @media (max-width: 1000px) {
        gap: 10px;
      }

      > .logout-btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 8px 20px;
        border: 1px solid #444444;
        gap: 10px;
        @media (max-width: 1000px) {
          padding: 8px 10px;
          gap: 5px;
        }

        > span {
          text-align: center;
          text-wrap: nowrap;
          font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
            "Hiragino Sans", "ヒラギノ角ゴシック", sans-serif;
          font-weight: 600;
          font-size: 13px;
          flex-grow: 1;
          @media (max-width: 1000px) {
            font-size: 10px;
          }
        }
        svg {
          @media (max-width: 1000px) {
            height: 14px;
          }
        }
      }
      > .login-btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        > hr {
          width: 1px;
          height: 30px;
          background-color: #444444;
          border: none;
        }
      }
      >.user-avatar {
        width: 30px;
        aspect-ratio: 1;
        border-radius: 30px;
        cursor: pointer;
      }
      >.data-icon-btn {
        width: 31px;
        height: 36px;
        position: relative;
        align-content: center;
        cursor: pointer;
        >span {
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 18px;
          aspect-ratio: 1;
          border-radius: 18px;
          background-color: #FF8899;
          color: white;
          font-size: 10px;
          align-content: center;
          text-align: center;
          font-family: roboto, sans-serif;
          font-weight: bold;
        }
        >svg {
          height: 20px;
          width: auto;
        }
      }
    }
  }
}
.open-menu {
  position: absolute;
  z-index: 1111;
  color: white;
  font-family: "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3",
    "Hiragino Sans", "ヒラギノ角ゴシック", sans-serif;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  border-top: solid 1px #444444;
  padding-bottom: 600px;
  * {
    margin: 0;
  }
  > .open-menu-inner {
    position: relative;
    width: 100%;
    background-color: #333333;
    padding-top: 40px;
    padding-bottom: 100px;
    @media (max-width: 1000px) {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    > .open-menu-container {
      width: 100%;
      max-width: 1000px;
      margin-inline: auto;
      @media (max-width: 1000px) {
        width: 100%;
        max-width: 375px;
        overflow: hidden;
      }
    }
    > .open-menu-close {
      position: absolute;
      background-color: #333333;
      width: 160px;
      height: 160px;
      border-radius: 80px;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      padding-top: 80px;
      text-align: center;
      cursor: pointer;
      @media (max-width: 1000px) {
        width: 120px;
        height: 120px;
        padding-top: 60px;
      }
      > svg {
        margin-inline: auto;
        width: 30px;
        height: 30px;
        @media (max-width: 1000px) {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
