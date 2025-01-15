<template>
  <div class="pt-7 pb-[50px] px-5">
    <div class="bg-white rounded-[20px] shadow-xl">
      <MoleOfferStage :stage="{
        id: 1,
        title: 'InspiartZのコミュニティーなら<br>先生や周りからも応援が続々と',
        title_bg: '/images/vocal-possibility-title.svg',
        title_w: 309,
        title_h: 102,
        contents: [
          {
            banner: '/images/vocal-possibility-1.webp',
            title: '素人状態から頑張ってチャレンジする姿…<br>そんなあなたをファンは応援したいのです！',
          },
        ],
      }" />
      <OrganUntilNow class="mt-[30px]" />
      <OrganCurriculumEnjoy />
    </div>
  </div>
</template>
