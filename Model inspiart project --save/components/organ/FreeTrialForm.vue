<script setup lang="ts">
import { defineEmits } from 'vue';

/* フォーム */
const firstName = ref('');
const lastName = ref('');
const firstNameKana = ref('');
const lastNameKana = ref('');
const phoneNumber = ref('');
const email = ref('');
const selectedMethod = ref('');
const selectedWeekdays = ref(false);
const selectedWeekends = ref(false);
const selectedMorning = ref(false);
const selectedAfternoon = ref(false);
const selectedEvening = ref(false);
const campaignCode = ref('');
const selectedInstrument = ref('');
const selectedDayType = ref('');
const selectedTimeSlot = ref('');

const steps = ref(['サービス選択', '確認', '完了', '体験予約即決']);
function getStepClasses(index: number) {
  const baseClasses = [
    'text-xs font-bold text-center px-[10px] py-[6px] rounded-[10px] relative text-nowrap',
    'after:content-[""] after:absolute after:-bottom-[9px] after:left-1/2 after:-translate-x-1/2 after:w-[15px] after:h-2.5 after:[clip-path:polygon(50%_100%,0_0,100%_0)]',
  ];

  if (index === 0) {
    return [...baseClasses, 'bg-[#A794EC] text-white after:bg-[#A794EC]'];
  } else {
    return [...baseClasses, 'bg-[#DDDDDD] text-gray-500 after:bg-[#DDDDDD]'];
  }
}

function getStepSpacingClass(index: number) {
  // ステップ間の余白を調整
  switch (index) {
    case 0:
      return 'translate-x-[8px]'; // サービス選択の右側に余白
    case 1:
      return 'ml-[23px]'; // 確認の両側に余白
    case 2:
      return 'ml-[35px]'; // 完了の両側に余白
    case 3:
      return 'ml-[13px]'; // 体験予約開始の左側に余白
    default:
      return '';
  }
}

interface Instrument {
  value: string;
  label: string;
  image: string;
}

interface Course {
  typeName: string;
  typeImage: string;
  instruments: Instrument[];
  isOpen: boolean;
}

interface Studio {
  name: string;
  access: string;
  latitude: number;
  longitude: number;
}

interface Area {
  name: string;
  studios: Studio[];
}

const props = defineProps<{
  instruments: Course[];
  areas: Area[];
}>();

const selectedTab = ref('area');

const distance = ref(10);
const currentPosition = ref<GeolocationPosition | null>(null);
const loading = ref(false);
const error = ref(false);

const filteredStudiosByLocation = computed(() => {
  if (!currentPosition.value) {
    return [];
  }

  const { latitude, longitude } = currentPosition.value.coords;
  return getAllStudios().filter((studio) => {
    const studioDistance = getDistance(latitude, longitude, studio.latitude, studio.longitude);
    return studioDistance <= distance.value;
  });
});

const getCurrentLocation = () => {
  loading.value = true;
  error.value = false;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      currentPosition.value = position;
      loading.value = false;
    },
    () => {
      error.value = true;
      loading.value = false;
    }
  );
};

const keyword = ref('');

const filteredStudiosByKeyword = computed(() => {
  if (keyword.value === '') {
    return [];
  }

  const lowercaseKeyword = keyword.value.toLowerCase();
  return getAllStudios().filter((studio) => {
    const lowercaseName = studio.name.toLowerCase();
    const lowercaseAccess = studio.access.toLowerCase();
    return lowercaseName.includes(lowercaseKeyword) || lowercaseAccess.includes(lowercaseKeyword);
  });
});

const getAllStudios = () => {
  const studios: { name: string; access: string; latitude: number; longitude: number }[] = [];

  props.areas.forEach((area) => {
    area.studios.forEach((studio) => {
      studios.push(studio);
    });
  });

  return studios;
};

const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // 地球の半径（km）
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const emit = defineEmits(["submitFormData"])

const submitForm = () => {
  // バリデーションと送信処理を実装
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    firstNameKana: firstNameKana.value,
    lastNameKana: lastNameKana.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    selectedMethod: selectedMethod.value,
    selectedWeekdays: selectedWeekdays.value,
    selectedWeekends: selectedWeekends.value,
    selectedMorning: selectedMorning.value,
    selectedAfternoon: selectedAfternoon.value,
    selectedEvening: selectedEvening.value,
    campaignCode: campaignCode.value,
    selectedInstrument: selectedInstrument.value,
    distance: distance.value,
    currentPosition: currentPosition.value,
    keyword: keyword.value
  };
  emit('submitFormData', formData);
  window.location.href = '/'; // 仮のリンク
};
</script>
<template>
  <!-- まずは無料体験レッスン -->
  <div id="freetrial" class="mt-[102px]">
    <!-- 「まずは無料体験レッスン」の見出し -->
    <div class="pt-[58px] pb-[16px] bg-[#DDDDDD] relative">
      <img src="/images/heading_fukidashi-trial-lesson.svg" width="233" height="104" alt="まずは無料体験レッスン！" loading="lazy"
        class="absolute -top-[60px] left-1/2 -translate-x-1/2 drop-shadow-md" decoding="async" />
      <p class="text-[#AAAAAA] text-xl tracking-widest text-center mt-1">FREE TRIAL</p>
      <h3 class="text-xl tracking-widest text-center mt-3">
        無料体験レッスンお申し込み
      </h3>
    </div>
    <!-- /「まずは無料体験レッスン」の見出し -->

    <!-- 「まずは無料体験レッスン」のコンテンツ -->
    <div class="mx-auto max-w-screen-lg relative z-10">
      <!-- 「まずは無料体験レッスン」のヘッダー -->
      <div>
        <img srcset="
            /images/img_trial-lesson-lectures_sp.avif    1x,
            /images/img_trial-lesson-lectures_sp@2x.avif 2x
          " src="/images/img_trial-lesson-lectures_sp@2x.avif" width="2000" height="340" alt="" role="presentation"
          loading="lazy" class="w-full" decoding="async" />
      </div>
      <div>
        <div class="bg-white">
          <img srcset="
              /images/img_trial-lesson-header_sp.avif    1x,
              /images/img_trial-lesson-header_sp@2x.avif 2x
            " src="/images/img_trial-lesson-header_sp@2x.avif" width="2000" height="372" alt="" role="presentation"
            loading="lazy" class="w-full" decoding="async" />
        </div>
      </div>
      <!-- /「まずは無料体験レッスン」のヘッダー -->

      <form @submit.prevent="submitForm">
        <div class="py-[30px]   px-50  bg-white">
          <div class="max-w-[511px] mx-auto ">
            <div class="relative">
              <!-- ステップテキスト -->
              <div class="flex absolute w-full bottom-6  -translate-x-[8px]  px-5 ">
                <div v-for="(step, index) in steps" :key="index"
                  :class="['flex flex-col items-center', getStepSpacingClass(index)]">
                  <div :class="getStepClasses(index)">
                    {{ step }}
                  </div>
                </div>
              </div>

              <!-- バーの背景 -->
              <div class="h-1 bg-[#DDDDDD] rounded-full mt-12  w-[250px]  mx-auto"></div>

              <!-- ステップポイント -->
              <div
                class="flex justify-between absolute w-[260px] bottom-[1px] left-[36px]  transform translate-y-1/2  mx-auto translate-x-[22px]">
                <div v-for="(_, index) in steps" :key="index" class="flex flex-col items-center">
                  <div
                    class="w-[18px] h-[18px] bg-white rounded-full border-2 flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
                    <div :class="[
                      'w-2 h-2 rounded-full border-1 m-auto	',
                      index === 0
                        ? 'bg-[#A794EC] border-[#A794EC]'
                        : 'bg-[#DDDDDD] border-[#DDDDDD]',
                    ]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[50px] ">
            <!-- お名前（漢字） -->
            <div class="max-w-[840px] mx-auto px-5 ">
              <label class="tracking-wider flex items-center   " for="lastName">
                お名前（漢字）
                <span
                  class="text-white text-xs font-semibold py-[2px]  px-[6px] rounded bg-[#FF5555]  -translate-x-[1px]  -translate-y-[1px]">必須</span>
              </label>
              <label class="sr-only" for="firstName">名（漢字）</label>
              <div class="flex gap-[15px] mt-[11px]  ">
                <input id="lastName" v-model="lastName" type="text" required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="山田" />
                <input id="firstName" v-model="firstName" type="text" required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="太郎" />
              </div>
            </div>
            <!-- /お名前（漢字） -->

            <!-- お名前（かな） -->
            <div class="max-w-[840px] mx-auto mt-[18px]  px-5 ">
              <label class="tracking-wider flex items-center gap-2 " for="lastNameKana">
                お名前（かな）
              </label>
              <div class="flex gap-[15px] mt-2  ">
                <input id="lastNameKana" v-model="lastNameKana" type="text"
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="やまだ" />
                <input id="firstNameKana" v-model="firstNameKana" type="text"
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="たろう" />
                  <label for="firstNameKana" class="hidden"></label>
              </div>
            </div>
            <!-- /お名前（かな） -->

            <div class=" gap-[15px] max-w-[840px] mx-auto px-5  ">
              <!-- 電話番号 -->
              <div class="mt-5  w-full">
                <label class="tracking-wider flex items-center gap-2 " for="phoneNumber">
                  電話番号
                  <span class="text-white text-xs font-semibold py-[2px]  px-[6px] rounded bg-[#FF5555] ">必須</span>
                </label>
                <input id="phoneNumber" v-model="phoneNumber" type="tel" required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 mt-[10px]  tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="03-1234-5678" />
              </div>
              <!-- /電話番号 -->
              <!-- メールアドレス -->
              <div class="mt-5  w-full">
                <label class="tracking-wider flex items-center gap-2 " for="email">
                  メールアドレス
                  <span class="text-white text-xs font-semibold py-[2px]  px-[6px] rounded bg-[#FF5555] ">必須</span>
                </label>
                <input id="email" v-model="email" type="email" required autocomplete="email"
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 mt-[10px]  tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="name@abcdefg.com" />
              </div>
              <!-- /メールアドレス -->
            </div>

            <!-- ご希望のコース -->
            <div class="mt-5 ">
              <div class="tracking-wider flex items-center gap-2 max-w-[840px] mx-auto px-5  ">
                ご希望のコース
                <span class="text-white text-xs font-semibold py-[2px]  px-[6px] rounded bg-[#FF5555] ">必須</span>
              </div>
              <div class="mt-[16px] bg-[#F9F9F9] pb-2">
                <div class="max-w-[840px] px-5  pt-[10px]   grid-cols-2 gap-x-10 gap-y-[19px] place-items-start ">
                  <div v-for="(course, index) in instruments" :key="index"
                    class="w-full rounded-[10px] mt-[10px] shadow-md overflow-hidden  ">
                    <div class="flex items-center h-[59px]  w-full bg-white cursor-pointer"
                      @click="course.isOpen = !course.isOpen">
                      <div class="w-[92px] h-full shrink-0 bg-[#EEEEEE]">
                        <img :src="course.typeImage" width="54" height="77" alt="" role="presentation" loading="lazy"
                          class="w-full h-full object-contain" decoding="async" />
                      </div>
                      <div class="w-full flex justify-between items-center px-4">
                        <span class="text-sm font-semibold">{{ course.typeName }}</span>
                        <svg :class="{ 'rotate-180': course.isOpen }" class="w-6 h-6 transition-transform" fill="none"
                          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div v-show="course.isOpen" class="grid grid-cols-4">
                      <div v-for="(instrument, index2) in course.instruments" :key="instrument.value"
                        class="relative aspect-square">
                        <input :id="`${instrument.value}-${index2}`" v-model="selectedInstrument" type="radio"
                          :value="instrument.value" class="opacity-0 absolute inset-0 -z-10" />
                        <label :for="`${instrument.value}-${index2}`" class="text-sm block w-full h-full">
                          <img :src="`/images/img_instrument-course-${index + 1}-${index2 + 1}.avif`" width="170"
                            height="170" alt="" role="presentation" loading="lazy" class="w-full h-full object-cover"
                            decoding="async" />
                          <span
                            class="text-[8px] h-7 w-full grid place-items-center font-semibold whitespace-nowrap absolute bottom-0 inset-x-0 z-20"
                            :class="selectedInstrument === instrument.value
                              ? 'text-white'
                              : 'bg-gradient-to-b from-transparent from-0 via-white via-20% to-white'
                              ">{{ instrument.label }}</span>
                          <img v-if="selectedInstrument === instrument.value" srcset="
                              /images/ui_check-filter.avif    1x,
                              /images/ui_check-filter@2x.avif 2x
                            " src="/images/ui_check-filter@2x.avif" width="83" height="82" alt="" role="presentation"
                            loading="lazy" class="w-full h-full absolute inset-0 z-10" decoding="async" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /ご希望のコース -->

            <!-- ご希望の受講方法 -->
            <div class="max-w-[840px] mx-auto mt-8  px-5 ">
              <div class="tracking-wider flex items-center gap-2 " for="classroom">
                ご希望の受講方法
                <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] ">必須</span>
              </div>
              <div class="flex gap-4  mt-[10px] ">
                <div class=" w-full border border-[#CCCCCC] rounded-lg overflow-hidden relative bg-white">
                  <input id="classroom1" v-model="selectedMethod" type="radio" value="classroom" required
                    class="absolute inset-0 w-full h-full z-20 opacity-0 cursor-pointer" />
                  <div class="h-[118px]  ">
                    <img srcset="
                        /images/img_lecture-offline.avif    1x,
                        /images/img_lecture-offline@2x.avif 2x
                      " src="/images/img_lecture-offline@2x.avif" width="190" height="98" alt="" role="presentation"
                      class="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <img v-if="selectedMethod === 'classroom'" srcset="
                          /images/method_check-filter_sp.avif    1x,
                          /images/method_check-filter_sp@2x.avif 2x
                        " src="/images/method_check-filter_sp@2x.avif" width="83" height="82" alt=""
                      role="presentation" loading="lazy" class="w-full h-full absolute inset-0 z-10" decoding="async" />
                  </div>
                  <label for="classroom1" class="font-semibold tracking-wider text-center py-3 grid  "
                    :class="selectedMethod === 'classroom' ? 'text-white z-20 relative' : ''">
                    教室に来校して<br />レッスン
                  </label>
                </div>

                <div class=" w-full border border-[#CCCCCC] rounded-lg overflow-hidden relative bg-white">
                  <input id="classroom2" v-model="selectedMethod" type="radio" value="online" required
                    class="absolute inset-0 w-full h-full z-20 opacity-0 cursor-pointer" />
                  <div class="h-[118px]  ">
                    <img srcset="
                        /images/img_lecture-online.avif    1x,
                        /images/img_lecture-online@2x.avif 2x
                      " src="/images/img_lecture-online@2x.avif" width="190" height="98" alt="" role="presentation"
                      class="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <img v-if="selectedMethod === 'online'" srcset="
                          /images/method_check-filter_sp.avif    1x,
                          /images/method_check-filter_sp@2x.avif 2x
                        " src="/images/method_check-filter_sp@2x.avif" width="83" height="82" alt=""
                      role="presentation" loading="lazy" class="w-full h-full absolute inset-0 z-10" decoding="async" />
                  </div>
                  <label for="classroom2" class="font-semibold tracking-wider text-center py-3 grid  "
                    :class="selectedMethod === 'online' ? 'text-white z-20 relative' : ''">
                    オンラインでの<br />レッスン
                  </label>
                </div>
              </div>
            </div>
            <!-- /ご希望の受講方法 -->

            <!-- ご希望のスペース -->
            <div class="mx-auto mt-5">
              <div class="tracking-wider flex items-center gap-2 px-5">
                ご希望のスペース
                <span
                  class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] -translate-x-[2px]">必須</span>
              </div>
              <div class="px-4 mt-[14px] ">
                <div class="text-center">
                  <div class="flex border border-[#CCCCCC] rounded-full bg-white -translate-x-[3px]">
                    <div :class="[
                      'relative w-1/3 h-[50px] text-sm tracking-wider grid place-items-center cursor-pointer',
                      { 'text-white font-semibold': selectedTab === 'area' },
                    ]" @click="selectedTab = 'area'">
                      <span class="relative z-10">エリア<br class="" />から選ぶ</span>
                      <div v-if="selectedTab === 'area'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                      </div>
                    </div>
                    <div :class="[
                      'relative w-1/3  h-[50px] text-sm  tracking-wider grid place-items-center cursor-pointer',
                      { 'text-white font-semibold': selectedTab === 'location' },
                    ]" @click="selectedTab = 'location'">
                      <span class="relative z-10">現在地<br class="" />から選ぶ</span>
                      <div v-if="selectedTab === 'location'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                      </div>
                    </div>
                    <div :class="[
                      'relative w-1/3  h-[50px] text-sm  tracking-wider grid place-items-center cursor-pointer',
                      { 'text-white font-semibold': selectedTab === 'keyword' },
                    ]" @click="selectedTab = 'keyword'">
                      <span class="relative z-10">キーワード<br class="" />で検索</span>
                      <div v-if="selectedTab === 'keyword'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-[24px] translate-x-[0px]">
                  <div v-show="selectedTab === 'area'">
                    <div v-for="area in areas" :key="area.name" class="mt-[10px] border border-[#AAAAAA]">
                      <h3
                        class="text-white  font-semibold tracking-widest bg-[#AAAAAA] flex items-center gap-[15px] px-[18px] h-10 ">
                        {{ area.name
                        }}<span
                          class="w-[30px] h-[30px] rounded-full text-black bg-white shadow-md grid place-items-center -tracking-wider -translate-x-[10px]">{{
                            area.studios.length }}</span>
                      </h3>
                      <div class="grid grid-cols-1 ">
                        <div v-for="studio, i in area.studios" :key="i" class="border-[0.5px] border-[#AAAAAA]">
                          <label :for="`${studio.name}-${i}`" class="flex items-center px-[13px] py-2   h-full w-full bg-white">
                            <input type="checkbox" :id="`${studio.name}-${i}`" :value="studio.name" class="w-5 h-5 border-[#AAAAAA] rounded" />
                            <span class="tracking-widest flex  items-center  ml-3">
                              {{ studio.name }}
                              <span class="text-xs text-[#666666] ml-3">{{ studio.access }}</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-show="selectedTab === 'location'">
                    <div>
                      <label for="location">
                        距離（km）：
                        <input id="location" v-model.number="distance" type="number" min="1" />
                      </label>
                      <button @click="getCurrentLocation">現在地から絞り込む</button>
                    </div>
                    <div v-if="loading">位置情報を取得中...</div>
                    <div v-else-if="error">位置情報の取得に失敗しました。</div>
                    <div v-else-if="filteredStudiosByLocation.length > 0">
                      <h3>現在地から {{ distance }} km 以内のスタジオ</h3>
                      <div v-for="studio, i in filteredStudiosByLocation" :key="i">
                        <label :for="`${studio.name}-${i}`">
                          <input :id="`${studio.name}-${i}`" type="checkbox" :value="studio.name" />
                          {{ studio.name }}
                          <span>{{ studio.access }}</span>
                        </label>
                      </div>
                    </div>
                    <div v-else>現在地から {{ distance }} km 以内のスタジオはありません。</div>
                  </div>

                  <div v-show="selectedTab === 'keyword'">
                    <div>
                      <label for="keyword">
                        キーワードで検索：
                        <input id="keyword" v-model="keyword" type="text" />
                      </label>
                    </div>
                    <div v-if="filteredStudiosByKeyword.length > 0">
                      <h3>検索結果</h3>
                      <div v-for="studio, i in filteredStudiosByKeyword" :key="studio.name">
                        <label :for="`${studio.name}-${i}`">
                          <input :id="`${studio.name}-${i}`" type="checkbox" :value="studio.name" />
                          {{ studio.name }}
                          <span>{{ studio.access }}</span>
                        </label>
                      </div>
                    </div>
                    <div v-else>一致するスタジオはありません。</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /ご希望のスペース -->

            <div class="max-w-[840px] mx-auto mt-5  px-5">
              <div class="tracking-wider flex items-center gap-2.5 ">
                ご希望のスケジュール
                <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] ">必須</span>
              </div>
              <div class="flex gap-x-10 px-4 mt-3.5 ml-[14px]">
                <div class="flex items-center gap-[15px]">
                  <input id="weekdays" v-model="selectedDayType" type="radio" value="weekdays" name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150" />
                  <label for="weekdays" class="tracking-wider cursor-pointer translate-x-[2px]">
                    平日
                  </label>
                </div>
                <div class="flex items-center gap-[15px] ml-[6px]">
                  <input id="weekends" v-model="selectedDayType" type="radio" value="weekends" name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150" />
                  <label for="weekends" class="tracking-wider cursor-pointer translate-x-[2px]">
                    祝休日
                  </label>
                </div>
              </div>
            </div>
            <div class="max-w-[840px] mx-auto mt-5  px-5">
              <div class="tracking-wider flex items-center gap-2.5 ">
                ご希望の時間帯
                <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] ">必須</span>
              </div>
              <div class="flex gap-x-11 gap-y-5 flex-wrap px-4 mt-3.5 ml-[10px]">
                <div class="flex items-center gap-[15px]">
                  <input id="morning" v-model="selectedTimeSlot" type="radio" name="timeSlot" value="morning"
                    class="form-radio text-primary focus:ring-primary scale-150" />
                  <label for="morning" class="tracking-wider cursor-pointer translate-x-[6px]">
                    10時〜14時
                  </label>
                </div>
                <div class="flex items-center gap-[15px] ml-[12px]">
                  <input id="afternoon" v-model="selectedTimeSlot" type="radio" name="timeSlot" value="afternoon"
                    class="form-radio text-primary focus:ring-primary scale-150" />
                  <label for="afternoon" class="tracking-wider cursor-pointer translate-x-[6px]">
                    14時〜18時
                  </label>
                </div>
                <div class="flex items-center gap-[15px]">
                  <input id="evening" v-model="selectedTimeSlot" type="radio" name="timeSlot" value="evening"
                    class="form-radio text-primary focus:ring-primary scale-150" />
                  <label for="evening" class="tracking-wider cursor-pointer translate-x-[5px]">
                    18時〜21時
                  </label>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full mx-auto mt-5  px-5">
              <label class="tracking-wider" for="campaignCode">
                キャンペーンコード
              </label>
              <input id="campaignCode" v-model="campaignCode" type="text"
                class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
                placeholder="キャンペーンコードがあれば入力" />
            </div>
          </div>
        </div>
        <div class="py-[30px]  bg-[#DDDDDD] flex justify-center">
          <button type="submit"
            class="bg-white border-[#6688DD] border-2 rounded-full w-[300px] h-[50px] text-[#6688DD] font-bold"
            aria-label="無料体験レッスンに申し込む">
            無料体験レッスンに申し込む
          </button>
        </div>
      </form>
    </div>
    <!-- 「まずは無料体験レッスン」のコンテンツ -->
  </div>
  <!-- /まずは無料体験レッスン -->
</template>
