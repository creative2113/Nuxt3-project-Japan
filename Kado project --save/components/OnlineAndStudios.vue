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
    <div class="w-full mb-16 max-lg:mb-8">
      <h3 class="text-[80px] text-[#222222] savoye text-center w-max mx-auto -rotate-6 max-lg:text-[60px]">All Studios</h3>
      <img src="/images/pickup-title-bottom.svg" alt="pick up" width="228" height="48" loading="lazy" decoding="async" class="w-[228px] h-auto mx-auto -mt-12 object-center max-lg:w-[189px]" />
    </div>
    <div class="max-w-[1000px] mx-auto">
      <ul class="text-center flex justify-center gap-6 max-lg:gap-[9px] max-lg:border-b-[5px] max-lg:border-b-white">
        <li v-for="region, i of regions" :key="i" class="">
          <div class="py-2 px-3 flex justify-between items-center bg-[#9999EE16] border-2 border-[#9999EE] text-[#9999EE] w-[180px] max-lg:w-[60px] max-lg:flex-col max-lg:text-xs max-lg:px-1 max-lg:text-center max-lg:h-[58px] font-bold">
            <p class="custom-title">{{ region.region }}</p>
            <span class="roboto bg-white shadow-md block w-[30px] h-[30px] rounded-full text-center content-center max-lg:-mb-6">{{ region.prefectures.reduce((acc, cur) => acc + cur.studios.length, 0) }}</span>
          </div>
          <ul class="mt-2 lg:mt-2 max-lg:hidden">
            <li v-for="prefecture, j of region.prefectures" :key="j" class="pt-2.5">
              <nuxt-link to="/" class="flex justify-between items-center bg-white text-sm py-3 lg:py-3 px-4 rounded-full border after:block after:w-3 after:h-3 after:border-b-2 after:border-r-2 font-bold after:border-b-black after:border-r-black after:rotate-45">
                {{ prefecture.prefecture }}
                <span class="mr-8">({{ prefecture.studios.length }})</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- リアルスタジオコンテンツ -->
    <div class="w-[375px] lg:w-[1000px] mx-auto pt-9 pb-[26px] lg:py-7.5">
      <div class="mt-[1px] lg:mt-6">
        <div v-for="region in regions" :key="region.region"
          class="[&:not(:first-child)]:mt-[30px] lg:[&:not(:first-child)]:mt-10">
          <p class="text-center text-white bg-[#AAAAFF] font-bold lg:py-4 max-lg:py-3">
            {{ region.region }}の教室
          </p>
          <div class="mt-2.5 lg:mt-5 px-5">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-[5px] lg:gap-[15px]">
              <template v-for="prefecture in region.prefectures" :key="prefecture.prefecture">
                <!-- NOTE: ビルド時にTailwind CSSが静的にクラス名を解析し、使用されているクラスのみを生成するため、動的なクラス名を使用するとそのクラスが実際に生成されないことがあるためインラインスタイルでborderColorを適用 -->
                <div v-for="studio in prefecture.studios" :key="studio.name"
                  class="max-w-[167px] shadow-md lg:max-w-[310px] relative bg-[#AAAAFF32]"
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
                  <nuxt-link :to="`/studios/${studio.name}`" aria-label="view more"
                    class="block w-3 h-3 border-r-2 border-t-2 border-r-[#A794EC] border-t-[#A794EC] origin-center rotate-45 absolute top-1/2 right-2.5 -translate-y-1/2 max-lg:w-2 max-lg:h-2 max-lg:right-1" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.custom-title {
  word-break: keep-all;
  text-wrap: balance;
}
</style>