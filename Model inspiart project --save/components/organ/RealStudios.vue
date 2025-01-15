<template>
  <div class="real-studios">
    <h3>リアルスタジオ</h3>
    <OrganStudioSlider />
    <OrganStudioList />
  </div>
</template>
<style scoped>
.real-studios {
  position: relative;
  width: 100%;
}
.real-studios>h3 {
  padding-top: 32px;
  padding-bottom: 14px;
  background-color: #6688DD;
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  clip-path: polygon(0 0, 50% 20px, 100% 0, 100% 100%, 0 100%);
}
</style>
