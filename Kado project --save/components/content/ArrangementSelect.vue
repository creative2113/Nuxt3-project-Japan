<template>
  <div class="pt-9 max-lg:pt-0">
    <div class="bg-[#F5F5F5]">
      <div class="flex justify-center w-max mx-auto bg-white rounded-full overflow-hidden shadow-lg border border-[#DDDDDD] relative bottom-[30px] max-lg:hidden">
        <button class="toggle-button active">条件を指定する</button>
        <button class="toggle-button">ワードで検索</button>
      </div>
      <div class="max-w-[1000px] w-full mx-auto">
        <div class="flex gap-6 justify-center items-center w-[331px] mx-auto pt-[11px] pb-2 bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] relative max-lg:w-full z-10">
          <h6 class="text-white font-semibold">コース選択</h6>
          <p class="text-[10px] text-white"><span class="text-[#FF0000]">＊</span>複数選択可能</p>
          <div class="flex items-center justify-center gap-2.5 lg:absolute lg:bottom-[-50px] lg:left-1/2 lg:-translate-x-1/2 max-lg:ml-10">
            <input type="checkbox" name="checkbox" id="checkbox1" class="w-[20px] h-[20px] border-2 border-[#999999] rounded-full" />
            <label for="checkbox1" class="text-sm font-semibold max-lg:text-white max-lg:text-xs">全コース選択</label>
          </div>
        </div>
        <div class="w-full bg-white drop-shadow-xl pt-[82px] pb-[51px] relative px-10 flex justify-between items-center max-lg:px-[14px] max-lg:flex-col max-lg:gap-[21px]">
          <span class="border-t-[30px] border-t-white border-x-[45px] border-x-transparent absolute bottom-[-30px] left-1/2 -translate-x-1/2 max-lg:hidden" />
          <div class="shadow-[0_0_6px_#00000033] bg-white">
            <div class="w-full flex justify-between items-center pr-[30px] max-lg:pr-5">
              <div class="flex items-center justify-center gap-5">
                <picture>
                  <source media="(max-width: 1024px)" srcset="/images/area-detail-select-1-sp.webp" type="image/webp" />
                  <img src="/images/area-detail-select-1.webp" width="90" height="70" loading="lazy" decoding="async" class="w-[90px] h-auto border-2 border-white" />
                </picture>
                <h5 class="font-semibold">華道</h5>
              </div>
              <div class="flex items-center justify-center gap-2.5">
                <input type="checkbox" name="checkbox" id="checkbox2" class="w-[20px] h-[20px] border-2 border-[#999999] rounded-full" />
                <label for="checkbox2" class="text-xs font-semibold">全選択</label>
              </div>
            </div>
            <div class="grid gap-[1px] p-[1px] bg-[#DDDDDD] grid-cols-4 max-lg:grid-cols-2 max-lg:p-0">
              <div v-for="course, i of courses.slice(0, 4)" :key="i" @click="selected = course.id" class="bg-white w-[150px] max-lg:w-[173px] relative">
                <picture>
                  <source media="(max-width: 1024px)" :srcset="course.sp_image" type="image/webp" />
                  <img :src="course.pc_image" width="150" height="70" loading="lazy" decoding="async" class="w-full h-auto" />
                </picture>
                <p class="text-center content-center w-full h-[50px] relative z-20 font-semibold" :class="selected === course.id && 'text-white'">{{ course.name }}</p>
                <picture v-if="selected === course.id">
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
                    class="w-full h-full object-cover absolute z-10 top-0 left-0"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div class="shadow-[0_0_6px_#00000033] bg-white">
            <div class="w-full flex justify-between items-center pr-[30px] max-lg:pr-5">
              <div class="flex items-center justify-center gap-5">
                <picture>
                  <source media="(max-width: 1024px)" srcset="/images/area-detail-select-2-sp.webp" type="image/webp" />
                  <img src="/images/area-detail-select-2.webp" width="90" height="70" loading="lazy" decoding="async" class="w-[90px] h-auto border-2 border-white" />
                </picture>
                <p class="font-semibold">アレンジ<br>フラワー</p>
              </div>
              <div class="flex items-center justify-center gap-2.5">
                <input type="checkbox" name="checkbox" id="checkbox3" class="w-[20px] h-[20px] border-2 border-[#999999] rounded-full" />
                <label for="checkbox3" class="text-xs font-semibold">全選択</label>
              </div>
            </div>
            <div class="w-full flex items-center justify-center gap-[1px] p-[1px] bg-[#DDDDDD] max-lg:p-0">
              <div v-for="course, i of courses.slice(4, 6)" :key="i" @click="selected = course.id" class="bg-white w-[150px] max-lg:w-[173px] relative">
                <picture>
                  <source media="(max-width: 1024px)" :srcset="course.sp_image" type="image/webp" />
                  <img :src="course.pc_image" width="150" height="70" loading="lazy" decoding="async" class="w-full h-auto" />
                </picture>
                <p class="text-center content-center w-full h-[50px] relative z-20 font-semibold" :class="selected === course.id && 'text-white'">{{ course.name }}</p>
                <picture v-if="selected === course.id">
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
                    class="w-full h-full object-cover absolute z-10 top-0 left-0"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const courses = [
  { id: 1, name: "小原流", pc_image: "/images/Intersection-1.webp", sp_image: "/images/Intersection-1.webp" },
  { id: 2, name: "草月流", pc_image: "/images/Intersection-2.webp", sp_image: "/images/Intersection-2.webp" },
  { id: 3, name: "池坊", pc_image: "/images/Intersection-3.webp", sp_image: "/images/Intersection-3.webp" },
  { id: 4, name: "超入門", pc_image: "/images/Intersection-4.webp", sp_image: "/images/Intersection-4.webp" },
  { id: 5, name: "超入門", pc_image: "/images/Intersection-5.webp", sp_image: "/images/Intersection-5.webp" },
  { id: 6, name: "経験者向け", pc_image: "/images/Intersection-6.webp", sp_image: "/images/Intersection-6.webp" },
]
const selected = ref(1);
</script>

<style lang="scss" scoped>
.toggle-button {
  width: 200px;
  height: 60px;
  border-radius: 9999px;
  font-weight: 600;
}
.toggle-button.active {
  background-color: #A794EC;
  color: white;
}
</style>