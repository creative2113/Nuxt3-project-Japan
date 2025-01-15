<script lang="ts" setup>
const selectedService = ref(1);
const services = await(await fetch("/data/services.json")).json();
</script>

<template>
  <section>
    <div class="drop-shadow-lg bg-white pt-7">
      <h2 class="text-lg text-center font-semibold bg-white pb-4">
        EYS サービス一覧
      </h2>
      <div
        class="w-full max-lg:px-5 max-lg:overflow-x-scroll relative z-10 mobile-scroll"
      >
        <div class="w-full flex justify-center gap-5 pb-5 max-lg:w-max">
          <div
            v-for="(service, i) of services"
            :key="i"
            @click="selectedService = service.id"
            class="w-[125px] min-w-[125px] h-20 p-[7px] flex items-center flex-col rounded-[10px] bg-white shadow-md relative overflow-hidden"
          >
            <div class="w-full h-9 content-center">
              <img
                :src="service.logo"
                :alt="service.title"
                :width="service.logo_width"
                :height="service.logo_height"
                loading="lazy"
                decoding="async"
                :style="{ width: service.logo_width + 'px' }"
                class="h-auto mx-auto"
              />
            </div>
            <hr class="w-[100px] mx-auto my-2" />
            <p class="text-[10px] text-center">大人向け音楽教室</p>
            <img
              v-if="service.id === selectedService"
              src="/images/service-list-selected.svg"
              alt="selected"
              width="125"
              height="80"
              loading="lazy"
              decoding="async"
              class="w-full h-full absolute z-10 mx-auto top-0 left-0"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full flex bg-[#DDDDDD] justify-center items-center gap-[54px] py-1.5 max-lg:gap-9 max-lg:pt-10 max-lg:pb-4 max-lg:-mt-10"
      >
        <img
          src="/images/service-list-filter.svg"
          alt="filter"
          width="24"
          height="24"
          loading="lazy"
          decoding="async"
          class="w-[24px] h-auto"
        />
        <h3 class="text-sm font-semibold text-center">
          上のパネルをクリックすると<br
            class="lg:hidden"
          />そのサービスのクラスが表示されます
        </h3>
      </div>
      <div
        class="w-full max-w-[800px] mx-auto mt-9 pb-8 mb-8 relative after:block after:border-t-[30px] after:border-x-[40px] after:border-t-white after:border-x-transparent after:absolute after:bottom-[-29px] after:left-1/2 after:-translate-x-1/2 max-lg:after:border-x-[25px]"
      >
        <div class="*:text-[11px] max-lg:hidden">
          <div class="w-full flex justify-between">
            <div class="w-[390px]">
              <div class="flex items-center">
                <label for="narrow_content" class="w-[100px]"
                  >コンテンツを絞る</label
                >
                <select
                  name="narrow_content"
                  id="narrow_content"
                  class="py-2 px-3 border border-[#DDDDDD] shadow-[0_0_3px_#00000033] rounded-full"
                >
                  <option value="choice">選択</option>
                  <option value="choice1">選択</option>
                  <option value="choice2">選択</option>
                  <option value="choice3">選択</option>
                  <option value="choice4">選択</option>
                  <option value="choice5">選択</option>
                  <option value="choice6">選択</option>
                </select>
              </div>
              <div class="flex items-center mt-3">
                <span class="inline-block w-[100px]">カテゴリー</span>
                <span class="mr-6">全て選択</span>
                <span>… +3</span>
              </div>
              <div class="flex items-center mt-2 narrow-space-group">
                <span class="w-[100px]">コース</span>
                <div class="flex gap-1">
                  <div v-for="i of 3" :key="i">
                    <input
                      type="checkbox"
                      :id="`course_${i}`"
                      name="narrow-course"
                      class="hidden"
                    />
                    <label
                      :for="`course_${i}`"
                      class="w-[30px] h-[30px] rounded-full inline-block text-center content-center border border-[#DDDDDD] shadow"
                    >
                      <img
                        src="/images/service-list-select-course.webp"
                        alt="search"
                        width="30"
                        height="30"
                        loading="lazy"
                        decoding="async"
                        class="w-[30px] h-auto"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <hr class="w-full mt-2.5" />
            </div>
            <div class="w-[390px]">
              <div class="flex items-center">
                <label for="narrow_space" class="inline-block w-[100px]"
                  >スペースを絞る</label
                >
                <select
                  name="narrow_space"
                  id="narrow_space"
                  class="py-2 px-3 border border-[#DDDDDD] shadow-[0_0_3px_#00000033] rounded-full"
                >
                  <option value="choice">選択</option>
                  <option value="choice1">選択</option>
                  <option value="choice2">選択</option>
                  <option value="choice3">選択</option>
                  <option value="choice4">選択</option>
                </select>
              </div>
              <div class="flex items-center mt-2">
                <span class="inline-block w-[100px]">エリア</span>
                <span class="mr-6">関東/関西</span>
                <span>… +3</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="w-[100px]">スペース</span>
                <span class="mr-6">新宿/銀座</span>
                <span>… +3</span>
              </div>
              <div class="flex items-center mt-2">
                <span class="w-[100px]">ルーム</span>
                <span class="mr-10">Room1/Room2/Room3</span>
                <span>… +3</span>
              </div>
              <hr class="w-full mt-[26px]" />
            </div>
          </div>
          <div class="w-full flex justify-between mt-2.5">
            <div class="w-[390px]">
              <div class="w-full flex items-center">
                <span class="inline-block w-[100px]">講師のランキング</span>
                <div class="flex items-center gap-3 narrow-space-group">
                  <div v-for="item of ['S', 'A', 'B', 'C', 'D']" :key="item">
                    <input
                      type="checkbox"
                      :id="`option${item}`"
                      name="narrow-space"
                      :value="item"
                      class="hidden"
                    />
                    <label
                      :for="`option${item}`"
                      class="w-[26px] h-[26px] rounded-full inline-block text-center content-center border border-[#DDDDDD] shadow"
                    >
                      {{ item }}
                    </label>
                  </div>
                </div>
              </div>
              <hr class="w-full mt-2.5" />
            </div>
            <div class="w-[390px]">
              <div class="w-full flex items-center">
                <span class="inline-block w-[100px]">曜 日</span>
                <div class="flex items-center gap-3 narrow-space-group">
                  <div
                    v-for="item of ['月', '火', '水', '木', '金', '土', '日']"
                    :key="item"
                  >
                    <input
                      type="checkbox"
                      :id="`day_${item}`"
                      name="narrow-day"
                      :value="item"
                      class="hidden"
                    />
                    <label
                      :for="`day_${item}`"
                      class="w-[26px] h-[26px] rounded-full inline-block text-center content-center border border-[#DDDDDD] shadow"
                    >
                      {{ item }}
                    </label>
                  </div>
                </div>
              </div>
              <hr class="w-full mt-2.5" />
            </div>
          </div>
          <div class="narrow-space-group">
            <div class="flex items-center gap-2.5 mt-2">
              <div
                v-for="(item, i) of [
                  'GL for EYS-STYLE',
                  'GL for EYS-KIDS',
                  '個別指導型',
                ]"
                :key="i"
              >
                <input
                  type="checkbox"
                  :id="`narrow-content-${i}`"
                  name="narrow-content"
                  :value="i"
                  class="hidden"
                />
                <label
                  :for="`narrow-content-${i}`"
                  class="py-1 pl-2.5 pr-7 rounded-full bg-white shadow-[0_0_3px_#00000033] hover:text-[#aaaaff]"
                >
                  {{ item }}
                </label>
              </div>
              <div class="p-1 rounded-full bg-white shadow-[0_0_3px_#00000033]">
                <img
                  src="/images/add-tag-plus.svg"
                  alt="add"
                  width="12"
                  height="12"
                  loading="lazy"
                  decoding="async"
                  class="w-[12px] h-auto"
                />
              </div>
              <span>タグを追加</span>
            </div>
            <hr class="w-full mt-2.5" />
          </div>
        </div>
        <button
          class="bg-black text-white flex justify-center items-center gap-8 px-5 py-[15px] mx-auto mt-[30px] max-lg:pl-8 max-lg:pr-6 max-lg:bg-white max-lg:text-[#222222] max-lg:border max-lg:border-black"
        >
          <img
            src="/images/service-list-search-icon.svg"
            alt="search"
            width="20"
            height="20"
            loading="lazy"
            decoding="async"
            class="w-[20px] h-auto max-lg:hidden"
          />
          <span class="test-[15px] font-semibold max-lg:hidden"
            >この条件でグループレッスンを検索</span
          >
          <span class="lg:hidden text-sm">絞り込み検索はこちらから</span>
          <img
            src="/images/arrow/arrow_right_black.svg"
            alt="arrow"
            width="8"
            height="12"
            loading="lazy"
            decoding="async"
            class="w-[8px] h-auto lg:hidden"
          />
        </button>
      </div>
    </div>
    <ContentCourseEnjoy />
  </section>
</template>
<style lang="scss" scoped>
.narrow-space-group {
  input[type="checkbox"] {
    &:checked + label {
      background-color: #aaaaff;
      border: none;
      color: white;
    }
  }
  label {
    cursor: pointer;
  }
}
.mobile-scroll::-webkit-scrollbar {
  display: none;
  height: 3px;
  width: 10px;
}
.mobile-scroll:hover::-webkit-scrollbar {
  display: block;
}
.mobile-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.mobile-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

/* Handle on hover */
.mobile-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
