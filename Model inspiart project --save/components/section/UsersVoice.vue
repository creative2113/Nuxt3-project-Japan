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
    <div class="mt-[20px] -mb-[67px]">
      <div id="user-voice-slider" class="max-w-375 mx-auto relative">
        <Swiper :modules="[SwiperPagination, SwiperNavigation]" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" :loop="true"
        :centered-slides="true"
        :slidesPerView="1.6"
        :spaceBetween="-20"
        >
          <SwiperSlide v-for="(voice, index) in cards" :key="index" class="flex pb-5 max-w-60">
            <nuxt-link :to="voice.posturl || '/'" class="block relative w-[240px]">
              <div v-if="voice.sns === 'facebook'"
                class="!w-60 slider-item-container bg-white rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
                <div class="flex items-center gap-5 p-[8px_0_0_8px]">
                  <div class="flex">
                    <img src="/images/facebook-icon.svg" width="30" height="30" alt="facebook"
                      class="w-[30px] h-[30px] rounded-full -mr-1" loading="lazy" decoding="async" />
                    <img :src="voice.sns_profile_image_url" width="30" height="30" :alt="voice.member_name"
                      class="w-[30px] h-[30px] rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h3 class="text-[13px] font-semibold leading-none">
                      {{ voice.member_name }}
                    </h3>
                    <p
                      class="text-[9px] text-[#666666] font-semibold">
                      {{ voice.time }}
                    </p>
                  </div>
                </div>
                <p class="text-[10px] px-2.5 mt-2 leading-[1.8] line-height-crop-[1.8]">
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
                <div class="flex items-center gap-5 p-[8px_0_0_8px]">
                  <div class="flex">
                    <img src="/images/instagram-icon.webp" width="30" height="30" alt="facebook"
                      class="w-[30px] h-[30px] rounded-full -mr-1" loading="lazy" decoding="async" />
                    <img :src="voice.sns_profile_image_url" width="30" height="30" :alt="voice.member_name"
                      class="w-[30px] h-[30px] rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h3 class="text-[13px] font-semibold leading-none">
                      {{ voice.member_name }}
                    </h3>
                    <p
                      class="text-[9px] text-[#666666] font-semibold">
                      {{ voice.time }}
                    </p>
                  </div>
                </div>
                <div class="mt-2">
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
                <div class="flex items-center gap-5 p-[8px_0_0_8px]">
                  <div class="flex">
                    <img src="/images/x-icon.webp" width="30" height="30" alt="facebook"
                      class="w-[30px] h-[30px] rounded-full -mr-1" loading="lazy" decoding="async" />
                    <img :src="voice.sns_profile_image_url" width="30" height="30" :alt="voice.member_name"
                      class="w-[30px] h-[30px] rounded-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h3 class="text-[13px] font-semibold leading-none">
                      {{ voice.member_name }}
                    </h3>
                    <p
                      class="text-[9px] text-[#666666] font-semibold">
                      {{ voice.time }}
                    </p>
                  </div>
                </div>
                <p class="text-[10px] px-2.5 mt-2 leading-[1.8] line-height-crop-[1.8]">
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
        <button aria-label="prev" class="swiper-button-prev !w-[50px] !h-[50px] !-left-0 translate-x-0">
          <img src="/images/arrow/arrow-left.svg" width="30" height="30" alt="" loading="lazy" decoding="async" />
        </button>
        <button aria-label="next" class="swiper-button-next !w-[50px] !h-[50px] !-right-0 translate-x-0">
          <img src="/images/arrow/arrow-right.svg" width="30" height="30" alt="" loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
    <OrganVoiceUserDetail />
</template>

<style scoped>
/* スライド全体のスタイル調整 */
.swiper-slide {
  opacity: 0.5;
  /* デフォルトでは全てのスライドを半透明に設定 */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  /* なめらかな変化 */
  padding-top: 67px;
}

/* アクティブなスライドのスタイル */
.swiper-slide-active {
  opacity: 1;
  /* アクティブなスライドは不透明 */
  z-index: 1;
  /* 他のスライドより前面に */
  padding-top: 10px;

}

.swiper-slide-active .slider-item-container {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.swiper-slide-active .slider-item-container::after {
  content: "";
  width: 100%;
  height: 23px;
  position: absolute;
  bottom: -23px;
  left: 0;
  background-image: url('/images/user-voice-active.webp');
  background-size: cover;
}

.swiper-button-prev,
.swiper-button-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #454545CC;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
</style>
