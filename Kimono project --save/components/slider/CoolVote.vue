<script setup lang="ts">
defineProps({
  cards: {
    type: Array as PropType<
      Array<{
        score: number;
        score_text: string;
        title: string;
        age?: string;
        sns_profile_image_url?: string;
        photo_url?: string;
        sns?: string;
        sns_icon?: string;
        member_name?: string;
        member_age?: string;
        class?: string;
        text?: string;
        like_count?: number;
        comment_count?: number;
        share_count?: number;
        time?: string;
      }>
    >,
    default: () => [],
  },
});
</script>
<template>
  <Swiper
    :modules="[SwiperPagination, SwiperNavigation]"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :effect="'creative'" :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-100%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
    :centered-slides="true"
    :slides-per-view="1.59"
    :space-between="-40"
    :loop="true"
    :breakpoints="{
      1024: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    }"
  >
    <SwiperSlide
      v-for="(vote, index) in cards"
      :key="index"
      class="flex pb-[23px] max-lg:max-w-60 pt-32 max-lg:brightness-75"
    >
      <div
        class="w-[294px] pt-[1px] relative slider-item-container bg-white rounded-lg pb-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
      >
        <div
          class="flex items-center justify-center flex-col w-[120px] h-[120px] bg-[#EEB0B0] rounded-full border-[10px] border-[#DDDDDD] mx-auto -mt-20"
        >
          <p
            class="text-white text-[40px] font-bold roboto text-center italic leading-10"
          >
            108
          </p>
          <hr class="border-t border-t-white w-12" />
          <span
            class="text-center text-black text-xs mt-2"
            v-html="vote.score_text"
          />
        </div>
        <div class="flex items-end justify-center text-black gap-3 mt-2.5 mb-3">
          <h5 v-html="vote.title" class="text-2xl" />
          <p v-html="vote.age" class="text-sm" />
        </div>
        <img
          :src="vote.sns_profile_image_url"
          width="290"
          height="200"
          alt=""
          role="presentation"
          loading="lazy"
          class="w-[290px] h-auto mx-auto max-lg:270px"
          decoding="async"
        />
        <div
          class="flex w-[240px] h-[210px] mx-auto -mt-8 relative bg-white items-start flex-col justify-between gap-5 py-2 shadow-md rounded-[10px] p-2"
        >
          <div class="flex items-center gap-5 py-2">
            <div
              class="relative">
              <img
                :src="vote.photo_url"
                width="56"
                height="56"
                :alt="vote.member_name"
                class="w-14 h-14 rounded-full"
                loading="lazy"
                decoding="async"
              />
              <img
                :src="vote.sns_icon"
                width="30"
                height="30"
                :alt="vote.sns"
                class="absolute right-[-8px] block bottom-[-8px] w-[30px] h-[30px] bg-cover rounded-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <div class="flex items-end gap-2.5">
                <h3 class="text-lg leading-none font-semibold">
                  {{ vote.member_name }}
                </h3>
                <span class="text-[9px] font-light">{{ vote.time }}</span>
              </div>
              <span
                class="inline-block text-center bg-[#ddd] rounded-full mt-2.5 p-[3px_8px] text-[12px] text-[#888] font-semibold leading-none"
              >
                {{ vote.class }}
              </span>
            </div>
          </div>
          <div
            v-if="vote.sns === 'facebook'"
            class="flex flex-col justify-center"
          >
            <p v-html="vote.text" class="text-[10px]" />
            <div class="w-full">
              <div
                class="flex items-center justify-between py-1 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1px] after:bg-[#ddd]"
              >
                <div class="flex items-center gap-[5px]">
                  <div class="w-11">
                    <img
                      src="/images/fb-icons.svg"
                      width="44"
                      height="16"
                      alt=""
                      role="presentation"
                      loading="lazy"
                    />
                  </div>
                  <p class="text-[9px] text-[#666]">{{ vote.like_count }}</p>
                </div>
                <div class="flex">
                  <p class="text-[8px] text-[#666]">
                    コメント{{ vote.comment_count }}件
                  </p>
                  <p class="text-[8px] text-[#666] ml-1">
                    シェア{{ vote.share_count }}件
                  </p>
                </div>
              </div>
              <div class="flex justify-between py-1">
                <div
                  class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[15px] before:h-[14px] before:bg-[url('/images/thumb-line.svg')] before:bg-center before:bg-cover"
                >
                  いいね!
                </div>
                <div
                  class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[12px] before:h-[11px] before:bg-[url('/images/message-line.svg')] before:bg-center before:bg-cover"
                >
                  コメントする
                </div>
                <div
                  class="text-[9px] text-[#666] font-light ml-[18px] relative before:absolute before:top-1/2 before:-left-[18px] before:-translate-y-1/2 before:w-[14px] before:h-[14px] before:bg-[url('/images/back-line.svg')] before:bg-center before:bg-cover"
                >
                  シェア
                </div>
              </div>
            </div>
          </div>
          <div
            v-else-if="vote.sns === 'instagram'"
            class="flex flex-col justify-center"
          >
            <div class="flex justify-between">
              <div class="flex gap-2.5">
                <div>
                  <img
                    src="/images/hard-line.svg"
                    width="18"
                    height="15"
                    alt=""
                    role="presentation"
                    decoding="async"
                  />
                </div>
                <div>
                  <img
                    src="/images/message-circle.svg"
                    width="16"
                    height="16"
                    alt=""
                    role="presentation"
                    decoding="async"
                  />
                </div>
                <div>
                  <img
                    src="/images/message-send.svg"
                    width="18"
                    height="15"
                    alt=""
                    role="presentation"
                    decoding="async"
                  />
                </div>
              </div>
              <div>
                <img
                  src="/images/recomend-line.svg"
                  width="12"
                  height="14"
                  alt=""
                  role="presentation"
                  decoding="async"
                />
              </div>
            </div>
            <p v-html="vote.text" class="text-[10px] mt-2" />
            <p v-html="vote.time" class="text-[9px] mt-1" />
          </div>
          <div v-else-if="vote.sns === 'x'" class="w-full">
            <p v-html="vote.text" class="text-[10px]" />
            <div class="flex items-center justify-between gap-6 mt-6">
              <p
                class="text-[9px] text-[#666] ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/message-ellipse.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10"
              >
                {{ vote.like_count }}
              </p>
              <p
                class="text-[9px] text-[#666] ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/retweet.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10"
              >
                {{ vote.like_count }}
              </p>
              <p
                class="text-[9px] text-[#666] share ml-4 relative before:absolute before:top-0 before:left-[-18px] before:w-[15px] before:h-[15px] before:bg-[url('/images/hard-grey-line.svg')] before:bg-center before:bg-contain before:bg-no-repeat before:transform before:translate-y-n10"
              >
                {{ vote.like_count }}
              </p>
              <div class="">
                <img
                  src="/images/link-line.svg"
                  width="15"
                  height="15"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <button aria-label="prev" class="lg:!hidden swiper-button-prev !w-[50px] !h-[50px] after:hidden !left-0 bg-[url('/images/cool-vote-arrow.svg')] bg-no-repeat bg-[length:20px] bg-center bg-[#00000022] origin-center rotate-180"></button>
    <button aria-label="next" class="lg:!hidden swiper-button-next !w-[50px] !h-[50px] after:hidden !right-0 bg-[url('/images/cool-vote-arrow.svg')] bg-no-repeat bg-[length:20px] bg-center bg-[#00000044]"></button>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper-slide-active {
  padding-top: 88px;
  filter: brightness(100%);
  position: relative;
  z-index: 10;
}
</style>
