<template>
  <div class="pt-7 pb-[60px]">
    <div class="w-[335px] mx-auto bg-white rounded-[20px] shadow-[0_5px_20px_#00000040] relative">
      <div class="flex justify-between items-start px-5 pt-5">
        <h4
          class="w-[140px] h-[143px] bg-[url('/images/audition-support-top-title.svg')] bg-contain bg-no-repeat bg-center text-white font-bold pt-1.5 text-center drop-shadow-xl px-2.5 ml-[-30px] -mt-10">
          Inspiart<br>
          オーディションにレコード会社・芸能事務所が集まりす
        </h4>
        <p class="text-xs w-[170px]">
          少なくなったとはいえ、オーディションに合格してレコード会社に所属する道もあります。Inspiartでは定期的にレコードキャラバンを行なっており、多くの業界関係者が来場します。</p>
      </div>
      <div class="mt-[50px] relative w-full">
        <img src="/images/audition-support-image.webp" alt="audition" width="335" height="257"
          class="w-full h-auto mx-auto" />
        <h6
          class="text-xs text-white py-1.5 pl-7 pr-9 absolute top-5 -left-2.5 font-bold w-max rounded-[5px] bg-[#FB88B1] clip-left">
          レコードキャラバンは</h6>
        <h6
          class="text-xs text-white py-1.5 pl-7 pr-9 absolute bottom-5 -right-2.5 font-bold w-max rounded-[5px] bg-[#FB88B1] clip-right">
          音楽関係者に見てもらう大チャンス！</h6>
      </div>
      <p class="p-5 text-xs">
        レコードキャラバンは、メジャーデビューを目標とする方を対象とした音楽業界へのプレゼンライブです。<br>
        大手レコード会社と音楽プロダクションから40社以上の方々がスカウトに来場するので大きなチャンスとなります。
      </p>
      <div class="w-[315px] mx-auto mt-2 pb-[15px] rounded-[10px] bg-white border border-[#EEEEEE] overflow-hidden">
        <h5 class="w-full bg-[#EEEEEE] py-1.5 text-center text-xs font-bold">ご来場企業</h5>
        <h6 class="text-[11px] text-center text-[#FB88B1] font-bold py-3.5">
          これまでにご来場いただいた、<br>
          レコード会社・音楽事務所・プロダクション
        </h6>
        <ul class="px-2.5">
          <li v-for="text, i of texts" :key="i" class="text-[10px]">{{ text }}</li>
        </ul>
      </div>
      <div class="pt-9">
        <h4
          class="w-[201px] h-[104px] bg-[url('/images/audition-sns-operation.svg')] bg-contain bg-no-repeat bg-center text-white font-bold pt-[18px] text-center drop-shadow-xl ml-auto mr-[-10px] -mb-5">
          定期オーディションで<br>チャンスもいっぱい！
        </h4>
        <div>
          <img src="/images/audition-sns-operation-1.webp" alt="sns-operation" width="335" height="450"
            class="w-full h-auto" />
        </div>
        <div class="relative">
          <img src="/images/audition-sns-operation-2.webp" alt="sns-operation" width="335" height="398"
            class="w-full h-auto" />
          <div class="absolute w-full h-full top-0 left-0 z-10 pt-[42px] text-center text-white">
            <p class="text-[11px] font-bold">本気のあなただから、正直にお伝えします。</p>
            <h6 class="w-full bg-black py-3 font-bold text-base leading-5 mt-2.5">一発合格はほぼ不可能です。</h6>
            <p class="text-xs leading-[26px] pt-7 w-full">
              オーディションに来る人たちは全員本気。<br>
              少なからず運の味方も必要になる、<br>
              厳しい世界です。<br>
              <br>
              わかっていても、<br>
              落ちると悲しくなってしまうもの。<br>
              <br>
              そしてチャレンジすることが<br>
              怖くなってしまうのです。
            </p>
          </div>
        </div>
        <div class="relative overflow-hidden">
          <img src="/images/audition-sns-operation-3.webp" alt="sns-operation" width="335" height="240"
            class="w-full h-auto relative z-[1]" />
          <img src="/images/audition-sns-operation-4.webp" alt="sns-operation" width="337" height="314"
            class="w-full h-auto -mt-14" />
          <div class="min-w-[375px] absolute left-1/2 top-1/2 -translate-x-1/2 bg-[#FFFFFFC0] py-2 -rotate-[9deg] -translate-y-2/3 z-10">
            <img src="/images/header-logo.svg" alt="sns-operation" width="174" height="38"
              class="w-[174px] h-auto mx-auto" />
          </div>
          <h5 class="absolute bottom-9 left-0 bg-gradient-to-r from-[#77BBDD] to-[#6688DD] text-white text-xl font-bold py-2.5 px-4">デイリーチャットコーチング</h5>
          <h6 class="text-xs font-bold px-3 py-2.5 absolute right-0 bottom-0 text-white bg-black">所属アーティスト・レッスン生を毎日徹底サポート</h6>
          <img src="/images/chat-icon.svg" alt="chat" width="48" height="39" class="w-12 h-auto absolute left-0 bottom-[72px]" />
        </div>
        <div class="pt-5">
          <div class="flex justify-center items-start gap-[13px]">
            <div v-for="item, i of [
              {
                title: '毎日',
                text: 'オーディション前後に限らず、普段から何気ないやり取りを重ねて、僅かなメンテるの変化もキャッチ。',
                title_bg: '#6688DD80'
              },
              {
                title: 'チャットで',
                text: '一人だと経験が難しい体系管理も、マネージャーが二人三脚で目標達成まで徹底的にサポートします。',
                title_bg: '#6688DDC0'
              },
              {
                title: 'コーチング',
                text: '敏感な年頃だからこそ、家族や友達にも言えない悩みがあります。そんな時はマネージャーが相談相手に。',
                title_bg: '#6688DD'
              }
            ]" class="w-[95px]">
              <p class="w-full text-sm font-bold text-white text-center py-2 rounded-full" :style="{ backgroundColor: item.title_bg }">{{ item.title }}</p>
              <p class="text-xs w-full mt-[15px]">{{ item.text }}</p>
            </div>
          </div>
          <div class="mt-14 pb-[2px]">
            <p class="text-[22px] font-bold ml-[17px]"><span class="text-[#6688DD]">継続</span>すると</p>
            <p class="text-[22px] font-bold ml-[77px]">未来が<span class="text-[#6688DD]">変わる</span></p>
            <img src="/images/audition-sns-operation-5.webp" alt="chat" width="331" height="210" class="w-[331px] h-auto mx-auto" />
            <img src="/images/audition-sns-operation-5-mobile.webp" alt="chat" width="147" height="258" class="w-[147px] h-auto absolute bottom-2 right-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <OrganNarauno
    :main-article="PopularArticle.mainArticle"
    :sub-article1="PopularArticle.subArticle1"
    :sub-article2="PopularArticle.subArticle2"
    :articles="NaraunoArticle"
    :players="NaraunoPlayer"
  />
</template>

<script lang="ts" setup>
const texts = [
  "・SONYミュージックエンタテインメント",
  "・エイベックスプランニング＆デベロップメント",
  "・EMIミュージックジャパン",
  "・ビクターエンタテインメント",
  "・財団法人ヤマハ音楽振興会",
  "・ポニーキャニオン",
  "・SONYミュージックアーティスツ",
  "・ニューカム",
  "・スマイルカンパニー",
  "・ヤマハミュージックエンタテインメントホールディングス",
  "・スターダストプロモーション",
  "・研音",
  "・アミューズ",
  "・ヴィジョン・ファクトリー",
  "・マザーランド",
  "・ジャコベッティ（よしもと）",
  "・パシフィックボイス",
  "・NASAエンターテインメント",
  "・ウィード",
  "・オズ・スタジオ＆ショウビズ",
  "・カナロアリーフ プロダクツ",
  "・クオント",
  "・シエリート・ミュージック",
  "・スピーデックス",
  "・デジタルラボラトリー（MW RECORDS）",
  "・ドリーミュージック",
  "・Funk Love",
  "・リバーサイドミュージック",
  "・夢planning",
  "・ティー・エム・ラボ",
  "・トライリュクス",
  "・アップライズ",
  "(順不同、称略）",
];

const PopularArticle = ref();
PopularArticle.value = await(await fetch('/data/na-ra-uno-popular-article.json')).json();
const NaraunoArticle = ref();
NaraunoArticle.value = await(await fetch('/data/na-ra-uno-article.json')).json();
const NaraunoPlayer = ref();
NaraunoPlayer.value = await(await fetch('/data/na-ra-uno-player.json')).json();

</script>

<style scoped>
.clip-left {
  clip-path: polygon(0 0, 102% 0, calc(100% - 10px) 100%, 0 100%);
}

.clip-right {
  clip-path: polygon(10px 0, 100% 0, 100% 100%, -1% 100%);
}
</style>
