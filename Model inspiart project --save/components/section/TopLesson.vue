<template>
  <div class="pt-[60px]">
    <AtomSectionTitle en_title="LESSON" title="中高生の“今”と“未来”を<br>一緒に創る４つのコース" sub_title="人気のギターやドラムはもちろん、<br>ヴォーカルやYouTuber / VTuberコースまで！"/>
    <div>
      <OrganLesson v-for="(lesson, i) of lessons" :lesson="lesson" :key="i" />
    </div>
    <div class="w-full py-10">
      <button class="block px-10 py-3.5 text-[#6688DD] rounded-full border-2 border-[#6688DD] mx-auto font-bold">すべてのレッスンコースを見る</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const lessons = await (await fetch('/data/lessons.json')).json();
</script>
