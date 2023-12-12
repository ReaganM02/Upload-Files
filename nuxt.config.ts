// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: './_nuxt/images'
      }
    },
    devStorage: {
      fs: {
        driver: 'fs',
        base: './images'
      },
    },
    serverAssets: [
      {
        baseName: 'mail',
        dir: './assets/mail',
      },
    ],
  },
  devtools: true
});
