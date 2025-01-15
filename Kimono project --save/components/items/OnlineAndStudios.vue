<script setup lang="ts">
// types.ts
interface Studio {
  name: string;
  address: string;
  access: string;
}

interface Prefecture {
  prefecture: string;
  studios: Studio[];
}

interface Region {
  region: string;
  prefectures: Prefecture[];
  color: string;
}

defineProps({
  regions: Array as PropType<Region[]>,
});
</script>
<template>
  <!-- リアルスタジオ詳細コンテンツ -->
  <div class="max-w-375 lg:max-w-[1000px] lg:w-screen mx-auto pt-[60px]">
    <h3 class="text-[80px] text-[#D87E80] gallatone text-center w-max mx-auto mb-16 -rotate-6 max-lg:mb-8 max-lg:text-[60px]">All Studios</h3>
    <div class="max-w-[1000px] mx-auto">
      <ul class="text-center flex justify-center gap-6 max-lg:gap-[9px] max-lg:border-b-[5px] max-lg:border-b-white">
        <li class="">
          <div class="bg-white py-2 px-3 flex justify-between items-center w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px]">
            <p>北海道・東北</p>
            <span class="futura-pt bg-[#E39597] text-white block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">1</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">北海道（1）</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="">
          <div class="bg-white py-2 px-3 flex justify-between items-center w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px]">
            <p>東京</p>
            <span class="futura-pt bg-[#E39597] text-white block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">11</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">東京都（11）</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="">
          <div class="bg-white py-2 px-3 flex justify-between items-center w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px]">
            <p>
              関東 (東京以外)
            </p>
            <span class="futura-pt bg-[#E39597] text-white block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">4</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">神奈川県（2）</nuxt-link>
            </li>
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">埼玉県（1）</nuxt-link>
            </li>
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">千葉県（1）</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="">
          <div class="bg-white py-2 px-3 flex justify-between items-center w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px]">
            <p>北陸・中部</p>
            <span class="futura-pt bg-[#E39597] text-white block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">3</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">新潟県（1）</nuxt-link>
            </li>
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">愛知県（1）</nuxt-link>
            </li>
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">静岡県（1）</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="">
          <div class="bg-white py-2 px-3 flex justify-between items-center w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px]">
            <p>関西</p>
            <span class="futura-pt bg-[#E39597] text-white block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">5</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">大阪府（4）</nuxt-link>
            </li>
            <li class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 after:block after:w-3 after:h-3 after:border-b after:border-r after:border-b-black after:border-r-black after:rotate-45">京都府（1）</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- リアルスタジオコンテンツ -->
    <div class="w-[375px] lg:w-[1000px] px-5 mx-auto pt-9 pb-[26px] lg:py-7.5">
      <div class="mt-[1px] lg:mt-6">
        <div v-for="region in regions" :key="region.region"
          class="[&:not(:first-child)]:mt-5 lg:[&:not(:first-child)]:mt-8">
          <p class="text-center lg:text-2xl pt-3 pb-2 lg:py-4 max-lg:pt-0 max-lg:pb-0">
            {{ region.region }}の教室
          </p>
          <div class="mt-[15px] lg:mt-3 lg:px-5">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-[1px] gap-y-[1px] lg:gap-y-[15px] lg:gap-x-[10px]">
              <template v-for="prefecture in region.prefectures" :key="prefecture.prefecture">
                <!-- NOTE: ビルド時にTailwind CSSが静的にクラス名を解析し、使用されているクラスのみを生成するため、動的なクラス名を使用するとそのクラスが実際に生成されないことがあるためインラインスタイルでborderColorを適用 -->
                <div v-for="studio in prefecture.studios" :key="studio.name"
                  class="max-w-[167px] shadow-md lg:max-w-[310px] relative bg-white"
                  :style="{ borderColor: region.color }">
                  <div class="flex justify-between items-center w-full">
                    <img src="/images/studio-img.webp" width="99" height="132" alt="スタジオ画像" loading="lazy"
                      class="w-[60px] h-[60px] lg:w-[100px] lg:h-[132px]" />
                    <div class="w-[107px] lg:w-[210px] p-[5px_16px_4px_5px] lg:p-[13px_30px_13px_15px]">
                      <p class="font-semibold text-[11px] lg:text-base lg:pt-1">
                        {{ studio.name }}
                      </p>
                      <p class="hidden lg:flex lg:text-xs lg:mt-2.5 lg:items-center lg:gap-2">
                        <span class="hidden lg:inline-block lg:w-[14px] lg:shrink-0">
                          <img class="w-full" src="/images/icon_place.svg" width="14" height="20" alt="住所アイコン"
                            loading="lazy" />
                        </span>
                        {{ studio.address.length < 16 ? studio.address : studio.address.slice(0, 16) + "..." }}
                      </p>
                      <p class="text-[10px] lg:mt-1.5 lg:text-xs lg:flex lg:items-center lg:gap-2">
                        <span class="hidden lg:inline-block lg:w-[14px] lg:shrink-0">
                          <img src="/images/train.svg" width="14" height="16" alt="電車アイコン" loading="lazy" />
                        </span>
                        {{ studio.access.length < 16 ? studio.access : studio.access.slice(0, 16) + "..." }}
                      </p>
                    </div>
                  </div>
                  <nuxt-link to="/" aria-label="view more"
                    class="block w-3 h-3 border-r border-t border-r-black border-t-black origin-center rotate-45 absolute top-1/2 right-2.5 -translate-y-1/2 max-lg:w-2 max-lg:h-2 max-lg:right-1" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
