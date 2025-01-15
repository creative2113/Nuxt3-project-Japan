<script lang="ts" setup>
const section0 = ref(null)
const show0 = ref(false)
const section1 = ref(null)
const show1 = ref(false)
const section2 = ref(null)
const show2 = ref(false)
const section3 = ref(null)
const show3 = ref(false)
const section4 = ref(null)
const show4 = ref(false)
const section5 = ref(null)
const show5 = ref(false)
const section6 = ref(null)
const show6 = ref(false)
const section7 = ref(null)
const show7 = ref(false)
const section8 = ref(null)
const show8 = ref(false)
const section9 = ref(null)
const show9 = ref(false)

onMounted(async () => {
  createObserver(section0.value, (entries) => {
    if (entries[0].isIntersecting) {
      show0.value = true;
    }
  });
  createObserver(section1.value, (entries) => {
    if (entries[0].isIntersecting) {
      show1.value = true;
    }
  });
  createObserver(section2.value, (entries) => {
    if (entries[0].isIntersecting) {
      show2.value = true;
    }
  });
  createObserver(section3.value, (entries) => {
    if (entries[0].isIntersecting) {
      show3.value = true;
    }
  });
  createObserver(section4.value, (entries) => {
    if (entries[0].isIntersecting) {
      show4.value = true;
    }
  });
  createObserver(section5.value, (entries) => {
    if (entries[0].isIntersecting) {
      show5.value = true;
    }
  });
  createObserver(section6.value, (entries) => {
    if (entries[0].isIntersecting) {
      show6.value = true;
    }
  });
  createObserver(section7.value, (entries) => {
    if (entries[0].isIntersecting) {
      show7.value = true;
    }
  });
  createObserver(section8.value, (entries) => {
    if (entries[0].isIntersecting) {
      show8.value = true;
    }
  });
  createObserver(section9.value, (entries) => {
    if (entries[0].isIntersecting) {
      show9.value = true;
    }
  });
});
</script>

<template>
  <SectionVocalTop />
  <SectionPageTopCampaign banner="/images/vocal-campaignc.webp" :date="new Date()" />
  <div ref="section0">
    <img src="/images/vocal-top-course-banner.webp" alt="vocal-banner" width="336" height="121" loading="lazy"
      decoding="async" class="w-[336px] h-auto mx-auto mt-[18px]" />
  </div>
  <div v-if="show0">
    <LazySectionTopNews />
    <LazySectionVorcalTopAbout />
    <SectionMakeDebut title="ボーカルでプロデビューしよう！" banner="/images/vocal-debut-banner.webp"
      image="/images/vocal-make-debut-image.webp" />
    <SectionVocalFullMenu />
    <SectionCampaignCTA />
  </div>

  <!-- First Section -->
  <div ref="section1">
    <AtomPageSectionTitle :id="1" title="本気のレッスン" sub_title="レッスン生/所属アーティスト6万8千人の衝撃！" color="#86DC77" />
  </div>
  <div v-if="show1">
    <SectionInstructors :id="4" />
    <SectionChartKeep />
    <SectionCampaignCTA />
  </div>

  <!-- Second Section -->
  <div ref="section2">
    <AtomPageSectionTitle :id="2" title="ステージレッスンという仕掛け" sub_title="オーディションとレッスンのちょうど真ん中で<br>ファン創り" color="#55CCAA" />
  </div>
  <div v-if="show2">
    <SectionOfferStages :id="4" />
    <SectionPageTopCampaign banner="/images/vocal-campaignc.webp" :date="new Date()" />
  </div>

  <!-- Third Section -->
  <div ref="section3">
    <AtomPageSectionTitle :id="3" title="圧倒的に安い月会費、<br>通い方も自由自在" sub_title="アーティストの夢を実現するために安さは重要" color="#66DDDD" />
  </div>
  <div v-if="show3">
    <SectionPriceTop :id="4" />
  </div>

  <!-- Fourth Section -->
  <div ref="section4">
    <AtomPageSectionTitle :id="4" title="デビューまで徹底サポート" sub_title="担当プロデューサーが伴走します！" color="#88CCDD" />
  </div>
  <div v-if="show4">
    <SectionVocalProDebut banner="/images/vocal-pro-debut-banner.webp" />
    <SectionCampaignCTA />
    <SectionPageTopCampaign banner="/images/vocal-small-campaign.webp" :date="new Date()" />
  </div>

  <!-- Fifth Section -->
  <div ref="section5">
    <AtomPageSectionTitle :id="5" title="オーディションサポート" sub_title="マネージャーが手厚くサポート！" color="#6688DD" />
  </div>
  <div v-if="show5">
    <SectionVocalAuditionSupport />
    <SectionCampaignCTA />
  </div>

  <!-- Sixth Section -->
  <div ref="section6">
    <AtomPageSectionTitle :id="6" title="未経験こそ可能性！" sub_title="楽譜読めない、自信もない・・・それでも大丈夫！" color="#8888DD" />
  </div>
  <div v-if="show6">
    <SectionVocalPossibility />
    <SectionCampaignCTA />
  </div>

  <!-- Seventh Section -->
  <div ref="section7">
    <AtomPageSectionTitle :id="7" title="スタジオ＆オンラインで<br>全国津々浦々までカバー" sub_title="地方からオンライン参加<br>関東・関西・中京・北海道一円のスタジオで参加"
      color="#FB88B1" />
  </div>
  <div v-if="show7">
    <OrganVocalStudioStyle />
    <OrganRealStudios />
    <SectionPageOnlineStudio />
    <SectionCampaignCTA />
  </div>

  <!-- Eight Section -->
  <div ref="section8">
    <AtomPageSectionTitle :id="8" title="プロモーションサービス" sub_title="グッズ販売やファンクラブを見据え" color="#FF5555" />
  </div>
  <div v-if="show8">
    <SectionVocalSupport />
  </div>

  <!-- Ninth Section -->
  <div ref="section9">
    <AtomPageSectionTitle :id="9" title="オプション講座が充実" sub_title="様々なスキルを強化！" color="#FFBB66" />
  </div>
  <div v-if="show9">
    <SectionOptionalCourses />
    <SectionCampaignCTA />
  <!-- Last Section -->
  <SectionVocalUserVoice />
  <OrganNewLessons />
  <SectionQA />
  <SectionTrialForm />
  <SectionMusicSchool />
  <SectionFooter />
  </div>
</template>