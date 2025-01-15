<script lang="ts" setup>

const bandpanels = ref();
bandpanels.value = await(await fetch('/data/band.json')).json();
</script>

<template>
  <section class="max-lg:pt-[34px] lg:pt-24 lg:pb-[100px] max-lg:pb-[60px]">
    <div class="max-w-[800px] w-full mx-auto">
      <div
        class="w-full text-center mt-4 flex gap-9 items-end justify-center before:block before:w-0.5 before:h-12 before:bg-[#222222] before:origin-bottom before:-rotate-[20deg] after:block after:w-0.5 after:h-12 after:bg-[#222222] after:origin-bottom after:rotate-[20deg] max-lg:before:hidden max-lg:after:hidden"
      >
        <h3 class="text-xl font-semibold max-lg:text-base">
          SecondComnunityアプリで<br />音楽を通じた仲間に出会えます！
        </h3>
      </div>
      <img
        src="/images/event-community-1-compressed.webp"
        alt="event date"
        width="800"
        height="342"
        loading="lazy"
        class="w-full h-auto mt-7 max-lg:hidden"
      />
      <img
        src="/images/event-community-1-sp-compressed.webp"
        alt="event date"
        width="375"
        height="225"
        loading="lazy"
        class="w-full h-auto mt-7 lg:hidden"
      />
      <div class="w-[720px] mx-auto -mt-12 relative bg-white shadow-lg max-lg:w-full pt-4">
        <img
          src="/images/event-community-node.svg"
          alt="event community"
          width="230"
          height="110"
          loading="lazy"
          class="w-[230px] h-auto mx-auto -mt-20 drop-shadow-lg relative z-10 max-lg:w-[220px]"
        />
        <div class="flex px-10 justify-between items-start pb-5 mt-5 max-lg:w-full max-lg:overflow-x-scroll max-lg:gap-3 max-lg:-mt-6">
          <img
            src="/images/event-community-1.webp"
            alt="event date"
            width="155"
            height="320"
            loading="lazy"
            class="min-w-[155px] h-auto shadow-lg rounded-[20px] border border-[#EEEEEE] relative lg:bottom-10"
          />
          <img
            src="/images/event-community-2.webp"
            alt="event date"
            width="155"
            height="320"
            loading="lazy"
            class="min-w-[155px] h-auto shadow-lg rounded-[20px] border border-[#EEEEEE] relative lg:right-4"
          />
          <img
            src="/images/event-community-3.webp"
            alt="event date"
            width="160"
            height="320"
            loading="lazy"
            class="min-w-[160px] h-auto shadow-lg rounded-[20px] border border-[#EEEEEE] relative lg:left-4"
          />
          <img
            src="/images/event-community-4.webp"
            alt="event date"
            width="160"
            height="320"
            loading="lazy"
            class="min-w-[160px] h-auto shadow-lg rounded-[20px] border border-[#EEEEEE] relative lg:bottom-10"
          />
        </div>
      </div>
    </div>
    <!-- 「大人気！バンドやろうよEYS音楽教室の原点となったとても濃いYoko-Chin Bandプログラム」のカルーセル -->
    <ContentBandPanels :panels="bandpanels"/>
    <!-- /「大人気！バンドやろうよEYS音楽教室の原点となったとても濃いYoko-Chin Bandプログラム」のカルーセル -->
    <SquareButton width="large" class="max-lg:w-[310px] mx-auto">コミュニティページへ</SquareButton>
  </section>
</template>
