<template>
  <section class="top-solved relative pt-[180px]">
    <ItemsContentTitle>
      <div class="solved-title text-center">
        <h4
          class="text-[28px] flex items-end gap-[13px] flex-nowrap whitespace-nowrap"
        >
          <img
            src="/images/logo.svg"
            alt="On-girl"
            class="w-[236px] h-[60px]"
            loading="lazy"
          />
          <span>なら</span>
        </h4>
        <h2 class="text-[28px]">お悩み全て解決！</h2>
      </div>
    </ItemsContentTitle>
    <div class="max-w-[1000px] w-full mx-auto">
      <div
        class="solved-main-img mt-[54px] flex justify-center pt-[35px] w-full max-lg:pt-14 max-lg:mt-0"
      >
        <img
          src="/images/solved-img-pc.webp"
          alt="solved"
          class="w-[451px] h-[342px] max-lg:w-[329px] max-lg:h-[249px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top-solved {
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #ffffff,
    #fffefe,
    #f2cdce
  );
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    border-left: solid transparent 400px;
    border-right: solid transparent 400px;
    border-top: solid #f1f1f1 120px;
    transform: translateX(-50%);
  }

  div.container {
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }

  .solved-main-img {
    background-image: url("/images/solved-bg-pc.webp");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 1920px auto;
    @media screen and (max-width: 1024px) {
      background-image: url("/images/solved-bg-sp.webp");
      background-size: 100% auto;
    }
  }
}
</style>
