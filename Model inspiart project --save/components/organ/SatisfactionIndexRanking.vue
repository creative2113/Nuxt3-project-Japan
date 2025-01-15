<template>
  <div class="relative pt-[10px] pb-12 mt-0">
    <div class="overflow-x-hidden bg-gradient-to-b from-[#DDDDDD] via-white via-[45%] to-[#EEEEEE] pt-[25px]">
      <img
        src="/images/heading_fukidashi-best10.svg"
        width="167"
        height="88"
        loading="lazy"
        class="max-w-[180px] drop-shadow-lg mx-auto -translate-x-[6px]"
        alt="満足度ランキングベスト10"
        decoding="async"
      />
      <div
        id="satisfuction-index-ranking"
        class="max-w-screen-lg mx-auto relative h-[340px]"
      >
        <Swiper
          :loop="true"
          :slides-per-view="5"
          :space-between="-22"
          :modules="[SwiperNavigation]"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :effect="'fade'"
          class="w-[375px] !static !overflow-visible"
          @swiper="onSwiper"
          @slide-change-transition-end="onSlideChange"
        >
          <SwiperSlide
            v-for="(instructor, index) in instructors"
            :key="index"
          >
            <div class="w-[100px]">
              <img
                :src="instructor.image"
                width="418"
                height="880"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          class="swiper-button-prev !w-[50px] !h-[50px] !left-0 -translate-y-[45px]"
          aria-label="前へ"
        >
          <img
            src="/images/arrow/arrow-left.svg"
            width="50"
            height="50"
            alt=""
            loading="lazy"
            class="w-full"
            role="presentation"
          />
        </button>
        <button
          class="swiper-button-next !w-[50px] !h-[50px] !right-0 -translate-y-[45px]"
          aria-label="次へ"
        >
          <img
            src="/images/arrow/arrow-right.svg"
            width="50"
            height="50"
            alt=""
            loading="lazy"
            class="w-full"
            role="presentation"
          />
        </button>
      </div>
    </div>
    <!-- /カルーセル -->

    <!-- 同期パネル -->
    <div
      v-if="activeInstructor"
      class="max-w-[355px] mx-auto px-[10px] z-10 -mt-[81px] relative drop-shadow-[0px_0px_6px_rgb(238_170_170)] before:absolute before:left-10 before:bottom-full before:z-10 before:border-x-[12px] before:border-y-[22px] before:border-transparent"
      :class="
        activeInstructor.rankImageName === 'img_ranking-no1'
          ? `before:border-b-[#AA99EE]`
          : `before:border-b-white`
      "
    >
      <div class="bg-white shadow-sm w-[355px] -translate-x-[10px]">
        <!-- 同期パネルヘッダー -->
        <div
          class="flex items-center pt-[10px] pb-[7px] px-2 border border-[#EEEEEE] relative"
          :class="activeInstructor.rankImageName ? `pt-[35px]` : ``"
        >
          <div
            class="w-[86px] h-[86px] rounded-full shadow-lg  overflow-hidden"
          >
            <img
              :src="activeInstructor.icon"
              width="80"
              height="80"
              alt=""
              role="presentation"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p class="text-lg font-semibold tracking-wider ml-1">
            {{ activeInstructor.name }}
          </p>
          <div class="text-center ml-[14px]">
            <img
              :src="activeInstructor.rank"
              width="42"
              height="40"
              alt=""
              role="presentation"
              loading="lazy"
              decoding="async"
            />
            <p class="text-[10px] text-[#666666] leading-3 font-semibold">講師<br />ランク</p>
          </div>
          <div class=" ml-7 w-20 h-20 relative">
            <Pie
              :data="getChartData(activeInstructor)"
              :options="{ responsive: true }"
            />
            <div
              class="text-[10px] font-semibold text-center leading-tight text-[#333] absolute top-1/2 left-1/2 -translate-x-1/2"
            >
              大変満足<br />
              <span class="text-xs font-roboto font-bold">{{
                getVerySatisfiedPer(activeInstructor)
              }}</span
              ><span class="text-[8px] font-roboto font-bold">%</span>
            </div>
          </div>
          <div
            v-if="activeInstructor.rankImageName"
            :class="[
              'absolute',
              activeInstructor.rankImageName === 'img_ranking-no1'
                ? '-top-2 right-0 h-[38px]'
                : '',
              activeInstructor.rankImageName === 'img_ranking-no2' ||
              activeInstructor.rankImageName === 'img_ranking-no3'
                ? 'top-0 translate-x-1/2 right-1/2 w-40'
                : '',
            ]"
          >
            <img
              class="w-full"
              width="355"
              height="39"
              role="presentation"
              :src="`/images/${activeInstructor.rankImageName}_sp.svg`"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <!-- /同期パネルヘッダー -->

        <!-- 同期パネルコンテンツ（初期表示） -->
        <div class="py-5 flex-row-reverse gap-[15px]">
          <div class="shrink-0 pl-[10px]">
            <h4
              class="text-sm font-semibold tracking-[0.1px] pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
            >
              レッスンスタイル
            </h4>
            <div class="gap-[15px] items-center">
              <!-- ビデオカルーセル -->
              <div class="mt-[10px] px-[10px] w-[335px] shrink-0 relative">
                <Swiper
                  :slides-per-view="2"
                  :space-between="10"
                  :modules="[SwiperNavigation]"
                  :navigation="{
                    nextEl: '.swiper-button-next-video',
                    prevEl: '.swiper-button-prev-video',
                  }"
                  class="w-full !static"
                >
                  <SwiperSlide
                    v-for="(video, videoIndex) in activeInstructor.videos"
                    :key="videoIndex"
                    class="aspect-[126/224] rounded-lg overflow-hidden"
                  >
                    <div class="w-[153px] h-[272px]">
                      <video
                        :ref="(el: any) => (videoPlayer[videoIndex] = el as HTMLVideoElement)"
                        class="w-full h-full object-cover"
                        @click="togglePlay(videoIndex)"
                      >
                        <source
                          :src="video"
                          type="video/mp4"
                        />
                        お使いのブラウザはvideoタグをサポートしていません。
                      </video>
                    </div>
                  </SwiperSlide>
                  <button
                    aria-label="前へ"
                    class="swiper-button-prev-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[120px] left-[10px] z-50 -translate-x-1/2 bg-white shadow-lg"
                  >
                    ←
                  </button>
                  <button
                    aria-label="次へ"
                    class="swiper-button-next-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[120px] right-[10px] z-50 translate-x-1/2 bg-white shadow-lg"
                  >
                    →
                  </button>
                </Swiper>
              </div>
              <!-- /ビデオカルーセル -->
              <!-- レベルバー -->
              <div class="w-[335px] mt-[22px]">
                <div class="">
                  <div
                    class="flex justify-center items-center gap-[10px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">やさしい</span>
                    <div
                      class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                        :style="{ left: activeInstructor.level.easiness + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">スパルタ</span>
                  </div>
                </div>

                <div class="mt-3">
                  <div
                    class="flex justify-center items-center gap-[10px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">初心者向き</span>
                    <div
                      class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                        :style="{ left: activeInstructor.level.beginner + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">経験者向き</span>
                  </div>
                </div>

                <div class="mt-[14px]">
                  <div
                    class="flex justify-center items-center gap-[10px]"
                  >
                    <span class="text-[#017DEB] text-[10px] font-semibold">理論</span>
                    <div
                      class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                    >
                      <div
                        class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                        :style="{ left: activeInstructor.level.theory + '%' }"
                      ></div>
                    </div>
                    <span class="text-[#FF4455] text-[10px] font-semibold">感覚</span>
                  </div>
                </div>
              </div>
              <!-- /レベルバー -->
            </div>
          </div>

          <div
            class="w-[355px] mt-[22px] pt-5 border-transparent border-t-[#EEEEEE] border"
          >
            <div class="px-[10px] mt-[2px]">
              <h4
                class="text-[13px] leading-tight font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
              >
                プロフィール
              </h4>
              <p class="text-xs font-light pl-[10px] mt-[10px] line-clamp-3 leading-[19px]">
                {{ activeInstructor.profile }}
              </p>
            </div>

            <div
              class="hidden py-[15px] pl-[10px] mt-10 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
            >
              <div class="">
                <h4
                  class="text-xs font-semibold tracking-[-0.3px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid text-nowrap"
                >
                  対応スタジオ
                </h4>
                <p class="text-[10px] font-light">{{ activeInstructor.studios.join(' / ') }}</p>
              </div>
              <div class="mt-5">
                <h4
                  class="text-xs font-semibold tracking-[-0.5px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                >
                  対応コース
                </h4>
                <p class="text-[10px] font-light">{{ activeInstructor.courses.join('、') }}</p>
              </div>
              <div class="mt-5">
                  <h4
                    class="text-xs font-semibold tracking-[-0.5px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(activeInstructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- /同期パネルコンテンツ（初期表示） -->

        <!-- 同期パネルコンテンツ（詳細表示） -->
        <div v-if="showDetails[0]">
          <div
            class="py-[15px] px-[15px] mx-5 mb-5 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
          >
            <div class="">
              <h4
                class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
              >
                スタジオ
              </h4>
              <p class="text-[10px] font-light">{{ activeInstructor.studios.join(' / ') }}</p>
            </div>
            <div class="mt-5">
              <h4
                class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
              >
                対応コース
              </h4>
              <p class="text-[10px] font-light">{{ activeInstructor.courses.join('、') }}</p>
            </div>
            <div class="mt-5">
              <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(activeInstructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
          </div>
          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <div class="">
              <div class="w-[340px] shrink-0">
                <h4
                  class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                >
                  メンバー満足度
                  <span class="text-[10px] scale-80"
                    >回答数<span class="text-sm font-roboto font-semibold">{{
                      getTotalcount(activeInstructor)
                    }}</span
                    >件</span
                  >
                </h4>
                <div class="flex gap-8 mt-[10px]">
                  <div>
                    <div class="w-[120px] h-[120px] ml-5">
                      <Pie
                        :data="getChartData(activeInstructor)"
                        :options="{ responsive: true }"
                      />
                    </div>
                    <div class="mt-5">
                      <div
                        v-for="(count, index) in Object.values(activeInstructor.satisfactionCount)"
                        :key="index"
                      >
                        <div class="flex items-center mt-[6px]">
                          <img
                            :src="`/images/icon_satisfuction-face-${5 - index}.svg`"
                            width="26"
                            height="26"
                            alt=""
                            role="presentation"
                            loading="lazy"
                            class="w-5 h-5"
                            decoding="async"
                          />
                          <span class="text-[10px] ml-1">{{ labels[index] }}</span>
                          <span class="ml-2 text-[10px] font-semibold">
                            <span class="text-sm font-roboto">{{
                              (
                                (Number(count) / Number(getTotalcount(activeInstructor))) *
                                100
                              ).toFixed(1)
                            }}</span
                            >%<span class="text-xs font-roboto ml-[5px]">{{ count }}</span
                            >件
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- TODO: 件数から割合を計算するようにする -->
                  </div>
                  <div class="w-[110px] h-[300px]">
                    <img
                      :src="activeInstructor.image"
                      width="334"
                      height="880"
                      alt=""
                      role="presentation"
                      loading="lazy"
                      class="w-full h-full object-cover object-top"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="grid grid-cols-1 gap-[10px]">
                  <div
                    v-for="(review, reviewIndex) in activeInstructor.reviews.slice(
                      0,
                      showReviewsCount[0]
                    )"
                    :key="reviewIndex"
                    class="px-[10px] pt-[10px] pb-[5px] border-[#eee] border-[1px] rounded-lg bg-[#f9f9f9]"
                  >
                    <div class="flex items-start">
                      <div
                        class="w-[50px] h-[50px] rounded-full border border-[#AA99EE] overflow-hidden shrink-0"
                      >
                        <img
                          :src="review.icon"
                          width="48"
                          height="48"
                          alt=""
                          role="presentation"
                          loading="lazy"
                          class="w-full h-full object-cover"
                          decoding="async"
                        />
                      </div>
                      <div class="flex flex-col w-full ml-[10px]">
                        <span class="text-xs font-semibold">{{ review.name }}</span>
                        <span class="text-[10px] mt-2">{{ review.course }}</span>
                        <span class="text-[10px]">{{ review.date }}</span>
                      </div>

                      <p class="flex items-center shrink-0">
                        <img
                          :src="`/images/icon_satisfuction-face-${review.rating}.svg`"
                          width="26"
                          height="26"
                          alt=""
                          role="presentation"
                          loading="lazy"
                          class="w-4 h-4"
                          decoding="async"
                        />
                        <span class="font-roboto font-semibold text-xs ml-1">{{
                          review.rating
                        }}</span>
                        <span class="font-semibold text-xs ml-2">{{
                          labels[5 - review.rating]
                        }}</span>
                      </p>
                    </div>

                    <p class="mt-[10px] text-xs font-light">{{ review.content }}</p>
                  </div>
                </div>
                <AtomOpenCloseBtn
                  v-if="showReviewsCount[0] < maxReviewsCount(activeInstructor)"
                  @click="showMoreReviews(activeInstructor, 0)"
                  :open="false"
                  text="口コミをもっと見る"
                  />
              </div>
            </div>
          </div>

          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <h4
              class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
            >
              レッスンで心掛けていること
            </h4>
            <p class="text-xs font-light pl-[10px] mt-[10px]">
              {{ activeInstructor.philosophy }}
            </p>
          </div>

          <div
            class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
          >
            <div class="grid grid-cols-1 gap-x-5 gap-y-[10px]">
              <div
                v-for="(policy, policyIndex) in activeInstructor.policies"
                :key="policyIndex"
                class="flex flex-start gap-[10px]"
              >
                <div class="w-[58px] h-[58px] p-[10px] border-[#ddd] border shrink-0 rounded-lg">
                  <img
                    :src="policy.icon"
                    width="48"
                    height="48"
                    alt=""
                    role="presentation"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 class="font-sm font-semibold">{{ policy.heading }}</h3>
                  <p class="text-[10px] font-light mt-[2px]">{{ policy.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /同期パネルコンテンツ（詳細表示） -->

        <div class="pb-5">
          <AtomOpenCloseBtn
            @click="toggleDetails(0)"
            :open="showDetails[0]"
            :text="showDetails[0] ? '閉じる' : '口コミ情報も見る'"
          />
        </div>
      </div>
    </div>
    <!-- /同期パネル -->

    <!-- 2位以降の講師 -->
    <div class="max-w-[355px] mx-auto px-[10px]">
      <div
        v-for="(instructor, index) in instructors?.slice(1, 3)"
        :key="index"
        class="mt-4"
      >
        <div class="bg-white shadow-sm w-[355px] -translate-x-[10px]">
          <!-- 同期パネルヘッダー -->
          <div
            class="flex items-center py-[10px] px-2 border border-[#EEEEEE] relative"
            :class="instructor.rankImageName ? `pt-[36px]` : ``"
          >
            <div
              class="w-[84px] h-[84px] rounded-full shadow-md border-[3px] border-white border-solid overflow-hidden shrink-0"
            >
              <img
                :src="instructor.icon"
                width="80"
                height="80"
                alt=""
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p class="text-lg font-semibold tracking-[2px] ml-[6px] mt-[2px]">
              {{ instructor.name }}
            </p>
            <div class="text-center ml-0 mt-[7px]">
              <img
                :src="instructor.rank"
                width="42"
                height="40"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <p class="text-[10px] text-[#666666] leading-3 font-semibold mt-[3px]">講師<br />ランク</p>
            </div>
            <div class="ml-[24px] w-20 h-20 relative mt-[2px]">
              <Pie
                :data="getChartData(instructor)"
                :options="{ responsive: true }"
              />
              <div
                class="text-[10px] font-semibold text-center leading-tight text-[#333] absolute top-1/2 left-1/2 -translate-x-1/2"
              >
                大変満足<br />
                <span class="text-xs font-roboto font-bold">{{
                  getVerySatisfiedPer(instructor)
                }}</span
                ><span class="text-[8px] font-roboto font-bold">%</span>
              </div>
            </div>
            <div
              v-if="instructor.rankImageName"
              :class="[
                'absolute',
                instructor.rankImageName === 'img_ranking-no1'
                  ? 'top-0 right-0 h-10'
                  : '',
                instructor.rankImageName === 'img_ranking-no2' ||
                instructor.rankImageName === 'img_ranking-no3'
                  ? '-top-[2px] translate-x-[79px] right-1/2 h-10'
                  : '',
              ]"
            >
              <img
                class="w-full -mt-1"
                width="160"
                height="40"
                :src="`/images/${instructor.rankImageName}_sp.svg`"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <!-- /同期パネルヘッダー -->

          <!-- 同期パネルコンテンツ（初期表示） -->
          <div class="py-5 flex-row-reverse gap-[15px]">
            <div class=" shrink-0 px-[10px]">
              <h4
                class="text-sm font-semibold tracking-[0.1px] pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
              >
                レッスンスタイル
              </h4>
              <div class=" gap-[15px] items-center">
                <!-- ビデオカルーセル -->
                <div class="mt-[10px] px-[10px] shrink-0 relative">
                  <Swiper
                    :slides-per-view="2"
                    :space-between="10"
                    :modules="[SwiperNavigation]"
                    :navigation="{
                      nextEl: '.swiper-button-next-video',
                      prevEl: '.swiper-button-prev-video',
                    }"
                    class="w-full !static"
                  >
                    <SwiperSlide
                      v-for="(video, videoIndex) in instructor.videos"
                      :key="videoIndex"
                      class="aspect-[126/224] rounded-lg overflow-hidden"
                    >
                      <div class="w-full h-full">
                        <video
                          :ref="(el: any) => (videoPlayer[videoIndex] = el as HTMLVideoElement)"
                          class="w-full h-full object-cover"
                          @click="togglePlay(videoIndex)"
                        >
                          <source
                            :src="video"
                            type="video/mp4"
                          />
                          お使いのブラウザはvideoタグをサポートしていません。
                        </video>
                      </div>
                    </SwiperSlide>
                    <button
                      aria-label="前へ"
                      class="swiper-button-prev-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[121px] left-[10px] z-50 -translate-x-1/2 bg-white shadow-lg"
                    >
                      ←
                    </button>
                    <button
                      aria-label="次へ"
                      class="swiper-button-next-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-[121px] right-[10px] z-50 translate-x-1/2 bg-white shadow-lg"
                    >
                      →
                    </button>
                  </Swiper>
                </div>
                <!-- /ビデオカルーセル -->
                <!-- レベルバー -->
                <div class="w-full mt-[23px]">
                  <div class="">
                    <div
                      class="flex justify-center items-center-wrap gap-[10px]"
                    >
                      <span class="text-[#017DEB] text-[10px] font-semibold">やさしい</span>
                      <div
                        class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                      >
                        <div
                          class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                          :style="{ left: instructor.level.easiness + '%' }"
                        ></div>
                      </div>
                      <span class="text-[#FF4455] text-[10px] font-semibold">スパルタ</span>
                    </div>
                  </div>

                  <div class="mt-[12px]">
                    <div
                      class="flex justify-center items-center-wrap gap-[10px]"
                    >
                      <span class="text-[#017DEB] text-[10px] font-semibold">初心者向き</span>
                      <div
                        class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                      >
                        <div
                          class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                          :style="{ left: instructor.level.beginner + '%' }"
                        ></div>
                      </div>
                      <span class="text-[#FF4455] text-[10px] font-semibold">経験者向き</span>
                    </div>
                  </div>

                  <div class="mt-[14px]">
                    <div
                      class="flex justify-center items-center-wrap gap-[10px]"
                    >
                      <span class="text-[#017DEB] text-[10px] font-semibold">理論</span>
                      <div
                        class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                      >
                        <div
                          class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                          :style="{ left: instructor.level.theory + '%' }"
                        ></div>
                      </div>
                      <span class="text-[#FF4455] text-[10px] font-semibold">感覚</span>
                    </div>
                  </div>
                </div>
                <!-- /レベルバー -->
              </div>
            </div>

            <div
              class="mt-[21px] pt-5 border-transparent border-t-[#EEEEEE] border"
            >
              <div class="px-[10px]">
                <h4
                  class="text-sm font-semibold tracking-[0.5px] pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                >
                  プロフィール
                </h4>
                <p class="text-xs font-light pl-[10px] mt-[10px] line-clamp-3">
                  {{ instructor.profile }}
                </p>
              </div>

              <div
                class="hidden py-[12px] pl-[10px] mt-[50px] border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
              >
                <div class="">
                  <h4
                    class="text-xs font-semibold tracking-[-0.7px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid text-nowrap"
                  >
                    対応スタジオ
                  </h4>
                  <p class="text-[10px] font-light">{{ activeInstructor?.studios.join(' / ') }}</p>
                </div>
                <div class="mt-5">
                  <h4
                    class="text-xs font-semibold tracking-[-0.7px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応コース
                  </h4>
                  <p class="text-[10px] font-light">{{ instructor.courses.join('、') }}</p>
                </div>
                <div class="mt-5">
                  <h4
                    class="text-xs font-semibold tracking-[-0.7px] pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(instructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /同期パネルコンテンツ（初期表示） -->

          <!-- 同期パネルコンテンツ（詳細表示） -->
          <div v-if="showDetails[index + 1]">
            <div
              class="py-[15px] px-[15px] mx-5 mb-5 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
            >
              <div class="">
                <h4
                  class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                >
                  スタジオ
                </h4>
                <p class="text-[10px] font-light">{{ instructor.studios.join(' / ') }}</p>
              </div>
              <div class="mt-5">
                <h4
                  class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                >
                  対応コース
                </h4>
                <p class="text-[10px] font-light">{{ instructor.courses.join('、') }}</p>
              </div>
              <div class="mt-5">
                <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(instructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
            </div>
            <div
              class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
            >
              <div class="">
                <div class="w-[340px] shrink-0">
                  <h4
                    class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                  >
                    メンバー満足度
                    <span class="text-[10px] scale-80"
                      >回答数<span class="text-sm font-roboto font-semibold">{{
                        getTotalcount(instructor)
                      }}</span
                      >件</span
                    >
                  </h4>
                  <div class="flex gap-8 mt-[10px]">
                    <div>
                      <div class="w-[120px] h-[120px] ml-5">
                        <Pie
                          :data="getChartData(instructor)"
                          :options="{ responsive: true }"
                        />
                      </div>
                      <div class="mt-5">
                        <div
                          v-for="(count, index) in Object.values(instructor.satisfactionCount)"
                          :key="index"
                        >
                          <div class="flex items-center mt-[6px] text-[]">
                            <img
                              :src="`/images/icon_satisfuction-face-${5 - index}.svg`"
                              width="26"
                              height="26"
                              alt=""
                              role="presentation"
                              loading="lazy"
                              class="w-5 h-5"
                              decoding="async"
                            />
                            <span class="text-[10px] ml-1">{{ labels[index] }}</span>
                            <span class="ml-2 text-[10px] font-semibold">
                              <span class="text-sm font-roboto">{{
                                ((Number(count) / Number(getTotalcount(instructor))) * 100).toFixed(
                                  1
                                )
                              }}</span
                              >%<span class="text-xs font-roboto ml-[5px]">{{ count }}</span
                              >件
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- TODO: 件数から割合を計算するようにする -->
                    </div>
                    <div class="w-[110px] h-[300px]">
                      <img
                        :src="instructor.image"
                        width="334"
                        height="880"
                        alt=""
                        role="presentation"
                        loading="lazy"
                        class="w-full h-full object-cover object-top"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="grid grid-cols-1 gap-[10px]">
                    <div
                      v-for="(review, reviewIndex) in instructor.reviews.slice(
                        0,
                        showReviewsCount[index + 1]
                      )"
                      :key="reviewIndex"
                      class="px-[10px] pt-[10px] pb-[5px] border-[#eee] border-[1px] rounded-lg bg-[#f9f9f9]"
                    >
                      <div class="flex items-start">
                        <div
                          class="w-[50px] h-[50px] rounded-full border border-[#AA99EE] overflow-hidden shrink-0"
                        >
                          <img
                            :src="review.icon"
                            width="48"
                            height="48"
                            alt=""
                            role="presentation"
                            loading="lazy"
                            class="w-full h-full object-cover"
                            decoding="async"
                          />
                        </div>
                        <div class="flex flex-col w-full ml-[10px]">
                          <span class="text-xs font-semibold">{{ review.name }}</span>
                          <span class="text-[10px] mt-2">{{ review.course }}</span>
                          <span class="text-[10px]">{{ review.date }}</span>
                        </div>

                        <p class="flex items-center shrink-0">
                          <img
                            :src="`/images/icon_satisfuction-face-${review.rating}.svg`"
                            width="26"
                            height="26"
                            class="w-4 h-4"
                            alt=""
                            role="presentation"
                            loading="lazy"
                            decoding="async"
                          />
                          <span class="font-roboto font-semibold text-xs ml-1">{{
                            review.rating
                          }}</span>
                          <span class="font-semibold text-xs ml-2">{{
                            labels[5 - review.rating]
                          }}</span>
                        </p>
                      </div>

                      <p class="mt-[10px] text-xs font-light">{{ review.content }}</p>
                    </div>
                  </div>
                  <AtomOpenCloseBtn
                    v-if="showReviewsCount[index + 1] < maxReviewsCount(instructor)"
                    :open="false"
                    @click="showMoreReviews(instructor, index + 1)"
                    text="口コミをもっと見る"
                  />
                </div>
              </div>
            </div>

            <div
              class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
            >
              <h4
                class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
              >
                レッスンで心掛けていること
              </h4>
              <p class="text-xs font-light pl-[10px] mt-[10px]">
                {{ instructor.philosophy }}
              </p>
            </div>

            <div
              class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
            >
              <div class="grid grid-cols-1 gap-x-5 gap-y-[10px]">
                <div
                  v-for="(policy, policyIndex) in instructor.policies"
                  :key="policyIndex"
                  class="flex flex-start gap-[10px]"
                >
                  <div class="w-[58px] h-[58px] p-[10px] border-[#ddd] border shrink-0 rounded-lg">
                    <img
                      :src="policy.icon"
                      width="48"
                      height="48"
                      alt=""
                      role="presentation"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h3 class="font-sm font-semibold">{{ policy.heading }}</h3>
                    <p class="text-[10px] font-light mt-[2px]">{{ policy.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /同期パネルコンテンツ（詳細表示） -->

          <div class="pb-5">
            <AtomOpenCloseBtn
              :open="showDetails[index + 1]"
              :text="showDetails[index + 1] ? '閉じる' : '口コミ情報も見る'"
              @click="toggleDetails(index + 1)"
            />
          </div>
        </div>
      </div>

      <div v-if="showOtherInstructors">
        <div
          v-for="(instructor, index) in instructors?.slice(3, 10)"
          :key="index"
          class="mt-5"
        >
          <div class="bg-white shadow-sm">
            <!-- 同期パネルヘッダー -->
            <div class="flex items-center py-[10px] px-5 border border-[#EEEEEE] relative">
              <div
                class="w-20 h-20 rounded-full shadow-md border-[3px] border-white border-solid overflow-hidden shrink-0"
              >
                <img
                  :src="instructor.icon"
                  width="80"
                  height="80"
                  alt=""
                  role="presentation"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p class="text-lg font-semibold tracking-wider ml-[10px]">
                {{ instructor.name }}
              </p>
              <div class="text-center ml-5">
                <img
                  :src="instructor.rank"
                  width="42"
                  height="40"
                  alt=""
                  role="presentation"
                  loading="lazy"
                  decoding="async"
                />
                <p class="text-[10px] text-[#666666] leading-3 font-semibold">講師<br />ランク</p>
              </div>
              <div class="w-20 h-20 relative">
                <Pie
                  :data="getChartData(instructor)"
                  :options="{ responsive: true }"
                />
                <div
                  class="text-[10px] font-semibold text-center leading-tight text-[#333] absolute top-1/2 left-1/2 -translate-x-1/2"
                >
                  大変満足<br />
                  <span class="text-xs font-roboto font-bold">{{
                    getVerySatisfiedPer(instructor)
                  }}</span
                  ><span class="text-[8px] font-roboto font-bold">%</span>
                </div>
              </div>
            </div>
            <!-- /同期パネルヘッダー -->

            <!-- 同期パネルコンテンツ（初期表示） -->
            <div class="px-[10px] py-5 flex-row-reverse gap-[15px]">
              <div class=" shrink-0">
                <h4
                  class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                >
                  レッスンスタイル
                </h4>
                <div class="gap-[15px] items-center">
                  <!-- ビデオカルーセル -->
                  <div class="mt-[10px] px-[10px] shrink-0 relative">
                    <Swiper
                      :slides-per-view="2"
                      :space-between="10"
                      :modules="[SwiperNavigation]"
                      :navigation="{
                        nextEl: '.swiper-button-next-video',
                        prevEl: '.swiper-button-prev-video',
                      }"
                      class="w-full !static"
                    >
                      <SwiperSlide
                        v-for="(video, videoIndex) in instructor.videos"
                        :key="videoIndex"
                        class="aspect-[126/224] rounded-lg overflow-hidden"
                      >
                        <div class="w-full h-full">
                          <video
                            :ref="(el: any) => (videoPlayer[videoIndex] = el as HTMLVideoElement)"
                            class="w-full h-full object-cover"
                            @click="togglePlay(videoIndex)"
                          >
                            <source
                              :src="video"
                              type="video/mp4"
                            />
                            お使いのブラウザはvideoタグをサポートしていません。
                          </video>
                        </div>
                      </SwiperSlide>
                      <button
                        aria-label="前へ"
                        class="swiper-button-prev-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-1/2 left-[10px] z-50 -translate-x-1/2 bg-white shadow-lg"
                      >
                        ←
                      </button>
                      <button
                        aria-label="次へ"
                        class="swiper-button-next-video grid place-items-center w-[30px] h-[30px] rounded-full absolute top-1/2 right-[10px] z-50 translate-x-1/2 bg-white shadow-lg"
                      >
                        →
                      </button>
                    </Swiper>
                  </div>
                  <!-- /ビデオカルーセル -->
                  <!-- レベルバー -->
                  <div class="w-full mt-6">
                    <div class="">
                      <div
                        class="flex justify-center items-center-wrap gap-[1px]"
                      >
                        <span class="text-[#017DEB] text-[10px] font-semibold">やさしい</span>
                        <div
                          class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                        >
                          <div
                            class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                            :style="{ left: instructor.level.easiness + '%' }"
                          ></div>
                        </div>
                        <span class="text-[#FF4455] text-[10px] font-semibold">スパルタ</span>
                      </div>
                    </div>

                    <div class="mt-[30px]">
                      <div
                        class="flex justify-center items-center-wrap gap-[1px]"
                      >
                        <span class="text-[#017DEB] text-[10px] font-semibold">初心者向き</span>
                        <div
                          class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                        >
                          <div
                            class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                            :style="{ left: instructor.level.beginner + '%' }"
                          ></div>
                        </div>
                        <span class="text-[#FF4455] text-[10px] font-semibold">経験者向き</span>
                      </div>
                    </div>

                    <div class="mt-[30px]">
                      <div
                        class="flex justify-center items-center-wrap gap-[1px]"
                      >
                        <span class="text-[#017DEB] text-[10px] font-semibold">理論</span>
                        <div
                          class="w-[213px] h-[6px] bg-gradient-to-r from-[#66BBFF] to-[#FF7788] relative rounded-full"
                        >
                          <div
                            class="w-[18px] h-[18px] rounded-full border border-[#CCCCCC] border-solid bg-white absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                            :style="{ left: instructor.level.theory + '%' }"
                          ></div>
                        </div>
                        <span class="text-[#FF4455] text-[10px] font-semibold">感覚</span>
                      </div>
                    </div>
                  </div>
                  <!-- /レベルバー -->
                </div>
              </div>

              <div
                class="mt-5 pt-5 border-transparent border-t-[#EEEEEE] border"
              >
                <div class="px-[10px]">
                  <h4
                    class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                  >
                    プロフィール
                  </h4>
                  <p class="text-xs font-light pl-[10px] mt-[10px] line-clamp-3">
                    <!-- TODO: モバイル時に、詳細表示押した段階で、clamp-noneにする機能 -->
                    {{ instructor.profile }}
                  </p>
                </div>

                <div
                  class="hidden py-[15px] px-[15px] mt-5 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
                >
                  <div class="">
                    <h4
                      class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                    >
                      スタジオ
                    </h4>
                    <p class="text-[10px] font-light">{{ instructor.studios.join(' / ') }}</p>
                  </div>
                  <div class="mt-5">
                    <h4
                      class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                    >
                      対応コース
                    </h4>
                    <p class="text-[10px] font-light">{{ instructor.courses.join('、') }}</p>
                  </div>
                  <div class="mt-5">
                    <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(instructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <!-- /同期パネルコンテンツ（初期表示） -->

            <!-- 同期パネルコンテンツ（詳細表示） -->
            <div v-if="showDetails[index + 3]">
              <div
                class="py-[15px] px-[15px] mx-5 mb-5 border border-[#EEEEEE] border-solid rounded-lg bg-[#F9F9F9]"
              >
                <div class="">
                  <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    スタジオ
                  </h4>
                  <p class="text-[10px] font-light">{{ instructor.studios.join(' / ') }}</p>
                </div>
                <div class="mt-5">
                  <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応コース
                  </h4>
                  <p class="text-[10px] font-light">{{ instructor.courses.join('、') }}</p>
                </div>
                <div class="mt-5">
                  <h4
                    class="text-xs font-semibold tracking-widest pl-[10px] flex-shrink-0 border-l-[2px] border-[#AA99EE] border-solid"
                  >
                    対応曜日
                  </h4>
                  <div class="flex text-white pl-[0px] mt-[0px] pb-[0px]">
                    <div
                      v-for="day in getAvailableDays(instructor.availableDays)"
                      :key="day.day"
                      class="rounded-full text-[12px] py-[3px] px-[6px] mr-[5px]"
                      :class="{
                        'bg-[#55BBFF]': day.isAvailable,
                        'bg-[#DDDDDD]': !day.isAvailable,
                      }"
                    >
                      {{ day.day }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
              >
                <div class="">
                  <div class="w-[340px] shrink-0">
                    <h4
                      class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                    >
                      メンバー満足度
                      <span class="text-[10px] scale-80"
                        >回答数<span class="text-sm font-roboto font-semibold">{{
                          getTotalcount(instructor)
                        }}</span
                        >件</span
                      >
                    </h4>
                    <div class="flex gap-8 mt-[10px]">
                      <div>
                        <div class="w-[120px] h-[120px] ml-5">
                          <Pie
                            :data="getChartData(instructor)"
                            :options="{ responsive: true }"
                          />
                        </div>
                        <div class="mt-5">
                          <div
                            v-for="(count, index) in Object.values(instructor.satisfactionCount)"
                            :key="index"
                          >
                            <div class="flex items-center mt-[6px]">
                              <img
                                :src="`/images/icon_satisfuction-face-${5 - index}.svg`"
                                width="26"
                                height="26"
                                alt=""
                                role="presentation"
                                loading="lazy"
                                class="w-5 h-5"
                                decoding="async"
                              />
                              <span class="text-[10px] ml-1">{{ labels[index] }}</span>
                              <span class="ml-2 text-[10px] font-semibold">
                                <span class="text-sm font-roboto">{{
                                  (
                                    (Number(count) / Number(getTotalcount(instructor))) *
                                    100
                                  ).toFixed(1)
                                }}</span
                                >%<span class="text-xs font-roboto ml-[5px]">{{ count }}</span
                                >件
                              </span>
                            </div>
                          </div>
                        </div>
                        <!-- TODO: 件数から割合を計算するようにする -->
                      </div>
                      <div class="w-[110px] h-[300px]">
                        <img
                          :src="instructor.image"
                          width="334"
                          height="880"
                          alt=""
                          role="presentation"
                          loading="lazy"
                          class="w-full h-full object-cover object-top"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="grid grid-cols-1 gap-[10px]">
                      <div
                        v-for="(review, reviewIndex) in instructor.reviews.slice(
                          0,
                          showReviewsCount[index + 3]
                        )"
                        :key="reviewIndex"
                        class="px-[10px] pt-[10px] pb-[5px] border-[#eee] border-[1px] rounded-lg bg-[#f9f9f9]"
                      >
                        <div class="flex items-start">
                          <div
                            class="w-[50px] h-[50px] rounded-full border border-[#AA99EE] overflow-hidden shrink-0"
                          >
                            <img
                              :src="review.icon"
                              width="48"
                              height="48"
                              alt=""
                              role="presentation"
                              loading="lazy"
                              class="w-full h-full object-cover"
                              decoding="async"
                            />
                          </div>
                          <div class="flex flex-col w-full ml-[10px]">
                            <span class="text-xs font-semibold">{{ review.name }}</span>
                            <span class="text-[10px] mt-2">{{ review.course }}</span>
                            <span class="text-[10px]">{{ review.date }}</span>
                          </div>

                          <p class="flex items-center shrink-0">
                            <img
                              :src="`/images/icon_satisfuction-face-${review.rating}.svg`"
                              width="26"
                              height="26"
                              class="w-4 h-4"
                              alt=""
                              role="presentation"
                              loading="lazy"
                              decoding="async"
                            />
                            <span class="font-roboto font-semibold text-xs ml-1">{{
                              review.rating
                            }}</span>
                            <span class="font-semibold text-xs ml-2">{{
                              labels[5 - review.rating]
                            }}</span>
                          </p>
                        </div>

                        <p class="mt-[10px] text-xs font-light">{{ review.content }}</p>
                      </div>
                    </div>
                    <AtomOpenCloseBtn
                      v-if="showReviewsCount[index + 3] < maxReviewsCount(instructor)"
                      @click="showMoreReviews(instructor, index + 3)"
                      :open="false"
                      text="口コミをもっと見る"
                    />
                  </div>
                </div>
              </div>

              <div
                class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
              >
                <h4
                  class="text-sm font-semibold tracking-widest pl-[10px] border-l-[3px] border-[#AA99EE] border-solid"
                >
                  レッスンで心掛けていること
                </h4>
                <p class="text-xs font-light pl-[10px] mt-[10px]">
                  {{ instructor.philosophy }}
                </p>
              </div>

              <div
                class="p-5 before:block before:w-full before:h-[1px] before:mx-auto before:bg-[#eee] before:-translate-y-5"
              >
                <div class="grid grid-cols-1 gap-x-5 gap-y-[10px]">
                  <div
                    v-for="(policy, policyIndex) in instructor.policies"
                    :key="policyIndex"
                    class="flex flex-start gap-[10px]"
                  >
                    <div
                      class="w-[58px] h-[58px] p-[10px] border-[#ddd] border shrink-0 rounded-lg"
                    >
                      <img
                        :src="policy.icon"
                        width="48"
                        height="48"
                        alt=""
                        role="presentation"
                        loading="lazy"
                        format="avif"
                        decoding="async"
                      />
                    </div>
                    <div>
                      <h3 class="font-sm font-semibold">{{ policy.heading }}</h3>
                      <p class="text-[10px] font-light mt-[2px]">{{ policy.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /同期パネルコンテンツ（詳細表示） -->

            <div class="pb-5">
              <AtomOpenCloseBtn
                @click="toggleDetails(index + 3)"
                :open="showDetails[index + 3]"
                :text="showDetails[index + 3] ? '閉じる' : '口コミ情報も見る'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-[30px]">
      <!-- アコーディオンボタン -->
      <AtomOpenCloseBtn
        :open="showOtherInstructors"
        :text="showOtherInstructors ? '閉じる' : '4〜10位の講師も見る'"
        @click="showOtherInstructors = !showOtherInstructors; emit('open',showOtherInstructors)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface SatisfactionCount {
  verySatisfied: number;
  mostlySatisfied: number;
  average: number;
  slightlyDissatisfied: number;
  veryDissatisfied: number;
}

interface AvailableDays {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}

interface Policy {
  icon: string;
  heading: string;
  description: string;
}

interface Review {
  icon: string;
  name: string;
  course: string;
  date: string;
  content: string;
  rating: number;
}

interface Instructor {
  image: string;
  icon: string;
  name: string;
  rank: string;
  satisfactionCount: SatisfactionCount;
  rankImageName?: string;
  profile: string;
  studios: string[];
  courses: string[];
  availableDays: AvailableDays;
  videos: string[];
  level: {
    easiness: number;
    beginner: number;
    theory: number;
  };
  philosophy: string;
  policies: Policy[];
  reviews: Review[];
}

const props = defineProps<{
  instructors: Instructor[];
}>();

const emit = defineEmits<{
  (event: 'play', isPlaying: boolean): void;
  (event: 'open', isOpen: boolean): void;
  (event: 'moreView'): void;
}>();

const instructors = props.instructors;
const activeIndex = ref(0);
const activeInstructor = computed(() => {
  if (instructors) {
    return instructors[activeIndex.value];
  } else {
    return null; // または適切なデフォルト値を返す
  }
});

const onSwiper = (swiper: any) => {
  if (!swiper.slides || swiper.slides.length === 0) {
    setTimeout(() => onSwiper(swiper), 100);
    return;
  }
  onSlideChange(swiper)
};

const onSlideChange = (swiper: any) => {
  const swiperIdxStr = document
    .getElementById('satisfuction-index-ranking')
    ?.querySelector('.swiper-slide-active')
    ?.getAttribute('data-swiper-slide-index');
  const swiperIdx = Number(swiperIdxStr);

  activeIndex.value = swiperIdx;

  swiper.slides.forEach((slide: HTMLElement, index: number) => {
    // const scale = Math.pow(0.83, Math.abs(index - swiper.activeIndex));
    let scale = 0.96
    let pl = 0
    let pt = 0
    const order = index - swiper.activeIndex 

    if(order == 1){
      scale = 0.82
      pl = 56
      pt = 4
    }
    else if(order == 2){
      scale = 0.7
      pl = 84
    }
    else if(order == 3){
      scale = 0.54
      pl = 84
    }
    else if(order == 4){
      scale = 0.35
      pl = 76
    }
    slide.style.transform = `scale(${scale})`;
    slide.style.paddingLeft = `${pl}pt`;
    slide.style.paddingTop = `${pt}pt`;
  });
};

const getAvailableDays = (availableDays: any) => {
  const days = ['月', '火', '水', '木', '金', '土', '日'];
  return days.map((day, index) => ({
    day,
    isAvailable: availableDays[Object.keys(availableDays)[index]],
  }));
};

/* 円グラフの生成 */
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const getChartData = (instructor: any) => {
  if (instructor && instructor.satisfactionCount) {
    return {
      labels: ['大変満足', '概ね満足', 'ふつう', 'やや不満', '大変不満'],
      datasets: [
        {
          data: [
            instructor.satisfactionCount.verySatisfied || 0,
            instructor.satisfactionCount.mostlySatisfied || 0,
            instructor.satisfactionCount.average || 0,
            instructor.satisfactionCount.slightlyDissatisfied || 0,
            instructor.satisfactionCount.veryDissatisfied || 0,
          ],
          backgroundColor: ['#FF88BB', '#F4C97C', '#AAAAAA', '#ACE2DB', '#BAD4FF'],
        },
      ],
    };
  } else {
    return {
      labels: ['大変満足', '概ね満足', 'ふつう', 'やや不満', '大変不満'],
      datasets: [
        {
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#FF88BB', '#F4C97C', '#AAAAAA', '#ACE2DB', '#BAD4FF'],
        },
      ],
    };
  }
};

const getVerySatisfiedPer = (instructor: any) => {
  const verySatisfiedValue = instructor.satisfactionCount.verySatisfied;

  return ((Number(verySatisfiedValue) / Number(getTotalcount(instructor))) * 100).toFixed(1);
};

/* videoの再生 */
const videoPlayer = ref<(HTMLVideoElement | null)[]>([]);
const togglePlay = (index: number) => {
  const player = videoPlayer.value[index];
  if (player) {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
    emit('play',!player.paused);
  }
};

/* 満足度件数の表示 */
const labels = ['大変満足', 'ほぼ満足', 'まあまあ', 'やや不満', '大変不満'];

const getTotalcount = (instructor: any) => {
  if (!instructor.satisfactionCount) return 0;
  const data: number[] = Object.values(instructor.satisfactionCount);

  return data.reduce((acc: number, curr: number) => acc + curr, 0);
};

/* パネルのアコーディオン */
const showDetails = ref([
  // 同期パネルの分とランキングのパネル
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

const toggleDetails = (idx: number) => {
  showDetails.value[idx] = !showDetails.value[idx];
  emit('open',showDetails.value[idx]);
};

/* レビューを追加表示するボタン */
const showReviewsCount = ref([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
const maxReviewsCount = (instructor: any) => {
  return instructor && instructor.reviews ? activeInstructor.value?.reviews.length : 0;
};

const showMoreReviews = (instructor: any, idx: number) => {
  showReviewsCount.value[idx] = Math.min(
    showReviewsCount.value[idx] + 4,
    maxReviewsCount(instructor)
  );
  emit('moreView');
};

/* 2位以降の講師の表示 */
// const [topInstructors, otherInstructors] = [[instructors.value[0]], instructors.value.slice(1)] as any[];
const showOtherInstructors = ref(false);
</script>

<style scoped>
#satisfuction-index-ranking {

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: none;
  }
  .swiper-slide:not(.swiper-slide-active)::before {
    background: rgba(102, 102, 102, 0.8);
  }
}
</style>
