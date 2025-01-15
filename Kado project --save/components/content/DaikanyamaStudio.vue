<template>
  <section class="pt-[60px] pb-[70px] max-lg:pb-10">
    <div class="max-w-[1000px] w-full mx-auto shadow-xl relative">
      <h2
        class="text-[30px] text-white font-semibold bg-[#AAAAFF] text-center pt-4 pb-1 max-lg:text-xl max-lg:pt-2 max-lg:!pb-2 max-lg:leading-6"
      >
        <span class="lg:hidden">渋谷区 | </span>代官山スタジオ
      </h2>
      <ContentStudioLocationView :pictures="pictures" />
      <div class="pt-4 pb-9 relative max-lg:pb-0">
        <h3 class="text-xl text-center font-semibold">代官山スタジオ</h3>
        <hr class="w-[30px] h-[1px] bg-[#888888] border-none mx-auto mt-4" />
        <p class="text-[13px] text-center font-light mt-4">
          東京随一のおしゃれな街、<br />代官山に完成した最新音楽スタジオ。<br /><br />来るたびに心が躍り、<br />楽しさと安らぎを与える洗練された空間で、<br />思う存分レッスンをお楽しみください。
        </p>
        <div class="max-lg:flex justify-between">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-woman-left-sp.webp"
              type="image/webp"
            />
            <img
              src="/images/studio-detail-woman-left.webp"
              width="99"
              height="268"
              loading="lazy"
              decoding="async"
              class="w-[99px] h-auto lg:absolute top-[38px] left-20 z-10 max-lg:w-[104px] max-lg:relative max-lg:top-0 max-lg:left-0"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-show-title-pink-sp.svg"
              type="image/svg+xml"
            />
            <img
              src="/images/studio-detail-show-title-pink.svg"
              width="238"
              height="161"
              loading="lazy"
              decoding="async"
              class="w-[238px] h-auto absolute top-[-10px] left-[103px] max-lg:w-[129px] max-lg:top-auto max-lg:bottom-[39px] max-lg:left-[50px]"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-show-title-blue-sp.svg"
              type="image/svg+xml"
            />
            <img
              src="/images/studio-detail-show-title-blue.svg"
              width="203"
              height="156"
              loading="lazy"
              decoding="async"
              class="w-[203px] h-auto absolute top-5 right-[107px] max-lg:w-[129px] max-lg:top-auto max-lg:bottom-[39px] max-lg:right-[48px]"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-woman-right-sp.webp"
              type="image/webp"
            />
            <img
              src="/images/studio-detail-woman-right.webp"
              width="169"
              height="262"
              loading="lazy"
              decoding="async"
              class="w-[169px] h-auto lg:absolute top-[26px] right-4 z-10 max-lg:w-[83px] max-lg:relative max-lg:top-0 max-lg:right-0"
            />
          </picture>
        </div>
      </div>
      <div class="pb-9 max-lg:pt-5 max-lg:pb-5">
        <button
          @click="viewInformation = true"
          class="block w-[300px] mx-auto bg-black text-white font-semibold py-3.5 relative"
        >
          <span>詳しく見る</span>
          <img
            src="/images/arrow/arrow-down-white.svg"
            alt="arrow"
            loading="lazy"
            width="16"
            height="9"
            class="w-4 h-auto absolute top-[22px] right-4"
          />
        </button>
      </div>
    </div>
    <ContentAccessInformantion v-if="viewInformation" @close="viewInformation = false" />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  open?: boolean;
}>();
const viewInformation = ref(props.open? true : false);
const pictures = await(await fetch("/data/sdudiopictures.json")).json();
</script>
