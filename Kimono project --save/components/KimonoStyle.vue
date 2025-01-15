<template>
    <!-- EYS-STYLE -->
    <div class="py-[30px] px-5 lg:pt-[40px] lg:pb-[50px]">
      <div class="w-[112px] lg:w-[187px] mx-auto">
        <img
          src="/images/footer-style-title.svg"
          width="187"
          height="78"
          alt="ON-girl"
          loading="lazy"
          decoding="async"
        />
      </div>

      <ul
        class="max-w-[1180px] mx-auto lg:px-0 mt-[30px] lg:mt-[50px] grid lg:grid-cols-5 grid-cols-2 gap-5"
      >
        <li v-for="style, i in styles" :key="i" class="w-[157px] lg:w-[220px] ">
          <picture>
            <source
              media="(max-width: 1024px)"
              :srcset="style.sp_image"
              type="image/webp"
              width="157"
              height="160"
            />
            <img
              :src="style.pc_image"
              width="220"
              height="240"
              alt=""
              role="presentation"
              loading="lazy"
              class="shadow-xl w-full h-auto"
              decoding="async"
            />
          </picture>
        </li>
      </ul>
    </div>
    <!-- /EYS-STYLE -->

    <!-- sns -->
    <div class="py-[10px] lg:py-[15px] bg-[#F9F9F9]">
      <ul class="flex gap-[30px] lg:gap-[50px] justify-center">
        <li v-for="sns of snss" :key="sns.name" class="w-10 lg:w-[70px]">
          <nuxt-link :href="sns.link" :aria-label="sns.name" :aria-current="sns.name">
            <img
              :src="sns.icon"
              width="70"
              height="70"
              :alt="sns.name"
              loading="lazy"
              class="drop-shadow-md w-full h-auto"
              decoding="async"
            />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- sns -->
</template>
<script lang="ts" setup>
const styles = [
  {
    pc_image: "/images/panel-1.webp",
    sp_image: "/images/panel-1-sp.webp",
  },
  {
    pc_image: "/images/panel-2.webp",
    sp_image: "/images/panel-2-sp.webp",
  },
  {
    pc_image: "/images/panel-3.webp",
    sp_image: "/images/panel-3-sp.webp",
  },
  {
    pc_image: "/images/panel-4.webp",
    sp_image: "/images/panel-4-sp.webp",
  },
  {
    pc_image: "/images/panel-5.webp",
    sp_image: "/images/panel-5-sp.webp",
  },
]
const snss = [
  {
    name: "Facebook",
    icon: "/images/facebook-icon.svg",
    link: "/",
  },
  {
    name: "X",
    icon: "/images/x-icon.webp",
    link: "/",
  },
  {
    name: "Instagram",
    icon: "/images/instagram-icon.webp",
    link: "/",
  },
  {
    name: "Line",
    icon: "/images/Line-icon.svg",
    link: "/",
  },
]
</script>
