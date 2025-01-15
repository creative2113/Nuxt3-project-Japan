<template>
  <div class="swiper-second">
    <picture>
      <source media="(max-width: 1024px)" srcset="/images/top-main-sp-5.webp">
      <img src="/images/top-main-pc-5.webp" width="1920" height="737" alt="top-main-pc-5" loading="lazy" decoding="async" class="h-full w-auto object-cover absolute top-0 left-1/2 -translate-x-1/2">
    </picture>
    <div class="max-w-[1000px] w-full mx-auto relative">
      <div class="mission-contents relative z-10 flex flex-col items-center justify-center flex-nowrap py-5">
        <h2 class="text-[80px] gallatone text-center origin-center leading-[80px] text-white -rotate-6">Our<br>Mission</h2>
        <div class="mission-content flex -mt-11">
          <div>
            <div>
              <span class="roboto">01</span>
              <h3 class="hiragino-mp">着物業界を<br>透明化する</h3>
            </div>
          </div>
          <div>
            <div>
              <span class="roboto">02</span>
              <h3 class="hiragino-mp">着物業界の<br>裾野を拡げる</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="other-images">
        <img src="/images/obj-white-blue.svg" alt="flower pink" loading="lazy" decoding="async" width="75" height="73" class="min-w-[75px] h-auto" />
        <img src="/images/obj-white-pink.svg" alt="flower pink small" loading="lazy" decoding="async" width="37" height="36" class="w-[37px] h-auto" />
        <img src="/images/obj-white.svg" alt="flower white" loading="lazy" decoding="async" width="38" height="39" class="w-[38px] h-auto" />
        <img src="/images/obj-white.svg" alt="flower white small" loading="lazy" decoding="async" width="30" height="31" class="w-[30px] h-auto" />
        <img src="/images/obj-color-blue.svg" alt="flower color" loading="lazy" decoding="async" width="60" height="59" class="w-[60px] h-auto"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-second {
  background-color: #D1E4F7;
  padding: 143px 0 200px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 160px 0 395px;
  }

  >div {
    >.mission-contents {
      >.mission-content {
        >div {
          border: solid 1px #FFFFFF;
          border-radius: 9999px;
          width: 240px;
          aspect-ratio: 1;
          padding: 10px;
          margin-inline: -15px;

          >div {
            width: 100%;
            height: 100%;
            background: #FFFFFFcc;
            display: flex;
            flex-direction: column;
            border-radius: 9999px;
            justify-content: center;
            align-items: center;

            >span {
              color: #7E9DD8;
              font-size: 32px;
            }

            >h3 {
              font-size: 20px;
              text-align: center;
              color: var(--text-main);
            }
          }
        }
      }
    }

    .other-images {
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
        top: 0;
        left: -220px;
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
        top: 10px;
        left: 210px;
      }
    }
  }
}
</style>
