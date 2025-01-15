<template>
  <section>
    <ContentPageTop title="コース一覧" en_title="Courses" banner_pc="/images/courses-page-banner-pc.webp" banner_sp="/images/courses-page-banner-sp.webp" />
    <div class="w-full max-w-[800px] mx-auto">
      <div class="pt-[60px] pb-10 max-lg:pt-0">
        <div>
          <h3 class="w-full bg-[#AAAAFF] text-white py-2 px-6 text-lg font-semibold max-lg:text-center">華道</h3>
          <div class="w-full flex justify-between pt-5 pb-10 px-2.5 flex-wrap max-lg:px-5 max-lg:gap-[15px] max-lg:pt-[30px] max-lg:pb-[30px]">
            <div v-for="item, i of courses?.ikebana" :key="i" class="w-[180px] flex items-center justify-between bg-white shadow-[0_3px_6px_#00000033] max-lg:w-[160px]">
              <img :src="item.image" width="224" height="160" :alt="item.name" loading="lazy" decoding="async" class="w-[80px]" />
              <p class="text-bold text-center w-24">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="w-full bg-[#AAAAFF] text-white py-2 px-6 text-lg font-semibold max-lg:text-center">アレンジフラワー</h3>
          <div class="w-full flex gap-5 pt-5 pb-10 px-2.5 max-lg:pt-[30px] max-lg:pb-[30px]">
            <div v-for="item, i of courses?.flowers" :key="i" class="w-[180px] flex items-center justify-between bg-white shadow-[0_3px_6px_#00000033]">
              <img :src="item.image" width="224" height="160" :alt="item.name" loading="lazy" decoding="async" class="w-[80px]" />
              <p class="text-bold text-center w-24">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FeaturedMusicActivities :music-activities="musicActivities" class="lg:!mt-0" />
</template>

<script lang="ts" setup>
const courses = ref();
courses.value = await(await fetch("/data/courses.json")).json();
const musicActivities = ref();
musicActivities.value = await(await fetch('/data/music-activities.json')).json();
</script>