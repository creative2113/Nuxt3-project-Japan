<script lang="ts" setup>
const props = defineProps<{
  contest: {
    title: string;
    from: string;
    to: string;
    prizes: {
        ranking: number;
        title: string;
        image: string;
      }[];
    socials: {
      title: string;
      icon: string;
      line_icon: string;
      tiems: number;
    }[];
    rules: string[];
  };
}>();
const crt_social = ref(0);
const from : string = new Date(props.contest.from).getMonth() + 1 + "." + new Date(props.contest.from).getDate() + " " + getDayName(new Date(props.contest.from));
const to : string = new Date(props.contest.to).getMonth() + 1 + "." + new Date(props.contest.to).getDate() + " " + getDayName(new Date(props.contest.to));
</script>

<template>
  <div class="w-full mt-10 border-4 bg-white border-[#E39597] rounded-[7px] max-lg:mt-2.5">
    <h4
      class="text-center text-lg bg-[#E39597] py-2 text-white flex justify-center items-end gap-[22px] leading-5 max-lg:leading-6 max-lg:gap-4 before:block before:w-[1px] before:h-[23px] before:bg-[#FFFFFF] before:origin-bottom before:rotate-[-30deg] after:block after:w-[1px] after:h-[23px] after:bg-[#FFFFFF] after:origin-bottom after:rotate-[30deg]">
      現在、開催中！</h4>
    <div class="w-full lg:w-[700px] lg:mx-auto pt-9 max-lg:px-[13.5px]">
      <div class="w-full flex justify-between items-center">
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
        <h4 class="text-2xl text-center text-[#D87E80] futura-pt">THEME</h4>
        <hr class="lg:w-[300px] border-t-[5px] border-t-[#E39597] max-lg:w-[95px]">
      </div>
      <h5 class="text-[28px] text-center mt-2 mb-2">{{ contest.title }}</h5>
      <hr class="w-full border-t-[5px] border-t-[#E39597] mt-5">
      <p class="text-lg text-center tracking-[0.25em] futura-pt mt-4">{{ from }} >>> {{ to }}</p>
      <ContestButton link="/contest/" class="mt-5">コンテストに応募する</ContestButton>
      <img src="/images/ranking-divider.svg" width="700" height="20" alt="present" loading="lazy"
        class="w-full h-auto mt-10 max-lg:hidden" />
      <div class="pt-[26px] text-center">
        <h3 class="text-[32px] text-[#D87E80] futura-pt">PRESENT</h3>
        <h4 class="text-base">プレゼント</h4>
        <div class="mt-8 relative w-[300px] mx-auto">
          <h6 class="text-[50px] text-[#E39597] gallatone -rotate-[5deg]">{{ contest.prizes[0]?.title }}</h6>
          <p class="text-[100px] futura-pt -my-16 relative text-[#D87E80]">{{ contest.prizes[0]?.ranking }}</p>
          <img :src="contest.prizes[0]?.image" width="300" height="300" alt="contest first" loading="lazy"
            class="w-full h-auto" />
          <img src="/images/two-flowers-pink.svg" width="73" height="63" alt="flowers" loading="lazy"
            class="absolute top-32 -right-1.5" />
          <img src="/images/obj-color.svg" width="60" height="59" alt="flower" loading="lazy"
            class="absolute bottom-5 left-5 rotate-[145deg]" />
          <div
            class="flex flex-col items-center justify-center absolute -bottom-5 -right-14 w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-no-repeat bg-contain bg-center text-white max-lg:-right-1.5">
            <p class="text-xs">グランプリの方に</p>
            <hr class="w-[111px] border-t my-1.5">
            <p>細尾の訪問着</p>
            <hr class="w-[111px] border-t my-1.5">
            <p class="text-xs">プレゼント！</p>
          </div>
        </div>
        <div class="lg:flex gap-[60px] justify-center items-center mt-10">
          <div class="relative w-[260px]">
            <h6 class="text-[40px] text-[#E39597] gallatone -rotate-[5deg]">{{ contest.prizes[1]?.title }}</h6>
            <p class="text-[70px] text-[#D87E80] futura-pt -mt-10 -mb-14 relative">{{ contest.prizes[1]?.ranking }}</p>
            <img :src="contest.prizes[1]?.image" width="260" height="260" alt="contest second" loading="lazy" />
            <div
              class="flex flex-col items-center justify-center absolute lg:-bottom-5 lg:-left-[50px] w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-no-repeat bg-contain bg-center text-white max-lg:-bottom-[30px] max-lg:-right-[30px]">
              <p class="text-xs">準グランプリの方に</p>
              <hr class="w-[111px] border-t my-1.5">
              <p>小物一式セット</p>
              <hr class="w-[111px] border-t my-1.5">
              <p class="text-xs">プレゼント！</p>
            </div>
          </div>
          <div class="relative w-[260px] max-lg:mt-10 max-lg:ml-auto">
            <h6 class="text-[40px] text-[#E39597] gallatone -rotate-[5deg]">{{ contest.prizes[2]?.title }}</h6>
            <p class="text-[70px] text-[#D87E80] futura-pt -mt-10 -mb-14 relative">{{ contest.prizes[2]?.ranking }}</p>
            <img :src="contest.prizes[2]?.image" width="260" height="260" alt="contest third" loading="lazy" />
            <div
              class="flex flex-col items-center justify-center absolute lg:-bottom-5 lg:-right-[50px] w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-no-repeat bg-contain bg-center text-white max-lg:-bottom-[30px] max-lg:-left-[30px]">
              <p class="text-xs">3位入賞の方に</p>
              <hr class="w-[111px] border-t my-1.5">
              <p>着物一着</p>
              <hr class="w-[111px] border-t my-1.5">
              <p class="text-xs">プレゼント！</p>
            </div>
          </div>
        </div>
        <div class="relative mt-5 max-lg:mt-[50px] w-[220px] mx-auto">
          <h6 class="text-[40px] text-[#E39597] gallatone -rotate-[5deg]">{{ contest.prizes[3]?.title }}</h6>
          <img :src="contest.prizes[3]?.image" width="220" height="220" alt="contest all" loading="lazy"
            class="-mr-[34px] max-lg:mr-0" />
          <div
            class="flex flex-col items-center justify-center w-[150px] h-[148px] bg-[url('/images/flower-bg-1.svg')] bg-no-repeat bg-contain bg-center text-white absolute -right-[50px] -bottom-5 max-lg:-right-10 max-lg:-bottom-[60px]">
            <p class="text-xs">参加者全員に</p>
            <hr class="w-[111px] border-t my-1.5">
            <p>？？？？？</p>
            <hr class="w-[111px] border-t my-1.5">
            <p class="text-xs">プレゼント！</p>
          </div>
        </div>
        <ContestButton link="/contest/on" class="mt-[60px] max-lg:mt-[100px]">コンテストに応募する</ContestButton>
        <img src="/images/ranking-divider.svg" width="700" height="20" alt="present" loading="lazy"
          class="w-full h-auto mt-10 max-lg:hidden" />
        <div class="pt-[26px] text-center pb-10">
          <h3 class="text-[32px] text-[#D87E80] futura-pt">PRESENT</h3>
          <h4 class="text-base">プレゼント</h4>
          <div class="mt-7 relative w-full border border-[#DDDDDD]">
            <h6 class="w-full bg-[#F0F0F0] border-b border-b-[#DDDDDD] py-2 text-sm">開催期間</h6>
            <p class="w-full py-5 text-[13px]">{{ getFullTimeJP(new Date(contest.from)) }}〜{{ getFullTimeJP(new
              Date(contest.to)) }}</p>
          </div>
          <div class="mt-[30px] relative w-full border border-[#DDDDDD]">
            <h6 class="w-full bg-[#F0F0F0] border-b border-b-[#DDDDDD] py-2 text-sm">応募方法</h6>
            <div class="w-full pt-[17px] pb-[30px]">
              <p class="text-[13px]">応募方法はSNSにより異なります</p>
              <p
                class="w-[415px] max-lg:w-[234px] mx-auto text-center bg-[#EEB0B0] rounded-[7px] text-[13px] text-white py-[10px] mt-5 max-lg:text-xs">
                ご希望のSNSをご選択ください</p>
              <div class="flex justify-center items-start gap-[21px] mt-[18px] max-lg:gap-[10px]">
                <div v-for="social, i in contest.socials" :key="i" @click="crt_social = i"
                  class="flex flex-col items-center gap-2 group after:border-t-[16px] after:border-transparent after:border-x-[14px]"
                  :class="i === crt_social ? 'after:border-t-[#EEB0B0]' : ''">
                  <img :src="i === crt_social ? social.icon : social.line_icon" width="66" height="66"
                    :alt="social.title" loading="lazy" class="w-[66px] h-auto max-lg:w-[46px]" />
                  <span class="text-[9px] text-[#AAAAAA] group-hover:text-black">{{ social.title }}</span>
                </div>
              </div>
              <div
                class="mt-5 after:block after:mx-auto after:mt-5 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-[#E39597] after:origin-center after:rotate-45">
                <h6 class="text-lg text-[#D87E80] futura-pt tracking-[0.2em]">STEP 1</h6>
                <p class="text-[13px] mt-[7px]">ON-girl公式アカウントをフォロー</p>
                <button
                  class="block text-xs border border-[#99999955] rounded-full w-[200px] mx-auto py-2 mt-5">@ongirl</button>
              </div>
              <div
                class="mt-5 after:block after:mx-auto after:mt-5 after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-[#E39597] after:origin-center after:rotate-45">
                <h6 class="text-lg text-[#D87E80] futura-pt tracking-[0.2em]">STEP 2</h6>
                <p class="text-[13px] mt-[7px]">以下のハッシュタグをつけて<br class="lg:hidden">テーマに沿った写真を投稿</p>
                <button
                  class="block text-xs border border-[#99999955] rounded-full w-[200px] mx-auto py-2 mt-5">＃ongirlcontest</button>
                <button
                  class="block text-xs border border-[#99999955] rounded-full w-[200px] mx-auto py-2 mt-2.5">＃夏の着物でお出かけ</button>
              </div>
              <div class="mt-5">
                <h6 class="text-lg text-[#D87E80] futura-pt tracking-[0.2em]">STEP 3</h6>
                <p class="text-[13px] mt-[7px]">投稿したURLを<br class="lg:hidden">事務局まで連絡</p>
                <button
                  class="block text-xs border border-[#99999955] rounded-full w-[200px] relative mx-auto py-2 mt-5 after:block after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-[#E39597] after:origin-center after:rotate-45 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-4">お知らせフォーム</button>
              </div>
            </div>
          </div>
          <div class="mt-[30px] relative w-full border border-[#DDDDDD]">
            <h6 class="w-full bg-[#F0F0F0] border-b border-b-[#DDDDDD] py-2 text-sm">審査方法</h6>
            <div class="w-full pt-[17px] pb-8">
              <h6 class="text-[13px]">以下のSNSでの「いいね数」を<br class="lg:hidden">ポイントに変換して合算します。<br><br class="lg:hidden">
                合計の「ポイント数」が多い方から、<br class="lg:hidden">順番に当選とさせていただきます。</h6>
              <p class="mt-[17px] text-[11px]">「いいね」の獲得難易度が各SNSごとに異なるため、<br class="lg:hidden">以下の係数を掛けてカウントさせていただきます。
              </p>
              <div class="flex justify-center gap-[21px] mt-[18px] flex-wrap">
                <div v-for="social, i in contest.socials" :key="i" class="flex flex-col items-center">
                  <img :src="social.icon" width="66" height="66" alt="twitter" loading="lazy" />
                  <p class="text-[9px] text-black mt-2">{{ social.title }}</p>
                  <img :src="'/images/contest-close.svg'" width="12" height="12" alt="close"
                    class="w-[12px] h-[12px] mt-2" />
                  <p class="text-sm">
                    <b class="text-xl roboto">{{ social.tiems }}</b>倍
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[30px] relative w-full border border-[#DDDDDD]">
            <h6 class="w-full bg-[#F0F0F0] border-b border-b-[#DDDDDD] py-2 text-sm">審査方法</h6>
            <div class="w-full pt-[17px] pb-8 px-5 text-left text-xs h-60 overflow-y-auto">
              <div v-for="rule, i in contest.rules" :key="i" class="flex gap-[5px] mt-4">
                <img :src="'/images/icon-check.svg'" width="15" height="10" alt="close" class="w-[15px] h-[10px] mt-0.5" />
                <p v-html="rule" />
              </div>
            </div>
          </div>
          <ContestButton link="/contest/on" class="mt-10">コンテストに応募する</ContestButton>
        </div>
      </div>
    </div>
  </div>
</template>