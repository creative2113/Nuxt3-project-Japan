<script setup lang="ts">
interface DeadlineProps {
  deadline: Date;
}

const props = defineProps<DeadlineProps>();

const deadline = props.deadline;

const time = computed(() => {
  const year = deadline.getFullYear();
  const month = deadline.getMonth() + 1;
  const day = deadline.getDate();
  const hour = deadline.getHours(); // 時間を取得
  const minute = deadline.getMinutes(); // 分を取得
  const weekday = deadline.getDay();

  // 数値に対応する日本語の曜日名
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const weekdayStr = weekdays[weekday];

  // 時間と分を2桁表示に整形
  const hourStr = hour.toString().padStart(2, "0");
  const minuteStr = minute.toString().padStart(2, "0");

  return {
    year,
    month,
    day,
    hour: hourStr,
    minute: minuteStr,
    weekday: weekdayStr,
  };
});

const now = new Date();
const diff = deadline.getTime() - now.getTime();
const remaining = computed(() => {
  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes };
});
</script>
<template>
  <section class="w-full bg-gradient-to-r from-[#E6E9FD] to-[#FDF2FB] py-5 max-lg:hidden">
    <div class="w-full flex items-center justify-center gap-6 max-lg:flex-col max-lg:gap-0">
      <div
        class="w-[400px] rounded-[5px] bg-gradient-to-br from-[#C6CEFF] to-[#F7B6CA] p-[3px] shadow-md text-center max-lg:w-full"
      >
        <img
          src="/images/multi-cta-pc.webp"
          alt="multi-cta"
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          class="w-full h-auto"
        />
        <h3 class="text-[36px] text-white font-bold text-center">
          無料体験レッスン
        </h3>
        <p class="text-[13px] text-center leading-5 font-medium mt-2">
          EYS華道＆フラワー教室では、<br />
          無料体験授業を随時行っています。<br />
          まずはお気軽にお問い合わせください。
        </p>
      </div>
      <div
        class="max-w-[400px] text-[#555555] font-semibold rounded-[10px] bg-white border-2 border-[#DDDDDD] drop-shadow-lg relative"
      >
        <h2 class="text-xl text-center pt-3 pb-0">
          もうすぐゴールデンウイーク！<br />新しいことはじめようキャンペーン
        </h2>
        <div class="flex w-full pt-2.5 items-center bg-[#EEDDFF]">
          <div class="flex flex-col justify-center gap-2 items-center w-full">
            <div
              class="flex justify-center items-center gap-2 w-full px-3 py-2.5"
            >
              <p class="text-sm text-nowrap">いずれか<br />おひとつ</p>
              <span
                class="flex items-center justify-evenly rounded-[5px] w-[160px] h-[60px] bg-gradient-to-r from-[#C6CEFF] to-[#F7B6CA]"
              >
                <div class="flex items-center flex-col">
                  <span class="text-white text-lg">入会金</span>
                  <b class="text-white text-3xl leading-6">半額</b>
                </div>
                <div class="text-center">
                  <p class="text-[#222222]">
                    <b class="roboto leading-4 text-xs">17,000</b>
                    <span class="text-[7px]">円</span>
                    <span
                      class="block rounded bg-white opacity-55 origin-left rotate-[-15deg] relative -mt-1.5 left-3 w-12 h-0.5"
                    />
                  </p>
                  <p class="text-white">
                    <b class="roboto text-[28px] text-xl leading-6">8,500</b>
                    <span class="text-sm">円</span>
                  </p>
                </div>
              </span>
              <span
                class="rounded-[5px] bg-gradient-to-r from-[#C6CEFF] to-[#F7B6CA] h-[60px] w-[145px] px-0 text-center content-center"
              >
                <p class="text-white text-[23px] leading-6">華道道具一式</p>
                <span class="text-white text-lg tracking-[-5px]"
                  >プレゼント</span
                >
              </span>
            </div>
          </div>
          <div class="flex">
            <div class="absolute bottom-0 left-0">
              <img
                src="/images/campaign-cart.svg"
                width="143"
                height="188"
                class="w-[70px] h-auto"
                loading="lazy"
                alt="cart"
              />
            </div>
          </div>
        </div>
        <div class="w-full tracking-normal">
          <div class="w-full gap-6 pl-[76px] bg-[#EEDDFF]">
            <span class="text-xs">楽器プレゼントご希望の方</span>
            <b class="roboto text-3xl ml-4 mr-2 text-[#222222]">w</b>
            <span class="text-base">キャンペーン</span>
          </div>
          <h6 class="w-full pl-[76px] bg-[#888888] text-white">
            <span class="ml-6 text-2xl">トートバッグ</span>
            <span class="ml-8 text-lg">プレゼント！</span>
          </h6>
          <div class="w-full flex pl-[76px] text-[#222222]">
            <h3 class="flex items-center gap-1">
              <b class="text-2xl roboto">{{ time.month }}</b>
              <span class="text-base">月</span>
              <b class="text-2xl roboto">{{ time.day }}</b>
              <span class="text-base">日</span>
            </h3>
            <h5 class="flex gap-1 items-center">
              <span class="text-sm p-1 shadow bg-white -rotate-6 ml-4 mr-2"
                >残り</span
              >
              <b class="text-2xl roboto">{{ remaining.days }}</b>
              <span class="text-base">日</span>
              <b class="text-2xl roboto">{{ remaining.hours }}</b>
              <span class="text-base">時間</span>
              <b class="text-2xl roboto">{{ remaining.minutes }}</b>
              <span class="text-base">分</span>
            </h5>
          </div>
          <div
            class="flex items-center justify-between lg:hidden p-3 w-full mx-auto"
          >
            <div class="w-max h-max flex justify-center items-center gap-1">
              <img
                src="/images/freedial.svg"
                loading="lazy"
                alt="dial"
                class="w-[28px] h-[18px]"
              />
              <div>
                <p class="text-lg roboto font-bold leading-[18px]">
                  0120-978-900
                </p>
                <p class="text-[9px]">
                  電話受付 : <span class="roboto font-bold">8:00〜25:00</span>
                </p>
              </div>
            </div>
            <nuxt-link
              to="/"
              class="w-max text-white text-sm bg-black py-2.5 pl-4 pr-2 arrow"
            >
              無料体験レッスン
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full bg-white mt-5 py-[5px] flex justify-center items-center gap-5 max-lg:hidden"
    >
      <img src="/images/multi-cta-title.svg" alt="multi" width="126" height="76" loading="lazy" decoding="async" class="w-[126px] h-auto drop-shadow-lg -mt-3 -mb-2" />
      <div class="flex items-center gap-2.5 justify-center tracking-normal">
        <img
          src="/images/freedial.svg"
          alt="freedial"
          width="55"
          height="35"
          loading="lazy"
        />
        <h4 class="text-[44px] roboto font-bold text-[#222222]">
          0120-978-900
        </h4>
        <p class="text-center text-sm font-bold roboto text-[#222222]">
          受付時間<br />8:00〜25:00
        </p>
      </div>
      <nuxt-link
        to="/"
        class="w-max text-white text-center text-2xl bg-black shadow-md py-3.5 pl-20 pr-5 max-lg:px-7 arrow-l"
      >
        無料体験レッスン
      </nuxt-link>
    </div>
  </section>
  <LazySectionClassCTA class="lg:hidden" />
  <LazyCampaignCTA :deadline="new Date()" class="lg:hidden" />
</template>

<style lang="scss" scoped>
.text-stroke-main {
  -webkit-text-stroke: 0.5px white;
}
.arrow {
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -4px;
    width: 10px;
    height: 10px;
    margin-left: 8px;
    border-top: solid 1px white;
    border-right: solid 1px white;
    transform: rotateZ(135deg);
  }
}

.arrow-l {
  &::after {
    content: "";
    display: inline-block;
    position: relative;
    top: -4px;
    width: 14px;
    height: 14px;
    margin-left: 40px;
    border-top: solid 2px white;
    border-right: solid 2px white;
    transform: rotateZ(135deg);
  }
}
</style>
