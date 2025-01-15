// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ['shared', 'nuxt-swiper', '@nuxtjs/tailwindcss', '@nuxtjs/critters'],
  css: ['~/assets/styles/main.css'],
  spaLoadingTemplate: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja-JP',
      },
      title: 'InspiartZ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "InspiartZ は学生の皆さんの新しい挑戦を応援します！"
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
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
      apiBase: 'https://api-dev.2nd-community.com',
      httpHost: 'https://local.2nd-community.com:3150',
      authBase: 'https://gate-dev.2nd-community.com',
      authClientId: 'UUo1U504wKZ1eo9dKepJ83nLwrelFif_ufFhCz8PrxU',
      authClientSecret: 'vgKzj3Z3tIAXOBkrJdTJ4tRJGxQFjAW3-jZ1_fR7ZLA',
    }
  },
})
