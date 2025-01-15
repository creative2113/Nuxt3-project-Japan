<script setup lang="ts">
const emit = defineEmits(["submitFormData"]);

const props = defineProps({
  areas: {
    type: Array as PropType<
      Array<{
        name: string;
        studios: Array<{
          name: string;
          access: string;
          latitude: number;
          longitude: number;
        }>;
      }>
    >,
    default: () => [],
  },
});

/* フォーム */

const firstName = ref("");
const lastName = ref("");
const firstNameKana = ref("");
const lastNameKana = ref("");
const phoneNumber = ref("");
const email = ref("");
const selectedMethod = ref("");
const selectedWeekdays = ref(false);
const selectedWeekends = ref(false);
const selectedMorning = ref(false);
const selectedAfternoon = ref(false);
const selectedEvening = ref(false);
const campaignCode = ref("");
const selectedInstrument = ref("");

const selectedTab = ref("area");

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
    const studioDistance = getDistance(
      latitude,
      longitude,
      studio.latitude,
      studio.longitude
    );
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

const keyword = ref("");

const filteredStudiosByKeyword = computed(() => {
  if (keyword.value === "") {
    return [];
  }

  const lowercaseKeyword = keyword.value.toLowerCase();
  return getAllStudios().filter((studio) => {
    const lowercaseName = studio.name.toLowerCase();
    const lowercaseAccess = studio.access.toLowerCase();
    return (
      lowercaseName.includes(lowercaseKeyword) ||
      lowercaseAccess.includes(lowercaseKeyword)
    );
  });
});

const getAllStudios = () => {
  const studios: {
    name: string;
    access: string;
    latitude: number;
    longitude: number;
  }[] = [];

  props.areas.forEach((area) => {
    area.studios.forEach((studio) => {
      studios.push(studio);
    });
  });

  return studios;
};

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // 地球の半径（km）
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};

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
    keyword: keyword.value,
  };

  emit("submitFormData", formData);
};
const cover = ref(true);
function toggleCover() {
  cover.value = !cover.value;
}
</script>
<template>
  <FreeTrialCover v-if="cover" @toggle-cover="toggleCover" />
  <div class="mx-auto max-w-[1000px] w-full z-10 relative pb-[80px] -mt-[60px]">
    <!-- 「まずは無料体験レッスン」のヘッダー -->
    <div class="px-[11px] lg:px-5 pb-2 lg:pb-0 pt-7 bg-white lg:rounded-t-20 lg:pt-[55px] relative">
      <img src="/images/progress-bar.svg" alt="about user" width="513" height="79" loading="lazy"
        class="w-[513px] mx-auto h-auto max-lg:hidden" />
      <img src="/images/progress-bar-sp.svg" alt="about user" width="337" height="79" loading="lazy"
        class="w-full mx-auto h-auto lg:hidden" />
    </div>
    <!-- /「まずは無料体験レッスン」のヘッダー -->

    <form @submit.prevent="submitForm">
      <div class="pt-[30px] pb-[29px] lg:pt-5 lg:pb-[60px] shadow-md rounded-[7px] overflow-hidden bg-white">
        <!-- お名前（漢字） -->
        <div class="max-w-[840px] mx-auto px-5 lg:px-5 mt-6">
          <label class="tracking-wider flex items-center gap-2" for="lastName">
            お名前（漢字）
            <span
              class="text-white text-xs font-semibold py-[2px] px-[6px] -translate-x-3 rounded bg-[#E39597]">必須</span>
          </label>
          <label class="sr-only" for="firstName">名（漢字）</label>
          <div class="flex gap-[15px] lg:gap-10 mt-[10px]">
            <input id="lastName" v-model="lastName" type="text" required
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="山田" />
            <input id="firstName" v-model="firstName" type="text" required
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="太郎" />
          </div>
        </div>
        <!-- /お名前（漢字） -->

        <!-- お名前（かな） -->
        <div class="max-w-[840px] mx-auto mt-4 lg:mt-[30px] px-5 lg:px-5">
          <label class="tracking-wider flex items-center gap-2" for="lastNameKana">
            お名前（かな）
            <!-- <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#E39597]">必須</span> -->
          </label>
          <div class="flex gap-[15px] lg:gap-10 mt-[10px]">
            <input id="lastNameKana" v-model="lastNameKana" type="text"
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="やまだ" />
            <input id="firstNameKana" v-model="firstNameKana" type="text"
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="たろう" />
          </div>
        </div>
        <!-- /お名前（かな） -->
        <div class="lg:flex gap-[15px] lg:gap-10 max-w-[840px] mx-auto px-5 lg:px-5">
          <!-- 電話番号 -->
          <div class="mt-5 lg:mt-[30px] w-full">
            <label class="tracking-wider flex items-center gap-2" for="phoneNumber">
              電話番号
              <span class="text-white text-xs font-semibold py-[2px] px-[6px] rounded bg-[#E39597]">必須</span>
            </label>
            <input id="phoneNumber" v-model="phoneNumber" type="tel" required
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="03-1234-5678" />
          </div>
          <!-- /電話番号 -->
          <!-- メールアドレス -->
          <div class="mt-5 lg:mt-[30px] w-full">
            <label class="tracking-wider flex items-center gap-1" for="email">
              メールアドレス
              <span class="text-white text-xs font-semibold py-[2px] px-[6px] rounded bg-[#E39597]">必須</span>
            </label>
            <input id="email" v-model="email" type="email" required autocomplete="email"
              class="appearance-none border border-[#CCCCCC] rounded-lg w-full px-4 py-3 mt-[10px] tracking-widest focus:outline-none focus:shadow-outline"
              placeholder="name@abcdefg.com" />
          </div>
          <!-- /メールアドレス -->
        </div>
        <!-- 電話番号 -->

        <!-- ご希望の受講方法 -->
        <div class="max-w-[840px] mx-auto mt-[30px] lg:mt-[30px] px-5">
          <div class="tracking-wider flex items-center gap-2">
            ご希望のコース
            <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#E39597]">必須</span>
          </div>
          <div class="flex gap-[1px] p-[1px] mt-[18px] bg-[#DDDDDD] w-max">
            <div>
              <img src="/images/free-trial-select-1.webp" alt="free trial" width="112" height="80" loading="lazy" />
              <p class="text-center bg-white py-2.5">未経験者</p>
            </div>
            <div>
              <img src="/images/free-trial-select-2.webp" alt="free trial" width="112" height="80" loading="lazy" />
              <p class="text-center bg-white py-2.5">経験者</p>
            </div>
            <div>
              <img src="/images/free-trial-select-3.webp" alt="free trial" width="112" height="80" loading="lazy" />
              <p class="text-center bg-white py-2.5">経験者</p>
            </div>
          </div>
        </div>
        <!-- /ご希望の受講方法 -->

        <!-- ご希望のスペース -->
        <div class="bg-[#F5EEEE] pb-[30px] mt-[89px] pt-[1px]">
          <div class="max-w-[840px] mx-auto -mt-[70px]">
            <div class="lg:inline tracking-wider flex items-center gap-2 px-5">
              ご希望のスペース
              <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#E39597]">必須</span>
            </div>
            <div class="px-5 lg:px-4 mt-[14px]">
              <div class="text-center">
                <div class="flex lg:inline-flex border border-[#CCCCCC] rounded-full bg-white">
                  <div :class="[
                    'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                    { 'text-white font-semibold': selectedTab === 'area' },
                  ]" @click="selectedTab = 'area'">
                    <span class="relative z-10">エリア<br class="lg:hidden" />から選ぶ</span>
                    <div v-if="selectedTab === 'area'"
                      class="absolute inset-0 bg-[#F2BFBF] rounded-full z-0 before:border-transparent before:border-t-[#F2BFBF] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                    </div>
                  </div>
                  <div :class="[
                    'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                    {
                      'text-white font-semibold': selectedTab === 'location',
                    },
                  ]" @click="selectedTab = 'location'">
                    <span class="relative z-10">現在地<br class="lg:hidden" />から選ぶ</span>
                    <div v-if="selectedTab === 'location'"
                      class="absolute inset-0 bg-[#F2BFBF] rounded-full z-0 before:border-transparent before:border-t-[#F2BFBF] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                    </div>
                  </div>
                  <div :class="[
                    'relative w-1/3 lg:w-[200px] h-[50px] text-sm lg:text-base tracking-wider grid place-items-center cursor-pointer',
                    { 'text-white font-semibold': selectedTab === 'keyword' },
                  ]" @click="selectedTab = 'keyword'">
                    <span class="relative z-10">キーワード<br class="lg:hidden" />で検索</span>
                    <div v-if="selectedTab === 'keyword'"
                      class="absolute inset-0 bg-[#F2BFBF] rounded-full z-0 before:border-transparent before:border-t-[#F2BFBF] before:border-x-[10px] before:border-y-[12px] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2">
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-[26px]">
                <div v-show="selectedTab === 'area'">
                  <div v-for="area in areas" :key="area.name" class="mt-[10px] border-2 border-[#AAAAAA]">
                    <h3
                      class="text-white bg-[#F2BFBF] lg:text-lg font-semibold tracking-widest flex items-center gap-[15px] px-[18px] h-[39px] lg:h-[50px]">
                      {{ area.name }}
                      <span
                        class="w-[30px] h-[30px] rounded-full text-black roboto bg-white shadow-md grid place-items-center -tracking-wider">{{
                        area.studios.length }}</span>
                    </h3>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#CCCCCC]">
                      <div v-for="studio, i in area.studios" :key="studio.name">
                        <label :for="studio.name + i"
                          class="flex items-center px-[15px] pt-[5px] pb-1 lg:py-3 h-full w-full bg-white">
                          <input type="checkbox" :id="studio.name + i" :value="studio.name" class="w-5 h-5 border-[#CCCCCC] rounded " />
                          <span class="tracking-widest flex lg:flex-col items-center lg:items-start ml-3">
                            {{ studio.name }}
                            <span class="text-xs text-[#666666] ml-3">{{
                              studio.access
                            }}</span>
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
                    <button @click="getCurrentLocation">
                      現在地から絞り込む
                    </button>
                  </div>
                  <div v-if="loading">位置情報を取得中...</div>
                  <div v-else-if="error">位置情報の取得に失敗しました。</div>
                  <div v-else-if="filteredStudiosByLocation.length > 0">
                    <h3>現在地から {{ distance }} km 以内のスタジオ</h3>
                    <div v-for="studio in filteredStudiosByLocation" :key="studio.name">
                      <label :for="studio.name">
                        <input :id="studio.name" type="checkbox" :value="studio.name" />
                        {{ studio.name }}
                        <span>{{ studio.access }}</span>
                      </label>
                    </div>
                  </div>
                  <div v-else>
                    現在地から {{ distance }} km 以内のスタジオはありません。
                  </div>
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
                    <div v-for="studio in filteredStudiosByKeyword" :key="studio.name">
                      <label :for="studio.name">
                        <input :id="studio.name" type="checkbox" :value="studio.name" />
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
        </div>
        <!-- /ご希望のスペース -->

        <div class="max-w-[840px] mx-auto mt-10 lg:mt-[30px] px-4 lg:px-5">
          <div class="tracking-wider flex items-center gap-2">
            ご希望のスケジュール
            <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#E39597]">必須</span>
          </div>
          <div class="flex gap-x-10 px-8 lg:px-4 mt-[9px] lg:mt-[14px]">
            <div class="flex items-center gap-[15px]">
              <input id="weekdays" v-model="selectedWeekdays" type="checkbox" class="custom-checkbox" />
              <label for="weekdays" class="tracking-wider"> 平日 </label>
            </div>
            <div class="flex items-center gap-[15px]">
              <input id="weekends" v-model="selectedWeekends" type="checkbox"
                class="custom-checkbox -translate-x-[6px] lg:translate-x-0" />
              <label for="weekends" class="hidden lg:block tracking-wider">
                週末
              </label>
              <label for="weekends" class="lg:hidden tracking-wider -translate-x-[8px]">
                祝休日
              </label>
            </div>
          </div>
        </div>
        <div class="max-w-[840px] mx-auto mt-4 lg:mt-[30px] px-4 lg:px-5">
          <div class="tracking-wider flex items-center gap-2">
            ご希望の時間帯
            <span class="text-white text-xs font-semibold py-1 px-[6px] rounded bg-[#E39597]">必須</span>
          </div>
          <div class="flex gap-x-10 gap-y-[16px] lg:gap-y-5 flex-wrap pl-7 lg:px-4 mt-[9px] lg:mt-[14px]">
            <div class="flex items-center gap-[15px]">
              <input id="morning" v-model="selectedMorning" type="checkbox" class="custom-checkbox" />
              <label for="morning" class="tracking-wider"> 10時〜14時 </label>
            </div>
            <div class="flex items-center gap-[15px] translate-x-[8px]">
              <input id="afternoon" v-model="selectedAfternoon" type="checkbox" class="custom-checkbox" />
              <label for="afternoon" class="tracking-wider">
                14時〜18時
              </label>
            </div>
            <div class="flex items-center gap-[15px]">
              <input id="evening" v-model="selectedEvening" type="checkbox" class="custom-checkbox" />
              <label for="evening" class="tracking-wider"> 18時〜21時 </label>
            </div>
          </div>
        </div>
        <div class="max-w-[840px] mx-auto mt-4 lg:mt-[30px] px-5">
          <label class="tracking-wider" for="campaignCode">
            キャンペーンコード
          </label>
          <input id="campaignCode" v-model="campaignCode" type="text"
            class="appearance-none border border-[#CCCCCC] rounded-lg w-full pt-[14px] pb-[16px] pl-[16px] lg:p-4 mt-[9px] lg:mt-4 tracking-widest focus:outline-none focus:shadow-outline"
            placeholder="キャンペーンコードがあれば入力" />
        </div>
      </div>
      <div class="pt-[30px] pb-[42px]">
        <button type="submit"
          class="block w-[335px] bg-[#E56E79] h-[72px] text-white font-bold text-[22px] text-center rounded-full drop-shadow-md mx-auto relative after:block after:w-[52px] after:h-[52px] after:bg-[url('/images/pointer-icon.svg')] after:bg-cover after:bg-center after:bg-no-repeat after:absolute after:top-8 after:-right-2">
          同意して無料体験申込
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* スライド全体のスタイル調整 */
.swiper-slide {
  opacity: 0.5;
  /* デフォルトでは全てのスライドを半透明に設定 */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  /* なめらかな変化 */
  padding-top: 20px;
}

@media screen and (min-width: 1000px) {
  .swiper-slide {
    padding-top: 0;
    opacity: 1;
    /* デフォルトでは全てのスライドを半透明に設定 */
  }
}

/* アクティブなスライドのスタイル */
.swiper-slide-active {
  opacity: 1;
  /* アクティブなスライドは不透明 */
  z-index: 1;
  /* 他のスライドより前面に */
  padding-top: 0;
}

#user-voice-slider {

  .swiper-button-prev,
  .swiper-button-next {
    @media (width < 1000px) {
      display: none;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: none;
  }
}

.custom-checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #aaaaaa;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
}

.custom-checkbox:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #05b0fd;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
