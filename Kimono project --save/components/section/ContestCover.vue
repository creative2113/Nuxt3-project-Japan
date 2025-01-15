<template>
  <section
    class="w-full bg-[#EEB0B0] bg-[url(/images/contest-cover-bg-pc.webp)] bg-no-repeat bg-center bg-[length:auto_100%] max-lg:bg-[url(/images/contest-cover-bg-sp.webp)]">
    <div class="max-w-[1000px] mx-auto w-full relative">
      <div class="absolute top-3 left-0 max-lg:hidden">
        <SharedCoverLink :links="[
          { title: 'ON-girl着付け教室トップ', url: '/' },
          { title: 'フォトコンテスト', url: '/contest/' },
        ]" />
      </div>
      <div
        class="w-[560px] mx-auto pt-[60px] pb-[117px] max-lg:w-full max-lg:pt-5 max-lg:pb-[120px] max-lg:flex justify-center">
        <img src="/images/contest-banner.webp" width="560" height="560" alt="ON-girl着物着付け教室フォトコンテスト" loading="lazy"
          decoding="async" class="w-[560px] h-[560px] max-lg:w-[460px] max-lg:min-w-[460px] max-lg:h-[460px]" />
      </div>
    </div>
  </section>
</template>
