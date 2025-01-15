<template>
  <section>
    <div class="pt-[54px]">
      <h2 class="w-full text-center text-[30px] font-bold">
        わたしたちが華道とアレンジフラワーを<br />レッスンいたします
      </h2>
    </div>
    <div
      class="w-full mt-2 pt-14 bg-[url('/images/instructor-offer-bg-pc.webp')] bg-[top_center] bg-no-repeat bg-cover max-lg:bg-none max-lg:px-5"
    >
      <div class="relative w-[550px] max-lg:w-full mx-auto">
        <div class="flex items-center justify-center max-lg:justify-end">
          <picture v-for="photo, i of photos.slice(0, 3)" :key="i">
            <source
              media="(max-width: 1024px)"
              :srcset="photo.sp_photo"
              type="image/webp"
            />
            <img
              :src="photo.pc_photo"
              width="110"
              height="120"
              alt="photo"
              loading="lazy"
              class="w-[110px] auto max-lg:w-[67px]"
            />
          </picture>
        </div>
        <div class="flex items-center justify-center">
          <picture v-for="photo, i of photos.slice(3, 8)" :key="i">
            <source
              media="(max-width: 1024px)"
              :srcset="photo.sp_photo"
              type="image/webp"
            />
            <img
              :src="photo.pc_photo"
              width="110"
              height="120"
              alt="photo"
              loading="lazy"
              class="w-[110px] auto max-lg:w-[67px]"
            />
          </picture>
        </div>
        <img
          src="/images/instructor-offer-title.svg"
          width="265"
          height="141"
          alt="photo"
          loading="lazy"
          class="w-[265px] h-auto max-lg:w-[194px] absolute -top-8 -left-[141px] max-lg:-top-6 max-lg:-left-12"
        />
        <img
          src="/images/group-top-flower.webp"
          width="151"
          height="157"
          alt="photo"
          loading="lazy"
          class="w-[106px] h-auto max-lg:w-[80px] absolute rotate-90 -top-5 -right-[22px] max-lg:-top-[38px] max-lg:-right-10"
        />
        <img
          src="/images/top-feature-flower-1.webp"
          width="169"
          height="143"
          alt="photo"
          loading="lazy"
          class="w-[169px] h-auto max-lg:w-[97px] absolute rotate-90 -bottom-[71px] -left-[107px] max-lg:-bottom-11 max-lg:-left-12"
        />
      </div>
      <div class="mt-9">
        <h3 class="text-xl text-center font-bold tracking-widest">生徒様の成長に責任を持つ<br>華道とフラワーアレンジメントの伝道師</h3>
        <p class="mt-9 text-sm text-center leading-6 pb-5">EYS-Kidsの講師は、お子さまのスキルアップに明確にコミットします。<br>
出身は、美術かプログラミングかどちらか。最初からどちらもできる講師はあまりいません。<br>
そこで、日夜、講師自らが自信を持ってレッスンできるように研修と研鑽に励んでいます。</p>
      </div>
    </div>
    <div class="mt-[78px] bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] max-lg:pb-6 max-lg:px-5 mb-5">
      <div class="flex items-end justify-center gap-[45px] max-lg:gap-2 max-lg:justify-between">
        <img
          src="/images/instructor-offer-bottom.webp"
          width="219"
          height="272"
          alt="photo"
          loading="lazy"
          class="w-[219px] h-auto max-lg:w-[128px] -mt-20"
        />
        <div class="flex gap-10 max-lg:flex-col max-lg:gap-1.5 pt-[30px] pb-10 max-lg:pb-3.5 max-lg:pt-3.5">
          <div class="w-[270px] max-lg:w-[200px]">
            <div class="flex gap-4 max-lg:gap-1.5 items-center">
              <div class="w-[60px] max-lg:w-7 aspect-square rounded-full content-center bg-[#FF99BB]">
                <img src="/images/icon_heart-white.svg" width="31" height="27" alt="heart" loading="lazy" class="w-[31px] h-auto mx-auto max-lg:w-[15px]" />
              </div>
              <h4 class="text-xl font-semibold w-40 max-lg:text-sm max-lg:w-auto max-lg:text-nowrap">講師の満足度をチェック！</h4>
            </div>
            <p class="text-sm max-lg:text-xs mt-4 max-lg:mt-1.5">EYSでは会員様から寄せられた講師の満足度を公開しています。</p>
          </div>
          <div class="w-[270px] max-lg:w-[200px]">
            <div class="flex gap-4 max-lg:gap-1.5 items-center">
              <div class="w-[60px] max-lg:w-7 aspect-square rounded-full content-center bg-[#AAAAFF]">
                <img src="/images/icon_reload-white.svg" width="40" height="46" alt="heart" loading="lazy" class="w-10 h-auto mx-auto max-lg:w-[19px]" />
              </div>
              <h4 class="text-xl font-semibold w-40 max-lg:text-sm max-lg:w-auto max-lg:text-nowrap">ENJOY保証で安心！</h4>
            </div>
            <p class="text-sm max-lg:text-xs mt-4 max-lg:mt-1.5">満足できなかったレッスンは、別の講師で無料でレッスンをやり直し。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const photos = [
  {
    pc_photo: "/images/instructor-offer-photo-1-pc.webp",
    sp_photo: "/images/instructor-offer-photo-1-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-2-pc.webp",
    sp_photo: "/images/instructor-offer-photo-2-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-3-pc.webp",
    sp_photo: "/images/instructor-offer-photo-3-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-4-pc.webp",
    sp_photo: "/images/instructor-offer-photo-4-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-5-pc.webp",
    sp_photo: "/images/instructor-offer-photo-5-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-6-pc.webp",
    sp_photo: "/images/instructor-offer-photo-6-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-7-pc.webp",
    sp_photo: "/images/instructor-offer-photo-7-sp.webp",
  },
  {
    pc_photo: "/images/instructor-offer-photo-8-pc.webp",
    sp_photo: "/images/instructor-offer-photo-8-sp.webp",
  },
]
</script>
