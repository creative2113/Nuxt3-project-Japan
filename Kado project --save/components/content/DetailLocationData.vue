<template>
  <div class="w-full flex justify-between max-lg:flex-col">
    <div class="w-[460px] max-lg:w-full max-lg:px-[13px]">
      <div class="flex justify-between">
        <img
          src="/images/Daikanyama_Miyuki_Neba.webp"
          alt="代官山_根葉美由紀"
          width="146"
          height="392"
          class="w-[146px] h-auto mt-8 max-lg:w-[96px] max-lg:mt-0"
        />
        <div class="w-[300px] max-lg:w-[200px]">
          <div
            class="w-full bg-white p-5 relative drop-shadow-md rounded-md border border-[#EEEEEE] before:block before:border-y-[10px] before:border-y-transparent before:border-r-[16px] before:border-r-white before:absolute before:top-9 before:left-[-15px]"
          >
            <p class="text-xs">
              代官山スタジオ店長の根葉です。<br /><br />代官山スタジオは、OPENしたばかり、<br />EYS自慢の最新設備満載のスタジオです！<br /><br />見学だけでも大歓迎です！<br />皆様のお越しを、愉しみにお待ちしています。
            </p>
            <div class="mt-[27px] flex items-center justify-end gap-3 max-lg:flex-col max-lg:items-end max-lg:gap-0">
              <span class="text-[11px]">代官山スタジオ店長</span>
              <span class="text-[11px]">根葉 美由紀</span>
            </div>
          </div>
          <div class="w-full mt-[30px] text-[11px] max-lg:hidden">
            <div class="flex gap-3">
              <span class="inline-bloch w-[50px]">住所</span>
              <span>:</span>
              <p>
                東京都渋谷区猿楽町11-6<br />
                A-FLAG代官山ウエスト(サンローゼ代官山)
              </p>
            </div>
            <div class="flex gap-3 mt-[11px]">
              <span class="inline-bloch w-[50px]">アクセス</span>
              <span>:</span>
              <p>東急電鉄東横線 代官山駅北口から徒歩３分</p>
            </div>
            <div class="flex gap-3 mt-[11px]">
              <span class="inline-bloch w-[50px]">連絡先</span>
              <span>:</span>
              <p>電話番号:0120-978-900</p>
            </div>
            <div class="flex gap-3 mt-[11px]">
              <span class="inline-bloch w-[50px]">営業時間</span>
              <span>:</span>
              <p>
                平日：12:30-22:00 <br />土日：10:00-21:00
                <br />休館日:毎月29,30,31日
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[460px] relative max-lg:w-full max-lg:mt-[33px]">
      <img
        src="/images/studio-detial-map.webp"
        alt="map"
        width="460"
        height="460"
        loading="lazy"
        decoding="async"
        class="w-full h-auto"
      />
      <button
        class="flex justify-between pl-[189px] pr-[10px] w-full absolute bottom-0 left-0 bg-black text-white text-[13px] py-[11px] after:block after:w-4 after:h-4 after:bg-[url('/images/arrow/map-open-arrow-icon.svg')] after:bg-contain after:bg-center after:bg-no-repeat max-lg:pl-[125px] max-lg:bg-[#AAAAFF]"
      >
        拡大地図を見る
      </button>
    </div>
    <div class="w-full mt-[18px] text-[11px] px-2.5 lg:hidden">
      <div class="flex gap-3">
        <span class="inline-bloch w-[50px]">住所</span>
        <span>:</span>
        <p>
          東京都渋谷区猿楽町11-6<br />
          A-FLAG代官山ウエスト(サンローゼ代官山)
        </p>
      </div>
      <div class="flex gap-3 mt-[11px]">
        <span class="inline-bloch w-[50px]">アクセス</span>
        <span>:</span>
        <p>東急電鉄東横線 代官山駅北口から徒歩３分</p>
      </div>
      <div class="flex gap-3 mt-[11px]">
        <span class="inline-bloch w-[50px]">連絡先</span>
        <span>:</span>
        <p>電話番号:0120-978-900</p>
      </div>
      <div class="flex gap-3 mt-[11px]">
        <span class="inline-bloch w-[50px]">営業時間</span>
        <span>:</span>
        <p>
          平日：12:30-22:00 <br />土日：10:00-21:00
          <br />休館日:毎月29,30,31日
        </p>
      </div>
    </div>
  </div>
  <div class="mt-5 max-lg:flex-col">
    <div class="flex justify-between max-lg:flex-col">
      <div class="w-[460px] bg-[#F9F9F9] px-[15px] pt-[17px] pb-5 max-lg:w-full max-lg:px-2.5">
        <h4 class="text-[13px] text-center font-semibold max-lg:">
          東急東横線「代官山駅」からお越しの場合 （徒歩3分）
        </h4>
        <div class="w-full grid grid-cols-2 gap-2.5 mt-[19px] max-lg:gap-[5px]">
          <div v-for="item, i of locations" :key="i" class="relative w-[210px] max-lg:w-[155px]">
            <img
              :src="item.image"
              alt="map"
              width="210"
              height="210"
              loading="lazy"
              decoding="async"
              class="w-full aspect-square h-auto"
            />
            <span
              class="block w-10 h-10 bg-[#AAAAFF] text-white text-center content-center roboto text-xl italic font-bold absolute top-0 left-0 max-lg:w-[30px] max-lg:h-[30px] max-lg:text-sm"
              >{{ item.id }}</span
            >
            <p class="text-[11px] h-[34px] mt-2.5 max-lg:text-[10px] max-lg:h-[24px] max-lg:leading-3 max-lg:overflow-hidden">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-[460px] bg-[#F9F9F9] px-[15px] pt-[17px] pb-5 max-lg:w-full max-lg:px-2.5">
        <h4 class="text-[13px] text-center font-semibold">
          お車でお越しの場合（近隣駐車場のご案内）
        </h4>
        <div class="w-full grid grid-cols-2 gap-2.5 mt-[19px]">
          <div v-for="item, i of maps" :key="i" class="relative w-[210px] max-lg:w-[155px]">
            <img
              :src="item.image"
              alt="map"
              width="210"
              height="210"
              loading="lazy"
              decoding="async"
              class="w-full aspect-square h-auto"
            />
            <div class="text-[11px] h-[34px] mt-2.5 max-lg:text-[10px] max-lg:h-[24px]">
              <p class="font-semibold">＊＊＊＊＊{{ item.title }}</p>
              <p class="max-lg:hidden">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const locations = [
  {
    id: 1,
    image: "/images/station-line-1.webp",
    description: "代官山駅北口を出て左に曲がり、階段をおります。",
  },
  {
    id: 2,
    image: "/images/station-line-2.webp",
    description: "降りたら少し右に曲がります。",
  },
  {
    id: 3,
    image: "/images/station-line-3.webp",
    description: "左手に上り坂があるのでまっすぐに進んできます。",
  },
  {
    id: 4,
    image: "/images/station-line-4.webp",
    description: "信号がみえるので右に曲がります。",
  },
  {
    id: 5,
    image: "/images/station-line-5.webp",
    description: "まっすぐ進んでいくと左手にALQIPPOというアパレルショップの入った建物がみえます。",
  },
  {
    id: 6,
    image: "/images/station-line-6.webp",
    description: "建物の門をくぐり1Fの奥に進むと代官山スタジオ（WeArt）があります。",
  },
];

const maps = [
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  },
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  },
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  },
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  },
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  },
  {
    title: "パーキング",
    description: "スタジオまで徒歩2分",
    image: "/images/station-map-1.webp",
    link: "/",
  }
]
</script>
