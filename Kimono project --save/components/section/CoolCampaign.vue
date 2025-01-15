<template>
  <section class="pt-14 max-lg:max-w-[375px] max-lg:mx-auto max-lg:overflow-hidden">
    <ItemsContentTitle>
      <h3 class="text-[28px] text-center text-nowrap">
        フォトコンテスト<br />絶賛開催中！
      </h3>
    </ItemsContentTitle>
    <div class="w-full mt-[52px]">
      <ItemsSubTitle
        >フォロー＆ハッシュタグ<br />
        キャンペーン実施中！</ItemsSubTitle
      >
    </div>
    <div class="w-full max-w-[650px] mx-auto mt-7 max-lg:pt-8">
      <ItemsMainTitle :opposite="true" color="#E39597">
        <div class="w-[130px] h-[128px] max-lg:-my-8">
          <img
            src="/images/cool-title-img.svg"
            width="130"
            height="128"
            alt="cool"
            loading="lazy"
            class="w-full h-full"
          />
        </div>
      </ItemsMainTitle>
      <span class="w-max mt-5 px-[54px] py-2 rounded-full border border-[#999999] block mx-auto max-lg:mt-14">#ongirlcampaign</span>
    </div>
    <div class="w-full pt-[142px] relative max-lg:pt-20 before:block before:absolute before:w-[calc(100%+300px)] before:h-[calc(100%+200px)] before:top-16 before:left-1/2 before:-translate-x-1/2 before:bg-white before:origin-center before:rotate-12">
      <div class="max-w-[335px] mx-auto relative px-[7.5px] max-lg:px-0">
        <img
          src="/images/cool-present.webp"
          width="320"
          height="320"
          alt="cool present"
          loading="lazy"
          class="w-full h-full object-cover"
        />
        <h4 class="text-[80px] text-[#E39597] gallatone absolute -top-16 left-1/2 -translate-x-1/2">Present</h4>
        <p class="absolute w-full top-1/2 left-0 -translate-y-1/2 text-white bg-[#000000cc] text-center text-[10px] py-2">dummy　※ 実際のプレゼント写真を入れてください</p>
        <div class="w-[150px] h-[148px] text-center flex flex-col items-center justify-center absolute -bottom-10 right-0 text-white gap-2 bg-[url('/images/flower-bg-1.svg')] bg-no-repeat bg-cover bg-center">
          <p class="text-xs">京都西陣織の老舗</p>
          <hr class="border-t border-t-white w-24">
          <p class="text-base">細尾の訪問着</p>
          <hr class="border-t border-t-white w-24">
          <p class="text-xs">プレゼント！</p>
        </div>
        <img
          src="/images/two-flowers-pink.svg"
          width="73"
          height="63"
          alt="flower"
          loading="lazy"
          class="w-[73px] h-[63px] absolute top-[26px] right-0"
        />
        <img
          src="/images/obj-color.svg"
          width="60"
          height="59"
          alt="flower"
          loading="lazy"
          class="w-[60px] h-[59px] absolute bottom-[34px] left-7"
        />
      </div>
    </div>
    <div class="w-full pt-[90px] pb-9 relative mt-[-106px] max-lg:mt-0 max-lg:pb-[120px]">
      <div class="bg-[#F7D6D1] absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden clip-bg">
        <h5 class="text-xl text-[#D87E80] bg-[#FFFFFF80] tracking-[20px] text-center font-bold futura-pt py-8 px-[700px] whitespace-nowrap origin-center rotate-12 max-lg:rotate-90 max-lg:tracking-[26px]">ON-girl KIMONO PHOTO CONTEST</h5>
        <img
        src="/images/circle-10.webp"
        width="483"
        height="483"
        alt="circle cool"
        loading="lazy"
        class="absolute right-[calc(50%+115px)] top-[-143px] max-lg:w-[337px] max-lg:h-[337px] max-lg:-top-2 max-lg:-right-[209px]"
        />
        <img
        src="/images/circle-5.webp"
        width="395"
        height="395"
        alt="circle cool"
        loading="lazy"
        class="absolute left-[calc(50%+48px)] top-[23px] max-lg:w-[297px] max-lg:h-[297px] max-lg:top-[170px] max-lg:-left-[148px]"
        />
        <img
        src="/images/circle-9.webp"
        width="443"
        height="443"
        alt="circle cool"
        loading="lazy"
        class="absolute right-[calc(50%+48px)] bottom-[10px] max-lg:w-[361px] max-lg:h-[361px] max-lg:bottom-[455px] max-lg:-right-[233px]"
        />
        <img
        src="/images/circle-8.webp"
        width="524"
        height="524"
        alt="circle cool"
        loading="lazy"
        class="absolute left-[calc(50%+72px)] bottom-[-197px] max-lg:w-[363px] max-lg:h-[363px] max-lg:bottom-[121px] max-lg:-left-[237px]"
        />
      </div>
      <div class="max-w-[1000px] mx-auto relative px-[7.5px] max-lg:flex max-lg:justify-between max-lg:px-0">
        <img
          src="/images/class-grid-tile.svg"
          width="200"
          height="40"
          alt="cool present"
          loading="lazy"
          class="absolute left-[100px] lg:top-[230px] max-lg:-left-[60px] max-lg:bottom-0"
        />
        <img
          src="/images/class-grid-tile.svg"
          width="200"
          height="40"
          alt="cool present"
          loading="lazy"
          class="absolute lg:right-[100px] lg:top-[600px] max-lg:-right-[60px] max-lg:top-[83px]"
        />
        <div class="flex justify-start items-start gap-[155px] relative max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:-mx-2.5">
          <img
            src="/images/cool-contest-1.webp"
            width="175"
            height="300"
            alt="cool present"
            loading="lazy"
          />
          <img
            src="/images/cool-contest-2.webp"
            width="175"
            height="300"
            alt="cool present"
            class="mt-[70px] max-lg:mt-0"
            loading="lazy"
          />
          <img
            src="/images/cool-contest-3.webp"
            width="175"
            height="300"
            alt="cool present"
            class="mt-[140px] max-lg:mt-0"
            loading="lazy"
          />
        </div>
        <div class="flex justify-end items-start gap-[155px] -mt-4 relative max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:mt-40 max-lg:-mx-2.5">
          <img
            src="/images/cool-contest-4.webp"
            width="175"
            height="300"
            alt="cool present"
            loading="lazy"
          />
          <img
            src="/images/cool-contest-5.webp"
            width="175"
            height="300"
            alt="cool present"
            class="mt-[70px] max-lg:mt-0"
            loading="lazy"
          />
          <img
            src="/images/cool-contest-6.webp"
            width="175"
            height="300"
            alt="cool present"
            class="mt-[140px] max-lg:mt-0"
            loading="lazy"
          />
        </div>
      </div>
      <nuxt-link to="/contest" class="block w-max mx-auto text-[14px] relative pt-6 pb-5 px-[100px] rounded-full bg-white after:w-2 after:h-2 after:block after:border-r after:border-b after:origin-center after:border-[#E39597] after:rotate-45 after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 max-lg:mt-10">
        もっと見る
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
.clip-bg {
  clip-path: polygon(0 0, 100% 37%, 100% 100%, 0 60%);
}
@media screen and (max-width: 1024px) {
  .clip-bg {
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 94%);
  }
}
</style>
