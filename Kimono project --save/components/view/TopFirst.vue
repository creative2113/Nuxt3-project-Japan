<template>
  <div class="swiper-first">
    <picture>
      <source media="(max-width: 1023px)" srcset="/images/top-main-sp-4.webp" type="image/webp">
      <img src="/images/top-main-pc-4.webp" alt="photo" width="1920" height="737" decoding="async" class="h-full w-auto object-cover absolute top-0 left-1/2 -translate-x-1/2" />
    </picture>
    <div class="max-w-[1000px] w-full mx-auto relative">
      <div class="main-images">
        <picture>
          <source media="(max-width: 1023px)" srcset="/images/top-main-sp-1.webp" width="130" height="300"
            type="image/webp">
          <img src="/images/top-main-pc-1.webp" alt="photo" width="370" height="600" loading="lazy" decoding="async" />
        </picture>
        <picture>
          <source media="(max-width: 1023px)" srcset="/images/top-main-sp-2.webp" width="180" height="400"
            type="image/webp">
          <img src="/images/top-main-pc-2.webp" alt="girl ware" width="370" height="600" loading="lazy" decoding="async" />
        </picture>
        <picture>
          <source media="(max-width: 1023px)" srcset="/images/top-main-sp-3.webp" width="160" height="500"
            type="image/webp">
          <img src="/images/top-main-pc-3.webp" alt="girl look" width="370" height="600" loading="lazy" decoding="async" />
        </picture>
        <h3 class="hiragino-mp">着物プレゼント！</h3>
        <h3 class="hiragino-mp">音ガール着付け教室</h3>
      </div>
      <div class="other-images">
        <img src="/images/obj-white-pink.svg" alt="flower pink" width="75" height="73" loading="lazy" decoding="async" class="min-w-[75px] h-auto" />
        <img src="/images/obj-white-pink.svg" alt="flower pink small" width="37" height="36" loading="lazy" decoding="async" class="w-[37px] h-auto" />
        <img src="/images/obj-white.svg" alt="flower white" width="38" height="39" loading="lazy" decoding="async" class="w-[38px] h-auto" />
        <img src="/images/obj-white.svg" alt="flower white small" width="30" height="31" loading="lazy" decoding="async" class="w-[30px] h-auto" />
        <img src="/images/obj-color.svg" alt="flower color" width="60" height="59" loading="lazy" decoding="async" class="w-[60px] h-auto" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-first {
  position: relative;
  width: 100%;
  background-color: #F7D6D1;
  overflow: hidden;

  >div {
    @media (max-width: 1024px) {
      max-width: 100%;
      width: 100%;
    }

    >.main-images {
      width: 100%;
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 20px 0;

      @media (max-width: 1024px) {
        padding: 0;
        align-items: start;
        padding-bottom: 390px;
      }

      picture {
        width: 370px;
        height: 600px;
        @media (max-width: 1024px) {
          width: auto;
          height: auto;
        }
      }

      >picture:nth-of-type(2) {
        margin-top: 50px;
        margin-inline: -200px;

        @media (max-width: 1024px) {
          margin-top: 30px;
          margin-left: -90px;
          margin-right: -100px;;
        }
      }

      >picture:last-of-type {
        margin-top: 100px;

        @media (max-width: 1024px) {
          margin-top: 60px;
        }
      }

      >h3 {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        padding: 26px 5px;
        background-color: #FFFFFF;
        color: var(--text-main);
        font-size: 20px;
        text-align: center;
        width: min-content;
        writing-mode: vertical-lr;
        letter-spacing: 18px;

        &:first-of-type {
          top: 90px;
          left: 34%;
          @media (max-width: 1024px) {
            top: 41px;
            left: 89px;
          }
        }

        &:last-of-type {
          top: 135px;
          left: 66%;
          @media (max-width: 1024px) {
            top: 141px;
            left: 233px;
          }
        }
      }
    }

    >.other-images {
      position: absolute;
      z-index: 25;
      display: flex;
      flex-direction: column;
      width: min-content;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 1024px) {
        display: none;
      }

      >* {
        position: relative;
      }

      >img:nth-of-type(1) {
        top: -70px;
        left: -450px;
      }

      >img:nth-of-type(2) {
        top: 370px;
        left: 300px;
      }

      >img:nth-of-type(3) {
        top: 230px;
        left: -340px;
      }

      >img:nth-of-type(4) {
        top: 230px;
        left: -300px;
      }

      >img:nth-of-type(5) {
        top: 130px;
        left: 450px;
      }
    }
  }
}
</style>