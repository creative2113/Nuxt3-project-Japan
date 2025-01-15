<template>
  <div class="top-cover relative w-full">
    <OrganTopHeader />
    <div class="relative top-pagenation-swiper">
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="0"
        :slides-per-group="1"
        :loop="true"
        :pagination="true"
        class="swiper"
      >
        <SwiperSlide v-for="i of 3" :key="i">
          <OrganTopCover />
        </SwiperSlide>
      </Swiper>
      <OrganCircles bg-from="#FE88BB" bg-to="#AA99EE" />
    </div>
    <OrganHeaderNav />
  </div>
</template>

<style>
.top-pagenation-swiper > .swiper > .swiper-pagination {
  bottom: 0;
}
.top-pagenation-swiper > .swiper > .swiper-pagination > .swiper-pagination-bullet {
  width: 30px;
  height: 2px;
  background-color: #000000;
  opacity: 0.5;
  border-radius: 0;
  margin-inline: 5px;
}
.top-pagenation-swiper > .swiper > .swiper-pagination > .swiper-pagination-bullet-active {
  background-color: #ffffff;
  opacity: 1;
}
</style>
