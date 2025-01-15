// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja-JP',
      },
      title: 'Kimono | On-girl 着付け教室',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '着物も小物も無料プレゼントしちゃう着付け教室。レッスンはリアルでもオンラインでもお好みで。' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      ],
    }
  },
  modules: ['shared', '@nuxtjs/tailwindcss', 'nuxt-swiper', '@nuxtjs/critters',],
  swiper: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  critters: {
    config: {
      preload: "js",
      inlineFonts: true,
      inlineThreshold: 10240,
    }
  },
  hooks: {
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        const file = manifest[key];
        file.preload = true;
        file.prefetch = false;
      }
    },
  },
})
