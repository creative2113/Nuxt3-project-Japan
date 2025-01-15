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
});
</script>

<template>
  <!-- Top section -->
  <LazySectionTopCover />
  <div ref="section0">
    <LazyCampaignCTA :deadline="new Date()" />
  </div>
  <div ref="section1">
    <LazySectionTopAbout v-if="show0" />
  </div>
  <div ref="section2">
    <LazySectionTopReason v-if="show0" />
  </div>
  <div ref="section3">
    <LazySectionTopChart v-if="show0" />
  </div>
  <div ref="section4">
    <LazySectionTopImages v-if="show0" />
  </div>
  <div ref="section5">
    <LazySectionTopFeature v-if="show0" />
  </div>
  <div ref="section6">
    <LazySectionClassCTA v-if="show0" />
  </div>

  <div id="01" v-if="show1">
    <!-- Course Section -->
    <LazySectionCourseTop />
    <LazySectionCourseEnjoy />
    <LazySectionCourseMore />
    <LazySectionMultiCTA :deadline="new Date()" />
  </div>

  <div id="02" v-if="show2">
    <!-- User's Voice Section -->
    <LazySectionVoiceTop />
    <LazySectionVoiceUsers />
    <LazyCampaignCTA :deadline="new Date()" />
  </div>

  <div id="03" v-if="show2">
    <!-- Compatibility Section -->
    <LazySectionCompatibilityTop />
    <LazySectionCompatibilityPlanners />
    <LazySectionClassCTA class="lg:mt-9 max-lg:mt-[30px]" />
  </div>

  <div id="04" v-if="show3">
    <!-- Free Section -->
    <LazySectionFreeTop />
    <LazySectionMultiCTA :deadline="new Date()" />
  </div>

  <div id="05" v-if="show3">
    <!-- Studio Section -->
    <LazySectionStudioTop />
    <LazyCampaignCTA :deadline="new Date()" />
  </div>

  <div id="06" v-if="show4">
    <!-- Schedule Section -->
    <LazySectionScheduleTop />
    <LazySectionScheduleChange />
    <LazySectionScheduleEnjoy />
    <LazySectionClassCTA />
  </div>

  <div id="07" v-if="show5">
    <!-- Group Section -->
    <LazySectionGroupTop />
    <LazySectionMultiCTA :deadline="new Date()" />
  </div>

  <div id="08" v-if="show5">
    <!-- Event Section -->
    <LazySectionEventTop />
    <LazySectionEventMarried />
    <LazySectionEventCommunity />
    <FlowerCTA />
  </div>

  <div id="last" v-if="show6">
    <!-- Last Section -->
    <LazySectionLastTop />
    <LazySectionClassCTA />
    <LazySectionFreeTrial />
    <LazySectionMultiCTA :deadline="new Date()" />
    <LazySectionLastNews />
    <LazySectionLastMusicSchool />
  </div>

  <LazyStickyCTA class="max-lg:w-[375px]" />
</template>
