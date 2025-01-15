<template>
  <section class="pt-24">
    <div>
      <ItemsSubTitle>オールフリー？固定制？</ItemsSubTitle>
      <div class="pt-3.5 pb-[46px]">
        <ItemsContentTitle>
          <h3 class="text-2xl text-center whitespace-nowrap leading-10">
            通い方は<br />2種類から選べます！
          </h3>
        </ItemsContentTitle>
      </div>
      <div class="max-w-[800px] mx-auto flex justify-between pb-[120px] max-lg:block max-lg:px-5">
        <div class="relative w-[300px] h-[295px] max-lg:flex max-lg:w-full">
          <img
            src="/images/price-method-pan.svg"
            alt="price pan"
            width="300"
            height="295"
            class="w-full h-auto max-lg:-mx-[73px]"
          />
          <div class="w-[156px] absolute max-lg:relative max-lg:bottom-0 max-lg:left-0 -bottom-32 -right-[50px]">
            <p class="text-[42px] text-[#D87E80] futura-pt">01</p>
            <h5 class="text-lg mt-3">オールフリー制</h5>
            <hr
              class="w-full border-t border-dotted border-t[#999999] mt-[18px] mb-6"
            />
            <p class="text-[13px]">
              スタジオ、講師、日程、ジャンルが全て自由自在に選べる！
            </p>
          </div>
        </div>
        <div class="relative w-[300px] h-[295px] max-lg:flex max-lg:w-full max-lg:mt-9">
          <img
            src="/images/price-method-calender.svg"
            alt="calender"
            width="300"
            height="295"
            class="w-full h-auto max-lg:-mx-[73px] order-1"
          />
          <div class="w-[156px] absolute max-lg:relative max-lg:bottom-0 max-lg:left-0 -bottom-32 -left-[50px]">
            <p class="text-[42px] text-right text-[#7E9DD8] futura-pt max-lg:text-left">02</p>
            <h5 class="text-lg mt-3">固定制+無料補講</h5>
            <hr
              class="border-t w-full border-dotted border-t[#999999] mt-[18px] mb-6"
            />
            <p class="text-[13px]">
              月2回の固定レッスン。<br />
              無料で別日に補講することも可能！
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-[1000px] mx-auto mt-14 max-lg:px-5">
        <div
          class="flex items-center justify-between max-lg:flex-col max-lg:py-10 border border-[#999999] py-5 px-[30px] relative"
        >
          <p
            class="absolute flex items-center justify-center gap-[10px] px-1 bg-[#F1F1F1] -top-2 left-[109px] text-[#D87E80] futura-pt text-xs"
          >
            POINT<span class="text-[22px]">01</span>
          </p>
          <img
            src="/images/price-point-1.webp"
            alt="point 1"
            width="192"
            height="192"
            class="w-[192px] h-[192px] max-lg:mt-5 max-lg:mb-8"
          />
          <h5 class="text-center text-xl max-lg:-order-1">
            初心者のかたは安心の<br />固定制がおすすめ
          </h5>
          <hr class="h-[230px] w-0 border-l broder-l-[#999999] max-lg:hidden" />
          <p class="text-center text-[13px] w-[360px] max-lg:w-full">
            日本最大の400クラス！<br />
            月曜〜日曜、朝10時〜夜9時スタートの<br />
            レッスンまで♪<br />
            都合が悪い時も無料で振替！
          </p>
        </div>
        <div
          class="flex items-center justify-between max-lg:flex-col max-lg:py-10 border border-[#999999] py-5 px-[30px] relative mt-14"
        >
          <p
            class="absolute flex items-center justify-center gap-[10px] px-1 bg-[#F1F1F1] -top-2 left-[109px] text-[#D87E80] futura-pt text-xs"
          >
            POINT<span class="text-[22px]">01</span>
          </p>
          <img
            src="/images/price-point-2.webp"
            alt="point 1"
            width="192"
            height="192"
            class="w-[192px] h-[192px] max-lg:mt-5 max-lg:mb-8"
          />
          <h5 class="text-center text-xl max-lg:-order-1">
            初心者のかたは安心の<br />固定制がおすすめ
          </h5>
          <hr class="h-[230px] w-0 border-l broder-l-[#999999] max-lg:hidden" />
          <div class="w-[360px] max-lg:w-full">
            <h6 class="text-base text-center">
              置いてけぼり“ゼロ”！<br />安心のクラス制
            </h6>
            <p class="text-[13px] mt-4">
              チケット制のスクールでは「人気の時間帯に人が多い」、「いつ行ってもいいので行かなくなりチケットをムダにする」ことも…。当スクールではクラスの人数に制限があるため1人ひとりの生徒さんにきめ細やかなレッスンを提供しています。クラス制で毎回同じ先生に教わることができるので、あなたに合ったアドバイスはもちろん、クラスのみんなとも仲良くなれますよ。
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-[1000px] w-full mx-auto mt-[167px] border border-[#EEEEEE] max-lg:px-5 relative">
        <div
          class="flex w-full justify-center relative bg-[#F9F9F9] border border-[#EEEEEE] after:block after:w-full after:h-3/4 after:absolute after:z-10 after:bg-gradient-to-t after:from-[#F1F1F1] after:to-[#F1F1F105] after:bottom-0 after:left-1/2 after:-translate-x-1/2"
          :class="methodsOpen && 'after:hidden'"
        >
          <div class="max-lg:hidden">
            <img
              src="/images/price-bottom-blue.webp"
              alt="price"
              width="298"
              height="174"
              class="w-[298px] h-[174px] -mt-32 -mb-8"
            />
            <div class="flex items-center justify-center">
              <div class="text-center">
                <h6
                  class="text-base text-[#7E9DD8] before:block before:bg-[#888888] before:w-[1px] before:h-10 flex justify-center gap-5 after:block after:bg-[#888888] after:w-[1px] after:h-10 before:origin-bottom before:rotate-[-20deg] after:origin-bottom after:rotate-[20deg]"
                >
                  自由度<br />マックス！
                </h6>
                <p class="text-xl mt-4">
                  仕事や学業で<br />
                  スケジュールが<br />
                  流動的な方に。
                </p>
              </div>
              <img
                src="/images/price-bottom-photo-1.webp"
                alt="point 1"
                width="299"
                height="373"
                class="w-[299px] h-[373px]"
              />
            </div>
          </div>
          <div class="max-lg:hidden">
            <img
              src="/images/price-bottom-pink.webp"
              alt="point 1"
              width="298"
              height="174"
              class="w-[298px] h-[174px] -mt-32 -mb-8"
            />
            <div class="flex items-center justify-center">
              <div class="order-1 text-center">
                <h6
                  class="text-base text-[#D87E80] before:block before:bg-[#888888] before:w-[1px] before:h-10 flex justify-center gap-5 after:block after:bg-[#888888] after:w-[1px] after:h-10 before:origin-bottom before:rotate-[-20deg] after:origin-bottom after:rotate-[20deg]"
                >
                  固定制でも<br />フレキシブル！
                </h6>
                <p class="text-xl mt-4">
                  月2回の固定<br />
                  スケジュールと<br />
                  無料補講サービス
                </p>
              </div>
              <img
                src="/images/price-bottom-photo-2.webp"
                alt="point 1"
                width="281"
                height="373"
                class="w-[281px] h-[373px]"
              />
            </div>
          </div>
          <img
            src="/images/price-sp.webp"
            alt="point 1"
            width="335"
            height="205"
            class="w-full h-auto lg:hidden"
          />
        </div>
        <div class="relative z-10" v-if="!methodsOpen">
          <div class="w-[315px] mx-auto -mt-8 bg-white relative lg:hidden after:block after:w-full after:h-3/4 after:absolute after:z-10 after:bg-gradient-to-t after:from-[#F1F1F1] after:to-[#F1F1F105] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            <div class="lg:hidden text-center pt-5 pb-8">
              <h6 class="text-xs">４つの要素を自由に選べる</h6>
              <h4 class="text-xl text-[#7E9DD8]">オールフリー制</h4>
            </div>
          </div>
          <button aria-label="もっと見る"
            class="block mx-auto text-[14px] relative border border-[#999999] pt-6 pb-5 px-[100px] rounded-full bg-white after:content-['+'] after:font-bold after:roboto after:text-[#E39597] after:text-[20px] after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
            @click="methodsOpen = !methodsOpen"
          >
            もっと見る
          </button>
        </div>
        <div v-if="methodsOpen">
          <div class="flex max-lg:flex-col">
            <div
              class="w-[500px] px-[35px] py-[41px] bg-[#A4B5DD55] max-lg:w-full max-lg:px-2.5 max-lg:py-0"
            >
              <div class="w-full bg-white relative shadow-lg max-lg:bottom-8">
                <div class="lg:hidden text-center pt-5">
                  <h6 class="text-xs">４つの要素を自由に選べる</h6>
                  <h4 class="text-xl text-[#7E9DD8]">オールフリー制</h4>
                  <p class="text-sm mt-3">出張の多い方や、<br>
                    バリバリ働くOLさん等、<br>
                    スケジュールが流動的な方に。</p>
                </div>
                <div class="w-full flex justify-between items-center pr-12 max-lg:flex-col max-lg:items-start">
                  <img
                    src="/images/price-all-free-system-title.webp"
                    width="259"
                    height="166"
                    alt="method"
                    loading="lazy"
                    class="relative top-4 max-lg:w-[230px] max-lg:h-[128px]"
                  />
                  <h5 class="text-base text-[#7E9DD8] text-center mt-12 max-lg:mt-0">
                    日程もスタジオも<br />
                    自由自在！
                  </h5>
                </div>
                <img
                  src="/images/price-bottom-photo-sp.webp"
                  width="167"
                  height="212"
                  alt="method"
                  loading="lazy"
                  class="absolute top-24 right-0 lg:hidden"
                />
                <div class="w-full flex justify-between -mt-8 max-lg:mt-0">
                  <img
                    src="/images/price-all-free-system-img.webp"
                    width="260"
                    height="420"
                    alt="method"
                    loading="lazy"
                    class="relative -mx-8 max-lg:hidden"
                  />
                  <img
                    src="/images/price-all-free-steps.webp"
                    width="327"
                    height="357"
                    alt="method"
                    loading="lazy"
                    class="w-[327px] h-[357px] -ml-32 relative max-lg:ml-0"
                  />
                </div>
                <div class="px-[30px] max-lg:px-5">
                  <div>
                    <div class="flex gap-2.5">
                      <div class="text-center">
                        <span class="text-[#D0C884] text-lg">FREE!</span>
                        <span
                          class="block w-[50px] h-[50px] bg-[#D0C884] rounded-full text-white text-[30px] leading-[50px]"
                          >1</span
                        >
                      </div>
                      <div
                        class="w-[295px] text-center border-b border-b-[#EEEEEE]"
                      >
                        <h5 class="text-[#D0C884] text-xl">日程は毎回選べる</h5>
                        <p class="text-center">その日の予定に合わせて</p>
                      </div>
                    </div>
                    <div class="mt-[18px] pb-12 relative">
                      <p class="text-sm">
                        平日は自宅近く、休日は外出先に合わせてなど、その日の予定に合わせて都合の良いスタジオを都度選ぶことが可能です。
                      </p>
                      <div class="flex justify-between mt-6">
                        <img
                          src="/images/price-wide-nation.webp"
                          width="87"
                          height="106"
                          alt="method"
                          loading="lazy"
                          class=""
                        />
                        <img
                          src="/images/price-wide-nation.webp"
                          width="87"
                          height="106"
                          alt="method"
                          loading="lazy"
                          class=""
                        />
                        <img
                          src="/images/price-wide-nation.webp"
                          width="87"
                          height="106"
                          alt="method"
                          loading="lazy"
                          class=""
                        />
                        <img
                          src="/images/price-wide-nation.webp"
                          width="87"
                          height="106"
                          alt="method"
                          loading="lazy"
                          class=""
                        />
                      </div>
                      <div
                        class="absolute rounded-full bg-white shadow-md w-[82px] h-[82px] text-center right-0 bottom-0"
                      >
                        <span class="text-xs">続々</span>
                        <p class="text-lg text-[#FFA857] leading-6">
                          全国<br />拡大中!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2.5">
                      <div class="text-center">
                        <span class="text-[#A0B6DF] text-lg">FREE!</span>
                        <span
                          class="block w-[50px] h-[50px] bg-[#A0B6DF] rounded-full text-white text-[30px] leading-[50px]"
                          >2</span
                        >
                      </div>
                      <div
                        class="w-[295px] text-center border-b border-b-[#EEEEEE]"
                      >
                        <h5 class="text-[#A0B6DF] text-xl">日程は毎回選べる</h5>
                        <p class="text-center">その日の予定に合わせて</p>
                      </div>
                    </div>
                    <div class="mt-[18px] pb-12 relative">
                      <p class="text-sm">
                        一般の音楽教室では一週間に一度、曜日や時間が固定の場合が多いですが、EYS音楽教室では、その月の予定に合わせて好きな曜日や時間で予約を取ることが可能です。<br />
                        ※人気の曜日、時間は予約が取りにくい場合がございます。ご了承ください
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2.5">
                      <div class="text-center">
                        <span class="text-[#B2CA42] text-lg">FREE!</span>
                        <span
                          class="block w-[50px] h-[50px] bg-[#B2CA42] rounded-full text-white text-[30px] leading-[50px]"
                          >3</span
                        >
                      </div>
                      <div
                        class="w-[295px] text-center border-b border-b-[#EEEEEE]"
                      >
                        <h5 class="text-[#B2CA42] text-xl">日程は毎回選べる</h5>
                        <p class="text-center">その日の予定に合わせて</p>
                      </div>
                    </div>
                    <div class="mt-[18px] pb-12 relative">
                      <p class="text-sm">
                        一般の音楽教室では一週間に一度、曜日や時間が固定の場合が多いですが、EYS音楽教室では、その月の予定に合わせて好きな曜日や時間で予約を取ることが可能です。<br />
                        ※人気の曜日、時間は予約が取りにくい場合がございます。ご了承ください
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2.5">
                      <div class="text-center">
                        <span class="text-[#EEB0B0] text-lg">FREE!</span>
                        <span
                          class="block w-[50px] h-[50px] bg-[#EEB0B0] rounded-full text-white text-[30px] leading-[50px]"
                          >4</span
                        >
                      </div>
                      <div
                        class="w-[295px] text-center border-b border-b-[#EEEEEE]"
                      >
                        <h5 class="text-[#EEB0B0] text-xl">日程は毎回選べる</h5>
                        <p class="text-center">その日の予定に合わせて</p>
                      </div>
                    </div>
                    <div class="mt-[18px] pb-12 relative">
                      <p class="text-sm">
                        一般の音楽教室では一週間に一度、曜日や時間が固定の場合が多いですが、EYS音楽教室では、その月の予定に合わせて好きな曜日や時間で予約を取ることが可能です。<br />
                        ※人気の曜日、時間は予約が取りにくい場合がございます。ご了承ください
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/price-sp-2.webp"
              alt="point 1"
              width="335"
              height="205"
              class="w-full h-auto lg:hidden"
            />
            <div
              class="w-[500px] px-[35px] py-[41px] bg-[#EEB0B055] relative max-lg:w-full max-lg:px-2.5 max-lg:py-0"
            >
              <div class="w-full bg-white pt-5 h-full relative max-lg:bottom-8 pb-5">
                <div class="flex flex-wrap pl-[54px] max-lg:pl-0">
                  <div class="flex flex-col items-center justify-center gap-1 max-lg:hidden">
                    <p
                      class="text-xs text-center before:block before:bg-[#888888] before:w-[1px] before:h-6 flex justify-center gap-1 after:block after:bg-[#888888] after:w-[1px] after:h-6 before:origin-bottom before:rotate-[-40deg] after:origin-bottom after:rotate-[40deg]"
                    >
                      仕事が<br />終わらない
                    </p>
                    <img
                      src="/images/price-free-lessons-item-1.webp"
                      width="141"
                      height="141"
                      alt="method"
                      loading="lazy"
                      class="w-[122px] h-auto"
                    />
                  </div>
                  <img
                    src="/images/price-free-lessons-title.webp"
                    width="259"
                    height="166"
                    alt="method"
                    loading="lazy"
                    class="-ml-6 max-lg:origin-center max-lg:-rotate-[20deg] max-lg:-ml-8"
                  />
                  <div class="flex flex-col items-center justify-center gap-1 max-lg:hidden">
                    <p
                      class="text-xs text-center before:block before:bg-[#888888] before:w-[1px] before:h-6 flex justify-center gap-1 after:block after:bg-[#888888] after:w-[1px] after:h-6 before:origin-bottom before:rotate-[-40deg] after:origin-bottom after:rotate-[40deg]"
                    >
                      仕事が<br />終わらない
                    </p>
                    <img
                      src="/images/price-free-lessons-item-3.webp"
                      width="141"
                      height="141"
                      alt="method"
                      loading="lazy"
                      class="w-[122px] h-auto"
                    />
                  </div>
                  <div
                    class="flex flex-col items-center justify-center gap-1 relative bottom-12 -mx-4 max-lg:hidden"
                  >
                    <p
                      class="text-xs text-center before:block before:bg-[#888888] before:w-[1px] before:h-6 flex justify-center gap-1 after:block after:bg-[#888888] after:w-[1px] after:h-6 before:origin-bottom before:rotate-[-40deg] after:origin-bottom after:rotate-[40deg]"
                    >
                      仕事が<br />終わらない
                    </p>
                    <img
                      src="/images/price-free-lessons-item-2.webp"
                      width="141"
                      height="141"
                      alt="method"
                      loading="lazy"
                      class="w-[144px] h-auto -m-4"
                    />
                  </div>
                </div>
                <p class="text-base text-[#D87E80] text-center w-[270px] mt-6 max-lg:w-[145px]">
                  急な用事で休んでも<br />
                  レッスン費用が<br />
                  無駄になりません！
                </p>
                <img
                  src="/images/price-free-lessons-img.webp"
                  width="268"
                  height="376"
                  alt="method"
                  loading="lazy"
                  class="absolute -right-8 top-24 max-lg:top-8 max-lg:w-[187px] max-lg:h-auto"
                />
                <div class="px-[30px] mt-28 max-lg:px-5 max-lg:mt-8">
                  <div>
                    <div class="flex gap-2.5 border-b border-b-[#EEEEEE] pb-2">
                      <div class="text-center">
                        <span class="text-[#A0B6DF] text-lg">MERIT</span>
                        <span
                          class="block w-[50px] h-[50px] bg-[#A0B6DF] rounded-full text-white text-[30px] leading-[50px]"
                          >1</span
                        >
                      </div>
                      <div
                        class="w-[295px] text-center"
                      >
                        <h5 class="text-[#A0B6DF] text-xl">日程は毎回選べる</h5>
                        <p class="text-center">その日の予定に合わせて</p>
                      </div>
                    </div>
                    <div class="mt-[18px] relative">
                      <p class="text-sm">
                        一般の音楽教室では一週間に一度、曜日や時間が固定の場合が多いですが、EYS音楽教室では、その月の予定に合わせて好きな曜日や時間で予約を取ることが可能です。<br />
                        ※人気の曜日、時間は予約が取りにくい場合がございます。ご了承ください
                      </p>
                    </div>
                  </div>
                  <div class="flex items-end justify-between">
                    <div class="text-center w-[183px]">
                      <p class="text-[113px] text-[#A0B6DF] roboto">¥0</p>
                      <div class="px-5 py-4 bg-[#F9F9F9]">
                        <h6 class="text-sm text-[#A0B6DF]">補講無料</h6>
                        <p class="text-[10px]">当日の欠席もOK！その分無料で補講レッスンが受けられます。</p>
                      </div>
                    </div>
                    <div class="text-center w-[183px]">
                      <img
                        src="/images/price-next-month-ok.svg"
                        width="119"
                        height="119"
                        alt="method"
                        loading="lazy"
                        class="w-[119px] h-auto mb-2"
                      />
                      <div class="px-5 py-4 bg-[#F9F9F9]">
                        <h6 class="text-sm text-[#A0B6DF]">次月繰越もOK</h6>
                        <p class="text-[10px]">無料補講は翌月末まで受けられます。慌てなくても大丈夫！</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/images/price-next-calender.svg"
                    width="319"
                    height="316"
                    alt="method"
                    loading="lazy"
                    class="mx-auto mt-5"
                  />
                  <div class="px-[30px]">
                    <div class="mt-9">
                      <div class="flex gap-2.5">
                        <div class="text-center">
                          <span class="text-[#D0C884] text-lg">MERIT</span>
                          <span
                            class="block w-[50px] h-[50px] bg-[#D0C884] rounded-full text-white text-[30px] leading-[50px]"
                            >1</span
                          >
                        </div>
                        <div
                          class="w-[295px] text-center"
                        >
                          <h5 class="text-[#D0C884] text-xl">日程は毎回選べる</h5>
                          <p class="text-center">その日の予定に合わせて</p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-9">
                      <div class="flex gap-2.5">
                        <div class="text-center">
                          <span class="text-[#EEB0B0] text-lg">MERIT</span>
                          <span
                            class="block w-[50px] h-[50px] bg-[#EEB0B0] rounded-full text-white text-[30px] leading-[50px]"
                            >1</span
                          >
                        </div>
                        <div
                          class="w-[295px] text-center"
                        >
                          <h5 class="text-[#EEB0B0] text-xl">日程は毎回選べる</h5>
                          <p class="text-center">その日の予定に合わせて</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-[30px]">
            <button aria-label="閉じる"
              class="block mx-auto text-[14px] relative border border-[#999999] pt-6 pb-5 px-[100px] rounded-full bg-white after:content-['-'] after:font-bold after:roboto after:text-[#E39597] after:text-[20px] after:bg-transparent after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
              @click="methodsOpen = !methodsOpen"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const methodsOpen = ref(false);
</script>
