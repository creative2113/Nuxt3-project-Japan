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
    class="bg-white w-1000px text-[#555555] relative lg:rounded-[10px] max-lg:w-[335px] max-lg:mx-auto max-lg:p-[3px] max-lg:text-[#222222]">
    <h2
      class="text-[30px] pt-6 pb-1 pl-5 leading-8 tracking-tighter max-lg:text-white max-lg:bg-[url('/images/campaign-bg-sp.webp')] bg-cover bg-no-repeat max-lg:leading-6 max-lg:px-0 max-lg:text-center">
      <span class="max-lg:block max-lg:text-base">もうすぐゴールデンウイーク！</span>
      <span class="max-lg:block max-lg:text-[21px] max-lg:tracking-tighter">新しいことはじめようキャンペーン</span>
    </h2>
    <div
      class="flex w-full py-0.5 items-center lg:bg-[url('/images/campaign-bg-pc.webp')] bg-cover bg-no-repeat gap-4 px-5 max-lg:px-0">
      <div class="flex flex-col justify-center gap-2 items-center max-lg:w-full">
        <h3 class="text-xl text-center max-lg:hidden">
          2つの特典からいずれかをお選びいただけます！
        </h3>
        <div class="flex justify-center items-center gap-2 max-lg:w-full max-lg:px-3 max-lg:py-2.5">
          <p class="lg:hidden text-xs text-nowrap">いずれか<br>おひとつ</p>
          <span
            class="flex items-center justify-evenly w-[288px] h-16 rounded-[5px] max-lg:w-[140px] bg-gradient-to-r from-[#f7d6d1] to-[#e39597]">
            <div class="flex items-center gap-2 max-lg:flex-col">
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
            class="px-1.5 flex justify-between items-center w-[318px] h-16 rounded-[5px] bg-gradient-to-r from-[#f7d6d1] to-[#e39597] max-lg:flex-col max-lg:w-[109px] max-lg:pl-1">
            <b
              class="text-white text-[46px] max-lg:text-lg max-lg:leading-6">
              着物
              <span class="text-3xl max-lg:text-lg -mx-4 max-lg:-mx-2">＆</span>
              小物
            </b>
            <span class="text-white text-[21px] tracking-[-3px]">プレゼント</span>
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
            <img src="/images/alpha-w.svg" width="100" height="75" loading="lazy" decoding="async" alt="w" />
            <p class="text-stroke-main text-2xl text-center text-[#D87E80]"><span class="block tracking-[-4px]">キャンペーン</span>実施中!</p>
          </div>
          <div>
            <p class="text-sm tracking-tighter">
              道具プレゼントをご希望の方には
            </p>
            <div class="flex gap-9 items-end">
              <h5 class="text-[34px] leading-9 tracking-[-6px]">トートバッグ</h5>
              <p class="text-[21px] tracking-[-3px]">プレゼント！</p>
            </div>
          </div>
        </div>
        <div class="absolute lg:top-0 lg:right-0 max-lg:bottom-0 max-lg:left-0">
          <img src="/images/campaign-cart.svg" width="143" height="188" class="max-lg:w-[75px] max-lg:h-[90px]"
            loading="lazy" decoding="async" alt="cart" />
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
      <div class="flex items-center gap-2.5 justify-center">
        <img src="/images/freedial.svg" alt="freedial" width="55" height="35" loading="lazy" decoding="async" />
        <h4 class="text-[44px] roboto font-bold text-[#D87E80]">
          0120-978-900
        </h4>
        <p class="text-center text-sm font-bold roboto text-[#D87E80]">
          受付時間<br />8:00〜25:00
        </p>
      </div>
      <nuxt-link to="/apply" class="w-max block rounded-full text-white text-center bg-[#E39597] shadow-md py-2 px-[75px] max-lg:px-7">
        <p class="text-sm leading-4 text-nowrap">無料体験レッスン</p>
        <p class="text-[22px] text-nowrap leading-6">お申込みフォーム</p>
      </nuxt-link>
    </div>
    <div class="lg:hidden w-full">
      <div class="w-full flex items-center gap-6 pl-[76px] bg-[#F7D6D1]">
        <p class="text-[10px]">楽器プレゼントご希望の方</p>
        <p class="text-sm flex">
          <b class="roboto text-lg leading-4 mr-2">w</b>
          キャンペーン
        </p>
      </div>
      <h6 class="w-full pl-[76px] bg-[#E39597] text-white">
        <span class="ml-6 text-lg">トートバッグ</span>
        <span class="ml-8 text-xs">プレゼント！</span>
      </h6>
      <div class="w-full flex pl-[76px] bg-[#F7D6D1]">
        <h3 class="flex items-center gap-1">
          <b class="text-base roboto">{{ time.month }}</b>
          <span class="text-xs">月</span>
          <b class="text-base roboto">{{ time.day }}</b>
          <span class="text-xs">日</span>
        </h3>
        <h5 class="flex gap-1 items-center">
          <span class="text-xs ml-4 mr-2">残り</span>
          <b class="text-base roboto">{{ remaining.days }}</b>
          <span class="text-xs">日</span>
          <b class="text-base roboto">{{ remaining.hours }}</b>
          <span class="text-xs">時間</span>
          <b class="text-base roboto">{{ remaining.minutes }}</b>
          <span class="text-xs">分</span>
        </h5>
      </div>
    </div>
  </div>
  <div class="flex items-stretch justify-between mt-5 lg:hidden max-lg:w-[335px] max-lg:mx-auto">
    <div
      class="w-max h-max rounded-full bg-white shadow-md flex justify-center items-center gap-[10px] py-[6px] px-[35px] max-lg:px-4 max-lg:gap-1">
      <img src="/images/freedial.svg" loading="lazy" alt="dial" decoding="async"
        class="w-[21px] h-[14px] max-lg:w-[28px] max-lg:h-[18px]" />
      <img src="/images/dial-number.svg" alt="0120-978-900 電話受付：8:00~25:00" loading="lazy" decoding="async"
        class="w-[126px] h-[36px] max-lg:w-[100px]" />
    </div>
    <nuxt-link to="/apply" class="block w-max rounded-full text-white bg-[#E39597] text-center shadow-md py-2 px-[52px] max-lg:px-7">
      <p class="text-[11px] leading-3 text-nowrap">無料体験レッスン</p>
      <p class="text-[14px] leading-4 text-nowrap">お申込みフォーム</p>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.text-stroke-main {
  -webkit-text-stroke: 1px white;
}
</style>