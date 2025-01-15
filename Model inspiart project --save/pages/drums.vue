<script lang="ts" setup>
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

onMounted(async () => {
  createObserver(section1.value, (entries) => {
    if (entries[0].isIntersecting) {
      show0.value = true;
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
  })
});
</script>

<template>
  <LazySectionPageTop banner="/images/drum-top-banner.webp" en_title="Drum" title="ドラムコースのご紹介"
    sub_title="ストレス発散？<br>エクササイズ？<br>どんなジャンルでも<br>とにかくリズムに集中！" bg-from="#E3AED5" bg-to="#A661ED" />
  <LazySectionPageTopCampaign banner="/images/campbnr.webp" :date="new Date()" />
  <LazySectionTopNews v-if="show0" />
  <LazySectionTopAbout v-if="show0" />
  <LazySectionPageTopSummary v-if="show0" />
  <LazySectionPageTopAbout v-if="show0" :id="2" />
  <SectionStickyCTA v-if="show0" />

  <!-- First Section -->
  <div ref="section1">
    <LazyAtomPageSectionTitle :id="1" title="高品質なドラムを<br>何と無料でプレゼント！" sub_title="楽器は買わずにもらっちゃおう！" color="#FC88A7" />
  </div>
  <LazySectionDrumList v-if="show1" />
  <LazySectionFirstPageLayout v-if="show1">
    <SectionDrumFirstPageContent />
  </LazySectionFirstPageLayout>
  <LazySectionPageBottomUserVoice v-if="show1" />
  <SectionCampaignCTA v-if="show1" />

  <!-- Second Section -->
  <div ref="section2">
    <LazyAtomPageSectionTitle :id="2" title="未経験こそ可能性！" sub_title="楽譜が読めない、自信もない…それでも大丈夫！" color="#88DDFF" />
  </div>
  <SectionPageBeginner v-if="show2" :id="3" />
  <SectionPageInstructor v-if="show2" />
  <SectionPageEnjoyGuarantee v-if="show2" />
  <SectionCampaignCTA v-if="show2" />

  <!-- Third Section -->
  <div ref="section3">
    <LazyAtomPageSectionTitle :id="3" title="もちろん<br>本気のレッスンもできます！" sub_title="音楽教室として、長年の実績！" color="#AA99EE" />
  </div>
  <SectionInstructors v-if="show3" :id="3" />
  <SectionChartKeep v-if="show3" />
  <SectionCampaignCTA v-if="show3" />

  <!-- Forth Section -->
  <div ref="section4">
    <LazyAtomPageSectionTitle :id="4" title="ステージレッスンがあるのは<br>Inspiartだけ" sub_title="月１回、あなたのミュージックビデオを創ります"
      color="#88DD77" />
  </div>
  <SectionOfferStages v-if="show4" />
  <SectionCampaignCTA v-if="show4" />

  <!-- Fifth Section -->
  <div ref="section5">
    <LazyAtomPageSectionTitle :id="5" title="圧倒的に安い月会費、<br>通い方も自由自在" sub_title="アーティストの夢を実現するために安さは重要" color="#FF88BB" />
  </div>
  <SectionPriceTop v-if="show5" />
  <SectionPageSchedule v-if="show5" />
  <SectionCampaignCTA v-if="show5" />

  <!-- Sixth Section -->
  <div ref="section6">
    <LazyAtomPageSectionTitle :id="6" title="プロデビューの夢<br>叶えます！" sub_title="独自カリキュラムで徹底サポート！" color="#88DDFF" />
  </div>
  <SectionMakeDebut v-if="show6" title="ドラムでプロデビューしよう！" banner="/images/make-debut-banner-3.webp" />
  <SectionProDebut v-if="show6" banner="/images/pro-debut-banner-3.webp" />
  <SectionCampaignCTA v-if="show6" />

  <!-- Seventh Section -->
  <div ref="section7">
    <LazyAtomPageSectionTitle :id="7" title="スタジオ＆オンラインで<br>全国津々浦々までカバー" sub_title="どちらのコースでも、しっかりレッスン！"
      color="#55CCAA" />
  </div>
  <OrganStudioStyle v-if="show7" />
  <OrganRealStudios v-if="show7" />
  <SectionPageOnlineStudio v-if="show7" />
  <SectionCampaignCTA v-if="show7" />

  <!-- Last Section -->
  <SectionQA v-if="show7" />
  <SectionTrialForm v-if="show7" />
  <SectionMusicSchool v-if="show7" />
  <SectionFooter v-if="show7" />
</template>
