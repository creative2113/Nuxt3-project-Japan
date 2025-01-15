<script lang="ts" setup>
const props = defineProps<{
  date: Date;
}>();

const month = ref("");
const day = ref("");
const hour = ref("");
const minute = ref("");
const second = ref("");

onMounted(() => {
  if (props.date.getMonth() < 10)
    month.value = "0" + (props.date.getMonth() + 1);
  else month.value = (props.date.getMonth() + 1).toString();
  if (props.date.getDate() < 10) day.value = "0" + props.date.getDate();
  else day.value = props.date.getDate().toString();
  hour.value = props.date.getHours().toString();
  minute.value = props.date.getMinutes().toString();
  second.value = props.date.getSeconds().toString();
});

function getDayName(date: Date) {
  const day = date.getDay();
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  return days[day];
}
</script>
<template>
  <div class="relative">
    <p class="text-center w-max text-[20px] text-white font-bold absolute right-[24px] top-[136px]">
      本日<br />締切
    </p>
    <h2 class="roboto-bold font-bold absolute text-[18px] text-white top-[98px] left-[124px]">
      {{ month }}.{{ day }}
      <span class="text-black text-[14px] ml-[8px]">{{ getDayName(props.date) }}</span>
    </h2>
    <h3
      class="roboto-bold font-bold absolute text-[12px] text-white *:text-[18px] *:mx-[3px] *:italic top-[152px] left-1/2 -translate-x-1/2">
      残り<span>{{ hour }}</span>時間<span>{{ minute }}</span>分<span>{{ second }}</span>秒
    </h3>
    <img src="/images/top-campaign.webp" alt="top-campaign" width="375" height="490" loading="lazy" decoding="async"
      class="w-full h-auto" />
  </div>
</template>
