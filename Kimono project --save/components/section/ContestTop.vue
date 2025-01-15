<template>
  <section class="w-full bg-[#EEB0B0]">
    <div class="max-w-[1000px] mx-auto w-full relative py-5 max-lg:py-2.5">
      <div class="absolute top-3 left-0 max-lg:hidden">
        <SharedCoverLink :links="[
          { title: 'ON-girl着付け教室トップ', url: '/' },
          { title: 'フォトコンテスト', url: '/contest/' },
        ]" />
      </div>
      <div class="flex justify-center items-center gap-[30px] max-lg:gap-4">
        <img src="/images/contest-logo.svg" width="40" height="40" alt="ON-girl着物着付け教室フォトコンテスト" loading="lazy" class="w-10 h-10 max-lg:w-[30px] max-lg:h-[30px]" />
        <h1 class="text-[30px] futura-pt text-white max-lg:text-xl">PHOTO CONTEST</h1>
      </div>
    </div>
  </section>
</template>