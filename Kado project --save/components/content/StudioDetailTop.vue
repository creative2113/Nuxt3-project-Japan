<script lang="ts" setup>
defineProps<{
  pc_banner: String;
  sp_banner: String;
  title: String;
  sub_title: String;
  description?: String;
}>();
</script>

<template>
  <section>
    <picture>
      <source
        media="(max-width: 1024px)"
        :srcset="sp_banner"
        type="image/webp"
      />
      <img
        :src="pc_banner"
        :alt="title"
        width="1920"
        height="550"
        loading="lazy"
        decoding="async"
        class="w-auto h-full object-cover max-lg:w-full max-lg:h-auto"
      />
    </picture>
    <div class="w-full pb-[154px] max-lg:pb-[58px]">
      <div
        class="w-[800px] max-w-full mx-auto -mt-[140px] relative z-10 max-lg:w-[345px] max-lg:-mt-[60px]"
      >
        <h1
          class="w-full h-[140px] bg-gradient-to-r from-[#9999EEC8] to-[#E2A1C4C8] text-[80px] text-center content-center relative z-10 text-white font-semibold tracking-widest max-lg:text-[30px] max-lg:h-[60px]"
        >
          {{ title }}
        </h1>
        <div
          class="w-full pt-14 pb-[54px] max-lg:pt-[30px] bg-white shadow-lg relative z-10 max-lg:px-5"
        >
          <h2
            class="text-[36px] font-bold text-center tracking-wider max-lg:text-2xl"
            v-html="sub_title"
          />
          <p
            v-if="description"
            v-html="description"
            class="text-base text-center font-light mt-[35px] max-lg:text-[13px] max-lg:text-left max-lg:mt-3"
          />
        </div>
        <span
          class="block w-[60px] aspect-square bg-gradient-to-tr from-[#C6CEFF] to-[#F7B6CA] opacity-50 absolute z-20 -top-5 -right-5 max-lg:hidden"
        />
        <span
          class="block w-[93px] aspect-square bg-gradient-to-tr from-[#C6CEFF] to-[#F7B6CA] opacity-50 absolute z-20 -bottom-9 -left-9 max-lg:w-[50px] max-lg:-bottom-[25px] max-lg:-left-[15px]"
        />
        <span
          class="block w-[50px] h-[50px] bg-[#9999EE] opacity-30 rounded-full shadow-[0_0_50px_50px_#9999EE] absolute top-[180px] -left-9"
        />
        <span
          class="block w-[90px] aspect-square bg-[#FF99BB] opacity-30 rounded-full shadow-[0_0_90px_90px_#FF99BB] absolute -bottom-10 -right-10"
        />
        <img
          src="/images/voice-top-flower.webp"
          alt="flower"
          width="174"
          height="149"
          loading="lazy"
          decoding="async"
          class="w-[174px] h-auto absolute top-[61px] left-[-99px] max-lg:w-[120px] max-lg:top-[13px] max-lg:left-[-54px]"
        />
        <img
          src="/images/voice-top-flower.webp"
          alt="flower"
          width="232"
          height="198"
          loading="lazy"
          decoding="async"
          class="w-[232px] h-auto rotate-[-214deg] absolute bottom-[-88px] right-[-116px] max-lg:w-[156px] max-lg:right-[-60px] max-lg:bottom-[-54px]"
        />
      </div>
    </div>
  </section>
</template>
