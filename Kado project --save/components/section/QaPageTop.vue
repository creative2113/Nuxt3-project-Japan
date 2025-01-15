<template>
  <section>
    <ContentPageTop
      title="よくあるご質問"
      en_title="Q&A"
      banner_pc="/images/qa-page-banner-pc.webp"
      banner_sp="/images/qa-page-banner-sp.webp"
    />
    <div
      class="max-w-[1130px] w-full mx-auto pt-24 flex flex-wrap justify-between max-lg:px-2.5 max-lg:pt-[30px] pb-[60px]"
    >
      <div class="w-[300px] max-lg:w-full max-h-[100vh]">
        <ul
          class="shadow-lg qa-category-list"
          :class="openCategory ? '' : 'category-hidden'"
        >
          <li @click="openCategory = !openCategory">すべてのカテゴリー</li>
          <li
            v-for="(item, i) in questions"
            :key="i"
            @click="crt_qa_name = item.name"
            :class="item.name === crt_qa_name ? '!bg-[#F9F9F9]' : ''"
          >
            カテゴリー{{ item.name }}
          </li>
        </ul>
      </div>
      <div class="max-w-[800px] w-full">
        <div>
          <h2 class="text-2xl font-normal tracking-widest max-lg:hidden">
            カテゴリー{{ crt_qa_name }} のQ&A一覧
          </h2>
          <div>
            <ContentQA
              v-for="(item, i) in viewall
                ? crt_qa?.questions
                : crt_qa?.questions.slice(0, 5)"
              :key="i"
              :title="item.title"
              :answer="item.answer"
              :description="item.description"
              :is-open="item.isOpen"
            />
            <SquareButton
              v-if="!viewall"
              @click="viewall = !viewall"
              width="small"
              :arrow="viewall ? 'up' : 'down'"
              class="mt-5"
              >{{ crt_qa?.questions.length - 5 }}件全てを表示</SquareButton
            >
            <SquareButton
              v-if="viewall"
              @click="viewall = !viewall"
              width="small"
              :arrow="viewall ? 'up' : 'down'"
              class="mt-5"
              >閉じる</SquareButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const viewall = ref(false);
const openCategory = ref(false);
const crt_qa_name = ref("A");
const crt_qa = ref();
const questions = ref();
questions.value = await(await fetch("/data/qa.json")).json();
onMounted(() => {
  crt_qa.value = questions.value.find(
    (item: any) => item.name === crt_qa_name.value
  );
});
onUpdated(() => {
  crt_qa.value = questions.value.find(
    (item: any) => item.name === crt_qa_name.value
  );
});
</script>
<style lang="scss" scoped>
.qa-category-list {
  border: 1px solid #eeeeee;
  background-color: #dddddd;
  position: sticky;
  top: 0;

  > li:first-of-type {
    margin-top: 0;
  }

  > li {
    padding: 20px 20px 20px 15px;
    margin-top: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    @media (max-width: 1024px) {
      padding: 15px;
    }

    &::after {
      content: "";
      width: 9px;
      height: 9px;
      border-top: 1px solid #222222;
      border-right: 1px solid #222222;
      transform: rotate(45deg);
    }
  }
}
.category-hidden {
  > li:not(:first-of-type) {
    @media (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
