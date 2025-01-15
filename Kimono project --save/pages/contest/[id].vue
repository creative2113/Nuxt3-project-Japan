<template>
  <SectionContestTop />
  <section class="w-full pt-[60px] pb-[100px] max-lg:px-5 max-lg:pt-5">
    <div class="max-w-[800px] w-full mx-auto">
      <div>
        <ItemsMainTitle opposite color="#F7D6D1">
          <div class="pt-[14px] pb-[37px] text-center">
            <h2 class="text-[60px] text-[#D87E80] futura-pt max-lg:text-[45px]">RESULTS</h2>
            <h3 class="text-lg">開催済みのコンテスト</h3>
          </div>
        </ItemsMainTitle>
      </div>
      <SectionContestResultDetail :id="id" />
      <SectionContestOnGoing class="mt-[100px]" />
      <ContestButton link="/contest/results" direction="left" class="mt-[100px]">開催済み一覧へ</ContestButton>
      <ContestButton link="/contest" direction="left" class="mt-5">コンテストTOPへ</ContestButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: "kimono | フォトコンテスト",
  meta: [
    {
      name: "description",
      content: "フォトコンテストでは、フォトをアップロードして、友達とコミュニティにアップロードしたフォトを共有することができます。"
    },
    {
      name: "keywords",
      content: "フォトコンテスト, photo, contest, photo contest, kimono, on-girl"
    }
  ]
});
const route = useRoute();
const id = ref<number>(Number(route.params.id));
</script>