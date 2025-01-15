<template>
  <section class="w-full pt-[60px] pb-[100px] max-lg:px-5">
    <div class="max-w-[800px] w-full mx-auto">
      <div>
        <ItemsMainTitle color="#F7D6D1">
          <div class="pt-[14px] pb-[37px] text-center">
            <h2 class="text-[60px] text-[#D87E80] futura-pt max-lg:text-[45px]">RESULTS</h2>
            <h3 class="text-lg">今まで開催されたコンテスト</h3>
          </div>
        </ItemsMainTitle>
      </div>
      <ItemsContestResults :num="6" />
      <ContestButton link="/contest/results" class="mt-10">
        もっと見る
      </ContestButton>
      <ContestButton link="/contest" direction="left" class="mt-[30px]">コンテストTOPへ</ContestButton>
    </div>
  </section>
</template>