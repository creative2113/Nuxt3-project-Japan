<template>
  <div
    class="w-[335px] mx-auto rounded-[20px] shadow-xl overflow-hidden bg-gradient-to-t from-[#AA99EE] to-[#FE88BB] mt-5"
  >
    <div class="w-full relative grid grid-cols-2">
      <div v-for="(item, i) of makes" :key="i" class="relative">
        <img
          :src="item.image"
          :alt="item.name"
          width="168"
          height="160"
          loading="lazy"
          decoding="async"
          class="w-full h-auto"
        />
        <span
          class="bg-white py-[6px] px-[19px] absolute text-[13px] font-bold"
          :class="item.namePos"
          >{{ item.name }}</span
        >
      </div>
      <p
        class="absolute mamelon text-center text-white bg-black w-[375px] py-1 tracking-widest text-[20px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"
      >
        プロデビューを叶えよう!
      </p>
    </div>
    <div>
      <h3 class="curriculum-learn-title">
        <span>
          <img
            src="/images/logo-inspiart-small.svg"
            alt="inspiart"
            width="185"
            height="40"
            loading="lazy"
            decoding="async"
            class="w-auto h-[40px] inline-block mb-1"
          />
          なら
        </span>
        <span>習った瞬間から</span>
        <span>アーティストに！</span>
      </h3>
      <div class="curriculum-learn">
        <div class="curriculum-learn-item">
          <div class="curriculum-learn-item-title">
            <hr class="w-[350px] h-[15px] bg-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12" />
            <img
              src="/images/curriculum-learn-1.webp"
              alt="learning"
              width="100"
              height="100"
              loading="lazy"
              decoding="async"
            />
            <h4 class="ml-[-50px] !pl-[50px]">本気のレッスン！</h4>
            <h6 class="bottom-8 right-5">総合芸能スクールとして</h6>
            <h6 class="bottom-3 right-0">長年の実績！</h6>
          </div>
          <div class="curriculum-item-content">
            <h5 class="text-xs text-center text-white">最速でプロレベルの技術に！</h5>
            <div class="flex items-center justify-center gap-[7px] mt-2">
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[20px] leading-5">最高の</span>
                  <span class="block text-[13px] tracking-[-0.2em] leading-[13px]">カリキュラム</span>
                </p>
              </div>
              <img src="/images/curriculum-cross.svg" alt="cross" width="23" height="23" loading="lazy" decoding="async" class="w-[23px] h-auto" />
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[15px] leading-[15px]">優秀な</span>
                  <span class="block text-[22px] leading-6">講師</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="curriculum-learn-item">
          <div class="curriculum-learn-item-title">
            <hr class="w-[350px] h-[15px] bg-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12" />
            <h4>レッスンを</h4>
            <h4 class="!absolute bottom-[41px] left-20">エンタメ化！</h4>
            <img
              src="/images/curriculum-learn-2.webp"
              alt="learning"
              width="100"
              height="100"
              loading="lazy"
              decoding="async"
              class="mb-5"
            />
            <h6 class="bottom-5 right-5">レッスンで稼げる！</h6>
            <h6 class="bottom-0 right-0">人気が出る！</h6>
          </div>
          <div class="curriculum-item-content">
            <h5 class="text-xs text-center text-white">学びながら稼げる最新テクノロジー！</h5>
            <div class="flex items-center justify-center gap-[7px] mt-2">
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[20px] leading-5">投げ銭</span>
                  <span class="block text-[15px] tracking-[-0.2em] leading-[15px]">システム</span>
                </p>
              </div>
              <img src="/images/curriculum-cross.svg" alt="cross" width="23" height="23" loading="lazy" decoding="async" class="w-[23px] h-auto" />
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[22px] leading-[22px]">NFT</span>
                  <span class="block text-[15px] leading-4">販売</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="curriculum-learn-item">
          <div class="curriculum-learn-item-title">
            <hr class="w-[350px] h-[15px] bg-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12" />
            <img
              src="/images/curriculum-learn-3.webp"
              alt="learning"
              width="100"
              height="100"
              loading="lazy"
              decoding="async"
            />
            <h4 class="ml-[-30px] !pl-[30px]">未経験こそ可能性！</h4>
            <h6 class="bottom-8 right-5">チャレンジする姿が</h6>
            <h6 class="bottom-3 right-0">ファンをつくる！</h6>
          </div>
          <div class="curriculum-item-content">
            <h5 class="text-xs text-center text-white">専門講座で徹底サポート！</h5>
            <div class="flex items-center justify-center gap-[7px] mt-2">
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[10px] leading-3 tracking-[-0.2em]">インフルエンサー</span>
                  <span class="block text-[14px] leading-[14px]">CAMPUS</span>
                </p>
              </div>
              <img src="/images/curriculum-cross.svg" alt="cross" width="23" height="23" loading="lazy" decoding="async" class="w-[23px] h-auto" />
              <div class="curriculum-circle">
                <p>
                  <span class="block text-[10px] leading-[10px]">YouTuber</span>
                  <span class="block text-[14px] leading-[14px]">CAMPUS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const makes = [
  {
    image: "/images/curriculum-make-1.webp",
    name: "楽器",
    namePos: "top-5 left-0 rounded-r-full",
  },
  {
    image: "/images/curriculum-make-2.webp",
    name: "歌",
    namePos: "top-5 right-0 rounded-l-full",
  },
  {
    image: "/images/curriculum-make-3.webp",
    name: "ダンス",
    namePos: "bottom-5 left-0 rounded-r-full",
  },
  {
    image: "/images/curriculum-make-4.webp",
    name: "モデル",
    namePos: "bottom-5 right-0 rounded-l-full",
  },
];
</script>
<style scoped>
.curriculum-learn-title {
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  color: white;
  padding-top: 30px;
}

.curriculum-learn-title > span {
  display: block;
  width: max-content;
  margin-inline: auto;
  border-bottom: solid 5px white;
}
.curriculum-learn {
  margin-top: 30px;
  padding-bottom: 20px;
}

.curriculum-learn-item {
  margin-top: 20px;
  font-weight: bold;
}

.curriculum-learn-item-title {
  padding-inline: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: white;
}

.curriculum-learn-item-title > img {
  position: relative;
  z-index: 10;
  width: 100px;
  height: 100px;
  border: solid 3px white;
  border-radius: 100px;
  box-shadow: 0 10px 20px #00000033;
}

.curriculum-learn-item-title > h4 {
  position: relative;
  margin-top: 15px;
  font-size: 20px;
  padding: 1px 10px;
  background-image: linear-gradient(to left, #AA99EE, #FE88BB);
}

.curriculum-learn-item-title > h6 {
  font-size: 14px;
  position: absolute;
  background-color: black;
  padding-inline: 10px;
  z-index: 20;
}

.curriculum-item-content {
  width: 290px;
  margin-inline: auto;
  margin-top: 18px;
  border-radius: 10px;
  background-color: #FFFFFF16;
  border: solid 1px #FFFFFF24;
  padding-block: 10px;
}

.curriculum-circle {
  width: 75px;
  height: 75px;
  border-radius: 75px;
  background-color: white;
  box-shadow: 0 5px 10px #00000033;
  text-align: center;
  color: #AA99EE;
  align-content: center;
}
</style>
