<template>
  <ul class="cover-link">
    <li v-for="(link, index) in links" :key="index">
      <nuxt-link :href="link.url">{{ link.title }}</nuxt-link>
      <svg
        v-if="links.length !== index + 1"
        xmlns="http://www.w3.org/2000/svg"
        width="6.166"
        height="10"
        viewBox="0 0 6.166 10"
      >
        <path
          id="arrow"
          d="M20.336,10l5-5-5-5L19.17,1.167,23,5,19.17,8.833Z"
          transform="translate(-19.17)"
          fill="#fff"
        />
      </svg>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface Link {
  title: string;
  url: string;
}

defineProps<{ links: Link[] }>();
</script>

<style lang="scss" scoped>
.cover-link {
  width: max-content;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  border-radius: 999px;
  gap: 10px;
  @media (max-width: 1024px) {
    padding: 2px 20px 2px 8px;
  }

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 10px;
    font-weight: 600;
    gap: 25px;
    opacity: 0.7;
    &:last-of-type {
      opacity: 1;
    }
    > a {
      text-decoration: none;
    }
    @media (max-width: 1024px) {
      font-size: 8px;
    }
  }
}
</style>
