<script lang="ts" setup>
const show0 = ref(false);
const section0 = ref(null);
const show1 = ref(false);
const section1 = ref(null);
const show2 = ref(false);
const section2 = ref(null);
const show3 = ref(false);
const section3 = ref(null);
const show4 = ref(false);
const section4 = ref(null);
const show5 = ref(false);
const section5 = ref(null);
const show6 = ref(false);
const section6 = ref(null);
const show7 = ref(false);
const section7 = ref(null);

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
});
</script>

<template>
  <!-- Top section -->
  <SectionTopCover />
  <div ref="section0">
    <LazySectionTopCampaign />
  </div>
  <div ref="section1">
    <LazySectionTopNews v-if="show0" />
  </div>
  <div ref="section2">
    <LazySectionTopAbout v-if="show0" />
  </div>
  <div ref="section3">
    <LazySectionTopMembers v-if="show0" />
  </div>
  <div ref="section4">
    <LazySectionTopImages v-if="show0" />
  </div>
  <div ref="section5">
    <LazySectionTopSolved v-if="show0" />
  </div>
  <div ref="section6">
    <LazySectionTopFeature v-if="show0" />
  </div>
  <div ref="section7">
    <LazySectionClassCTA v-if="show0" />
    <LazySectionBottomCampaign v-if="show0" />
  </div>

  <!-- Feature detail section 1 -->
  <div v-if="show1" id="present">
    <LazySectionPresentTop />
    <LazySectionPresentFree />
    <LazySectionPresentPlus />
    <LazySectionPresentStart />
    <LazySectionPresentVoice />
    <LazySectionBottomCampaign />
  </div>

  <!-- Feature detail second Page -->
  <div v-if="show2" id="welcome">
    <LazySectionWelcomeTop />
    <LazySectionWelcomeChart />
    <LazySectionWelcomeWorries />
    <LazySectionWelcomeLets />
    <LazySectionWelcomeCourse />
    <LazySectionWelcomeMatch />
    <LazySectionWelcomeLifePlanner />
    <LazySectionWelcomeEnjoy />
    <LazySectionClassCTA />
  </div>

  <!-- Feature detail third Page -->
  <div v-if="show3" id="cool">
    <LazySectionCoolTop />
    <LazySectionCoolCampaign />
    <LazySectionCoolVote />
    <LazySectionCoolWhy />
    <LazySectionCoolMeet />
    <LazySectionBottomCampaign />
  </div>

  <!-- Feature detail forth Page -->
  <div v-if="show4" id="enjoy">
    <LazySectionEnjoyTop />
    <LazySectionEnjoyOffer />
    <LazySectionEnjoyLessons />
    <LazySectionBottomCampaign />
  </div>

  <!-- Feature detail fifth Page -->
  <div v-if="show5" id="price">
    <LazySectionPriceTop />
    <LazySectionPriceStyle />
    <LazySectionPriceMethod />
    <LazySectionTopCampaign />
    <LazySectionPriceService />
    <LazySectionClassCTA />
  </div>

  <!-- Feature detail sixth Page -->
  <div v-if="show6" id="online">
    <LazySectionOnlineRealTop />
    <LazySectionOnlineSelect />
    <LazySectionOnlineCase />
    <LazySectionOnlineReal />
    <LazySectionClassCTA />
    <LazySectionOnlineTrial />
    <LazySectionTopCampaign />
    <LazySectionClassCTA />
  </div>

  <!-- Feature detail seventh Page -->
  <div v-if="show7" id="event">
    <LazySectionEventTop />
    <LazySectionEventStage />
    <LazySectionTopCampaign />
    <LazySectionEventPossibilities />
    <LazySectionEventMarried />
    <LazySectionEventCommunity />
    <LazySectionEventLessons />
    <LazySectionEventQA />
    <LazySectionClassCTA />
    <LazySectionBottomCampaign />
    <LazySectionEventFreeTrial />
    <LazySectionEventBlog />
  </div>
  <StickyCTA class="max-lg:w-[375px]" />
</template>
