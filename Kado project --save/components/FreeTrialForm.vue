<script setup lang="ts">
/* フォーム */
const firstName = ref('');
const lastName = ref('');
const firstNameKana = ref('');
const lastNameKana = ref('');
const phoneNumber = ref('');
const email = ref('');
const selectedMethod = ref('');
const selectedDayType = ref('');
const selectedTimeSlot = ref('');
const selectedWeekdays = ref(false);
const selectedWeekends = ref(false);
const selectedMorning = ref(false);
const selectedAfternoon = ref(false);
const selectedEvening = ref(false);
const campaignCode = ref('');
const selectCourse = ref('小原流');

const steps = ref(['サービス選択', '確認', '完了', '体験予約即決']);
function getStepClasses(index : number) {
  const baseClasses = [
    'text-xs font-bold text-center px-[10px] lg:px-[20px] py-[6px] lg:py-2 rounded-[10px] relative text-nowrap',
    'after:content-[""] after:absolute after:-bottom-[9px] after:left-1/2 after:-translate-x-1/2 after:w-[15px] after:h-2.5 after:[clip-path:polygon(50%_100%,0_0,100%_0)]',
  ];

  if (index === 0) {
    return [...baseClasses, 'bg-[#A794EC] text-white after:bg-[#A794EC]'];
  } else {
    return [...baseClasses, 'bg-[#DDDDDD] text-gray-500 after:bg-[#DDDDDD]'];
  }
}

function getStepSpacingClass(index : number) {
  // ステップ間の余白を調整
  switch (index) {
    case 0:
      return 'translate-x-[8px] lg:translate-x-0'; // サービス選択の右側に余白
    case 1:
      return 'ml-[23px] lg:ml-[45px]'; // 確認の両側に余白
    case 2:
      return 'ml-[35px] lg:ml-[68px]'; // 完了の両側に余白
    case 3:
      return 'ml-[13px] lg:ml-[44px]'; // 体験予約開始の左側に余白
    default:
      return '';
  }
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
  course: {
    ikebana: {
      name: string;
      image: string;
      sp_image: string;
    }[];
    flowers: {
      name: string;
      image: string;
      sp_image: string;
    }[]
  };
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
  <div id="freetrial" class="mt-[102px] lg:mt-[140px]">
    <!-- 「まずは無料体験レッスン」の見出し -->
    <div class="pt-[58px] lg:pt-[75px] pb-[16px] lg:pb-[480px] bg-[#DDDDDD] relative">
      <picture>
        <source
          media="(max-width: 1024px)"
          srcset="/images/heading_fukidashi-trial-lesson_sp.svg"
          type="image/svg+xml"
        />
        <img
          src="/images/heading_fukidashi-trial-lesson.svg"
          width="353"
          height="135"
          alt="まずは無料体験レッスン！"
          loading="lazy"
          class="w-[295px] h-auto -top-[77px] lg:w-[353px] absolute lg:-top-24 left-1/2 -translate-x-1/2 drop-shadow-md"
          decoding="async"
        />
      </picture>

      <img src="/images/freetrial-form-title.svg" alt="FREE TRIAL" width="300" height="57" loading="lazy" decoding="async" class="w-[210px] lg:w-[300px] h-auto mx-auto mt-1 lg:mt-0" />
      <h3 class="text-xl lg:text-[30px] font-bold tracking-widest text-center mt-3 lg:mt-6">
        無料体験レッスンお申し込み
      </h3>
    </div>
    <!-- /「まずは無料体験レッスン」の見出し -->

    <!-- 「まずは無料体験レッスン」のコンテンツ -->
    <div class="lg:-mt-[440px] mx-auto max-w-screen-lg lg:shadow relative z-10">
      <!-- 「まずは無料体験レッスン」のヘッダー -->
      <div>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcset="/images/img_trial-lesson-lectures_sp.webp"
            type="image/webp"
          />
          <img
            src="/images/img_trial-lesson-lectures_pc.webp"
            width="2000"
            height="340"
            alt="trial"
            role="presentation"
            loading="lazy"
            class="w-full"
            decoding="async"
          />
        </picture>
      </div>
      <div>
        <div class="bg-white">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/img_trial-lesson-header_sp.svg"
              type="image/svg+xml"
            />
            <img
              src="/images/img_trial-lesson-header_pc.svg"
              width="2000"
              height="372"
              alt="trial lesson"
              role="presentation"
              loading="lazy"
              class="w-full"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <!-- /「まずは無料体験レッスン」のヘッダー -->

      <form @submit.prevent="submitForm">
        <div class="py-[30px] lg:pt-5 lg:-mt-4 px-50 lg:px-[0px] bg-white">
          <div class="max-w-[511px] mx-auto lg:mt-8">
            <div class="relative">
              <div class="flex absolute w-full bottom-6 lg:bottom-6 -translate-x-[8px] lg:translate-x-0 px-5 lg:px-0">
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  :class="['flex flex-col items-center', getStepSpacingClass(index)]"
                >
                  <div :class="getStepClasses(index)">
                    {{ step }}
                  </div>
                </div>
              </div>
              <div class="h-1 bg-[#DDDDDD] rounded-full mt-12 lg:mt-[68px] w-[250px] lg:w-[410px] mx-auto"></div>
              <div
                class="flex justify-between absolute w-[260px] bottom-[1px] left-[36px] lg:left-[24px] transform translate-y-1/2 lg:w-[414px] mx-auto translate-x-[22px]"
              >
                <div
                  v-for="(_, index) in steps"
                  :key="index"
                  class="flex flex-col items-center"
                >
                  <div
                    class="w-[18px] h-[18px] bg-white rounded-full border-2 flex items-center justify-center shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                  >
                    <div
                      :class="[
                        'w-2 h-2 rounded-full border-1 m-auto	',
                        index === 0
                          ? 'bg-[#A794EC] border-[#A794EC]'
                          : 'bg-[#DDDDDD] border-[#DDDDDD]',
                      ]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[50px] lg:mt-[50px]">
            <!-- お名前（漢字） -->
            <div class="max-w-[840px] mx-auto px-5 lg:px-[20px]">
              <label
                class="tracking-wider flex items-center lg:gap-2 lg:leading-[1.25rem] "
                for="lastName"
              >
                お名前（漢字）
                <span
                  class="text-white text-xs font-semibold py-[2px] lg:py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem] -translate-x-[1px] lg:-translate-x-[8px] -translate-y-[1px]"
                  >必須</span
                >
              </label>
              <label
                class="sr-only"
                for="firstName"
                >名（漢字）</label
              >
              <div class="flex gap-[15px] mt-[11px] lg:mt-[14px] lg:gap-10">
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="山田"
                />
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="太郎"
                />
              </div>
            </div>
            <!-- /お名前（漢字） -->

            <!-- お名前（かな） -->
            <div class="max-w-[840px] mx-auto mt-[18px] lg:mt-[28px] px-5 lg:px-[20px]">
              <label
                class="tracking-wider flex items-center gap-2 lg:leading-[1.25rem]"
                for="lastNameKana"
              >
                お名前（かな）
                <!-- <span
                  class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                  >必須</span
                > -->
              </label>
              <div class="flex gap-[15px] mt-2 lg:mt-[14px] lg:gap-10">
                <input
                  id="lastNameKana"
                  v-model="lastNameKana"
                  type="text"
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="やまだ"
                />
                <input
                  id="firstNameKana"
                  v-model="firstNameKana"
                  type="text"
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="たろう"
                />
              </div>
            </div>
            <!-- /お名前（かな） -->

            <div class="lg:flex gap-[15px] max-w-[840px] mx-auto px-5 lg:px-[20px] lg:gap-10">
              <!-- 電話番号 -->
              <div class="mt-5 lg:mt-[30px] w-full">
                <label
                  class="tracking-wider flex items-center gap-2 lg:leading-[1.25rem]"
                  for="phoneNumber"
                >
                  電話番号
                  <span
                    class="text-white text-xs font-semibold py-[2px] lg:py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                    >必須</span
                  >
                </label>
                <input
                  id="phoneNumber"
                  v-model="phoneNumber"
                  type="tel"
                  required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 mt-[10px] lg:mt-[14px] tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="03-1234-5678"
                />
              </div>
              <!-- /電話番号 -->
              <!-- メールアドレス -->
              <div class="mt-5 lg:mt-[30px] w-full">
                <label
                  class="tracking-wider flex items-center gap-2 lg:leading-[1.25rem]"
                  for="email"
                >
                  メールアドレス
                  <span
                    class="text-white text-xs font-semibold py-[2px] lg:py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                    >必須</span
                  >
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none border border-[#CCCCCC] rounded-lg w-full p-4 py-3 mt-[10px] lg:mt-[14px] tracking-widest focus:outline-none focus:shadow-outline"
                  placeholder="name@abcdefg.com"
                />
              </div>
              <!-- /メールアドレス -->
            </div>

            <!-- ご希望のコース -->
            <div class="mt-5 lg:mt-[30px]">
              <div
                class="tracking-wider flex items-center gap-2 max-w-[840px] mx-auto px-5 lg:leading-[1.25rem] lg:px-[20px]"
              >
                ご希望のコース
                <span
                  class="text-white text-xs font-semibold py-[2px] lg:py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                  >必須</span
                >
              </div>
              <div class="w-full bg-[#F9F9F9] px-[146px] py-8 flex justify-between mt-5 max-lg:p-5 max-lg:flex-col max-lg:gap-5">
                <div class="flex flex-col">
                  <p class="text-center bg-[#A794EC] py-2 text-white font-semibold rounded-t-[10px]">華道</p>
                  <div class="grid grid-cols-4 bg-[#DDDDDD] gap-[1px] p-[1px] max-lg:grid-cols-2">
                    <div v-for="item, i of course.ikebana" :key="i" @click="selectCourse = item.name" class="w-[112px] bg-white max-lg:w-[166px] relative">
                      <picture>
                        <source
                          media="(max-width: 1024px)"
                          :srcset="item.sp_image"
                          type="image/webp"
                        />
                        <img
                          :src="item.image"
                          width="112"
                          height="80"
                          :alt="item.name"
                          loading="lazy"
                          class="w-full h-auto object-cover"
                          decoding="async"
                        />
                      </picture>
                      <p class="text-xs text-center font-semibold pt-2.5 pb-3.5 relative z-20 max-lg:pb-3" :class="selectCourse === item.name && 'text-white'">{{ item.name }}</p>
                      <picture v-if="selectCourse === item.name">
                        <source
                          media="(max-width: 1024px)"
                          srcset="/images/course-selected-sp.svg"
                          type="image/svg+xml"
                        />
                        <img
                          src="/images/course-selected-pc.svg"
                          width="112"
                          height="80"
                          alt="selected"
                          loading="lazy"
                          class="w-full h-auto object-cover absolute z-10 top-0 left-0"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <p class="text-center bg-[#A794EC] py-2 text-white font-semibold rounded-t-[10px]">アレンジフラワー</p>
                  <div class="grid grid-cols-2 gap-[1px] bg-[#DDDDDD] p-[1px]">
                    <div v-for="item, i of course.flowers" :key="i" @click="selectCourse = item.name" class="w-[112px] bg-white max-lg:w-[166px] relative">
                      <picture>
                        <source
                          media="(max-width: 1024px)"
                          :srcset="item.sp_image"
                          type="image/webp"
                        />
                        <img
                          :src="item.image"
                          width="112"
                          height="80"
                          :alt="item.name"
                          loading="lazy"
                          class="w-full h-auto object-cover"
                          decoding="async"
                        />
                      </picture>
                      <p class="text-xs text-center font-semibold pt-2.5 pb-3.5 relative z-20 max-lg:pb-3" :class="selectCourse === item.name && 'text-white'">{{ item.name }}</p>
                      <picture v-if="selectCourse === item.name">
                        <source
                          media="(max-width: 1024px)"
                          srcset="/images/course-selected-sp.svg"
                          type="image/svg+xml"
                        />
                        <img
                          src="/images/course-selected-pc.svg"
                          width="112"
                          height="80"
                          alt="selected"
                          loading="lazy"
                          class="w-full h-auto object-cover absolute z-10 top-0 left-0"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /ご希望のコース -->

            <!-- ご希望のスペース -->
            <div class="mx-auto mt-5 lg:mt-[28px] lg:px-[115px]">
              <div
                class="tracking-wider flex items-center gap-2 lg:leading-[0.75rem] max-lg:px-5"
              >
                ご希望のスペース
                <span
                  class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem] -translate-x-[2px]"
                  >必須</span
                >
            </div>
              <div class="px-4 mt-[14px] lg:px-0">
                <div class="text-center">
                  <div class="flex lg:inline-flex border border-[#CCCCCC] rounded-full bg-white -translate-x-[3px]">
                    <div
                      :class="[
                        'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                        { 'text-white font-semibold': selectedTab === 'area' },
                      ]"
                      @click="selectedTab = 'area'"
                    >
                      <span class="relative z-10">エリア<br class="lg:hidden" />から選ぶ</span>
                      <div
                        v-if="selectedTab === 'area'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                    <div
                      :class="[
                        'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                        { 'text-white font-semibold': selectedTab === 'location' },
                      ]"
                      @click="selectedTab = 'location'"
                    >
                      <span class="relative z-10">現在地<br class="lg:hidden" />から選ぶ</span>
                      <div
                        v-if="selectedTab === 'location'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                    <div
                      :class="[
                        'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                        { 'text-white font-semibold': selectedTab === 'keyword' },
                      ]"
                      @click="selectedTab = 'keyword'"
                    >
                      <span class="relative z-10">キーワード<br class="lg:hidden" />で検索</span>
                      <div
                        v-if="selectedTab === 'keyword'"
                        class="absolute inset-0 bg-[#A794EC] rounded-full z-0 before:border-transparent before:border-t-[#A794EC] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="mt-[24px] translate-x-[0px]">
                  <div v-show="selectedTab === 'area'">
                    <div
                      v-for="area in areas"
                      :key="area.name"
                      class="mt-[10px] border border-[#AAAAAA]"
                    >
                      <h3
                        class="text-white lg:text-lg font-semibold tracking-widest bg-[#AAAAAA] flex items-center gap-[15px] px-[18px] h-10 lg:h-[50px]"
                      >
                        {{ area.name
                        }}<span
                          class="w-[30px] h-[30px] rounded-full text-black bg-white shadow-md grid place-items-center -tracking-wider -translate-x-[10px]"
                          >{{ area.studios.length }}</span
                        >
                      </h3>
                      <div class="grid grid-cols-1 lg:grid-cols-3">
                        <div
                          v-for="studio, i in area.studios"
                          :key="studio.name"
                          class="border-[0.5px] border-[#AAAAAA]"
                        >
                          <label
                            :for="`${studio.name}${i}`"
                            class="flex items-center px-[13px] py-2 lg:pt-[8px] lg:pb-[5px] h-full w-full bg-white"
                          >
                            <input
                              type="checkbox"
                              :id="`${studio.name}${i}`"
                              :value="studio.name"
                              class="w-5 h-5 border-[#AAAAAA] rounded"
                            />
                            <span
                              class="tracking-widest flex lg:flex-col items-center lg:items-start ml-3"
                            >
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
                        <input
                          id="location"
                          v-model.number="distance"
                          type="number"
                          min="1"
                        />
                      </label>
                      <button @click="getCurrentLocation">現在地から絞り込む</button>
                    </div>
                    <div v-if="loading">位置情報を取得中...</div>
                    <div v-else-if="error">位置情報の取得に失敗しました。</div>
                    <div v-else-if="filteredStudiosByLocation.length > 0">
                      <h3>現在地から {{ distance }} km 以内のスタジオ</h3>
                      <div
                        v-for="studio in filteredStudiosByLocation"
                        :key="studio.name"
                      >
                        <label :for="studio.name">
                          <input
                            :id="studio.name"
                            type="checkbox"
                            :value="studio.name"
                          />
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
                        <input
                          id="keyword"
                          v-model="keyword"
                          type="text"
                        />
                      </label>
                    </div>
                    <div v-if="filteredStudiosByKeyword.length > 0">
                      <h3>検索結果</h3>
                      <div
                        v-for="studio in filteredStudiosByKeyword"
                        :key="studio.name"
                      >
                        <label :for="studio.name">
                          <input
                            :id="studio.name"
                            type="checkbox"
                            :value="studio.name"
                          />
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

            <div class="max-w-[840px] mx-auto mt-5 lg:mt-[30px] px-5">
              <div class="tracking-wider flex items-center gap-2.5 lg:leading-[1.25rem]">
                ご希望のスケジュール
                <span
                  class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                  >必須</span
                >
              </div>
              <div class="flex gap-x-10 px-4 mt-3.5 ml-[14px]">
                <div class="flex items-center gap-[15px]">
                  <input
                    id="weekdays"
                    v-model="selectedDayType"
                    type="radio"
                    value="weekdays"
                    name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="weekdays"
                    class="tracking-wider cursor-pointer translate-x-[2px]"
                  >
                    平日
                  </label>
                </div>
                <div class="flex items-center gap-[15px] ml-[6px]">
                  <input
                    id="weekends"
                    v-model="selectedDayType"
                    type="radio"
                    value="weekends"
                    name="dayType"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="weekends"
                    class="tracking-wider cursor-pointer translate-x-[2px]"
                  >
                    祝休日
                  </label>
                </div>
              </div>
            </div>
            <div class="max-w-[840px] mx-auto mt-5 lg:mt-[26px] px-5">
              <div class="tracking-wider flex items-center gap-2.5 lg:leading-[1.25rem]">
                ご希望の時間帯
                <span
                  class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#FF5555] lg:leading-[0.75rem]"
                  >必須</span
                >
              </div>
              <div class="flex gap-x-11 gap-y-5 flex-wrap px-4 mt-3.5 ml-[10px]">
                <div class="flex items-center gap-[15px]">
                  <input
                    id="morning"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="morning"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="morning"
                    class="tracking-wider cursor-pointer translate-x-[6px]"
                  >
                    10時〜14時
                  </label>
                </div>
                <div class="flex items-center gap-[15px] lg:ml-[12px]">
                  <input
                    id="afternoon"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="afternoon"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="afternoon"
                    class="tracking-wider cursor-pointer translate-x-[6px]"
                  >
                    14時〜18時
                  </label>
                </div>
                <div class="flex items-center gap-[15px] lg:ml-[13px]">
                  <input
                    id="evening"
                    v-model="selectedTimeSlot"
                    type="radio"
                    name="timeSlot"
                    value="evening"
                    class="form-radio text-primary focus:ring-primary scale-150"
                  />
                  <label
                    for="evening"
                    class="tracking-wider cursor-pointer translate-x-[5px]"
                  >
                    18時〜21時
                  </label>
                </div>
              </div>
            </div>
            <div class="flex flex-col  max-w-[840px] mx-auto mt-5 lg:mt-[24px] px-5">
              <label
                class="tracking-wider"
                for="campaignCode"
              >
                キャンペーンコード
              </label>
              <input
                id="campaignCode"
                v-model="campaignCode"
                type="text"
                class="appearance-none border border-[#CCCCCC] rounded-lg w-[380px] p-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
                placeholder="キャンペーンコードがあれば入力"
              />
            </div>
          </div>
        </div>
        <div class="py-[30px] lg:py-10 bg-[#DDDDDD] flex justify-center">
          <button
            type="submit"
            class="bg-white border border-black w-[335px] h-[50px] grid place-items-center"
            aria-label="無料体験レッスンに申し込む"
          >
            無料体験レッスンに申し込む
          </button>
        </div>
      </form>
    </div>
    <!-- 「まずは無料体験レッスン」のコンテンツ -->
  </div>
  <!-- /まずは無料体験レッスン -->
</template>
