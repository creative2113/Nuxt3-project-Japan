<script lang="ts" setup>
const props = defineProps<{
  date: Date;
  banner: string;
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
  <div class="relative w-full pt-5 px-5">
    <div class="relative">
      <p class="text-center w-max text-[18px] text-white font-bold absolute right-[22px] top-[120px]">
        本日<br />締切
      </p>
      <h3 class="roboto-bold font-bold absolute text-[18px] text-white top-[86px] left-[108px]">
        {{ month }}.{{ day }}
        <span class="text-black text-[14px] ml-1">{{
          getDayName(props.date)
        }}</span>
      </h3>
      <h4
        class="roboto-bold font-bold absolute text-[12px] text-white *:text-[18px] *:mx-[3px] *:italic top-[134px] left-1/2 -translate-x-1/2">
        残り<span>{{ hour }}</span>時間<span>{{ minute }}</span>分<span>{{ second }}</span>秒
      </h4>
      <img :src="banner" alt="campaign banner" width="335" height="518" loading="lazy" decoding="async"
        class="w-full h-auto" />
    </div>
  </div>
</template>
