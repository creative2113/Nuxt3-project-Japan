<template>
    <LazySectionCoursePageTop />
    <LazySectionCoursesRealize />
    <LazyEysServiceList />
    <LazySectionCourseMore />
    <LazySectionFreeTrial class="mb-[100px] max-lg:mb-[34px]" />
</template>
<script lang="ts" setup>
useHead({
  title: "Kado Courses | コース一覧",
  meta: [
    {
      name: "description",
      content: "コース一覧のページです。",
    },
  ],
});
</script>