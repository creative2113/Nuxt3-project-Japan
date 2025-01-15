<template>
  <section class="pt-[100px]">
    <div
      class="w-full py-[104px] lg:bg-[url('/images/top-title-7.svg')] bg-top bg-no-repeat lg:bg-cover max-lg:py-24 max-lg:bg-[url('/images/top-title-7-sp.svg')] max-lg:bg-contain relative z-10"
    >
      <h2
        class="text-[30px] font-bold text-center tracking-[0.1em] max-lg:text-xl"
      >
        華道＆アレンジフラワーを<br />より究めたい方へのプログラム
      </h2>
    </div>
    <div class="w-full">
      <img
        src="/images/group-title-en.svg"
        alt="group"
        width="153"
        height="85"
        class="w-[153px] h-auto mx-auto -mt-[85px] max-lg:w-[117px] max-lg:-mt-[70px] relative z-10"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/images/group-title.svg"
        alt="グループ展"
        width="314"
        height="57"
        class="w-[314px] h-auto mx-auto -mt-[18px] max-lg:w-[165px] max-lg:-mt-4 relative z-10"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="w-full lg:bg-[url('/images/group-bg-pc.webp')] bg-cover bg-center bg-no-repeat pt-8 pb-[60px] max-lg:pt-7 max-lg:bg-[url('/images/group-top-bg-sp.webp')] max-lg:bg-bottom max-lg:bg-contain max-lg:pb-12">
      <div class="w-full max-w-[610px] mx-auto">
        <h3 class="text-xl text-center font-semibold max-lg:text-lg">ギャラリーで自分の作品を展示！</h3>
        <p class="w-full mt-[26px] px-[25px] text-sm leading-6 font-normal max-lg:mt-4 max-lg:text-xs max-lg:px-5 max-lg:leading-6">特設されたスタジオ内のギャラリーにて、⾃分の渾⾝の1作品を展⽰できる「個展」も随時開催されます。ただレッスンするだけでなく、⾃分の作品を展⽰することでレッスンに対する意気込みや気合いも変わってくるもの。強制ではないので⾃由に作品作りをすることもできますが、⾊んな⽅の⽬にとまる場所に⾃分の作品が展⽰できるのもEYS銀座スタジオの特徴です。<br>「個展」をご⾃⾝で開催されるには莫⼤な費⽤がかかりますが、EYS銀座スタジオが全⾯的にバックアップするのでご安⼼してレッスンに通うことができます。</p>
        <div class="w-full flex justify-between items-start mt-[26px] relative max-lg:px-5 max-lg:mt-7">
          <img src="/images/group-top-flower.webp" alt="group" width="201" height="209" loading="lazy" decoding="async" class="w-[201px] h-auto absolute bottom-6 left-0 max-lg:w-[111px] max-lg:bottom-1.5 max-lg:left-2.5" />
          <img src="/images/group-top-flower.webp" alt="group" width="201" height="209" loading="lazy" decoding="async" class="w-[152px] h-auto absolute rotate-180 top-5 right-[82px] max-lg:w-[91px] max-lg:top-7 max-lg:right-14" />
          <img src="/images/group-top-photo-1.webp" alt="group" width="150" height="150" loading="lazy" decoding="async" class="w-[150px] h-auto relative z-10 mt-5 max-lg:w-20 max-lg:mt-10" />
          <img src="/images/group-top-photo-2.webp" alt="group" width="300" height="300" loading="lazy" decoding="async" class="w-[300px] h-auto relative -mx-5 max-lg:w-[165px] max-lg:-mx-2.5" />
          <img src="/images/group-top-photo-3.webp" alt="group" width="200" height="200" loading="lazy" decoding="async" class="w-[200px] h-auto relative z-10 mt-[120px] max-lg:w-[110px] max-lg:mt-24" />
        </div>
      </div>
    </div>
  </section>
  <FestivalUserVoice :user-voice="userVoice" />
  <Stage :stages="stages"/>
  <section class="pt-[60px]">
    <div class="w-full">
      <img
        src="/images/group-workshop-title-en.svg"
        alt="group"
        width="260"
        height="88"
        class="w-[260px] h-auto mx-auto max-lg:w-[193px] relative z-10"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/images/group-workshop-title.svg"
        alt="workshop"
        width="447"
        height="54"
        class="w-[447px] h-auto mx-auto -mt-8 max-lg:w-[244px] max-lg:-mt-4 relative z-10"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="w-full lg:bg-[url('/images/group-bg-pc.webp')] bg-cover bg-center bg-no-repeat pt-8 pb-[60px] max-lg:pt-7 max-lg:bg-[url('/images/group-top-bg-sp.webp')] max-lg:bg-bottom max-lg:bg-contain max-lg:pb-12">
      <div class="w-full max-w-[610px] mx-auto">
        <h3 class="text-xl text-center font-semibold max-lg:text-lg">「華道＆アレンジフラワー × ◯◯」の<br>マリアージュワークショップも多数開催！</h3>
        <p class="w-full mt-[26px] px-[25px] text-sm leading-6 font-normal max-lg:mt-4 max-lg:text-xs max-lg:px-5 max-lg:leading-6">お花を使ったご家庭でも再現することができる季節のテーブルコーディネイトなど、さらなる⾃分の世界観を広げるワークショップも多数開催。<br><br>ご⾃宅でパートナーやお⼦様と⼀緒に、より楽しくて幸せな時間を共有することもできます。</p>
        <div class="w-full flex justify-between items-start mt-[26px] relative max-lg:px-5 max-lg:mt-7">
          <img src="/images/group-workshop-flower.webp" alt="group" width="225" height="241" loading="lazy" decoding="async" class="w-[225px] h-auto absolute top-2.5 left-3.5 max-lg:w-[111px] max-lg:top-6 max-lg:left-8" />
          <img src="/images/group-workshop-flower.webp" alt="group" width="225" height="241" loading="lazy" decoding="async" class="w-[191px] h-auto absolute rotate-180 bottom-5 right-0 max-lg:w-[91px] max-lg:right-5" />
          <img src="/images/group-workshop-1.webp" alt="group" width="200" height="200" loading="lazy" decoding="async" class="w-[200px] h-auto relative z-10 mt-[120px] max-lg:w-[110px] max-lg:mt-24" />
          <img src="/images/group-workshop-2.webp" alt="group" width="300" height="300" loading="lazy" decoding="async" class="w-[300px] h-auto relative -mx-5 max-lg:w-[165px] max-lg:-mx-2.5" />
          <img src="/images/group-workshop-3.webp" alt="group" width="150" height="150" loading="lazy" decoding="async" class="w-[150px] h-auto relative z-10 mt-5 max-lg:w-20 max-lg:mt-10" />
        </div>
      </div>
    </div>
  </section>
  <FeaturedMusicActivities :music-activities="musicActivities"/>
  <SquareButton width="small" arrow="down" class="mt-[30px] mb-[60px] max-lg:mt-5">ワークショップ一覧へ</SquareButton>
</template>

<script lang="ts" setup>
const userVoice = ref();
userVoice.value = await(await fetch('/data/festivalUserVoice.json')).json();
const stages = ref();
stages.value = await(await fetch('/data/stage.json')).json();
const musicActivities = ref();
musicActivities.value = await(await fetch('/data/music-activities.json')).json();
</script>
