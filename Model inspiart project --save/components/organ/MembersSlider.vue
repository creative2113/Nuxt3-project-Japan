<script lang="ts" setup>
const members: any = await(await fetch('/data/topmembers.json')).json();
</script>

<template>
  <div class="pt-[44px] min-w-full relative text-white px-5 pb-6">
    <Swiper :modules="[SwiperNavigation]" :loop="true" :navigation="{
      nextEl: '.member-swiper-button-next',
      prevEl: '.member-swiper-button-prev',
    }" :slidesPerView="2" :spaceBetween="15" class="!overflow-visible">
      <SwiperSlide v-for="(mem, i) of members" :key="i">
        <div class="flex flex-col items-center justify-center w-40">
          <h3 class="text-[16px] mb-3 font-bold">{{ mem.name }}</h3>
          <div class="relative">
            <span
              class="absolute inline-block border-black border-2 w-[90px] h-[90px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 -z-10" />
            <img :src="mem.image" :alt="mem.name" loading="lazy" decoding="async" width="200" height="215"
              class="w-[200px] h-auto -mb-2" />
          </div>
          <h4 class="mb-[18px] w-full text-center font-bold bg-black py-[2px] text-[11px] relative">
            {{ mem.role }}
          </h4>
          <p class="mb-[14px] text-[11px]">{{ mem.description }}</p>
          <button aria-label="member" class="bg-[#00000080] py-[14px] px-[11px]">
            <img src="/images/arrow/arrow-down-white.svg" alt="arrow" loading="lazy" width="16" height="9" />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
    <div>
      <div class="member-swiper-button-prev">
        <img src="/images/arrow/arrow-left.svg" alt="arrow left" width="30" loading="lazy" height="15" />
      </div>
      <div class="member-swiper-button-next">
        <img src="/images/arrow/arrow-right.svg" alt="arrow right" loading="lazy" width="30" height="15" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.member-swiper-button-prev,
.member-swiper-button-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #00000080;
  position: absolute;
  top: 40%;
  z-index: 20;
  cursor: pointer;
  user-select: none;
}

.member-swiper-button-prev::after,
.member-swiper-button-next::after {
  display: none;
}



.member-swiper-button-prev {
  left: 0;
}

.member-swiper-button-next {
  right: 0;
}
</style>
