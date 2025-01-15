<template>
  <div class="common">
    <img
      src="/scheader-images/pc-header-logo.svg"
      alt="logo"
      width="140"
      height="140"
      loading="lazy"
      decoding="async"
      class="open-menu-logo"
    />
    <h3>広がり、深まる、<br />セカンドコミュニティの学び</h3>
    <div class="open-menu-content-title">
      <span class="span-1">01</span>
      <hr />
      <h4>文化・芸術系<br />サービス</h4>
      <p>
        ゆりかごから墓場まで。<br />人々の日々の暮らしに彩りを添える<br />様々なサービスを展開しています。
      </p>
    </div>
    <div class="age-line">
      <div v-for="(age, i) in ages" :key="i">
        <img
          :src="age.image"
          :alt="age.en_title"
          loading="lazy"
          decoding="async"
        />
        <h5>{{ age.en_title }}</h5>
        <h6>{{ age.ja_title }}</h6>
      </div>
    </div>
    <div class="open-menu-content">
      <div v-for="(content, i) of maincontents" :key="i">
        <h4 v-html="content.title"></h4>
        <picture>
          <source
            :srcset="content.sp_image"
            media="(max-width: 1000px)"
            loading="lazy"
            decoding="async"
          />
          <img
            :src="content.image"
            :alt="content.title"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div v-for="(item, i) of content.items" :key="i">
          <div
            v-for="(atom, i) of item"
            :key="i"
            class="open-menu-content-item"
          >
            <img
              :src="atom.banner"
              :alt="atom.en_title"
              loading="lazy"
              decoding="async"
            />
            <div class="item-logo">
              <img
                :src="atom.logo"
                :alt="atom.en_title"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="item-title">
              <h5 v-html="atom.en_title"></h5>
              <h6 v-html="atom.ja_title"></h6>
            </div>
            <p v-html="atom.description"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="open-menu-content-title">
      <span class="span-2">02</span>
      <hr />
      <h4>トーラルライフサポート<br />サービス</h4>
      <p>
        文化・芸術のスクールからスタートした<br />
        Second Communityですが、<br />
        現在では人生のステージごとの課題を<br />
        トータルで解決するサービスも提供しています。<br />
      </p>
    </div>
    <div class="open-menu-photos">
      <div class="circle">
        <img
          src="/scheader-images/menu-photo-1.webp"
          alt="photo"
          loading="lazy"
          decoding="async"
          width="100%"
          height="auto"
        />
        <p>資産形成</p>
      </div>
      <div class="circle-row">
        <div class="circle">
          <img
            src="/scheader-images/menu-photo-2.webp"
            alt="photo"
            loading="lazy"
            decoding="async"
            width="100%"
            height="auto"
          />
          <p>就職・転職</p>
        </div>
        <div class="circle">
          <img
            src="/scheader-images/menu-photo-4.webp"
            alt="photo"
            loading="lazy"
            decoding="async"
            width="100%"
            height="auto"
          />
          <p>
            教育・<br />
            リスキリング
          </p>
        </div>
      </div>
      <div class="circle">
        <img
          src="/scheader-images/menu-photo-3.webp"
          alt="photo"
          loading="lazy"
          decoding="async"
          width="100%"
          height="auto"
        />
        <p>婚活・恋活</p>
      </div>
    </div>
    <div class="open-menu-content-02">
      <div v-for="(content, i) of secondcontents" :key="i">
        <div class="content-02-image">
          <h4 v-html="content.title"></h4>
          <picture>
            <source
              :srcset="content.sp_image"
              media="(max-width: 1000px)"
              loading="lazy"
              decoding="async"
            />
            <img
              :src="content.image"
              :alt="content.title"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div
          v-for="(item, i) of content.items"
          :key="i"
          class="open-menu-content-item"
        >
          <img
            :src="item.banner"
            :alt="item.en_title"
            loading="lazy"
            decoding="async"
          />
          <div class="item-logo">
            <img
              :src="item.logo"
              :alt="item.en_title"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="item-title">
            <h5 v-html="item.en_title"></h5>
            <h6 v-html="item.ja_title"></h6>
          </div>
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>
    <div class="open-menu-content-title">
      <span class="span-3">03</span>
      <hr />
      <h4>
        プラットフォーム<br />
        サービス
      </h4>
      <p>
        ゆりかごから墓場まで伴走する教育サービス。<br />
        恋愛・結婚から資産形成や転職までサポート。<br />
        セカンドコミュニティの生活圏・経済圏を支える<br />
        プラットフォームが全てあります。
      </p>
    </div>
    <div class="content-3-image">
      <picture>
        <source
          srcset="/scheader-images/content-3-image-sp.webp"
          media="(max-width: 1000px)"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/scheader-images/content-3-image.webp"
          alt="banner"
          width="1000"
          height="386"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
    <div class="open-menu-content-03">
      <div v-for="(content, i) of thirdcontents" :key="i">
        <div>
          <img
            :src="content.logo"
            :alt="content.title"
            loading="lazy"
            decoding="async"
          />
          <h5 v-html="content.title"></h5>
        </div>
        <img
          :src="content.banner"
          :alt="content.title"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <div class="open-menu-content-title">
      <hr />
      <h4>Second Community<br />会社案内</h4>
    </div>
    <div class="content-last-banner">
      <picture>
        <source
          srcset="/scheader-images/content-last-banner-sp.webp"
          media="(max-width: 1000px)"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/scheader-images/content-last-banner.webp"
          alt="企業サイトへ"
          width="1000"
          height="240"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ages = [
  {
    image: "/scheader-images/age-line-1.webp",
    en_title: "Kids",
    ja_title: "0歳〜小学生",
  },
  {
    image: "/scheader-images/age-line-2.webp",
    en_title: "Youth",
    ja_title: "中高生",
  },
  {
    image: "/scheader-images/age-line-3.webp",
    en_title: "Adult",
    ja_title: "大人",
  },
  {
    image: "/scheader-images/age-line-4.webp",
    en_title: "Senior",
    ja_title: "シニア",
  },
];
const maincontents = [
  {
    title: "Kids",
    image: "/scheader-images/header-content-1.webp",
    sp_image: "/scheader-images/header-content-1-sp.webp",
    items: [
      [
        {
          banner: "/scheader-images/eys-kids-baner-1.webp",
          logo: "/scheader-images/eys-kids-logo-1.svg",
          en_title: "EYS-Kids",
          ja_title: "こども藝術カレッジ",
          description: "こどものための<br>総合藝術学習",
        },
        {
          banner: "/scheader-images/eys-kids-baner-2.webp",
          logo: "/scheader-images/eys-kids-logo-2.svg",
          en_title: "EYS-Kids",
          ja_title: "こどもSTE-LAMらぼ",
          description: "こどものための<br>早期知育教育",
        },
        {
          banner: "/scheader-images/eys-kids-baner-3.webp",
          logo: "/scheader-images/eys-kids-logo-3.svg",
          en_title: "地球住所",
          ja_title: "for EYS-Kids",
          description: "2歳〜10歳までの<br>STE-LAM学童保育",
        },
        {
          banner: "/scheader-images/eys-kids-baner-4.webp",
          logo: "/scheader-images/eys-kids-logo-4.svg",
          en_title: "EYS-Kids",
          ja_title: "モンテッソーリ教育<br>マイコンパス",
          description: "幼児能力開発スクール",
        },
      ],
      [
        {
          banner: "/scheader-images/eys-kids-baner-5.webp",
          logo: "/scheader-images/eys-kids-logo-5.svg",
          en_title: "EYS-Kids",
          ja_title: "音楽教室",
          description: "お子様の芸術的成長に<br>コミットする音楽教室",
        },
        {
          banner: "/scheader-images/eys-kids-baner-6.webp",
          logo: "/scheader-images/eys-kids-logo-6.svg",
          en_title: "EYS-Kids",
          ja_title: "バレエアカデミー",
          description: "美しく成長を彩るこども<br>向けバレエ教室",
        },
        {
          banner: "/scheader-images/eys-kids-baner-7.webp",
          logo: "/scheader-images/eys-kids-logo-7.svg",
          en_title: "EYS-Kids",
          ja_title: "ダンスアカデミー",
          description: "こどもの心とからだを<br>伸ばす",
        },
        {
          banner: "/scheader-images/eys-kids-baner-8.webp",
          logo: "/scheader-images/eys-kids-logo-8.svg",
          en_title: "EYS-Kids",
          ja_title: "英語道場",
          description: "日本にいてもネイティ<br>ブに育つ英語教室",
        },
        {
          banner: "/scheader-images/eys-kids-baner-9.webp",
          logo: "/scheader-images/eys-kids-logo-9.svg",
          en_title: "EYS-Kids",
          ja_title: "Art&Design<br>アカデミー",
          description: "アートとデザインで<br>子供の感性を育む",
        },
      ],
    ],
  },
  {
    title: "Youth",
    image: "/scheader-images/header-content-2.webp",
    sp_image: "/scheader-images/header-content-2-sp.webp",
    items: [
      [
        {
          banner: "/scheader-images/inspiart-banner-1.webp",
          logo: "/scheader-images/inspiart-logo-1.webp",
          en_title: "Inspiart Z",
          ja_title: "Music School",
          description: "中高生向け<br>音楽教室",
        },
        {
          banner: "/scheader-images/inspiart-banner-2.webp",
          logo: "/scheader-images/inspiart-logo-1.webp",
          en_title: "Inspiart Z",
          ja_title: "Dance School",
          description: "中高生向け<br>ダンススクール",
        },
        {
          banner: "/scheader-images/inspiart-banner-3.webp",
          logo: "/scheader-images/inspiart-logo-1.webp",
          en_title: "Inspiart Z",
          ja_title: "Youtuber キャンパス",
          description: "中高生向け<br>Youtuber育成",
        },
        {
          banner: "/scheader-images/inspiart-banner-4.webp",
          logo: "/scheader-images/inspiart-logo-1.webp",
          en_title: "Inspiart Z",
          ja_title: "Music School",
          description: "モデルスクール<br>モデル育成",
        },
      ],
    ],
  },
  {
    title: "Adult",
    image: "/scheader-images/header-content-3.webp",
    sp_image: "/scheader-images/header-content-3-sp.webp",
    items: [
      [
        {
          banner: "/scheader-images/adult-banner-1.webp",
          logo: "/scheader-images/adult-logo-1.svg",
          en_title: "EYS",
          ja_title: "音楽教室",
          description: "全70種の豊富なレッスン<br>大人のための音楽教室",
        },
        {
          banner: "/scheader-images/adult-banner-2.webp",
          logo: "/scheader-images/adult-logo-2.svg",
          en_title: "EYS",
          ja_title: "ワインスクール",
          description: "初心者にやさしい<br>ワインスクール",
        },
        {
          banner: "/scheader-images/adult-banner-3.webp",
          logo: "/scheader-images/adult-logo-3.svg",
          en_title: "EYS",
          ja_title: "華道＆フラワー教室",
          description: "気軽に自由に楽しめる<br>華道＆フラワー教室",
        },
      ],
      [
        {
          banner: "/scheader-images/adult-banner-4.webp",
          logo: "/scheader-images/adult-logo-4.svg",
          en_title: "EYS",
          ja_title: "大人の美術教室",
          description: "大人のための<br>美術＆アート教室",
        },
        {
          banner: "/scheader-images/adult-banner-5.webp",
          logo: "/scheader-images/adult-logo-5.svg",
          en_title: "EYS",
          ja_title: "ダンススクール",
          description: "楽しく学べる<br>大人のダンススクール",
        },
        {
          banner: "/scheader-images/adult-banner-6.webp",
          logo: "/scheader-images/adult-logo-6.svg",
          en_title: "EYS",
          ja_title: "茶道教室",
          description: "コピーコピー<br>コピーコピーコピーコピー",
        },
        {
          banner: "/scheader-images/adult-banner-7.webp",
          logo: "/scheader-images/adult-logo-7.svg",
          en_title: "EYS",
          ja_title: "陶芸教室",
          description: "コピーコピー<br>コピーコピーコピーコピー",
        },
      ],
      [
        {
          banner: "/scheader-images/adult-banner-8.webp",
          logo: "/scheader-images/adult-logo-8.svg",
          en_title: "ON-girl",
          ja_title: "ミュージックスクール",
          description: "女性のための<br>音楽教室",
        },
        {
          banner: "/scheader-images/adult-banner-9.webp",
          logo: "/scheader-images/adult-logo-9.svg",
          en_title: "ON-girl",
          ja_title: "着付け教室",
          description: "着物をプレゼントする<br>着付け教室",
        },
        {
          banner: "/scheader-images/adult-banner-10.webp",
          logo: "/scheader-images/adult-logo-10.svg",
          en_title: "ON-girl",
          ja_title: "ダンススクール",
          description: "楽しく学べる大人女性の<br>ダンススクール",
        },
        {
          banner: "/scheader-images/adult-banner-11.webp",
          logo: "/scheader-images/adult-logo-11.svg",
          en_title: "ON-girl",
          ja_title: "バレエ教室",
          description: "楽しく踊れる大人女性の<br>バレエスクール",
        },
      ],
    ],
  },
  {
    title: "Senior",
    image: "/scheader-images/header-content-4.webp",
    sp_image: "/scheader-images/header-content-4-sp.webp",
    items: [
      [
        {
          banner: "/scheader-images/senior-banner-1.webp",
          logo: "/scheader-images/senior-logo-1.svg",
          en_title: "音人倶楽部",
          ja_title: "音人倶楽部",
          description: "シニアのための音楽教室",
        },
      ],
    ],
  },
];
const secondcontents = [
  {
    title: "資産形成",
    image: "/scheader-images/assets-image.webp",
    sp_image: "/scheader-images/assets-image-sp.webp",
    items: [
      {
        banner: "/scheader-images/assets-banner-1.webp",
        logo: "/scheader-images/assets-logo-1.svg",
        en_title: "EYS",
        ja_title: "保険クラウド",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
      {
        banner: "/scheader-images/assets-banner-2.webp",
        logo: "/scheader-images/assets-logo-2.svg",
        en_title: "EYS",
        ja_title: "マネーアカデミー",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
    ],
  },
  {
    title: "教育・<br>リスキリング",
    image: "/scheader-images/education-image.webp",
    sp_image: "/scheader-images/education-image-sp.webp",
    items: [
      {
        banner: "/scheader-images/education-banner-1.webp",
        logo: "/scheader-images/education-logo-1.svg",
        en_title: "EYSキャリアアカデミー",
        ja_title: "モンテッソーリ<br>＆リトミック資格",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
      {
        banner: "/scheader-images/education-banner-1.webp",
        logo: "/scheader-images/education-logo-1.svg",
        en_title: "EYSキャリアアカデミー",
        ja_title: "ヨガ国際資格<br>（RYT）",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
      {
        banner: "/scheader-images/education-banner-1.webp",
        logo: "/scheader-images/education-logo-1.svg",
        en_title: "EYSキャリアアカデミー",
        ja_title: "戦略コンサルタント<br>養成講座",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
    ],
  },
  {
    title: "就職・転職",
    image: "/scheader-images/change-image.webp",
    sp_image: "/scheader-images/change-image-sp.webp",
    items: [
      {
        banner: "/scheader-images/change-banner-1.webp",
        logo: "/scheader-images/change-logo-1.svg",
        en_title: "地球住所",
        ja_title: "エンジニア村",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
      {
        banner: "/scheader-images/change-banner-2.webp",
        logo: "/scheader-images/change-logo-2.svg",
        en_title: "EYS",
        ja_title: "音楽教室 講師採用",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
    ],
  },
  {
    title: "教育・<br>リスキリング",
    image: "/scheader-images/love-image.webp",
    sp_image: "/scheader-images/love-image-sp.webp",
    items: [
      {
        banner: "/scheader-images/love-banner-1.webp",
        logo: "/scheader-images/love-logo-1.svg",
        en_title: "EYS",
        ja_title: "スク婚",
        description: "コピーコピー<br>コピーコピーコピーコピー",
      },
    ],
  },
];
const thirdcontents = [
  {
    logo: "/scheader-images/content-3-logo-1.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-1.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-2.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-2.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-3.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-3.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-4.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-4.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-5.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-5.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-6.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-6.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-7.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-7.webp",
  },
  {
    logo: "/scheader-images/content-3-logo-8.svg",
    title: "セカンドコミュニティの<br>生活圏・経済圏",
    banner: "/scheader-images/content-3-banner-8.webp",
  },
];
</script>
<style lang="scss" scoped>
.common {
  display: block;
  > .open-menu-logo {
    width: 140px;
    height: auto;
    display: block;
    margin-inline: auto;
    @media (max-width: 1000px) {
      width: 100px;
    }
  }
  > h3 {
    font-size: 18px;
    margin-top: 27px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 1000px) {
      font-size: 14px;
      margin-top: 17px;
    }
  }
  > .open-menu-content-title {
    position: relative;
    margin-top: 50px;
    margin-inline: auto;
    width: max-content;
    @media (max-width: 1000px) {
      margin-top: 70px;
    }
    > span {
      font-size: 140px;
      font-family: system-ui, sans-serif;
      font-weight: bold;
      opacity: 0.25;
      font-style: italic;
      position: absolute;
      @media (max-width: 1000px) {
        font-size: 80px;
      }
    }
    > .span-1 {
      left: -95px;
      @media (max-width: 1000px) {
        left: -105px;
      }
    }
    > .span-2 {
      right: -150px;
      @media (max-width: 1000px) {
        right: -80px;
      }
    }
    > .span-3 {
      left: -100px;
      @media (max-width: 1000px) {
        left: -75px;
      }
    }
    > hr {
      width: 40px;
      height: 2px;
      border: none;
      margin-inline: auto;
      background-color: #ffffff;
    }
    > h4 {
      font-size: 30px;
      text-align: center;
      font-weight: bold;
      margin-top: 44px;
      @media (max-width: 1000px) {
        font-size: 20px;
        margin-top: 36px;
      }
    }
    > p {
      font-size: 16px;
      margin-top: 23px;
      font-weight: bold;
      text-align: center;
      @media (max-width: 1000px) {
        font-size: 11px;
        margin-top: 18px;
      }
    }
  }
  > .age-line {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 100px;
    margin-top: 38px;
    @media (max-width: 1000px) {
      margin-top: 18px;
      gap: 40px;
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 47px;
      width: 600px;
      height: 6px;
      background-color: white;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 1000px) {
        width: 270px;
        height: 3px;
        top: 20px;
      }
    }
    > div {
      position: relative;
      width: 100px;
      @media (max-width: 1000px) {
        width: max-content;
      }
      > img {
        width: 100%;
        height: auto;
        border-radius: 100px;
        border: solid 6px #ffffff;
        box-shadow: 0 10px 20px #00000033;
        @media (max-width: 1000px) {
          border-width: 3px;
          width: 40px;
        }
      }
      > h5 {
        font-size: 24px;
        margin-top: 10px;
        font-family: system-ui, sans-serif;
        font-weight: bold;
        font-style: italic;
        @media (max-width: 1000px) {
          font-size: 16px;
          margin-top: 0;
        }
      }
      > h6 {
        font-size: 15px;
        font-weight: 600;
        @media (max-width: 1000px) {
          font-size: 9px;
        }
      }
    }
  }
  > .open-menu-content {
    position: relative;
    margin-top: 38px;
    width: 100%;
    @media (max-width: 1000px) {
      margin-top: 30px;
      padding-inline: 20px;
    }
    > div {
      position: relative;
      margin-top: 50px;
      @media (max-width: 1000px) {
        margin-top: 10px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
      }
      > h4 {
        position: absolute;
        font-size: 30px;
        font-family: system-ui, sans-serif;
        text-align: center;
        align-content: center;
        font-weight: bold;
        font-style: italic;
        color: #333333;
        background-color: white;
        width: 140px;
        height: 140px;
        border-radius: 140px;
        z-index: 1;
        left: 0;
        top: 0;
        box-shadow: 0 10px 20px #00000033;
        @media (max-width: 1000px) {
          width: 112px;
          height: 112px;
          border: solid 1px white;
          background-color: #333333;
          color: white;
          font-size: 20px;
          left: -50px;
          padding-left: 40px;
          text-align: left;
        }
      }
      > picture {
        > img {
          position: absolute;
          background-color: #333333;
          top: 0;
          left: 0;
          @media (max-width: 1000px) {
            position: relative;
            z-index: 2;
            background-color: transparent;
          }
        }
      }
      > div {
        display: flex;
        gap: 20px;
        justify-content: end;
        @media (max-width: 1000px) {
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
      }
    }
    > div:not(:first-of-type) {
      > h4 {
        &::before {
          content: "";
          position: absolute;
          left: 70px;
          top: 0;
          transform: translate(-50%, -50%);
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          background-color: #dddddd;
          @media (max-width: 1000px) {
            left: 60px;
          }
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 70px;
      display: block;
      top: 200px;
      width: 1px;
      height: calc(100% - 300px);
      background-color: #dddddd;
      @media (max-width: 1000px) {
        top: 100px;
        left: 30px;
        height: calc(100% - 300px);
      }
    }
  }
  .open-menu-photos {
    margin-top: 50px;
    width: 100%;
    position: relative;
    > div {
      margin-inline: auto;
    }
    > .circle-row {
      display: flex;
      gap: 122px;
      width: max-content;
      margin-block: -20px;
      @media (max-width: 1000px) {
        gap: 60px;
      }
    }
    .circle {
      width: 180px;
      height: 180px;
      border-radius: 180px;
      border: solid 6px #ffffff;
      position: relative;
      @media (max-width: 1000px) {
        width: 120px;
        height: 120px;
        border-width: 3px;
      }
      > img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: brightness(0.8);
      }
      > p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        font-weight: bold;
        width: max-content;
        text-align: center;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      aspect-ratio: 1;
      border-radius: 300px;
      border: solid 30px #ffffff40;
      @media (max-width: 1000px) {
        width: 200px;
        border-width: 20px;
      }
    }
  }
  > .open-menu-content-02 {
    margin-top: 42px;
    width: 100%;
    > div {
      display: flex;
      align-items: start;
      gap: 20px;
      position: relative;
      padding-bottom: 48px;
      @media (max-width: 1000px) {
        flex-direction: column !important;
        gap: 10px;
      }
      > .content-02-image {
        display: flex;
        align-items: start;
        gap: 20px;
        > h4 {
        position: relative;
        font-size: 18px;
        text-align: center;
        align-content: center;
        font-weight: bold;
        color: #333333;
        background-color: white;
        width: 140px;
        height: 140px;
        border-radius: 140px;
        @media (max-width: 1000px) {
          width: 112px;
          height: 112px;
          border: solid 1px white;
          background-color: #333333;
          color: white;
          font-size: 14px;
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          background-color: #dddddd;
        }
      }
      > picture > img {
        position: relative;
        margin-inline: 10px;
        width: max-content;
        height: auto;
        @media (max-width: 1000px) {
          height: 112px;
          width: auto;
          margin-inline: 0;
        }
      }
      }
      &::before {
        content: "";
        position: absolute;
        background-color: #dddddd;
        top: 70px;
        display: block;
        height: 1px;
        width: 100%;
        @media (max-width: 1000px) {
          top: 56px;
        }
      }
    }
    > div:nth-of-type(even) {
      flex-direction: row-reverse;
      .content-02-image {
        flex-direction: row-reverse;
        @media (max-width: 1000px) {
          gap: 40px;
        }
        > h4 {
          margin-right: -30px;
          padding-right: 30px;
          &::after {
            left: -7px;
          }
        }
      }
    }
    > div:nth-of-type(odd) {
      flex-direction: row;
      .content-02-image {
        flex-direction: row;
        > h4 {
          margin-left: -30px;
          padding-left: 30px;
          &::after {
            right: -7px;
          }
        }
      }
    }
  }
  .content-3-image {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 28px;
    > picture > img {
      width: 100%;
      height: auto;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        #333333 0%,
        #33333300 40%,
        #33333300 60%,
        #333333 100%
      );
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        #333333 0%,
        #33333300 40%,
        #33333300 60%,
        #333333 100%
      );
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  .open-menu-content-03 {
    margin-top: 42px;
    padding-bottom: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
      padding-inline: 20.5px;
    }
    > div {
      width: 235px;
      height: 250px;
      background-color: white;
      @media (max-width: 1000px) {
        width: 157px;
        height: 160px;
      }
      > img {
        @media (max-width: 1000px) {
          height: auto;
          width: 100%;
        }
      }
      > div {
        width: 100%;
        text-align: center;
        height: 130px;
        padding-block: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 1000px) {
          padding-block: 10px;
          display: block;
          height: 80px;
        }
        >img {
          @media (max-width: 1000px) {
            height: 30px;
            width: auto;
          }
        }
        > h5 {
          font-size: 12px;
          font-weight: 300;
          color: #333333;
          @media (max-width: 1000px) {
            font-size: 11px;
            display: block;
          }
        }
      }
    }
  }
  .open-menu-content-item {
    position: relative;
    width: 150px;
    padding-top: 30px;
    text-align: center;
    @media (max-width: 1000px) {
      width: 100%;
      padding-top: 0;
      padding-left: 63px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-align: left;
    }
    > img {
      width: 100%;
      border-radius: 18px;
      border: solid 4px #ffffff;
      @media (max-width: 1000px) {
        display: none;
      }
    }
    > .item-logo {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 80px;
      margin-top: -40px;
      margin-inline: auto;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 20px #00000016;
      @media (max-width: 1000px) {
        width: 40px;
        height: 40px;
        margin-top: -20px;
        border-radius: 0;
        margin-top: 0;
        margin-inline: unset;
        > img {
          max-width: 100%;
          height: 30px;
        }
      }
    }
    h5 {
      font-size: 12px;
      font-weight: 500;
      margin-top: 4px;
    }
    h6 {
      font-size: 14px;
      font-weight: 600;
      @media (max-width: 1000px) {
        br {
          display: none;
        }
      }
    }
    > p {
      font-size: 12px;
      font-weight: 400;
      margin-top: 4px;
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  .content-last-banner {
    margin-top: 80px;
    @media (max-width: 1000px) {
      margin-top: 40px;
      padding-inline: 20px;
      position: relative;
      z-index: 10;
    }
    > picture > img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
