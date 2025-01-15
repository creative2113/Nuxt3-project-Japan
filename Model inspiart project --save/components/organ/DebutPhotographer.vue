<template>
  <div class="px-5 pt-5">
    <h4 class="w-[201px] h-[112px] mx-auto text-center pt-[18px] text-white font-bold bg-[url('/images/debut-photographer-title-bg.svg')] bg-no-repeat bg-contain bg-center relative z-10 drop-shadow-xl -ml-2.5 -mb-5" v-html="title ? title : 'プロデューサーのおかげで<br>バンドユニットを<br>組成します'"></h4>
    <div class="w-[335px] mx-auto bg-white shadow-[0_5px_20px_#00000040] rounded-[20px]">
      <img :src="image? image : '/images/debut-photographer-banner.webp'" alt="banner" width="335" height="228" class="w-full h-auto rounded-t-[20px]" />
      <p class="text-center text-[15px] leading-[20px] py-5 bg-white font-bold min-w-[355px] mx-[-10px] rounded-[10px] shadow-lg">撮影はMIZUNO TADANORIが担当</p>
      <img src="/images/debut-photographer-en.svg" alt="banner" width="133" height="74" class="w-[133px] h-auto mx-auto mt-[30px]" />
      <img src="/images/debut-photographer-images-group.webp" alt="banner" width="305" height="367" class="w-[305px] h-auto mx-auto mt-[26px]" />
      <div class="flex justify-between px-[15px] pt-[30px] pb-5">
        <img src="/images/debut-photographer-image-1.webp" alt="banner" width="111" height="135" class="w-[111px] h-auto" />
        <div class="w-[180px] pt-2.5">
          <h5 class="font-bold">水野ただのり</h5>
          <hr class="mt-1 mb-2">
          <p v-for="{year, title}, i of [
            {year: '1977', title: '三重県生まれ'},
            {year: '2006', title: '株式会社アマナ入社'},
            {year: '2010', title: 'フリーランスとして活動'},
            {year: '2011', title: '水野写真事務所 設立'},
          ]" class="text-xs leading-5">
            <span class="inline-block w-[35px]">{{ year }}</span>
            <span>{{ title }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  image?: string;
}>();
</script>