<script setup lang="ts">
defineProps({
  cards: {
    type: Array as PropType<
      Array<{
        posturl?: string;
        sns?: string;
        like_count?: number;
        comment_count?: number;
        share_count?: number;
        member_name?: string;
        sns_profile_image_url?: string;
        photo_url?: string;
        class?: string;
        time?: string;
        text?: string;
      }>
    >,
    default: () => [],
  },
});
</script>
<template>
  <div class="bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] pt-[19px] pb-0 relative z-10 lg:shadow-md lg:min-h-[500px] lg:mt-[280px] max-lg:pb-4">
    <div class="hidden lg:block lg:w-[880px] lg:absolute lg:-top-[280px] lg:left-1/2 lg:-translate-x-1/2 lg:z-[-1]">
      <picture>
        <source media="(min-width: 1000px)" srcset="/images/voice-user-banner-pc.webp 1x, /images/voice-user-banner-pc.webp 2x"
          type="image/avif" />
        <img class="hidden lg:inline rounded-2xl" src="#" width="1760" height="920" alt="喜びの声" loading="lazy" />
      </picture>
    </div>

    <div class="mt-0">
      <div id="user-voice-slider" class="max-w-375 lg:max-w-[800px] mx-auto relative">
        <Swiper :modules="[SwiperPagination, SwiperNavigation]" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" :loop="true"
        :breakpoints="{
        320: {
          slidesPerView: 1.4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }">
          <SwiperSlide v-for="(voice, index) in cards" :key="index" class="flex pb-5 max-lg:max-w-60">
            <nuxt-link :to="voice.posturl || '/'">
              <div v-if="voice.sns === 'facebook'"
                class="!w-60 slider-item-container bg-white rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
                <div class="flex items-end gap-5 p-[8px_0_0_8px]">
                  <div
                    class="relative after:absolute after:right-[-8px] after:block after:bottom-[-8px] after:w-[30px] after:h-[30px] after:bg-[url('/images/facebook-icon.svg')] after:bg-cover after:rounded-full">
                    <img :src="voice.sns_profile_image_url" width="56" height="56" :alt="voice.member_name"
                      class="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div class="flex items-end gap-2.5">
                      <h3 class="text-lg leading-none font-semibold">
                        {{ voice.member_name }}
                      </h3>
                      <span class="text-[9px] font-light">{{
                        voice.time
                      }}</span>
                    </div>
                    <span
                      class="inline-block text-center bg-[#ddd] rounded-full mt-2.5 p-[3px_8px] text-[12px] text-[#888] font-semibold leading-none">
                      {{ voice.class }}
                    </span>
                  </div>
                </div>
                <p class="text-[10px] px-2.5 mt-[21px] leading-[1.8] line-height-crop-[1.8]">
                  {{ voice.text }}
                </p>
                <div class="mt-[6px]">
                  <img :src="voice.photo_url" width="480" height="300" alt="voice" role="presentation" loading="lazy"
                    decoding="async" />
                </div>
                <div
                  class="flex items-center justify-between p-[7px_10px_5px_10px] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-20px)] after:h-[1px] after:bg-[#ddd]">
                  <div class="flex items-center gap-[5px]">
                    <div class="w-11">
                      <img src="/images/fb-icons.svg" width="44" height="16" alt="voice" role="presentation"
                        loading="lazy" />
                    </div>
                    <p class="text-[9px] text-[#666]">{{ voice.like_count }}</p>
                  </div>
                  <div class="flex">
                    <p class="text-[8px] text-[#666]">
                      コメント{{ voice.comment_count }}件
                    </p>
                    <p class="text-[8px] text-[#666] ml-1">
                      シェア{{ voice.share_count }}件
                    </p>
                  </div>
                </div>
                <div class="flex justify-between p-[7px_10px_8px_10px]">
                  <div
                    class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[15px] before:h-[14px] before:bg-[url('/images/thumb-line.svg')] before:bg-center before:bg-cover">
                    いいね!
                  </div>
                  <div
                    class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[12px] before:h-[11px] before:bg-[url('/images/message-line.svg')] before:bg-center before:bg-cover">
                    コメントする
                  </div>
                  <div
                    class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[14px] before:h-[14px] before:bg-[url('/images/back-line.svg')] before:bg-center before:bg-cover">
                    シェア
                  </div>
                </div>
              </div>
              <div v-else-if="voice.sns === 'instagram'"
                class="!w-60 slider-item-container bg-white rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
                <div class="flex items-end gap-5 p-[8px_0_0_8px]">
                  <div
                    class="relative after:absolute after:right-[-8px] after:block after:bottom-[-8px] after:w-[30px] after:h-[30px] after:bg-[url('/images/instagram-icon.webp')] after:bg-cover after:rounded-full">
                    <img :src="voice.sns_profile_image_url" width="56" height="56" :alt="voice.member_name"
                      class="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h3 class="text-lg leading-none font-semibold">
                      {{ voice.member_name }}
                    </h3>
                    <span
                      class="inline-block text-center bg-[#ddd] rounded-full mt-2.5 p-[3px_8px] text-[12px] text-[#888] font-semibold leading-none">
                      {{ voice.class }}
                    </span>
                  </div>
                </div>
                <div class="mt-[22px]">
                  <img :src="voice.photo_url" width="480" height="300" alt="" role="presentation" loading="lazy"
                    decoding="async" />
                </div>
                <div class="mt-2.5 px-2.5 flex justify-between">
                  <div class="flex gap-2.5">
                    <div>
                      <img src="/images/hard-grey-line.svg" width="18" height="15" alt="" role="presentation"
                        decoding="async" />
                    </div>
                    <div>
                      <img src="/images/message-circle.svg" width="16" height="16" alt="" role="presentation"
                        decoding="async" />
                    </div>
                    <div>
                      <img src="/images/message-send.svg" width="18" height="15" alt="" role="presentation"
                        decoding="async" />
                    </div>
                  </div>
                  <div>
                    <img src="/images/recomend-line.svg" width="12" height="14" alt="" role="presentation"
                      decoding="async" />
                  </div>
                </div>
                <div class="mt-2 px-2.5">
                  <p class="text-[10px]">
                    <span class="font-semibold">Sample、その他</span>が「いいね!」しました
                  </p>
                  <p class="text-[10px] mt-2 leading-[1.8] line-height-crop-[1.8]">
                    {{ voice.text }}
                  </p>
                  <span class="text-[9px] mt-2.5 font-light">{{
                    voice.time
                  }}</span>
                </div>
              </div>
              <div v-else-if="voice.sns === 'X'"
                class="!w-60 slider-item-container bg-white rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
                <div class="flex items-end gap-5 p-[8px_0_0_8px]">
                  <div
                    class="relative after:absolute after:right-[-8px] after:block after:bottom-[-8px] after:w-[30px] after:h-[30px] after:bg-[url('/images/x-icon.webp')] after:bg-cover after:rounded-full">
                    <img :src="voice.sns_profile_image_url" width="56" height="56" :alt="voice.member_name"
                      class="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div class="flex items-end gap-2.5">
                      <h3 class="text-lg leading-none font-semibold">
                        {{ voice.member_name }}
                      </h3>
                      <span class="text-[9px] font-light">{{
                        voice.time
                      }}</span>
                    </div>
                    <span
                      class="inline-block text-center bg-[#ddd] rounded-full mt-2.5 p-[3px_8px] text-[12px] text-[#888] font-semibold leading-none">
                      {{ voice.class }}
                    </span>
                  </div>
                </div>
                <p class="text-[10px] px-2.5 mt-[22px] leading-[1.8] line-height-crop-[1.8]">
                  {{ voice.text }}
                </p>
                <div class="m-[12px_10px_0_10px] rounded-[10px] border border-solid border-[#ddd] overflow-hidden">
                  <img :src="voice.photo_url" width="480" height="300" alt="" role="presentation" loading="lazy"
                    decoding="async" />
                </div>
                <div class="mt-2 p-[0_10px_6px_10px]">
                  <div class="flex items-center justify-between gap-6">
                    <p
                      class="text-[9px] text-[#666] ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/message-ellipse.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10">
                      {{ voice.like_count }}
                    </p>
                    <p
                      class="text-[9px] text-[#666] ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/retweet.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10">
                      {{ voice.like_count }}
                    </p>
                    <p
                      class="text-[9px] text-[#666] share ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/hard-grey-line.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10">
                      {{ voice.like_count }}
                    </p>
                    <div class="">
                      <img src="/images/link-line.svg" width="15" height="15" alt="" role="presentation" loading="lazy"
                        decoding="async" />
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <button aria-label="prev" class="swiper-button-prev !w-[50px] !h-[50px] !-left-[50px] -translate-x-full max-lg:!-left-0 max-lg:translate-x-0">
          <img src="/images/arrow/arrow-left.svg" width="30" height="30" alt="" role="presentation" loading="lazy" />
        </button>
        <button aria-label="next" class="swiper-button-next !w-[50px] !h-[50px] !-right-[50px] translate-x-full max-lg:!-right-0 max-lg:translate-x-0">
          <img src="/images/arrow/arrow-right.svg" width="30" height="30" alt="" role="presentation" loading="lazy" />
        </button>
      </div>
    </div>
    <ContentVoiceUserDetail />
  </div>
</template>

<style lang="scss" scoped>
/* スライド全体のスタイル調整 */
.swiper-slide {
  opacity: 0.5;
  /* デフォルトでは全てのスライドを半透明に設定 */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  /* なめらかな変化 */
  padding-top: 20px;
}

@media screen and (min-width: 1000px) {
  .swiper-slide {
    padding-top: 0;
    opacity: 1;
    /* デフォルトでは全てのスライドを半透明に設定 */
  }
}

/* アクティブなスライドのスタイル */
.swiper-slide-active {
  opacity: 1;
  /* アクティブなスライドは不透明 */
  z-index: 1;
  /* 他のスライドより前面に */
  padding-top: 10px;

  .slider-item-container {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .slider-item-container::after {
    content: "";
    width: 100%;
    height: 23px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url('/images/user-voice-active.webp');
    background-size: cover;
  }
}

.swiper-button-prev,
.swiper-button-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #45454580;

  &::after {
    display: none;
  }
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
</style>
