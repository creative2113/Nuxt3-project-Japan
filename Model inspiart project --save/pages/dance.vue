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
  <div class="bg-[#FFFFFF]">
    <SectionDanceTop />
    <SectionPageTopCampaign banner="/images/dance-campaign-image.webp" :date="new Date()" />
    <SectionTopNews v-if="show0" />
    <SectionDanceAbout v-if="show0" />
    <SectionDanceTopSummary v-if="show0" />
    <LazySectionPageTopAbout v-if="show0" :id="3" />
    <SectionCampaignCTA v-if="show0" banner1="/images/dance-camacta-banner.webp" />
    <SectionStickyCTA v-if="show0" />

    <!-- First Section -->
    <div ref="section1">
      <AtomDancePageTitle :id="1" title="９ジャンルで一人一人<br>向き合うレッスン" sub_title="豊富なジャンルを用意しているので、<br>きっと気に入るプログラムが見つかるはず！" />
    </div>
    <SectionDanceGenre v-if="show1" />
    <SectionDanceLesson v-if="show1" />
    <SectionCampaignCTA v-if="show1" banner1="/images/dance-camacta-banner.webp" />

    <!-- Second Section -->
    <div ref="section2">
      <AtomDancePageTitle :id="2" title="未経験こそ可能性" sub_title="豊富なジャンルを用意しているので、<br>きっと気に入るプログラムが見つかるはず！" />
    </div>
    <SectionDancePossibilityStages v-if="show2" />
    <SectionDancePossiblityInstructor v-if="show2" />
    <SectionDancePossibilityEnjoy v-if="show2" />
    <SectionDanceRealLesson v-if="show2" />
    <SectionCampaignCTA v-if="show2" banner1="/images/dance-camacta-banner.webp" />

    <!-- Third Section -->
    <div ref="section3">
      <AtomDancePageTitle :id="3" title="もちろん本気の<br>レッスンもできます！" sub_title="レッスン生/所属アーティスト6万8千人の衝撃！" />
    </div>
    <SectionInstructors v-if="show3" :id="5" />
    <SectionDanceLookLessons v-if="show3" />
    <SectionDanceUserVoice v-if="show3" />
    <SectionCampaignCTA v-if="show3" banner1="/images/dance-camacta-banner.webp" />

    <!-- Fourth Section -->
    <div ref="section4">
      <AtomDancePageTitle :id="4" title="SNS配信を<br>MAXサポート！" sub_title="TikTok、YouTubeでファンを創ろう" />
    </div>
    <SectionOfferStages v-if="show4" :id="5" />
    <SectionCampaignCTA v-if="show4" banner1="/images/dance-camacta-banner.webp" />

    <!-- Fifth Section -->
    <div ref="section5">
      <AtomDancePageTitle :id="5" title="希望に応じて選べる、<br>おトクな料金プラン"
        sub_title="Inspiart Z Dance Community は、<br>業界最安値に挑戦！" />
    </div>
    <SectionDancePrice v-if="show5" />
    <SectionCampaignCTA v-if="show5" banner1="/images/dance-camacta-banner.webp" />

    <!-- Sixth Section -->
    <div ref="section6">
      <AtomDancePageTitle :id="6" title="プロデビューの夢、<br>叶えます" sub_title="????????" />
    </div>
    <SectionMakeDebut v-if="show6" title="ギターでプロデビューしよう！" banner="/images/dance-make-debut-banner.webp"
      image="/images/dance-make-debut-image.webp" question_image="/images/dance-make-debut-question.webp" />
    <SectionDanceProDebut v-if="show6" banner="/images/dance-pro-debut-banner.webp" />
    <SectionCampaignCTA v-if="show6" banner1="/images/dance-camacta-banner.webp" />

    <!-- Seventh Section -->
    <div ref="section7">
      <AtomDancePageTitle :id="7" title="駅チカで通いやすい<br>全国16スタジオ！" sub_title="ベストなレッスンのために、<br>こだわり抜いたスタジオを用意。" />
    </div>
    <SectionDanceStudios v-if="show7" />
    <SectionCampaignCTA v-if="show7" banner1="/images/dance-camacta-banner.webp" />

    <!-- Last Section -->
    <SectionDanceCommunity v-if="show7" />
    <SectionCampaignCTA v-if="show7" banner1="/images/dance-camacta-banner.webp" />
    <SectionEnjoyYourDance v-if="show7" />
    <SectionFooter v-if="show7" />
  </div>
</template>
