<template>
  <div class="pt-[60px] pb-[50px]">
    <AtomDanceSectionTitle en_title="COMMUNITY" title="リアルもオンラインも<br>充実のコミュニティ！"
      sub_title="教室の外との繋がりを作る<br>様々なキッカケを提供します。" color_from="#FF88BB" color_to="#FF5555" />
    <div class="mt-[18px] relative">
      <img src="/images/dance-community-banner.webp" alt="banner" width="375" height="375" loading="lazy"
        decoding="async" class="w-full h-auto" />
      <div class="absolute flex justify-between items-center w-[330px] top-[97px] left-1/2 -translate-x-1/2">
        <p
          class="w-[140px] h-[140px] rounded-full border-[3px] border-[#FFB4E7] flex justify-center items-center shadow-lg bg-[#00000080] text-[30px] text-white roboto-black italic">
          REAL
        </p>
        <img src="/images/dance-possibility-enjoy-close.svg" alt="arrow" width="30" height="30" loading="lazy"
          decoding="async" class="w-[30px] h-auto" />
        <p
          class="w-[140px] h-[140px] rounded-full border-[3px] border-[#FFB4E7] flex justify-center items-center shadow-lg bg-[#00000080] text-[30px] text-white roboto-black italic">
          ONLINE
        </p>
      </div>
    </div>
    <div class="bg-white -mt-[70px] relative z-[1] rounded-t-[20px]">
      <h6 class="py-4 text-center font-bold text-[15px]">
        リアルの出会いも、<br>
        オンラインの出会いも、<br>
        両方ゲット！
      </h6>
      <MoleCommunityItems :contents="contents" />
      <MoleFeaturedMusicActivities :music-activities="musicActivities"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contents = [
  {
    banner: "/images/dance-community-image-1.webp",
    title: "リアルでの繋がり",
    sub_title: "レッスンを通して出会う、ダンス仲間"
  },
  {
    banner: "/images/dance-community-image-2.webp",
    title: "オンラインでの繋がり",
    sub_title: "SNSでの発信を通じて出会う、ファンやサポーター"
  },
];
const musicActivities = ref();
musicActivities.value = await(await fetch('/data/music-activities.json')).json();
</script>
