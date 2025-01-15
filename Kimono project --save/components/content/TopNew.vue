<script lang="ts" setup>
interface News {
  title: string;
  description: string;
  type: number; // Change here if the type is a number
  type_title: string;
  media_type: string;
  media_src: string;
  owner_name: string;
  owner_photo: string;
  comment: string;
  update_at: string;
  comment_at: string;
}

// Define the props
const props = defineProps<{
  news: News;
}>();
</script>

<template>
  <div class="news-item-content">
    <div class="news-item">
      <div class="news-item-type">
        <span :class="'type-' + news.type.toString()">{{
          news.type_title
        }}</span>
        <span>{{ news.update_at }} UPDATE</span>
      </div>
      <div class="news-item-main">
        <h4>{{ news.title }}</h4>
        <h6>{{ news.description }}</h6>
      </div>
      <div class="news-item-media">
        <img v-if="news.media_type === 'image'" :src="news.media_src" loading="lazy" decoding="async" :alt="news.title" />
        <video v-else-if="news.media_type === 'video'" controls :title="news.title">
          <source :src="news.media_src" />
        </video>
      </div>
      <div class="news-item-comment">
        <div class="news-item-owner">
          <img :src="news.owner_photo" :alt="news.owner_name" loading="lazy" decoding="async" width="40" height="40" />
          <div>
            <span>{{ news.comment_at }}</span>
            <h5>{{ news.owner_name }}</h5>
          </div>
        </div>
        <div class="news-comment-text">
          <p>{{ news.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-item-content {
  padding: 0 10px 0 20px;
  position: relative;
  width: 265px;
  min-width: 265px;

  >.news-item {
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;

    >.news-item-type {
      width: 100%;
      padding: 10px;
      overflow: hidden;
      font-size: 10px;

      >span:first-of-type {
        padding: 6px 10px;
        color: #ffffff;
        border-radius: 4px;
        position: absolute;
        top: 10px;
        left: 10px;
      }

      >span:last-of-type {
        float: right;
        padding: 6px 0;
        color: #999999;
        font-family: 'roboto', sans-serif;
      }

      >.type-1 {
        background-color: #e39597;
      }

      >.type-2 {
        background-color: #a0b6df;
      }

      >.type-3 {
        background-color: #b2ca42;
      }
    }

    >.news-item-main {
      padding: 0 10px 10px;

      >h4 {
        font-size: 14px;
        color: var(--text-black);
        margin-bottom: 10px;
      }

      >h6 {
        font-size: 11px;
      }
    }

    >.news-item-media {
      >* {
        width: 100%;
        aspect-ratio: 235/206;
      }
    }

    >.news-item-comment {
      padding: 0 10px 10px;

      >.news-item-owner {
        display: flex;
        gap: 8px;
        align-items: center;

        >img {
          box-shadow: 0 2px 5px #00000026;
          border-radius: 999px;
        }

        span {
          font-size: 10px;
          color: #999999;
          font-family: sans-serif;
        }

        h5 {
          padding-left: 2px;
          font-size: 12px;
          color: var(--text-black);
        }
      }

      >.news-comment-text {
        position: relative;
        margin-top: 10px;

        &::after {
          position: absolute;
          top: -6px;
          left: 13px;
          content: "";
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 6px solid #f6f6f6;
        }

        >p {
          font-size: 10px;
          border-radius: 5px;
          padding: 10px;
          color: var(--text-main);
          background-color: #f6f6f6;
        }
      }
    }
  }
}
</style>