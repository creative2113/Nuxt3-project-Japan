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
  <div class="mt-4 lg:mt-5 pt-[50px] pb-10 lg:py-20 bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB]">
    <HookBracketsTitle>
      <h3 class="lg:py-2">大人の音楽教室情報</h3>
    </HookBracketsTitle>

    <!-- 「大人の音楽教室情報」のコンテンツ -->
    <div class="mt-4 lg:mt-[30px] overflow-x-hidden">
      <!-- 「大人の音楽教室情報」のアイキャッチ -->
      <div class="">
        <picture>
          <source
            media="(max-width: 999px)"
            srcset="
              /images/img_adult-music-school-catch_sp@2x.avif 1x,
              /images/img_adult-music-school-catch_sp@2x.avif 2x
            "
            type="image/avif"
          />
          <img
            srcset="
              /images/img_adult-music-school-catch_pc.avif    1x,
              /images/img_adult-music-school-catch_pc@2x.avif 2x
            "
            src="/images/img_adult-music-school-catch_pc@2x.avif"
            width="3840"
            height="480"
            alt="「大人の音楽教室情報」のアイキャッチ"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <!-- /「大人の音楽教室情報」のアイキャッチ -->

      <!-- 「大人の音楽教室情報」のカルーセル -->
      <div
        id="music-school-info-slider"
        class="max-w-[745px] mx-auto -mt-10 px-5 lg:px-0 lg:-mt-[60px] relative translate-x-2 lg:-translate-x-[3px]"
      >
        <Swiper
          :slides-per-view="1.5"
          :space-between="20"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :breakpoints="{
            640: {
              slidesPerView: 3,
            },
          }"
          class="w-full !static !overflow-visible lg:!overflow-clip"
        >
          <SwiperSlide
            v-for="(panel, index) in musicSchoolInfos"
            :key="index"
            class="max-lg:!w-[235px]"
          >
            <div class="w-[235px] shadow-lg mb-10">
              <div class="h-[181px] w-full">
                <img
                  :src="panel.thumbnail"
                  width="54"
                  height="77"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  class="w-full h-full object-cover"
                  decoding="async"
                />
              </div>
              <div class="p-[10px] bg-white relative before:absolute before:-top-[11px] before:left-[1px] before:-translate-y-1/2 before:w-[235px] before:h-6 before:bg-white before:[clip-path:polygon(100%_0,0%_100%,100%_100%)]">
                <div class="text-[10px] text-[#666666] font-light">{{ panel.date }}</div>
                <h3 class="text-[13px] font-semibold mt-[11px] line-height-crop-[2.3]">{{ panel.headline }}</h3>
                <p class="text-xs font-light mt-[14px] line-clamp-3">{{ panel.description }}</p>

                <div class="mt-5 lg:mt-[19px]">
                  <a
                    :href="panel.url"
                    class="block w-[215px] h-auto text-sm leading-[14px] text-center border border-black bg-white mx-auto py-[9px] relative after:bg-[url(/images/arrow/arrow_right_black.svg)] after:bg-no-repeat after:bg-contain after:align-middle after:w-[6px] after:h-3 after:inline-block after:absolute after:right-3 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2"
                    @click="$emit('click',panel.headline)"
                    >この記事を見る
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- /「大人の音楽教室情報」のカルーセル -->
      <a
        href="/"
        class="block w-[335px] lg:w-[500px] lg:py-5 h-auto text-sm leading-[14px] text-center border border-black bg-white mx-auto py-[17px]  relative after:bg-[url(/images/arrow/arrow_right_black.svg)] after:bg-no-repeat after:bg-contain after:align-middle after:w-[6px] after:h-3 after:inline-block after:absolute after:right-3 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2"
        @click="$emit('view_all')"
        ><span class="text-[20px] tracking-[2px] text-center">すべての記事を見る</span>
      </a>
    </div>
    <!-- /「大人の音楽教室情報」のコンテンツ -->
  </div>
  <!-- /大人の音楽教室情報 -->
</template>