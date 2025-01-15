<script setup lang="ts">
</script>

<template>
  <div class="circle">
    <div class="circle-container">
      <div>
        <div>
          <h4>小物プレゼント</h4>
          <h5>自分では何も<br>買わなくていいから<br>安心！</h5>
        </div>
      </div>
      <div>
        <div>
          <h4>着物プレゼント</h4>
          <NumberPan :num="68434" />
          <h5>人の衝撃！</h5>
        </div>
      </div>
      <div>
        <div>
          <h4 class="last-title">リアル＆オンライン</h4>
          <h5>全国展開の店舗でも<br>オンラインでも<br> 自由自在！ </h5>
        </div>
      </div>
      <img src="/images/point.webp" alt="point" width="500" height="500" loading="lazy" decoding="async" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.circle {
  position: absolute;
  left: 50%;
  width: 100vw;
  padding: 0 17.5px;
  bottom: 30px;
  transform: translateX(-50%);
  z-index: 30;

  >.circle-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    >img {
      display: none;

      @media only screen and (max-width: 1024px) {
        left: 50%;
        min-width: 500px;
        transform: translateX(-50%);
        z-index: -1;
        top: -220px;
        display: block;
        position: absolute;
      }
    }

    >div {
      position: relative;
      width: 160px;
      height: 160px;
      padding: 38px 0;
      background-image: url('/images/circle.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;

      >div {
        position: relative;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        >h4 {
          color: var(--text-pink);
          font-size: 16px;
          margin: 0;
          line-height: 1;
        }

        >h5 {
          color: var(--text-main);
          font-size: 13px;
          line-height: 16px;
          margin: 0;
        }

        >.last-title {
          letter-spacing: -3px;
        }
      }
    }

    >div:nth-of-type(2) {
      @media (max-width: 1024px) {
        position: absolute;
        top: -160px;
      }
    }
  }
}
</style>
