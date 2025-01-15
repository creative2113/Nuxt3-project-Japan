<template>
  <div class="pt-[60px]">
    <AtomDanceSectionTitle
      :id="1"
      en_title="ENJOY保証"
      title="満足できなかった場合は<br>無料で補講を実施！"
      sub_title="レッスンに満足できるまで、<br>別の講師に変更して無料で補講が受けられます。"
      color_from="#88DD77"
      color_to="#55CCAA"
    />
    <div class="pt-7">
      <img src="/images/dance-possibiliy-enjoy-banner.webp" alt="lesson" width="375" height="375" loading="lazy" decoding="async" class="w-full h-auto" />
      <div class="bg-white rounded-t-[20px] mt-[-60px] relative z-[1]">
        <h6 class="text-[15px] font-bold text-center pt-4 pb-6">ENJOY保証で安心</h6>
        <p class="text-[13px] leading-[24px] font-semibold text-center">
          Inspiart Z ではレッスンのクオリティと、<br>
          お客様の満足度を第一に考えています。<br>
          <br>
          気に入らないレッスンがあった場合、<br>
          無料で補講が受けられる<br>
          オリジナルの制度です。<br>
          <br>
          申請をいただければ、<br>
          その分のレッスンの補講を<br>
          無料で実施させていただきます。
        </p>
        <button @click="isViewMore = !isViewMore" class="text-xl text-white bg-black py-3 px-[70px] block mx-auto mt-3 relative roboto-bold italic">
          {{isViewMore ? 'CLOSE' : 'VIEW MORE'}}
          <img v-if="!isViewMore" src="/images/arrow-bottom-more.svg" alt="arrow" width="27" height="15" loading="lazy" decoding="async" class="absolute right-5 top-1/2 -translate-y-1/2" />
          <img v-else src="/images/dance-possibility-enjoy-close.svg" alt="arrow" width="23" height="23" loading="lazy" decoding="async" class="absolute right-5 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <OrganDancePossibilityEnjoyMore v-if="isViewMore" />
      <div class="pt-5" v-if="isViewMore">
        <button @click="isViewMore = !isViewMore" class="text-xl text-white bg-black py-3 px-[70px] block mx-auto mt-3 relative roboto-bold italic">
          CLOSE
          <img src="/images/dance-possibility-enjoy-close.svg" alt="arrow" width="23" height="23" loading="lazy" decoding="async" class="absolute right-5 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <OrganNewLessons banner="/images/dance-new-lesson.webp" title="ダンスレッスンが<br>初めての方へ" color="#66DDDD" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const isViewMore = ref(false);
</script>
