<script setup lang="ts">
/* na ra uno スライダー */
interface Tag {
  name: string;
}

interface PopularArticle {
  thumbnail: string;
  body?: string;
  author: string;
  author_eng: string;
  title: string;
  info: string;
  tags?: Tag[];
  url:string;
}

type Article = {
  thumbnail: string;
  thumbnail_sp: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  url:string;
};

type Player = { image: string; image_sp: string; playerName: string; read: string; attr: string; instrument: string; url:string;};

const props = defineProps<{
  mainArticle:PopularArticle;
  subArticle1:PopularArticle;
  subArticle2:PopularArticle;
  articles: Article[];
  players: Player[];
}>();

</script>
<template>
  <!-- na ra uno -->
  <div class="relative mt-[10px]">
    <!-- na-ra uno 背景文字 -->
    <div
      class="flex flex-col flex-wrap justify-between w-full max-w-[800px] absolute top-0 left-1/2 -translate-x-1/2 -z-0 opacity-80"
    >
      <div class="mt-11 order-2">
        <img
          src="/images/txt_na-ra-white.svg"
          width="537"
          height="196"
          alt=""
          role="presentation"
          loading="lazy"
          class="w-[276px]"
          decoding="async"
        />
      </div>
      <div class="order-1">
        <img
          src="/images/txt_uno-white.svg"
          width="349"
          height="121"
          alt=""
          role="presentation"
          loading="lazy"
          class="w-[180px] ml-auto"
          decoding="async"
        />
      </div>
      <div class="mt-[76px] order-3">
        <img
          src="/images/icon_na-ra-uno-white.svg"
          width="178"
          height="116"
          alt=""
          role="presentation"
          loading="lazy"
          class="w-[92px] ml-auto"
          decoding="async"
        />
      </div>
    </div>
    <!-- /na-ra uno 背景文字 -->

    <!-- ナラウーノ 実際にナラってみた！ -->
    <div
      class="max-w-[800px] mx-auto px-5 pt-[50px] pb-[50px] bg-gradient-to-b from-[#9977FF44] to-[#8899FF44] relative z-10"
    >
      <h3>
        <picture>
          <source
            media="(max-width: 999px)"
            srcset="/images/txt_na-ra-uno-heading_sp.svg"
            type="image/svg+xml"
          />
          <img
            class="mx-auto"
            srcset="/images/txt_na-ra-uno-heading_pc.svg"
            width="370"
            height="91"
            alt="ナラウーノ 実際にナラってみた！"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </h3>

      <!-- na-ra-uno公式リポーターがArt&Designeにチャレンジ🎵 -->
      <div class="max-w-[560px] mx-auto">
        <p class="mt-9 font-semibold text-center tracking-wider">
          <span
            class="relative before:absolute before:w-[1px] before:h-[60px] before:bg-[#222222] before:-rotate-[19deg] before:right-full before:-top-1 before:-translate-x-[36px] after:absolute after:w-[1px] after:h-[60px] after:bg-[#222222] after:rotate-[19deg] after:left-full after:-top-1 after:translate-x-[26px]"
            >na-ra-uno公式リポーターが<br />Art&Designeにチャレンジ🎵</span
          >
        </p>

        <div class="mt-7">
          <!-- na-ra-unoメイン記事 -->
          <article>
            <!-- na-ra-unoメイン記事のサムネイル -->
            <div class="mr-5 ml-0 relative rounded-[20px] overflow-hidden">
              <div
                class="flex justify-end gap-1 w-full px-[6px] py-[10px] absolute top-0 left-0"
              >
                <span
                  v-for="tag in mainArticle.tags" :key="tag"
                  class="text-xs px-3 py-1 bg-[#EEEEEE] rounded-full shadow"
                  >{{ tag.name }}</span
                >
              </div>
              <img
                :src="mainArticle.thumbnail"
                width="1060"
                height="798"
                alt="レッスン体験記"
                loading="lazy"
                decoding="async"
              />
            </div>
            <!-- /na-ra-unoメイン記事のサムネイル -->

            <!-- na-ra-unoメイン記事のコンテンツ -->
            <div class="ml-5 mr-0 -mt-[30px] rounded-[15px] bg-white shadow-md relative">
              <a
                :href="mainArticle.url"
                class="flex"
                @click="$emit('click')"
              >
                <!-- TODO: href属性 -->
                <div class="py-[14px] pl-4 pr-2">
                  <h4 class="text-lg leading-[26px] font-semibold ">
                    {{ mainArticle.title }}
                  </h4>
                  <p class="text-sm font-semibold tracking-widest mt-[14px] relative z-0">
                    {{ mainArticle.author }}
                    <span
                      class="text-xl w-[200px] text-[#DDDDDD] font-apple-chancery absolute -z-10 left-5 bottom-1"
                      >{{ mainArticle.author_eng }}</span
                    >
                  </p>

                  <p class="text-2xs text-[#666666] font-light tracking-[1px] mt-1">
                    {{ mainArticle.info }}
                  </p>
                </div>
                <div class="w-[100px] shrink-0 relative">
                  <img
                    :src="mainArticle.body"
                    width="336"
                    height="760"
                    alt=""
                    role="presentation"
                    loading="lazy"
                    class="w-[126.8px] max-w-none aspect-[336/760] object-contain absolute top-[50%] left-[55%] -translate-y-1/2 -translate-x-1/2 drop-shadow-lg"
                    decoding="async"
                  />
                </div>
                <div class="w-[28px] shrink-0 grid place-items-center">
                  <span
                    class="w-4 h-4 border-r-[2px] border-t-[2px] border-[#CCCCCC] rotate-45 -translate-x-1/3"
                  ></span>
                </div>
              </a>
            </div>
            <!-- /na-ra-unoメイン記事のコンテンツ -->
          </article>
          <!-- /na-ra-unoメイン記事-->

          <!-- na-ra-unoサブ記事群 -->
          <div class="flex items-start gap-9 mt-8 sm:mt-16 ml-0">
            <!-- na-ra-unoサブ記事 -->
            <article class="w-full mr-0 relative">
              <!-- na-ra-unoサブ記事の画像 -->
              <div class="w-full aspect-[230/409] rounded-[10px] overflow-hidden">
                <img
                  :src="subArticle1.thumbnail"
                  width="460"
                  height="818"
                  alt="レッスン体験記"
                  loading="lazy"
                  class="w-full h-full object-cover"
                  decoding="async"
                />
              </div>
              <!-- /na-ra-unoサブ記事の画像 -->
              <!-- na-ra-unoサブ記事のコンテンツ -->
              <div class="absolute top-[30%] right-2 text-[42px] text-white tracking-[-12px]">
                体験記
              </div>
              <div
                class="w-full py-2 px-2 bg-white absolute bottom-[15px] left-0 translate-x-5 rounded-[15px] shadow-md h-[110px]"
              >
                <h4 class="text-sm font-semibold line-clamp-2 tracking-[1.4px] px-1 ">
                  大人の楽器サックスに憧れて。<span class="hidden">いきなり「ルパン三世’79」に挑戦？</span>
                </h4>
                <p class="text-2xs font-semibold tracking-widest mt-[13px] relative z-0 ml-1">
                  {{ subArticle1.author }}<span
                    class="text-xs text-[#DDDDDD] font-apple-chancery absolute -z-10 left-0 bottom-1"
                    >{{ subArticle1.author_eng }}</span
                  >
                </p>
                <p class="text-2xs text-[#666666] font-light leading-none mt-2 tracking-[-0.6px] ml-1">
                  {{ subArticle1.info }}
                </p>
              </div>
              <!-- /na-ra-unoサブ記事のコンテンツ -->
            </article>
            <!-- /na-ra-unoサブ記事 -->

            <!-- na-ra-unoサブ記事 -->
            <article class="w-full mr-[19px] mt-[31px] relative -translate-x-[1px]">
              <!-- na-ra-unoサブ記事の画像 -->
              <div class="w-full aspect-[230/409] rounded-[10px] overflow-hidden">
                <img
                  :src="subArticle2.thumbnail"
                  width="460"
                  height="818"
                  alt="レッスン体験記"
                  loading="lazy"
                  class="w-full h-full object-cover"
                  decoding="async"
                />
              </div>
              <!-- /na-ra-unoサブ記事の画像 -->
              <!-- na-ra-unoサブ記事のコンテンツ -->
              <div class="lg:hidden absolute top-[30%] right-2 text-[42px] text-white tracking-[-12px]">
                体験記
              </div>
              <div
                class="w-full py-[11px] px-2 bg-white absolute bottom-[15px] left-0 translate-x-5 rounded-[15px] shadow-md"
              >
                <h4 class="text-sm font-semibold line-clamp-2 tracking-[1.4px] px-1 -translate-y-[4px]">
                  大人の楽器サックスに憧れて。<span class="hidden">いきなり「ルパン三世’79」に挑戦？</span>
                </h4>
                <p class="text-2xs font-semibold tracking-widest mt-1 relative z-0 ml-1 translate-y-[6px]">
                  {{ subArticle2.author }}<span
                    class="text-xs text-[#DDDDDD] font-apple-chancery absolute -z-10 left-0 bottom-1"
                    >{{ subArticle2.author_eng }}</span
                  >
                </p>
                <p class="text-2xs text-[#666666] font-light leading-none mt-2 tracking-[-0.6px] ml-1 translate-y-[3px]">
                  {{ subArticle2.info }}
                </p>
              </div>
              <!-- /na-ra-unoサブ記事のコンテンツ -->
            </article>
            <!-- /na-ra-unoサブ記事 -->
          </div>
          <!-- /na-ra-unoサブ記事群 -->

          <a
            href="/"
            class="block w-[335px] h-[50px] text-sm tracking-[2px] leading-[14px] pl-[114px] border border-black bg-white mt-[30px] mx-auto py-[18px] relative after:bg-[url(/images/arrow/arrow_right_black.svg)] after:bg-no-repeat after:bg-contain after:align-middle after:w-[32px] after:h-4 after:inline-block after:absolute after:right-3 after:top-1/2 after:translate-x-1/2 after:-translate-y-1/2"
            >もっと見る
          </a>
        </div>
      </div>
      <!-- /na-ra-uno公式リポーターがArt&Designeにチャレンジ🎵 -->

      <!-- Na-ra-uno 体験記 人気の記事 -->
      <div>
        <!-- 「Na-ra-uno 体験記 人気の記事」の見出し -->
        <div class="pt-[48px] pb-[30px] relative z-0">
          <img
            src="/images/icon_article-paper.svg"
            width="74"
            height="69"
            alt="アイコン"
            loading="lazy"
            class="w-[74px] absolute -z-10 top-[74px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
            decoding="async"
          />
          <h4 class="flex flex-col text-xl font-semibold text-center tracking-widest">
            <span class="text-[15px] block">Na-ra-uno 体験記</span>
            <span class="-translate-y-[5px]">人気の記事</span>
          </h4>
        </div>
        <!-- /「Na-ra-uno 体験記 人気の記事」の見出し -->

        <!-- 「Na-ra-uno 体験記 人気の記事」のコンテンツ -->
        <div class="-mt-[11px]">
          <!-- 「Na-ra-uno 体験記 人気の記事」のスライダー -->
          <div
            id="na-ra-uno-slider"
            class="max-w-[568px] mx-auto relative"
          >
            <Swiper
              :direction="'vertical'"
              :slides-per-view="3"
              :slides-per-group="3"
              :space-between="15"
              :modules="[SwiperNavigation, SwiperA11y]"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              class="w-full h-[420px] !static"
            >
              <SwiperSlide
                v-for="(article, index) in articles"
                :key="index"
                class="lg:pb-4"
              >
                <div class="flex h-full rounded-[15px] overflow-hidden shadow-lg">
                  <div class="w-[112px] flex-shrink-0">
                    <picture>
                      <source
                        media="(max-width: 999px)"
                        :srcset="article.thumbnail_sp" >
                      <img
                        :src="article.thumbnail"
                        width="176"
                        height="98"
                        alt=""
                        role="presentation"
                        loading="lazy"
                        class="w-full h-full object-cover"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div class="px-3 py-[14px] w-full bg-white">
                    <div class="flex justify-between">
                      <p class="text-2xs text-[#666666] font-light">{{ article.date }}</p>
                      <p class="text-2xs text-[#666666] font-light">{{ article.author }}</p>
                    </div>
                    <h5 class="text-xs font-semibold tracking-widest mt-2">
                      {{ article.title }}
                    </h5>
                    <p class="text-2xs font-light line-clamp-3 mt-2">{{ article.excerpt }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- /「Na-ra-uno 体験記 人気の記事」のスライダー -->
        </div>
        <!-- 「Na-ra-uno 体験記 人気の記事」のコンテンツ -->
      </div>
      <!-- /Na-ra-uno 体験記 人気の記事 -->

      <!-- Na-ra-uno 体験記 人気のプレイヤー -->
      <div>
        <!-- 「Na-ra-uno 体験記 人気のプレイヤーの見出し -->
        <div class="py-5 relative z-0 mt-6">
          <img
            src="/images/icon_player.svg"
            width="58"
            height="90"
            alt="アイコン"
            loading="lazy"
            class="w-[58px] absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
            decoding="async"
          />
          <h4 class="flex flex-col text-xl font-semibold text-center tracking-widest">
            <span class="text-[15px] block translate-y-[2px]">Na-ra-uno 体験記</span>
            <span>人気のプレイヤー</span>
          </h4>
        </div>
        <!-- /「Na-ra-uno 体験記 人気のプレイヤー」の見出し -->

        <!-- 「Na-ra-uno 体験記 人気のプレイヤー」のコンテンツ -->
        <div class="mt-[5px]">
          <!-- 「Na-ra-uno 体験記 人気のプレイヤー」のスライダー -->
          <div
            id="na-ra-uno-slider2"
            class="max-w-[568px] mx-auto relative"
          >
            <Swiper
              :direction="'vertical'"
              :slides-per-view="3"
              :slides-per-group="3"
              :space-between="15"
              :modules="[SwiperNavigation, SwiperA11y]"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }"
              class="w-full h-[300px] !static"
            >
              <SwiperSlide
                v-for="(playerCard, index) in players"
                :key="index"
                class="lg:pb-3"
              >
                <div
                  class="flex flex-row-reverse h-full rounded-[15px] overflow-hidden shadow-lg"
                >
                  <div class="w-full">
                    <picture>
                      <source
                        media="(max-width: 999px)"
                        :srcset="playerCard.image_sp" >
                      <img
                        :src="playerCard.image"
                        width="176"
                        height="145"
                        alt=""
                        role="presentation"
                        loading="lazy"
                        class="w-full h-full object-cover"
                        decoding="async"
                      />
                    </picture>
                  </div>
                  <div class="pt-6 pb-3 px-5 w-[160px] flex-shrink-0 bg-white">
                    <p class="font-semibold tracking-widest relative z-10">
                      <span
                        class="text-[18px] text-[#DDDDDD] font-apple-chancery font-normal text-nowrap absolute bottom-2 left-3 -z-10"
                        >{{ playerCard.read }}</span
                      ><span class="lg:ml-8">{{ playerCard.playerName }}</span>
                    </p>
                    <p class="text-2xs font-light mt-0">{{ playerCard.attr }}</p>
                    <p class="text-2xs font-light">挑戦楽器：{{ playerCard.instrument }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- /「Na-ra-uno 体験記 人気のプレイヤー」のスライダー -->
        </div>
        <!-- 「Na-ra-uno 体験記 人気のプレイヤー」のコンテンツ -->
      </div>
      <!-- /Na-ra-uno 体験記 人気のプレイヤー -->
    </div>
    <!-- /ナラウーノ 実際にナラってみた！ -->
  </div>
  <!-- /na ra uno -->
</template>
<style scoped>
#na-ra-uno-slider,
#na-ra-uno-slider2 {
  .swiper-button-prev,
  .swiper-button-next {
    @media (width < 1000px) {
      display: none;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: none;
  }
}
</style>
