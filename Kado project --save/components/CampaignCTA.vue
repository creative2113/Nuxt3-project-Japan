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
  <div
    class="bg-white max-w-[1000px] mx-auto my-[30px] text-[#555555] font-semibold tracking-tighter border-4 border-[#EEDDFF] drop-shadow-lg relative max-lg:w-[335px] max-lg:mx-auto max-lg:p-0 max-lg:text-[#222222]">
    <h2
      class="text-[30px] pt-3 pb-4 pl-5 leading-8 max-lg:text-[#555555] max-lg:leading-6 max-lg:px-0 max-lg:text-center max-lg:pt-3 max-lg:pb-0">
      <span class="max-lg:block max-lg:text-xl">もうすぐゴールデンウイーク！</span>
      <span class="max-lg:block max-lg:text-xl">新しいことはじめようキャンペーン</span>
    </h2>
    <div
      class="flex w-full py-0.5 items-center lg:bg-[url('/images/campaign-bg.svg')] bg-cover bg-no-repeat gap-4 px-5 max-lg:px-0">
      <div class="flex flex-col justify-center gap-2 items-center max-lg:w-full">
        <h3 class="text-xl text-center font-bold max-lg:hidden">
          2つの特典からいずれかをお選びいただけます！
        </h3>
        <div class="flex justify-center items-center gap-2 max-lg:w-full max-lg:px-3 max-lg:py-2.5">
          <p class="lg:hidden text-xs text-nowrap">いずれか<br>おひとつ</p>
          <span
            class="flex items-center justify-evenly w-[288px] h-16 rounded-[5px] max-lg:w-[140px] max-lg:h-[50px] bg-gradient-to-r from-[#C6CEFF] to-[#F7B6CA]">
            <div class="flex items-center gap-2 max-lg:flex-col max-lg:gap-0">
              <span class="text-[21px] text-white max-lg:text-sm">入会金</span>
              <b class="text-[46px] text-white max-lg:text-2xl max-lg:leading-6">半額</b>
            </div>
            <div class="text-center">
              <p class="text-[#222222]">
                <b class="text-base roboto leading-4 max-lg:text-xs">17,000</b>
                <span class="text-[11px] max-lg:text-[7px]">円</span>
                <span
                  class="block w-16 h-[3px] rounded bg-white opacity-55 origin-left rotate-[-15deg] relative -mt-1.5 left-3 max-lg:w-12 max-lg:h-0.5" />
              </p>
              <p class="text-white">
                <b class="roboto text-[28px] leading-8 max-lg:text-xl max-lg:leading-6">8,500</b>
                <span class="text-sm">円</span>
              </p>
            </div>
          </span>
          <span
            class="px-1.5 flex justify-between items-center w-[318px] h-16 rounded-[5px] bg-gradient-to-r from-[#C6CEFF] to-[#F7B6CA] max-lg:flex-col max-lg:h-[50px] max-lg:justify-center max-lg:w-[109px] max-lg:px-0">
            <b
              class="text-white text-[38px] max-lg:text-lg max-lg:leading-6">
              華道道具一式
            </b>
            <span class="text-white text-[21px] tracking-[-5px] max-lg:text-sm">プレゼント</span>
          </span>
        </div>
        <div class="flex justify-center items-center gap-4 max-lg:hidden">
          <p class="text-sm text-center">
            キャンペーン<br />締め切り
          </p>
          <h4 class="flex gap-0.5 items-center">
            <b class="text-[32px] roboto">{{ time.month }}</b>
            <span class="text-lg">月</span>
            <b class="text-[32px] roboto">{{ time.day }}</b>
            <span class="text-lg">日</span>
            <strong
              class="text-lg inline-block w-[30px] h-[30px] rounded-full bg-[#555555] text-white text-center">日</strong>
            <b class="text-[26px] roboto">{{ time.hour }}:{{ time.minute }}</b>
          </h4>
          <h5 class="text-xl bg-white origin-center rotate-[-12deg] shadow-md px-2">
            終了まで
          </h5>
          <h6 class="flex gap-0.5 items-center">
            <b class="text-[28px] roboto">{{ remaining.days }}</b>
            <span class="text-lg">日</span>
            <b class="text-[28px] roboto">{{ remaining.hours }}</b>
            <span class="text-lg">時間</span>
            <b class="text-[28px] roboto">{{ remaining.minutes }}</b>
            <span class="text-lg">分</span>
          </h6>
        </div>
      </div>
      <div class="flex">
        <div class="max-lg:hidden">
          <div class="flex">
            <img src="/images/alpha-w.svg" width="89" height="66" loading="lazy" alt="w" class="w-[89px] h-auto drop-shadow-lg" />
            <p class="text-stroke-main text-2xl text-center text-[#9999EE]"><span class="block font-bold tracking-[-4px]">キャンペーン</span>実施中!</p>
          </div>
          <div>
            <p class="text-sm tracking-tighter text-[#222222] mt-2">
              道具プレゼントをご希望の方には
            </p>
            <div class="flex gap-3 items-end mt-1">
              <h5 class="text-[34px] font-extrabold leading-9 tracking-[-6px]">トートバッグ</h5>
              <p class="text-[21px] font-extrabold tracking-[-3px]">プレゼント！</p>
            </div>
          </div>
        </div>
        <div class="absolute lg:top-0 lg:right-0 max-lg:bottom-16 max-lg:left-0">
          <img src="/images/campaign-cart.svg" width="143" height="188" class="max-lg:w-[75px] max-lg:h-[90px]"
            loading="lazy" alt="cart" />
        </div>
      </div>
    </div>
    <div class="flex px-5 py-3 items-center justify-between gap-3 max-lg:hidden">
      <div class="flex items-center justify-center max-lg:hidden">
        <h5 class="text-sm text-[#454545] bg-[#DDDDDD] w-[145px] py-1 text-center">
          無料体験レッスンに<br />お申込みください
        </h5>
        <span class="w-0 h-0 border-r-0 border-l-[#DDDDDD] border-l-[20px] border-y-[24px] border-y-transparent" />
      </div>
      <div class="flex items-center gap-2.5 justify-center tracking-normal">
        <img src="/images/freedial.svg" alt="freedial" width="55" height="35" loading="lazy" />
        <h4 class="text-[44px] roboto font-bold text-[#222222]">
          0120-978-900
        </h4>
        <p class="text-center text-sm font-bold roboto text-[#222222]">
          受付時間<br />8:00〜25:00
        </p>
      </div>
      <nuxt-link to="/" class="w-max text-white text-center text-2xl bg-black shadow-md py-3.5 pl-16 pr-5 max-lg:px-7 arrow-l">
        無料体験レッスン
      </nuxt-link>
    </div>
    <div class="lg:hidden w-full max-lg:tracking-normal">
      <div class="w-full flex items-center gap-6 pl-[76px] bg-[#EEDDFF]">
        <p class="text-[10px]">楽器プレゼントご希望の方</p>
        <p class="text-sm flex">
          <b class="roboto text-lg leading-4 mr-2">w</b>
          キャンペーン
        </p>
      </div>
      <p class="w-full pl-[76px] bg-[#AAAAFF] text-white">
        <span class="ml-6 text-lg">トートバッグ</span>
        <span class="ml-8 text-xs">プレゼント！</span>
      </p>
      <div class="w-full flex pl-[76px] bg-[#EEDDFF]">
        <h3 class="flex items-center gap-1">
          <b class="text-base roboto">{{ time.month }}</b>
          <span class="text-xs">月</span>
          <b class="text-base roboto">{{ time.day }}</b>
          <span class="text-xs">日</span>
        </h3>
        <h4 class="flex gap-1 items-center">
          <span class="text-xs ml-4 mr-2">残り</span>
          <b class="text-base roboto">{{ remaining.days }}</b>
          <span class="text-xs">日</span>
          <b class="text-base roboto">{{ remaining.hours }}</b>
          <span class="text-xs">時間</span>
          <b class="text-base roboto">{{ remaining.minutes }}</b>
          <span class="text-xs">分</span>
        </h4>
      </div>
      <div class="flex items-center justify-between lg:hidden p-3 w-full mx-auto">
        <div
          class="w-max h-max flex justify-center items-center gap-1">
          <img src="/images/freedial.svg" loading="lazy" alt="dial" class="w-[28px] h-[18px]" />
          <div>
            <p class="text-lg roboto font-bold leading-[18px]">0120-978-900</p>
            <p class="text-[9px]">電話受付 :
              <span class="roboto font-bold">8:00〜25:00</span></p>
          </div>
        </div>
        <nuxt-link to="/" class="w-max text-white text-sm bg-black py-2.5 pl-4 pr-2 arrow">
          無料体験レッスン
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-stroke-main {
  text-shadow: 0 2px white, 2px 0 white, 2px 2px white, -2px 0 white, 0 -2px white, -2px -2px white, 2px -2px white, -2px 2px white, 0 3px 6px #00000080;
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