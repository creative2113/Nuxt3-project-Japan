<template>
  <section class="max-lg:px-5">
    <div>
      <h2
        class="text-[36px] font-bold text-center tracking-widest max-lg:text-2xl"
      >
        代官山駅徒歩３分という好立地
      </h2>
      <p
        class="text-center mt-[35px] mb-[45px] text-base leading-[30px] max-lg:text-[13px] max-lg:text-left max-lg:mt-3 max-lg:mb-[26px]"
      >
        アクセス抜群の立地で、仕事帰りでも気軽にお越しいただけます。<br
          class="max-lg:hidden"
        />さらに、近くにはおしゃれなカフェやアパレルショップ、代官山蔦屋もありますので、<br
          class="max-lg:hidden"
        />休日はレッスン前に代官山を散策して、充実した1日を過ごせます。
      </p>
    </div>
    <div class="w-full max-w-[1000px] mx-auto shadow-lg">
      <ContentStudioLocationView :pictures="pictures" />
      <div class="pt-4 pb-[30px] relative max-lg:pb-0">
        <h3 class="text-xl text-center font-semibold">代官山スタジオ</h3>
        <hr class="w-[30px] h-[1px] bg-[#888888] border-none mx-auto mt-4" />
        <p class="text-[13px] text-center font-light mt-4">
          東京随一のおしゃれな街、<br />代官山に完成した最新音楽スタジオ。<br /><br />来るたびに心が躍り、<br />楽しさと安らぎを与える洗練された空間で、<br />思う存分レッスンをお楽しみください。
        </p>
        <div class="max-lg:flex justify-between">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-woman-left-sp.webp"
              type="image/webp"
            />
            <img
              src="/images/studio-detail-woman-left.webp"
              width="99"
              height="268"
              loading="lazy"
              decoding="async"
              class="w-[99px] h-auto lg:absolute top-[38px] left-20 z-10 max-lg:w-[104px] max-lg:relative max-lg:top-0 max-lg:left-0"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-show-title-pink-sp.svg"
              type="image/svg+xml"
            >
            <img
              src="/images/studio-detail-show-title-pink.svg"
              width="238"
              height="161"
              loading="lazy"
              decoding="async"
              class="w-[238px] h-auto absolute top-[-10px] left-[103px] drop-shadow-lg max-lg:w-[129px] max-lg:top-auto max-lg:bottom-[39px] max-lg:left-[50px]"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-show-title-blue-sp.svg"
              type="image/svg+xml"
            >
            <img
              src="/images/studio-detail-show-title-blue.svg"
              width="203"
              height="156"
              loading="lazy"
              decoding="async"
              class="w-[203px] h-auto absolute top-5 right-[107px] drop-shadow-lg max-lg:w-[129px] max-lg:top-auto max-lg:bottom-[39px] max-lg:right-[48px]"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 1024px)"
              srcset="/images/studio-detail-woman-right-sp.webp"
              type="image/webp"
            />
            <img
              src="/images/studio-detail-woman-right.webp"
              width="169"
              height="262"
              loading="lazy"
              decoding="async"
              class="w-[169px] h-auto lg:absolute top-[26px] right-4 z-10 max-lg:w-[83px] max-lg:relative max-lg:top-0 max-lg:right-0"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="max-w-[1000px] w-full mx-auto mt-[136px] shadow-[0_6px_12px_#00000033] px-5 pb-5 max-lg:px-0 max-lg:mt-[30px] max-lg:pb-0">
      <h3 class="text-[#9999EE] text-2xl font-bold tracking-widest text-center py-9 max-lg:text-xl max-lg:pt-4 max-lg:pb-6">代官山スタジオへの<br class="lg:hidden">アクセス</h3>
      <hr class="lg:hidden w-[30px] h-[1px] bg-[#888888] border-none mx-auto mb-5" />
      <ContentDetailLocationData />
    </div>
    <div class="mt-[115px] w-full max-lg:mt-[60px]">
      <h3 class="text-xl text-center font-semibold tracking-wider max-lg:text-base">こだわり抜いたデザイン</h3>
      <h4 class="text-4xl text-center font-bold tracking-widest mt-1.5 max-lg:text-2xl max-lg:mt-[15px]">上質なひとときを銀座で<br>キラリトギンザ6階、<br class="lg:hidden">洗練された大人の空間</h4>
      <p class="text-center tracking-widest mt-9 max-lg:text-sm max-lg:mt-3">都会の喧騒を離れ、静かで落ち着いた時間を。<br>銀座1丁目のスタジオは、スタイリッシュなインテリアとリッチな雰囲気で、<br>仕事帰りにも最適な癒しの場を提供します。</p>
      <div class="mt-11 max-w-[1000px] w-full mx-auto grid grid-cols-4 gap-y-3.5 gap-x-[15px] max-lg:grid-cols-2 max-lg:mt-3 relative">
        <img src="/images/studio-ginza-photo-1.webp" alt="studio" width="238" height="494" loading="lazy" decoding="async" class="w-[238px] max-lg:w-[160px] max-lg:h-[334px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033] row-span-2">
        <img src="/images/studio-ginza-photo-2.webp" alt="studio" width="240" height="240" loading="lazy" decoding="async" class="w-[240px] max-lg:w-[160px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033]">
        <img src="/images/studio-ginza-photo-3.webp" alt="studio" width="240" height="240" loading="lazy" decoding="async" class="w-[240px] max-lg:w-[160px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033]">
        <img src="/images/studio-ginza-photo-4.webp" alt="studio" width="238" height="494" loading="lazy" decoding="async" class="w-[238px] max-lg:w-[160px] max-lg:h-[334px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033] row-span-2">
        <img src="/images/studio-ginza-photo-5.webp" alt="studio" width="240" height="240" loading="lazy" decoding="async" class="w-[240px] max-lg:w-[160px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033]">
        <img src="/images/studio-ginza-photo-6.webp" alt="studio" width="240" height="240" loading="lazy" decoding="async" class="w-[240px] max-lg:w-[160px] h-auto max-lg:border-[5px] border-white max-lg:shadow-[0_0_6px_#00000033]">
        <div class="absolute left-0 bottom-5 max-lg:-left-5 max-lg:bottom-[374px]">
          <p class="text-sm bg-[#FF99BB] text-semibold text-white max-lg:text-[11px] w-[232px] max-lg:w-[175px] py-1.5 max-lg:py-1 [clip-path:polygon(0_0,100%_0,calc(100%-20px)_100%,0_100%)] text-left pl-3 max-lg:pl-2">エントランスでは思い思いに</p>
          <p class="text-sm bg-[#FF99BB] text-semibold text-white max-lg:text-[11px] w-[179px] max-lg:w-[135px] py-1.5 max-lg:py-1 [clip-path:polygon(0_0,100%_0,calc(100%-20px)_100%,0_100%)] text-left pl-3 max-lg:pl-2 mt-1.5">お寛ぎいただけます。</p>
        </div>
        <div class="absolute right-0 bottom-5 max-lg:-right-5 flex flex-col items-end">
          <p class="text-sm bg-[#AAAAFF] text-semibold text-white max-lg:text-[11px] w-[283px] max-lg:w-[213px] py-1.5 max-lg:py-1 [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%)] text-right pr-3 max-lg:pr-2">内装や照明にもとことんこだわりが。</p>
          <p class="text-sm bg-[#AAAAFF] text-semibold text-white max-lg:text-[11px] w-[175px] max-lg:w-[132px] py-1.5 max-lg:py-1 [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%)] text-right pr-3 max-lg:pr-2 mt-1.5">気持ち良い空間です。</p>
        </div>
      </div>
    </div>
    <div class="mt-[113px] max-lg:mt-[60px]">
      <ContentStudioDetailSpace />
    </div>
    <div class="mt-[115px] max-lg:mt-[56px]">
      <ContentStudioDetialFloorMap />
    </div>
    <div class="mt-[115px] max-lg:mt-[56px] mb-20 max-lg:mb-10">
      <ContentStudioDetailPack />
    </div>
  </section>
</template>
<script lang="ts" setup>
const pictures = await(await fetch("/data/sdudiopictures.json")).json();
</script>
