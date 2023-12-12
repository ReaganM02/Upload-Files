// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: true,
  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: './output/public'
      }
    },
    devStorage: {
      fs: {
        driver: 'fs',
        base: './public'
      }
    }
  }
});
