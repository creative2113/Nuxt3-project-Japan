<template>
  <section class="top-news bg-[#f7d6d1] bg-[url('/images/news-bg-pc.webp')] bg-cover bg-no-repeat bg-center max-lg:bg-[url('/images/top-news-sp.webp')]">
    <div class="max-w-[1000px] w-full mx-auto">
      <div class="title-container pt-5 max-w-[613px] mx-auto">
        <ItemsMainTitle>
          <div class="section-main-title pt-4 pb-5 text-center text-white max-lg:pt-1">
            <h4 class="futura-pt text-[60px] max-lg:text-[45px]">NEWS</h4>
            <h2 class="text-[18px] max-lg:text-[16px]">新着トピックス</h2>
          </div>
        </ItemsMainTitle>
      </div>
    </div>
    <SliderTopNews />
  </section>
</template>