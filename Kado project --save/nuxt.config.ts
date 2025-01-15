// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja-JP',
      },
      title: 'Kado | Eys Community',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '貴方の思うまま、気軽に自由に楽しめる、大人の華道＆フラワーアレンジメント教室。初心者・まずは無料体験レッスンを！' }
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
  runtimeConfig: {
    public: {
      type: '華道',
      apiBase: 'https://api-dev.2nd-community.com',
      httpHost: 'https://local.2nd-community.com:3170',
      authBase: 'https://gate-dev.2nd-community.com', 
      authClientId: 'UUo1U504wKZ1eo9dKepJ83nLwrelFif_ufFhCz8PrxU',
      authClientSecret: 'vgKzj3Z3tIAXOBkrJdTJ4tRJGxQFjAW3-jZ1_fR7ZLA',
    }
  },
})
