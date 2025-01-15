<template>
  <section class="pt-[50px] max-lg:pt-10">
    <div>
      <img
        src="/images/course-more-title.svg"
        alt="enjoy"
        width="223"
        height="70"
        loading="lazy"
        decoding="async"
        class="w-[223px] h-auto mx-auto max-lg:w-[159px]"
      />
      <h3
        class="text-[30px] tracking-[0.2em] font-bold text-center mt-5 max-lg:text-xl max-lg:mt-4"
      >
        資格が取れるコースも充実！
      </h3>
    </div>
    <div
      class="max-w-[1000px] w-full mx-auto flex justify-between pt-[26px] pb-5 max-lg:gap-5 max-lg:px-2.5 max-lg:overflow-x-scroll"
    >
      <div v-for="(offer, i) of offers" :key="i">
        <div
          class="relative w-[318px] flex flex-col shadow-lg justify-center rounded-[6px] overflow-hidden max-lg:w-[235px]"
        >
          <img
            :src="offer.banner_img"
            width="318"
            height="211"
            :alt="offer.for"
            loading="lazy"
            class="w-full h-auto"
          />
          <span
            class="py-2 pl-2.5 pr-6 bg-gradient-to-r text-white max-lg:text-[10px] max-lg:py-[5px] font-bold absolute top-[14px] left-0 [clip-path:polygon(0_0,100%_0,calc(100%-15px)_100%,0_100%)]"
            :class="
              i === 0
                ? 'from-[#7594EA] to-[#8DF2DF]'
                : i === 1
                  ? 'from-[#179F9F] to-[#B7F2BE]'
                  : 'from-[#F0917E] to-[#EAE8C6]'
            "
            >{{ offer.for }}</span
          >
          <button
            aria-label="hard"
            class="block w-[54px] h-[54px] rounded-full shadow-md absolute top-1.5 right-1.5 bg-white bg-[url('/images/hard-grey-line.svg')] bg-no-repeat bg-center bg-[length:25px]"
          ></button>
          <div
            class="px-1.5 py-3 bg-white text-[13px] leading-6 max-lg:text-[10px] max-lg:tracking-tighter"
          >
            <div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">費用</b>
                <span>:</span>
                <p class="font-bold">
                  <span
                    class="text-[30px] max-lg:text-lg roboto text-[#EE88AA] font-bold italic"
                    >{{ offer.cost }}</span
                  >
                  円 / 月
                </p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">ジャンル</b>
                <span>:</span>
                <p>{{ offer.genre }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">コース</b>
                <span>:</span>
                <p>{{ offer.course }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">回数</b>
                <span>:</span>
                <p>回数の定めなし</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">期間</b>
                <span>:</span>
                <p>{{ offer.duration }}</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">開催方法</b>
                <span>:</span>
                <p>
                  <span
                    class="py-0.5 pl-2 pr-4 text-white bg-gradient-to-r from-[#7799FF] to-[#77DDFF] rounded-full mr-1 max-lg:pr-1"
                    >{{ offer.method }}</span
                  >
                  <span
                    class="py-0.5 pl-2 pr-4 text-white bg-[#DDDDDD] rounded-full max-lg:pr-1"
                    >動画見逃し配信</span
                  >
                </p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <b class="inline-block w-14">定員</b>
                <span>:</span>
                <p>
                  <span>{{ offer.capacity.split("/")[0] }} /</span>
                  <span class="text-[#FF93B0]">{{
                    offer.capacity.split("/")[1]
                  }}</span>
                </p>
              </div>
            </div>
            <div class="mt-[22px]">
              <p
                class="w-full text-center py-1 bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] text-[19px] font-bold text-white max-lg:text-xs"
              >
                コース
              </p>
              <div
                class="bg-[#FFEEEE30] border border-[#EEEEEE] py-2 px-[14px] flex items-center gap-3"
              >
                <img
                  :src="offer.present_img"
                  width="54"
                  height="54"
                  alt="offer present"
                  loading="lazy"
                  class="rounded-full max-lg:w-10"
                />
                <span
                  class="text-xl font-bold tracking-tighter max-lg:text-xs"
                  :style="`color: ${offer.present_color}`"
                  >{{ offer.for }}</span
                >
              </div>
            </div>
            <div class="flex items-center gap-6 mt-[10px]">
              <div class="flex items-center">
                <img
                  v-for="(follower, i) of offer.followers.slice(0, 5)"
                  :key="i"
                  :src="follower"
                  width="40"
                  height="40"
                  alt="follower"
                  class="border-2 border-white rounded-full shadow-sm -mr-2 max-lg:w-[30px]"
                />
              </div>
              <p class="text-[#9999EE] text-[13px] max-lg:text-[10px]">
                …{{ offer.follow_num }}名が担当
              </p>
            </div>
          </div>
          <div class="w-full bg-[#F9F9F9] py-3">
            <img
              :src="offer.graph_url"
              width="282"
              height="284"
              alt="offer graph"
              loading="lazy"
              class="w-[282px] h-auto mx-auto max-lg:w-[211px]"
            />
          </div>
          <div class="p-[7px]">
            <button
              class="block w-full py-2.5 bg-black text-white font-bold relative after:block after:w-[17px] after:h-[7px] after:bg-[url('/images/arrow/arrow-right-small-white.svg')] after:bg-cover after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2"
            >
              詳しく見る
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-[800px] w-full mx-auto pt-10 pb-24 max-lg:mt-5 max-lg:pb-[60px]"
    >
      <div
        class="w-full relative bg-[#AAAAFF] p-[25px_30px_30px] top_triangle max-lg:p-[13px_10px_10px]"
      >
        <h3 class="text-white text-2xl text-center font-bold max-lg:text-base">
          学ぶ励みやマイルストーンとなるように、<br />段階をおった資格と免状の取得ができます！
        </h3>
        <div
          class="flex justify-center items-center gap-[100px] mt-9 max-lg:mt-4 max-lg:gap-7"
        >
          <div
            v-for="(image, i) of [
              '/images/course-more-1.webp',
              '/images/course-more-2.webp',
              '/images/course-more-3.webp',
            ]"
            @click="select = i"
            class="rounded-full relative box-content after:hidden after:absolute after:border-x-transparent after:border-x-[22px] after:border-t-black after:border-t-[30px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-30px] max-lg:after:border-t-[16px] max-lg:after:border-x-[13px] max-lg:after:-bottom-4"
            :class="
              select === i
                ? 'border-[10px] border-black max-lg:border-[5px] after:!block'
                : ''
            "
          >
            <img
              :src="image"
              alt="course more"
              loading="lazy"
              decoding="async"
              width="120"
              height="120"
              class="w-[120px] h-auto drop-shadow-md max-lg:w-20"
            />
          </div>
        </div>
        <div class="to-table">
          <div
            v-if="select === 0"
            class="to-table-first flex flex-col gap-[1px]"
          >
            <ul
              class="bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] text-[13px] font-bold text-white flex gap-[1px] max-lg:!hidden"
            >
              <li
                v-for="(item, i) of crt_course?.theads"
                :key="i"
                class="border-r py-3 px-5 border-r-[#DDDDDD]"
                :style="`width: ${item.width}px`"
              >
                {{ item.text }}
              </li>
            </ul>
            <div
              v-for="(course, i) of crt_course?.data"
              :key="i"
              class="flex max-lg:flex-col gap-[1px]"
            >
              <div v-if="course.category" class="flex lg:gap-[1px]">
                <h5 class="w-[131px] max-lg:!px-2.5 max-lg:!text-left max-lg:w-auto max-lg:text-nowrap">{{ course.category }}</h5>
                <h6 class="lg:w-[78px] max-lg:w-[290px] max-lg:!px-2.5 max-lg:!text-left">
                  {{ course.time }}
                </h6>
              </div>
              <ul v-if="course.sub_costs" class="flex flex-col gap-[1px]">
                <li
                  v-for="(item, i) of course.sub_costs"
                  :key="i"
                  class="flex gap-[1px]"
                >
                  <h6 v-if="typeof item.subtime === 'string'" class="w-[78px] max-lg:!px-2.5 max-lg:!text-left">
                    {{ item.subtime }}
                  </h6>
                  <p
                    v-if="typeof item.subtime === 'string'"
                    class="lg:w-[422px] max-lg:w-[272px]"
                    v-html="item.overview"
                  />
                  <p v-else class="w-full" v-html="item.overview" />
                </li>
              </ul>
              <p v-if="course.overview" class="w-full">{{ course.overview }}</p>
            </div>
          </div>
          <div
            v-else-if="select === 1"
            class="to-table-second flex flex-col gap-[1px]"
          >
            <ul
              class="bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] text-[13px] font-bold text-white flex gap-[1px] max-lg:!hidden"
            >
              <li
                v-for="(item, i) of crt_course?.theads"
                :key="i"
                class="border-r py-3 pl-5 border-r-[#DDDDDD]"
                :style="`width: ${item.width}px`"
              >
                {{ item.text }}
              </li>
            </ul>
            <div class="flex flex-col gap-[1px]">
              <div
                v-for="(data, i) of crt_course?.data"
                :key="i"
                class="flex gap-[1px] max-lg:flex-col"
              >
                <template v-if="data.sub_costs">
                  <h5 v-if="data.category" class="min-w-[108px] w-[108px] max-lg:min-w-max max-lg:w-full max-lg:!text-left max-lg:!px-2.5">
                    {{ data.category }}
                  </h5>
                  <div class="flex flex-col gap-[1px]">
                    <div
                      v-for="(sub, i) of data.sub_costs"
                      :key="i"
                      class="flex gap-[1px] max-lg:flex-col"
                    >
                      <div class="flex gap-[1px] max-lg:bg-white">
                        <h5 v-if="sub.category" class="min-w-[108px] w-[108px] max-lg:min-w-max max-lg:w-max max-lg:!px-2.5 max-lg:!text-left">
                          {{ sub.category }}
                        </h5>
                        <h6 class="max-lg:!text-left max-lg:!pl-2.5" :class="sub.time === '' ? ' max-lg:hidden':''">{{ sub.time }}</h6>
                      </div>
                      <div class="flex gap-[1px]">
                        <h6 class="max-lg:!px-2.5 max-lg:!text-left" :class="sub.subtime === '' ? ' max-lg:hidden':''">{{ sub.subtime }}</h6>
                        <p v-html="sub.overview" class="w-[240px] max-lg:w-full" :class="sub.overview == '' ? ' max-lg:hidden':''" />
                        <p
                          v-if="typeof sub.description === 'string'"
                          v-html="sub.description"
                          class="w-[160px] max-lg:!px-2.5 max-lg:!text-left"
                          :class="sub.description == '' ? ' max-lg:hidden':''"
                        />
                      </div>
                    </div>
                  </div>
                  <p
                    v-if="data.description"
                    v-html="data.description"
                    class="!h-auto max-lg:!px-2.5 max-lg:!text-left"
                  />
                </template>
                <template v-else>
                  <div class="flex gap-[1px] max-lg:bg-white">
                    <h5 class="min-w-[108px] w-[108px] max-lg:min-w-max max-lg:w-max max-lg:!px-2.5 max-lg:!text-left">{{ data.category }}</h5>
                    <h6 class="w-[240px] max-lg:w-full max-lg:!text-left" :class="data.time == '' ? ' max-lg:hidden':''">{{ data.time }}</h6>
                    <h6 class="w-[240px] max-lg:w-full max-lg:!px-2.5 max-lg:!text-left" :class="data.subtime == '' ? ' max-lg:hidden':''">{{ data.subtime }}</h6>
                  </div class="max-lg:bg-white max-lg:w-full">
                    <p v-html="data.overview" class="w-[240px] max-lg:w-full max-lg:!px-2.5 max-lg:!text-left" :class="data.overview == '' ? ' max-lg:hidden':''" />
                    <p v-html="data.description" class="w-[160px] max-lg:w-full max-lg:!px-2.5 max-lg:!text-left" :class="data.description == '' ? ' max-lg:hidden':''" />
                </template>
              </div>
            </div>
          </div>
          <div v-else-if="select === 2" class="flex flex-col gap-[1px] to-table-third">
            <ul
              class="bg-gradient-to-r from-[#9999EE] to-[#E2A1C4] text-[13px] font-bold text-white flex gap-[1px] max-lg:!hidden"
            >
              <li
                v-for="(item, i) of crt_course?.theads"
                :key="i"
                class="border-r py-3 pl-5 border-r-[#DDDDDD]"
                :style="`width: ${item.width}px`"
              >
                {{ item.text }}
              </li>
            </ul>
            <div class="flex gap-[1px] max-lg:flex-col max-lg:w-full">
              <div class="flex flex-col gap-[1px] max-lg:w-full">
                <div v-for="item, i of crt_course.data" :key="i" class="flex gap-[1px] max-lg:gap-0 max-lg:w-full">
                  <h5 v-if="!item.both" class="min-w-[103px] w-[103px] max-lg:min-w-0 max-lg:w-full max-lg:!px-2.5 max-lg:!text-left" :class="item.main === '' ? ' max-lg:hidden':''">
                    {{ item.main }}
                  </h5>
                  <h5 v-if="item.both" class="w-[221px] max-lg:!px-2.5 max-lg:!text-left">{{ item.both }}</h5>
                  <h6 v-if="!item.both" class="min-w-[117px] w-[117px] max-lg:min-w-0 max-lg:w-full max-lg:!px-2.5 max-lg:!text-left" :class="item.instructor === '' ? ' max-lg:hidden':''">{{item.instructor}}</h6>
                  <p class="min-w-[280px] w-[280px] max-lg:min-w-[280px] max-lg:!px-2.5 max-lg:!text-left">{{ item.overview }}</p>
                </div>
              </div>
              <p class="!h-auto !px-3 max-lg:py-3" v-html="crt_course.description" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/course-and.svg"
        alt="and"
        width="91"
        height="91"
        class="w-[91px] h-auto mx-auto -mt-7 -mb-12 relative z-10 max-lg:w-[60px] max-lg:-mt-2.5 max-lg:-mb-4"
        loading="lazy"
        decoding="async"
      />
      <div
        class="w-full bg-[#AAAAFF] p-[30px] flex justify-between gap-5 max-lg:flex-col max-lg:px-5"
      >
        <img
          src="/images/course-more-bottom-pc.webp"
          alt="course"
          width="300"
          height="220"
          loading="lazy"
          decoding="async"
          class="w-[300px] h-auto max-lg:w-full"
        />
        <div>
          <h3
            class="text-2xl text-white mt-5 font-bold tracking-tighter border-b-[5px] border-b-white max-lg:text-base max-lg:text-center max-lg:pb-1 max-lg:border-b-[3px] max-lg:mt-0"
          >
            NFDの資格を取得することもできます！
          </h3>
          <p
            class="mt-[30px] text-white text-sm font-bold leading-[30px] max-lg:text-xs max-lg:mt-5 max-lg:leading-[18px]"
          >
            アレンジフラワー資格最⼤⼿のNFD（⽇本フラワーデザイン）の資格取得のコースもご用意していますので、体系的・本格的にお花の勉強をしたい⽅にも、安心して学んでいただけます。<br />
          </p>
        </div>
      </div>
      <button
        class="block bg-black pl-5 pr-12 py-3 mx-auto mt-[30px] text-white text-sm font-bold before:[content:'+';] before:text-xl before:mr-9"
      >
        コースをもっと見る
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Offer {
  for: string;
  banner_img: string;
  cost: string;
  genre: string;
  course: string;
  number: string;
  duration: string;
  method: string;
  capacity: string;
  present_img: string;
  present_color: string;
  follow_num: number;
  followers: string[];
  graph_url: string;
}

const offers = ref<Offer[]>([]);
offers.value = await(await fetch("/data/enjoyoffers.json")).json();
const crt_course = ref<any>(null);
const select = ref(0);
const courses = await (await fetch("/data/coursedata.json")).json();
onMounted(() => {
  crt_course.value = courses[select.value];
});
onUpdated(() => {
  crt_course.value = courses[select.value];
});
</script>
<style lang="scss" scoped>
.to-table {
  width: 100%;
  height: 600px;
  overflow-y: auto;
  border: solid 10px #dddddd;
  background-color: #dddddd;
  margin-top: 50px;
  @media (max-width: 1024px) {
    margin-top: 27px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px 2px #dddddd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
  }
  h5 {
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    background-color: white;
    padding: 11px 20px 12px;
    align-content: center;
  }
  h6 {
    font-size: 13px;
    text-align: center;
    background-color: white;
    padding: 11px 0;
    align-content: center;
    text-wrap: nowrap;
  }
  p {
    font-size: 10px;
    background-color: white;
    padding-inline: 20px;
    height: 43px;
    align-content: center;
  }
  > .to-table-first {
    > div:nth-of-type(odd) {
      h5,
      h6,
      p {
        background-color: #f9f9f9;
      }
    }
  }
  > .to-table-second {
    h6 {
      width: 100px;
      min-width: 100px;
    }
  }
}
.top_triangle {
  &::before {
    content: "";
    display: block;
    border-inline: solid 20px transparent;
    border-bottom: solid 35px #aaaaff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -30px;
  }
}
</style>
