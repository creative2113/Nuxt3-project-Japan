<template>
  <div class="voice-item w-full bg-white py-10 max-lg:py-0">
    <div
      class="max-w-[1000px] mx-auto flex justify-between items-start max-lg:flex-col max-lg:items-center max-lg:max-w-[335px]"
    >
      <div
        class="max-lg:flex max-lg:items-center max-lg:max-w-[300px] max-lg:w-full justify-between max-lg:mx-auto max-lg:mt-5"
      >
        <picture>
          <source
            media="(max-width: 1024px)"
            srcset="/images/user-voice-chart-1-sp.svg"
          />
          <img
            src="/images/user-voice-chart-1.svg"
            width="300"
            height="267"
            alt="present"
            loading="lazy"
            class="w-[300px] h-auto max-lg:w-[116px]"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcset="/images/user-voice-chart-2-sp.svg"
          />
          <img
            src="/images/user-voice-chart-2.svg"
            width="300"
            height="266"
            alt="present"
            loading="lazy"
            class="w-[300px] h-auto max-lg:w-[129px]"
          />
        </picture>
      </div>
      <div
        class="flex flex-col w-[628px] border border-[#DDDDDD] rounded-[10px] text-[#222222] max-lg:border-0 max-lg:w-full"
      >
        <div
          class="w-full bg-[#F8F8F8] rounded-[10px] flex items-center gap-4 py-3.5 px-5 max-lg:relative max-lg:px-0 max-lg:items-start"
        >
          <div>
            <img
              src="/images/present-11.webp"
              width="90"
              height="90"
              alt="present"
              loading="lazy"
              class="w-[90px] aspect-square rounded-full border-white border-[3px] border-solid shadow-md"
            />
          </div>
          <div class="max-lg:w-[224px]">
            <div
              class="flex items-center gap-6 font-bold max-lg:absolute max-lg:flex-col max-lg:gap-0 left-0 bottom-4"
            >
              <h5 class="text-base max-lg:text-sm">
                高谷 蒼汰<span class="max-lg:text-xs">さん</span>
              </h5>
              <p class="text-xs max-lg:text-[10px]">2０代 / 男性 / 生徒</p>
            </div>
            <div
              class="flex items-center gap-3 mt-3 max-lg:flex-col max-lg:items-start"
            >
              <div class="flex items-center gap-2">
                <span
                  class="text-[10px] py-1 px-3 border border-[#DDDDDD] bg-white max-lg:w-16 max-lg:tracking-tighter text-center"
                  >ジャンル</span
                >
                <p class="text-[10px] font-semibold">音楽</p>
              </div>
              <div class="flex items-center gap-2">
                <span
                  class="text-[10px] py-1 px-3 border border-[#DDDDDD] bg-white max-lg:w-16 max-lg:tracking-tighter text-center"
                  >コース</span
                >
                <p class="text-[10px] font-semibold">ギター</p>
              </div>
              <div class="flex items-center gap-2">
                <span
                  class="text-[10px] py-1 px-3 border border-[#DDDDDD] bg-white max-lg:w-16 max-lg:tracking-tighter text-center"
                  >講師</span
                >
                <p class="text-[10px] font-semibold">古川香織 講師</p>
              </div>
            </div>
            <div
              class="flex items-center gap-7 mt-2 text-[10px] flex-wrap max-lg:mt-4 max-lg:gap-1 max-lg:gap-y-1 max-lg:gap-x-7"
            >
              <p>無料体験レッスン受講日</p>
              <b>2019年8月20日</b>
              <p>入会した時期</p>
              <b>2019年8月20日</b>
            </div>
          </div>
        </div>
        <div class="px-4 pt-5 max-lg:px-0">
          <div class="flex justify-between items-end max-lg:relative">
            <div class="w-[348px] max-lg:w-full">
              <div
                class="flex items-center font-bold gap-3 before:inline-block before:w-1 before:h-7 before:bg-[#222222]"
              >
                <h5 class="text-[15px]">体験レッスン</h5>
                <h6 class="text-[13px]">での評価</h6>
              </div>
              <p class="text-xs mt-5 max-lg:mt-[140px]">
                初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。
              </p>
            </div>
            <div
              class="w-[200px] lg:pr-5 font-semibold max-lg:absolute max-lg:top-10 max-lg:w-full max-lg:flex max-lg:flex-col"
            >
              <div
                class="flex w-full justify-between items-end max-lg:w-[180px]"
              >
                <span class="text-sm">総合評価</span>
                <img
                  src="/images/star-4.svg"
                  alt="star"
                  width="111"
                  height="22"
                  class="w-[111px] h-[22px]"
                />
              </div>
              <div
                class="mt-5 max-lg:mt-2 max-lg:flex gap-x-2 max-lg:h-[80px] max-lg:flex-wrap"
              >
                <div
                  class="flex w-full justify-between items-end max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">設備・雰囲気</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">コスパ</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">予約システム</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">カリキュラム</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">講師</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="viewAll">
            <div v-for="(score, i) of scoreDetails" :key="i" class="w-full mt-10 max-lg:mt-8">
              <div class="flex w-full justify-between items-center pr-4">
                <h6 class="text-[13px] font-bold">{{ score.title }}</h6>
                <img
                  src="/images/star-4.svg"
                  alt="star"
                  width="85"
                  height="17"
                  class="w-[85px] h-[17px]"
                />
              </div>
              <p class="text-[13px] mt-[14px]">{{ score.description }}</p>
            </div>
          </div>
          <hr class="mt-[30px] mb-[20px]" />
          <div class="flex justify-between items-end max-lg:relative">
            <div class="w-[348px] max-lg:w-full">
              <div
                class="flex items-center font-bold gap-3 before:inline-block before:w-1 before:h-7 before:bg-[#222222]"
              >
                <h5 class="text-[15px]">通ってみた</h5>
                <h6 class="text-[13px]">での評価</h6>
              </div>
              <p class="text-xs mt-5 max-lg:mt-[140px]">
                初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。イベントで友人もできたので充実しています。初心者ですがある程度までできるようになりました。
              </p>
            </div>
            <div
              class="w-[200px] lg:pr-5 font-semibold max-lg:absolute max-lg:top-10 max-lg:w-full max-lg:flex max-lg:flex-col"
            >
              <div
                class="flex w-full justify-between items-end max-lg:w-[180px]"
              >
                <span class="text-sm">総合評価</span>
                <img
                  src="/images/star-4.svg"
                  alt="star"
                  width="111"
                  height="22"
                  class="w-[111px] h-[22px]"
                />
              </div>
              <div
                class="mt-5 max-lg:mt-2 max-lg:flex gap-x-2 max-lg:h-[80px] max-lg:flex-wrap"
              >
                <div
                  class="flex w-full justify-between items-end max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">設備・雰囲気</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">コスパ</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">予約システム</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">カリキュラム</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
                <div
                  class="flex w-full justify-between items-end mt-1 max-lg:w-[160px] max-lg:mt-0"
                >
                  <span class="text-[11px]">講師</span>
                  <img
                    src="/images/star-4.svg"
                    alt="star"
                    width="85"
                    height="17"
                    class="w-[85px] h-[17px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="viewAll">
            <div v-for="(score, i) of scoreDetails" :key="i" class="w-full mt-10 max-lg:mt-8">
              <div class="flex w-full justify-between items-center pr-4">
                <h6 class="text-[13px] font-bold">{{ score.title }}</h6>
                <img
                  src="/images/star-4.svg"
                  alt="star"
                  width="85"
                  height="17"
                  class="w-[85px] h-[17px]"
                />
              </div>
              <p class="text-[13px] mt-[14px]">{{ score.description }}</p>
            </div>
          </div>
        </div>
        <div class="pt-6 flex items-center justify-center">
          <button
            @click="viewAll = !viewAll"
            class="relative py-2 px-[58px] text-white bg-black font-bold lg:top-5 shadow-lg after:w-5 after:h-2 after:block after:bg-contain after:bg-no-repeat after:absolute after:top-3 after:right-4 max-lg:text-xs max-lg:py-2 max-lg:px-[73px]"
            :class="viewAll ? `after:bg-[url('/images/arrow/arrow-down-white.svg')] after:rotate-180`:`after:bg-[url('/images/arrow/arrow-right-small-white.svg')]`"
          >
            {{ viewAll ? '閉じる' : '詳しく見る' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const viewAll = ref(false);
const scoreDetails = await (await fetch('/data/scoredetail.json')).json();
</script>
<style lang="scss" scoped>
.voice-item {
  @media screen and (max-width: 1024px) {
    box-shadow: 0 -8px 8px #00000055;
  }
}
</style>
