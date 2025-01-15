<script setup lang="ts">
interface musicSchoolInfo {
  thumbnail: string;
  date: string;
  headline: string;
  description: string;
  url: string;
}

const props = defineProps<{
  musicSchoolInfos: musicSchoolInfo[];
}>();


</script>
<template>
  <!-- 大人の音楽教室情報 -->
  <div class="pt-[62px]">
    <AtomSectionTitle
      en_title="BLOG"
      title="Z世代の音楽教室情報"
    />
    <!-- 「大人の音楽教室情報」のコンテンツ -->
    <div class="mt-4 overflow-x-hidden">
      <!-- 「大人の音楽教室情報」のアイキャッチ -->
      <div class="">
        <img srcset="
            /images/img_adult-music-school-catch_sp.avif    1x,
            /images/img_adult-music-school-catch_sp@2x.avif 2x
          " src="/images/img_adult-music-school-catch_sp@2x.avif" width="3840" height="480" alt="「大人の音楽教室情報」のアイキャッチ"
          loading="lazy" decoding="async" />
      </div>
      <!-- /「大人の音楽教室情報」のアイキャッチ -->

      <!-- 「大人の音楽教室情報」のカルーセル -->
      <div id="music-school-info-slider"
        class="max-w-[745px] mx-auto -mt-10 px-5 relative translate-x-2">
        <Swiper :slides-per-view="1.4" :space-between="24" :modules="[SwiperNavigation]" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" class="w-full !static !overflow-visible lg:!overflow-clip">
          <SwiperSlide v-for="(panel, index) in musicSchoolInfos" :key="index">
            <div class="w-[235px] shadow-lg mb-10">
              <div class="h-[181px] w-full">
                <img :src="panel.thumbnail" width="54" height="77" alt="" role="presentation" loading="lazy"
                  class="w-full h-full object-cover" decoding="async" />
              </div>
              <div
                class="p-[10px] bg-white relative before:absolute before:-top-[11px] before:left-[1px] before:-translate-y-1/2 before:w-[235px] before:h-6 before:bg-white before:[clip-path:polygon(100%_0,0%_100%,100%_100%)]">
                <div class="text-[10px] text-[#666666] font-light">{{ panel.date }}</div>
                <h3 class="text-[13px] font-semibold mt-[11px] line-height-crop-[2.3]">{{ panel.headline }}</h3>
                <p class="text-xs font-light mt-[14px] line-clamp-3">{{ panel.description }}</p>

                <div class="mt-5">
                  <nuxt-link :href="panel.url"
                    class="block w-[215px] h-auto text-sm font-bold leading-[14px] text-center border-2 border-[#6688DD] rounded-full text-[#6688DD] bg-white mx-auto py-[9px] relative after:bg-[url('/images/arrow-bottom-blue.svg')] after:bg-no-repeat after:bg-contain after:align-middle after:w-3 after:h-2 after:inline-block after:absolute after:right-3 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2 after:-rotate-90"
                    @click="$emit('click', panel.headline)">この記事を見る
                  </nuxt-link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <nuxt-link href="/"
        class="flex items-center gap-2.5 justify-center w-[300px] h-auto font-bold text-[#6688DD] text-center border-2 rounded-full border-[#6688DD] bg-white mx-auto py-3"
        @click="$emit('view_all')">
        <img src="/images/plus-button-blue.svg" width="16" height="16" alt="more" loading="lazy"
          decoding="async" class="w-4 h-4" />
        <span>すべての記事を見る</span>
      </nuxt-link>
      <nuxt-link href="/" class="flex items-center gap-2.5 justify-center w-max mx-auto my-12">
        <img src="/images/arrow/arrow-black-left.svg" width="30" height="15" alt="more" loading="lazy"decoding="async" class="w-[30px]" />
        <span class="text-sm font-bold">TOPページ</span>
      </nuxt-link>
    </div>
  </div>
</template>