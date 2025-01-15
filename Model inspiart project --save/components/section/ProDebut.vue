<template>
  <div class="pt-[60px]">
    <AtomSectionTitle
      en_title="PRO DEBUT"
      title="アーティスト登録後、<br>Inspiartでバンドユニットを<br>組成します"
      sub_title="担当プロデューサーが伴走します！"
    />
    <div class="mt-7 bg-[#434C5C] text-white relative">
      <img src="/images/prodebut-bg.webp" alt="arrow" width="375" height="580" class="absolute w-full h-auto bottom-0 left-0 saturate-0 opacity-10" />
      <img :src="banner" alt="banner" width="335" height="310" loading="lazy" decoding="async" class="w-full h-auto relative" />
      <div class="relative">
        <h3 class="roboto-bold text-[30px] text-center">Producer</h3>
        <hr class="w-[65px] mx-auto border-t-white mt-1.5">
        <h4 class="text-center text-base font-bold mt-3">InspiartZのプロデューサー陣は<br>バンドユニットの作品作りを伴走します</h4>
      </div>
      <div class="relative">
        <OrganMembersSlider />
      </div>
    </div>
    <OrganDebutPhotographer />
    <OrganRegistrationFlow />
    <OrganSupportDebut />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  banner: string;
}>();
</script>
