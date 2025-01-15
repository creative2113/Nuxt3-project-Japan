<template>
  <section>
    <h2
      class="text-center text-[36px] font-bold tracking-widest max-lg:text-2xl"
    >
      東京都で<br class="lg:hidden">華道&アレンジフラワー<br class="lg:hidden">を習おう！
    </h2>
    <p
      class="text-center mt-[35px] max-lg:text-[13px] max-lg:text-left max-lg:mt-3 max-lg:px-10"
    >
      東京の中でも屈指の繁華街、渋谷。<br />
      ファッション、アート、サブカルチャーが詰まったこのエリアは<br />
      想像力が無限に膨らむ最高の場所でもあります。各地からのアクセスも抜群です。<br />
    </p>
    <div class="mt-14">
      <ContentArrangementSelect />
      <div class="w-full pt-[60px] bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] max-lg:relative max-lg:bg-none max-lg:bg-white max-lg:pt-0 max-lg:pb-[30px] max-lg:drop-shadow-lg">
        <h3 class="bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] w-[311px] h-[40px] text-center content-center text-white font-semibold mx-auto">東京都にあるEYS華道&フラワー教室</h3>
        <picture>
          <source media="(max-width: 1024px)" srcset="/images/googlemap-sp.webp" type="image/webp">
          <img src="/images/googlemap-pc.webp" alt="GoogleMap" loading="lazy" decoding="async" width="1000" height="400" class="w-[1000px] max-lg:w-full h-auto mx-auto mt-[30px] max-lg:mt-5 shadow-xl max-lg:shadow-md">
        </picture>
        <span class="lg:hidden border-t-[30px] border-t-white border-x-[25px] border-x-transparent absolute bottom-[-30px] left-1/2 -translate-x-1/2" />
      </div>
      <div class="w-full pt-[38px] pb-[63px] bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] max-lg:pb-[30px]">
        <div class="max-w-[920px] w-full mx-auto max-lg:px-5">
          <div class="w-full flex justify-between items-start max-lg:flex-col">
            <div class="grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-lg:gap-x-[3px] max-lg:gap-y-[5px] max-lg:mt-3">
              <div v-for="ward, i of wards" :key="i" class="flex justify-between items-center w-[140px] h-10 px-3 border border-[#DDDDDD] bg-white rounded-full max-lg:w-[110px] max-lg:h-[30px] max-lg:px-2.5" :class="i === 9 && 'max-lg:hidden'">
                <p class="flex items-center justify-center gap-[5px] text-sm max-lg:text-xs">
                  {{ ward.name }}
                  <span class="block bg-[#AAAAFF] w-5 h-5 rounded-full text-white text-center content-center roboto">{{ ward.num }}</span>
                </p>
                <img src="/images/arrow/arrow_right_black.svg" @click="selected_ward = ward" alt="arrow" loading="lazy" width="16" height="9" class="w-2 h-auto rotate-90 cursor-pointer" />
              </div>
            </div>
            <div class="flex max-lg:-order-1 max-lg:justify-end max-lg:w-full">
              <div class="w-[44px] aspect-square content-center bg-gradient-to-br from-[#9999EE] to-[#E2A1C4]">
                <img src="/images/icon_panel_icon.svg" alt="icon" loading="lazy" width="22" height="22" class="w-[22px] h-auto mx-auto" />
              </div>
              <div class="w-[44px] aspect-square content-center bg-white">
                <img src="/images/icon-open-menu.svg" alt="list" loading="lazy" width="22" height="22" class="w-[22px] h-auto mx-auto" />
              </div>
            </div>
          </div>
          <div class="mt-5 max-lg:mt-3">
            <div class="w-full bg-[#AAAAFF] px-5 py-1 flex items-center justify-start gap-[5px]">
              <h4 class="text-white text-sm">{{ selected_ward.name }}</h4>
              <p class="text-[13px] text-center w-5 h-5 rounded-full bg-white content-center">{{ selected_ward.num }}</p>
            </div>
            <div class="grid gap-5 grid-cols-2 max-lg:grid-cols-1 gap-x-10 gap-y-[30px] mt-5 max-lg:mt-3 max-lg:gap-y-3">
              <div v-for="i of 4" :key="i" class="flex py-5 pl-5 pr-4 bg-white shadow-lg gap-[15px] relative max-lg:pt-0.5 max-lg:pb-[25px] max-lg:pl-0.5 max-lg:pr-2.5 max-lg:gap-3">
                <img src="/images/studio-detail-ward-banner.webp" alt="studio ward banner" loading="lazy" decoding="async" width="200" height="200" class="w-[200px] h-auto max-lg:w-[98px] max-lg:h-[107px]">
                <div class="flex flex-col justify-between max-lg:block">
                  <h5 class="w-full text-center font-semibold mt-1">WeArt 銀座</h5>
                  <div class="flex gap-2 mt-5 max-lg:mt-1">
                    <img src="/images/icon_place.svg" width="14" height="20" alt="住所アイコン" loading="lazy" class="w-[14px] h-[20px]" />
                    <p class="text-xs">東京都中央区銀座<span class="max-lg:hidden">1丁目8−19キラリト銀座 6F</span></p>
                  </div>
                  <div class="flex gap-2 max-lg:mt-1.5">
                    <img src="/images/train.svg" width="14" height="16" alt="電車アイコン" loading="lazy" class="w-[14px] h-[16px]" />
                    <p class="text-xs">東京メトロ「銀座一丁目駅」<span class="max-lg:hidden">9番出口より</span>徒歩1分</p>
                  </div>
                  <button class="block w-full bg-black text-white text-sm font-semibold py-[10px] mt-8 relative max-lg:absolute max-lg:p-0 max-lg:w-[30px] max-lg:h-[30px] max-lg:bottom-2.5 max-lg:right-2.5"><span class="max-lg:hidden">詳しく見る</span>
                    <img src="/images/arrow/arrow-down-white.svg" alt="arrow" loading="lazy" width="16" height="9" class="w-4 h-auto absolute top-4 right-3 max-lg:static max-lg:mx-auto" />
                  </button>
                  <div class="absolute lg:hidden flex items-center justify-center gap-1 bottom-[5px] left-[5px] *:px-2 *:bg-[#EEEEEF] *:text-[9px] *:rounded-full">
                    <span>音楽</span>
                    <span>茶道</span>
                    <span>会議室</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[30px] max-lg:hidden">
            <div class="w-full bg-[#AAAAFF] px-5 py-1 flex items-center justify-start gap-[5px]">
              <h4 class="text-white text-sm">{{ selected_ward.name }}</h4>
              <p class="text-[13px] text-center w-5 h-5 rounded-full bg-white content-center">{{ selected_ward.num }}</p>
            </div>
            <div class="grid gap-5 grid-cols-2 max-lg:grid-cols-1 gap-x-10 gap-y-[30px] mt-5">
              <div v-for="i of 2" :key="i" class="flex py-5 pl-5 pr-4 bg-white shadow-lg gap-[15px]">
                <img src="/images/studio-detail-ward-banner.webp" alt="studio ward banner" loading="lazy" decoding="async" width="200" height="200" class="w-[200px] h-auto">
                <div class="flex flex-col justify-between">
                  <h5 class="w-full text-center font-semibold mt-1">WeArt 銀座</h5>
                  <div class="flex gap-2 mt-5">
                    <img src="/images/icon_place.svg" width="14" height="20" alt="住所アイコン" loading="lazy" class="w-[14px] h-[20px]" />
                    <p class="text-xs">東京都中央区銀座1丁目8−19キラリト銀座 6F</p>
                  </div>
                  <div class="flex gap-2">
                    <img src="/images/train.svg" width="14" height="16" alt="電車アイコン" loading="lazy" class="w-[14px] h-[16px]" />
                    <p class="text-xs">東京メトロ「銀座一丁目駅」9番出口より徒歩1分</p>
                  </div>
                  <button class="block w-full bg-black text-white text-sm font-semibold py-[10px] mt-8 relative"><span>詳しく見る</span>
                    <img src="/images/arrow/arrow-down-white.svg" alt="arrow" loading="lazy" width="16" height="9" class="w-4 h-auto absolute top-4 right-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const wards = [
  { name: "千代田区", num: 3 },
  { name: "中央区", num: 3 },
  { name: "港区", num: 3 },
  { name: "新宿区", num: 3 },
  { name: "文京区", num: 3 },
  { name: "台東区", num: 3 },
  { name: "墨田区", num: 3 },
  { name: "江東区", num: 3 },
  { name: "品川区", num: 3 },
  { name: "目黒区", num: 3 },
]
const selected_ward = ref(wards[0]);
</script>