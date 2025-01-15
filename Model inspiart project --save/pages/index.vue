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
  <SectionTopCover />
  <LazySectionTopCampaign :date="new Date()" />

  <LazySectionTopNews v-if="show0" />
  <LazySectionStickyCTA v-if="show0" />
  <LazySectionTopAbout v-if="show0" />
  <LazySectionTopService v-if="show0" />
  <div ref="section0">
    <LazySectionCampaignCTA />
  </div>

  <LazySectionTopLesson v-if="show1" />
  <div ref="section1">
    <LazySectionCampaignCTA />
  </div>

  <LazySectionTopCurriculum v-if="show2" />
  <div ref="section2">
    <LazySectionCampaignCTA />
  </div>

  <LazySectionTopSchedule v-if="show3" />
  <div ref="section3">
    <LazySectionCampaignCTA />
  </div>

  <LazySectionTopPlan v-if="show4" />
  <div ref="section4">
    <LazySectionCampaignCTA />
  </div>

  <LazySectionTopStudio v-if="show5" />
  <LazySectionLargeCampaign v-if="show5" />
  <LazySectionVoiceUsers v-if="show5" />
  <div ref="section5">
    <LazySectionCampaignCTA class="relative z-50" />
  </div>
  <LazySectionFooter v-if="show5" />
</template>