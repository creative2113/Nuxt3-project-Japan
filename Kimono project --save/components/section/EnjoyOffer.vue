<template>
  <section class="w-full pt-[46px]">
    <ItemsSubTitle>
      バリエーション豊かな<br />コース＆クラスをご用意！
    </ItemsSubTitle>
    <div class="pt-7 w-full max-w-[1000px] mx-auto">
      <div class="w-full max-lg:px-5">
        <SliderEnjoyOffer :offers="offers" />
      </div>
      <div
        class="mt-8 bg-[#EEB0B0CC] p-5 relative before:block before:absolute before:border-x-[16px] before:border-x-transparent before:border-b-[32px] before:border-b-[#EEB0B0CC] before:-top-6 before:left-[140px]"
      >
        <div class="w-full flex justify-center items-end gap-6">
          <span
            class="inline-block w-6 h-[1px] bg-white origin-right rotate-[60deg]"
          ></span>
          <h4 class="text-white text-[20px] text-center max-lg:text-[18px]">
            具体的なクラスを覗いてみよう！
          </h4>
          <span
            class="inline-block w-6 h-[1px] bg-white origin-left rotate-[-60deg]"
          ></span>
        </div>
        <div class="flex justify-between items-center mt-5 max-lg:gap-5 max-lg:overflow-x-scroll">
          <div
            class="w-[225px] h-[400px] min-w-[225px] rounded-[10px] overflow-hidden shadow-lg relative"
          >
            <span
              class="text-[11px] p-[5px_18px_5px_7px] rounded-r-full absolute left-0 top-[30px] z-20 text-[#E0A95F] bg-white"
              >残席わずか：2席</span
            >
            <img
              src="/images/enjoy-offer-detail-1.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="400"
              class="w-full h-full"
            />
            <span
              class="block absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-[#000000] to-[#00000001]"
            ></span>
            <span
              class="flex justify-center items-center w-[75px] h-[75px] bg-[#00000099] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 after:block after:border-y-[14px] after:border-y-transparent after:border-l-[26px] after:border-l-white"
            ></span>
            <div
              class="flex absolute gap-2 left-[15px] bottom-[15px] items-center"
            >
              <img
                src="/images/enjoy-offer-detail-avatar.webp"
                alt="enjoy user"
                loading="lazy"
                width="45"
                height="45"
                class="w-[45px] h-[45px] rounded-full"
              />
              <div class="text-white text-[10px]">
                <p>EYS air</p>
                <p>関東/水曜 11:00〜</p>
              </div>
            </div>
          </div>
          <div
            class="w-[225px] h-[400px] min-w-[225px] rounded-[10px] overflow-hidden shadow-lg relative"
          >
            <span
              class="text-[11px] p-[5px_18px_5px_7px] rounded-r-full absolute left-0 top-[30px] z-20 text-[#7E9DD8] bg-white"
              >申込受付中</span
            >
            <img
              src="/images/enjoy-offer-detail-2.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="400"
              class="w-full h-full"
            />
            <span
              class="block absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-[#000000] to-[#00000001]"
            ></span>
            <div
              class="flex absolute gap-2 left-[15px] bottom-[15px] items-center"
            >
              <img
                src="/images/enjoy-offer-detail-avatar.webp"
                alt="enjoy user"
                loading="lazy"
                width="45"
                height="45"
                class="w-[45px] h-[45px] rounded-full"
              />
              <div class="text-white text-[10px]">
                <p>EYS マネーアカデ…</p>
                <p>関西/月曜 19:00〜</p>
              </div>
            </div>
          </div>
          <div
            class="w-[225px] h-[400px] min-w-[225px] rounded-[10px] overflow-hidden shadow-lg relative"
          >
            <span
              class="text-[11px] p-[5px_18px_5px_7px] rounded-r-full absolute left-0 top-[30px] z-20 text-[#7E9DD8] bg-white"
              >申込受付中</span
            >
            <img
              src="/images/enjoy-offer-detail-3-bg.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="400"
              class="w-full h-full blur-sm brightness-50"
            />
            <img
              src="/images/enjoy-offer-detail-3.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="150"
              class="w-full h-auto absolute top-1/2 left-0 -translate-y-1/2"
            />
            <span
              class="block absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-[#000000] to-[#00000001]"
            ></span>
            <div
              class="flex absolute gap-2 left-[15px] bottom-[15px] items-center"
            >
              <img
                src="/images/enjoy-offer-detail-avatar.webp"
                alt="enjoy user"
                loading="lazy"
                width="45"
                height="45"
                class="w-[45px] h-[45px] rounded-full"
              />
              <div class="text-white text-[10px]">
                <p>EYS air</p>
                <p>関東/水曜 11:00〜</p>
              </div>
            </div>
          </div>
          <div
            class="w-[225px] h-[400px] min-w-[225px] rounded-[10px] overflow-hidden shadow-lg relative"
          >
            <span
              class="text-[11px] p-[5px_18px_5px_7px] rounded-r-full absolute left-0 top-[30px] z-20 text-[#7E9DD8] bg-white"
              >申込受付中</span
            >
            <img
              src="/images/enjoy-offer-detail-4-bg.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="400"
              class="w-full h-full blur-sm brightness-50"
            />
            <img
              src="/images/enjoy-offer-detail-4.webp"
              alt="enjoy detail"
              loading="lazy"
              width="255"
              height="168"
              class="w-full h-auto absolute top-1/2 left-0 -translate-y-1/2"
            />
            <span
              class="block absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-[#000000] to-[#00000001]"
            ></span>
            <div
              class="flex absolute gap-2 left-[15px] bottom-[15px] items-center"
            >
              <img
                src="/images/enjoy-offer-detail-avatar.webp"
                alt="enjoy user"
                loading="lazy"
                width="45"
                height="45"
                class="w-[45px] h-[45px] rounded-full"
              />
              <div class="text-white text-[10px]">
                <p>EYS air</p>
                <p>関東/水曜 11:00〜</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-10 max-lg:pt-5">
        <button
          class="block mx-auto text-[14px] relative pt-[23px] pb-[18px] px-[100px] rounded-full bg-white border border-[#999999] after:w-2 after:h-2 after:block after:border-r after:border-t after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 max-lg:mt-10"
        >
          コースと料金一覧へ
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const offers = await(await fetch("/data/coolvotes.json")).json();
</script>
